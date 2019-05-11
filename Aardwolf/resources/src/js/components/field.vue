<template>
  <div class="form-group w-{{ width }}">
    <div class="field-inner">
      <label class="block">{{ label }}</label>
      <small v-show="description" class="help-block">
        <p>{{ description }}</p>
      </small>

      <!-- Text Input -->
      <input v-if="type === 'text'"
        type="text"
        class="form-control type-text"
        v-model="value"
        :disabled="disabled"
      />

      <!-- Relate Type -->
      <relate-fieldtype v-if="(relateLoaded && type === 'relate')"
        :config="relateConfig"
        :data.sync="relate"
      ></relate-fieldtype>

      <!-- Asset Type -->
      <assets-fieldtype v-if="type === 'asset'"
        v-ref:assets
        :config="assetConfig"
        :data.sync="relate"
      ></assets-fieldtype>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        'relate': [],
        'relateLoaded': false,
        'relateConfig': {
          type: this.relation,
          name: 'value',
          max_items: 1
        },
        'assetConfig': {
          'container': 'main',
          'folder': '/',
          'restrict': false,
          'type': 'assets',
          'name': 'value'
        }
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'text'
      },
      width: {
        type: String,
        default: 'full'
      },
      label: {
        type: String,
        default: 'Unlabelled field'
      },
      relation: {
        type: String,
        default: 'pages'
      },
      description: String,
      value: String
    },
    ready() {
      if(this.type === 'relate') {
        switch(this.relation) {
          case 'pages':
            this.relate.push(this.value);
            this.relateLoaded = true;
            break;

          case 'collection':
            const prefetched = data_get(Statamic, 'Publish.suggestions.type.collections');
            if (prefetched) {
              this.relate.push(this.value);
              this.relateConfig.collection = prefetched.map(c => c.value);
              this.relateLoaded = true;
            } else {
              this.$http.post(cp_url('addons/suggest/suggestions'), { type: 'collections' }, function(data) {
                this.relate.push(this.value);
                this.relateConfig.collection = data.map(c => c.value);
                this.relateLoaded = true;
              });
            }
            break;
        }
      }

      if(this.type === 'asset') {
        this.$refs.assets.loadAssets([ this.value ]);
      }

      this.$watch('relate', function(relate) {
        if (relate == null) return;
        if (!relate[0]) return;

        this.value = relate[0];
      });
    }
  };
</script>

<style></style>