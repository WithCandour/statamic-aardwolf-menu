<template>
  <div v-if="isExpanded" class="branch-edit card flush w-full">
    <div class="card-body">
      <publish-fields
          section="main"
          :fields="fields"
          :errors="errors"
          :data.sync="item"
          :hidden-fields="hiddenFields"
          :regular-title-field="true"
      ></publish-fields>
    </div>
  </div>
</template>

<script>
  import Conditionals from '../lib/conditionals';

  export default {
    data() {
      return {
        errors: {},
      }
    },
    props: {
      isExpanded: Boolean,
      hiddenFields: Array,
      fields: Array,
      item: Object
    }
  };
</script>

<style>
  .branch-edit {
    margin-top: -2px;
    margin-left: 24px; /*.w-6*/
    margin-bottom: 8px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>