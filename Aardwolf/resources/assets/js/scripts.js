/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(22);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Aardwolf Components
Vue.component('aardwolfeditor', __webpack_require__(2));
Vue.component('aardwolfbranch', __webpack_require__(5));
Vue.component('aardwolfbranchmeta', __webpack_require__(8));
Vue.component('aardwolfbranchedit', __webpack_require__(11));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
var __vue_styles__ = {}
__vue_script__ = __webpack_require__(3)
if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
  console.warn("[vue-loader] resources/src/js/components/editor.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(4)
module.exports = __vue_script__ || {}
if (module.exports.__esModule) module.exports = module.exports.default
var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
if (__vue_template__) {
__vue_options__.template = __vue_template__
}
if (!__vue_options__.computed) __vue_options__.computed = {}
Object.keys(__vue_styles__).forEach(function (key) {
var module = __vue_styles__[key]
__vue_options__.computed[key] = function () { return module }
})
if (false) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  var id = "_v-5540f20c/editor.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_Fieldset__ = __webpack_require__(26);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// <template>
//   <div>
//     <div class="flex flex-wrap items-center w-full sticky">
//       <h1 class="w-full my-1 text-center lg:text-left lg:flex-1">
//         {{ title }}
//       </h1>
//
//       <div class="btn-group btn-group-primary my-1">
//         <button type="button" class="btn btn-primary" @click.prevent="save(true)">Save</button>
//         <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           <span class="caret"></span>
//           <span class="sr-only">Toggle Dropdown</span>
//         </button>
//         <ul class="dropdown-menu">
//           <li>
//             <a id="publish-continue" @click.prevent="save(false)">Save &amp; Continue</a>
//           </li>
//         </ul>
//       </div>
//
//       <div class="toolbox w-full">
//         <ul id="aardwolf-toolbox" class="toolbox__tools sortable">
//           <li class="branch" data-tool="section">
//             <div class="tool">
//               <span class="icon icon-folder"></span>
//             </div>
//
//             <div class="branch-row w-full flex">
//               <div class="page-move drag-handle w-6 h-full"></div>
//               <div class="flex items-center flex-1 p-1">
//                   <div class="page-text">
//                     New section
//                   </div>
//               </div>
//             </div>
//           </li>
//
//           <li class="branch" data-tool="page">
//             <div class="tool">
//               <span class="icon icon-flow-tree"></span>
//             </div>
//
//             <div class="branch-row w-full flex">
//               <div class="page-move drag-handle w-6 h-full"></div>
//               <div class="flex items-center flex-1 p-1">
//                   <div class="page-text">
//                     New page
//                   </div>
//               </div>
//             </div>
//           </li>
//
//           <li class="branch" data-tool="entry">
//             <div class="tool">
//               <span class="icon icon-documents"></span>
//             </div>
//
//             <div class="branch-row w-full flex">
//               <div class="page-move drag-handle w-6 h-full"></div>
//               <div class="flex items-center flex-1 p-1">
//                   <div class="page-text">
//                     New entry
//                   </div>
//               </div>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//
//
//     <div id="aardwolf-pages" class="page-tree" :class="{ '--is-sorting': isSorting, '--is-saving': isSaving }">
//       <ul class="sortable">
//         <aardwolfbranch v-for="(index, item) in menu.items" :content-data.sync="item" :index="index" :fields="fields" :fieldset="fieldset"></aardwolfbranch>
//       </ul>
//     </div>
//   </div>
// </template>
//
// <script>


var parents = function parents(el, selector) {
  var tree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (!el) return tree;
  if (el.matches(selector)) tree.push(el);

  return parents(el.parentElement, selector, tree);
};

var dataPath = function dataPath(from) {
  return parents(from, '.sortable.branches').map(function (i) {
    return i.dataset['parentIndex'];
  }).reverse().join('/children/');
};

var resolve = function resolve(object, path) {
  var item = path.reduce(function (object, segment) {
    if (object == null) return null;
    if (object[segment] === null) return null;

    return object[segment];
  }, object);

  return item;
};

var newMenuItem = function newMenuItem(type) {
  return {
    title: 'New ' + type,
    type: type,
    children: []
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isSorting: false,
      isSaving: false,
      fieldset: {},
      fields: [],
      menu: {}
    };
  },

  methods: {
    attachSortables: function attachSortables() {
      var _this = this;

      // Destroy any existing sortables
      (this.sortables || []).forEach(function (s) {
        return s.destroy();
      });

      // Create sortable instances
      // TODO: Either replace this with Vue Custom or a More Vue-like Library
      this.sortables = [].concat(_toConsumableArray(document.querySelectorAll('#aardwolf-pages ul'))).map(function (el) {
        return new Sortable(el, {
          group: 'shared',
          handle: '.drag-handle',
          onStart: _this.onSortableStart,
          onEnd: _this.onSortableEnd
        });
      });
    },
    onSortableStart: function onSortableStart() {
      // Disable the toolbox
      this.toolbox.option('disabled', true);
      this.isSorting = true;
    },
    onSortableEnd: function onSortableEnd(e) {
      var from = e.from,
          oldIndex = e.oldIndex,
          to = e.to,
          newIndex = e.newIndex;

      // Generate a path to the targets

      var fromPath = dataPath(from, oldIndex);
      var toPath = dataPath(to, newIndex);

      // Get target
      var target = toPath.length ? resolve(this.menu.items, toPath.split('/')).children : this.menu.items;

      if (e.from.matches('.toolbox__tools')) {
        /*
         * NEW
         *
         * Determine which tool has been added to the menu
         */
        var newItem = newMenuItem(e.item.dataset.tool);
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
        var source = fromPath.length ? resolve(this.menu.items, fromPath.split('/')).children : this.menu.items;

        target.splice(newIndex, 0, source.splice(oldIndex, 1)[0]);
        if (target != source) e.item.remove();
      }

      // Enable the toolbox
      this.toolbox.option('disabled', false);
      this.isSorting = false;
      this.attachSortables();
    },
    save: function save(redirect) {
      var _this2 = this;

      this.isSaving = true;
      var menu = Object.assign({}, this.menu);

      this.$http.post(cp_url('addons/aardwolf/edit/' + menu.label), { menu: menu }).success(function (res) {
        _this2.$dispatch('changesMade', false);
        if (redirect) {
          window.location.href = res.redirect;
        } else {
          _this2.isSaving = false;
        }
      });
    }
  },
  computed: {
    title: function title() {
      return translate('addons.Aardwolf::titles.edit', { title: this.menu.title });
    }
  },
  ready: function ready() {
    this.menu = Object.assign({}, Statamic.AardwolfMenu);
    this.fieldset = new __WEBPACK_IMPORTED_MODULE_0__lib_Fieldset__["a" /* default */](Object.assign({}, Statamic.AardwolfMenuFieldset));
    this.fields = this.fieldset.fields();

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
});
// </script>

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <div class=\"flex flex-wrap items-center w-full sticky\">\n    <h1 class=\"w-full my-1 text-center lg:text-left lg:flex-1\">\n      {{ title }}\n    </h1>\n\n    <div class=\"btn-group btn-group-primary my-1\">\n      <button type=\"button\" class=\"btn btn-primary\" @click.prevent=\"save(true)\">Save</button>\n      <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <span class=\"caret\"></span>\n        <span class=\"sr-only\">Toggle Dropdown</span>\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li>\n          <a id=\"publish-continue\" @click.prevent=\"save(false)\">Save &amp; Continue</a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"toolbox w-full\">\n      <ul id=\"aardwolf-toolbox\" class=\"toolbox__tools sortable\">\n        <li class=\"branch\" data-tool=\"section\">\n          <div class=\"tool\">\n            <span class=\"icon icon-folder\"></span>\n          </div>\n\n          <div class=\"branch-row w-full flex\">\n            <div class=\"page-move drag-handle w-6 h-full\"></div>\n            <div class=\"flex items-center flex-1 p-1\">\n                <div class=\"page-text\">\n                  New section\n                </div>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"branch\" data-tool=\"page\">\n          <div class=\"tool\">\n            <span class=\"icon icon-flow-tree\"></span>\n          </div>\n\n          <div class=\"branch-row w-full flex\">\n            <div class=\"page-move drag-handle w-6 h-full\"></div>\n            <div class=\"flex items-center flex-1 p-1\">\n                <div class=\"page-text\">\n                  New page\n                </div>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"branch\" data-tool=\"entry\">\n          <div class=\"tool\">\n            <span class=\"icon icon-documents\"></span>\n          </div>\n\n          <div class=\"branch-row w-full flex\">\n            <div class=\"page-move drag-handle w-6 h-full\"></div>\n            <div class=\"flex items-center flex-1 p-1\">\n                <div class=\"page-text\">\n                  New entry\n                </div>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n\n  <div id=\"aardwolf-pages\" class=\"page-tree\" :class=\"{ '--is-sorting': isSorting, '--is-saving': isSaving }\">\n    <ul class=\"sortable\">\n      <aardwolfbranch v-for=\"(index, item) in menu.items\" :content-data.sync=\"item\" :index=\"index\" :fields=\"fields\" :fieldset=\"fieldset\"></aardwolfbranch>\n    </ul>\n  </div>\n</div>\n";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
var __vue_styles__ = {}
__webpack_require__(29)
__vue_script__ = __webpack_require__(6)
if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
  console.warn("[vue-loader] resources/src/js/components/branch.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(7)
module.exports = __vue_script__ || {}
if (module.exports.__esModule) module.exports = module.exports.default
var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
if (__vue_template__) {
__vue_options__.template = __vue_template__
}
if (!__vue_options__.computed) __vue_options__.computed = {}
Object.keys(__vue_styles__).forEach(function (key) {
var module = __vue_styles__[key]
__vue_options__.computed[key] = function () { return module }
})
if (false) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  var id = "_v-fa692ea2/branch.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_conditionals__ = __webpack_require__(27);
// <template>
//   <li class="branch brand-depth__{{ depth }}" :class="{ 'branch--is-open': isExpanded }">
//     <div class="branch-row w-full flex">
//       <div class="page-move drag-handle w-6 h-full"></div>
//
//       <aardwolfbranchmeta
//         @toggle-expanded="toggleExpanded"
//         @toggle-open="toggleOpen"
//         :is-open="isOpen"
//         :has-children="hasChildren"
//         :item.sync="contentData"
//       ></aardwolfbranchmeta>
//     </div>
//
//     <aardwolfbranchedit
//         :is-expanded="isExpanded"
//         :fields="fields"
//         :item.sync="contentData"
//         :hidden-fields="hiddenFields"
//       ></aardwolfbranchedit>
//
//     <div class="page-tree w-full">
//       <ul v-show="isOpen" class="sortable branches" :data-parent-index="index">
//         <aardwolfbranch v-for="(i, item) in contentData.children" :content-data.sync="item" :index="i" :depth="depth + 1" :fields="fields" :fieldset="fieldset"></aardwolfbranch>
//       </ul>
//     </div>
//   </li>
// </template>
//
// <script>


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__lib_conditionals__["a" /* default */]],
  data: function data() {
    return {
      isExpanded: false,
      isOpen: true
    };
  },

  methods: {
    toggleExpanded: function toggleExpanded() {
      this.isExpanded = !this.isExpanded;
    },
    toggleOpen: function toggleOpen() {
      this.isOpen = !this.isOpen;
    }
  },
  computed: {
    hasChildren: function hasChildren() {
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
  ready: function ready() {
    this.initConditions();
  }
});
// </script>
//
// <style>
//   .branch.branch--is-open .branch-meta {
//     background-color: #fafcff;
//   }
//
//   .branch.branch--is-open .branch-row {
//     border-bottom-right-radius: 0;
//   }
// </style>

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "\n<li class=\"branch brand-depth__{{ depth }}\" :class=\"{ 'branch--is-open': isExpanded }\">\n  <div class=\"branch-row w-full flex\">\n    <div class=\"page-move drag-handle w-6 h-full\"></div>\n\n    <aardwolfbranchmeta\n      @toggle-expanded=\"toggleExpanded\"\n      @toggle-open=\"toggleOpen\"\n      :is-open=\"isOpen\"\n      :has-children=\"hasChildren\"\n      :item.sync=\"contentData\"\n    ></aardwolfbranchmeta>\n  </div>\n\n  <aardwolfbranchedit\n      :is-expanded=\"isExpanded\"\n      :fields=\"fields\"\n      :item.sync=\"contentData\"\n      :hidden-fields=\"hiddenFields\"\n    ></aardwolfbranchedit>\n\n  <div class=\"page-tree w-full\">\n    <ul v-show=\"isOpen\" class=\"sortable branches\" :data-parent-index=\"index\">\n      <aardwolfbranch v-for=\"(i, item) in contentData.children\" :content-data.sync=\"item\" :index=\"i\" :depth=\"depth + 1\" :fields=\"fields\" :fieldset=\"fieldset\"></aardwolfbranch>\n    </ul>\n  </div>\n</li>\n";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
var __vue_styles__ = {}
__vue_script__ = __webpack_require__(9)
if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
  console.warn("[vue-loader] resources/src/js/components/branch-meta.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(10)
module.exports = __vue_script__ || {}
if (module.exports.__esModule) module.exports = module.exports.default
var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
if (__vue_template__) {
__vue_options__.template = __vue_template__
}
if (!__vue_options__.computed) __vue_options__.computed = {}
Object.keys(__vue_styles__).forEach(function (key) {
var module = __vue_styles__[key]
__vue_options__.computed[key] = function () { return module }
})
if (false) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  var id = "_v-87ad7cda/branch-meta.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// <template>
//   <div class="branch-meta flex items-center flex-1 p-1">
//       <div class="page-text">
//         <a class="page-title" @click.prevent="toggleExpanded" href="#">
//           <span class="opacity-50 icon {{ icon }}"></span>
//           {{ item.title }}
//         </a>
//       </div>
//
//       <div class="w-6 opacity-25 hover:opacity-50 page-toggle-container ml-px">
//         <div v-show="hasChildren" class="page-toggle toggleable" @click.prevent="toggleOpen()">
//           <i class="icon icon-chevron-down" :class="{ 'collapsed': !isOpen }"></i>
//         </div>
//       </div>
//   </div>
// </template>
//
// <script>
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    item: Object,
    isOpen: Boolean,
    hasChildren: Boolean
  },
  computed: {
    icon: function icon() {
      var icons = {
        'section': 'icon-folder',
        'page': 'icon-flow-tree',
        'entry': 'icon-documents'
      };

      return icons[this.item.type] ? icons[this.item.type] : null;
    }
  },
  methods: {
    toggleExpanded: function toggleExpanded() {
      this.$emit('toggle-expanded');
    },
    toggleOpen: function toggleOpen() {
      this.$emit('toggle-open');
    }
  }
});
// </script>

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"branch-meta flex items-center flex-1 p-1\">\n    <div class=\"page-text\">\n      <a class=\"page-title\" @click.prevent=\"toggleExpanded\" href=\"#\">\n        <span class=\"opacity-50 icon {{ icon }}\"></span>\n        {{ item.title }}\n      </a>\n    </div>\n\n    <div class=\"w-6 opacity-25 hover:opacity-50 page-toggle-container ml-px\">\n      <div v-show=\"hasChildren\" class=\"page-toggle toggleable\" @click.prevent=\"toggleOpen()\">\n        <i class=\"icon icon-chevron-down\" :class=\"{ 'collapsed': !isOpen }\"></i>\n      </div>\n    </div>\n</div>\n";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
var __vue_styles__ = {}
__webpack_require__(12)
__vue_script__ = __webpack_require__(17)
if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
  console.warn("[vue-loader] resources/src/js/components/branch-edit.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(18)
module.exports = __vue_script__ || {}
if (module.exports.__esModule) module.exports = module.exports.default
var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
if (__vue_template__) {
__vue_options__.template = __vue_template__
}
if (!__vue_options__.computed) __vue_options__.computed = {}
Object.keys(__vue_styles__).forEach(function (key) {
var module = __vue_styles__[key]
__vue_options__.computed[key] = function () { return module }
})
if (false) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  var id = "_v-36800f18/branch-edit.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(15).default
var update = add("8d708976", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./branch-edit.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./branch-edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.branch-edit {\n  margin-top: -2px;\n  margin-left: 24px; /*.w-6*/\n  margin-bottom: 8px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(16);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_conditionals__ = __webpack_require__(27);
// <template>
//   <div v-if="isExpanded" class="branch-edit card flush w-full">
//     <div class="card-body">
//       <publish-fields
//           section="main"
//           :fields="fields"
//           :errors="errors"
//           :data.sync="item"
//           :hidden-fields="hiddenFields"
//           :regular-title-field="true"
//       ></publish-fields>
//     </div>
//   </div>
// </template>
//
// <script>


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errors: {}
    };
  },

  props: {
    isExpanded: Boolean,
    hiddenFields: Array,
    fields: Array,
    item: Object
  }
});
// </script>
//
// <style>
//   .branch-edit {
//     margin-top: -2px;
//     margin-left: 24px; /*.w-6*/
//     margin-bottom: 8px;
//     border-top-left-radius: 0;
//     border-top-right-radius: 0;
//   }
// </style>

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "\n<div v-if=\"isExpanded\" class=\"branch-edit card flush w-full\">\n  <div class=\"card-body\">\n    <publish-fields\n        section=\"main\"\n        :fields=\"fields\"\n        :errors=\"errors\"\n        :data.sync=\"item\"\n        :hidden-fields=\"hiddenFields\"\n        :regular-title-field=\"true\"\n    ></publish-fields>\n  </div>\n</div>\n";

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Fieldset parser present at "/statamic/resources/js/components/publish/Fieldset.js" */
var Fieldset = function () {
    function Fieldset(fieldset) {
        _classCallCheck(this, Fieldset);

        this.fieldset = fieldset;
        this.name = fieldset.name;
        this.sections = this.parseSections(fieldset.sections);
        this.metaFields = [];
    }

    _createClass(Fieldset, [{
        key: 'parseSections',
        value: function parseSections(sections) {
            var _this = this;

            return _.chain(sections).mapObject(function (section, handle) {
                section.handle = handle;
                section.fields = _this.parseFields(section.fields);
                return section;
            }).values().value();
        }
    }, {
        key: 'parseFields',
        value: function parseFields(fields) {
            return _.chain(fields).mapObject(function (config, handle) {
                config.name = handle;
                return config;
            }).values().value();
        }

        /**
         * By default, the slug field won't be shown.
         * This lets you specify whether or not it should be shown.
         */

    }, {
        key: 'showSlug',
        value: function showSlug(show) {
            if (show) this.metaFields.push('slug');
            return this;
        }

        /**
         * By default, the date field won't be shown.
         * This lets you specify whether or not it should be shown.
         */

    }, {
        key: 'showDate',
        value: function showDate(show) {
            if (show) this.metaFields.push('date');
            return this;
        }

        /**
         * Place a title field at the beginning of the first section
         * if it hasn't been explicitly placed somewhere else.
         */

    }, {
        key: 'prependTitle',
        value: function prependTitle() {
            if (!this.fieldsInSections().includes('title')) {
                this.firstSectionFields().unshift({
                    name: 'title',
                    type: 'text',
                    instructions: null,
                    width: 100
                });
            }

            return this;
        }

        /**
         * Prepend any required meta fields to the start of the sidebar.
         */

    }, {
        key: 'prependMeta',
        value: function prependMeta() {
            var _this2 = this;

            this.ensureSidebar();

            var fields = this.fieldsInSections();

            _.each(this.metaFields, function (field) {
                if (!fields.includes(field)) {
                    _this2.pushSidebarField({ name: field, type: field });
                }
            });

            this.removeEmptySidebar();

            return this;
        }

        /**
         * Push a field into the sidebar
         */

    }, {
        key: 'pushSidebarField',
        value: function pushSidebarField(config) {
            var sidebar = this.sidebarSectionFields();

            var field = Object.assign({
                isMeta: true,
                width: 100,
                localizable: true
            }, config || {});

            sidebar.unshift(field);
        }

        /**
         * Customizing the sidebar is not a requirement, but we expect one to
         * exist. If it's not already defined, we'll create a blank one here.
         */

    }, {
        key: 'ensureSidebar',
        value: function ensureSidebar() {
            var sidebar = _.find(this.sections, { handle: 'sidebar' });

            if (!sidebar) {
                this.sections.push({ handle: 'sidebar', display: translate('cp.meta'), fields: [] });
            }
        }

        /**
         * It's possible that all the fields that would normally be in the
         * sidebar have been placed in other sections, resulting in an
         * empty sidebar. If it's empty, we'll just get rid of it.
         */

    }, {
        key: 'removeEmptySidebar',
        value: function removeEmptySidebar() {
            if (this.sidebarSectionFields().length > 0) return;

            this.sections = _.reject(this.sections, function (section) {
                return section.handle == 'sidebar';
            });
        }

        /**
         * Get the names of fields that have been placed into a section.
         */

    }, {
        key: 'fieldsInSections',
        value: function fieldsInSections() {
            return _.chain(this.sections).map(function (section) {
                return section.fields;
            }).flatten().pluck('name').value();
        }

        /**
         * Get the fields that are in the first section.
         */

    }, {
        key: 'firstSectionFields',
        value: function firstSectionFields() {
            return this.sections[0].fields;
        }

        /**
         * Get the fields that are in the sidebar.
         */

    }, {
        key: 'sidebarSectionFields',
        value: function sidebarSectionFields() {
            return _.find(this.sections, { handle: 'sidebar' }).fields;
        }

        /**
         * Get all the fields from all the sections.
         */

    }, {
        key: 'fields',
        value: function fields() {
            return _.chain(this.sections).pluck('fields').flatten().value();
        }
    }]);

    return Fieldset;
}();

