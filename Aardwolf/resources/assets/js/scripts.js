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

// Generic Components
Vue.component('field', __webpack_require__(19));

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
//           <li class="branch" data-tool="collection">
//             <div class="tool">
//               <span class="icon icon-documents"></span>
//             </div>
//
//             <div class="branch-row w-full flex">
//               <div class="page-move drag-handle w-6 h-full"></div>
//               <div class="flex items-center flex-1 p-1">
//                   <div class="page-text">
//                     New collection
//                   </div>
//               </div>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//
//
//     <div id="aardwolf-pages" class="page-tree" v-bind:class="{ '--is-hover': isSorting, '--is-saving': isSaving }">
//       <ul class="sortable">
//         <aardwolfbranch v-for="(index, item) in menu.items" :item.sync="item" :index="index" depth="1"></aardwolfbranch>
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

      this.$http.post(cp_url('addons/aardwolf/edit/' + menu.slug), { menu: menu }).success(function (res) {
        _this2.isSaving = false;
        if (redirect) window.location.href = res.redirect;
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

module.exports = "\n<div>\n  <div class=\"flex flex-wrap items-center w-full sticky\">\n    <h1 class=\"w-full my-1 text-center lg:text-left lg:flex-1\">\n      {{ title }}\n    </h1>\n\n    <div class=\"btn-group btn-group-primary my-1\">\n      <button type=\"button\" class=\"btn btn-primary\" @click.prevent=\"save(true)\">Save</button>\n      <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <span class=\"caret\"></span>\n        <span class=\"sr-only\">Toggle Dropdown</span>\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li>\n          <a id=\"publish-continue\" @click.prevent=\"save(false)\">Save &amp; Continue</a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"toolbox w-full\">\n      <ul id=\"aardwolf-toolbox\" class=\"toolbox__tools sortable\">\n        <li class=\"branch\" data-tool=\"section\">\n          <div class=\"tool\">\n            <span class=\"icon icon-folder\"></span>\n          </div>\n\n          <div class=\"branch-row w-full flex\">\n            <div class=\"page-move drag-handle w-6 h-full\"></div>\n            <div class=\"flex items-center flex-1 p-1\">\n                <div class=\"page-text\">\n                  New section\n                </div>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"branch\" data-tool=\"page\">\n          <div class=\"tool\">\n            <span class=\"icon icon-flow-tree\"></span>\n          </div>\n\n          <div class=\"branch-row w-full flex\">\n            <div class=\"page-move drag-handle w-6 h-full\"></div>\n            <div class=\"flex items-center flex-1 p-1\">\n                <div class=\"page-text\">\n                  New page\n                </div>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"branch\" data-tool=\"collection\">\n          <div class=\"tool\">\n            <span class=\"icon icon-documents\"></span>\n          </div>\n\n          <div class=\"branch-row w-full flex\">\n            <div class=\"page-move drag-handle w-6 h-full\"></div>\n            <div class=\"flex items-center flex-1 p-1\">\n                <div class=\"page-text\">\n                  New collection\n                </div>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n\n  <div id=\"aardwolf-pages\" class=\"page-tree\" v-bind:class=\"{ '--is-hover': isSorting, '--is-saving': isSaving }\">\n    <ul class=\"sortable\">\n      <aardwolfbranch v-for=\"(index, item) in menu.items\" :item.sync=\"item\" :index=\"index\" depth=\"1\"></aardwolfbranch>\n    </ul>\n  </div>\n</div>\n";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
var __vue_styles__ = {}
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
// <template>
//   <li class="branch depth-{{ depth }}">
//     <div class="branch-row w-full flex">
//       <div class="page-move drag-handle w-6 h-full"></div>
//
//       <aardwolfbranchmeta
//         @toggle-expanded="toggleExpanded"
//         @toggle-open="toggleOpen"
//         :is-open="isOpen"
//         :has-children="hasChildren"
//         :item.sync="item"
//       ></aardwolfbranchmeta>
//     </div>
//
//     <aardwolfbranchedit
//         :is-expanded="isExpanded"
//         :item.sync="item"
//       ></aardwolfbranchedit>
//
//     <div class="page-tree w-full">
//       <ul v-show="isOpen" class="sortable branches" :data-parent-index="index">
//         <aardwolfbranch v-for="(i, item) in item.children" :item.sync="item" :index="i" :depth="depth + 1"></aardwolfbranch>
//       </ul>
//     </div>
//   </li>
// </template>
//
// <script>
/* harmony default export */ __webpack_exports__["default"] = ({
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
    depth: Number,
    item: {
      title: String,
      children: Array
    }
  }
});
// </script>

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "\n<li class=\"branch depth-{{ depth }}\">\n  <div class=\"branch-row w-full flex\">\n    <div class=\"page-move drag-handle w-6 h-full\"></div>\n\n    <aardwolfbranchmeta\n      @toggle-expanded=\"toggleExpanded\"\n      @toggle-open=\"toggleOpen\"\n      :is-open=\"isOpen\"\n      :has-children=\"hasChildren\"\n      :item.sync=\"item\"\n    ></aardwolfbranchmeta>\n  </div>\n\n  <aardwolfbranchedit\n      :is-expanded=\"isExpanded\"\n      :item.sync=\"item\"\n    ></aardwolfbranchedit>\n\n  <div class=\"page-tree w-full\">\n    <ul v-show=\"isOpen\" class=\"sortable branches\" :data-parent-index=\"index\">\n      <aardwolfbranch v-for=\"(i, item) in item.children\" :item.sync=\"item\" :index=\"i\" :depth=\"depth + 1\"></aardwolfbranch>\n    </ul>\n  </div>\n</li>\n";

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
        'collection': 'icon-documents'
      };

      return icons[this.item.type] ? icons[this.item.type] : null;
    }
  },
  methods: {
    toggleExpanded: function toggleExpanded() {
      this.$emit('toggle-expanded');
    },
    toggleOpen: function toggleOpen() {
      console.log(this.isOpen);
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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.branch-edit {\n  margin-left: 24px; /*.w-6*/\n  margin-bottom: 8px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n", ""]);

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
// <template>
//   <div v-if="isExpanded" class="branch-edit card p-0 w-full">
//     <div class="publish-fields">
//       <field
//         type="text"
//         label="Title"
//         description="This item's display name"
//         width="1/2"
//         :value.sync="item.title"
//       ></field>
//
//       <field
//         type="text"
//         label="Item type"
//         description="This item's type (currently unconfigurable)"
//         width="1/2"
//         :value="item.type"
//         :disabled="true"
//       ></field>
//
//       <field
//         type="asset"
//         label="Image"
//         description="This item's featured image (icon)"
//         :value.sync="item.image"
//       ></field>
//
//       <field v-if="item.type === 'page'"
//         type="relate"
//         label="Page"
//         description="Please select this item's page"
//         :value.sync="item.value"
//       ></field>
//
//       <field v-if="item.type === 'collection'"
//         type="relate"
//         relation="collection"
//         label="Entry"
//         description="Please select this item's collection entry"
//         :value.sync="item.value"
//       ></field>
//     </div>
//   </div>
// </template>
//
// <script>
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    isExpanded: Boolean,
    item: Object
  }
});
// </script>
//
// <style>
//   .branch-edit {
//     margin-left: 24px; /*.w-6*/
//     margin-bottom: 8px;
//     border-top-left-radius: 0;
//     border-top-right-radius: 0;
//   }
// </style>

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "\n<div v-if=\"isExpanded\" class=\"branch-edit card p-0 w-full\">\n  <div class=\"publish-fields\">\n    <field\n      type=\"text\"\n      label=\"Title\"\n      description=\"This item's display name\"\n      width=\"1/2\"\n      :value.sync=\"item.title\"\n    ></field>\n\n    <field\n      type=\"text\"\n      label=\"Item type\"\n      description=\"This item's type (currently unconfigurable)\"\n      width=\"1/2\"\n      :value=\"item.type\"\n      :disabled=\"true\"\n    ></field>\n\n    <field\n      type=\"asset\"\n      label=\"Image\"\n      description=\"This item's featured image (icon)\"\n      :value.sync=\"item.image\"\n    ></field>\n\n    <field v-if=\"item.type === 'page'\"\n      type=\"relate\"\n      label=\"Page\"\n      description=\"Please select this item's page\"\n      :value.sync=\"item.value\"\n    ></field>\n\n    <field v-if=\"item.type === 'collection'\"\n      type=\"relate\"\n      relation=\"collection\"\n      label=\"Entry\"\n      description=\"Please select this item's collection entry\"\n      :value.sync=\"item.value\"\n    ></field>\n  </div>\n</div>\n";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
var __vue_styles__ = {}
__vue_script__ = __webpack_require__(20)
if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
  console.warn("[vue-loader] resources/src/js/components/field.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(21)
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
  var id = "_v-23ac927d/field.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// <template>
//   <div class="form-group w-{{ width }}">
//     <div class="field-inner">
//       <label class="block">{{ label }}</label>
//       <small v-show="description" class="help-block">
//         <p>{{ description }}</p>
//       </small>
//
//       <!-- Text Input -->
//       <input v-if="type === 'text'"
//         type="text"
//         class="form-control type-text"
//         v-model="value"
//         :disabled="disabled"
//       />
//
//       <!-- Relate Type -->
//       <relate-fieldtype v-if="(relateLoaded && type === 'relate')"
//         :config="relateConfig"
//         :data.sync="relate"
//       ></relate-fieldtype>
//
//       <!-- Asset Type -->
//       <assets-fieldtype v-if="type === 'asset'"
//         v-ref:assets
//         :config="assetConfig"
//         :data.sync="relate"
//       ></assets-fieldtype>
//     </div>
//   </div>
// </template>
//
// <script>
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
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
    };
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
  ready: function ready() {
    if (this.type === 'relate') {
      switch (this.relation) {
        case 'pages':
          this.relate.push(this.value);
          this.relateLoaded = true;
          break;

        case 'collection':
          var prefetched = data_get(Statamic, 'Publish.suggestions.type.collections');
          if (prefetched) {
            this.relate.push(this.value);
            this.relateConfig.collection = prefetched.map(function (c) {
              return c.value;
            });
            this.relateLoaded = true;
          } else {
            this.$http.post(cp_url('addons/suggest/suggestions'), { type: 'collections' }, function (data) {
              this.relate.push(this.value);
              this.relateConfig.collection = data.map(function (c) {
                return c.value;
              });
              this.relateLoaded = true;
            });
          }
          break;
      }
    }

    if (this.type === 'asset') {
      this.$refs.assets.loadAssets([this.value]);
    }

    this.$watch('relate', function (relate) {
      if (relate == null) return;
      if (!relate[0]) return;

      this.value = relate[0];
    });
  }
});
// </script>
//
// <style></style>

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"form-group w-{{ width }}\">\n  <div class=\"field-inner\">\n    <label class=\"block\">{{ label }}</label>\n    <small v-show=\"description\" class=\"help-block\">\n      <p>{{ description }}</p>\n    </small>\n\n    <!-- Text Input -->\n    <input v-if=\"type === 'text'\"\n      type=\"text\"\n      class=\"form-control type-text\"\n      v-model=\"value\"\n      :disabled=\"disabled\"\n    />\n\n    <!-- Relate Type -->\n    <relate-fieldtype v-if=\"(relateLoaded && type === 'relate')\"\n      :config=\"relateConfig\"\n      :data.sync=\"relate\"\n    ></relate-fieldtype>\n\n    <!-- Asset Type -->\n    <assets-fieldtype v-if=\"type === 'asset'\"\n      v-ref:assets\n      :config=\"assetConfig\"\n      :data.sync=\"relate\"\n    ></assets-fieldtype>\n  </div>\n</div>\n";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);