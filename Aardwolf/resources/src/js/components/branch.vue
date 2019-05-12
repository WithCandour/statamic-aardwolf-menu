<template>
  <li class="branch brand-depth__{{ depth }}" :class="{ 'branch--is-open': isExpanded }">
    <div class="branch-row w-full flex">
      <div class="page-move drag-handle w-6 h-full"></div>

      <aardwolfbranchmeta
        @toggle-expanded="toggleExpanded"
        @toggle-open="toggleOpen"
        :is-open="isOpen"
        :has-children="hasChildren"
        :item.sync="contentData"
      ></aardwolfbranchmeta>
    </div>

    <aardwolfbranchedit
        :is-expanded="isExpanded"
        :fields="fields"
        :item.sync="contentData"
        :hidden-fields="hiddenFields"
      ></aardwolfbranchedit>

    <div class="page-tree w-full">
      <ul v-show="isOpen" class="sortable branches" :data-parent-index="index">
        <aardwolfbranch v-for="(i, item) in contentData.children" :content-data.sync="item" :index="i" :depth="depth + 1" :fields="fields" :fieldset="fieldset"></aardwolfbranch>
      </ul>
    </div>
  </li>
</template>

<script>
  import Conditionals from '../lib/conditionals';

  export default {
    mixins: [Conditionals],
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
      fields: Array,
      fieldset: Object,
      depth: {
        type: Number,
        default: 1
      },
      contentData: Object
    },
    ready() {
      this.initConditions();
    }
  };
</script>

<style>
  .branch.branch--is-open .branch-meta {
    background-color: #fafcff;
  }

  .branch.branch--is-open .branch-row {
    border-bottom-right-radius: 0;
  }
</style>