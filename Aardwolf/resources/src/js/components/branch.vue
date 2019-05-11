<template>
  <li class="branch depth-{{ depth }}">
    <div class="branch-row w-full flex">
      <div class="page-move drag-handle w-6 h-full"></div>

      <aardwolfbranchmeta
        @toggle-expanded="toggleExpanded"
        @toggle-open="toggleOpen"
        :is-open="isOpen"
        :has-children="hasChildren"
        :item.sync="item"
      ></aardwolfbranchmeta>
    </div>

    <aardwolfbranchedit
        :is-expanded="isExpanded"
        :item.sync="item"
      ></aardwolfbranchedit>

    <div class="page-tree w-full">
      <ul v-show="isOpen" class="sortable branches" :data-parent-index="index">
        <aardwolfbranch v-for="(i, item) in item.children" :item.sync="item" :index="i" :depth="depth + 1"></aardwolfbranch>
      </ul>
    </div>
  </li>
</template>

<script>
  export default {
    data() {
      return {
        isExpanded: false,
        isOpen: true
      }
    },
    methods: {
      toggleExpanded() {
        this.isExpanded = !this.isExpanded;
      },
      toggleOpen() {
        this.isOpen = !this.isOpen;
      }
    },
    computed: {
      hasChildren() {
        return !!this.item.children.length;
      }
    },
    props: {
      index: Number,
      depth: Number,
      item: {
        title: String,
        children: Array
      }
    }
  };
</script>
