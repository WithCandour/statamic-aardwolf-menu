<template>
  <div class="branch-meta flex items-center flex-1 p-1">
      <div class="page-text">
        <a class="page-title" @click.prevent="toggleExpanded" href="#">
          <span class="opacity-50 icon {{ icon }}"></span>
          {{ item.title }}
        </a>
      </div>

      <div class="w-6 opacity-25 hover:opacity-50 page-toggle-container ml-px">
        <div v-show="hasChildren" class="page-toggle toggleable" @click.prevent="toggleOpen()">
          <i class="icon icon-chevron-down" :class="{ 'collapsed': !isOpen }"></i>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: Object,
      isOpen: Boolean,
      hasChildren: Boolean
    },
    computed: {
      icon() {
        let icons = {
          'section': 'icon-folder',
          'page': 'icon-flow-tree',
          'entry': 'icon-documents'
        }

        return icons[this.item.type] ? icons[this.item.type] : null;
      }
    },
    methods: {
      toggleExpanded() {
        this.$emit('toggle-expanded');
      },
      toggleOpen() {
        this.$emit('toggle-open');
      }
    }
  };
</script>
