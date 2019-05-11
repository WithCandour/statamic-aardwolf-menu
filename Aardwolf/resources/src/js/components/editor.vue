<template>
  <div>
    <div class="flex flex-wrap items-center w-full sticky">
      <h1 class="w-full my-1 text-center lg:text-left lg:flex-1">
        {{ title }}
      </h1>

      <div class="btn-group btn-group-primary my-1">
        <button type="button" class="btn btn-primary" @click.prevent="save(true)">Save</button>
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="caret"></span>
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
          <li>
            <a id="publish-continue" @click.prevent="save(false)">Save &amp; Continue</a>
          </li>
        </ul>
      </div>

      <div class="toolbox w-full">
        <ul id="aardwolf-toolbox" class="toolbox__tools sortable">
          <li class="branch" data-tool="section">
            <div class="tool">
              <span class="icon icon-folder"></span>
            </div>

            <div class="branch-row w-full flex">
              <div class="page-move drag-handle w-6 h-full"></div>
              <div class="flex items-center flex-1 p-1">
                  <div class="page-text">
                    New section
                  </div>
              </div>
            </div>
          </li>

          <li class="branch" data-tool="page">
            <div class="tool">
              <span class="icon icon-flow-tree"></span>
            </div>

            <div class="branch-row w-full flex">
              <div class="page-move drag-handle w-6 h-full"></div>
              <div class="flex items-center flex-1 p-1">
                  <div class="page-text">
                    New page
                  </div>
              </div>
            </div>
          </li>

          <li class="branch" data-tool="collection">
            <div class="tool">
              <span class="icon icon-documents"></span>
            </div>

            <div class="branch-row w-full flex">
              <div class="page-move drag-handle w-6 h-full"></div>
              <div class="flex items-center flex-1 p-1">
                  <div class="page-text">
                    New collection
                  </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>


    <div id="aardwolf-pages" class="page-tree" v-bind:class="{ '--is-hover': isSorting, '--is-saving': isSaving }">
      <ul class="sortable">
        <aardwolfbranch v-for="(index, item) in menu.items" :item.sync="item" :index="index" depth="1"></aardwolfbranch>
      </ul>
    </div>
  </div>
</template>

<script>
  const parents = (el, selector, tree = []) => {
    if (!el) return tree;
    if (el.matches(selector)) tree.push(el);

    return parents(el.parentElement, selector, tree);
  };

  const dataPath = (from) => {
    return parents(from, '.sortable.branches')
      .map(i => i.dataset['parentIndex'])
      .reverse()
      .join('/children/');
  };

  const resolve = (object, path) => {
    let item = path.reduce((object, segment) => {
      if (object == null) return null;
      if (object[segment] === null) return null;

      return object[segment];
    }, object)

    return item;
  };

  const newMenuItem = type => {
    return {
      title: `New ${ type }`,
      type: type,
      children: []
    }
  }

  export default {
    data() {
      return {
        isSorting: false,
        isSaving: false,
        menu: {}
      }
    },
    methods: {
        attachSortables() {
          // Destroy any existing sortables
          (this.sortables || []).forEach(s => s.destroy());

          // Create sortable instances
          // TODO: Either replace this with Vue Custom or a More Vue-like Library
          this.sortables = [...document.querySelectorAll('#aardwolf-pages ul')].map(el => {
            return new Sortable(el, {
              group: 'shared',
              handle: '.drag-handle',
              onStart: this.onSortableStart,
              onEnd: this.onSortableEnd
            });
          });
        },
        onSortableStart() {
          // Disable the toolbox
          this.toolbox.option('disabled', true);
          this.isSorting = true;
        },
        onSortableEnd(e) {
          let { from, oldIndex, to, newIndex } = e;

          // Generate a path to the targets
          let fromPath = dataPath(from, oldIndex);
          let toPath = dataPath(to, newIndex);

          // Get target
          let target = toPath.length
            ? resolve(this.menu.items, toPath.split('/')).children
            : this.menu.items;

          if (e.from.matches('.toolbox__tools')) {
            /*
             * NEW
             *
             * Determine which tool has been added to the menu
             */
            let newItem = newMenuItem(e.item.dataset.tool);
            target.splice(newIndex, 0, newItem);
            // Remove placeholder
            e.item.remove();
          } else {
            /*
             * MOVE
             *
             * Splice the item between menu sections
             */
            // Get source
            let source = fromPath.length
              ? resolve(this.menu.items, fromPath.split('/')).children
              : this.menu.items;

            target.splice(newIndex, 0, source.splice(oldIndex, 1)[0]);
            if (target != source) e.item.remove();
          }

          // Enable the toolbox
          this.toolbox.option('disabled', false);
          this.isSorting = false;
          this.attachSortables();
        },
        save(redirect) {
          this.isSaving = true;
          let menu = Object.assign({}, this.menu);

          this.$http.post(cp_url(`addons/aardwolf/edit/${ menu.slug }`), { menu }).success(res => {
            this.isSaving = false;
            if (redirect) window.location.href = res.redirect;
          });
        }
    },
    computed: {
      title() {
        return translate('addons.Aardwolf::titles.edit', { title: this.menu.title });
      }
    },
    ready() {
      this.menu = Object.assign({}, Statamic.AardwolfMenu);

      // TODO: Either replace this with Vue Custom or a More Vue-like Library
      this.toolbox = new Sortable(document.getElementById('aardwolf-toolbox'), {
        group: {
          name: 'shared',
          pull: 'clone'
        },
        direction: 'horizontal',
        onStart: this.onSortableStart,
        onEnd: this.onSortableEnd
      });

      this.attachSortables();
    }
  };
</script>