/* harmony default export */ __webpack_exports__["a"] = (Fieldset);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Condition_js__ = __webpack_require__(28);
/** Conditionals Mixins present at "/statamic/resources/js/components/publish/conditionals.js" */


/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            conditions: [],
            hiddenFields: []
        };
    },

    methods: {
        evaluateConditions: function evaluateConditions() {
            var _this = this;

            this.conditions.forEach(function (condition) {
                condition.passes = condition.validate(_this.contentData);
            });

            this.hiddenFields = _.chain(this.fieldset.fields()).filter(function (field) {
                return !_this.isVisible(field);
            }).map(function (field) {
                return field.name;
            }).value();
        },


        isVisible: function isVisible(field) {
            var condition = this.conditions.find(function (condition) {
                return condition.id === field.name;
            });

            if (condition === undefined) {
                return true;
            }

            if (field.hide_when !== undefined) {
                return !condition.passes;
            }

            return condition.passes;
        },

        initConditions: function initConditions() {
            var _this2 = this;

            this.conditions = this.fieldset.fields().filter(function (field) {
                return field.show_when !== undefined || field.hide_when !== undefined;
            }).map(function (field) {
                return new __WEBPACK_IMPORTED_MODULE_0__Condition_js__["a" /* default */](field.name, _this2.condition(field));
            });

            this.evaluateConditions();

            this.$watch('contentData', function (data) {
                return _this2.evaluateConditions(data);
            }, { deep: true });
        },

        condition: function condition(field) {
            if (field.show_when !== undefined) {
                return field.show_when;
            }

            return field.hide_when;
        }
    }
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Condition class at "/statamic/resources/js/components/publish/Condition.js" */
var Condition = function () {
    function Condition(id, rule) {
        _classCallCheck(this, Condition);

        this.id = id;
        this.rule = rule;
        this.passes = false;
        this.validate = this._validate();
    }

    _createClass(Condition, [{
        key: 'isJavascript',
        value: function isJavascript() {
            return typeof this.rule === 'string';
        }
    }, {
        key: 'exists',
        value: function exists() {
            if (!Statamic.conditions) return false;

            return Statamic.conditions.hasOwnProperty(this.rule);
        }
    }, {
        key: '_validate',
        value: function _validate() {
            if (this.isJavascript() && !this.exists()) {
                console.error('Statamic.conditions.' + this.rule + ' hasn\'t been implemented.');
                return function () {
                    return false;
                };
            }

            if (this.isJavascript() && this.exists()) {
                return Statamic.conditions[this.rule];
            }

            return function (data) {
                var passes = [];

                var ors = Object.keys(this.rule).filter(function (key) {
                    return key.startsWith('or_');
                });

                for (var field in this.rule) {
                    if (ors.includes(field)) {
                        var trimmed = field.substr(3);

                        if (data[trimmed] === this.rule[field]) {
                            return true;
                        }
                    }

                    if (!ors.includes(field) && Array.isArray(this.rule[field])) {
                        passes.push(this.rule[field].includes(data[field]));
                    } else {
                        if (this.rule[field] === 'not null') {
                            passes.push(data[field] !== null);
                        } else {
                            passes.push(data[field] === this.rule[field]);
                        }
                    }
                }

                return !passes.includes(false);
            };
        }
    }]);

    return Condition;
}();

/* harmony default export */ __webpack_exports__["a"] = (Condition);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(15).default
var update = add("60f758ff", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./branch.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./branch.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.branch.branch--is-open .branch-meta {\n  background-color: #fafcff;\n}\n\n.branch.branch--is-open .branch-row {\n  border-bottom-right-radius: 0;\n}\n", ""]);

// exports


/***/ })
/******/ ]);