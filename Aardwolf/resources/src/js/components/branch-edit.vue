<template>
  <div v-if="isExpanded" class="branch-edit card p-0 w-full">
    <div class="publish-fields">
      <field
        type="text"
        label="Title"
        description="This item's display name"
        width="1/2"
        :value.sync="item.title"
      ></field>

      <field
        type="text"
        label="Item type"
        description="This item's type (currently unconfigurable)"
        width="1/2"
        :value="item.type"
        :disabled="true"
      ></field>

      <field
        type="asset"
        label="Image"
        description="This item's featured image (icon)"
        :value.sync="item.image"
      ></field>

      <field v-if="item.type === 'page'"
        type="relate"
        label="Page"
        description="Please select this item's page"
        :value.sync="item.value"
      ></field>

      <field v-if="item.type === 'collection'"
        type="relate"
        relation="collection"
        label="Entry"
        description="Please select this item's collection entry"
        :value.sync="item.value"
      ></field>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isExpanded: Boolean,
      item: Object
    }
  };
</script>

<style>
  .branch-edit {
    margin-left: 24px; /*.w-6*/
    margin-bottom: 8px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>