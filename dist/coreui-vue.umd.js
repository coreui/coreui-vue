(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["coreui-vue"] = factory(require("vue"));
	else
		root["coreui-vue"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0f88":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBoundingClientRect; });
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

/***/ }),

/***/ "1235":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return popperGenerator; });
/* unused harmony export createPopper */
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d116");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e2e9");
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ea1a");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("b62b");
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("b9e6");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("b1e2");
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("2a35");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("2767");















var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, {}, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, {}, state.options, {}, options);
        state.scrollParents = {
          reference: Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__[/* isElement */ "a"])(reference) ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(reference) : [],
          popper: Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = Object(_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (false) { var _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, flipModifier, modifiers; }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (false) {}

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: Object(_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(reference, Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(popper), state.options.strategy === 'fixed'),
          popper: Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (false) {}

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Object(_utils_debounce_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (false) {}

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper =
/*#__PURE__*/
popperGenerator();

/***/ }),

/***/ "18dc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CDataTable_vue_vue_type_style_index_0_id_31168812_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fdf6");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CDataTable_vue_vue_type_style_index_0_id_31168812_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CDataTable_vue_vue_type_style_index_0_id_31168812_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CDataTable_vue_vue_type_style_index_0_id_31168812_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1e7e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ceaa");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("289b2c70", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "1fc0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getWindow; });
/*:: import type { Window } from '../types'; */

/*:: declare function getWindow(node: Node | Window): Window; */
function getWindow(node) {
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  return node;
}

/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "2767":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isHTMLElement; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1fc0");

/*:: declare function isElement(node: mixed): boolean %checks(node instanceof
  Element); */

function isElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(node).Element;
  return node instanceof OwnElement;
}
/*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
  HTMLElement); */


function isHTMLElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(node).HTMLElement;
  return node instanceof OwnElement;
}



/***/ }),

/***/ "2a35":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeByName; });
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, {}, current, {
      options: Object.assign({}, existing.options, {}, current.options),
      data: Object.assign({}, existing.data, {}, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),

/***/ "33c8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'CIcon',
  props: {
    name: String,
    content: [String, Array],
    size: {
      type: String,
      validator: function validator(size) {
        return ['custom', 'custom-size', 'sm', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'].includes(size);
      }
    },
    customClasses: [String, Array, Object],
    src: String,
    title: String,
    use: String
  },
  computed: {
    iconName: function iconName() {
      var iconNameIsKebabCase = this.name && this.name.includes('-');
      return iconNameIsKebabCase ? this.toCamelCase(this.name) : this.name;
    },
    titleCode: function titleCode() {
      return this.title ? "<title>".concat(this.title, "</title>") : '';
    },
    code: function code() {
      if (this.content) {
        return this.content;
      } else if (this.$root.$options.icons) {
        var icon = this.$root.$options.icons[this.iconName];

        if (!icon && process && Object({"NODE_ENV":"production","BASE_URL":"/"}) && "production" === 'development') {
          console.error('CIcon: "' + this.iconName + '" is not registered in $root.icons object. For CIcon docs visit https://coreui.io/vue/docs/components/icon.html');
        }

        return icon;
      }
    },
    iconCode: function iconCode() {
      return Array.isArray(this.code) ? this.code[1] || this.code[0] : this.code;
    },
    scale: function scale() {
      return Array.isArray(this.code) && this.code.length > 1 ? this.code[0] : '64 64';
    },
    viewBox: function viewBox() {
      return this.$attrs.viewBox || "0 0 ".concat(this.scale);
    },
    computedSize: function computedSize() {
      var addCustom = !this.size && (this.$attrs.width || this.$attrs.height);
      return this.size === 'custom' || addCustom ? 'custom-size' : this.size;
    },
    computedClasses: function computedClasses() {
      var size = this.computedSize;
      return this.customClasses || ['c-icon', _defineProperty({}, "c-icon-".concat(size), size)];
    }
  },
  methods: {
    toCamelCase: function toCamelCase(str) {
      return str.replace(/([-_][a-z0-9])/ig, function ($1) {
        return $1.toUpperCase().replace('-', '');
      });
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "38c0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CToast_vue_vue_type_style_index_0_id_7208152f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1e7e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CToast_vue_vue_type_style_index_0_id_7208152f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CToast_vue_vue_type_style_index_0_id_7208152f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CToast_vue_vue_type_style_index_0_id_7208152f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "399a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_perfect_scrollbar_css_vue_type_style_index_0_id_3738b722_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f9c7");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_perfect_scrollbar_css_vue_type_style_index_0_id_3738b722_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_perfect_scrollbar_css_vue_type_style_index_0_id_3738b722_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_perfect_scrollbar_css_vue_type_style_index_0_id_3738b722_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
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

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
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

  var styles = listToStyles(parentId, list)
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
      styles = listToStyles(parentId, newList)
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

/***/ "5788":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNodeName; });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),

/***/ "5f63":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fade-enter-active[data-v-c95d1f08],.fade-leave-active[data-v-c95d1f08]{-webkit-transition:opacity .3s;transition:opacity .3s}.fade-enter[data-v-c95d1f08],.fade-leave-to[data-v-c95d1f08]{opacity:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "6125":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getWindowScrollBarX; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0f88");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ef52");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a321");



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(element)).left + Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(element).scrollLeft;
}

/***/ }),

/***/ "62e4":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "723b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vue = __webpack_require__("8bbf");
Vue = 'default' in Vue ? Vue['default'] : Vue;

var version = '2.2.2';

var compatible = (/^2\./).test(Vue.version);
if (!compatible) {
  Vue.util.warn('VueClickaway ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}

// @SECTION: implementation

var HANDLER = '_vue_clickaway_handler';

function bind(el, binding, vnode) {
  unbind(el, binding);

  var vm = vnode.context;

  var callback = binding.value;
  if (typeof callback !== 'function') {
    if (false) {}
    return;
  }

  // @NOTE: Vue binds directives in microtasks, while UI events are dispatched
  //        in macrotasks. This causes the listener to be set up before
  //        the "origin" click event (the event that lead to the binding of
  //        the directive) arrives at the document root. To work around that,
  //        we ignore events until the end of the "initial" macrotask.
  // @REFERENCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
  // @REFERENCE: https://github.com/simplesmiler/vue-clickaway/issues/8
  var initialMacrotaskEnded = false;
  setTimeout(function() {
    initialMacrotaskEnded = true;
  }, 0);

  el[HANDLER] = function(ev) {
    // @NOTE: this test used to be just `el.contains`, but working with path is better,
    //        because it tests whether the element was there at the time of
    //        the click, not whether it is there now, that the event has arrived
    //        to the top.
    // @NOTE: `.path` is non-standard, the standard way is `.composedPath()`
    var path = ev.path || (ev.composedPath ? ev.composedPath() : undefined);
    if (initialMacrotaskEnded && (path ? path.indexOf(el) < 0 : !el.contains(ev.target))) {
      return callback.call(vm, ev);
    }
  };

  if (binding.arg) {
    document.documentElement.addEventListener(binding.arg, el[HANDLER], false);
  } 
  else { // default state, if no argument is passed
    document.documentElement.addEventListener('click', el[HANDLER], false);
  }
}

function unbind(el, binding) {
  if (binding.arg) {
    document.documentElement.removeEventListener(binding.arg, el[HANDLER], false);
  } 
  else { // default state, if no argument is passed
    document.documentElement.removeEventListener('click', el[HANDLER], false);
  }

  delete el[HANDLER];
}

var directive = {
  bind: bind,
  update: function(el, binding, vnode) {
    if (binding.value === binding.oldValue) return;
    bind(el, binding, vnode);
  },
  unbind: unbind,
};

var mixin = {
  directives: { onClickaway: directive },
};

exports.version = version;
exports.directive = directive;
exports.mixin = mixin;

/***/ }),

/***/ "7419":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CAlert_vue_vue_type_style_index_0_id_c95d1f08_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("87be");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CAlert_vue_vue_type_style_index_0_id_c95d1f08_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CAlert_vue_vue_type_style_index_0_id_c95d1f08_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CAlert_vue_vue_type_style_index_0_id_c95d1f08_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "77f9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return basePlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return clippingParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return popper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return reference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return variationPlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return placements; });
/* unused harmony export beforeRead */
/* unused harmony export read */
/* unused harmony export afterRead */
/* unused harmony export beforeMain */
/* unused harmony export main */
/* unused harmony export afterMain */
/* unused harmony export beforeWrite */
/* unused harmony export write */
/* unused harmony export afterWrite */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return modifierPhases; });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements =
/*#__PURE__*/
basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements =
/*#__PURE__*/
[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ "80f5":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ps[data-v-3738b722]{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x[data-v-3738b722]{height:15px;bottom:0}.ps__rail-x[data-v-3738b722],.ps__rail-y[data-v-3738b722]{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;position:absolute}.ps__rail-y[data-v-3738b722]{width:15px;right:0}.ps--active-x>.ps__rail-x[data-v-3738b722],.ps--active-y>.ps__rail-y[data-v-3738b722]{display:block;background-color:transparent}.ps--focus>.ps__rail-x[data-v-3738b722],.ps--focus>.ps__rail-y[data-v-3738b722],.ps--scrolling-x>.ps__rail-x[data-v-3738b722],.ps--scrolling-y>.ps__rail-y[data-v-3738b722],.ps:hover>.ps__rail-x[data-v-3738b722],.ps:hover>.ps__rail-y[data-v-3738b722]{opacity:.6}.ps .ps__rail-x.ps--clicking[data-v-3738b722],.ps .ps__rail-x[data-v-3738b722]:focus,.ps .ps__rail-x[data-v-3738b722]:hover,.ps .ps__rail-y.ps--clicking[data-v-3738b722],.ps .ps__rail-y[data-v-3738b722]:focus,.ps .ps__rail-y[data-v-3738b722]:hover{background-color:#eee;opacity:.9}.ps__thumb-x[data-v-3738b722]{transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px}.ps__thumb-x[data-v-3738b722],.ps__thumb-y[data-v-3738b722]{background-color:#aaa;border-radius:6px;position:absolute}.ps__thumb-y[data-v-3738b722]{transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px}.ps__rail-x.ps--clicking .ps__thumb-x[data-v-3738b722],.ps__rail-x:focus>.ps__thumb-x[data-v-3738b722],.ps__rail-x:hover>.ps__thumb-x[data-v-3738b722]{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y[data-v-3738b722],.ps__rail-y:focus>.ps__thumb-y[data-v-3738b722],.ps__rail-y:hover>.ps__thumb-y[data-v-3738b722]{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps[data-v-3738b722]{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps[data-v-3738b722]{overflow:auto!important}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "87be":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5f63");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("767ae63c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "a321":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getWindowScroll; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1fc0");

function getWindowScroll(node) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),

/***/ "a693":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "thead tr:not(:last-child) th[data-v-31168812]{border-bottom:1px}.transparent[data-v-31168812]{opacity:.4}.icon-transition[data-v-31168812]{-webkit-transition:transform .3s;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.arrow-position[data-v-31168812]{right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.rotate-icon[data-v-31168812]{-webkit-transform:translateY(-50%) rotate(-180deg);transform:translateY(-50%) rotate(-180deg)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "b1e2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debounce; });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),

/***/ "b50e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBasePlacement; });

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),

/***/ "b519":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getComputedStyle; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1fc0");

function getComputedStyle(element) {
  return Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(element).getComputedStyle(element);
}

/***/ }),

/***/ "b62b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js
var getWindow = __webpack_require__("1fc0");

// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
var getNodeName = __webpack_require__("5788");

// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
var getComputedStyle = __webpack_require__("b519");

// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
var instanceOf = __webpack_require__("2767");

// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(Object(getNodeName["a" /* default */])(element)) >= 0;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getOffsetParent; });




 // https://stackoverflow.com/a/9851769/2059996

var isFirefox = function isFirefox() {
  return typeof window.InstallTrigger !== 'undefined';
};

function getTrueOffsetParent(element) {
  var offsetParent;

  if (!Object(instanceOf["b" /* isHTMLElement */])(element) || !(offsetParent = element.offsetParent) || // https://github.com/popperjs/popper-core/issues/837
  isFirefox() && Object(getComputedStyle["a" /* default */])(offsetParent).position === 'fixed') {
    return null;
  }

  return offsetParent;
}

function getOffsetParent(element) {
  var window = Object(getWindow["a" /* default */])(element);
  var offsetParent = getTrueOffsetParent(element); // Find the nearest non-table offsetParent

  while (offsetParent && isTableElement(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && Object(getNodeName["a" /* default */])(offsetParent) === 'body' && Object(getComputedStyle["a" /* default */])(offsetParent).position === 'static') {
    return window;
  }

  return offsetParent || window;
}

/***/ }),

/***/ "b9e6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orderModifiers; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("77f9");
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__[/* modifierPhases */ "g"].reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "cd3f":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba"), __webpack_require__("62e4")(module)))

/***/ }),

/***/ "ceaa":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".toast[data-v-7208152f]{opacity:inherit}.fade-enter-active[data-v-7208152f]{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-leave-active[data-v-7208152f]{-webkit-transition:opacity 2s;transition:opacity 2s}.fade-enter[data-v-7208152f],.fade-leave-to[data-v-7208152f]{opacity:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "d116":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
var getBoundingClientRect = __webpack_require__("0f88");

// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
var getWindowScroll = __webpack_require__("a321");

// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js
var getWindow = __webpack_require__("1fc0");

// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
var instanceOf = __webpack_require__("2767");

// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js




function getNodeScroll(node) {
  if (node === Object(getWindow["a" /* default */])(node) || !Object(instanceOf["b" /* isHTMLElement */])(node)) {
    return Object(getWindowScroll["a" /* default */])(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
var getNodeName = __webpack_require__("5788");

// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
var getWindowScrollBarX = __webpack_require__("6125");

// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
var getDocumentElement = __webpack_require__("ef52");

// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCompositeRect; });





 // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement;
  var rect = Object(getBoundingClientRect["a" /* default */])(elementOrVirtualElement);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (!isFixed) {
    if (Object(getNodeName["a" /* default */])(offsetParent) !== 'body') {
      scroll = getNodeScroll(offsetParent);
    }

    if (Object(instanceOf["b" /* isHTMLElement */])(offsetParent)) {
      offsets = Object(getBoundingClientRect["a" /* default */])(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement = Object(getDocumentElement["a" /* default */])(offsetParent)) {
      offsets.x = Object(getWindowScrollBarX["a" /* default */])(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "e2e9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLayoutRect; });
// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}

/***/ }),

/***/ "ea1a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
var getNodeName = __webpack_require__("5788");

// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js

function getParentNode(element) {
  if (Object(getNodeName["a" /* default */])(element) === 'html') {
    return element;
  }

  return element.parentNode || // DOM Element detected
  // $FlowFixMe: need a better way to handle this...
  element.host || // ShadowRoot detected
  document.ownerDocument || // Fallback to ownerDocument if available
  document.documentElement // Or to documentElement if everything else fails
  ;
}
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
var getComputedStyle = __webpack_require__("b519");

// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
var instanceOf = __webpack_require__("2767");

// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(Object(getNodeName["a" /* default */])(node)) >= 0) {
    // $FlowFixMe: assume body is always available
    return node.ownerDocument.body;
  }

  if (Object(instanceOf["b" /* isHTMLElement */])(node)) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = Object(getComputedStyle["a" /* default */])(node),
        overflow = _getComputedStyle.overflow,
        overflowX = _getComputedStyle.overflowX,
        overflowY = _getComputedStyle.overflowY;

    if (/auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX)) {
      return node;
    }
  }

  return getScrollParent(getParentNode(node));
}
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js
var getWindow = __webpack_require__("1fc0");

// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return listScrollParents; });




function listScrollParents(element, list) {
  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = Object(getNodeName["a" /* default */])(scrollParent) === 'body';
  var target = isBody ? Object(getWindow["a" /* default */])(scrollParent) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

/***/ }),

/***/ "ef52":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDocumentElement; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2767");

function getDocumentElement(element) {
  // $FlowFixMe: assume body is always available
  return (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__[/* isElement */ "a"])(element) ? element.ownerDocument : element.document).documentElement;
}

/***/ }),

/***/ "f0bd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["a"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f9c7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("80f5");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("8ef96322", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var form_mixins_namespaceObject = {};
__webpack_require__.r(form_mixins_namespaceObject);
__webpack_require__.d(form_mixins_namespaceObject, "sharedComputedProps", function() { return sharedComputedProps; });
__webpack_require__.d(form_mixins_namespaceObject, "wrapperComputedProps", function() { return wrapperComputedProps; });
__webpack_require__.d(form_mixins_namespaceObject, "watchValue", function() { return watchValue; });
__webpack_require__.d(form_mixins_namespaceObject, "classesComputedProps", function() { return classesComputedProps; });
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "CAlert", function() { return CAlert; });
__webpack_require__.d(components_namespaceObject, "CBadge", function() { return CBadge; });
__webpack_require__.d(components_namespaceObject, "CBreadcrumb", function() { return CBreadcrumb; });
__webpack_require__.d(components_namespaceObject, "CBreadcrumbRouter", function() { return CBreadcrumbRouter; });
__webpack_require__.d(components_namespaceObject, "CButton", function() { return CButton; });
__webpack_require__.d(components_namespaceObject, "CButtonClose", function() { return CButtonClose; });
__webpack_require__.d(components_namespaceObject, "CButtonGroup", function() { return CButtonGroup; });
__webpack_require__.d(components_namespaceObject, "CButtonToolbar", function() { return CButtonToolbar; });
__webpack_require__.d(components_namespaceObject, "CCallout", function() { return CCallout; });
__webpack_require__.d(components_namespaceObject, "CCarousel", function() { return CCarousel; });
__webpack_require__.d(components_namespaceObject, "CCarouselItem", function() { return CCarouselItem; });
__webpack_require__.d(components_namespaceObject, "CCard", function() { return CCard; });
__webpack_require__.d(components_namespaceObject, "CCardBody", function() { return CCardBody; });
__webpack_require__.d(components_namespaceObject, "CCardFooter", function() { return CCardFooter; });
__webpack_require__.d(components_namespaceObject, "CCardHeader", function() { return CCardHeader; });
__webpack_require__.d(components_namespaceObject, "CCardGroup", function() { return CCardGroup; });
__webpack_require__.d(components_namespaceObject, "CCardImg", function() { return CCardImg; });
__webpack_require__.d(components_namespaceObject, "CCardImgOverlay", function() { return CCardImgOverlay; });
__webpack_require__.d(components_namespaceObject, "CCardLink", function() { return CCardLink; });
__webpack_require__.d(components_namespaceObject, "CCardSubtitle", function() { return CCardSubtitle; });
__webpack_require__.d(components_namespaceObject, "CCardText", function() { return CCardText; });
__webpack_require__.d(components_namespaceObject, "CCardTitle", function() { return CCardTitle; });
__webpack_require__.d(components_namespaceObject, "CCollapse", function() { return CCollapse; });
__webpack_require__.d(components_namespaceObject, "CDropdown", function() { return CDropdown; });
__webpack_require__.d(components_namespaceObject, "CDropdownHeader", function() { return CDropdownHeader; });
__webpack_require__.d(components_namespaceObject, "CDropdownDivider", function() { return CDropdownDivider; });
__webpack_require__.d(components_namespaceObject, "CDropdownItem", function() { return CDropdownItem; });
__webpack_require__.d(components_namespaceObject, "CElementCover", function() { return CElementCover; });
__webpack_require__.d(components_namespaceObject, "CEmbed", function() { return CEmbed; });
__webpack_require__.d(components_namespaceObject, "CForm", function() { return CForm; });
__webpack_require__.d(components_namespaceObject, "CFormGroup", function() { return CFormGroup; });
__webpack_require__.d(components_namespaceObject, "CInput", function() { return CInput; });
__webpack_require__.d(components_namespaceObject, "CInputCheckbox", function() { return CInputCheckbox; });
__webpack_require__.d(components_namespaceObject, "CInputFile", function() { return CInputFile; });
__webpack_require__.d(components_namespaceObject, "CInputRadio", function() { return CInputRadio; });
__webpack_require__.d(components_namespaceObject, "CSelect", function() { return CSelect; });
__webpack_require__.d(components_namespaceObject, "CTextarea", function() { return CTextarea; });
__webpack_require__.d(components_namespaceObject, "CContainer", function() { return CContainer; });
__webpack_require__.d(components_namespaceObject, "CRow", function() { return CRow; });
__webpack_require__.d(components_namespaceObject, "CCol", function() { return CCol; });
__webpack_require__.d(components_namespaceObject, "CImg", function() { return CImg; });
__webpack_require__.d(components_namespaceObject, "CJumbotron", function() { return CJumbotron; });
__webpack_require__.d(components_namespaceObject, "CLink", function() { return CLink; });
__webpack_require__.d(components_namespaceObject, "CListGroup", function() { return CListGroup; });
__webpack_require__.d(components_namespaceObject, "CListGroupItem", function() { return CListGroupItem; });
__webpack_require__.d(components_namespaceObject, "CMedia", function() { return CMedia; });
__webpack_require__.d(components_namespaceObject, "CModal", function() { return CModal; });
__webpack_require__.d(components_namespaceObject, "CNav", function() { return CNav; });
__webpack_require__.d(components_namespaceObject, "CNavItem", function() { return CNavItem; });
__webpack_require__.d(components_namespaceObject, "CNavbar", function() { return CNavbar; });
__webpack_require__.d(components_namespaceObject, "CNavbarBrand", function() { return CNavbarBrand; });
__webpack_require__.d(components_namespaceObject, "CNavbarNav", function() { return CNavbarNav; });
__webpack_require__.d(components_namespaceObject, "CNavbarText", function() { return CNavbarText; });
__webpack_require__.d(components_namespaceObject, "CPagination", function() { return CPagination; });
__webpack_require__.d(components_namespaceObject, "CProgress", function() { return CProgress; });
__webpack_require__.d(components_namespaceObject, "CProgressBar", function() { return CProgressBar; });
__webpack_require__.d(components_namespaceObject, "CRenderFunction", function() { return CRenderFunction; });
__webpack_require__.d(components_namespaceObject, "CScrollbar", function() { return CScrollbar; });
__webpack_require__.d(components_namespaceObject, "CSpinner", function() { return CSpinner; });
__webpack_require__.d(components_namespaceObject, "CSwitch", function() { return CSwitch; });
__webpack_require__.d(components_namespaceObject, "CDataTable", function() { return CDataTable; });
__webpack_require__.d(components_namespaceObject, "CTab", function() { return CTab; });
__webpack_require__.d(components_namespaceObject, "CTabs", function() { return CTabs; });
__webpack_require__.d(components_namespaceObject, "CFooter", function() { return CFooter; });
__webpack_require__.d(components_namespaceObject, "CHeader", function() { return CHeader; });
__webpack_require__.d(components_namespaceObject, "CHeaderBrand", function() { return CHeaderBrand; });
__webpack_require__.d(components_namespaceObject, "CHeaderNav", function() { return CHeaderNav; });
__webpack_require__.d(components_namespaceObject, "CHeaderNavItem", function() { return CHeaderNavItem; });
__webpack_require__.d(components_namespaceObject, "CHeaderNavLink", function() { return CHeaderNavLink; });
__webpack_require__.d(components_namespaceObject, "CSubheader", function() { return CSubheader; });
__webpack_require__.d(components_namespaceObject, "CSidebar", function() { return CSidebar; });
__webpack_require__.d(components_namespaceObject, "CSidebarBrand", function() { return CSidebarBrand; });
__webpack_require__.d(components_namespaceObject, "CSidebarClose", function() { return CSidebarClose; });
__webpack_require__.d(components_namespaceObject, "CSidebarFooter", function() { return CSidebarFooter; });
__webpack_require__.d(components_namespaceObject, "CSidebarForm", function() { return CSidebarForm; });
__webpack_require__.d(components_namespaceObject, "CSidebarHeader", function() { return CSidebarHeader; });
__webpack_require__.d(components_namespaceObject, "CSidebarMinimizer", function() { return CSidebarMinimizer; });
__webpack_require__.d(components_namespaceObject, "CSidebarNav", function() { return CSidebarNav; });
__webpack_require__.d(components_namespaceObject, "CSidebarNavDivider", function() { return CSidebarNavDivider; });
__webpack_require__.d(components_namespaceObject, "CSidebarNavDropdown", function() { return CSidebarNavDropdown; });
__webpack_require__.d(components_namespaceObject, "CSidebarNavItem", function() { return CSidebarNavItem; });
__webpack_require__.d(components_namespaceObject, "CSidebarNavTitle", function() { return CSidebarNavTitle; });
__webpack_require__.d(components_namespaceObject, "CWrapper", function() { return CWrapper; });
__webpack_require__.d(components_namespaceObject, "CToast", function() { return CToast; });
__webpack_require__.d(components_namespaceObject, "CToaster", function() { return CToaster; });
__webpack_require__.d(components_namespaceObject, "CToggler", function() { return CToggler; });
__webpack_require__.d(components_namespaceObject, "CWidgetProgress", function() { return CWidgetProgress; });
__webpack_require__.d(components_namespaceObject, "CWidgetIcon", function() { return CWidgetIcon; });
__webpack_require__.d(components_namespaceObject, "CWidgetBrand", function() { return CWidgetBrand; });
__webpack_require__.d(components_namespaceObject, "CWidgetProgressIcon", function() { return CWidgetProgressIcon; });
__webpack_require__.d(components_namespaceObject, "CWidgetDropdown", function() { return CWidgetDropdown; });
__webpack_require__.d(components_namespaceObject, "CWidgetSimple", function() { return CWidgetSimple; });
__webpack_require__.d(components_namespaceObject, "CIcon", function() { return CIconRaw; });
var directives_namespaceObject = {};
__webpack_require__.r(directives_namespaceObject);
__webpack_require__.d(directives_namespaceObject, "CPopover", function() { return CPopover; });
__webpack_require__.d(directives_namespaceObject, "CTooltip", function() { return CTooltip; });
__webpack_require__.d(directives_namespaceObject, "CEmitRootEvent", function() { return CEmitRootEvent; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/alert/CAlert.vue?vue&type=template&id=c95d1f08&scoped=true&
var CAlertvue_type_template_id_c95d1f08_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.fade ? 'fade' : null,"appear":true}},[(_vm.state)?_c('div',{class:_vm.alertClasses,attrs:{"role":"alert","aria-live":"polite","aria-atomic":"true"}},[(_vm.closeButton)?_c('CButtonClose',{on:{"click":function($event){return _vm.dismiss()}}}):_vm._e(),_vm._t("default")],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/alert/CAlert.vue?vue&type=template&id=c95d1f08&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-functional-data-merge/dist/lib.esm.js
var e=function(){return(e=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},t={kebab:/-(\w)/g,styleProp:/:(.*)/,styleList:/;(?![^(]*\))/g};function r(e,t){return t?t.toUpperCase():""}function s(e){for(var s,a={},c=0,o=e.split(t.styleList);c<o.length;c++){var n=o[c].split(t.styleProp),i=n[0],l=n[1];(i=i.trim())&&("string"==typeof l&&(l=l.trim()),a[(s=i,s.replace(t.kebab,r))]=l)}return a}function a(){for(var t,r,a={},c=arguments.length;c--;)for(var o=0,n=Object.keys(arguments[c]);o<n.length;o++)switch(t=n[o]){case"class":case"style":case"directives":if(Array.isArray(a[t])||(a[t]=[]),"style"===t){var i=void 0;i=Array.isArray(arguments[c].style)?arguments[c].style:[arguments[c].style];for(var l=0;l<i.length;l++){var y=i[l];"string"==typeof y&&(i[l]=s(y))}arguments[c].style=i}a[t]=a[t].concat(arguments[c][t]);break;case"staticClass":if(!arguments[c][t])break;void 0===a[t]&&(a[t]=""),a[t]&&(a[t]+=" "),a[t]+=arguments[c][t].trim();break;case"on":case"nativeOn":a[t]||(a[t]={});for(var p=0,f=Object.keys(arguments[c][t]||{});p<f.length;p++)r=f[p],a[t][r]?a[t][r]=[].concat(a[t][r],arguments[c][t][r]):a[t][r]=arguments[c][t][r];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":a[t]||(a[t]={}),a[t]=e({},arguments[c][t],a[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:a[t]||(a[t]=arguments[c][t])}return a}
//# sourceMappingURL=lib.esm.js.map

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/button/CButtonClose.vue?vue&type=script&lang=js&

/* harmony default export */ var CButtonClosevue_type_script_lang_js_ = ({
  name: 'CButtonClose',
  functional: true,
  props: {
    buttonClasses: {
      type: [String, Array, Object],
      default: 'close'
    }
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        slots = _ref.slots;
    return h('button', a(data, {
      class: props.buttonClasses,
      attrs: {
        type: 'button',
        'aria-label': 'Close'
      },
      domProps: !slots().default ? {
        innerHTML: '&times;'
      } : null
    }), slots().default);
  }
});
// CONCATENATED MODULE: ./src/components/button/CButtonClose.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_CButtonClosevue_type_script_lang_js_ = (CButtonClosevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/button/CButtonClose.vue
var CButtonClose_render, CButtonClose_staticRenderFns




/* normalize component */

var component = normalizeComponent(
  button_CButtonClosevue_type_script_lang_js_,
  CButtonClose_render,
  CButtonClose_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CButtonClose = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/alert/CAlert.vue?vue&type=script&lang=js&
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CAlertvue_type_script_lang_js_ = ({
  name: 'CAlert',
  components: {
    CButtonClose: CButtonClose
  },
  props: {
    color: String,
    closeButton: Boolean,
    show: {
      type: [Boolean, Number],
      default: true
    },
    fade: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      countdownTimeout: null,
      state: this.show
    };
  },
  computed: {
    alertClasses: function alertClasses() {
      return ['alert', _defineProperty({
        'alert-dismissible': this.closeButton
      }, "alert-".concat(this.color), this.color)];
    }
  },
  watch: {
    show: function show(val) {
      this.state = val;
    },
    state: {
      immediate: true,
      handler: function handler(val, oldVal) {
        var _this = this;

        this.clearCounter();

        if (!val && oldVal) {
          this.$emit('update:show', val);
        } else if (typeof val === 'number' && val) {
          this.countdownTimeout = setTimeout(function () {
            var isWatched = _this.$listeners['update:show'];
            isWatched ? _this.$emit('update:show', _this.state - 1) : _this.state--;
          }, 1000);
        }
      }
    }
  },
  destroyed: function destroyed() {
    this.clearCounter();
  },
  methods: {
    dismiss: function dismiss() {
      this.state = false;
    },
    clearCounter: function clearCounter() {
      if (this.countdownTimeout) {
        clearTimeout(this.countdownTimeout);
        this.countdownTimeout = null;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/alert/CAlert.vue?vue&type=script&lang=js&
 /* harmony default export */ var alert_CAlertvue_type_script_lang_js_ = (CAlertvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/alert/CAlert.vue?vue&type=style&index=0&id=c95d1f08&scoped=true&lang=css&
var CAlertvue_type_style_index_0_id_c95d1f08_scoped_true_lang_css_ = __webpack_require__("7419");

// CONCATENATED MODULE: ./src/components/alert/CAlert.vue






/* normalize component */

var CAlert_component = normalizeComponent(
  alert_CAlertvue_type_script_lang_js_,
  CAlertvue_type_template_id_c95d1f08_scoped_true_render,
  staticRenderFns,
  false,
  null,
  "c95d1f08",
  null
  
)

/* harmony default export */ var CAlert = (CAlert_component.exports);
// CONCATENATED MODULE: ./src/components/alert/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/link/CLink.vue?vue&type=script&lang=js&

function propsFactory() {
  return {
    href: String,
    rel: String,
    target: {
      type: String,
      default: '_self'
    },
    disabled: Boolean,
    active: Boolean,
    //these are router-link component props (default active class changed)
    activeClass: {
      type: String,
      default: 'router-link-active'
    },
    append: Boolean,
    event: {
      type: [String, Array],
      default: 'click'
    },
    exact: Boolean,
    exactActiveClass: {
      type: String,
      default: 'router-link-exact-active'
    },
    replace: Boolean,
    routerTag: {
      type: String,
      default: 'a'
    },
    to: [String, Object]
  };
}
var CLinkvue_type_script_lang_js_props = propsFactory();

function getComputedTag(_ref, parent) {
  var to = _ref.to,
      disabled = _ref.disabled;
  return Boolean(parent.$router) && to && !disabled ? 'router-link' : 'a';
}

function clickHandlerFactory(_ref2) {
  var disabled = _ref2.disabled,
      tag = _ref2.tag,
      href = _ref2.href,
      suppliedHandler = _ref2.suppliedHandler;
  return function onClick(e) {
    if (disabled && e instanceof Event) {
      // Stop event from bubbling up.
      e.stopPropagation(); // Kill the event loop attached to this specific EventTarget.

      e.stopImmediatePropagation();
    } else if (typeof suppliedHandler === 'function') {
      suppliedHandler.apply(void 0, arguments);
    }

    if (tag !== 'router-link' && href === '#' || disabled) {
      // Stop scroll-to-top behavior or navigation.
      e.preventDefault();
    }
  };
}

/* harmony default export */ var CLinkvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CLink',
  props: CLinkvue_type_script_lang_js_props,
  render: function render(h, _ref3) {
    var props = _ref3.props,
        data = _ref3.data,
        parent = _ref3.parent,
        children = _ref3.children;
    var tag = getComputedTag(props, parent);
    var rel = props.target === '_blank' && !props.rel ? 'noopener' : props.rel;
    var href = props.href || '#';
    var eventType = tag === 'router-link' ? 'nativeOn' : 'on';
    var suppliedHandler = (data[eventType] || {}).click;
    var handlers = {
      click: clickHandlerFactory({
        tag: tag,
        href: href,
        disabled: props.disabled,
        suppliedHandler: suppliedHandler
      })
    };
    var tabindex = data.attrs ? data.attrs.tabindex : null;
    var componentData = a(data, {
      class: {
        'disabled': props.disabled,
        'active': props.active
      },
      attrs: {
        rel: rel,
        href: href,
        target: props.target,
        tabindex: props.disabled ? '-1' : tabindex,
        'aria-disabled': tag === 'a' && props.disabled ? 'true' : null
      },
      props: Object.assign(props, {
        tag: props.routerTag
      })
    }); // If href prop exists on router-link (even undefined or null) it fails working on SSR

    if (tag === 'router-link') {
      delete componentData.attrs.href;
    } // We want to overwrite any click handler since our callback
    // will invoke the supplied handler if !props.disabled


    componentData[eventType] = Object.assign(componentData[eventType] || {}, handlers);
    return h(tag, componentData, children);
  }
});
// CONCATENATED MODULE: ./src/components/link/CLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var link_CLinkvue_type_script_lang_js_ = (CLinkvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/link/CLink.vue
var CLink_render, CLink_staticRenderFns




/* normalize component */

var CLink_component = normalizeComponent(
  link_CLinkvue_type_script_lang_js_,
  CLink_render,
  CLink_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CLink = (CLink_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/badge/CBadge.vue?vue&type=script&lang=js&
function CBadgevue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var CBadgevue_type_script_lang_js_props = Object.assign({}, CLinkvue_type_script_lang_js_props, {
  tag: {
    type: String,
    default: 'span'
  },
  color: String,
  shape: {
    type: String,
    validator: function validator(shape) {
      return ['', 'pill'].includes(shape);
    }
  }
});
/* harmony default export */ var CBadgevue_type_script_lang_js_ = ({
  functional: true,
  name: 'CBadge',
  props: CBadgevue_type_script_lang_js_props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var tag = !props.href && !props.to ? props.tag : CLink;
    var componentData = {
      staticClass: 'badge',
      class: (_class = {}, CBadgevue_type_script_lang_js_defineProperty(_class, "badge-".concat(props.color), props.color), CBadgevue_type_script_lang_js_defineProperty(_class, 'badge-pill', props.shape === 'pill'), CBadgevue_type_script_lang_js_defineProperty(_class, 'active', props.active), CBadgevue_type_script_lang_js_defineProperty(_class, 'disabled', props.disabled), _class),
      props: props
    };
    return h(tag, a(data, componentData), children);
  }
});
// CONCATENATED MODULE: ./src/components/badge/CBadge.vue?vue&type=script&lang=js&
 /* harmony default export */ var badge_CBadgevue_type_script_lang_js_ = (CBadgevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/badge/CBadge.vue
var CBadge_render, CBadge_staticRenderFns




/* normalize component */

var CBadge_component = normalizeComponent(
  badge_CBadgevue_type_script_lang_js_,
  CBadge_render,
  CBadge_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CBadge = (CBadge_component.exports);
// CONCATENATED MODULE: ./src/components/badge/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/breadcrumb/CBreadcrumb.vue?vue&type=template&id=1ffcd443&
var CBreadcrumbvue_type_template_id_1ffcd443_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ol',{staticClass:"breadcrumb"},[_vm._l((_vm.linkItems),function(item,index){return _c('li',{key:index,class:[item.addClasses, _vm.sharedClasses, _vm.addLinkClasses],attrs:{"role":"presentation"}},[_c('CLink',_vm._b({},'CLink',Object.assign({}, item, { addClasses: null, text: null }),false),[_vm._v(" "+_vm._s(item.text)+" ")])],1)}),(_vm.lastItem)?_c('li',{class:_vm.lastItemClasses,attrs:{"role":"presentation"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.lastItem.text)}})]):_vm._e(),_vm._t("default")],2)}
var CBreadcrumbvue_type_template_id_1ffcd443_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/breadcrumb/CBreadcrumb.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CBreadcrumbvue_type_script_lang_js_ = ({
  name: 'CBreadcrumb',
  components: {
    CLink: CLink
  },
  props: {
    items: Array,
    addClasses: [String, Array, Object],
    addLinkClasses: [String, Array, Object],
    addLastItemClasses: [String, Array, Object]
  },
  computed: {
    lastItem: function lastItem() {
      return this.items ? this.items[this.items.length - 1] : null;
    },
    linkItems: function linkItems() {
      return this.items ? this.items.slice(0, -1) : [];
    },
    sharedClasses: function sharedClasses() {
      return [this.addClasses, 'breadcrumb-item'];
    },
    lastItemClasses: function lastItemClasses() {
      return ['active', this.lastItem.addClasses, this.sharedClasses, this.addLastItemClasses];
    }
  }
});
// CONCATENATED MODULE: ./src/components/breadcrumb/CBreadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var breadcrumb_CBreadcrumbvue_type_script_lang_js_ = (CBreadcrumbvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/breadcrumb/CBreadcrumb.vue





/* normalize component */

var CBreadcrumb_component = normalizeComponent(
  breadcrumb_CBreadcrumbvue_type_script_lang_js_,
  CBreadcrumbvue_type_template_id_1ffcd443_render,
  CBreadcrumbvue_type_template_id_1ffcd443_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CBreadcrumb = (CBreadcrumb_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/breadcrumb/CBreadcrumbRouter.vue?vue&type=template&id=811c5d4a&
var CBreadcrumbRoutervue_type_template_id_811c5d4a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CBreadcrumb',_vm._b({},'CBreadcrumb',_vm.props,false),[_vm._t("default")],2)}
var CBreadcrumbRoutervue_type_template_id_811c5d4a_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/breadcrumb/CBreadcrumbRouter.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var CBreadcrumbRoutervue_type_script_lang_js_ = ({
  name: 'CBreadcrumbRouter',
  components: {
    CBreadcrumb: CBreadcrumb
  },
  props: {
    addClasses: [String, Array, Object],
    addLinkClasses: [String, Array, Object],
    addLastItemClasses: [String, Array, Object]
  },
  computed: {
    items: function items() {
      var routes = this.$route.matched.filter(function (route) {
        return route.name || route.meta && route.meta.label;
      });
      return routes.map(function (route) {
        var meta = route.meta || {};
        return {
          to: route,
          text: meta.label || route.name
        };
      });
    },
    props: function props() {
      return {
        items: this.items,
        addClasses: this.addClasses,
        addLinkClasses: this.addLinkClasses,
        addLastItemClasses: this.addLastItemClasses
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/breadcrumb/CBreadcrumbRouter.vue?vue&type=script&lang=js&
 /* harmony default export */ var breadcrumb_CBreadcrumbRoutervue_type_script_lang_js_ = (CBreadcrumbRoutervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/breadcrumb/CBreadcrumbRouter.vue





/* normalize component */

var CBreadcrumbRouter_component = normalizeComponent(
  breadcrumb_CBreadcrumbRoutervue_type_script_lang_js_,
  CBreadcrumbRoutervue_type_template_id_811c5d4a_render,
  CBreadcrumbRoutervue_type_template_id_811c5d4a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CBreadcrumbRouter = (CBreadcrumbRouter_component.exports);
// CONCATENATED MODULE: ./src/components/breadcrumb/index.js



// CONCATENATED MODULE: ./node_modules/@coreui/utils/src/pick-by-keys.js
var pickByKeys = function pickByKeys(originalObject, keys) {
  var newObj = {};

  for (var i = 0; i < keys.length; i++) {
    newObj[keys[i]] = originalObject[keys[i]];
  }

  return newObj;
};

/* harmony default export */ var pick_by_keys = (pickByKeys);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/button/CButton.vue?vue&type=script&lang=js&
function CButtonvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var btnProps = {
  block: Boolean,
  shape: {
    type: String,
    validator: function validator(shape) {
      return ['', 'pill', 'square'].includes(shape);
    }
  },
  variant: {
    type: String,
    validator: function validator(val) {
      return ['', 'ghost', 'outline'].includes(val);
    }
  },
  size: {
    type: String,
    validator: function validator(value) {
      return ['', 'sm', 'lg'].includes(value);
    }
  },
  color: String,
  type: {
    type: String,
    default: 'button'
  },
  pressed: {
    type: Boolean,
    default: null
  }
};
var CButtonvue_type_script_lang_js_props = Object.assign(propsFactory(), btnProps); // Helper functons to minimize runtime memory footprint when lots of buttons on page(TODO: check it)

function CButtonvue_type_script_lang_js_isLink(props) {
  return Boolean(props.href || props.to);
}

function isToggle(props) {
  return props.pressed !== null;
}

function computeClasses(props) {
  var _ref;

  var outlineSuffix = props.variant === 'outline' ? 'outline-' : '';
  return _ref = {}, CButtonvue_type_script_lang_js_defineProperty(_ref, "btn-".concat(outlineSuffix).concat(props.color), props.color), CButtonvue_type_script_lang_js_defineProperty(_ref, "btn-".concat(props.size), props.size), CButtonvue_type_script_lang_js_defineProperty(_ref, "btn-ghost-".concat(props.color), props.variant === 'ghost'), CButtonvue_type_script_lang_js_defineProperty(_ref, 'btn-block', props.block), CButtonvue_type_script_lang_js_defineProperty(_ref, 'btn-pill', props.shape === 'pill'), CButtonvue_type_script_lang_js_defineProperty(_ref, 'btn-square', props.shape === 'square'), CButtonvue_type_script_lang_js_defineProperty(_ref, 'disabled', props.disabled), CButtonvue_type_script_lang_js_defineProperty(_ref, 'active', props.pressed), _ref;
}

function computePassedProps(props) {
  if (!CButtonvue_type_script_lang_js_isLink(props)) {
    return null;
  }

  return pick_by_keys(props, Object.keys(propsFactory()));
}

function computeAttrs(props, data, isButton, toggle) {
  return {
    type: isButton ? props.type : null,
    // in CLink disabled property works diffrently
    disabled: isButton ? props.disabled : null,
    'aria-pressed': toggle ? String(props.pressed) : null,
    // autocomplete off is needed in toggle mode to prevent some browsers from
    // remembering the previous setting when using the back button.
    autocomplete: toggle ? 'off' : null
  };
}

/* harmony default export */ var CButtonvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CButton',
  props: CButtonvue_type_script_lang_js_props,
  render: function render(h, _ref2) {
    var props = _ref2.props,
        data = _ref2.data,
        listeners = _ref2.listeners,
        children = _ref2.children;
    var toggle = isToggle(props);
    var isButton = !CButtonvue_type_script_lang_js_isLink(props);
    var on = {
      click: function click() {
        if (toggle && listeners && listeners['update:pressed']) {
          // Send .sync updates to "pressed" prop (if .sync listener is set)
          listeners['update:pressed'](!props.pressed);
        }
      }
    };
    var componentData = {
      staticClass: 'btn',
      class: computeClasses(props),
      props: computePassedProps(props),
      attrs: computeAttrs(props, data, isButton, toggle),
      on: on
    };
    return h(isButton ? 'button' : CLink, a(data, componentData), children);
  }
});
// CONCATENATED MODULE: ./src/components/button/CButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_CButtonvue_type_script_lang_js_ = (CButtonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/button/CButton.vue
var CButton_render, CButton_staticRenderFns




/* normalize component */

var CButton_component = normalizeComponent(
  button_CButtonvue_type_script_lang_js_,
  CButton_render,
  CButton_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CButton = (CButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/button/CButtonGroup.vue?vue&type=script&lang=js&
function CButtonGroupvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var CButtonGroupvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CButtonGroup',
  props: {
    vertical: Boolean,
    size: {
      type: String,
      validator: function validator(size) {
        return ['', 'sm', 'lg'].includes(size);
      }
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('div', a(data, {
      class: [!props.vertical ? 'btn-group' : 'btn-group-vertical', CButtonGroupvue_type_script_lang_js_defineProperty({}, "btn-group-".concat(props.size), props.size)],
      attrs: {
        role: 'group'
      }
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/button/CButtonGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_CButtonGroupvue_type_script_lang_js_ = (CButtonGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/button/CButtonGroup.vue
var CButtonGroup_render, CButtonGroup_staticRenderFns




/* normalize component */

var CButtonGroup_component = normalizeComponent(
  button_CButtonGroupvue_type_script_lang_js_,
  CButtonGroup_render,
  CButtonGroup_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CButtonGroup = (CButtonGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/button/CButtonToolbar.vue?vue&type=script&lang=js&
function CButtonToolbarvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var CButtonToolbarvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CButtonToolbar',
  props: {
    justify: {
      type: String,
      validator: function validator(val) {
        return ['', 'start', 'end', 'between', 'center'].includes(val);
      }
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('div', a(data, {
      class: ['btn-toolbar', CButtonToolbarvue_type_script_lang_js_defineProperty({}, "justify-content-".concat(props.justify), props.justify)],
      attrs: {
        'aria-label': 'toolbar',
        role: 'toolbar'
      }
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/button/CButtonToolbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_CButtonToolbarvue_type_script_lang_js_ = (CButtonToolbarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/button/CButtonToolbar.vue
var CButtonToolbar_render, CButtonToolbar_staticRenderFns




/* normalize component */

var CButtonToolbar_component = normalizeComponent(
  button_CButtonToolbarvue_type_script_lang_js_,
  CButtonToolbar_render,
  CButtonToolbar_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CButtonToolbar = (CButtonToolbar_component.exports);
// CONCATENATED MODULE: ./src/components/button/index.js





// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/callout/CCallout.vue?vue&type=template&id=8fc790c6&
var CCalloutvue_type_template_id_8fc790c6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("c-callout " + (_vm.color ? 'c-callout-' + _vm.color : ''))},[_vm._t("default")],2)}
var CCalloutvue_type_template_id_8fc790c6_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/callout/CCallout.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CCalloutvue_type_script_lang_js_ = ({
  name: 'CCallout',
  props: {
    color: String
  }
});
// CONCATENATED MODULE: ./src/components/callout/CCallout.vue?vue&type=script&lang=js&
 /* harmony default export */ var callout_CCalloutvue_type_script_lang_js_ = (CCalloutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/callout/CCallout.vue





/* normalize component */

var CCallout_component = normalizeComponent(
  callout_CCalloutvue_type_script_lang_js_,
  CCalloutvue_type_template_id_8fc790c6_render,
  CCalloutvue_type_template_id_8fc790c6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCallout = (CCallout_component.exports);
// CONCATENATED MODULE: ./src/components/callout/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/carousel/CCarousel.vue?vue&type=template&id=9c4fbe64&scoped=true&
var CCarouselvue_type_template_id_9c4fbe64_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"carousel slide",style:({ height: _vm.height || 'auto' })},[(_vm.indicators)?_c('ol',{class:_vm.indicatorClasses},_vm._l((_vm.items.length),function(index,key){return _c('li',{key:key,class:{ 'active': _vm.activated === key },on:{"click":function($event){return _vm.setItem(key)}}})}),0):_vm._e(),_c('div',{staticClass:"carousel-inner"},[_vm._t("default")],2),(_vm.arrows)?[_c('a',{staticClass:"carousel-control-prev",on:{"click":_vm.previousItem}},[_c('span',{staticClass:"carousel-control-prev-icon",attrs:{"aria-label":"Previous"}})]),_c('a',{staticClass:"carousel-control-next",on:{"click":_vm.nextItem}},[_c('span',{staticClass:"carousel-control-next-icon",attrs:{"aria-label":"Next"}})])]:_vm._e()],2)}
var CCarouselvue_type_template_id_9c4fbe64_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/carousel/CCarousel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CCarouselvue_type_script_lang_js_ = ({
  name: 'CCarousel',
  props: {
    interval: Number,
    animate: Boolean,
    indicators: Boolean,
    arrows: Boolean,
    indicatorClasses: {
      type: [String, Array, Object],
      default: 'carousel-indicators'
    },
    height: [String, Number]
  },
  data: function data() {
    return {
      active: null,
      activated: null,
      items: [],
      currentInterval: null,
      transitioning: false
    };
  },
  mounted: function mounted() {
    this.items = this.$children;
    var activated = this.items.map(function (item, index) {
      return item.active ? index : null;
    }).filter(function (item) {
      return item;
    });
    this.active = activated[0] || 0;
    this.activate(activated[0] || 0);
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.currentInterval);
  },
  methods: {
    resetInterval: function resetInterval() {
      var _this = this;

      if (this.animate && this.interval) {
        clearInterval(this.currentInterval);
        this.currentInterval = setInterval(function () {
          _this.nextItem();
        }, this.interval);
      }
    },
    nextItem: function nextItem() {
      this.setItem(this.active === this.items.length - 1 ? 0 : this.active + 1, 'next');
    },
    previousItem: function previousItem() {
      this.setItem(this.active === 0 ? this.items.length - 1 : this.active - 1, 'prev');
    },
    setItem: function setItem(index) {
      var passedOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (index === this.activated) {
        return this.resetInterval();
      } else if (this.transitioning) {
        return;
      }

      var order = passedOrder || (this.active > index ? 'prev' : 'next');
      this.active = index;
      this.activate(index, order);
    },
    activate: function activate(index, order) {
      var _this2 = this;

      this.resetInterval();
      this.activated = index;

      if (!order || !this.animate) {
        this.items.forEach(function (item) {
          return item.$emit('setItem', _this2.items[index]);
        });
      } else {
        this.slide(index, order);
      }
    },
    slide: function slide(i, order) {
      var _this3 = this;

      this.items[i].$emit('slideToItem', this.items[i], order);
      this.items.forEach(function (item, idx) {
        if (i !== idx) {
          item.$emit('slideToItem', _this3.items[i], order);
        }
      });
      this.transitioning = true;
      setTimeout(function () {
        return _this3.transitioning = false;
      }, 600);
    }
  }
});
// CONCATENATED MODULE: ./src/components/carousel/CCarousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var carousel_CCarouselvue_type_script_lang_js_ = (CCarouselvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/carousel/CCarousel.vue






/* normalize component */

var CCarousel_component = normalizeComponent(
  carousel_CCarouselvue_type_script_lang_js_,
  CCarouselvue_type_template_id_9c4fbe64_scoped_true_render,
  CCarouselvue_type_template_id_9c4fbe64_scoped_true_staticRenderFns,
  false,
  null,
  "9c4fbe64",
  null
  
)

/* harmony default export */ var CCarousel = (CCarousel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/carousel/CCarouselItem.vue?vue&type=template&id=643514fc&
var CCarouselItemvue_type_template_id_643514fc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.itemClasses},[(_vm.image)?_c('CImg',_vm._b({staticClass:"d-block w-100 h-100 img-fluid"},'CImg',_vm.computedImage,false)):_vm._e(),_vm._t("default",[(_vm.captionHeader || _vm.captionText)?_c('div',{staticClass:"carousel-caption"},[_c('h3',[_vm._v(_vm._s(_vm.captionHeader))]),_c('p',[_vm._v(_vm._s(_vm.captionText))])]):_vm._e()])],2)}
var CCarouselItemvue_type_template_id_643514fc_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/image/CImg.vue?vue&type=template&id=91e4e712&
var CImgvue_type_template_id_91e4e712_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.src && _vm.isActive)?_c('img',{class:_vm.imageClasses,attrs:{"src":_vm.src,"alt":_vm.alt,"width":_vm.width,"height":_vm.height}}):_c('svg',{class:_vm.imageClasses,style:({'background-color': _vm.isActive ? _vm.placeholderColor : 'transparent' }),attrs:{"width":_vm.width,"height":_vm.height}})}
var CImgvue_type_template_id_91e4e712_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/image/CImg.vue?vue&type=script&lang=js&
function CImgvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CImgvue_type_script_lang_js_ = ({
  name: 'CImg',
  props: {
    src: String,
    alt: String,
    width: [Number, String],
    height: [Number, String],
    block: Boolean,
    fluid: Boolean,
    fluidGrow: Boolean,
    shape: String,
    thumbnail: Boolean,
    align: {
      type: String,
      validator: function validator(align) {
        return ['', 'left', 'right', 'center'].includes(align);
      }
    },
    placeholderColor: {
      type: String,
      default: 'transparent'
    }
  },
  computed: {
    isActive: function isActive() {
      //active prop is present in CImgLazy component, here always undefined
      return this.active !== false;
    },
    alignClass: function alignClass() {
      if (this.align === 'center') {
        return 'mx-auto';
      } else if (this.align === 'right') {
        return 'float-right';
      } else if (this.align === 'left') {
        return 'float-left';
      }

      return null;
    },
    imageClasses: function imageClasses() {
      var _ref;

      return [//animationClasses is rendered in CImgLazy
      this.animationClasses, this.alignClass, (_ref = {
        'img-thumbnail': this.thumbnail,
        'img-fluid': this.fluid || this.fluidGrow,
        'w-100': this.fluidGrow
      }, CImgvue_type_script_lang_js_defineProperty(_ref, "".concat(this.shape), this.shape), CImgvue_type_script_lang_js_defineProperty(_ref, 'd-block', this.block), _ref)];
    }
  }
});
// CONCATENATED MODULE: ./src/components/image/CImg.vue?vue&type=script&lang=js&
 /* harmony default export */ var image_CImgvue_type_script_lang_js_ = (CImgvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/image/CImg.vue





/* normalize component */

var CImg_component = normalizeComponent(
  image_CImgvue_type_script_lang_js_,
  CImgvue_type_template_id_91e4e712_render,
  CImgvue_type_template_id_91e4e712_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CImg = (CImg_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/carousel/CCarouselItem.vue?vue&type=script&lang=js&
function CCarouselItemvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CCarouselItemvue_type_script_lang_js_ = ({
  name: 'CCarouselItem',
  components: {
    CImg: CImg
  },
  props: {
    image: [String, Object],
    captionHeader: String,
    captionText: String,
    active: Boolean
  },
  data: function data() {
    return {
      activated: false,
      transitioning: false,
      order: null
    };
  },
  mounted: function mounted() {
    this.$on('setItem', this.setItem);
    this.$on('slideToItem', this.slideToItem);
  },
  computed: {
    direction: function direction() {
      return this.order === 'next' ? 'left' : 'right';
    },
    itemClasses: function itemClasses() {
      var _ref;

      return ['carousel-item', (_ref = {}, CCarouselItemvue_type_script_lang_js_defineProperty(_ref, "carousel-item-".concat(this.order), this.order && !this.activated), CCarouselItemvue_type_script_lang_js_defineProperty(_ref, "carousel-item-".concat(this.direction), this.transitioning), CCarouselItemvue_type_script_lang_js_defineProperty(_ref, 'active', this.activated), _ref)];
    },
    computedImage: function computedImage() {
      return typeof this.image === 'string' ? {
        src: this.image
      } : this.image;
    }
  },
  methods: {
    setItem: function setItem(item) {
      this.activated = this._uid === item._uid;
    },
    slideToItem: function slideToItem(item, order) {
      var _this = this;

      if (this._uid === item._uid || this.activated) {
        this.order = order;
        setTimeout(function () {
          _this.transitioning = true;
        }, 0);
        setTimeout(function () {
          _this.transitioning = false;
          _this.order = null;

          _this.setItem(item);
        }, 600);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/carousel/CCarouselItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var carousel_CCarouselItemvue_type_script_lang_js_ = (CCarouselItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/carousel/CCarouselItem.vue





/* normalize component */

var CCarouselItem_component = normalizeComponent(
  carousel_CCarouselItemvue_type_script_lang_js_,
  CCarouselItemvue_type_template_id_643514fc_render,
  CCarouselItemvue_type_template_id_643514fc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCarouselItem = (CCarouselItem_component.exports);
// CONCATENATED MODULE: ./src/components/carousel/index.js



// CONCATENATED MODULE: ./src/components/card/shared-card-props.js
/* harmony default export */ var shared_card_props = ({
  tag: String,
  color: String,
  borderColor: String,
  textColor: String,
  align: {
    type: String,
    validator: function validator(val) {
      return ['', 'left', 'center', 'right'].includes(val);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/card/CCardBody.vue?vue&type=script&lang=js&
function CCardBodyvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ var CCardBodyvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CCardBody',
  props: shared_card_props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag || 'div', a(data, {
      staticClass: 'card-body',
      class: [(_ref2 = {}, CCardBodyvue_type_script_lang_js_defineProperty(_ref2, "bg-".concat(props.color), props.color), CCardBodyvue_type_script_lang_js_defineProperty(_ref2, "border-".concat(props.borderColor), props.borderColor), CCardBodyvue_type_script_lang_js_defineProperty(_ref2, "text-".concat(props.textColor), props.textColor), CCardBodyvue_type_script_lang_js_defineProperty(_ref2, "text-".concat(props.align), props.align), _ref2)]
    }), [children]);
  }
});
// CONCATENATED MODULE: ./src/components/card/CCardBody.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_CCardBodyvue_type_script_lang_js_ = (CCardBodyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/card/CCardBody.vue
var CCardBody_render, CCardBody_staticRenderFns




/* normalize component */

var CCardBody_component = normalizeComponent(
  card_CCardBodyvue_type_script_lang_js_,
  CCardBody_render,
  CCardBody_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCardBody = (CCardBody_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/card/CCard.vue?vue&type=script&lang=js&
function CCardvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var CCardvue_type_script_lang_js_props = Object.assign(shared_card_props, {
  bodyWrapper: Boolean,
  accentColor: String
});
/* harmony default export */ var CCardvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CCard',
  props: CCardvue_type_script_lang_js_props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots;
    var slot = slots().default;
    var content = props.bodyWrapper ? h(CCardBody, slot) : slot;
    return h(props.tag || 'div', a(data, {
      staticClass: 'card',
      class: (_class = {}, CCardvue_type_script_lang_js_defineProperty(_class, "card-accent-".concat(props.accentColor), props.accentColor), CCardvue_type_script_lang_js_defineProperty(_class, "text-".concat(props.align), props.align), CCardvue_type_script_lang_js_defineProperty(_class, "bg-".concat(props.color), props.color), CCardvue_type_script_lang_js_defineProperty(_class, "border-".concat(props.borderColor), props.borderColor), CCardvue_type_script_lang_js_defineProperty(_class, "text-".concat(props.textColor), props.textColor), _class)
    }), [content]);
  }
});
// CONCATENATED MODULE: ./src/components/card/CCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_CCardvue_type_script_lang_js_ = (CCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/card/CCard.vue
var CCard_render, CCard_staticRenderFns




/* normalize component */

var CCard_component = normalizeComponent(
  card_CCardvue_type_script_lang_js_,
  CCard_render,
  CCard_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCard = (CCard_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/card/CCardFooter.vue?vue&type=script&lang=js&
function CCardFootervue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ var CCardFootervue_type_script_lang_js_ = ({
  functional: true,
  name: 'CCardFooter',
  props: shared_card_props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag || 'footer', a(data, {
      staticClass: 'card-footer',
      class: [(_ref2 = {}, CCardFootervue_type_script_lang_js_defineProperty(_ref2, "text-".concat(props.align), props.align), CCardFootervue_type_script_lang_js_defineProperty(_ref2, "bg-".concat(props.color), props.color), CCardFootervue_type_script_lang_js_defineProperty(_ref2, "border-".concat(props.borderColor), props.borderColor), CCardFootervue_type_script_lang_js_defineProperty(_ref2, "text-".concat(props.textColor), props.textColor), _ref2)]
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/card/CCardFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_CCardFootervue_type_script_lang_js_ = (CCardFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/card/CCardFooter.vue
var CCardFooter_render, CCardFooter_staticRenderFns




/* normalize component */

var CCardFooter_component = normalizeComponent(
  card_CCardFootervue_type_script_lang_js_,
  CCardFooter_render,
  CCardFooter_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCardFooter = (CCardFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/card/CCardGroup.vue?vue&type=script&lang=js&

/* harmony default export */ var CCardGroupvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CCardGroup',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    deck: Boolean,
    columns: Boolean
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var type = props.columns ? 'columns' : props.deck ? 'deck' : 'group';
    return h(props.tag, a(data, {
      staticClass: "card-".concat(type)
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/card/CCardGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_CCardGroupvue_type_script_lang_js_ = (CCardGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/card/CCardGroup.vue
var CCardGroup_render, CCardGroup_staticRenderFns




/* normalize component */

var CCardGroup_component = normalizeComponent(
  card_CCardGroupvue_type_script_lang_js_,
  CCardGroup_render,
  CCardGroup_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCardGroup = (CCardGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/card/CCardHeader.vue?vue&type=script&lang=js&
function CCardHeadervue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ var CCardHeadervue_type_script_lang_js_ = ({
  functional: true,
  name: 'CCardHeader',
  props: shared_card_props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag || 'header', a(data, {
      staticClass: 'card-header',
      class: [(_ref2 = {}, CCardHeadervue_type_script_lang_js_defineProperty(_ref2, "text-".concat(props.align), props.align), CCardHeadervue_type_script_lang_js_defineProperty(_ref2, "bg-".concat(props.color), props.color), CCardHeadervue_type_script_lang_js_defineProperty(_ref2, "border-".concat(props.borderColor), props.borderColor), CCardHeadervue_type_script_lang_js_defineProperty(_ref2, "text-".concat(props.textColor), props.textColor), _ref2)]
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/card/CCardHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_CCardHeadervue_type_script_lang_js_ = (CCardHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/card/CCardHeader.vue
var CCardHeader_render, CCardHeader_staticRenderFns




/* normalize component */

var CCardHeader_component = normalizeComponent(
  card_CCardHeadervue_type_script_lang_js_,
  CCardHeader_render,
  CCardHeader_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCardHeader = (CCardHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/card/CCardImg.vue?vue&type=script&lang=js&


var CCardImgvue_type_script_lang_js_props = Object.assign({
  variant: {
    type: String,
    default: 'full',
    validator: function validator(val) {
      return ['', 'top', 'bottom', 'full'].includes(val);
    }
  }
}, CImg.props);
/* harmony default export */ var CCardImgvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CCardImg',
  props: CCardImgvue_type_script_lang_js_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;
    var haveClassSuffix = props.variant !== 'full';
    return h(CImg, a(data, {
      class: "card-img".concat(haveClassSuffix ? "-".concat(props.variant) : ''),
      props: props
    }));
  }
});
// CONCATENATED MODULE: ./src/components/card/CCardImg.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_CCardImgvue_type_script_lang_js_ = (CCardImgvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/card/CCardImg.vue
var CCardImg_render, CCardImg_staticRenderFns




/* normalize component */

var CCardImg_component = normalizeComponent(
  card_CCardImgvue_type_script_lang_js_,
  CCardImg_render,
  CCardImg_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCardImg = (CCardImg_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/card/CCardImgOverlay.vue?vue&type=script&lang=js&

/* harmony default export */ var CCardImgOverlayvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CCardImgOverlay',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, a(data, {
      staticClass: 'card-img-overlay'
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/card/CCardImgOverlay.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_CCardImgOverlayvue_type_script_lang_js_ = (CCardImgOverlayvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/card/CCardImgOverlay.vue
var CCardImgOverlay_render, CCardImgOverlay_staticRenderFns




/* normalize component */

var CCardImgOverlay_component = normalizeComponent(
  card_CCardImgOverlayvue_type_script_lang_js_,
  CCardImgOverlay_render,
  CCardImgOverlay_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCardImgOverlay = (CCardImgOverlay_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/card/CCardLink.vue?vue&type=script&lang=js&


/* harmony default export */ var CCardLinkvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CCardLink',
  props: CLinkvue_type_script_lang_js_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(CLink, a(data, {
      staticClass: 'card-link',
      props: props
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/card/CCardLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_CCardLinkvue_type_script_lang_js_ = (CCardLinkvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/card/CCardLink.vue
var CCardLink_render, CCardLink_staticRenderFns




/* normalize component */

var CCardLink_component = normalizeComponent(
  card_CCardLinkvue_type_script_lang_js_,
  CCardLink_render,
  CCardLink_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCardLink = (CCardLink_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/card/CCardSubtitle.vue?vue&type=script&lang=js&

/* harmony default export */ var CCardSubtitlevue_type_script_lang_js_ = ({
  functional: true,
  name: 'CCardSubtitle',
  props: {
    tag: {
      type: String,
      default: 'h6'
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, a(data, {
      staticClass: 'card-subtitle'
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/card/CCardSubtitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_CCardSubtitlevue_type_script_lang_js_ = (CCardSubtitlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/card/CCardSubtitle.vue
var CCardSubtitle_render, CCardSubtitle_staticRenderFns




/* normalize component */

var CCardSubtitle_component = normalizeComponent(
  card_CCardSubtitlevue_type_script_lang_js_,
  CCardSubtitle_render,
  CCardSubtitle_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCardSubtitle = (CCardSubtitle_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/card/CCardText.vue?vue&type=script&lang=js&

/* harmony default export */ var CCardTextvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CCardText',
  props: {
    tag: {
      type: String,
      default: 'p'
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, a(data, {
      staticClass: 'card-text'
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/card/CCardText.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_CCardTextvue_type_script_lang_js_ = (CCardTextvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/card/CCardText.vue
var CCardText_render, CCardText_staticRenderFns




/* normalize component */

var CCardText_component = normalizeComponent(
  card_CCardTextvue_type_script_lang_js_,
  CCardText_render,
  CCardText_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCardText = (CCardText_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/card/CCardTitle.vue?vue&type=script&lang=js&

/* harmony default export */ var CCardTitlevue_type_script_lang_js_ = ({
  functional: true,
  name: 'CCardTitle',
  props: {
    tag: {
      type: String,
      default: 'h4'
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, a(data, {
      staticClass: 'card-title'
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/card/CCardTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_CCardTitlevue_type_script_lang_js_ = (CCardTitlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/card/CCardTitle.vue
var CCardTitle_render, CCardTitle_staticRenderFns




/* normalize component */

var CCardTitle_component = normalizeComponent(
  card_CCardTitlevue_type_script_lang_js_,
  CCardTitle_render,
  CCardTitle_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCardTitle = (CCardTitle_component.exports);
// CONCATENATED MODULE: ./src/components/card/index.js












// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/collapse/CCollapse.vue?vue&type=template&id=d382ee24&
var CCollapsevue_type_template_id_d382ee24_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{ 'navbar-collapse': this.navbar }},[_vm._t("default")],2)}
var CCollapsevue_type_template_id_d382ee24_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/collapse/CCollapse.vue?vue&type=script&lang=js&
//
//
//
//
//
//
var CCollapsevue_type_script_lang_js_props = {
  duration: {
    type: Number,
    default: 400
  },
  transition: {
    type: String,
    default: 'ease-in-out'
  },
  show: Boolean,
  navbar: Boolean
};
/* harmony default export */ var CCollapsevue_type_script_lang_js_ = ({
  name: 'CCollapse',
  props: CCollapsevue_type_script_lang_js_props,
  data: function data() {
    return {
      collapsing: false,
      heightWatcher: null,
      visible: this.show,
      el: null
    };
  },
  watch: {
    show: function show(val) {
      this.visible = val;
    },
    visible: function visible(val) {
      this.collapseController(val);
    }
  },
  mounted: function mounted() {
    this.$el.style.display = this.visible ? '' : 'none';
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.heightWatcher);
  },
  methods: {
    collapseController: function collapseController(val) {
      if (this.collapsing === false) {
        val ? this.toggle(true) : this.toggle(false);
        this.setFinishTimer(this.duration);
      } else {
        this.turn();
        var height = Number(this.collapsing.slice(0, -2));
        var current = this.$el.offsetHeight;
        var time = (val ? height - current : current) / height;
        this.setFinishTimer(this.duration * time);
      }
    },
    turn: function turn() {
      if (this.visible) {
        this.$el.style.height = this.collapsing;
      } else {
        this.$el.style.height = 0;
      }
    },
    toggle: function toggle(val) {
      var _this = this;

      this.$el.style.display = '';
      this.collapsing = this.$el.scrollHeight + 'px';
      this.$el.style.height = val ? 0 : this.$el.scrollHeight + 'px';
      this.$el.style.overflow = 'hidden';
      this.$el.style.transition = "all ".concat(this.duration, "ms ").concat(this.transition);
      var self = this;
      setTimeout(function () {
        self.$el.style.height = val ? _this.collapsing : 0;
      }, 0);
    },
    setFinishTimer: function setFinishTimer(duration) {
      var _this2 = this;

      clearTimeout(this.heightWatcher);
      var self = this;
      this.heightWatcher = setTimeout(function () {
        self.collapsing = false;
        self.$el.style.display = self.visible ? '' : 'none';
        self.$el.style.height = '';
        self.$el.style.overflow = '';
        self.$el.style.transition = '';

        _this2.$emit('finish', self.visible);
      }, duration);
    }
  }
});
// CONCATENATED MODULE: ./src/components/collapse/CCollapse.vue?vue&type=script&lang=js&
 /* harmony default export */ var collapse_CCollapsevue_type_script_lang_js_ = (CCollapsevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/collapse/CCollapse.vue





/* normalize component */

var CCollapse_component = normalizeComponent(
  collapse_CCollapsevue_type_script_lang_js_,
  CCollapsevue_type_template_id_d382ee24_render,
  CCollapsevue_type_template_id_d382ee24_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCollapse = (CCollapse_component.exports);
// CONCATENATED MODULE: ./src/components/collapse/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/dropdown/CDropdown.vue?vue&type=template&id=8b3a0e64&
var CDropdownvue_type_template_id_8b3a0e64_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.inNav ? 'li' : 'div',{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:(_vm.hide),expression:"hide"}],tag:"component",class:_vm.computedDropdownClasses,on:{"click":function($event){return _vm.checkClick($event)}}},[_vm._t("toggler",[_c(_vm.togglerTag,_vm._g(_vm._b({tag:"component",class:_vm.computedTogglerClasses},'component',_vm.splittedToggler ? '' : _vm.togglerAttrs,false),{ click: _vm.splittedToggler ? _vm.hide : _vm.toggle }),[_vm._t("toggler-content",[_vm._v(_vm._s(_vm.togglerText))])],2),(_vm.splittedToggler)?_c('button',_vm._b({staticClass:"dropdown-toggle dropdown-toggle-split",class:_vm.computedTogglerClasses,on:{"click":_vm.toggle}},'button',_vm.togglerAttrs,false)):_vm._e()]),_c('div',{ref:"menu",class:_vm.computedMenuClasses},[_vm._t("default")],2)],2)}
var CDropdownvue_type_template_id_8b3a0e64_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/index.js
var lib = __webpack_require__("1235");

// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js
var getWindow = __webpack_require__("1fc0");

// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = Object(getWindow["a" /* default */])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
}

/* harmony default export */ var eventListeners = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js
var getBasePlacement = __webpack_require__("b50e");

// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split('-')[1];
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/enums.js
var enums = __webpack_require__("77f9");

// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeOffsets.js




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? Object(getBasePlacement["a" /* default */])(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case enums["m" /* top */]:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case enums["c" /* bottom */]:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case enums["k" /* right */]:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case enums["f" /* left */]:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case enums["l" /* start */]:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) - Math.floor(reference[len] / 2 - element[len] / 2);
        break;

      case enums["e" /* end */]:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) + Math.ceil(reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js


function popperOffsets_popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
}

/* harmony default export */ var modifiers_popperOffsets = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets_popperOffsets,
  data: {}
});
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js + 1 modules
var getOffsetParent = __webpack_require__("b62b");

// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
var getDocumentElement = __webpack_require__("ef52");

// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js






var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsets(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive;

  var _roundOffsets = roundOffsets(offsets),
      x = _roundOffsets.x,
      y = _roundOffsets.y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = enums["f" /* left */];
  var sideY = enums["m" /* top */];
  var win = window;

  if (adaptive) {
    var offsetParent = Object(getOffsetParent["a" /* default */])(popper);

    if (offsetParent === Object(getWindow["a" /* default */])(popper)) {
      offsetParent = Object(getDocumentElement["a" /* default */])(popper);
    } // $FlowFixMe: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    /*:: offsetParent = (offsetParent: Element); */


    if (placement === enums["m" /* top */]) {
      sideY = enums["c" /* bottom */];
      y -= offsetParent.clientHeight - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === enums["f" /* left */]) {
      sideX = enums["k" /* right */];
      x -= offsetParent.clientWidth - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref3) {
  var state = _ref3.state,
      options = _ref3.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive;

  if (false) { var _getComputedStyle, transitionProperty; }

  var commonStyles = {
    placement: Object(getBasePlacement["a" /* default */])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  }; // popper offsets are always available

  state.styles.popper = Object.assign({}, state.styles.popper, {}, mapToStyles(Object.assign({}, commonStyles, {
    offsets: state.modifiersData.popperOffsets,
    position: state.options.strategy,
    adaptive: adaptive
  }))); // arrow offsets may not be available

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, {}, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
}

/* harmony default export */ var modifiers_computeStyles = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
var getNodeName = __webpack_require__("5788");

// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
var instanceOf = __webpack_require__("2767");

// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!Object(instanceOf["b" /* isHTMLElement */])(element) || !Object(getNodeName["a" /* default */])(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function applyStyles_effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: 'absolute',
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!Object(instanceOf["b" /* isHTMLElement */])(element) || !Object(getNodeName["a" /* default */])(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}

/* harmony default export */ var modifiers_applyStyles = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: applyStyles_effect,
  requires: ['computeStyles']
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/offset.js


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = Object(getBasePlacement["a" /* default */])(placement);
  var invertDistance = [enums["f" /* left */], enums["m" /* top */]].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [enums["f" /* left */], enums["k" /* right */]].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset_offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = enums["h" /* placements */].reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;
  state.modifiersData.popperOffsets.x += x;
  state.modifiersData.popperOffsets.y += y;
  state.modifiersData[name] = data;
}

/* harmony default export */ var modifiers_offset = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset_offset
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var getOppositeVariationPlacement_hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return getOppositeVariationPlacement_hash[matched];
  });
}
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
var getBoundingClientRect = __webpack_require__("0f88");

// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js

function getViewportRect(element) {
  var win = Object(getWindow["a" /* default */])(element);
  return {
    width: win.innerWidth,
    height: win.innerHeight,
    x: 0,
    y: 0
  };
}
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js + 2 modules
var getCompositeRect = __webpack_require__("d116");

// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
var getWindowScroll = __webpack_require__("a321");

// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js




function getDocumentRect(element) {
  var win = Object(getWindow["a" /* default */])(element);
  var winScroll = Object(getWindowScroll["a" /* default */])(element);
  var documentRect = Object(getCompositeRect["a" /* default */])(Object(getDocumentElement["a" /* default */])(element), win);
  documentRect.height = Math.max(documentRect.height, win.innerHeight);
  documentRect.width = Math.max(documentRect.width, win.innerWidth);
  documentRect.x = -winScroll.scrollLeft;
  documentRect.y = -winScroll.scrollTop;
  return documentRect;
}
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js + 2 modules
var listScrollParents = __webpack_require__("ea1a");

// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
var dom_utils_getComputedStyle = __webpack_require__("b519");

// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getBorders.js



function toNumber(cssValue) {
  return parseFloat(cssValue) || 0;
}

function getBorders(element) {
  var computedStyle = Object(instanceOf["b" /* isHTMLElement */])(element) ? Object(dom_utils_getComputedStyle["a" /* default */])(element) : {};
  return {
    top: toNumber(computedStyle.borderTopWidth),
    right: toNumber(computedStyle.borderRightWidth),
    bottom: toNumber(computedStyle.borderBottomWidth),
    left: toNumber(computedStyle.borderLeftWidth)
  };
}
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
var getWindowScrollBarX = __webpack_require__("6125");

// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDecorations.js



 // Borders + scrollbars

function getDecorations(element) {
  var win = Object(getWindow["a" /* default */])(element);
  var borders = getBorders(element);
  var isHTML = Object(getNodeName["a" /* default */])(element) === 'html';
  var winScrollBarX = Object(getWindowScrollBarX["a" /* default */])(element);
  var x = element.clientWidth + borders.right;
  var y = element.clientHeight + borders.bottom; // HACK:
  // document.documentElement.clientHeight on iOS reports the height of the
  // viewport including the bottom bar, even if the bottom bar isn't visible.
  // If the difference between window innerHeight and html clientHeight is more
  // than 50, we assume it's a mobile bottom bar and ignore scrollbars.
  // * A 50px thick scrollbar is likely non-existent (macOS is 15px and Windows
  //   is about 17px)
  // * The mobile bar is 114px tall

  if (isHTML && win.innerHeight - element.clientHeight > 50) {
    y = win.innerHeight - borders.bottom;
  }

  return {
    top: isHTML ? 0 : element.clientTop,
    right: // RTL scrollbar (scrolling containers only)
    element.clientLeft > borders.left ? borders.right : // LTR scrollbar
    isHTML ? win.innerWidth - x - winScrollBarX : element.offsetWidth - x,
    bottom: isHTML ? win.innerHeight - y : element.offsetHeight - y,
    left: isHTML ? winScrollBarX : element.clientLeft
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  // $FlowFixMe: hasOwnProperty doesn't seem to work in tests
  var isShadow = Boolean(child.getRootNode && child.getRootNode().host); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (isShadow) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js













function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === enums["o" /* viewport */] ? rectToClientRect(getViewportRect(element)) : Object(instanceOf["b" /* isHTMLElement */])(clippingParent) ? Object(getBoundingClientRect["a" /* default */])(clippingParent) : rectToClientRect(getDocumentRect(Object(getDocumentElement["a" /* default */])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = Object(listScrollParents["a" /* default */])(element);
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(Object(dom_utils_getComputedStyle["a" /* default */])(element).position) >= 0;
  var clipperElement = canEscapeClipping && Object(instanceOf["b" /* isHTMLElement */])(element) ? Object(getOffsetParent["a" /* default */])(element) : element;

  if (!Object(instanceOf["a" /* isElement */])(clipperElement)) {
    return [];
  } // $FlowFixMe: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return Object(instanceOf["a" /* isElement */])(clippingParent) && contains(clippingParent, clipperElement);
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    var decorations = getDecorations(Object(instanceOf["b" /* isHTMLElement */])(clippingParent) ? clippingParent : Object(getDocumentElement["a" /* default */])(element));
    accRect.top = Math.max(rect.top + decorations.top, accRect.top);
    accRect.right = Math.min(rect.right - decorations.right, accRect.right);
    accRect.bottom = Math.min(rect.bottom - decorations.bottom, accRect.bottom);
    accRect.left = Math.max(rect.left + decorations.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), {}, paddingObject);
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/detectOverflow.js









function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? enums["d" /* clippingParents */] : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? enums["o" /* viewport */] : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? enums["i" /* popper */] : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, enums["b" /* basePlacements */]));
  var altContext = elementContext === enums["i" /* popper */] ? enums["j" /* reference */] : enums["i" /* popper */];
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(Object(instanceOf["a" /* isElement */])(element) ? element : Object(getDocumentElement["a" /* default */])(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = Object(getBoundingClientRect["a" /* default */])(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, {}, popperOffsets));
  var elementClientRect = elementContext === enums["i" /* popper */] ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === enums["i" /* popper */] && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [enums["k" /* right */], enums["c" /* bottom */]].indexOf(key) >= 0 ? 1 : -1;
      var axis = [enums["m" /* top */], enums["c" /* bottom */]].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations;
  var variation = getVariation(placement);
  var placements = variation ? flipVariations ? enums["n" /* variationPlacements */] : enums["n" /* variationPlacements */].filter(function (placement) {
    return getVariation(placement) === variation;
  }) : enums["b" /* basePlacements */]; // $FlowFixMe: Flow seems to have problems with two array unions...

  var overflows = placements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[Object(getBasePlacement["a" /* default */])(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/flip.js








function getExpandedFallbackPlacements(placement) {
  if (Object(getBasePlacement["a" /* default */])(placement) === enums["a" /* auto */]) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio;
  var preferredPlacement = state.options.placement;
  var basePlacement = Object(getBasePlacement["a" /* default */])(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(Object(getBasePlacement["a" /* default */])(placement) === enums["a" /* auto */] ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = Object(getBasePlacement["a" /* default */])(placement);

    var isStartVariation = getVariation(placement) === enums["l" /* start */];
    var isVertical = [enums["m" /* top */], enums["c" /* bottom */]].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? enums["k" /* right */] : enums["f" /* left */] : isStartVariation ? enums["c" /* bottom */] : enums["m" /* top */];

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [overflow[_basePlacement] <= 0, overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0];

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}

/* harmony default export */ var modifiers_flip = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/within.js
function within(min, value, max) {
  return Math.max(min, Math.min(value, max));
}
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
var getLayoutRect = __webpack_require__("e2e9");

// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js










function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding
  });
  var basePlacement = Object(getBasePlacement["a" /* default */])(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (checkMainAxis) {
    var mainSide = mainAxis === 'y' ? enums["m" /* top */] : enums["f" /* left */];
    var altSide = mainAxis === 'y' ? enums["c" /* bottom */] : enums["k" /* right */];
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === enums["l" /* start */] ? referenceRect[len] : popperRect[len];
    var maxLen = variation === enums["l" /* start */] ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? Object(getLayoutRect["a" /* default */])(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _mainSide = mainAxis === 'x' ? enums["m" /* top */] : enums["f" /* left */];

    var _altSide = mainAxis === 'x' ? enums["c" /* bottom */] : enums["k" /* right */];

    var _offset = popperOffsets[altAxis];

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var _preventedOffset = within(_min, _offset, _max);

    state.modifiersData.popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
}

/* harmony default export */ var modifiers_preventOverflow = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/arrow.js









function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = Object(getBasePlacement["a" /* default */])(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [enums["f" /* left */], enums["k" /* right */]].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement) {
    return;
  }

  var paddingObject = state.modifiersData[name + "#persistent"].padding;
  var arrowRect = Object(getLayoutRect["a" /* default */])(arrowElement);
  var minProp = axis === 'y' ? enums["m" /* top */] : enums["f" /* left */];
  var maxProp = axis === 'y' ? enums["c" /* bottom */] : enums["k" /* right */];
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var center = within(paddingObject[minProp], state.rects.popper[len] / 2 - arrowRect[len] / 2 + centerToReference, state.rects.popper[len] - arrowRect[len] - paddingObject[maxProp]); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = center, _state$modifiersData$);
}

function arrow_effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
      _options$padding = options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding; // CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    if (false) {}

    return;
  }

  state.elements.arrow = arrowElement;
  state.modifiersData[name + "#persistent"] = {
    padding: mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, enums["b" /* basePlacements */]))
  };
}

/* harmony default export */ var modifiers_arrow = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: arrow_effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/hide.js



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [enums["m" /* top */], enums["k" /* right */], enums["c" /* bottom */], enums["f" /* left */]].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
}

/* harmony default export */ var modifiers_hide = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper.js










var defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide];
var popper_createPopper =
/*#__PURE__*/
Object(lib["popperGenerator"])({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules


// EXTERNAL MODULE: ./node_modules/vue-clickaway2/dist/vue-clickaway.common.js
var vue_clickaway_common = __webpack_require__("723b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/dropdown/CDropdown.vue?vue&type=script&lang=js&
function CDropdownvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var CDropdownvue_type_script_lang_js_ = ({
  name: 'CDropdown',
  mixins: [vue_clickaway_common["mixin"]],
  components: {
    CLink: CLink
  },
  props: {
    togglerText: {
      type: String,
      default: 'Dropdown'
    },
    show: Boolean,
    disabled: Boolean,
    addMenuClasses: [String, Array, Object],
    addTogglerClasses: [String, Array, Object],
    inNav: Boolean,
    caret: {
      type: Boolean,
      default: true
    },
    color: String,
    size: {
      type: String,
      validator: function validator(val) {
        return ['', 'sm', 'lg'].includes(val);
      }
    },
    split: Boolean,
    placement: {
      type: String,
      validator: function validator(position) {
        return ['', 'top-end', 'top', 'top-start', 'bottom-end', 'bottom', 'bottom-start', 'right-start', 'right', 'right-end', 'left-start', 'left', 'left-end'].includes(position);
      },
      default: 'bottom-start'
    },
    offset: {
      type: Array,
      default: function _default() {
        return [0, 0];
      }
    },
    flip: {
      type: Boolean,
      default: true
    },
    customPopperOptions: Object
  },
  data: function data() {
    return {
      visible: this.show
    };
  },
  watch: {
    show: function show(val) {
      this.visible = val;
    },
    visible: {
      immediate: true,
      handler: function handler(val) {
        val ? this.createPopper() : this.removePopper();
        this.$emit('update:show', val);
      }
    },
    $route: function $route() {
      this.visible = false;
    }
  },
  methods: {
    checkClick: function checkClick(e) {
      if (this.$scopedSlots.toggler && this.$el.firstElementChild.contains(e.target)) {
        this.toggle(e);
      }
    },
    hide: function hide() {
      this.visible = false;
    },
    toggle: function toggle(e) {
      e.preventDefault();
      this.visible = !this.visible;
    },
    removePopper: function removePopper() {
      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
    },
    createPopper: function createPopper() {
      var _this = this;

      this.removePopper();

      if (this.disabled) {
        this.visible = false;
        return;
      }

      this.$nextTick(function () {
        _this._popper = popper_createPopper(_this.$el.firstElementChild, _this.$refs.menu, _this.customPopperOptions || _this.defaultPopperOptions);
      });
    }
  },
  computed: {
    defaultPopperOptions: function defaultPopperOptions() {
      return {
        placement: this.placement,
        modifiers: [{
          name: 'offset',
          options: {
            offset: this.offset
          }
        }, {
          name: 'flip',
          enabled: this.flip
        }, {
          name: 'preventOverflow',
          options: {
            padding: 10
          }
        }]
      };
    },
    carretClass: function carretClass() {
      return this.placement.includes('top') ? 'dropup' : this.placement.includes('right') ? 'dropright' : this.placement.includes('left') ? 'dropleft' : 'dropdown';
    },
    computedDropdownClasses: function computedDropdownClasses() {
      return [this.carretClass, {
        'show': this.visible,
        'nav-item': this.inNav,
        'btn-group': this.splittedToggler
      }];
    },
    togglerTag: function togglerTag() {
      return this.inNav ? CLink : 'button';
    },
    splittedToggler: function splittedToggler() {
      return this.split && !this.inNav;
    },
    computedTogglerClasses: function computedTogglerClasses() {
      var _ref;

      return [this.addTogglerClasses, this.inNav ? 'nav-link' : 'btn', (_ref = {
        'dropdown-toggle': this.caret && !this.split
      }, CDropdownvue_type_script_lang_js_defineProperty(_ref, "btn-".concat(this.size), this.size && !this.inNav), CDropdownvue_type_script_lang_js_defineProperty(_ref, 'disabled', this.disabled), CDropdownvue_type_script_lang_js_defineProperty(_ref, "".concat(this.inNav ? 'bg' : 'btn', "-").concat(this.color), this.color), _ref)];
    },
    togglerAttrs: function togglerAttrs() {
      return {
        'type': this.inNav ? null : 'button',
        'aria-expanded': this.visible ? 'true' : 'false',
        'aria-haspopup': 'true'
      };
    },
    computedMenuClasses: function computedMenuClasses() {
      return [this.addMenuClasses, 'dropdown-menu', {
        'show': this.visible
      }];
    }
  }
});
// CONCATENATED MODULE: ./src/components/dropdown/CDropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var dropdown_CDropdownvue_type_script_lang_js_ = (CDropdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/dropdown/CDropdown.vue





/* normalize component */

var CDropdown_component = normalizeComponent(
  dropdown_CDropdownvue_type_script_lang_js_,
  CDropdownvue_type_template_id_8b3a0e64_render,
  CDropdownvue_type_template_id_8b3a0e64_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CDropdown = (CDropdown_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/dropdown/CDropdownHeader.vue?vue&type=script&lang=js&
function CDropdownHeadervue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var CDropdownHeadervue_type_script_lang_js_ = ({
  functional: true,
  name: 'CDropdownHeader',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    color: String
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, a(data, {
      staticClass: 'dropdown-header',
      class: CDropdownHeadervue_type_script_lang_js_defineProperty({}, "bg-".concat(props.color), props.color)
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/dropdown/CDropdownHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var dropdown_CDropdownHeadervue_type_script_lang_js_ = (CDropdownHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/dropdown/CDropdownHeader.vue
var CDropdownHeader_render, CDropdownHeader_staticRenderFns




/* normalize component */

var CDropdownHeader_component = normalizeComponent(
  dropdown_CDropdownHeadervue_type_script_lang_js_,
  CDropdownHeader_render,
  CDropdownHeader_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CDropdownHeader = (CDropdownHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/dropdown/CDropdownDivider.vue?vue&type=script&lang=js&

/* harmony default export */ var CDropdownDividervue_type_script_lang_js_ = ({
  functional: true,
  name: 'CDropdownDivider',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;
    return h(props.tag, a(data, {
      staticClass: 'dropdown-divider',
      attrs: {
        role: 'separator'
      }
    }));
  }
});
// CONCATENATED MODULE: ./src/components/dropdown/CDropdownDivider.vue?vue&type=script&lang=js&
 /* harmony default export */ var dropdown_CDropdownDividervue_type_script_lang_js_ = (CDropdownDividervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/dropdown/CDropdownDivider.vue
var CDropdownDivider_render, CDropdownDivider_staticRenderFns




/* normalize component */

var CDropdownDivider_component = normalizeComponent(
  dropdown_CDropdownDividervue_type_script_lang_js_,
  CDropdownDivider_render,
  CDropdownDivider_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CDropdownDivider = (CDropdownDivider_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/dropdown/CDropdownItem.vue?vue&type=script&lang=js&


/* harmony default export */ var CDropdownItemvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CDropdownItem',
  props: propsFactory(),
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(CLink, a(data, {
      props: props,
      staticClass: 'dropdown-item',
      attrs: {
        role: 'menuitem'
      }
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/dropdown/CDropdownItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var dropdown_CDropdownItemvue_type_script_lang_js_ = (CDropdownItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/dropdown/CDropdownItem.vue
var CDropdownItem_render, CDropdownItem_staticRenderFns




/* normalize component */

var CDropdownItem_component = normalizeComponent(
  dropdown_CDropdownItemvue_type_script_lang_js_,
  CDropdownItem_render,
  CDropdownItem_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CDropdownItem = (CDropdownItem_component.exports);
// CONCATENATED MODULE: ./src/components/dropdown/index.js





// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/element-cover/CElementCover.vue?vue&type=template&id=dd1ee9a4&
var CElementCovervue_type_template_id_dd1ee9a4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:(_vm.outerContainerStyles)},[(_vm.center)?_c('div',{style:(_vm.centeringStyles)},[_vm._t("default",[_c('CSpinner',{attrs:{"grow":"","size":"lg","color":"primary"}})])],2):_vm._t("default",[_c('CSpinner',{attrs:{"size":"lg","color":"primary"}})])],2)}
var CElementCovervue_type_template_id_dd1ee9a4_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/spinner/CSpinner.vue?vue&type=script&lang=js&
function CSpinnervue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var CSpinnervue_type_script_lang_js_ = ({
  name: 'CSpinner',
  functional: true,
  props: {
    grow: Boolean,
    color: String,
    size: String,
    tag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data;
    var type = props.grow ? 'grow' : 'border';
    return h(props.tag, a(data, {
      attrs: {
        role: 'status',
        'aria-hidden': 'false',
        'aria-label': 'Loading'
      },
      class: ["spinner-".concat(type), (_ref2 = {}, CSpinnervue_type_script_lang_js_defineProperty(_ref2, "spinner-".concat(type, "-").concat(props.size), props.size), CSpinnervue_type_script_lang_js_defineProperty(_ref2, "text-".concat(props.color), props.color), _ref2)]
    }));
  }
});
// CONCATENATED MODULE: ./src/components/spinner/CSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var spinner_CSpinnervue_type_script_lang_js_ = (CSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/spinner/CSpinner.vue
var CSpinner_render, CSpinner_staticRenderFns




/* normalize component */

var CSpinner_component = normalizeComponent(
  spinner_CSpinnervue_type_script_lang_js_,
  CSpinner_render,
  CSpinner_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSpinner = (CSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/element-cover/CElementCover.vue?vue&type=script&lang=js&
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { CElementCovervue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CElementCovervue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CElementCovervue_type_script_lang_js_ = ({
  name: 'CElementCover',
  props: {
    boundaries: Array,
    center: {
      type: Boolean,
      default: true
    },
    opacity: {
      type: Number,
      default: 0.4
    }
  },
  components: {
    CSpinner: CSpinner
  },
  data: function data() {
    return {
      containerCoords: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      parentCoords: null
    };
  },
  mounted: function mounted() {
    if (this.boundaries) {
      this.setOffsets();
    }
  },
  computed: {
    outerContainerStyles: function outerContainerStyles() {
      return _objectSpread({}, this.containerCoords, {
        position: 'absolute',
        'background-color': "rgb(255,255,255,".concat(this.opacity, ")")
      });
    },
    centeringStyles: function centeringStyles() {
      return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)'
      };
    }
  },
  methods: {
    setOffsets: function setOffsets() {
      var _this = this;

      var parent = this.$el.parentElement;
      this.parentCoords = parent.getBoundingClientRect();
      this.boundaries.forEach(function (_ref) {
        var sides = _ref.sides,
            query = _ref.query;
        var element = parent.querySelector(query);

        if (!element || !sides) {
          return;
        }

        var coords = element.getBoundingClientRect();
        sides.forEach(function (side) {
          var sideMargin = Math.abs(coords[side] - _this.parentCoords[side]);
          _this.containerCoords[side] = sideMargin + 'px';
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/element-cover/CElementCover.vue?vue&type=script&lang=js&
 /* harmony default export */ var element_cover_CElementCovervue_type_script_lang_js_ = (CElementCovervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/element-cover/CElementCover.vue





/* normalize component */

var CElementCover_component = normalizeComponent(
  element_cover_CElementCovervue_type_script_lang_js_,
  CElementCovervue_type_template_id_dd1ee9a4_render,
  CElementCovervue_type_template_id_dd1ee9a4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CElementCover = (CElementCover_component.exports);
// CONCATENATED MODULE: ./src/components/element-cover/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/embed/CEmbed.vue?vue&type=script&lang=js&

var CEmbedvue_type_script_lang_js_props = {
  type: {
    type: String,
    default: 'iframe',
    validator: function validator(type) {
      return ['iframe', 'embed', 'video', 'object', 'img'].includes(type);
    }
  },
  ratio: {
    type: String,
    default: '16by9',
    validator: function validator(ratio) {
      return ['21by9', '16by9', '4by3', '1by1'].includes(ratio);
    }
  },
  tag: {
    type: String,
    default: 'div'
  }
};
/* harmony default export */ var CEmbedvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CEmbed',
  props: CEmbedvue_type_script_lang_js_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, {
      ref: data.ref,
      staticClass: 'embed-responsive',
      class: "embed-responsive-".concat(props.ratio)
    }, [h(props.type, a(data, {
      ref: '',
      staticClass: 'embed-responsive-item'
    }), children)]);
  }
});
// CONCATENATED MODULE: ./src/components/embed/CEmbed.vue?vue&type=script&lang=js&
 /* harmony default export */ var embed_CEmbedvue_type_script_lang_js_ = (CEmbedvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/embed/CEmbed.vue
var CEmbed_render, CEmbed_staticRenderFns




/* normalize component */

var CEmbed_component = normalizeComponent(
  embed_CEmbedvue_type_script_lang_js_,
  CEmbed_render,
  CEmbed_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CEmbed = (CEmbed_component.exports);
// CONCATENATED MODULE: ./src/components/embed/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CForm.vue?vue&type=script&lang=js&

/* harmony default export */ var CFormvue_type_script_lang_js_ = ({
  name: 'CForm',
  functional: true,
  props: {
    inline: Boolean,
    wasValidated: Boolean
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('form', a(data, {
      class: {
        'form-inline': props.inline,
        'was-validated': props.wasValidated
      }
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/form/CForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_CFormvue_type_script_lang_js_ = (CFormvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form/CForm.vue
var CForm_render, CForm_staticRenderFns




/* normalize component */

var CForm_component = normalizeComponent(
  form_CFormvue_type_script_lang_js_,
  CForm_render,
  CForm_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CForm = (CForm_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CFormGroup.vue?vue&type=template&id=b521e786&
var CFormGroupvue_type_template_id_b521e786_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"role":"group"}},[(_vm.wrapperClasses)?[_vm._t("label"),_c('div',{class:_vm.wrapperClasses},[(_vm.prepend || _vm.$slots.prepend|| _vm.$slots['prepend-content'])?_c('div',{staticClass:"input-group-prepend"},[_vm._t("prepend",[_c('span',{staticClass:"input-group-text"},[_vm._t("prepend-content",[_vm._v(_vm._s(_vm.prepend))])],2)])],2):_vm._e(),_vm._t("input"),_vm._t("label-after-input"),(_vm.append || _vm.$slots.append || _vm.$slots['append-content'])?_c('div',{staticClass:"input-group-append"},[_vm._t("append",[_c('span',{staticClass:"input-group-text"},[_vm._t("append-content",[_vm._v(_vm._s(_vm.append))])],2)])],2):_vm._e(),_vm._t("valid-feedback",[(_vm.validFeedback)?_c('div',{class:_vm.tooltipFeedback ? 'valid-tooltip' : 'valid-feedback',domProps:{"textContent":_vm._s(_vm.validFeedback)}}):_vm._e()]),_vm._t("invalid-feedback",[(_vm.invalidFeedback)?_c('div',{class:_vm.tooltipFeedback ? 'invalid-tooltip' : 'invalid-feedback',domProps:{"textContent":_vm._s(_vm.invalidFeedback)}}):_vm._e()]),_vm._t("description",[(_vm.description)?_c('small',{staticClass:"form-text text-muted w-100",domProps:{"textContent":_vm._s(_vm.description)}}):_vm._e()])],2)]:[_vm._t("label"),(_vm.prepend || _vm.$slots.prepend || _vm.$slots['prepend-content'])?_c('div',{staticClass:"input-group-prepend"},[_vm._t("prepend",[_c('span',{staticClass:"input-group-text"},[_vm._t("prepend-content",[_vm._v(_vm._s(_vm.prepend))])],2)])],2):_vm._e(),_vm._t("input"),_vm._t("label-after-input"),(_vm.append || _vm.$slots.append || _vm.$slots['append-content'])?_c('div',{staticClass:"input-group-append"},[_vm._t("append",[_c('span',{staticClass:"input-group-text"},[_vm._t("append-content",[_vm._v(_vm._s(_vm.append))])],2)])],2):_vm._e(),_vm._t("valid-feedback",[(_vm.validFeedback)?_c('div',{class:_vm.tooltipFeedback ? 'valid-tooltip' : 'valid-feedback',domProps:{"textContent":_vm._s(_vm.validFeedback)}}):_vm._e()]),_vm._t("invalid-feedback",[(_vm.invalidFeedback)?_c('div',{class:_vm.tooltipFeedback ? 'invalid-tooltip' : 'invalid-feedback',domProps:{"textContent":_vm._s(_vm.invalidFeedback)}}):_vm._e()]),_vm._t("description",[(_vm.description)?_c('small',{staticClass:"form-text text-muted w-100",domProps:{"textContent":_vm._s(_vm.description)}}):_vm._e()])]],2)}
var CFormGroupvue_type_template_id_b521e786_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/form/form-props.js
var formGroupAlwaysSharedProps = {
  validFeedback: String,
  invalidFeedback: String,
  tooltipFeedback: Boolean,
  description: String
};
var formGroupSharedProps = Object.assign({}, formGroupAlwaysSharedProps, {
  append: String,
  prepend: String
});
var formGroupProps = Object.assign({}, formGroupSharedProps, {
  wrapperClasses: [String, Array, Object]
});
var universalProps = {
  label: String,
  wasValidated: Boolean,
  isValid: {
    type: [Boolean, Function],
    default: null
  },
  addInputClasses: [String, Array, Object],
  addLabelClasses: [String, Array, Object]
};
var form_props_props = Object.assign({}, universalProps, {
  horizontal: [Boolean, Object],
  size: {
    type: String,
    validator: function validator(str) {
      return ['', 'sm', 'lg'].includes(str);
    }
  },
  addWrapperClasses: [String, Array, Object]
});
var textInputsProps = {
  readonly: Boolean,
  plaintext: Boolean,
  value: [String, Number],
  lazy: {
    type: [Boolean, Number],
    default: 400
  }
}; // Html props: disabled, required, accept, id, placeholder

var inputFileProps = Object.assign({}, formGroupAlwaysSharedProps, form_props_props, {
  custom: Boolean,
  placeholder: String,
  multiple: Boolean
}); // Html props: disabled, required, rows, cols, placeholder, id

var textareaProps = Object.assign({}, formGroupSharedProps, form_props_props, textInputsProps); // HTML props: disabled, required, placeholder, id

var inputProps = Object.assign({}, formGroupSharedProps, form_props_props, textInputsProps, {
  type: {
    type: String,
    default: 'text'
  }
}); // Html props: disabled, id required don't use multiple

var selectProps = Object.assign({}, formGroupSharedProps, form_props_props, {
  options: Array,
  value: [String, Number, Boolean, Array],
  plaintext: Boolean,
  placeholder: String,
  custom: Boolean
}); // Html props: id, disabled, required

var inputCheckboxProps = Object.assign({}, formGroupAlwaysSharedProps, universalProps, {
  checked: Boolean,
  custom: Boolean,
  inline: Boolean
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CFormGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CFormGroupvue_type_script_lang_js_ = ({
  name: 'CFormGroup',
  inheritAttrs: false,
  props: formGroupProps // {
  //   validFeedback: String,
  //   invalidFeedback: String,
  //   tooltipFeedback: Boolean,
  //   description: String,
  //   append: String,
  //   prepend: String,
  //   wrapperClasses: [String, Array, Object],
  // },

});
// CONCATENATED MODULE: ./src/components/form/CFormGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_CFormGroupvue_type_script_lang_js_ = (CFormGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form/CFormGroup.vue





/* normalize component */

var CFormGroup_component = normalizeComponent(
  form_CFormGroupvue_type_script_lang_js_,
  CFormGroupvue_type_template_id_b521e786_render,
  CFormGroupvue_type_template_id_b521e786_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CFormGroup = (CFormGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CInput.vue?vue&type=template&id=e0ca7dec&
var CInputvue_type_template_id_e0ca7dec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CFormGroup',_vm._b({scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._t("label",[(_vm.label)?_c('label',{class:_vm.labelClasses,attrs:{"for":_vm.safeId}},[_vm._v(" "+_vm._s(_vm.label)+" ")]):_vm._e()])]},proxy:true},{key:"input",fn:function(){return [_c('input',_vm._g(_vm._b({class:_vm.inputClasses,attrs:{"id":_vm.safeId,"type":_vm.type,"readonly":_vm.readonly || _vm.plaintext},domProps:{"value":_vm.state},on:{"input":function($event){return _vm.onInput($event)},"change":function($event){return _vm.onChange($event)}}},'input',_vm.$attrs,false),_vm.listeners))]},proxy:true},_vm._l((_vm.$options.slots),function(slot){return {key:slot,fn:function(){return [_vm._t(slot)]},proxy:true}})],null,true)},'CFormGroup',{append: _vm.append, prepend: _vm.prepend, validFeedback: _vm.validFeedback, invalidFeedback: _vm.invalidFeedback,
      tooltipFeedback: _vm.tooltipFeedback, description: _vm.description, wrapperClasses: _vm.wrapperClasses, class: _vm.computedClasses},false))}
var CInputvue_type_template_id_e0ca7dec_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@coreui/utils/src/make-uid.js
//function for UI releted ID assignment, due to one in 10^15 probability of duplication
var makeUid = function makeUid() {
  var key = Math.random().toString(36).substr(2);
  return 'uid-' + key;
};

/* harmony default export */ var make_uid = (makeUid);
// CONCATENATED MODULE: ./src/components/form/form-mixins.js
function form_mixins_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var sharedComputedProps = {
  computed: {
    computedIsValid: function computedIsValid() {
      if (typeof this.isValid === 'function') {
        return this.isValid(this.state);
      }

      return this.isValid;
    },
    validationClass: function validationClass() {
      if (typeof this.computedIsValid === 'boolean') {
        return this.computedIsValid ? 'is-valid' : 'is-invalid';
      }
    },
    safeId: function safeId() {
      if (this.id || this.$attrs.id) {
        return this.id || this.$attrs.id;
      }

      return make_uid();
    },
    listeners: function listeners() {
      var _this$$listeners = this.$listeners,
          input = _this$$listeners.input,
          change = _this$$listeners.change,
          listeners = _objectWithoutProperties(_this$$listeners, ["input", "change"]); // eslint-disable-line no-unused-vars


      return listeners;
    }
  }
};
var wrapperComputedProps = {
  computed: {
    isHorizontal: function isHorizontal() {
      return Boolean(this.horizontal);
    },
    haveInputGroup: function haveInputGroup() {
      return Boolean(this.tooltipFeedback || this.append || this.prepend || this.$slots.append || this.$slots.prepend || this.$slots['append-content'] || this.$slots['prepend-content']);
    },
    haveWrapper: function haveWrapper() {
      return this.haveInputGroup || Boolean(this.addWrapperClasses || this.isHorizontal);
    },
    wrapperClasses: function wrapperClasses() {
      if (this.haveWrapper) {
        var _ref;

        return [this.addWrapperClasses, (_ref = {}, form_mixins_defineProperty(_ref, this.horizontal.input || 'col-sm-9', this.isHorizontal), form_mixins_defineProperty(_ref, 'input-group', this.haveInputGroup), form_mixins_defineProperty(_ref, "input-group-".concat(this.size), this.haveCustomSize), _ref)];
      }
    }
  }
};
var watchValue = {
  watch: {
    value: function value(val) {
      this.state = val;
    }
  }
};
var classesComputedProps = {
  computed: {
    haveCustomSize: function haveCustomSize() {
      return ['sm', 'lg'].includes(this.size);
    },
    computedClasses: function computedClasses() {
      return ['form-group', {
        'was-validated': this.wasValidated,
        'form-row': this.isHorizontal
      }];
    },
    labelClasses: function labelClasses() {
      var _ref2;

      return [this.addLabelClasses, (_ref2 = {
        'col-form-label': this.isHorizontal
      }, form_mixins_defineProperty(_ref2, this.horizontal.label || 'col-sm-3', this.isHorizontal), form_mixins_defineProperty(_ref2, "col-form-label-".concat(this.size), this.haveCustomSize), _ref2)];
    },
    customSizeClass: function customSizeClass() {
      if (this.haveCustomSize && !this.haveWrapper) {
        return "form-control-".concat(this.size);
      }
    },
    inputClasses: function inputClasses() {
      return [this.inputClass || "form-control".concat(this.plaintext ? '-plaintext' : ''), this.validationClass, this.addInputClasses, this.customSizeClass];
    }
  }
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var mixins = Object.values(form_mixins_namespaceObject);
/* harmony default export */ var CInputvue_type_script_lang_js_ = ({
  name: 'CInput',
  slots: ['prepend', 'prepend-content', 'append-content', 'append', 'label-after-input', 'valid-feedback', 'invalid-feedback', 'description'],
  inheritAttrs: false,
  components: {
    CFormGroup: CFormGroup
  },
  mixins: mixins,
  props: inputProps,
  // Html props: disabled, required, rows, cols, placeholder
  // {
  //   validFeedback: String,
  //   invalidFeedback: String,
  //   tooltipFeedback: Boolean,
  //   description: String,
  //   append: String,
  //   prepend: String,
  //   label: String,
  //   wasValidated: Boolean,
  //   isValid: {
  //     type: [Boolean, Function],
  //     default: null
  //   },
  //   addInputClasses: [String, Array, Object],
  //   addLabelClasses: [String, Array, Object],
  //   horizontal: [Boolean, Object],
  //   size: {
  //     type: String,
  //     validator: str => ['','sm','lg'].includes(str)
  //   },
  //   addWrapperClasses: [String, Array, Object],
  //   readonly: Boolean,
  //   plaintext: Boolean,
  //   value: [String, Number],
  //   lazy: {
  //     type: [Boolean, Number],
  //     default: 400
  //   },
  //   type: {
  //     type: String,
  //     default: 'text'
  //   }
  // },
  data: function data() {
    return {
      state: this.value,
      syncTimeout: null
    };
  },
  //watchValue mixin
  // watch: {
  //   value (val) {
  //     this.state = val
  //   }
  // },
  computed: {// classesComputedProps mixin
    // haveCustomSize () {
    //   return ['sm','lg'].includes(this.size)
    // },
    // computedClasses () {
    //   return [
    //     'form-group',
    //     {
    //      'was-validated': this.wasValidated,
    //      'form-row': this.isHorizontal
    //     }
    //   ]
    // },
    // labelClasses () {
    //   return [
    //     this.addLabelClasses,
    //     {
    //       'col-form-label': this.isHorizontal,
    //       [this.horizontal.label || 'col-sm-3']: this.isHorizontal,
    //       [`col-form-label-${this.size}`]: this.haveCustomSize,
    //     }
    //   ]
    // },
    // customSizeClass () {
    //   if (this.haveCustomSize && !this.haveWrapper) {
    //     return `form-control-${this.size}`
    //   }
    // },
    // inputClasses () {
    //   return [
    //     this.inputClass || `form-control${this.plaintext ? '-plaintext' : ''}`,
    //     this.validationClass,
    //     this.addInputClasses,
    //     this.customSizeClass
    //   ]
    // }
    // validationComputedProps mixin
    // computedIsValid () {
    //   if (typeof this.isValid === 'function') {
    //     return this.isValid(this.state)
    //   }
    //   return this.isValid
    // },
    // validationClass () {
    //   if (typeof this.computedIsValid === 'boolean') {
    //     return this.computedIsValid ? 'is-valid' : 'is-invalid'
    //   }
    // }
    //wrapperComputedProps mixin
    // isHorizontal () {
    //   return Boolean(this.horizontal)
    // },
    // haveInputGroup () {
    //   return Boolean(
    //     this.tooltipFeedback || 
    //     this.append ||
    //     this.prepend || 
    //     this.$slots.append || 
    //     this.$slots.prepend || 
    //     this.$slots['append-content'] ||
    //     this.$slots['prepend-content']
    //   )
    // },
    // haveWrapper () {
    //   return this.haveInputGroup || Boolean(this.addWrapperClasses || this.isHorizontal)
    // },
    // wrapperClasses () {
    //   if (this.haveWrapper) {
    //     return [
    //       this.addWrapperClasses,
    //       {
    //         [this.horizontal.input || 'col-sm-9'] : this.isHorizontal,
    //         'input-group' : this.haveInputGroup,
    //         [`input-group-${this.size}`]: this.haveCustomSize
    //       }
    //     ]
    //   }
    // }
  },
  methods: {
    onInput: function onInput(e) {
      var _this = this;

      this.state = e.target.value;
      this.$emit('input', this.state, e);

      if (this.lazy === true) {
        return;
      }

      clearTimeout(this.syncTimeout);
      this.syncTimeout = setTimeout(function () {
        _this.$emit('update:value', _this.state, e);
      }, this.lazy !== false ? this.lazy : 0);
    },
    onChange: function onChange(e) {
      this.state = e.target.value;
      this.$emit('change', this.state, e);
      this.$emit('update:value', this.state, e);
    }
  }
});
// CONCATENATED MODULE: ./src/components/form/CInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_CInputvue_type_script_lang_js_ = (CInputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form/CInput.vue





/* normalize component */

var CInput_component = normalizeComponent(
  form_CInputvue_type_script_lang_js_,
  CInputvue_type_template_id_e0ca7dec_render,
  CInputvue_type_template_id_e0ca7dec_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CInput = (CInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CInputCheckbox.vue?vue&type=template&id=3cc1e257&
var CInputCheckboxvue_type_template_id_3cc1e257_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CFormGroup',_vm._b({scopedSlots:_vm._u([{key:"input",fn:function(){return [_c('input',_vm._g(_vm._b({class:_vm.inputClasses,attrs:{"id":_vm.safeId,"type":_vm.$options.type},domProps:{"checked":_vm.state},on:{"change":function($event){return _vm.onChange($event)}}},'input',_vm.$attrs,false),_vm.listeners))]},proxy:true},{key:"label-after-input",fn:function(){return [_vm._t("label",[(_vm.label)?_c('label',{class:_vm.labelClasses,attrs:{"for":_vm.safeId}},[_vm._v(" "+_vm._s(_vm.label)+" ")]):_vm._e()])]},proxy:true},_vm._l((['valid-feedback', 'invalid-feedback', 'description']),function(slot){return {key:slot,fn:function(){return [_vm._t(slot)]},proxy:true}})],null,true)},'CFormGroup',{validFeedback: _vm.validFeedback, invalidFeedback: _vm.invalidFeedback, tooltipFeedback: _vm.tooltipFeedback,
                     description: _vm.description, class: _vm.computedClasses},false))}
var CInputCheckboxvue_type_template_id_3cc1e257_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CInputCheckbox.vue?vue&type=script&lang=js&
function CInputCheckboxvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var CInputCheckboxvue_type_script_lang_js_ = ({
  name: 'CInputCheckbox',
  inheritAttrs: false,
  components: {
    CFormGroup: CFormGroup
  },
  mixins: [sharedComputedProps],
  props: inputCheckboxProps,
  // {
  // validFeedback: String,
  // invalidFeedback: String,
  // tooltipFeedback: Boolean,
  // description: String,
  // label: String,
  // wasValidated: Boolean,
  // isValid: {
  //   type: [Boolean, Function],
  //   default: null
  // },
  // addInputClasses: [String, Array, Object],
  // addLabelClasses: [String, Array, Object],
  // checked: Boolean,
  // custom: Boolean,
  // inline: Boolean
  // },
  type: 'checkbox',
  data: function data() {
    return {
      state: undefined
    };
  },
  watch: {
    checked: {
      immediate: true,
      handler: function handler(val) {
        this.state = val;
      }
    }
  },
  computed: {
    customType: function customType() {
      return this.$options.type === 'checkbox' ? 'checkbox' : 'radio';
    },
    computedClasses: function computedClasses() {
      var _ref;

      var controlClass = this.custom ? 'custom-control' : 'form-check';
      return _ref = {}, CInputCheckboxvue_type_script_lang_js_defineProperty(_ref, "".concat(controlClass), true), CInputCheckboxvue_type_script_lang_js_defineProperty(_ref, "".concat(controlClass, "-inline"), this.inline), CInputCheckboxvue_type_script_lang_js_defineProperty(_ref, "custom-".concat(this.customType), this.custom), CInputCheckboxvue_type_script_lang_js_defineProperty(_ref, 'was-validated', this.wasValidated), _ref;
    },
    labelClasses: function labelClasses() {
      return [this.addLabelClasses, this.custom ? 'custom-control-label' : 'form-check-label'];
    },
    inputClasses: function inputClasses() {
      return [this.custom ? 'custom-control-input' : 'form-check-input', this.validationClass, this.addInputClasses];
    } // validationComputedProps mixin
    // computedIsValid () {
    //   if (typeof this.isValid === 'function') {
    //     return this.isValid(this.state)
    //   }
    //   return this.isValid
    // },
    // validationClass () {
    //   if (typeof this.computedIsValid === 'boolean') {
    //     return this.computedIsValid ? 'is-valid' : 'is-invalid'
    //   }
    // }

  },
  methods: {
    onChange: function onChange(e) {
      this.state = e.target.checked;
      this.$emit('update:checked', e.target.checked, e);
    }
  }
});
// CONCATENATED MODULE: ./src/components/form/CInputCheckbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_CInputCheckboxvue_type_script_lang_js_ = (CInputCheckboxvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form/CInputCheckbox.vue





/* normalize component */

var CInputCheckbox_component = normalizeComponent(
  form_CInputCheckboxvue_type_script_lang_js_,
  CInputCheckboxvue_type_template_id_3cc1e257_render,
  CInputCheckboxvue_type_template_id_3cc1e257_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CInputCheckbox = (CInputCheckbox_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CInputFile.vue?vue&type=template&id=1ef80ef4&
var CInputFilevue_type_template_id_1ef80ef4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CFormGroup',_vm._b({scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._t("label",[(_vm.label)?_c('label',{class:_vm.labelClasses,attrs:{"for":_vm.safeId}},[_vm._v(" "+_vm._s(_vm.label)+" ")]):_vm._e()])]},proxy:true},{key:"input",fn:function(){return [_c('input',_vm._g(_vm._b({class:_vm.inputClasses,attrs:{"id":_vm.safeId,"multiple":_vm.multiple,"type":"file"},on:{"change":function($event){return _vm.onChange($event)}}},'input',_vm.$attrs,false),_vm.listeners)),(_vm.custom)?_c('label',{staticClass:"custom-file-label",attrs:{"for":_vm.safeId}},[_vm._v(" "+_vm._s(_vm.computedPlaceholder)+" ")]):_vm._e()]},proxy:true},_vm._l((_vm.$options.slots),function(slot){return {key:slot,fn:function(){return [_vm._t(slot)]},proxy:true}})],null,true)},'CFormGroup',{validFeedback: _vm.validFeedback, invalidFeedback: _vm.invalidFeedback, tooltipFeedback: _vm.tooltipFeedback, description: _vm.description,
           wrapperClasses: _vm.wrapperClasses, class: _vm.computedClasses},false))}
var CInputFilevue_type_template_id_1ef80ef4_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CInputFile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var CInputFilevue_type_script_lang_js_mixins = Object.values(form_mixins_namespaceObject).filter(function (i, key) {
  return key !== 'watchValue';
});
/* harmony default export */ var CInputFilevue_type_script_lang_js_ = ({
  name: 'CInputFile',
  inheritAttrs: false,
  components: {
    CFormGroup: CFormGroup
  },
  mixins: CInputFilevue_type_script_lang_js_mixins,
  slots: ['label-after-input', 'valid-feedback', 'invalid-feedback', 'description'],
  props: inputFileProps,
  // {
  // validFeedback: String,
  // invalidFeedback: String,
  // tooltipFeedback: Boolean,
  // description: String,
  // label: String,
  // wasValidated: Boolean,
  // isValid: {
  //   type: [Boolean, Function],
  //   default: null
  // },
  // addInputClasses: [String, Array, Object],
  // addLabelClasses: [String, Array, Object],
  // horizontal: [Boolean, Object],
  // size: {
  //   type: String,
  //   validator: str => ['','sm','lg'].includes(str)
  // },
  // addWrapperClasses: [String, Array, Object],
  // custom: Boolean,
  // placeholder: String,
  // multiple: Boolean
  // },
  data: function data() {
    return {
      state: null
    };
  },
  computed: {
    computedPlaceholder: function computedPlaceholder() {
      return this.placeholder || "Choose file".concat(this.multiple ? 's' : '', "...");
    },
    // classesComputedProps mixin
    // haveCustomSize () {
    //   return ['sm','lg'].includes(this.size)
    // },
    computedClasses: function computedClasses() {
      return [this.isHorizontal ? 'form-row' : this.custom ? 'custom-file' : 'form-group position-relative', {
        'was-validated': this.wasValidated
      }];
    },
    // labelClasses () {
    //   return [
    //     this.addLabelClasses,
    //     {
    //       'col-form-label': this.isHorizontal,
    //       [this.horizontal.label || 'col-sm-3']: this.isHorizontal,
    //       [`col-form-label-${this.size}`]: this.haveCustomSize,
    //     }
    //   ]
    // },
    // customSizeClass () {
    //   if (this.haveCustomSize && !this.haveWrapper) {
    //     return `form-control-${this.size}`
    //   }
    // },
    inputClass: function inputClass() {
      return this.custom ? 'custom-file-input' : 'form-control-file';
    },
    // inputClasses () {
    //   return [
    //     this.inputClass || `form-control${this.plaintext ? '-plaintext' : ''}`,
    //     this.validationClass,
    //     this.addInputClasses,
    //     this.customSizeClass
    //   ]
    // }
    // validationComputedProps mixin
    // computedIsValid () {
    //   if (typeof this.isValid === 'function') {
    //     return this.isValid(this.state)
    //   }
    //   return this.isValid
    // },
    // validationClass () {
    //   if (typeof this.computedIsValid === 'boolean') {
    //     return this.computedIsValid ? 'is-valid' : 'is-invalid'
    //   }
    // }
    //wrapperComputedProps mixin
    // isHorizontal () {
    //   return Boolean(this.horizontal)
    // },
    haveInputGroup: function haveInputGroup() {
      return false;
    } // haveWrapper () {
    //   return this.haveInputGroup || Boolean(this.addWrapperClasses || this.isHorizontal)
    // },
    // wrapperClasses () {
    //   if (this.haveWrapper) {
    //     return [
    //       this.addWrapperClasses,
    //       {
    //         [this.horizontal.input || 'col-sm-9'] : this.isHorizontal,
    //         'input-group' : this.haveInputGroup,
    //         [`input-group-${this.size}`]: this.haveCustomSize
    //       }
    //     ]
    //   }
    // }

  },
  methods: {
    onChange: function onChange(e) {
      this.state = e.target.files;
      this.$emit('change', e.target.files, e);
    }
  }
});
// CONCATENATED MODULE: ./src/components/form/CInputFile.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_CInputFilevue_type_script_lang_js_ = (CInputFilevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form/CInputFile.vue





/* normalize component */

var CInputFile_component = normalizeComponent(
  form_CInputFilevue_type_script_lang_js_,
  CInputFilevue_type_template_id_1ef80ef4_render,
  CInputFilevue_type_template_id_1ef80ef4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CInputFile = (CInputFile_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CInputRadio.vue?vue&type=script&lang=js&

/* harmony default export */ var CInputRadiovue_type_script_lang_js_ = ({
  name: 'CInputRadio',
  extends: CInputCheckbox,
  type: 'radio'
});
// CONCATENATED MODULE: ./src/components/form/CInputRadio.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_CInputRadiovue_type_script_lang_js_ = (CInputRadiovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form/CInputRadio.vue
var CInputRadio_render, CInputRadio_staticRenderFns




/* normalize component */

var CInputRadio_component = normalizeComponent(
  form_CInputRadiovue_type_script_lang_js_,
  CInputRadio_render,
  CInputRadio_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CInputRadio = (CInputRadio_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CSelect.vue?vue&type=template&id=30a43992&
var CSelectvue_type_template_id_30a43992_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CFormGroup',_vm._b({scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._t("label",[(_vm.label)?_c('label',{class:_vm.labelClasses,attrs:{"for":_vm.safeId}},[_vm._v(" "+_vm._s(_vm.label)+" ")]):_vm._e()])]},proxy:true},{key:"input",fn:function(){return [_c('select',_vm._g(_vm._b({class:_vm.inputClasses,attrs:{"id":_vm.safeId},on:{"input":function($event){return _vm.onSelect($event)}}},'select',_vm.$attrs,false),_vm.listeners),[(_vm.placeholder)?_c('option',{attrs:{"value":"","selected":"","disabled":"","hidden":""}},[_vm._v(" "+_vm._s(_vm.placeholder)+" ")]):_vm._e(),_vm._l((_vm.options),function(option,key){return [(typeof option === 'object')?_c('option',_vm._b({key:key,attrs:{"disabled":option.disabled,"data-key":key},domProps:{"value":option.value,"selected":option.value === _vm.value}},'option',option.attrs,false),[_vm._v(" "+_vm._s(option.label || option.value)+" ")]):_c('option',{key:key,attrs:{"data-key":key},domProps:{"value":option,"selected":option === _vm.value}},[_vm._v(" "+_vm._s(option)+" ")])]})],2)]},proxy:true},_vm._l((_vm.$options.slots),function(slot){return {key:slot,fn:function(){return [_vm._t(slot)]},proxy:true}})],null,true)},'CFormGroup',{
    append: _vm.append, prepend: _vm.prepend, validFeedback: _vm.validFeedback, invalidFeedback: _vm.invalidFeedback,
    tooltipFeedback: _vm.tooltipFeedback, description: _vm.description, wrapperClasses: _vm.wrapperClasses, class: _vm.computedClasses
  },false))}
var CSelectvue_type_template_id_30a43992_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CSelect.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var CSelectvue_type_script_lang_js_mixins = Object.values(form_mixins_namespaceObject);


/* harmony default export */ var CSelectvue_type_script_lang_js_ = ({
  name: 'CSelect',
  inheritAttrs: false,
  components: {
    CFormGroup: CFormGroup
  },
  slots: ['prepend', 'prepend-content', 'append-content', 'append', 'label-after-input', 'valid-feedback', 'invalid-feedback', 'description'],
  mixins: CSelectvue_type_script_lang_js_mixins,
  props: selectProps,
  // Html props: disabled, required don't use multiple
  // {
  //   validFeedback: String,
  //   invalidFeedback: String,
  //   tooltipFeedback: Boolean,
  //   description: String,
  //   append: String,
  //   prepend: String,
  //   label: String,
  //   wasValidated: Boolean,
  //   isValid: {
  //     type: [Boolean, Function],
  //     default: null
  //   },
  //   addInputClasses: [String, Array, Object],
  //   addLabelClasses: [String, Array, Object],
  //   horizontal: [Boolean, Object],
  //   size: {
  //     type: String,
  //     validator: str => ['','sm','lg'].includes(str)
  //   },
  //   addWrapperClasses: [String, Array, Object],
  //   options: Array,
  //   value: [String, Number, Boolean, Array],
  //   plaintext: Boolean,
  //   placeholder: String,
  //   custom: Boolean
  // },
  data: function data() {
    return {
      state: this.value || undefined
    };
  },
  //watchValue mixin
  // watch: {
  //   value (val) {
  //     this.state = val
  //   }
  // },
  computed: {
    // classesComputedProps mixin
    // haveCustomSize () {
    //   return ['sm','lg'].includes(this.size)
    // },
    // computedClasses () {
    //   return [
    //     'form-group',
    //     {
    //      'was-validated': this.wasValidated,
    //      'form-row': this.isHorizontal
    //     }
    //   ]
    // },
    // labelClasses () {
    //   return [
    //     this.addLabelClasses,
    //     {
    //       'col-form-label': this.isHorizontal,
    //       [this.horizontal.label || 'col-sm-3']: this.isHorizontal,
    //       [`col-form-label-${this.size}`]: this.haveCustomSize,
    //     }
    //   ]
    // },
    customSizeClass: function customSizeClass() {
      if (this.haveCustomSize && !this.haveWrapper) {
        return "".concat(this.custom ? 'custom-select' : 'form-control', "-").concat(this.size);
      }
    },
    inputClass: function inputClass() {
      var standardClass = "form-control".concat(this.plaintext ? '-plaintext' : '');
      return this.custom ? 'custom-select' : standardClass;
    } // inputClasses () {
    //   return [
    //     this.inputClass || `form-control${this.plaintext ? '-plaintext' : ''}`,
    //     this.validationClass,
    //     this.addInputClasses,
    //     this.customSizeClass
    //   ]
    // }
    // validationComputedProps mixin
    // computedIsValid () {
    //   if (typeof this.isValid === 'function') {
    //     return this.isValid(this.state)
    //   }
    //   return this.isValid
    // },
    // validationClass () {
    //   if (typeof this.computedIsValid === 'boolean') {
    //     return this.computedIsValid ? 'is-valid' : 'is-invalid'
    //   }
    // },
    //wrapperComputedProps mixin
    // isHorizontal () {
    //   return Boolean(this.horizontal)
    // },
    // haveInputGroup () {
    //   return Boolean(
    //     this.tooltipFeedback || 
    //     this.append ||
    //     this.prepend || 
    //     this.$slots.append || 
    //     this.$slots.prepend || 
    //     this.$slots['append-content'] ||
    //     this.$slots['prepend-content']
    //   )
    // },
    // haveWrapper () {
    //   return this.haveInputGroup || Boolean(this.addWrapperClasses || this.isHorizontal)
    // },
    // wrapperClasses () {
    //   if (this.haveWrapper) {
    //     return [
    //       this.addWrapperClasses,
    //       {
    //         [this.horizontal.input || 'col-sm-9'] : this.isHorizontal,
    //         'input-group' : this.haveInputGroup,
    //         [`input-group-${this.size}`]: this.haveCustomSize
    //       }
    //     ]
    //   }
    // }

  },
  methods: {
    onSelect: function onSelect(e) {
      var optionIndex = e.target.selectedOptions[0].dataset.key;
      var option = this.options[optionIndex];
      var value = option.value || option;
      this.state = value;
      this.$emit('update:value', value, e);
    }
  }
});
// CONCATENATED MODULE: ./src/components/form/CSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_CSelectvue_type_script_lang_js_ = (CSelectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form/CSelect.vue





/* normalize component */

var CSelect_component = normalizeComponent(
  form_CSelectvue_type_script_lang_js_,
  CSelectvue_type_template_id_30a43992_render,
  CSelectvue_type_template_id_30a43992_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSelect = (CSelect_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CTextarea.vue?vue&type=template&id=0507c795&
var CTextareavue_type_template_id_0507c795_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CFormGroup',_vm._b({scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._t("label",[(_vm.label)?_c('label',{class:_vm.labelClasses,attrs:{"for":_vm.safeId}},[_vm._v(" "+_vm._s(_vm.label)+" ")]):_vm._e()])]},proxy:true},{key:"input",fn:function(){return [_c('textarea',_vm._g(_vm._b({class:_vm.inputClasses,attrs:{"id":_vm.safeId,"readonly":_vm.readonly || _vm.plaintext},domProps:{"value":_vm.state},on:{"input":function($event){return _vm.onInput($event)},"change":function($event){return _vm.onChange($event)}}},'textarea',_vm.$attrs,false),_vm.listeners))]},proxy:true},_vm._l((_vm.$options.slots),function(slot){return {key:slot,fn:function(){return [_vm._t(slot)]},proxy:true}})],null,true)},'CFormGroup',{append: _vm.append, prepend: _vm.prepend, validFeedback: _vm.validFeedback, invalidFeedback: _vm.invalidFeedback,
    tooltipFeedback: _vm.tooltipFeedback, description: _vm.description, wrapperClasses: _vm.wrapperClasses, class: _vm.computedClasses},false))}
var CTextareavue_type_template_id_0507c795_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CTextarea.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var CTextareavue_type_script_lang_js_mixins = Object.values(form_mixins_namespaceObject);
/* harmony default export */ var CTextareavue_type_script_lang_js_ = ({
  name: 'CTextarea',
  slots: ['prepend', 'prepend-content', 'append-content', 'append', 'label-after-input', 'valid-feedback', 'invalid-feedback', 'description'],
  inheritAttrs: false,
  components: {
    CFormGroup: CFormGroup
  },
  mixins: CTextareavue_type_script_lang_js_mixins,
  props: textareaProps,
  // Html props: disabled, required, rows, cols, placeholder
  // {
  //   validFeedback: String,
  //   invalidFeedback: String,
  //   tooltipFeedback: Boolean,
  //   description: String,
  //   append: String,
  //   prepend: String,
  //   label: String,
  //   wasValidated: Boolean,
  //   isValid: {
  //     type: [Boolean, Function],
  //     default: null
  //   },
  //   addInputClasses: [String, Array, Object],
  //   addLabelClasses: [String, Array, Object],
  //   horizontal: [Boolean, Object],
  //   size: {
  //     type: String,
  //     validator: str => ['','sm','lg'].includes(str)
  //   },
  //   addWrapperClasses: [String, Array, Object],
  //   readonly: Boolean,
  //   plaintext: Boolean,
  //   value: [String, Number],
  //   lazy: {
  //     type: [Boolean, Number],
  //     default: 400
  //   }
  // },
  data: function data() {
    return {
      state: this.value
    };
  },
  //watchValue mixin
  // watch: {
  //   value (val) {
  //     this.state = val
  //   }
  // },
  computed: {// classesComputedProps mixin
    // haveCustomSize () {
    //   return ['sm','lg'].includes(this.size)
    // },
    // computedClasses () {
    //   return [
    //     'form-group',
    //     {
    //      'was-validated': this.wasValidated,
    //      'form-row': this.isHorizontal
    //     }
    //   ]
    // },
    // labelClasses () {
    //   return [
    //     this.addLabelClasses,
    //     {
    //       'col-form-label': this.isHorizontal,
    //       [this.horizontal.label || 'col-sm-3']: this.isHorizontal,
    //       [`col-form-label-${this.size}`]: this.haveCustomSize,
    //     }
    //   ]
    // },
    // customSizeClass () {
    //   if (this.haveCustomSize && !this.haveWrapper) {
    //     return `form-control-${this.size}`
    //   }
    // },
    // inputClasses () {
    //   return [
    //     this.inputClass || `form-control${this.plaintext ? '-plaintext' : ''}`,
    //     this.validationClass,
    //     this.addInputClasses,
    //     this.customSizeClass
    //   ]
    // }
    // validationComputedProps mixin
    // computedIsValid () {
    //   if (typeof this.isValid === 'function') {
    //     return this.isValid(this.state)
    //   }
    //   return this.isValid
    // },
    // validationClass () {
    //   if (typeof this.computedIsValid === 'boolean') {
    //     return this.computedIsValid ? 'is-valid' : 'is-invalid'
    //   }
    // }
    //wrapperComputedProps mixin
    // isHorizontal () {
    //   return Boolean(this.horizontal)
    // },
    // haveInputGroup () {
    //   return Boolean(
    //     this.tooltipFeedback || 
    //     this.append ||
    //     this.prepend || 
    //     this.$slots.append || 
    //     this.$slots.prepend || 
    //     this.$slots['append-content'] ||
    //     this.$slots['prepend-content']
    //   )
    // },
    // haveWrapper () {
    //   return this.haveInputGroup || Boolean(this.addWrapperClasses || this.isHorizontal)
    // },
    // wrapperClasses () {
    //   if (this.haveWrapper) {
    //     return [
    //       this.addWrapperClasses,
    //       {
    //         [this.horizontal.input || 'col-sm-9'] : this.isHorizontal,
    //         'input-group' : this.haveInputGroup,
    //         [`input-group-${this.size}`]: this.haveCustomSize
    //       }
    //     ]
    //   }
    // }
  },
  methods: {
    onInput: function onInput(e) {
      var _this = this;

      this.state = e.target.value;
      this.$emit('input', this.state, e);
      if (this.lazy === true) return;
      clearTimeout(this.syncTimeout);
      this.syncTimeout = setTimeout(function () {
        _this.$emit('update:value', _this.state, e);
      }, this.lazy !== false ? this.lazy : 0);
    },
    onChange: function onChange(e) {
      this.state = e.target.value;
      this.$emit('change', this.state, e);
      this.$emit('update:value', this.state, e);
    }
  }
});
// CONCATENATED MODULE: ./src/components/form/CTextarea.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_CTextareavue_type_script_lang_js_ = (CTextareavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form/CTextarea.vue





/* normalize component */

var CTextarea_component = normalizeComponent(
  form_CTextareavue_type_script_lang_js_,
  CTextareavue_type_template_id_0507c795_render,
  CTextareavue_type_template_id_0507c795_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CTextarea = (CTextarea_component.exports);
// CONCATENATED MODULE: ./src/components/form/index.js









// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/grid/CContainer.vue?vue&type=script&lang=js&

/* harmony default export */ var CContainervue_type_script_lang_js_ = ({
  functional: true,
  name: 'CContainer',
  props: {
    fluid: Boolean,
    tag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, a(data, {
      class: {
        'container': !props.fluid,
        'container-fluid': props.fluid
      }
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/grid/CContainer.vue?vue&type=script&lang=js&
 /* harmony default export */ var grid_CContainervue_type_script_lang_js_ = (CContainervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/grid/CContainer.vue
var CContainer_render, CContainer_staticRenderFns




/* normalize component */

var CContainer_component = normalizeComponent(
  grid_CContainervue_type_script_lang_js_,
  CContainer_render,
  CContainer_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CContainer = (CContainer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/grid/CRow.vue?vue&type=script&lang=js&
function CRowvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var CRowvue_type_script_lang_js_props = {
  tag: {
    type: String,
    default: 'div'
  },
  gutters: {
    type: Boolean,
    default: true
  },
  alignVertical: {
    type: String,
    validator: function validator(str) {
      return ['', 'start', 'end', 'center', 'baseline', 'stretch'].includes(str);
    }
  },
  alignHorizontal: {
    type: String,
    validator: function validator(str) {
      return ['', 'start', 'end', 'center', 'between', 'around'].includes(str);
    }
  },
  form: Boolean
};
/* harmony default export */ var CRowvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CRow',
  props: CRowvue_type_script_lang_js_props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, a(data, {
      staticClass: props.form ? 'form-row' : 'row',
      class: (_class = {
        'no-gutters': !props.gutters
      }, CRowvue_type_script_lang_js_defineProperty(_class, "align-items-".concat(props.alignVertical), props.alignVertical), CRowvue_type_script_lang_js_defineProperty(_class, "justify-content-".concat(props.alignHorizontal), props.alignHorizontal), _class)
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/grid/CRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var grid_CRowvue_type_script_lang_js_ = (CRowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/grid/CRow.vue
var CRow_render, CRow_staticRenderFns




/* normalize component */

var CRow_component = normalizeComponent(
  grid_CRowvue_type_script_lang_js_,
  CRow_render,
  CRow_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CRow = (CRow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/grid/CCol.vue?vue&type=script&lang=js&
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/* harmony default export */ var CColvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CCol',
  props: {
    col: [Boolean, String, Number, Object],
    xs: [Boolean, String, Number, Object],
    sm: [Boolean, String, Number, Object],
    md: [Boolean, String, Number, Object],
    lg: [Boolean, String, Number, Object],
    xl: [Boolean, String, Number, Object],
    tag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var classes = [];
    var suffixes = {
      'col': '',
      'xs': '-xs',
      'sm': '-sm',
      'md': '-md',
      'lg': '-lg',
      'xl': '-xl'
    };
    Object.keys(suffixes).forEach(function (key) {
      var prop = props[key];

      if (prop === true) {
        classes.push("col".concat(suffixes[key]));
      } else if (typeof prop === 'number' || typeof prop === 'string') {
        classes.push("col".concat(suffixes[key], "-").concat(prop));
      } else if (_typeof(prop) === 'object') {
        if (prop.size) {
          classes.push("col".concat(suffixes[key], "-").concat(prop.size));
        }

        if (prop.offset) {
          classes.push("offset".concat(suffixes[key], "-").concat(prop.offset));
        }

        if (prop.order) {
          classes.push("order".concat(suffixes[key], "-").concat(prop.order));
        }
      }
    });
    return h(props.tag, a(data, {
      class: classes.length ? classes : 'col'
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/grid/CCol.vue?vue&type=script&lang=js&
 /* harmony default export */ var grid_CColvue_type_script_lang_js_ = (CColvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/grid/CCol.vue
var CCol_render, CCol_staticRenderFns




/* normalize component */

var CCol_component = normalizeComponent(
  grid_CColvue_type_script_lang_js_,
  CCol_render,
  CCol_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCol = (CCol_component.exports);
// CONCATENATED MODULE: ./src/components/grid/index.js




// CONCATENATED MODULE: ./src/components/image/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/jumbotron/CJumbotron.vue?vue&type=script&lang=js&
function CJumbotronvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var CJumbotronvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CJumbotron',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    fluid: Boolean,
    color: String,
    borderColor: String,
    textColor: String
  },
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, a(data, {
      staticClass: 'jumbotron',
      class: (_class = {
        'jumbotron-fluid': props.fluid
      }, CJumbotronvue_type_script_lang_js_defineProperty(_class, "text-".concat(props.textColor), props.textColor), CJumbotronvue_type_script_lang_js_defineProperty(_class, "bg-".concat(props.color), props.color), CJumbotronvue_type_script_lang_js_defineProperty(_class, "border-".concat(props.borderColor), props.borderColor), CJumbotronvue_type_script_lang_js_defineProperty(_class, 'border', props.borderColor), _class)
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/jumbotron/CJumbotron.vue?vue&type=script&lang=js&
 /* harmony default export */ var jumbotron_CJumbotronvue_type_script_lang_js_ = (CJumbotronvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/jumbotron/CJumbotron.vue
var CJumbotron_render, CJumbotron_staticRenderFns




/* normalize component */

var CJumbotron_component = normalizeComponent(
  jumbotron_CJumbotronvue_type_script_lang_js_,
  CJumbotron_render,
  CJumbotron_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CJumbotron = (CJumbotron_component.exports);
// CONCATENATED MODULE: ./src/components/jumbotron/index.js


// CONCATENATED MODULE: ./src/components/link/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/list-group/CListGroup.vue?vue&type=script&lang=js&
function CListGroupvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var CListGroupvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CListGroup',
  props: {
    tag: {
      type: String,
      default: 'ul'
    },
    flush: Boolean,
    horizontal: [Boolean, String]
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var hor = props.horizontal;
    var horizontalClassSuffix = typeof hor === 'string' ? "-".concat(hor) : '';
    var componentData = {
      staticClass: 'list-group',
      class: CListGroupvue_type_script_lang_js_defineProperty({
        'list-group-flush': !hor && props.flush
      }, "list-group-horizontal".concat(horizontalClassSuffix), hor),
      attrs: {
        role: data.attrs ? data.attrs.role || 'list-items' : 'list-items'
      }
    };
    return h(props.tag, a(data, componentData), children);
  }
});
// CONCATENATED MODULE: ./src/components/list-group/CListGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var list_group_CListGroupvue_type_script_lang_js_ = (CListGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/list-group/CListGroup.vue
var CListGroup_render, CListGroup_staticRenderFns




/* normalize component */

var CListGroup_component = normalizeComponent(
  list_group_CListGroupvue_type_script_lang_js_,
  CListGroup_render,
  CListGroup_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CListGroup = (CListGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/list-group/CListGroupItem.vue?vue&type=script&lang=js&
function CListGroupItemvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var CListGroupItemvue_type_script_lang_js_props = Object.assign({
  tag: {
    type: String,
    default: 'li'
  },
  action: Boolean,
  color: String
}, propsFactory());
/* harmony default export */ var CListGroupItemvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CListGroupItem',
  props: CListGroupItemvue_type_script_lang_js_props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var tag = props.href || props.to ? CLink : props.tag;
    var isAction = Boolean(props.action || props.href || props.to || props.tag === 'button');
    var attrs = {};
    var itemProps = {};

    if (tag === 'button') {
      if (!data.attrs || !data.attrs.type) {
        attrs.type = 'button';
      }

      if (props.disabled) {
        attrs.disabled = true;
      }
    } else {
      itemProps = pick_by_keys(props, Object.keys(propsFactory()));
    }

    var componentData = {
      attrs: attrs,
      props: itemProps,
      staticClass: 'list-group-item',
      class: (_class = {}, CListGroupItemvue_type_script_lang_js_defineProperty(_class, "list-group-item-".concat(props.color), props.color), CListGroupItemvue_type_script_lang_js_defineProperty(_class, 'list-group-item-action', isAction), CListGroupItemvue_type_script_lang_js_defineProperty(_class, 'active', props.active), CListGroupItemvue_type_script_lang_js_defineProperty(_class, 'disabled', props.disabled), _class)
    };
    return h(tag, a(data, componentData), children);
  }
});
// CONCATENATED MODULE: ./src/components/list-group/CListGroupItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var list_group_CListGroupItemvue_type_script_lang_js_ = (CListGroupItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/list-group/CListGroupItem.vue
var CListGroupItem_render, CListGroupItem_staticRenderFns




/* normalize component */

var CListGroupItem_component = normalizeComponent(
  list_group_CListGroupItemvue_type_script_lang_js_,
  CListGroupItem_render,
  CListGroupItem_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CListGroupItem = (CListGroupItem_component.exports);
// CONCATENATED MODULE: ./src/components/list-group/index.js



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/media/CMedia.vue?vue&type=template&id=f9a384fa&
var CMediavue_type_template_id_f9a384fa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.mediaClasses},[_c('div',{class:_vm.asideClasses},[_vm._t("aside",[_c('CImg',_vm._b({},'CImg',_vm.computedAsideImageProps,false))])],2),_c('div',{class:_vm.mediaBodyClasses},[_vm._t("default")],2)])}
var CMediavue_type_template_id_f9a384fa_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/media/CMedia.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CMediavue_type_script_lang_js_ = ({
  name: 'CMedia',
  components: {
    CImg: CImg
  },
  props: {
    addAsideMargin: {
      type: Boolean,
      default: true
    },
    addAsideClasses: [String, Array, Object],
    addBodyClasses: [String, Array, Object],
    asideRight: Boolean,
    asideImageProps: Object,
    asideVerticalPosition: {
      type: String,
      default: 'start',
      validator: function validator(val) {
        return ['start', 'center', 'end', 'stretch'].includes(val);
      }
    }
  },
  computed: {
    computedAsideImageProps: function computedAsideImageProps() {
      return Object.assign({
        placeholderColor: '#777777',
        width: '64px',
        height: this.asideVerticalPosition === 'stretch' ? '100%' : '64px'
      }, this.asideImageProps || {});
    },
    asideClasses: function asideClasses() {
      return [this.addAsideMargin ? "m".concat(this.asideRight ? 'l' : 'r', "-3") : '', this.addAsideClasses, "align-self-".concat(this.asideVerticalPosition)];
    },
    mediaBodyClasses: function mediaBodyClasses() {
      return ['media-body', this.addBodyClasses];
    },
    mediaClasses: function mediaClasses() {
      return ['media', {
        'd-flex flex-row-reverse': this.asideRight
      }];
    }
  }
});
// CONCATENATED MODULE: ./src/components/media/CMedia.vue?vue&type=script&lang=js&
 /* harmony default export */ var media_CMediavue_type_script_lang_js_ = (CMediavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/media/CMedia.vue





/* normalize component */

var CMedia_component = normalizeComponent(
  media_CMediavue_type_script_lang_js_,
  CMediavue_type_template_id_f9a384fa_render,
  CMediavue_type_template_id_f9a384fa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CMedia = (CMedia_component.exports);
// CONCATENATED MODULE: ./src/components/media/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modal/CModal.vue?vue&type=template&id=7f1640b2&
var CModalvue_type_template_id_7f1640b2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:_vm.modalClasses,attrs:{"tabindex":"-1","role":"dialog"},on:{"click":function($event){return _vm.modalClick($event)}}},[_c('div',{class:_vm.dialogClasses,attrs:{"role":"document"}},[_c('div',{class:_vm.contentClasses},[_vm._t("header-wrapper",[_c('header',{staticClass:"modal-header"},[_vm._t("header",[_c('h5',{staticClass:"modal-title"},[_vm._v(" "+_vm._s(_vm.title)+" ")]),_c('CButtonClose',{on:{"click":function($event){return _vm.hide($event)}}})])],2)]),_vm._t("body-wrapper",[_c('div',{staticClass:"modal-body"},[_vm._t("default")],2)]),_vm._t("footer-wrapper",[_c('footer',{staticClass:"modal-footer"},[_vm._t("footer",[_c('button',{staticClass:"btn btn-secondary",attrs:{"type":"button"},on:{"click":function($event){return _vm.hide($event)}}},[_vm._v(" Cancel ")]),_c('button',{class:_vm.btnClasses,attrs:{"type":"button"},on:{"click":function($event){return _vm.hide($event)}}},[_vm._v(" OK ")])])],2)])],2)])]),(_vm.backdrop && (_vm.visible || _vm.isTransitioning))?_c('div',{class:_vm.backdropClasses}):_vm._e()])}
var CModalvue_type_template_id_7f1640b2_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modal/CModal.vue?vue&type=script&lang=js&
function CModalvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CModalvue_type_script_lang_js_ = ({
  name: 'CModal',
  components: {
    CButtonClose: CButtonClose
  },
  props: {
    show: Boolean,
    centered: Boolean,
    title: String,
    size: {
      type: String,
      validator: function validator(val) {
        return ['', 'sm', 'lg'].includes(val);
      }
    },
    color: String,
    borderColor: String,
    fade: {
      type: Boolean,
      default: true
    },
    backdrop: {
      type: Boolean,
      default: true
    },
    closeOnBackdrop: {
      type: Boolean,
      default: true
    },
    addContentClasses: [String, Array, Object]
  },
  data: function data() {
    return {
      visible: this.show,
      isTransitioning: false,
      timeout: null
    };
  },
  computed: {
    backdropClasses: function backdropClasses() {
      return {
        'modal-backdrop': true,
        'fade': this.fade,
        'show': this.visible || !this.fade
      };
    },
    modalClasses: function modalClasses() {
      return ['modal overflow-auto', CModalvue_type_script_lang_js_defineProperty({
        'fade': this.fade,
        'show': this.visible,
        'd-block': this.visible || this.isTransitioning
      }, "modal-".concat(this.color), this.color)];
    },
    dialogClasses: function dialogClasses() {
      return ['modal-dialog', CModalvue_type_script_lang_js_defineProperty({
        'modal-dialog-centered': this.centered
      }, "modal-".concat(this.size), this.size)];
    },
    contentClasses: function contentClasses() {
      return [this.addContentClasses, 'modal-content', CModalvue_type_script_lang_js_defineProperty({}, "border-".concat(this.borderColor), this.borderColor)];
    },
    btnClasses: function btnClasses() {
      return ["btn btn-".concat(this.color || 'primary')];
    }
  },
  watch: {
    show: function show(val) {
      this.toggle(val);
    }
  },
  methods: {
    modalClick: function modalClick(e) {
      if (e.target === this.$el.firstElementChild && this.closeOnBackdrop) {
        this.hide(e);
      }
    },
    hide: function hide(e) {
      this.$emit('update:show', false, e);
    },
    toggle: function toggle(newVal) {
      var _this = this;

      setTimeout(function () {
        _this.visible = newVal;
      }, 0);

      if (this.fade) {
        this.isTransitioning = true;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
          _this.isTransitioning = false;
        }, 150);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/modal/CModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_CModalvue_type_script_lang_js_ = (CModalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/modal/CModal.vue





/* normalize component */

var CModal_component = normalizeComponent(
  modal_CModalvue_type_script_lang_js_,
  CModalvue_type_template_id_7f1640b2_render,
  CModalvue_type_template_id_7f1640b2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CModal = (CModal_component.exports);
// CONCATENATED MODULE: ./src/components/modal/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/nav/CNav.vue?vue&type=template&id=5c87d462&
var CNavvue_type_template_id_5c87d462_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{class:_vm.navClasses,on:{"click":_vm.onClick}},[_vm._t("default")],2)}
var CNavvue_type_template_id_5c87d462_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/nav/CNav.vue?vue&type=script&lang=js&
function CNavvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
/* harmony default export */ var CNavvue_type_script_lang_js_ = ({
  name: 'CNav',
  props: {
    variant: {
      type: String,
      validator: function validator(val) {
        return ['', 'tabs', 'pills'].includes(val);
      }
    },
    fill: Boolean,
    justified: Boolean,
    vertical: Boolean,
    inCard: Boolean
  },
  provide: function provide() {
    var _this = this;

    var nav = {};
    Object.defineProperty(nav, 'active', {
      get: function get() {
        return _this.activeItemInstance;
      }
    });
    return {
      nav: nav
    };
  },
  data: function data() {
    return {
      activeItemInstance: null
    };
  },
  computed: {
    navClasses: function navClasses() {
      var _ref;

      return _ref = {
        'nav': true
      }, CNavvue_type_script_lang_js_defineProperty(_ref, "nav-".concat(this.variant), this.variant), CNavvue_type_script_lang_js_defineProperty(_ref, 'flex-column', this.vertical), CNavvue_type_script_lang_js_defineProperty(_ref, 'nav-fill', this.fill), CNavvue_type_script_lang_js_defineProperty(_ref, 'nav-justified', this.justified), CNavvue_type_script_lang_js_defineProperty(_ref, "card-header-".concat(this.variant), this.inCard && this.variant), _ref;
    }
  },
  methods: {
    onClick: function onClick(e) {
      var _this2 = this;

      this.$children.forEach(function (item) {
        if (item.$el.contains(e.target) && !item.disabled) {
          _this2.activeItemInstance = item;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/nav/CNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var nav_CNavvue_type_script_lang_js_ = (CNavvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/nav/CNav.vue





/* normalize component */

var CNav_component = normalizeComponent(
  nav_CNavvue_type_script_lang_js_,
  CNavvue_type_template_id_5c87d462_render,
  CNavvue_type_template_id_5c87d462_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CNav = (CNav_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/nav/CNavItem.vue?vue&type=template&id=540fdf1a&
var CNavItemvue_type_template_id_540fdf1a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"nav-item"},[_c('CLink',_vm._b({staticClass:"nav-link",attrs:{"active":_vm.isActive}},'CLink',_vm.$props,false),[_vm._t("default")],2)],1)}
var CNavItemvue_type_template_id_540fdf1a_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/nav/CNavItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CNavItemvue_type_script_lang_js_ = ({
  name: 'CNavItem',
  components: {
    CLink: CLink
  },
  inject: {
    nav: {
      default: {}
    }
  },
  props: CLinkvue_type_script_lang_js_props,
  computed: {
    isActive: function isActive() {
      return this.nav.active ? this.nav.active === this : this.active;
    }
  }
});
// CONCATENATED MODULE: ./src/components/nav/CNavItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var nav_CNavItemvue_type_script_lang_js_ = (CNavItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/nav/CNavItem.vue





/* normalize component */

var CNavItem_component = normalizeComponent(
  nav_CNavItemvue_type_script_lang_js_,
  CNavItemvue_type_template_id_540fdf1a_render,
  CNavItemvue_type_template_id_540fdf1a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CNavItem = (CNavItem_component.exports);
// CONCATENATED MODULE: ./src/components/nav/index.js



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/navbar/CNavbar.vue?vue&type=script&lang=js&
function CNavbarvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var CNavbarvue_type_script_lang_js_props = {
  tag: {
    type: String,
    default: 'nav'
  },
  light: Boolean,
  color: String,
  expandable: {
    type: [Boolean, String],
    default: false
  },
  fixed: {
    type: String,
    validator: function validator(val) {
      return ['', 'top', 'bottom'].includes(val);
    }
  },
  sticky: Boolean
};
/* harmony default export */ var CNavbarvue_type_script_lang_js_ = ({
  name: 'CNavbar',
  functional: true,
  props: CNavbarvue_type_script_lang_js_props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var expandClassSuffix = props.expandable === true ? '' : "-".concat(props.expandable);
    return h(props.tag, a(data, {
      staticClass: 'navbar',
      class: [props.light ? 'navbar-light' : 'navbar-dark', (_ref2 = {
        'sticky-top': props.sticky
      }, CNavbarvue_type_script_lang_js_defineProperty(_ref2, "bg-".concat(props.color), props.color), CNavbarvue_type_script_lang_js_defineProperty(_ref2, "fixed-".concat(props.fixed), props.fixed), CNavbarvue_type_script_lang_js_defineProperty(_ref2, "navbar-expand".concat(expandClassSuffix), props.expandable), _ref2)],
      attrs: {
        role: props.tag === 'nav' ? null : 'navigation'
      }
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/navbar/CNavbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var navbar_CNavbarvue_type_script_lang_js_ = (CNavbarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/navbar/CNavbar.vue
var CNavbar_render, CNavbar_staticRenderFns




/* normalize component */

var CNavbar_component = normalizeComponent(
  navbar_CNavbarvue_type_script_lang_js_,
  CNavbar_render,
  CNavbar_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CNavbar = (CNavbar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/navbar/CNavbarBrand.vue?vue&type=script&lang=js&


var CNavbarBrandvue_type_script_lang_js_props = Object.assign(propsFactory(), {
  tag: {
    type: String,
    default: 'div'
  }
});
/* harmony default export */ var CNavbarBrandvue_type_script_lang_js_ = ({
  name: 'CNavbarBrand',
  functional: true,
  props: CNavbarBrandvue_type_script_lang_js_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var isLink = Boolean(props.to || props.href);
    var tag = isLink ? CLink : props.tag;
    return h(tag, a(data, {
      staticClass: 'navbar-brand',
      props: isLink ? props : null
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/navbar/CNavbarBrand.vue?vue&type=script&lang=js&
 /* harmony default export */ var navbar_CNavbarBrandvue_type_script_lang_js_ = (CNavbarBrandvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/navbar/CNavbarBrand.vue
var CNavbarBrand_render, CNavbarBrand_staticRenderFns




/* normalize component */

var CNavbarBrand_component = normalizeComponent(
  navbar_CNavbarBrandvue_type_script_lang_js_,
  CNavbarBrand_render,
  CNavbarBrand_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CNavbarBrand = (CNavbarBrand_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/navbar/CNavbarNav.vue?vue&type=script&lang=js&

/* harmony default export */ var CNavbarNavvue_type_script_lang_js_ = ({
  name: 'CNavbarNav',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'ul'
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, a(data, {
      staticClass: 'navbar-nav'
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/navbar/CNavbarNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var navbar_CNavbarNavvue_type_script_lang_js_ = (CNavbarNavvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/navbar/CNavbarNav.vue
var CNavbarNav_render, CNavbarNav_staticRenderFns




/* normalize component */

var CNavbarNav_component = normalizeComponent(
  navbar_CNavbarNavvue_type_script_lang_js_,
  CNavbarNav_render,
  CNavbarNav_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CNavbarNav = (CNavbarNav_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/navbar/CNavbarText.vue?vue&type=template&id=bbae35c6&
var CNavbarTextvue_type_template_id_bbae35c6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"navbar-text"},[_vm._t("default")],2)}
var CNavbarTextvue_type_template_id_bbae35c6_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/navbar/CNavbarText.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CNavbarTextvue_type_script_lang_js_ = ({
  name: 'CNavbarText',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  }
});
// CONCATENATED MODULE: ./src/components/navbar/CNavbarText.vue?vue&type=script&lang=js&
 /* harmony default export */ var navbar_CNavbarTextvue_type_script_lang_js_ = (CNavbarTextvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/navbar/CNavbarText.vue





/* normalize component */

var CNavbarText_component = normalizeComponent(
  navbar_CNavbarTextvue_type_script_lang_js_,
  CNavbarTextvue_type_template_id_bbae35c6_render,
  CNavbarTextvue_type_template_id_bbae35c6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CNavbarText = (CNavbarText_component.exports);
// CONCATENATED MODULE: ./src/components/navbar/index.js





// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pagination/CPagination.vue?vue&type=template&id=1a802ed1&
var CPaginationvue_type_template_id_1a802ed1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{attrs:{"aria-label":"pagination"}},[_c('ul',{class:_vm.computedClasses},[(_vm.doubleArrows)?_c('li',{class:_vm.backArrowsClasses},[_c('CLink',{staticClass:"page-link",attrs:{"disabled":_vm.activePage === 1,"aria-label":"Go to first page","aria-disabled":_vm.activePage === 1},on:{"click":function($event){return _vm.setPage(1)}}},[_vm._t("first-button",[_vm._v("«")])],2)],1):_vm._e(),(_vm.arrows)?_c('li',{class:_vm.backArrowsClasses},[_c('CLink',{staticClass:"page-link",attrs:{"disabled":_vm.activePage === 1,"aria-label":"Go to previous page","aria-disabled":_vm.activePage === 1},on:{"click":function($event){return _vm.setPage(_vm.activePage - 1)}}},[_vm._t("previous-button",[_vm._v("‹")])],2)],1):_vm._e(),(_vm.beforeDots)?_c('li',{staticClass:"page-item disabled",attrs:{"role":"separator"}},[_c('span',{staticClass:"page-link"},[_vm._v("…")])]):_vm._e(),_vm._l((_vm.items),function(item,index){return _c('li',{key:index,class:[{ 'active': _vm.activePage === item }, 'page-item']},[_c('CLink',{staticClass:"page-link c-page-link-number",attrs:{"aria-label":_vm.activePage === item ? ("Current page " + item) : ("Go to page " + item)},on:{"click":function($event){return _vm.setPage(item, $event)}}},[_vm._v(" "+_vm._s(item)+" ")])],1)}),(_vm.afterDots)?_c('li',{staticClass:"page-item disabled",attrs:{"role":"separator"}},[_c('span',{staticClass:"page-link"},[_vm._v("…")])]):_vm._e(),(_vm.arrows)?_c('li',{class:_vm.nextArrowsClasses},[_c('CLink',{staticClass:"page-link",attrs:{"disabled":_vm.activePage === _vm.pages,"aria-label":"Go to next page","aria-disabled":_vm.activePage === _vm.pages},on:{"click":function($event){return _vm.setPage(_vm.activePage + 1)}}},[_vm._t("next-button",[_vm._v("›")])],2)],1):_vm._e(),(_vm.doubleArrows)?_c('li',{class:_vm.nextArrowsClasses},[_c('CLink',{staticClass:"page-link",attrs:{"disabled":_vm.activePage === _vm.pages,"aria-label":"Go to last page","aria-disabled":_vm.activePage === _vm.pages},on:{"click":function($event){return _vm.setPage(_vm.pages)}}},[_vm._t("last-button",[_vm._v("»")])],2)],1):_vm._e()],2)])}
var CPaginationvue_type_template_id_1a802ed1_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pagination/CPagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CPaginationvue_type_script_lang_js_ = ({
  name: 'CPagination',
  components: {
    CLink: CLink
  },
  props: {
    activePage: {
      type: Number,
      default: 1
    },
    pages: {
      type: Number,
      default: 10
    },
    size: {
      type: String,
      validator: function validator(val) {
        return ['', 'sm', 'lg'].includes(val);
      }
    },
    align: {
      type: String,
      default: 'start',
      validator: function validator(val) {
        return ['start', 'center', 'end'].includes(val);
      }
    },
    limit: {
      type: Number,
      default: 5
    },
    dots: {
      type: Boolean,
      default: true
    },
    arrows: {
      type: Boolean,
      default: true
    },
    doubleArrows: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    pages: {
      immediate: true,
      handler: function handler(val) {
        if (val && val < this.activePage) {
          this.$emit('update:activePage', val);
        }
      }
    }
  },
  computed: {
    backArrowsClasses: function backArrowsClasses() {
      return ['page-item', {
        'disabled': this.activePage === 1
      }];
    },
    nextArrowsClasses: function nextArrowsClasses() {
      return ['page-item', {
        'disabled': this.activePage === this.pages
      }];
    },
    computedClasses: function computedClasses() {
      var sizeClass = this.size ? "pagination-".concat(this.size) : '';
      return "pagination ".concat(sizeClass, " justify-content-").concat(this.align);
    },
    showDots: function showDots() {
      return this.dots && this.limit > 4 && this.limit < this.pages;
    },
    maxPrevItems: function maxPrevItems() {
      return Math.floor((this.limit - 1) / 2);
    },
    maxNextItems: function maxNextItems() {
      return Math.ceil((this.limit - 1) / 2);
    },
    beforeDots: function beforeDots() {
      return this.showDots && this.activePage > this.maxPrevItems + 1;
    },
    afterDots: function afterDots() {
      return this.showDots && this.activePage < this.pages - this.maxNextItems;
    },
    computedLimit: function computedLimit() {
      return this.limit - this.afterDots - this.beforeDots;
    },
    range: function range() {
      return this.activePage + this.maxNextItems;
    },
    lastItem: function lastItem() {
      return this.range >= this.pages ? this.pages : this.range - this.afterDots;
    },
    itemsAmount: function itemsAmount() {
      return this.pages < this.computedLimit ? this.pages : this.computedLimit;
    },
    items: function items() {
      var _this = this;

      if (this.activePage - this.maxPrevItems <= 1) {
        return Array.from({
          length: this.itemsAmount
        }, function (v, i) {
          return i + 1;
        });
      } else {
        return Array.from({
          length: this.itemsAmount
        }, function (v, i) {
          return _this.lastItem - i;
        }).reverse();
      }
    }
  },
  methods: {
    setPage: function setPage(number) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (number === this.activePage) {
        return;
      }

      this.$emit('update:activePage', number);

      if (e) {
        this.changeFocus(e);
      }
    },
    changeFocus: function changeFocus(e) {
      var items = this.$el.getElementsByClassName('c-page-link-number');
      var focused = Number(e.target.innerHTML);
      this.$nextTick(function () {
        for (var i = 0; i < items.length; i++) {
          if (Number(items[i].innerHTML) === focused) {
            items[i].focus();
          }
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/pagination/CPagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagination_CPaginationvue_type_script_lang_js_ = (CPaginationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/pagination/CPagination.vue





/* normalize component */

var CPagination_component = normalizeComponent(
  pagination_CPaginationvue_type_script_lang_js_,
  CPaginationvue_type_template_id_1a802ed1_render,
  CPaginationvue_type_template_id_1a802ed1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CPagination = (CPagination_component.exports);
// CONCATENATED MODULE: ./src/components/pagination/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/progress/CProgress.vue?vue&type=template&id=5f6e68a6&
var CProgressvue_type_template_id_5f6e68a6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"progress",style:({ height: _vm.height })},[_vm._t("default",[_c('CProgressBar',{attrs:{"value":_vm.value}})])],2)}
var CProgressvue_type_template_id_5f6e68a6_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/progress/CProgressBar.vue?vue&type=template&id=7eb1af54&
var CProgressBarvue_type_template_id_7eb1af54_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.progressBarClasses,style:(_vm.progressBarStyles),attrs:{"role":"progressbar","aria-valuemin":"0","aria-valuemax":_vm.props.max.toString(),"aria-valuenow":_vm.computedValue}},[_vm._t("default",[_vm._v(_vm._s(_vm.text))])],2)}
var CProgressBarvue_type_template_id_7eb1af54_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/progress/progress-props.js
/* harmony default export */ var progress_props = ({
  height: String,
  // These props can be inherited via the child CProgressBar(s)
  color: String,
  striped: Boolean,
  animated: Boolean,
  precision: {
    type: Number,
    default: 0
  },
  showPercentage: Boolean,
  showValue: Boolean,
  max: {
    type: Number,
    default: 100
  },
  value: {
    type: Number,
    default: 0
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/progress/CProgressBar.vue?vue&type=script&lang=js&
function CProgressBarvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CProgressBarvue_type_script_lang_js_ = ({
  name: 'CProgressBar',
  props: progress_props,
  inject: {
    progress: {
      default: undefined
    }
  },
  computed: {
    directlyDeclaredProps: function directlyDeclaredProps() {
      return Object.keys(this.$options.propsData);
    },
    injectedProps: function injectedProps() {
      return this.progress && this.progress.props ? this.progress.props : {};
    },
    props: function props() {
      var _this = this;

      return Object.keys(progress_props).reduce(function (computedProps, key) {
        var propIsDirectlyDeclared = _this.directlyDeclaredProps.includes(key);

        var parentPropExists = _this.injectedProps[key] !== undefined;
        var propIsInherited = parentPropExists && !propIsDirectlyDeclared;
        computedProps[key] = propIsInherited ? _this.injectedProps[key] : _this[key];
        return computedProps;
      }, {});
    },
    progressBarClasses: function progressBarClasses() {
      var _ref;

      return ['progress-bar', (_ref = {}, CProgressBarvue_type_script_lang_js_defineProperty(_ref, "bg-".concat(this.props.color), this.props.color), CProgressBarvue_type_script_lang_js_defineProperty(_ref, 'progress-bar-striped', this.props.striped || this.props.animated), CProgressBarvue_type_script_lang_js_defineProperty(_ref, 'progress-bar-animated', this.props.animated), _ref)];
    },
    progressBarStyles: function progressBarStyles() {
      return {
        width: "".concat(100 * (this.props.value / this.props.max), "%")
      };
    },
    progressValue: function progressValue() {
      var p = Math.pow(10, this.props.precision);
      return Math.round(100 * p * this.props.value / this.props.max) / p;
    },
    computedValue: function computedValue() {
      return this.props.value.toFixed(progress_props.precision);
    },
    text: function text() {
      if (this.props.showPercentage) {
        return this.progressValue + '%';
      } else if (this.props.showValue) {
        return this.computedValue;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/progress/CProgressBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var progress_CProgressBarvue_type_script_lang_js_ = (CProgressBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/progress/CProgressBar.vue





/* normalize component */

var CProgressBar_component = normalizeComponent(
  progress_CProgressBarvue_type_script_lang_js_,
  CProgressBarvue_type_template_id_7eb1af54_render,
  CProgressBarvue_type_template_id_7eb1af54_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CProgressBar = (CProgressBar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/progress/CProgress.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//


/* harmony default export */ var CProgressvue_type_script_lang_js_ = ({
  name: 'CProgress',
  components: {
    CProgressBar: CProgressBar
  },
  props: progress_props,
  provide: function provide() {
    var _this = this;

    var progress = {};
    Object.defineProperty(progress, 'props', {
      get: function get() {
        return _this._props;
      }
    });
    return {
      progress: progress
    };
  }
});
// CONCATENATED MODULE: ./src/components/progress/CProgress.vue?vue&type=script&lang=js&
 /* harmony default export */ var progress_CProgressvue_type_script_lang_js_ = (CProgressvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/progress/CProgress.vue





/* normalize component */

var CProgress_component = normalizeComponent(
  progress_CProgressvue_type_script_lang_js_,
  CProgressvue_type_template_id_5f6e68a6_render,
  CProgressvue_type_template_id_5f6e68a6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CProgress = (CProgress_component.exports);
// CONCATENATED MODULE: ./src/components/progress/index.js



// EXTERNAL MODULE: ./node_modules/lodash.clonedeep/index.js
var lodash_clonedeep = __webpack_require__("cd3f");
var lodash_clonedeep_default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/render-function/CRenderFunction.vue?vue&type=script&lang=js&
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


/* harmony default export */ var CRenderFunctionvue_type_script_lang_js_ = ({
  name: 'CRenderFunction',
  props: {
    contentToRender: Array,
    flat: Boolean
  },
  computed: {
    copiedContent: function copiedContent() {
      return lodash_clonedeep_default()(this.contentToRender);
    },
    content: function content() {
      if (!this.flat) {
        return this.copiedContent;
      } else {
        return this.convertedContent[0];
      }
    },
    convertedContent: function convertedContent() {
      var _this = this;

      return this.copiedContent.map(function (item) {
        return _this.convertItem(item);
      });
    }
  },
  methods: {
    convertItem: function convertItem(item) {
      var _this2 = this;

      if (typeof item === 'string') {
        return item;
      }

      var newItem = [];
      newItem[0] = item._name || 'div';
      newItem[1] = {};
      newItem[1].props = this.getProps(item);
      this.$options.renderFunctionOptions.forEach(function (option) {
        //on option doesn't work, possible to use only nativeOn
        if (item["_".concat(option)]) {
          newItem[1][option] = item["_".concat(option)];
        }
      });

      if (item._children) {
        newItem[2] = item._children.map(function (item) {
          return _this2.convertItem(item);
        });
      }

      return newItem;
    },
    getProps: function getProps(item) {
      return Object.keys(item).reduce(function (itemProps, key) {
        if (!key.includes('_')) {
          itemProps[key] = item[key];
        }

        return itemProps;
      }, {});
    }
  },
  renderFunctionOptions: ['attrs', 'directives', 'on', 'nativeOn', 'class', 'style', 'domProps', 'scopedSlots', 'slot', 'key', 'ref', 'refInFor'],
  render: function render(h) {
    var _this3 = this;

    var computeRenderFunction = function computeRenderFunction(renderFunction) {
      return renderFunction.map(function (item) {
        if (Array.isArray(item)) {
          return item.map(function (child) {
            if (typeof child === 'string') {
              return child;
            } else if (Array.isArray(child)) {
              var el = computeRenderFunction(child);
              return h.apply(void 0, _toConsumableArray(el));
            } else if (child.slot) {
              return _this3.$scopedSlots[child.slot]();
            }
          });
        }

        return item;
      });
    };

    if (Array.isArray(this.content) && this.content.length) {
      return h.apply(void 0, _toConsumableArray(computeRenderFunction(this.content)));
    } else {
      return h(false);
    }
  }
});
// CONCATENATED MODULE: ./src/components/render-function/CRenderFunction.vue?vue&type=script&lang=js&
 /* harmony default export */ var render_function_CRenderFunctionvue_type_script_lang_js_ = (CRenderFunctionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/render-function/CRenderFunction.vue
var CRenderFunction_render, CRenderFunction_staticRenderFns




/* normalize component */

var CRenderFunction_component = normalizeComponent(
  render_function_CRenderFunctionvue_type_script_lang_js_,
  CRenderFunction_render,
  CRenderFunction_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CRenderFunction = (CRenderFunction_component.exports);
// CONCATENATED MODULE: ./src/components/render-function/index.js


// CONCATENATED MODULE: ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js
/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */

function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  rtl: 'ps__rtl',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
  for (var name in this.handlers) {
    this.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

function processScrollDiff(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
}

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function perfect_scrollbar_esm_outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      ('maxTouchPoints' in window.navigator &&
        window.navigator.maxTouchPoints > 0) ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

function updateGeometry(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);
  var rect = element.getBoundingClientRect();

  i.containerWidth = Math.ceil(rect.width);
  i.containerHeight = Math.ceil(rect.height);
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt((i.railXWidth * i.containerWidth) / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      ((i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth)) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt((i.railYHeight * i.containerHeight) / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      (roundedScrollTop * (i.railYHeight - i.scrollbarYHeight)) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
}

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth -
        9;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

function clickRail(i) {
  var element = i.element;

  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
}

function dragThumb(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
}

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    if (e.touches && e.touches[0]) {
      e[pageY] = e.touches[0].pageY;
    }
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  function bindMoves(e, touchMode) {
    startingScrollTop = element[scrollTop];
    if (touchMode && e.touches) {
      e[pageY] = e.touches[0].pageY;
    }
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);
    if (!touchMode) {
      i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
      e.preventDefault();
    } else {
      i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
    }

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    bindMoves(e);
  });
  i.event.bind(i[scrollbarY], 'touchstart', function (e) {
    bindMoves(e, true);
  });
}

function keyboard(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
}

function wheel(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = (-1 * e.wheelDeltaX) / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
}

function touch(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
}

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var perfect_scrollbar_esm_handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  if (this.isRtl === true) {
    element.classList.add(cls.rtl);
  }
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? perfect_scrollbar_esm_outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
        ? 'end'
        : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
        ? 'end'
        : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return perfect_scrollbar_esm_handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ var perfect_scrollbar_esm = (PerfectScrollbar);
//# sourceMappingURL=perfect-scrollbar.esm.js.map

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scrollbar/CScrollbar.vue?vue&type=script&lang=js&
// this component is a refector of vue-perfect-scrollbar component https://github.com/lecion/vue-perfect-scrollbar

/* harmony default export */ var CScrollbarvue_type_script_lang_js_ = ({
  name: 'CScrollbar',
  props: {
    settings: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    switcher: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  watch: {
    switcher: function switcher(val) {
      if (!val) {
        this.__uninit();
      } else {
        this.__init();
      }
    }
  },
  mounted: function mounted() {
    if (!this.$isServer && this.switcher) {
      this.__init();
    }
  },
  updated: function updated() {
    this.$nextTick(this.__update);
  },
  beforeDestroy: function beforeDestroy() {
    this.__uninit();
  },
  methods: {
    __init: function __init() {
      if (!this._ps_bar) {
        this.__createPerfectScrollbar();
      }
    },
    __createPerfectScrollbar: function __createPerfectScrollbar() {
      this._ps_bar = new perfect_scrollbar_esm(this.$el, this.settings);
    },
    __uninit: function __uninit() {
      if (this._ps_bar) {
        this._ps_bar.destroy();

        this._ps_bar = null;
      }
    },
    __update: function __update() {
      if (this._ps_bar) {
        this._ps_bar.update();
      }
    }
  },
  render: function render(h) {
    return h(this.tag, {
      style: 'position: relative'
    }, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./src/components/scrollbar/CScrollbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var scrollbar_CScrollbarvue_type_script_lang_js_ = (CScrollbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/perfect-scrollbar/css/perfect-scrollbar.css?vue&type=style&index=0&id=3738b722&scoped=true&lang=css&
var perfect_scrollbarvue_type_style_index_0_id_3738b722_scoped_true_lang_css_ = __webpack_require__("399a");

// CONCATENATED MODULE: ./src/components/scrollbar/CScrollbar.vue
var CScrollbar_render, CScrollbar_staticRenderFns





/* normalize component */

var CScrollbar_component = normalizeComponent(
  scrollbar_CScrollbarvue_type_script_lang_js_,
  CScrollbar_render,
  CScrollbar_staticRenderFns,
  false,
  null,
  "3738b722",
  null
  
)

/* harmony default export */ var CScrollbar = (CScrollbar_component.exports);
// CONCATENATED MODULE: ./src/components/scrollbar/index.js


// CONCATENATED MODULE: ./src/components/spinner/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/switch/CSwitch.vue?vue&type=template&id=b3615da0&
var CSwitchvue_type_template_id_b3615da0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:_vm.classList},[_c('input',_vm._b({staticClass:"c-switch-input form-check-input",attrs:{"type":_vm.type},domProps:{"checked":_vm.state},on:{"change":_vm.onChange}},'input',_vm.$attrs,false)),_c('span',{staticClass:"c-switch-slider",attrs:{"data-checked":_vm.labelOn,"data-unchecked":_vm.labelOff}})])}
var CSwitchvue_type_template_id_b3615da0_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/switch/CSwitch.vue?vue&type=script&lang=js&
function CSwitchvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CSwitchvue_type_script_lang_js_ = ({
  name: 'CSwitch',
  inheritAttrs: false,
  props: {
    color: String,
    variant: {
      type: String,
      validator: function validator(value) {
        return ['', 'outline', 'opposite', '3d'].includes(value);
      }
    },
    size: {
      type: String,
      validator: function validator(value) {
        return ['', 'lg', 'sm'].includes(value);
      }
    },
    shape: {
      type: String,
      validator: function validator(value) {
        return ['', 'pill', 'square'].includes(value);
      }
    },
    checked: Boolean,
    labelOn: String,
    labelOff: String,
    type: {
      type: String,
      default: 'checkbox',
      validator: function validator(type) {
        return ['checkbox', 'radio'].includes(type);
      }
    }
  },
  data: function data() {
    return {
      state: undefined
    };
  },
  watch: {
    checked: {
      immediate: true,
      handler: function handler(val) {
        this.state = val;
      }
    }
  },
  computed: {
    classList: function classList() {
      var _ref;

      var variant = this.variant ? "-".concat(this.variant) : '';
      return ['c-switch form-check-label', (_ref = {}, CSwitchvue_type_script_lang_js_defineProperty(_ref, "c-switch-".concat(this.size), this.size), CSwitchvue_type_script_lang_js_defineProperty(_ref, "c-switch-".concat(this.shape), this.shape), CSwitchvue_type_script_lang_js_defineProperty(_ref, "c-switch".concat(variant, "-").concat(this.color), this.color), CSwitchvue_type_script_lang_js_defineProperty(_ref, 'c-switch-label', this.labelOn || this.labelOff), _ref)];
    }
  },
  methods: {
    onChange: function onChange(e) {
      this.state = e.target.checked;
      this.$emit('update:checked', e.target.checked, e);
    }
  }
});
// CONCATENATED MODULE: ./src/components/switch/CSwitch.vue?vue&type=script&lang=js&
 /* harmony default export */ var switch_CSwitchvue_type_script_lang_js_ = (CSwitchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/switch/CSwitch.vue





/* normalize component */

var CSwitch_component = normalizeComponent(
  switch_CSwitchvue_type_script_lang_js_,
  CSwitchvue_type_template_id_b3615da0_render,
  CSwitchvue_type_template_id_b3615da0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSwitch = (CSwitch_component.exports);
// CONCATENATED MODULE: ./src/components/switch/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/table/CDataTable.vue?vue&type=template&id=31168812&scoped=true&
var CDataTablevue_type_template_id_31168812_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.itemsPerPageSelect || _vm.tableFilter)?_c('div',{staticClass:"row my-2 mx-0"},[(_vm.tableFilter)?_c('div',{staticClass:"col-sm-6 form-inline p-0"},[_c('label',{staticClass:"mr-2"},[_vm._v(_vm._s(_vm.tableFilterData.label))]),_c('input',{staticClass:"form-control",attrs:{"type":"text","placeholder":_vm.tableFilterData.placeholder},domProps:{"value":_vm.tableFilterState},on:{"input":function($event){return _vm.tableFilterChange($event.target.value, 'input')},"change":function($event){return _vm.tableFilterChange($event.target.value, 'change')}}})]):_vm._e(),(_vm.itemsPerPageSelect)?_c('div',{staticClass:"col-sm-6 p-0",class:{ 'offset-sm-6': !_vm.tableFilter }},[_c('div',{staticClass:"form-inline justify-content-sm-end"},[_c('label',{staticClass:"mr-2"},[_vm._v(_vm._s(_vm.paginationSelect.label))]),_c('select',{staticClass:"form-control",on:{"change":_vm.paginationChange}},[_c('option',{attrs:{"value":"","selected":"","disabled":"","hidden":""}},[_vm._v(" "+_vm._s(_vm.perPageItems)+" ")]),_vm._l((_vm.paginationSelect.values),function(number,key){return _c('option',{key:key,attrs:{"val":number}},[_vm._v(" "+_vm._s(number)+" ")])})],2)])]):_vm._e()]):_vm._e(),_vm._t("over-table"),_c('div',{class:("position-relative " + (_vm.responsive ? 'table-responsive' : ''))},[_c('table',{class:_vm.tableClasses},[_c('thead',[(_vm.header)?_c('tr',[_vm._l((_vm.columnNames),function(name,index){return [_c('th',{key:index,class:[_vm.headerClass(index), _vm.sortingIconStyles],style:(_vm.headerStyles(index)),on:{"click":function($event){return _vm.changeSort(_vm.rawColumnNames[index], index)}}},[_vm._t(((_vm.rawColumnNames[index]) + "-header"),[_c('div',{staticClass:"d-inline"},[_vm._v(_vm._s(name))])]),(_vm.isSortable(index))?_vm._t("sorting-icon",[_c('CIcon',{class:_vm.iconClasses(index),attrs:{"width":"18","content":_vm.$options.icons.cilArrowTop}})],{"state":_vm.getIconState(index),"classes":_vm.iconClasses(index)}):_vm._e()],2)]})],2):_vm._e(),(_vm.columnFilter)?_c('tr',{staticClass:"table-sm"},[_vm._l((_vm.rawColumnNames),function(colName,index){return [_c('th',{key:index,class:_vm.headerClass(index)},[_vm._t(((_vm.rawColumnNames[index]) + "-filter"),[(!_vm.fields || _vm.fields[index].filter !== false)?_c('input',{staticClass:"form-control form-control-sm",domProps:{"value":_vm.columnFilterState[colName]},on:{"input":function($event){return _vm.columnFilterEvent(colName, $event.target.value, 'input')},"change":function($event){return _vm.columnFilterEvent(colName, $event.target.value, 'change')}}}):_vm._e()])],2)]})],2):_vm._e()]),_c('tbody',{staticClass:"position-relative",style:(_vm.clickableRows ? 'cursor:pointer;': null)},[_vm._l((_vm.currentItems),function(item,itemIndex){return [_c('tr',{key:itemIndex,class:item._classes,attrs:{"tabindex":_vm.clickableRows ? 0 : null},on:{"click":function($event){return _vm.rowClicked(item, itemIndex + _vm.firstItemIndex)}}},[_vm._l((_vm.rawColumnNames),function(colName,index){return [(_vm.$scopedSlots[colName])?_vm._t(colName,null,{"item":item,"index":itemIndex + _vm.firstItemIndex}):_c('td',{key:index,class:_vm.cellClass(item, colName, index)},[_vm._v(" "+_vm._s(String(item[colName]))+" ")])]})],2),(_vm.$scopedSlots.details)?_c('tr',{key:'details' + itemIndex,staticClass:"p-0",staticStyle:{"border":"none !important"}},[_c('td',{staticClass:"p-0",staticStyle:{"border":"none !important"},attrs:{"colspan":_vm.colspan}},[_vm._t("details",null,{"item":item,"index":itemIndex + _vm.firstItemIndex})],2)]):_vm._e()]}),(!_vm.currentItems.length)?_c('tr',[_c('td',{attrs:{"colspan":_vm.colspan}},[_vm._t("no-items-view",[_c('div',{staticClass:"text-center my-5"},[_c('h2',[_vm._v(" "+_vm._s(_vm.passedItems.length ? 'No filtering results ' : 'No items')+" "),_c('CIcon',{staticClass:"text-danger mb-2",attrs:{"width":"30","content":_vm.$options.icons.cilBan}})],1)])])],2)]):_vm._e()],2),(_vm.footer && _vm.currentItems.length > 0)?_c('tfoot',[_c('tr',[_vm._l((_vm.columnNames),function(name,index){return [_c('th',{key:index,class:[_vm.headerClass(index), _vm.sortingIconStyles],style:(_vm.headerStyles(index)),on:{"click":function($event){return _vm.changeSort(_vm.rawColumnNames[index], index)}}},[_vm._t(((_vm.rawColumnNames[index]) + "-header"),[_c('div',{staticClass:"d-inline"},[_vm._v(_vm._s(name))])]),(_vm.isSortable(index))?_vm._t("sorting-icon",[_c('CIcon',{class:_vm.iconClasses(index),attrs:{"width":"18","content":_vm.$options.icons.cilArrowTop}})],{"state":_vm.getIconState(index)}):_vm._e()],2)]})],2)]):_vm._e(),_vm._t("caption")],2),(_vm.loading)?_vm._t("loading",[_c('CElementCover',{attrs:{"boundaries":[
          { sides: ['top'], query: 'td' },
          { sides: ['bottom'], query: 'tbody' }
        ]}})]):_vm._e()],2),_vm._t("under-table"),(_vm.pagination)?_c('CPagination',_vm._b({directives:[{name:"show",rawName:"v-show",value:(_vm.totalPages > 1),expression:"totalPages > 1"}],attrs:{"activePage":_vm.page,"pages":_vm.totalPages},on:{"update:activePage":function($event){_vm.page=$event},"update:active-page":function($event){_vm.page=$event}}},'CPagination',typeof _vm.pagination === 'object' ? _vm.pagination : null,false)):_vm._e()],2)}
var CDataTablevue_type_template_id_31168812_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/table/CDataTable.vue?vue&type=template&id=31168812&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@coreui/icons-vue/src/CIconRaw.vue?vue&type=template&id=31307231&
var CIconRawvue_type_template_id_31307231_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.src && !_vm.use)?_c('svg',{class:_vm.computedClasses,attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":_vm.viewBox,"role":"img"},domProps:{"innerHTML":_vm._s(_vm.titleCode + _vm.iconCode)}}):(_vm.src)?_c('img',{attrs:{"src":_vm.src,"role":"img"}}):(_vm.use)?_c('svg',{class:_vm.computedClasses,attrs:{"xmlns":"http://www.w3.org/2000/svg","role":"img"}},[_c('use',{attrs:{"href":_vm.use}})]):_vm._e()}
var CIconRawvue_type_template_id_31307231_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@coreui/icons-vue/src/CIconRaw.vue?vue&type=script&lang=js&
var CIconRawvue_type_script_lang_js_ = __webpack_require__("33c8");

// CONCATENATED MODULE: ./node_modules/@coreui/icons-vue/src/CIconRaw.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_CIconRawvue_type_script_lang_js_ = (CIconRawvue_type_script_lang_js_["a" /* default */]); 
// CONCATENATED MODULE: ./node_modules/@coreui/icons-vue/src/CIconRaw.vue





/* normalize component */

var CIconRaw_component = normalizeComponent(
  src_CIconRawvue_type_script_lang_js_,
  CIconRawvue_type_template_id_31307231_render,
  CIconRawvue_type_template_id_31307231_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CIconRaw = (CIconRaw_component.exports);
// CONCATENATED MODULE: ./node_modules/@coreui/icons/js/free/cil-arrow-top.js
var cilArrowTop = ["24 24", "<path d='M18.311 7.061l-6.311-6.311-6.31 6.311 1.061 1.061 4.5-4.5v19.593h1.5v-19.593l4.5 4.5 1.061-1.061z'></path>"];
// CONCATENATED MODULE: ./node_modules/@coreui/icons/js/free/cil-ban.js
var cilBan = ["24 24", "<path d='M19.955 4.045c-2.036-2.036-4.848-3.295-7.955-3.295-6.213 0-11.25 5.037-11.25 11.25 0 3.107 1.259 5.919 3.295 7.955v0c2.036 2.036 4.848 3.295 7.955 3.295 6.213 0 11.25-5.037 11.25-11.25 0-3.107-1.259-5.919-3.295-7.955v0zM12 2.25c0.003 0 0.006 0 0.009 0 2.431 0 4.653 0.894 6.356 2.37l-0.012-0.010-13.743 13.743c-1.466-1.691-2.36-3.913-2.36-6.344 0-0.003 0-0.006 0-0.009v0c0-5.376 4.374-9.75 9.75-9.75zM12 21.75c-0.002 0-0.005 0-0.008 0-2.419 0-4.632-0.885-6.332-2.349l0.013 0.011 13.739-13.739c1.453 1.687 2.338 3.9 2.338 6.319 0 0.003 0 0.006 0 0.009v-0c0 5.376-4.374 9.75-9.75 9.75z'></path>"];
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/table/CDataTable.vue?vue&type=script&lang=js&
function CDataTablevue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var CDataTablevue_type_script_lang_js_ = ({
  name: 'CDataTable',
  icons: {
    cilArrowTop: cilArrowTop,
    cilBan: cilBan
  },
  components: {
    CPagination: CPagination,
    CElementCover: CElementCover,
    CIcon: CIconRaw
  },
  props: {
    items: Array,
    fields: Array,
    itemsPerPage: {
      type: Number,
      default: 10
    },
    activePage: Number,
    pagination: [Boolean, Object],
    addTableClasses: [String, Array, Object],
    responsive: {
      type: Boolean,
      default: true
    },
    size: String,
    dark: Boolean,
    striped: Boolean,
    fixed: Boolean,
    hover: Boolean,
    border: Boolean,
    outlined: Boolean,
    itemsPerPageSelect: [Boolean, Object],
    sorter: [Boolean, Object],
    tableFilter: [Boolean, Object],
    columnFilter: [Boolean, Object],
    sorterValue: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tableFilterValue: String,
    columnFilterValue: Object,
    header: {
      type: Boolean,
      default: true
    },
    footer: Boolean,
    loading: Boolean,
    clickableRows: Boolean
  },
  data: function data() {
    return {
      tableFilterState: this.tableFilterValue,
      columnFilterState: {},
      sorterState: {
        column: null,
        asc: true
      },
      page: this.activePage || 1,
      perPageItems: this.itemsPerPage,
      passedItems: this.items || []
    };
  },
  watch: {
    itemsPerPage: function itemsPerPage(val) {
      this.perPageItems = val;
    },
    sorterValue: {
      immediate: true,
      handler: function handler(val) {
        var asc = val.asc === false ? false : true;
        this.sorterState = Object.assign({}, {
          asc: asc,
          column: val.column
        });
      }
    },
    tableFilterValue: function tableFilterValue(val) {
      this.tableFilterState = val;
    },
    columnFilterValue: {
      immediate: true,
      handler: function handler(val) {
        this.columnFilterState = Object.assign({}, val);
      }
    },
    items: function items(val, oldVal) {
      if (val && oldVal && this.objectsAreIdentical(val, oldVal)) {
        return;
      }

      this.passedItems = val || [];
    },
    totalPages: {
      immediate: true,
      handler: function handler(val) {
        this.$emit('pages-change', val);
      }
    },
    sortedItems: {
      immediate: true,
      handler: function handler(val, oldVal) {
        if (val && oldVal && this.objectsAreIdentical(val, oldVal)) {
          return;
        }

        this.$emit('filtered-items-change', val);
      }
    }
  },
  computed: {
    columnFiltered: function columnFiltered() {
      var _this = this;

      var items = this.passedItems;

      if (this.columnFilter && this.columnFilter.external) {
        return items;
      }

      Object.entries(this.columnFilterState).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        var columnFilter = String(value).toLowerCase();

        if (columnFilter && _this.rawColumnNames.includes(key)) {
          items = items.filter(function (item) {
            return String(item[key]).toLowerCase().includes(columnFilter);
          });
        }
      });
      return items;
    },
    filterableCols: function filterableCols() {
      var _this2 = this;

      return this.rawColumnNames.filter(function (name) {
        return _this2.generatedColumnNames.includes(name);
      });
    },
    tableFiltered: function tableFiltered() {
      var _this3 = this;

      var items = this.columnFiltered;

      if (!this.tableFilterState || this.tableFilter && this.tableFilter.external) {
        return items;
      }

      var filter = this.tableFilterState.toLowerCase();

      var hasFilter = function hasFilter(item) {
        return String(item).toLowerCase().includes(filter);
      };

      items = items.filter(function (item) {
        return _this3.filterableCols.filter(function (key) {
          return hasFilter(item[key]);
        }).length;
      });
      return items;
    },
    sortedItems: function sortedItems() {
      var col = this.sorterState.column;

      if (!col || !this.rawColumnNames.includes(col) || this.sorter.external) {
        return this.tableFiltered;
      } //if values in column are to be sorted by numeric value they all have to be type number


      var flip = this.sorterState.asc ? 1 : -1;
      return this.tableFiltered.slice().sort(function (item, item2) {
        var value = item[col];
        var value2 = item2[col];
        var a = typeof value === 'number' ? value : String(value).toLowerCase();
        var b = typeof value2 === 'number' ? value2 : String(value2).toLowerCase();
        return a > b ? 1 * flip : b > a ? -1 * flip : 0;
      });
    },
    firstItemIndex: function firstItemIndex() {
      return (this.computedPage - 1) * this.perPageItems || 0;
    },
    paginatedItems: function paginatedItems() {
      return this.sortedItems.slice(this.firstItemIndex, this.firstItemIndex + this.perPageItems);
    },
    currentItems: function currentItems() {
      return this.computedPage ? this.paginatedItems : this.sortedItems;
    },
    totalPages: function totalPages() {
      return Math.ceil(this.sortedItems.length / this.perPageItems) || 1;
    },
    computedPage: function computedPage() {
      return this.pagination ? this.page : this.activePage;
    },
    generatedColumnNames: function generatedColumnNames() {
      return Object.keys(this.passedItems[0] || {}).filter(function (el) {
        return el.charAt(0) !== '_';
      });
    },
    rawColumnNames: function rawColumnNames() {
      if (this.fields) {
        return this.fields.map(function (el) {
          return el.key || el;
        });
      }

      return this.generatedColumnNames;
    },
    columnNames: function columnNames() {
      var _this4 = this;

      if (this.fields) {
        return this.fields.map(function (f) {
          return f.label !== undefined ? f.label : _this4.pretifyName(f.key || f);
        });
      }

      return this.rawColumnNames.map(function (el) {
        return _this4.pretifyName(el);
      });
    },
    tableClasses: function tableClasses() {
      var _ref3;

      return ['table', this.addTableClasses, (_ref3 = {}, CDataTablevue_type_script_lang_js_defineProperty(_ref3, "table-".concat(this.size), this.size), CDataTablevue_type_script_lang_js_defineProperty(_ref3, 'table-dark', this.dark), CDataTablevue_type_script_lang_js_defineProperty(_ref3, 'table-striped', this.striped), CDataTablevue_type_script_lang_js_defineProperty(_ref3, 'b-table-fixed', this.fixed), CDataTablevue_type_script_lang_js_defineProperty(_ref3, 'table-hover', this.hover), CDataTablevue_type_script_lang_js_defineProperty(_ref3, 'table-bordered', this.border), CDataTablevue_type_script_lang_js_defineProperty(_ref3, 'border', this.outlined), _ref3)];
    },
    sortingIconStyles: function sortingIconStyles() {
      return {
        'position-relative pr-4': this.sorter
      };
    },
    colspan: function colspan() {
      return this.rawColumnNames.length;
    },
    tableFilterData: function tableFilterData() {
      return {
        label: this.tableFilter.label || 'Filter:',
        placeholder: this.tableFilter.placeholder || 'type string...'
      };
    },
    paginationSelect: function paginationSelect() {
      return {
        label: this.itemsPerPageSelect.label || 'Items per page:',
        values: this.itemsPerPageSelect.values || [5, 10, 20, 50]
      };
    }
  },
  methods: {
    changeSort: function changeSort(column, index) {
      if (!this.isSortable(index)) {
        return;
      } //if column changed or sort was descending change asc to true


      var state = this.sorterState;
      var columnRepeated = state.column === column;

      if (!this.sorter || !this.sorter.resetable) {
        state.column = column;
      } else {
        state.column = columnRepeated && state.asc === false ? null : column;
      }

      state.asc = !(columnRepeated && state.asc);
      this.$emit('update:sorter-value', this.sorterState);
    },
    columnFilterEvent: function columnFilterEvent(colName, value, type) {
      var isLazy = this.columnFilter && this.columnFilter.lazy === true;

      if (isLazy && type === 'input' || !isLazy && type === 'change') {
        return;
      }

      this.$set(this.columnFilterState, colName, value);
      this.$emit('update:column-filter-value', this.columnFilterState);
    },
    tableFilterChange: function tableFilterChange(value, type) {
      var isLazy = this.tableFilter && this.tableFilter.lazy === true;

      if (isLazy && type === 'input' || !isLazy && type === 'change') {
        return;
      }

      this.tableFilterState = value;
      this.$emit('update:table-filter-value', this.tableFilterState);
    },
    pretifyName: function pretifyName(name) {
      return name.replace(/[-_.]/g, ' ').replace(/ +/g, ' ').replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    },
    cellClass: function cellClass(item, colName, index) {
      var classes = [];

      if (item._cellClasses && item._cellClasses[colName]) {
        classes.push(item._cellClasses[colName]);
      }

      if (this.fields && this.fields[index]._classes) {
        classes.push(this.fields[index]._classes);
      }

      return classes;
    },
    isSortable: function isSortable(index) {
      return this.sorter && (!this.fields || this.fields[index].sorter !== false);
    },
    headerClass: function headerClass(index) {
      var fields = this.fields;
      return fields && fields[index]._classes ? fields[index]._classes : '';
    },
    headerStyles: function headerStyles(index) {
      var style = '';

      if (this.isSortable(index)) {
        style += "cursor:pointer;";
      }

      if (this.fields && this.fields[index] && this.fields[index]._style) {
        style += this.fields[index]._style;
      }

      return style;
    },
    rowClicked: function rowClicked(item, index) {
      this.$emit('row-clicked', item, index);
    },
    getIconState: function getIconState(index) {
      var direction = this.sorterState.asc ? 'asc' : 'desc';
      return this.rawColumnNames[index] === this.sorterState.column ? direction : 0;
    },
    iconClasses: function iconClasses(index) {
      var state = this.getIconState(index);
      return ['icon-transition position-absolute arrow-position', {
        'transparent': !state,
        'rotate-icon': state === 'desc'
      }];
    },
    paginationChange: function paginationChange(e) {
      this.$emit('pagination-change', Number(e.target.value));
      this.perPageItems = Number(e.target.value);
    },
    objectsAreIdentical: function objectsAreIdentical(obj1, obj2) {
      return obj1.length === obj2.length && JSON.stringify(obj1) === JSON.stringify(obj2);
    }
  }
});
// CONCATENATED MODULE: ./src/components/table/CDataTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var table_CDataTablevue_type_script_lang_js_ = (CDataTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/table/CDataTable.vue?vue&type=style&index=0&id=31168812&scoped=true&lang=css&
var CDataTablevue_type_style_index_0_id_31168812_scoped_true_lang_css_ = __webpack_require__("18dc");

// CONCATENATED MODULE: ./src/components/table/CDataTable.vue






/* normalize component */

var CDataTable_component = normalizeComponent(
  table_CDataTablevue_type_script_lang_js_,
  CDataTablevue_type_template_id_31168812_scoped_true_render,
  CDataTablevue_type_template_id_31168812_scoped_true_staticRenderFns,
  false,
  null,
  "31168812",
  null
  
)

/* harmony default export */ var CDataTable = (CDataTable_component.exports);
// CONCATENATED MODULE: ./src/components/table/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tabs/CTab.vue?vue&type=template&id=295b6d9a&scoped=true&
var CTabvue_type_template_id_295b6d9a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.distributed.header)?_c('li',{staticClass:"nav-item",on:{"click":_vm.navClick}},[_c('CLink',_vm._b({staticClass:"nav-link"},'CLink',_vm.navLinkProps,false),[_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2)],1):_c('transition',{attrs:{"name":_vm.tabs.fade ? 'fade' : '',"mode":"out-in"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],class:_vm.paneClasses},[_vm._t("default")],2)])}
var CTabvue_type_template_id_295b6d9a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tabs/CTab.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var CTabvue_type_script_lang_js_props = Object.assign(propsFactory(), {
  title: String
});
/* harmony default export */ var CTabvue_type_script_lang_js_ = ({
  name: 'CTab',
  inject: ['distributed', 'tabs', 'initialTab'],
  components: {
    CLink: CLink
  },
  beforeMount: function beforeMount() {
    this.index = Array.from(this.$parent.$children).indexOf(this);

    if (this.active && this.distributed.header && this.initialTab === undefined) {
      this.distributed.changeTabTo(this.index);
    }
  },
  data: function data() {
    return {
      index: null
    };
  },
  props: CTabvue_type_script_lang_js_props,
  computed: {
    navLinkProps: function navLinkProps() {
      return Object.assign({}, this._props, {
        active: this.isActive
      }, {
        title: null
      });
    },
    paneClasses: function paneClasses() {
      return [this.distributed.addClasses, 'tab-pane', {
        'active': this.isActive
      }];
    },
    isActive: function isActive() {
      return this.tabs.activeTab === this.index;
    }
  },
  methods: {
    navClick: function navClick() {
      if (!this.isActive && !this.disabled) {
        this.distributed.changeTabTo(this.index);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/tabs/CTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var tabs_CTabvue_type_script_lang_js_ = (CTabvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/tabs/CTab.vue






/* normalize component */

var CTab_component = normalizeComponent(
  tabs_CTabvue_type_script_lang_js_,
  CTabvue_type_template_id_295b6d9a_scoped_true_render,
  CTabvue_type_template_id_295b6d9a_scoped_true_staticRenderFns,
  false,
  null,
  "295b6d9a",
  null
  
)

/* harmony default export */ var CTab = (CTab_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tabs/CTabs.vue?vue&type=template&id=314e4687&
var CTabsvue_type_template_id_314e4687_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.wrapperClasses},[_c('div',{class:_vm.navWrapperClasses},[_c('CDistributor',{class:_vm.navClasses,attrs:{"tag":"ul","header":true,"changeTabTo":_vm.changeTabTo}},[_vm._t("default")],2)],1),_c('div',{class:[_vm.addTabsWrapperClasses, _vm.gridClasses.content]},[_c('CDistributor',{class:_vm.tabsClasses,attrs:{"addClasses":_vm.addTabClasses}},[_vm._t("default")],2)],1)])}
var CTabsvue_type_template_id_314e4687_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tabs/CTabs.vue?vue&type=template&id=314e4687&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tabs/CDistributor.vue?vue&type=template&id=70b0f18f&
var CDistributorvue_type_template_id_70b0f18f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component"},[_vm._t("default")],2)}
var CDistributorvue_type_template_id_70b0f18f_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tabs/CDistributor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CDistributorvue_type_script_lang_js_ = ({
  name: 'CDistributor',
  inheritAttrs: false,
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  provide: function provide() {
    return {
      distributed: this.props
    };
  },
  computed: {
    props: function props() {
      return this.$attrs;
    }
  }
});
// CONCATENATED MODULE: ./src/components/tabs/CDistributor.vue?vue&type=script&lang=js&
 /* harmony default export */ var tabs_CDistributorvue_type_script_lang_js_ = (CDistributorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/tabs/CDistributor.vue





/* normalize component */

var CDistributor_component = normalizeComponent(
  tabs_CDistributorvue_type_script_lang_js_,
  CDistributorvue_type_template_id_70b0f18f_render,
  CDistributorvue_type_template_id_70b0f18f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CDistributor = (CDistributor_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tabs/CTabs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CTabsvue_type_script_lang_js_ = ({
  name: 'CTabs',
  components: {
    CDistributor: CDistributor
  },
  provide: function provide() {
    var _this = this;

    var tabs = {};
    Object.defineProperty(tabs, 'activeTab', {
      get: function get() {
        return _this.activeTabIndex;
      }
    });
    Object.defineProperty(tabs, 'fade', {
      get: function get() {
        return _this.fade;
      }
    });
    return {
      tabs: tabs,
      initialTab: this.activeTab
    };
  },
  props: {
    fill: Boolean,
    justified: Boolean,
    variant: {
      type: String,
      default: 'tabs',
      validator: function validator(val) {
        return ['', 'tabs', 'pills'].includes(val);
      }
    },
    fade: {
      type: Boolean,
      default: true
    },
    vertical: [Boolean, Object],
    addNavWrapperClasses: [String, Array, Object],
    addNavClasses: [String, Array, Object],
    addTabsWrapperClasses: [String, Array, Object],
    addTabsClasses: [String, Array, Object],
    addTabClasses: [String, Array, Object],
    activeTab: Number
  },
  data: function data() {
    return {
      activeTabIndex: this.activeTab || 0
    };
  },
  watch: {
    activeTab: function activeTab(val) {
      this.activeTabIndex = val || 0;
    }
  },
  computed: {
    wrapperClasses: function wrapperClasses() {
      return {
        'row no-gutters': this.vertical
      };
    },
    navWrapperClasses: function navWrapperClasses() {
      return [this.addNavWrapperClasses, this.gridClasses.navs];
    },
    navClasses: function navClasses() {
      return [this.addNavClasses, {
        'nav': true,
        'nav-tabs': this.variant === 'tabs',
        'nav-pills': this.variant === 'pills',
        'flex-column': this.vertical,
        'nav-fill': this.fill,
        'nav-justified': this.justified,
        'h-100': this.vertical
      }];
    },
    tabsClasses: function tabsClasses() {
      return [this.addTabsClasses, 'tab-content', {
        'pl-3 p-0': this.vertical
      }];
    },
    gridClasses: function gridClasses() {
      if (this.vertical === true) {
        return {
          navs: 'col-sm-4',
          content: 'col-sm-8'
        };
      } else {
        return this.vertical || {};
      }
    }
  },
  methods: {
    changeTabTo: function changeTabTo(tab) {
      this.activeTabIndex = tab;
      this.$emit('update:activeTab', tab);
    }
  }
});
// CONCATENATED MODULE: ./src/components/tabs/CTabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var tabs_CTabsvue_type_script_lang_js_ = (CTabsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/tabs/CTabs.vue





/* normalize component */

var CTabs_component = normalizeComponent(
  tabs_CTabsvue_type_script_lang_js_,
  CTabsvue_type_template_id_314e4687_render,
  CTabsvue_type_template_id_314e4687_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CTabs = (CTabs_component.exports);
// CONCATENATED MODULE: ./src/components/tabs/index.js



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CFooter.vue?vue&type=template&id=2ec66e76&
var CFootervue_type_template_id_2ec66e76_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",class:_vm.classList},[_vm._t("default")],2)}
var CFootervue_type_template_id_2ec66e76_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CFootervue_type_script_lang_js_ = ({
  name: 'CFooter',
  props: {
    tag: {
      type: String,
      default: 'footer'
    },
    fixed: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classList: function classList() {
      return ['c-footer', {
        'c-footer-fixed': this.fixed
      }];
    }
  }
});
// CONCATENATED MODULE: ./src/components/template/CFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var template_CFootervue_type_script_lang_js_ = (CFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/template/CFooter.vue





/* normalize component */

var CFooter_component = normalizeComponent(
  template_CFootervue_type_script_lang_js_,
  CFootervue_type_template_id_2ec66e76_render,
  CFootervue_type_template_id_2ec66e76_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CFooter = (CFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CHeader.vue?vue&type=template&id=d560eb9c&
var CHeadervue_type_template_id_d560eb9c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",class:_vm.classList},[_vm._t("default")],2)}
var CHeadervue_type_template_id_d560eb9c_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CHeadervue_type_script_lang_js_ = ({
  name: 'CHeader',
  props: {
    tag: {
      type: String,
      default: 'header'
    },
    colorScheme: {
      type: String,
      default: 'light'
    },
    fixed: {
      type: Boolean,
      default: true
    },
    withSubheader: Boolean
  },
  computed: {
    classList: function classList() {
      return ['c-header', "c-header-".concat(this.colorScheme), {
        'c-header-fixed': this.fixed,
        'c-header-with-subheader': this.withSubheader
      }];
    }
  }
});
// CONCATENATED MODULE: ./src/components/template/CHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var template_CHeadervue_type_script_lang_js_ = (CHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/template/CHeader.vue





/* normalize component */

var CHeader_component = normalizeComponent(
  template_CHeadervue_type_script_lang_js_,
  CHeadervue_type_template_id_d560eb9c_render,
  CHeadervue_type_template_id_d560eb9c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CHeader = (CHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CHeaderBrand.vue?vue&type=script&lang=js&


var CHeaderBrandvue_type_script_lang_js_props = Object.assign(propsFactory(), {
  tag: {
    type: String,
    default: 'div'
  }
});
/* harmony default export */ var CHeaderBrandvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CHeaderBrand',
  props: CHeaderBrandvue_type_script_lang_js_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var isLink = props.href || props.to;
    return h(isLink ? CLink : props.tag, a(data, {
      staticClass: 'c-header-brand',
      props: isLink ? props : {}
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/template/CHeaderBrand.vue?vue&type=script&lang=js&
 /* harmony default export */ var template_CHeaderBrandvue_type_script_lang_js_ = (CHeaderBrandvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/template/CHeaderBrand.vue
var CHeaderBrand_render, CHeaderBrand_staticRenderFns




/* normalize component */

var CHeaderBrand_component = normalizeComponent(
  template_CHeaderBrandvue_type_script_lang_js_,
  CHeaderBrand_render,
  CHeaderBrand_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CHeaderBrand = (CHeaderBrand_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CHeaderNav.vue?vue&type=template&id=5fc36f60&
var CHeaderNavvue_type_template_id_5fc36f60_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"c-header-nav"},[_vm._t("default")],2)}
var CHeaderNavvue_type_template_id_5fc36f60_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CHeaderNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CHeaderNavvue_type_script_lang_js_ = ({
  name: 'CHeaderNav'
});
// CONCATENATED MODULE: ./src/components/template/CHeaderNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var template_CHeaderNavvue_type_script_lang_js_ = (CHeaderNavvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/template/CHeaderNav.vue





/* normalize component */

var CHeaderNav_component = normalizeComponent(
  template_CHeaderNavvue_type_script_lang_js_,
  CHeaderNavvue_type_template_id_5fc36f60_render,
  CHeaderNavvue_type_template_id_5fc36f60_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CHeaderNav = (CHeaderNav_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CHeaderNavItem.vue?vue&type=template&id=18913d68&
var CHeaderNavItemvue_type_template_id_18913d68_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"c-header-nav-item"},[_vm._t("default")],2)}
var CHeaderNavItemvue_type_template_id_18913d68_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CHeaderNavItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CHeaderNavItemvue_type_script_lang_js_ = ({
  name: 'CHeaderNavItem'
});
// CONCATENATED MODULE: ./src/components/template/CHeaderNavItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var template_CHeaderNavItemvue_type_script_lang_js_ = (CHeaderNavItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/template/CHeaderNavItem.vue





/* normalize component */

var CHeaderNavItem_component = normalizeComponent(
  template_CHeaderNavItemvue_type_script_lang_js_,
  CHeaderNavItemvue_type_template_id_18913d68_render,
  CHeaderNavItemvue_type_template_id_18913d68_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CHeaderNavItem = (CHeaderNavItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CHeaderNavLink.vue?vue&type=template&id=1f542e7a&
var CHeaderNavLinkvue_type_template_id_1f542e7a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CLink',_vm._b({staticClass:"c-header-nav-link"},'CLink',_vm.$props,false),[_vm._t("default")],2)}
var CHeaderNavLinkvue_type_template_id_1f542e7a_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CHeaderNavLink.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CHeaderNavLinkvue_type_script_lang_js_ = ({
  name: 'CHeaderNavLink',
  components: {
    CLink: CLink
  },
  props: CLinkvue_type_script_lang_js_props
});
// CONCATENATED MODULE: ./src/components/template/CHeaderNavLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var template_CHeaderNavLinkvue_type_script_lang_js_ = (CHeaderNavLinkvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/template/CHeaderNavLink.vue





/* normalize component */

var CHeaderNavLink_component = normalizeComponent(
  template_CHeaderNavLinkvue_type_script_lang_js_,
  CHeaderNavLinkvue_type_template_id_1f542e7a_render,
  CHeaderNavLinkvue_type_template_id_1f542e7a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CHeaderNavLink = (CHeaderNavLink_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSubheader.vue?vue&type=template&id=6d918d32&
var CSubheadervue_type_template_id_6d918d32_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"c-subheader"},[_vm._t("default")],2)}
var CSubheadervue_type_template_id_6d918d32_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSubheader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CSubheadervue_type_script_lang_js_ = ({
  name: 'CSubheader',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  }
});
// CONCATENATED MODULE: ./src/components/template/CSubheader.vue?vue&type=script&lang=js&
 /* harmony default export */ var template_CSubheadervue_type_script_lang_js_ = (CSubheadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/template/CSubheader.vue





/* normalize component */

var CSubheader_component = normalizeComponent(
  template_CSubheadervue_type_script_lang_js_,
  CSubheadervue_type_template_id_6d918d32_render,
  CSubheadervue_type_template_id_6d918d32_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSubheader = (CSubheader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebar.vue?vue&type=template&id=0c05ab6c&
var CSidebarvue_type_template_id_0c05ab6c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.sidebarClasses,on:{"click":_vm.sidebarClick}},[_vm._t("default")],2)}
var CSidebarvue_type_template_id_0c05ab6c_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebar.vue?vue&type=script&lang=js&
function CSidebarvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
/* harmony default export */ var CSidebarvue_type_script_lang_js_ = ({
  name: 'CSidebar',
  props: {
    fixed: {
      type: Boolean,
      default: true
    },
    unfoldable: Boolean,
    overlaid: Boolean,
    breakpoint: {
      type: [String, Boolean],
      default: 'lg',
      validator: function validator(val) {
        return [false, '', 'sm', 'md', 'lg', 'xl'].includes(val);
      }
    },
    minimize: Boolean,
    show: {
      type: [Boolean, String],
      default: 'responsive'
    },
    size: {
      type: String,
      validator: function validator(val) {
        return ['', 'sm', 'lg', 'xl'].includes(val);
      }
    },
    hideOnMobileClick: {
      type: Boolean,
      default: true
    },
    aside: Boolean,
    colorScheme: {
      type: String,
      default: 'dark'
    },
    dropdownMode: {
      type: String,
      default: 'openActive',
      validator: function validator(mode) {
        return ['', 'openActive', 'close', 'closeInactive', 'noAction'].includes(mode);
      }
    }
  },
  provide: function provide() {
    var _this = this;

    var state = {};
    Object.defineProperty(state, 'minimize', {
      get: function get() {
        return _this.minimize && !_this.unfoldable;
      }
    });
    return {
      state: state,
      dropdownMode: this.dropdownMode
    };
  },
  data: function data() {
    return {
      open: this.show
    };
  },
  watch: {
    show: function show(val) {
      this.open = val;
    },
    open: function open(val) {
      val === true ? this.createBackdrop() : this.removeBackdrop();
    }
  },
  mounted: function mounted() {
    if (this.open === true) {
      this.createBackdrop();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.removeBackdrop();
  },
  computed: {
    sidebarClasses: function sidebarClasses() {
      var _ref;

      var haveResponsiveClass = this.breakpoint && this.open === 'responsive';
      return ['c-sidebar', "c-sidebar-".concat(this.colorScheme), (_ref = {
        'c-sidebar-show': this.open === true
      }, CSidebarvue_type_script_lang_js_defineProperty(_ref, "c-sidebar-".concat(this.breakpoint, "-show"), haveResponsiveClass), CSidebarvue_type_script_lang_js_defineProperty(_ref, 'c-sidebar-fixed', this.fixed && !this.overlaid), CSidebarvue_type_script_lang_js_defineProperty(_ref, 'c-sidebar-right', this.aside), CSidebarvue_type_script_lang_js_defineProperty(_ref, 'c-sidebar-minimized', this.minimize && !this.unfoldable), CSidebarvue_type_script_lang_js_defineProperty(_ref, 'c-sidebar-unfoldable', this.minimize && this.unfoldable), CSidebarvue_type_script_lang_js_defineProperty(_ref, 'c-sidebar-overlaid', this.overlaid), CSidebarvue_type_script_lang_js_defineProperty(_ref, "c-sidebar-".concat(this.size), this.size), _ref)];
    }
  },
  methods: {
    sidebarClick: function sidebarClick(e) {
      if (this.hideOnMobileClick && this.isOnMobile()) {
        e.target.closest('a.c-sidebar-nav-link') ? this.closeSidebar() : null;
      }
    },
    closeSidebar: function closeSidebar() {
      this.open = this.overlaid ? false : 'responsive';
      this.$emit('update:show', this.open);
    },
    isOnMobile: function isOnMobile() {
      return Boolean(getComputedStyle(this.$el).getPropertyValue('--is-mobile'));
    },
    createBackdrop: function createBackdrop() {
      var backdrop = document.createElement('div');
      backdrop.className = 'c-sidebar-backdrop c-show';
      backdrop.id = this._uid + 'backdrop';
      document.body.appendChild(backdrop);
      backdrop.addEventListener('click', this.closeSidebar);
    },
    removeBackdrop: function removeBackdrop() {
      var backdrop = document.getElementById(this._uid + 'backdrop');

      if (backdrop) {
        backdrop.removeEventListener('click', this.closeSidebar);
        document.body.removeChild(backdrop);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/template/CSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var template_CSidebarvue_type_script_lang_js_ = (CSidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/template/CSidebar.vue





/* normalize component */

var CSidebar_component = normalizeComponent(
  template_CSidebarvue_type_script_lang_js_,
  CSidebarvue_type_template_id_0c05ab6c_render,
  CSidebarvue_type_template_id_0c05ab6c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebar = (CSidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebarBrand.vue?vue&type=script&lang=js&
//
//


var CSidebarBrandvue_type_script_lang_js_props = Object.assign(propsFactory(), {
  tag: {
    type: String,
    default: 'div'
  }
});
/* harmony default export */ var CSidebarBrandvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CSidebarBrand',
  props: CSidebarBrandvue_type_script_lang_js_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var isLink = props.href || props.to;
    return h(isLink ? CLink : props.tag, a(data, {
      staticClass: 'c-sidebar-brand',
      props: isLink ? props : {}
    }), children);
  }
});
// CONCATENATED MODULE: ./src/components/template/CSidebarBrand.vue?vue&type=script&lang=js&
 /* harmony default export */ var template_CSidebarBrandvue_type_script_lang_js_ = (CSidebarBrandvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/template/CSidebarBrand.vue
var CSidebarBrand_render, CSidebarBrand_staticRenderFns




/* normalize component */

var CSidebarBrand_component = normalizeComponent(
  template_CSidebarBrandvue_type_script_lang_js_,
  CSidebarBrand_render,
  CSidebarBrand_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarBrand = (CSidebarBrand_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebarClose.vue?vue&type=template&id=7fce8dcf&
var CSidebarClosevue_type_template_id_7fce8dcf_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CButtonClose',{attrs:{"buttonClasses":"c-sidebar-close"}},[_c('svg',{staticClass:"c-icon",attrs:{"width":"24","height":"24","viewBox":"0 0 24 24"}},[_c('title',[_vm._v("x")]),_c('path',{attrs:{"d":"M20.030 5.030l-1.061-1.061-6.97 6.97-6.97-6.97-1.061 1.061 6.97 6.97-6.97 6.97 1.061 1.061 6.97-6.97 6.97 6.97 1.061-1.061-6.97-6.97 6.97-6.97z"}})])])}
var CSidebarClosevue_type_template_id_7fce8dcf_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebarClose.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CSidebarClosevue_type_script_lang_js_ = ({
  name: 'CSidebarClose',
  components: {
    CButtonClose: CButtonClose
  }
});
// CONCATENATED MODULE: ./src/components/template/CSidebarClose.vue?vue&type=script&lang=js&
 /* harmony default export */ var template_CSidebarClosevue_type_script_lang_js_ = (CSidebarClosevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/template/CSidebarClose.vue





/* normalize component */

var CSidebarClose_component = normalizeComponent(
  template_CSidebarClosevue_type_script_lang_js_,
  CSidebarClosevue_type_template_id_7fce8dcf_render,
  CSidebarClosevue_type_template_id_7fce8dcf_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarClose = (CSidebarClose_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebarFooter.vue?vue&type=template&id=448e4ba6&
var CSidebarFootervue_type_template_id_448e4ba6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-sidebar-footer"},[_vm._t("default")],2)}
var CSidebarFootervue_type_template_id_448e4ba6_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebarFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CSidebarFootervue_type_script_lang_js_ = ({
  name: 'CSidebarFooter'
});
// CONCATENATED MODULE: ./src/components/template/CSidebarFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var template_CSidebarFootervue_type_script_lang_js_ = (CSidebarFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/template/CSidebarFooter.vue





/* normalize component */

var CSidebarFooter_component = normalizeComponent(
  template_CSidebarFootervue_type_script_lang_js_,
  CSidebarFootervue_type_template_id_448e4ba6_render,
  CSidebarFootervue_type_template_id_448e4ba6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarFooter = (CSidebarFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebarForm.vue?vue&type=template&id=1acfb844&
var CSidebarFormvue_type_template_id_1acfb844_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-sidebar-form"},[_vm._t("default")],2)}
var CSidebarFormvue_type_template_id_1acfb844_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebarForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CSidebarFormvue_type_script_lang_js_ = ({
  name: 'CSidebarForm'
});
// CONCATENATED MODULE: ./src/components/template/CSidebarForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var template_CSidebarFormvue_type_script_lang_js_ = (CSidebarFormvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/template/CSidebarForm.vue





/* normalize component */

var CSidebarForm_component = normalizeComponent(
  template_CSidebarFormvue_type_script_lang_js_,
  CSidebarFormvue_type_template_id_1acfb844_render,
  CSidebarFormvue_type_template_id_1acfb844_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarForm = (CSidebarForm_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebarHeader.vue?vue&type=template&id=51b6153b&
var CSidebarHeadervue_type_template_id_51b6153b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-sidebar-header"},[_vm._t("default")],2)}
var CSidebarHeadervue_type_template_id_51b6153b_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebarHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CSidebarHeadervue_type_script_lang_js_ = ({
  name: 'CSidebarHeader'
});
// CONCATENATED MODULE: ./src/components/template/CSidebarHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var template_CSidebarHeadervue_type_script_lang_js_ = (CSidebarHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/template/CSidebarHeader.vue





/* normalize component */

var CSidebarHeader_component = normalizeComponent(
  template_CSidebarHeadervue_type_script_lang_js_,
  CSidebarHeadervue_type_template_id_51b6153b_render,
  CSidebarHeadervue_type_template_id_51b6153b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarHeader = (CSidebarHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebarMinimizer.vue?vue&type=template&id=891a05e4&
var CSidebarMinimizervue_type_template_id_891a05e4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"c-sidebar-minimizer",attrs:{"type":"button"}})}
var CSidebarMinimizervue_type_template_id_891a05e4_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebarMinimizer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var CSidebarMinimizervue_type_script_lang_js_ = ({
  name: 'CSidebarMinimizer'
});
// CONCATENATED MODULE: ./src/components/template/CSidebarMinimizer.vue?vue&type=script&lang=js&
 /* harmony default export */ var template_CSidebarMinimizervue_type_script_lang_js_ = (CSidebarMinimizervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/template/CSidebarMinimizer.vue





/* normalize component */

var CSidebarMinimizer_component = normalizeComponent(
  template_CSidebarMinimizervue_type_script_lang_js_,
  CSidebarMinimizervue_type_template_id_891a05e4_render,
  CSidebarMinimizervue_type_template_id_891a05e4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarMinimizer = (CSidebarMinimizer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebarNav.vue?vue&type=template&id=4e4153de&
var CSidebarNavvue_type_template_id_4e4153de_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CScrollbar',{staticClass:"c-sidebar-nav h-100",attrs:{"settings":_vm.psSettings,"switcher":!_vm.state.minimize,"tag":"ul"}},[_vm._t("default")],2)}
var CSidebarNavvue_type_template_id_4e4153de_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebarNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CSidebarNavvue_type_script_lang_js_ = ({
  name: 'CSidebarNav',
  components: {
    CScrollbar: CScrollbar
  },
  inject: {
    state: {
      default: false
    }
  },
  computed: {
    psSettings: function psSettings() {
      // ToDo: find better rtl fix
      return {
        maxScrollbarLength: 200,
        minScrollbarLength: 40,
        suppressScrollX: getComputedStyle(document.querySelector('html')).direction !== 'rtl',
        wheelPropagation: false
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/template/CSidebarNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var template_CSidebarNavvue_type_script_lang_js_ = (CSidebarNavvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/template/CSidebarNav.vue





/* normalize component */

var CSidebarNav_component = normalizeComponent(
  template_CSidebarNavvue_type_script_lang_js_,
  CSidebarNavvue_type_template_id_4e4153de_render,
  CSidebarNavvue_type_template_id_4e4153de_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarNav = (CSidebarNav_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebarNavDivider.vue?vue&type=template&id=b1a40e70&
var CSidebarNavDividervue_type_template_id_b1a40e70_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"c-sidebar-nav-divider"})}
var CSidebarNavDividervue_type_template_id_b1a40e70_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebarNavDivider.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var CSidebarNavDividervue_type_script_lang_js_ = ({
  name: 'CSidebarNavDivider'
});
// CONCATENATED MODULE: ./src/components/template/CSidebarNavDivider.vue?vue&type=script&lang=js&
 /* harmony default export */ var template_CSidebarNavDividervue_type_script_lang_js_ = (CSidebarNavDividervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/template/CSidebarNavDivider.vue





/* normalize component */

var CSidebarNavDivider_component = normalizeComponent(
  template_CSidebarNavDividervue_type_script_lang_js_,
  CSidebarNavDividervue_type_template_id_b1a40e70_render,
  CSidebarNavDividervue_type_template_id_b1a40e70_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarNavDivider = (CSidebarNavDivider_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebarNavDropdown.vue?vue&type=template&id=0b8052a5&
var CSidebarNavDropdownvue_type_template_id_0b8052a5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:_vm.dropdownClasses},[_c('a',{staticClass:"c-sidebar-nav-dropdown-toggle",on:{"click":_vm.handleClick}},[(_vm.icon)?_c('CIcon',_vm._b({},'CIcon',_vm.computedIcon,false)):_vm._e(),(_vm.fontIcon)?_c('i',{class:['c-sidebar-nav-icon', _vm.fontIcon]}):_vm._e(),_vm._v(" "+_vm._s(_vm.name)+" ")],1),_c('ul',{staticClass:"c-sidebar-nav-dropdown-items",on:{"click":_vm.itemClicked}},[_vm._t("default",[_vm._l((_vm.items),function(item,key){return [_c('CSidebarNavItem',_vm._b({key:key},'CSidebarNavItem',item,false))]})])],2)])}
var CSidebarNavDropdownvue_type_template_id_0b8052a5_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebarNavItem.vue?vue&type=template&id=a399bf52&
var CSidebarNavItemvue_type_template_id_a399bf52_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"c-sidebar-nav-item"},[_vm._t("default",[_c('CLink',_vm._b({class:_vm.linkClasses},'CLink',_vm.computedLinkProps,false),[(_vm.icon)?_c('CIcon',_vm._b({},'CIcon',_vm.computedIcon,false)):_vm._e(),(_vm.fontIcon)?_c('i',{class:['c-sidebar-nav-icon', _vm.fontIcon]}):_vm._e(),_vm._v(" "+_vm._s(_vm.name)+" "),(_vm.badge)?_c('CBadge',_vm._b({},'CBadge',Object.assign({}, _vm.badge, { text: null }),false),[_vm._v(" "+_vm._s(_vm.badge.text)+" ")]):_vm._e()],1)])],2)}
var CSidebarNavItemvue_type_template_id_a399bf52_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebarNavItem.vue?vue&type=script&lang=js&
function CSidebarNavItemvue_type_script_lang_js_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CSidebarNavItemvue_type_script_lang_js_typeof = function _typeof(obj) { return typeof obj; }; } else { CSidebarNavItemvue_type_script_lang_js_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CSidebarNavItemvue_type_script_lang_js_typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var CSidebarNavItemvue_type_script_lang_js_props = Object.assign({}, CLinkvue_type_script_lang_js_props, {
  exact: {
    type: Boolean,
    default: true
  },
  activeClass: {
    type: String,
    default: 'c-active'
  }
}, {
  name: String,
  icon: [String, Object],
  fontIcon: String,
  badge: Object,
  addLinkClasses: [String, Array, Object],
  label: Boolean
});
/* harmony default export */ var CSidebarNavItemvue_type_script_lang_js_ = ({
  name: 'CSidebarNavItem',
  components: {
    CLink: CLink,
    CBadge: CBadge,
    CIcon: CIconRaw
  },
  props: CSidebarNavItemvue_type_script_lang_js_props,
  computed: {
    computedLinkProps: function computedLinkProps() {
      var _this = this;

      return Object.keys(CLinkvue_type_script_lang_js_props).reduce(function (props, key) {
        props[key] = _this[key];
        return props;
      }, {});
    },
    linkClasses: function linkClasses() {
      return [this.label ? 'c-sidebar-nav-label' : 'c-sidebar-nav-link', this.addLinkClasses];
    },
    computedIcon: function computedIcon() {
      if (CSidebarNavItemvue_type_script_lang_js_typeof(this.icon) === 'object') {
        return Object.assign({
          customClasses: 'c-sidebar-nav-icon'
        }, this.icon);
      } else {
        return {
          customClasses: 'c-sidebar-nav-icon',
          name: this.icon
        };
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/template/CSidebarNavItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var template_CSidebarNavItemvue_type_script_lang_js_ = (CSidebarNavItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/template/CSidebarNavItem.vue





/* normalize component */

var CSidebarNavItem_component = normalizeComponent(
  template_CSidebarNavItemvue_type_script_lang_js_,
  CSidebarNavItemvue_type_template_id_a399bf52_render,
  CSidebarNavItemvue_type_template_id_a399bf52_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarNavItem = (CSidebarNavItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebarNavDropdown.vue?vue&type=script&lang=js&
function CSidebarNavDropdownvue_type_script_lang_js_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CSidebarNavDropdownvue_type_script_lang_js_typeof = function _typeof(obj) { return typeof obj; }; } else { CSidebarNavDropdownvue_type_script_lang_js_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CSidebarNavDropdownvue_type_script_lang_js_typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var CSidebarNavDropdownvue_type_script_lang_js_ = ({
  name: 'CSidebarNavDropdown',
  components: {
    CIcon: CIconRaw,
    CSidebarNavItem: CSidebarNavItem
  },
  props: {
    name: String,
    route: {
      type: String,
      validator: function validator(val) {
        return val.length > 0;
      }
    },
    icon: [String, Object],
    fontIcon: String,
    show: Boolean,
    items: Array
  },
  data: function data() {
    return {
      open: this.show
    };
  },
  inject: {
    dropdownMode: {
      default: 'openActive'
    }
  },
  watch: {
    show: function show(val) {
      this.open = val;
    },
    $route: {
      immediate: true,
      handler: function handler(route) {
        var mode = this.dropdownMode;

        if (mode === 'close') {
          this.open = false;
        } else if (mode === 'closeInactive' && this.route) {
          this.open = route.fullPath.includes(this.route);
        } else if (mode === 'openActive' && !this.open && this.route) {
          this.open = route.fullPath.includes(this.route);
        } // else if (mode === 'noAction') {
        //   return
        // }

      }
    }
  },
  computed: {
    dropdownClasses: function dropdownClasses() {
      return ['c-sidebar-nav-dropdown', {
        'c-show': this.open
      }];
    },
    computedIcon: function computedIcon() {
      if (CSidebarNavDropdownvue_type_script_lang_js_typeof(this.icon) === 'object') {
        return Object.assign({
          customClasses: 'c-sidebar-nav-icon'
        }, this.icon);
      } else {
        return {
          customClasses: 'c-sidebar-nav-icon',
          name: this.icon
        };
      }
    }
  },
  methods: {
    handleClick: function handleClick(e) {
      e.preventDefault();
      this.open = !this.open;
      this.$emit('update:show', this.open);
    },
    itemClicked: function itemClicked(e) {
      this.$emit('item-clicked', e);
    }
  }
});
// CONCATENATED MODULE: ./src/components/template/CSidebarNavDropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var template_CSidebarNavDropdownvue_type_script_lang_js_ = (CSidebarNavDropdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/template/CSidebarNavDropdown.vue





/* normalize component */

var CSidebarNavDropdown_component = normalizeComponent(
  template_CSidebarNavDropdownvue_type_script_lang_js_,
  CSidebarNavDropdownvue_type_template_id_0b8052a5_render,
  CSidebarNavDropdownvue_type_template_id_0b8052a5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarNavDropdown = (CSidebarNavDropdown_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebarNavTitle.vue?vue&type=template&id=5331e5b0&
var CSidebarNavTitlevue_type_template_id_5331e5b0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"c-sidebar-nav-title"},[_vm._t("default")],2)}
var CSidebarNavTitlevue_type_template_id_5331e5b0_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CSidebarNavTitle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CSidebarNavTitlevue_type_script_lang_js_ = ({
  name: 'CSidebarNavTitle'
});
// CONCATENATED MODULE: ./src/components/template/CSidebarNavTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var template_CSidebarNavTitlevue_type_script_lang_js_ = (CSidebarNavTitlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/template/CSidebarNavTitle.vue





/* normalize component */

var CSidebarNavTitle_component = normalizeComponent(
  template_CSidebarNavTitlevue_type_script_lang_js_,
  CSidebarNavTitlevue_type_template_id_5331e5b0_render,
  CSidebarNavTitlevue_type_template_id_5331e5b0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarNavTitle = (CSidebarNavTitle_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CWrapper.vue?vue&type=template&id=13351784&
var CWrappervue_type_template_id_13351784_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",class:_vm.classList},[_vm._t("default")],2)}
var CWrappervue_type_template_id_13351784_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/template/CWrapper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CWrappervue_type_script_lang_js_ = ({
  name: 'CWrapper',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    fluid: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList: function classList() {
      return ['c-wrapper', {
        'c-wrapper-fluid': this.fluid
      }];
    }
  }
});
// CONCATENATED MODULE: ./src/components/template/CWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var template_CWrappervue_type_script_lang_js_ = (CWrappervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/template/CWrapper.vue





/* normalize component */

var CWrapper_component = normalizeComponent(
  template_CWrappervue_type_script_lang_js_,
  CWrappervue_type_template_id_13351784_render,
  CWrappervue_type_template_id_13351784_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CWrapper = (CWrapper_component.exports);
// CONCATENATED MODULE: ./src/components/template/index.js





















// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/toast/CToast.vue?vue&type=template&id=7208152f&scoped=true&
var CToastvue_type_template_id_7208152f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.props.fade ? 'fade' : null,"appear":true}},[(_vm.isShowed)?_c('div',{staticClass:"toast",attrs:{"role":"alert","aria-live":"assertive","aria-atomic":"true"}},[(_vm.header !== undefined || _vm.$slots.header)?_c('div',{staticClass:"toast-header"},[_vm._t("header",[_c('strong',{staticClass:"mr-auto"},[_vm._v(_vm._s(_vm.header))])]),(_vm.props.closeButton)?_c('CButtonClose',{staticClass:"ml-2 mb-1",on:{"click":function($event){return _vm.close()}}}):_vm._e()],2):_vm._e(),_c('div',{staticClass:"toast-body"},[_vm._t("default")],2)]):_vm._e()])}
var CToastvue_type_template_id_7208152f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/toast/CToast.vue?vue&type=template&id=7208152f&scoped=true&

// CONCATENATED MODULE: ./src/components/toast/toast-props.js
var toast_props_props = {
  autohide: {
    type: [Number, Boolean],
    validator: function validator(val) {
      return typeof val === 'number' || val === false;
    }
  },
  closeButton: {
    type: Boolean,
    default: true
  },
  fade: {
    type: Boolean,
    default: true
  }
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/toast/CToast.vue?vue&type=script&lang=js&
function CToastvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CToastvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CToastvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { CToastvue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CToastvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CToastvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var CToastvue_type_script_lang_js_ = ({
  name: 'CToast',
  components: {
    CButtonClose: CButtonClose
  },
  props: CToastvue_type_script_lang_js_objectSpread({}, toast_props_props, {
    show: Boolean,
    header: String
  }),
  inject: {
    toaster: {
      default: false
    }
  },
  data: function data() {
    return {
      isShowed: this.show,
      hideTimeout: null,
      closeTimeout: null
    };
  },
  watch: {
    show: {
      immediate: true,
      handler: function handler(val) {
        val ? this.display() : this.close();
      }
    }
  },
  computed: {
    directlyDeclaredProps: function directlyDeclaredProps() {
      return Object.keys(this.$options.propsData);
    },
    injectedProps: function injectedProps() {
      return this.toaster && this.toaster.props ? this.toaster.props : {};
    },
    props: function props() {
      var _this = this;

      return Object.keys(toast_props_props).reduce(function (computedProps, key) {
        var propIsDirectlyDeclared = _this.directlyDeclaredProps.includes(key);

        var parentPropExists = _this.injectedProps[key] !== undefined;
        var propIsInherited = parentPropExists && !propIsDirectlyDeclared;
        computedProps[key] = propIsInherited ? _this.injectedProps[key] : _this[key];
        return computedProps;
      }, {});
    }
  },
  methods: {
    display: function display() {
      var _this2 = this;

      this.isShowed = true;
      this.$nextTick(function () {
        if (_this2.props.autohide) {
          _this2.setAutohide();
        }
      });
    },
    close: function close() {
      this.isShowed = false;
      this.$emit('update:show', false);
      this.$el.removeEventListener('mouseover', this.onHover);
      this.$el.removeEventListener('mouseover', this.restoreHiddingToast);
      this.$el.removeEventListener('mouseout', this.onHoverOut);
    },
    setHiddingMode: function setHiddingMode() {
      var _this3 = this;

      this.isShowed = false;
      this.$el.removeEventListener('mouseover', this.onHover);
      this.closeTimeout = setTimeout(function () {
        return _this3.close();
      }, 1500);
      this.$el.addEventListener('mouseover', this.restoreHiddingToast);
    },
    restoreHiddingToast: function restoreHiddingToast() {
      clearTimeout(this.closeTimeout);
      this.display();
    },
    onHover: function onHover() {
      this.$el.removeEventListener('mouseover', this.onHover);
      clearTimeout(this.hideTimeout);
      this.$el.addEventListener('mouseout', this.onHoverOut);
    },
    onHoverOut: function onHoverOut() {
      this.$el.removeEventListener('mouseout', this.onHoverOut);
      this.setAutohide();
    },
    setAutohide: function setAutohide() {
      var _this4 = this;

      this.hideTimeout = setTimeout(function () {
        _this4.setHiddingMode();
      }, this.props.autohide);
      this.$el.addEventListener('mouseover', this.onHover);
    }
  }
});
// CONCATENATED MODULE: ./src/components/toast/CToast.vue?vue&type=script&lang=js&
 /* harmony default export */ var toast_CToastvue_type_script_lang_js_ = (CToastvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/toast/CToast.vue?vue&type=style&index=0&id=7208152f&scoped=true&lang=css&
var CToastvue_type_style_index_0_id_7208152f_scoped_true_lang_css_ = __webpack_require__("38c0");

// CONCATENATED MODULE: ./src/components/toast/CToast.vue






/* normalize component */

var CToast_component = normalizeComponent(
  toast_CToastvue_type_script_lang_js_,
  CToastvue_type_template_id_7208152f_scoped_true_render,
  CToastvue_type_template_id_7208152f_scoped_true_staticRenderFns,
  false,
  null,
  "7208152f",
  null
  
)

/* harmony default export */ var CToast = (CToast_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/toast/CToaster.vue?vue&type=template&id=0dc99056&
var CToastervue_type_template_id_0dc99056_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.toasterClasses},[_vm._t("default")],2)}
var CToastervue_type_template_id_0dc99056_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/toast/CToaster.vue?vue&type=script&lang=js&
function CToastervue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CToastervue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CToastervue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { CToastervue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CToastervue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CToastervue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//

/* harmony default export */ var CToastervue_type_script_lang_js_ = ({
  name: 'CToaster',
  provide: function provide() {
    var _this = this;

    var toaster = {};
    Object.defineProperty(toaster, 'props', {
      get: function get() {
        return _this._props;
      }
    });
    return {
      toaster: toaster
    };
  },
  props: CToastervue_type_script_lang_js_objectSpread({}, toast_props_props, {
    position: {
      type: String,
      default: 'top-right',
      validator: function validator(position) {
        return ['', 'static', 'top-right', 'top-left', 'top-center', 'top-full', 'bottom-right', 'bottom-left', 'bottom-center', 'bottom-full'].includes(position);
      }
    }
  }),
  computed: {
    toasterClasses: function toasterClasses() {
      var hasFixedPosition = this.position && this.position !== 'static';
      return ['toaster', CToastervue_type_script_lang_js_defineProperty({}, "toaster-".concat(this.position), hasFixedPosition)];
    }
  }
});
// CONCATENATED MODULE: ./src/components/toast/CToaster.vue?vue&type=script&lang=js&
 /* harmony default export */ var toast_CToastervue_type_script_lang_js_ = (CToastervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/toast/CToaster.vue





/* normalize component */

var CToaster_component = normalizeComponent(
  toast_CToastervue_type_script_lang_js_,
  CToastervue_type_template_id_0dc99056_render,
  CToastervue_type_template_id_0dc99056_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CToaster = (CToaster_component.exports);
// CONCATENATED MODULE: ./src/components/toast/index.js



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/toggler/CToggler.vue?vue&type=script&lang=js&

/* harmony default export */ var CTogglervue_type_script_lang_js_ = ({
  name: 'CToggler',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    inHeader: Boolean,
    inNavbar: Boolean
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        slots = _ref.slots;
    var attrs = props.tag === 'button' ? {
      type: 'button'
    } : null;
    var type = props.inNavbar ? 'navbar' : props.inHeader ? 'c-header' : null;
    var staticClass = type ? "".concat(type, "-toggler") : '';
    var iconClass = type ? "".concat(staticClass, "-icon") : '';
    return h(props.tag, a({
      staticClass: staticClass,
      attrs: attrs
    }, data), [slots().default || h('span', {
      class: iconClass
    })]);
  }
});
// CONCATENATED MODULE: ./src/components/toggler/CToggler.vue?vue&type=script&lang=js&
 /* harmony default export */ var toggler_CTogglervue_type_script_lang_js_ = (CTogglervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/toggler/CToggler.vue
var CToggler_render, CToggler_staticRenderFns




/* normalize component */

var CToggler_component = normalizeComponent(
  toggler_CTogglervue_type_script_lang_js_,
  CToggler_render,
  CToggler_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CToggler = (CToggler_component.exports);
// CONCATENATED MODULE: ./src/components/toggler/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/CWidgetProgress.vue?vue&type=template&id=503c0761&
var CWidgetProgressvue_type_template_id_503c0761_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.inverse ? ("card text-white bg-" + _vm.color) : 'card'},[_c('div',{staticClass:"card-body"},[(_vm.header)?_c('div',{staticClass:"h4 m-0"},[_vm._v(_vm._s(_vm.header))]):_vm._e(),(_vm.text)?_c('div',[_vm._v(_vm._s(_vm.text))]):_vm._e(),_vm._t("default",[_c('CProgress',{staticClass:"progress-xs my-3 mb-0",class:{ 'progress-white' : _vm.inverse },attrs:{"color":!_vm.inverse ? _vm.color : '',"value":_vm.value}})]),(_vm.footer)?_c('small',{staticClass:"text-muted"},[_vm._v(" "+_vm._s(_vm.footer)+" ")]):_vm._e()],2)])}
var CWidgetProgressvue_type_template_id_503c0761_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/CWidgetProgress.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CWidgetProgressvue_type_script_lang_js_ = ({
  name: 'CWidgetProgress',
  components: {
    CProgress: CProgress
  },
  props: {
    header: String,
    text: String,
    footer: String,
    color: String,
    inverse: Boolean,
    value: {
      type: Number,
      default: 25
    }
  }
});
// CONCATENATED MODULE: ./src/components/widgets/CWidgetProgress.vue?vue&type=script&lang=js&
 /* harmony default export */ var widgets_CWidgetProgressvue_type_script_lang_js_ = (CWidgetProgressvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/widgets/CWidgetProgress.vue





/* normalize component */

var CWidgetProgress_component = normalizeComponent(
  widgets_CWidgetProgressvue_type_script_lang_js_,
  CWidgetProgressvue_type_template_id_503c0761_render,
  CWidgetProgressvue_type_template_id_503c0761_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CWidgetProgress = (CWidgetProgress_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/CWidgetIcon.vue?vue&type=template&id=084da484&
var CWidgetIconvue_type_template_id_084da484_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body d-flex align-items-center",class:_vm.iconPadding ? 'p-3' : 'p-0'},[_c('div',{staticClass:"mr-3 text-white",class:[("bg-" + _vm.color), _vm.iconPadding ? 'p-3' : 'p-4']},[_vm._t("default")],2),_c('div',[(_vm.header)?_c('div',{class:("text-value text-" + _vm.color)},[_vm._v(" "+_vm._s(_vm.header)+" ")]):_vm._e(),(_vm.text)?_c('div',{staticClass:"text-muted text-uppercase font-weight-bold small"},[_vm._v(" "+_vm._s(_vm.text)+" ")]):_vm._e()])])])}
var CWidgetIconvue_type_template_id_084da484_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/CWidgetIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CWidgetIconvue_type_script_lang_js_ = ({
  name: 'CWidgetIcon',
  props: {
    header: String,
    text: String,
    iconPadding: {
      type: Boolean,
      default: true
    },
    color: String
  }
});
// CONCATENATED MODULE: ./src/components/widgets/CWidgetIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var widgets_CWidgetIconvue_type_script_lang_js_ = (CWidgetIconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/widgets/CWidgetIcon.vue





/* normalize component */

var CWidgetIcon_component = normalizeComponent(
  widgets_CWidgetIconvue_type_script_lang_js_,
  CWidgetIconvue_type_template_id_084da484_render,
  CWidgetIconvue_type_template_id_084da484_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CWidgetIcon = (CWidgetIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/CWidgetBrand.vue?vue&type=template&id=42ecf084&
var CWidgetBrandvue_type_template_id_42ecf084_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header content-center text-white p-0",class:[("bg-" + _vm.color), _vm.addHeaderClasses]},[_vm._t("default")],2),_vm._t("body",[_c('div',{staticClass:"card-body row text-center"},[_c('div',{staticClass:"col"},[(_vm.rightHeader)?_c('div',{staticClass:"text-value-lg"},[_vm._v(" "+_vm._s(_vm.rightHeader)+" ")]):_vm._e(),(_vm.rightFooter)?_c('div',{staticClass:"text-uppercase text-muted small"},[_vm._v(" "+_vm._s(_vm.rightFooter)+" ")]):_vm._e()]),_c('div',{staticClass:"c-vr"}),_c('div',{staticClass:"col"},[(_vm.leftHeader)?_c('div',{staticClass:"text-value-lg"},[_vm._v(" "+_vm._s(_vm.leftHeader)+" ")]):_vm._e(),(_vm.leftFooter)?_c('div',{staticClass:"text-uppercase text-muted small"},[_vm._v(" "+_vm._s(_vm.leftFooter)+" ")]):_vm._e()])])])],2)}
var CWidgetBrandvue_type_template_id_42ecf084_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/CWidgetBrand.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CWidgetBrandvue_type_script_lang_js_ = ({
  name: 'CWidgetBrand',
  props: {
    color: String,
    rightHeader: String,
    rightFooter: String,
    leftHeader: String,
    leftFooter: String,
    addHeaderClasses: [String, Array, Object]
  }
});
// CONCATENATED MODULE: ./src/components/widgets/CWidgetBrand.vue?vue&type=script&lang=js&
 /* harmony default export */ var widgets_CWidgetBrandvue_type_script_lang_js_ = (CWidgetBrandvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/widgets/CWidgetBrand.vue





/* normalize component */

var CWidgetBrand_component = normalizeComponent(
  widgets_CWidgetBrandvue_type_script_lang_js_,
  CWidgetBrandvue_type_template_id_42ecf084_render,
  CWidgetBrandvue_type_template_id_42ecf084_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CWidgetBrand = (CWidgetBrand_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/CWidgetProgressIcon.vue?vue&type=template&id=6b95ba9b&
var CWidgetProgressIconvue_type_template_id_6b95ba9b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.inverse ? ("card text-white bg-" + _vm.color) : 'card'},[_c('div',{staticClass:"card-body"},[(_vm.$slots.default)?_c('div',{staticClass:"h1 text-muted text-right mb-4"},[_vm._t("default")],2):_vm._e(),(_vm.header)?_c('div',{staticClass:"h4 mb-0"},[_vm._v(_vm._s(_vm.header))]):_vm._e(),(_vm.text)?_c('small',{staticClass:"text-muted text-uppercase font-weight-bold"},[_vm._v(" "+_vm._s(_vm.text)+" ")]):_vm._e(),_vm._t("progress",[_c('CProgress',{staticClass:"progress-xs my-3 mb-0",class:{ 'progress-white' : _vm.inverse },attrs:{"color":!_vm.inverse ? _vm.color : '',"value":_vm.value}})])],2)])}
var CWidgetProgressIconvue_type_template_id_6b95ba9b_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/CWidgetProgressIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CWidgetProgressIconvue_type_script_lang_js_ = ({
  name: 'CWidgetProgressIcon',
  components: {
    CProgress: CProgress
  },
  props: {
    header: String,
    text: String,
    color: String,
    inverse: Boolean,
    value: {
      type: Number,
      default: 25
    }
  }
});
// CONCATENATED MODULE: ./src/components/widgets/CWidgetProgressIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var widgets_CWidgetProgressIconvue_type_script_lang_js_ = (CWidgetProgressIconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/widgets/CWidgetProgressIcon.vue





/* normalize component */

var CWidgetProgressIcon_component = normalizeComponent(
  widgets_CWidgetProgressIconvue_type_script_lang_js_,
  CWidgetProgressIconvue_type_template_id_6b95ba9b_render,
  CWidgetProgressIconvue_type_template_id_6b95ba9b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CWidgetProgressIcon = (CWidgetProgressIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/CWidgetDropdown.vue?vue&type=template&id=46a617c6&
var CWidgetDropdownvue_type_template_id_46a617c6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card",class:("bg-" + _vm.color + " text-white")},[_c('div',{staticClass:"card-body pb-0 d-flex justify-content-between"},[_c('div',[(_vm.header)?_c('div',{staticClass:"text-value-lg"},[_vm._v(_vm._s(_vm.header))]):_vm._e(),(_vm.text)?_c('div',[_vm._v(_vm._s(_vm.text))]):_vm._e()]),_vm._t("default")],2),_vm._t("footer")],2)}
var CWidgetDropdownvue_type_template_id_46a617c6_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/CWidgetDropdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CWidgetDropdownvue_type_script_lang_js_ = ({
  name: 'CWidgetDropdown',
  props: {
    color: String,
    header: String,
    text: String
  }
});
// CONCATENATED MODULE: ./src/components/widgets/CWidgetDropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var widgets_CWidgetDropdownvue_type_script_lang_js_ = (CWidgetDropdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/widgets/CWidgetDropdown.vue





/* normalize component */

var CWidgetDropdown_component = normalizeComponent(
  widgets_CWidgetDropdownvue_type_script_lang_js_,
  CWidgetDropdownvue_type_template_id_46a617c6_render,
  CWidgetDropdownvue_type_template_id_46a617c6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CWidgetDropdown = (CWidgetDropdown_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"501edefa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/CWidgetSimple.vue?vue&type=template&id=2a54f662&
var CWidgetSimplevue_type_template_id_2a54f662_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body text-center"},[(_vm.header)?_c('div',{staticClass:"text-muted small text-uppercase font-weight-bold"},[_vm._v(" "+_vm._s(_vm.header)+" ")]):_vm._e(),(_vm.text)?_c('div',{staticClass:"h2 py-3"},[_vm._v(" "+_vm._s(_vm.text)+" ")]):_vm._e(),_vm._t("default")],2)])}
var CWidgetSimplevue_type_template_id_2a54f662_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/CWidgetSimple.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CWidgetSimplevue_type_script_lang_js_ = ({
  name: 'CWidgetSimple',
  props: {
    header: String,
    text: String
  }
});
// CONCATENATED MODULE: ./src/components/widgets/CWidgetSimple.vue?vue&type=script&lang=js&
 /* harmony default export */ var widgets_CWidgetSimplevue_type_script_lang_js_ = (CWidgetSimplevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/widgets/CWidgetSimple.vue





/* normalize component */

var CWidgetSimple_component = normalizeComponent(
  widgets_CWidgetSimplevue_type_script_lang_js_,
  CWidgetSimplevue_type_template_id_2a54f662_render,
  CWidgetSimplevue_type_template_id_2a54f662_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CWidgetSimple = (CWidgetSimple_component.exports);
// CONCATENATED MODULE: ./src/components/widgets/index.js







// CONCATENATED MODULE: ./src/components/index.js



































// EXTERNAL MODULE: ./node_modules/popper.js/dist/esm/popper.js
var esm_popper = __webpack_require__("f0bd");

// CONCATENATED MODULE: ./node_modules/tooltip.js/dist/esm/tooltip.js
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.3.3
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var DEFAULT_OPTIONS = {
  container: false,
  delay: 0,
  html: false,
  placement: 'top',
  title: '',
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  trigger: 'hover focus',
  offset: 0,
  arrowSelector: '.tooltip-arrow, .tooltip__arrow',
  innerSelector: '.tooltip-inner, .tooltip__inner'
};

var tooltip_Tooltip = function () {
  /**
   * Create a new Tooltip.js instance
   * @class Tooltip
   * @param {HTMLElement} reference - The DOM node used as reference of the tooltip (it can be a jQuery element).
   * @param {Object} options
   * @param {String} options.placement='top'
   *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -end),
   *      left(-start, -end)`
   * @param {String} [options.arrowSelector='.tooltip-arrow, .tooltip__arrow'] - className used to locate the DOM arrow element in the tooltip.
   * @param {String} [options.innerSelector='.tooltip-inner, .tooltip__inner'] - className used to locate the DOM inner element in the tooltip.
   * @param {HTMLElement|String|false} options.container=false - Append the tooltip to a specific element.
   * @param {Number|Object} options.delay=0
   *      Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type.
   *      If a number is supplied, delay is applied to both hide/show.
   *      Object structure is: `{ show: 500, hide: 100 }`
   * @param {Boolean} options.html=false - Insert HTML into the tooltip. If false, the content will inserted with `textContent`.
   * @param {String} [options.template='<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>']
   *      Base HTML to used when creating the tooltip.
   *      The tooltip's `title` will be injected into the `.tooltip-inner` or `.tooltip__inner`.
   *      `.tooltip-arrow` or `.tooltip__arrow` will become the tooltip's arrow.
   *      The outermost wrapper element should have the `.tooltip` class.
   * @param {String|HTMLElement|TitleFunction} options.title='' - Default title value if `title` attribute isn't present.
   * @param {String} [options.trigger='hover focus']
   *      How tooltip is triggered - click, hover, focus, manual.
   *      You may pass multiple triggers; separate them with a space. `manual` cannot be combined with any other trigger.
   * @param {Boolean} options.closeOnClickOutside=false - Close a popper on click outside of the popper and reference element. This has effect only when options.trigger is 'click'.
   * @param {String|HTMLElement} options.boundariesElement
   *      The element used as boundaries for the tooltip. For more information refer to Popper.js'
   *      [boundariesElement docs](https://popper.js.org/popper-documentation.html)
   * @param {Number|String} options.offset=0 - Offset of the tooltip relative to its reference. For more information refer to Popper.js'
   *      [offset docs](https://popper.js.org/popper-documentation.html)
   * @param {Object} options.popperOptions={} - Popper options, will be passed directly to popper instance. For more information refer to Popper.js'
   *      [options docs](https://popper.js.org/popper-documentation.html)
   * @return {Object} instance - The generated tooltip instance
   */
  function Tooltip(reference, options) {
    classCallCheck(this, Tooltip);

    _initialiseProps.call(this);

    // apply user options over default ones
    options = _extends({}, DEFAULT_OPTIONS, options);

    reference.jquery && (reference = reference[0]);

    // cache reference and options
    this.reference = reference;
    this.options = options;

    // get events list
    var events = typeof options.trigger === 'string' ? options.trigger.split(' ').filter(function (trigger) {
      return ['click', 'hover', 'focus'].indexOf(trigger) !== -1;
    }) : [];

    // set initial state
    this._isOpen = false;
    this._popperOptions = {};

    // set event listeners
    this._setEventListeners(reference, events, options);
  }

  //
  // Public methods
  //

  /**
   * Reveals an element's tooltip. This is considered a "manual" triggering of the tooltip.
   * Tooltips with zero-length titles are never displayed.
   * @method Tooltip#show
   * @memberof Tooltip
   */


  /**
   * Hides an element’s tooltip. This is considered a “manual” triggering of the tooltip.
   * @method Tooltip#hide
   * @memberof Tooltip
   */


  /**
   * Hides and destroys an element’s tooltip.
   * @method Tooltip#dispose
   * @memberof Tooltip
   */


  /**
   * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
   * @method Tooltip#toggle
   * @memberof Tooltip
   */


  /**
   * Updates the tooltip's title content
   * @method Tooltip#updateTitleContent
   * @memberof Tooltip
   * @param {String|HTMLElement} title - The new content to use for the title
   */


  //
  // Private methods
  //

  createClass(Tooltip, [{
    key: '_create',


    /**
     * Creates a new tooltip node
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} reference
     * @param {String} template
     * @param {String|HTMLElement|TitleFunction} title
     * @param {Boolean} allowHtml
     * @return {HTMLElement} tooltipNode
     */
    value: function _create(reference, template, title, allowHtml) {
      // create tooltip element
      var tooltipGenerator = window.document.createElement('div');
      tooltipGenerator.innerHTML = template.trim();
      var tooltipNode = tooltipGenerator.childNodes[0];

      // add unique ID to our tooltip (needed for accessibility reasons)
      tooltipNode.id = 'tooltip_' + Math.random().toString(36).substr(2, 10);

      // set initial `aria-hidden` state to `false` (it's visible!)
      tooltipNode.setAttribute('aria-hidden', 'false');

      // add title to tooltip
      var titleNode = tooltipGenerator.querySelector(this.options.innerSelector);
      this._addTitleContent(reference, title, allowHtml, titleNode);

      // return the generated tooltip node
      return tooltipNode;
    }
  }, {
    key: '_addTitleContent',
    value: function _addTitleContent(reference, title, allowHtml, titleNode) {
      if (title.nodeType === 1 || title.nodeType === 11) {
        // if title is a element node or document fragment, append it only if allowHtml is true
        allowHtml && titleNode.appendChild(title);
      } else if (isFunction(title)) {
        // Recursively call ourself so that the return value of the function gets handled appropriately - either
        // as a dom node, a string, or even as another function.
        this._addTitleContent(reference, title.call(reference), allowHtml, titleNode);
      } else {
        // if it's just a simple text, set textContent or innerHtml depending by `allowHtml` value
        allowHtml ? titleNode.innerHTML = title : titleNode.textContent = title;
      }
    }
  }, {
    key: '_show',
    value: function _show(reference, options) {
      // don't show if it's already visible
      // or if it's not being showed
      if (this._isOpen && !this._isOpening) {
        return this;
      }
      this._isOpen = true;

      // if the tooltipNode already exists, just show it
      if (this._tooltipNode) {
        this._tooltipNode.style.visibility = 'visible';
        this._tooltipNode.setAttribute('aria-hidden', 'false');
        this.popperInstance.update();
        return this;
      }

      // get title
      var title = reference.getAttribute('title') || options.title;

      // don't show tooltip if no title is defined
      if (!title) {
        return this;
      }

      // create tooltip node
      var tooltipNode = this._create(reference, options.template, title, options.html);

      // Add `aria-describedby` to our reference element for accessibility reasons
      reference.setAttribute('aria-describedby', tooltipNode.id);

      // append tooltip to container
      var container = this._findContainer(options.container, reference);

      this._append(tooltipNode, container);

      this._popperOptions = _extends({}, options.popperOptions, {
        placement: options.placement
      });

      this._popperOptions.modifiers = _extends({}, this._popperOptions.modifiers, {
        arrow: _extends({}, this._popperOptions.modifiers && this._popperOptions.modifiers.arrow, {
          element: options.arrowSelector
        }),
        offset: _extends({}, this._popperOptions.modifiers && this._popperOptions.modifiers.offset, {
          offset: options.offset || this._popperOptions.modifiers && this._popperOptions.modifiers.offset && this._popperOptions.modifiers.offset.offset || options.offset
        })
      });

      if (options.boundariesElement) {
        this._popperOptions.modifiers.preventOverflow = {
          boundariesElement: options.boundariesElement
        };
      }

      this.popperInstance = new esm_popper["a" /* default */](reference, tooltipNode, this._popperOptions);

      this._tooltipNode = tooltipNode;

      return this;
    }
  }, {
    key: '_hide',
    value: function _hide() /*reference, options*/{
      // don't hide if it's already hidden
      if (!this._isOpen) {
        return this;
      }

      this._isOpen = false;

      // hide tooltipNode
      this._tooltipNode.style.visibility = 'hidden';
      this._tooltipNode.setAttribute('aria-hidden', 'true');

      return this;
    }
  }, {
    key: '_dispose',
    value: function _dispose() {
      var _this = this;

      // remove event listeners first to prevent any unexpected behaviour
      this._events.forEach(function (_ref) {
        var func = _ref.func,
            event = _ref.event;

        _this.reference.removeEventListener(event, func);
      });
      this._events = [];

      if (this._tooltipNode) {
        this._hide();

        // destroy instance
        this.popperInstance.destroy();

        // destroy tooltipNode if removeOnDestroy is not set, as popperInstance.destroy() already removes the element
        if (!this.popperInstance.options.removeOnDestroy) {
          this._tooltipNode.parentNode.removeChild(this._tooltipNode);
          this._tooltipNode = null;
        }
      }
      return this;
    }
  }, {
    key: '_findContainer',
    value: function _findContainer(container, reference) {
      // if container is a query, get the relative element
      if (typeof container === 'string') {
        container = window.document.querySelector(container);
      } else if (container === false) {
        // if container is `false`, set it to reference parent
        container = reference.parentNode;
      }
      return container;
    }

    /**
     * Append tooltip to container
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} tooltipNode
     * @param {HTMLElement|String|false} container
     */

  }, {
    key: '_append',
    value: function _append(tooltipNode, container) {
      container.appendChild(tooltipNode);
    }
  }, {
    key: '_setEventListeners',
    value: function _setEventListeners(reference, events, options) {
      var _this2 = this;

      var directEvents = [];
      var oppositeEvents = [];

      events.forEach(function (event) {
        switch (event) {
          case 'hover':
            directEvents.push('mouseenter');
            oppositeEvents.push('mouseleave');
            break;
          case 'focus':
            directEvents.push('focus');
            oppositeEvents.push('blur');
            break;
          case 'click':
            directEvents.push('click');
            oppositeEvents.push('click');
            break;
        }
      });

      // schedule show tooltip
      directEvents.forEach(function (event) {
        var func = function func(evt) {
          if (_this2._isOpening === true) {
            return;
          }
          evt.usedByTooltip = true;
          _this2._scheduleShow(reference, options.delay, options, evt);
        };
        _this2._events.push({ event: event, func: func });
        reference.addEventListener(event, func);
      });

      // schedule hide tooltip
      oppositeEvents.forEach(function (event) {
        var func = function func(evt) {
          if (evt.usedByTooltip === true) {
            return;
          }
          _this2._scheduleHide(reference, options.delay, options, evt);
        };
        _this2._events.push({ event: event, func: func });
        reference.addEventListener(event, func);
        if (event === 'click' && options.closeOnClickOutside) {
          document.addEventListener('mousedown', function (e) {
            if (!_this2._isOpening) {
              return;
            }
            var popper = _this2.popperInstance.popper;
            if (reference.contains(e.target) || popper.contains(e.target)) {
              return;
            }
            func(e);
          }, true);
        }
      });
    }
  }, {
    key: '_scheduleShow',
    value: function _scheduleShow(reference, delay, options /*, evt */) {
      var _this3 = this;

      this._isOpening = true;
      // defaults to 0
      var computedDelay = delay && delay.show || delay || 0;
      this._showTimeout = window.setTimeout(function () {
        return _this3._show(reference, options);
      }, computedDelay);
    }
  }, {
    key: '_scheduleHide',
    value: function _scheduleHide(reference, delay, options, evt) {
      var _this4 = this;

      this._isOpening = false;
      // defaults to 0
      var computedDelay = delay && delay.hide || delay || 0;
      window.clearTimeout(this._showTimeout);
      window.setTimeout(function () {
        if (_this4._isOpen === false) {
          return;
        }
        if (!document.body.contains(_this4._tooltipNode)) {
          return;
        }

        // if we are hiding because of a mouseleave, we must check that the new
        // reference isn't the tooltip, because in this case we don't want to hide it
        if (evt.type === 'mouseleave') {
          var isSet = _this4._setTooltipNodeEvent(evt, reference, delay, options);

          // if we set the new event, don't hide the tooltip yet
          // the new event will take care to hide it if necessary
          if (isSet) {
            return;
          }
        }

        _this4._hide(reference, options);
      }, computedDelay);
    }
  }, {
    key: '_updateTitleContent',
    value: function _updateTitleContent(title) {
      if (typeof this._tooltipNode === 'undefined') {
        if (typeof this.options.title !== 'undefined') {
          this.options.title = title;
        }
        return;
      }
      var titleNode = this._tooltipNode.querySelector(this.options.innerSelector);
      this._clearTitleContent(titleNode, this.options.html, this.reference.getAttribute('title') || this.options.title);
      this._addTitleContent(this.reference, title, this.options.html, titleNode);
      this.options.title = title;
      this.popperInstance.update();
    }
  }, {
    key: '_clearTitleContent',
    value: function _clearTitleContent(titleNode, allowHtml, lastTitle) {
      if (lastTitle.nodeType === 1 || lastTitle.nodeType === 11) {
        allowHtml && titleNode.removeChild(lastTitle);
      } else {
        allowHtml ? titleNode.innerHTML = '' : titleNode.textContent = '';
      }
    }
  }]);
  return Tooltip;
}();

/**
 * Title function, its context is the Tooltip instance.
 * @memberof Tooltip
 * @callback TitleFunction
 * @return {String} placement - The desired title.
 */


var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.show = function () {
    return _this5._show(_this5.reference, _this5.options);
  };

  this.hide = function () {
    return _this5._hide();
  };

  this.dispose = function () {
    return _this5._dispose();
  };

  this.toggle = function () {
    if (_this5._isOpen) {
      return _this5.hide();
    } else {
      return _this5.show();
    }
  };

  this.updateTitleContent = function (title) {
    return _this5._updateTitleContent(title);
  };

  this._events = [];

  this._setTooltipNodeEvent = function (evt, reference, delay, options) {
    var relatedreference = evt.relatedreference || evt.toElement || evt.relatedTarget;

    var callback = function callback(evt2) {
      var relatedreference2 = evt2.relatedreference || evt2.toElement || evt2.relatedTarget;

      // Remove event listener after call
      _this5._tooltipNode.removeEventListener(evt.type, callback);

      // If the new reference is not the reference element
      if (!reference.contains(relatedreference2)) {
        // Schedule to hide tooltip
        _this5._scheduleHide(reference, options.delay, options, evt2);
      }
    };

    if (_this5._tooltipNode.contains(relatedreference)) {
      // listen to mouseleave on the tooltip element to be able to hide the tooltip
      _this5._tooltipNode.addEventListener(evt.type, callback);
      return true;
    }

    return false;
  };
};

/* harmony default export */ var esm_tooltip = (tooltip_Tooltip);
//# sourceMappingURL=tooltip.js.map

// CONCATENATED MODULE: ./src/directives/CPopover.js

/* harmony default export */ var CPopover = ({
  name: 'c-popover',
  tooltip: null,
  inserted: function inserted(el, binding) {
    var tooltip = new esm_tooltip(el, binding.def.getTooltipConfig(binding));
    binding.def._tooltip = tooltip;

    if (binding.value.active) {
      tooltip.show();
    }
  },
  unbind: function unbind(el, binding) {
    var tooltip = binding.def._tooltip;

    if (tooltip) {
      tooltip.dispose();
      tooltip = null;
    }
  },
  getTooltipConfig: function getTooltipConfig(binding) {
    var props = binding.value;
    var title = props.content || 'content'; // const modifiersTriggers = String(Object.keys(binding.modifiers)).replace(',',' ')

    var closeOnClickOutside = props.closeOnClickOutside === false ? false : true;
    var html = props.html === false ? false : true;
    var popperOptions = props.popperOptions || {
      modifiers: {
        preventOverflow: {
          boundariesElement: 'offsetParent'
        }
      }
    };
    return {
      title: title,
      trigger: 'click',
      html: html,
      placement: props.placement || 'right',
      delay: props.delay || 0,
      offset: props.offset || 0,
      arrowSelector: '.arrow',
      innerSelector: '.popover-body',
      template: binding.def.getTemplate(props.header),
      boundariesElement: document.getElementById(props.boundaries) || props.boundaries,
      container: props.appendToBody ? document.body : false,
      closeOnClickOutside: closeOnClickOutside,
      popperOptions: popperOptions
    };
  },
  getTemplate: function getTemplate(header) {
    return "<div class=\"popover bs-popover-auto fade show\" role=\"tooltip\">\n              <div class=\"arrow\"></div>\n              <h3 class=\"popover-header\">".concat(header || 'header', "</h3>\n              <div class=\"popover-body\"></div>\n            </div>");
  }
});
// CONCATENATED MODULE: ./src/directives/CTooltip.js

/* harmony default export */ var CTooltip = ({
  name: 'c-tooltip',
  inserted: function inserted(el, binding) {
    binding.def._tooltip = new esm_tooltip(el, binding.def.getTooltipConfig(binding));

    if (binding.value.active) {
      binding.def._tooltip.show();
    }
  },
  unbind: function unbind(el, binding) {
    var tooltip = binding.def._tooltip;

    if (tooltip) {
      tooltip.dispose();
      tooltip = null;
    }
  },
  getTooltipConfig: function getTooltipConfig(binding) {
    var props = binding.value;
    var title = props.content || props;
    var html = props.html === false ? false : true; // const modifiersTriggers = String(Object.keys(binding.modifiers)).replace(',',' ')

    var closeOnClickOutside = props.closeOnClickOutside === false ? false : true;
    var popperOptions = props.popperOptions || {
      modifiers: {
        preventOverflow: {
          boundariesElement: 'offsetParent'
        }
      }
    };
    return {
      title: title,
      trigger: 'hover',
      html: html,
      placement: props.placement || 'top',
      delay: props.delay || 0,
      offset: props.offset || 0,
      arrowSelector: '.arrow',
      innerSelector: '.tooltip-inner',
      template: binding.def.getTemplate(),
      boundariesElement: document.getElementById(props.boundaries) || props.boundaries,
      container: props.appendToBody ? document.body : false,
      closeOnClickOutside: closeOnClickOutside,
      popperOptions: popperOptions
    };
  },
  getTemplate: function getTemplate() {
    return "<div class=\"tooltip bs-tooltip-auto fade show\" role=\"tooltip\">\n              <div class=\"arrow\"></div>\n              <div class=\"tooltip-inner\"></div>\n            </div>";
  }
});
// CONCATENATED MODULE: ./src/directives/CEmitRootEvent.js
/* harmony default export */ var CEmitRootEvent = ({
  name: 'c-emit-root-event',
  bind: function bind(el, binding, node) {
    if (!binding.arg) {
      return;
    }

    var customListeners = Object.keys(binding.modifiers);
    var listeners = customListeners.length ? customListeners : ['click'];
    listeners.map(function (listener) {
      el.addEventListener(listener, function () {
        node.context.$root.$emit(binding.arg, binding.value);
      });
    });
  }
});
// CONCATENATED MODULE: ./src/directives/index.js




// CONCATENATED MODULE: ./src/index.js
function src_slicedToArray(arr, i) { return src_arrayWithHoles(arr) || src_iterableToArrayLimit(arr, i) || src_nonIterableRest(); }

function src_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function src_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function src_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var removeKeysFromObject = function removeKeysFromObject(object, keys) {
  return Object.entries(object).reduce(function (obj, _ref) {
    var _ref2 = src_slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (!keys.includes(key) && !keys.includes(value.name)) {
      obj[key] = value;
    }

    return obj;
  }, {});
};

var CoreuiVue = {
  install: function install(Vue, options) {
    var pluginComponents = components_namespaceObject;
    var pluginDirectives = directives_namespaceObject;
    var toRemove = options && options.remove ? options.remove : null;

    if (toRemove && Array.isArray(toRemove)) {
      pluginComponents = removeKeysFromObject(components_namespaceObject, toRemove);
      pluginDirectives = removeKeysFromObject(directives_namespaceObject, toRemove);
    }

    for (var plugin in pluginComponents) {
      Vue.component(plugin, components_namespaceObject[plugin]);
    }

    for (var directive in pluginDirectives) {
      Vue.directive(directive, directives_namespaceObject[directive]);
    }
  }
}; // Export library

/* harmony default export */ var src = (CoreuiVue); //Export components



// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport CAlert */__webpack_require__.d(__webpack_exports__, "CAlert", function() { return CAlert; });
/* concated harmony reexport CBadge */__webpack_require__.d(__webpack_exports__, "CBadge", function() { return CBadge; });
/* concated harmony reexport CBreadcrumb */__webpack_require__.d(__webpack_exports__, "CBreadcrumb", function() { return CBreadcrumb; });
/* concated harmony reexport CBreadcrumbRouter */__webpack_require__.d(__webpack_exports__, "CBreadcrumbRouter", function() { return CBreadcrumbRouter; });
/* concated harmony reexport CButton */__webpack_require__.d(__webpack_exports__, "CButton", function() { return CButton; });
/* concated harmony reexport CButtonClose */__webpack_require__.d(__webpack_exports__, "CButtonClose", function() { return CButtonClose; });
/* concated harmony reexport CButtonGroup */__webpack_require__.d(__webpack_exports__, "CButtonGroup", function() { return CButtonGroup; });
/* concated harmony reexport CButtonToolbar */__webpack_require__.d(__webpack_exports__, "CButtonToolbar", function() { return CButtonToolbar; });
/* concated harmony reexport CCallout */__webpack_require__.d(__webpack_exports__, "CCallout", function() { return CCallout; });
/* concated harmony reexport CCarousel */__webpack_require__.d(__webpack_exports__, "CCarousel", function() { return CCarousel; });
/* concated harmony reexport CCarouselItem */__webpack_require__.d(__webpack_exports__, "CCarouselItem", function() { return CCarouselItem; });
/* concated harmony reexport CCard */__webpack_require__.d(__webpack_exports__, "CCard", function() { return CCard; });
/* concated harmony reexport CCardBody */__webpack_require__.d(__webpack_exports__, "CCardBody", function() { return CCardBody; });
/* concated harmony reexport CCardFooter */__webpack_require__.d(__webpack_exports__, "CCardFooter", function() { return CCardFooter; });
/* concated harmony reexport CCardHeader */__webpack_require__.d(__webpack_exports__, "CCardHeader", function() { return CCardHeader; });
/* concated harmony reexport CCardGroup */__webpack_require__.d(__webpack_exports__, "CCardGroup", function() { return CCardGroup; });
/* concated harmony reexport CCardImg */__webpack_require__.d(__webpack_exports__, "CCardImg", function() { return CCardImg; });
/* concated harmony reexport CCardImgOverlay */__webpack_require__.d(__webpack_exports__, "CCardImgOverlay", function() { return CCardImgOverlay; });
/* concated harmony reexport CCardLink */__webpack_require__.d(__webpack_exports__, "CCardLink", function() { return CCardLink; });
/* concated harmony reexport CCardSubtitle */__webpack_require__.d(__webpack_exports__, "CCardSubtitle", function() { return CCardSubtitle; });
/* concated harmony reexport CCardText */__webpack_require__.d(__webpack_exports__, "CCardText", function() { return CCardText; });
/* concated harmony reexport CCardTitle */__webpack_require__.d(__webpack_exports__, "CCardTitle", function() { return CCardTitle; });
/* concated harmony reexport CCollapse */__webpack_require__.d(__webpack_exports__, "CCollapse", function() { return CCollapse; });
/* concated harmony reexport CDropdown */__webpack_require__.d(__webpack_exports__, "CDropdown", function() { return CDropdown; });
/* concated harmony reexport CDropdownHeader */__webpack_require__.d(__webpack_exports__, "CDropdownHeader", function() { return CDropdownHeader; });
/* concated harmony reexport CDropdownDivider */__webpack_require__.d(__webpack_exports__, "CDropdownDivider", function() { return CDropdownDivider; });
/* concated harmony reexport CDropdownItem */__webpack_require__.d(__webpack_exports__, "CDropdownItem", function() { return CDropdownItem; });
/* concated harmony reexport CElementCover */__webpack_require__.d(__webpack_exports__, "CElementCover", function() { return CElementCover; });
/* concated harmony reexport CEmbed */__webpack_require__.d(__webpack_exports__, "CEmbed", function() { return CEmbed; });
/* concated harmony reexport CForm */__webpack_require__.d(__webpack_exports__, "CForm", function() { return CForm; });
/* concated harmony reexport CFormGroup */__webpack_require__.d(__webpack_exports__, "CFormGroup", function() { return CFormGroup; });
/* concated harmony reexport CInput */__webpack_require__.d(__webpack_exports__, "CInput", function() { return CInput; });
/* concated harmony reexport CInputCheckbox */__webpack_require__.d(__webpack_exports__, "CInputCheckbox", function() { return CInputCheckbox; });
/* concated harmony reexport CInputFile */__webpack_require__.d(__webpack_exports__, "CInputFile", function() { return CInputFile; });
/* concated harmony reexport CInputRadio */__webpack_require__.d(__webpack_exports__, "CInputRadio", function() { return CInputRadio; });
/* concated harmony reexport CSelect */__webpack_require__.d(__webpack_exports__, "CSelect", function() { return CSelect; });
/* concated harmony reexport CTextarea */__webpack_require__.d(__webpack_exports__, "CTextarea", function() { return CTextarea; });
/* concated harmony reexport CContainer */__webpack_require__.d(__webpack_exports__, "CContainer", function() { return CContainer; });
/* concated harmony reexport CRow */__webpack_require__.d(__webpack_exports__, "CRow", function() { return CRow; });
/* concated harmony reexport CCol */__webpack_require__.d(__webpack_exports__, "CCol", function() { return CCol; });
/* concated harmony reexport CImg */__webpack_require__.d(__webpack_exports__, "CImg", function() { return CImg; });
/* concated harmony reexport CJumbotron */__webpack_require__.d(__webpack_exports__, "CJumbotron", function() { return CJumbotron; });
/* concated harmony reexport CLink */__webpack_require__.d(__webpack_exports__, "CLink", function() { return CLink; });
/* concated harmony reexport CListGroup */__webpack_require__.d(__webpack_exports__, "CListGroup", function() { return CListGroup; });
/* concated harmony reexport CListGroupItem */__webpack_require__.d(__webpack_exports__, "CListGroupItem", function() { return CListGroupItem; });
/* concated harmony reexport CMedia */__webpack_require__.d(__webpack_exports__, "CMedia", function() { return CMedia; });
/* concated harmony reexport CModal */__webpack_require__.d(__webpack_exports__, "CModal", function() { return CModal; });
/* concated harmony reexport CNav */__webpack_require__.d(__webpack_exports__, "CNav", function() { return CNav; });
/* concated harmony reexport CNavItem */__webpack_require__.d(__webpack_exports__, "CNavItem", function() { return CNavItem; });
/* concated harmony reexport CNavbar */__webpack_require__.d(__webpack_exports__, "CNavbar", function() { return CNavbar; });
/* concated harmony reexport CNavbarBrand */__webpack_require__.d(__webpack_exports__, "CNavbarBrand", function() { return CNavbarBrand; });
/* concated harmony reexport CNavbarNav */__webpack_require__.d(__webpack_exports__, "CNavbarNav", function() { return CNavbarNav; });
/* concated harmony reexport CNavbarText */__webpack_require__.d(__webpack_exports__, "CNavbarText", function() { return CNavbarText; });
/* concated harmony reexport CPagination */__webpack_require__.d(__webpack_exports__, "CPagination", function() { return CPagination; });
/* concated harmony reexport CProgress */__webpack_require__.d(__webpack_exports__, "CProgress", function() { return CProgress; });
/* concated harmony reexport CProgressBar */__webpack_require__.d(__webpack_exports__, "CProgressBar", function() { return CProgressBar; });
/* concated harmony reexport CRenderFunction */__webpack_require__.d(__webpack_exports__, "CRenderFunction", function() { return CRenderFunction; });
/* concated harmony reexport CScrollbar */__webpack_require__.d(__webpack_exports__, "CScrollbar", function() { return CScrollbar; });
/* concated harmony reexport CSpinner */__webpack_require__.d(__webpack_exports__, "CSpinner", function() { return CSpinner; });
/* concated harmony reexport CSwitch */__webpack_require__.d(__webpack_exports__, "CSwitch", function() { return CSwitch; });
/* concated harmony reexport CDataTable */__webpack_require__.d(__webpack_exports__, "CDataTable", function() { return CDataTable; });
/* concated harmony reexport CTab */__webpack_require__.d(__webpack_exports__, "CTab", function() { return CTab; });
/* concated harmony reexport CTabs */__webpack_require__.d(__webpack_exports__, "CTabs", function() { return CTabs; });
/* concated harmony reexport CFooter */__webpack_require__.d(__webpack_exports__, "CFooter", function() { return CFooter; });
/* concated harmony reexport CHeader */__webpack_require__.d(__webpack_exports__, "CHeader", function() { return CHeader; });
/* concated harmony reexport CHeaderBrand */__webpack_require__.d(__webpack_exports__, "CHeaderBrand", function() { return CHeaderBrand; });
/* concated harmony reexport CHeaderNav */__webpack_require__.d(__webpack_exports__, "CHeaderNav", function() { return CHeaderNav; });
/* concated harmony reexport CHeaderNavItem */__webpack_require__.d(__webpack_exports__, "CHeaderNavItem", function() { return CHeaderNavItem; });
/* concated harmony reexport CHeaderNavLink */__webpack_require__.d(__webpack_exports__, "CHeaderNavLink", function() { return CHeaderNavLink; });
/* concated harmony reexport CSubheader */__webpack_require__.d(__webpack_exports__, "CSubheader", function() { return CSubheader; });
/* concated harmony reexport CSidebar */__webpack_require__.d(__webpack_exports__, "CSidebar", function() { return CSidebar; });
/* concated harmony reexport CSidebarBrand */__webpack_require__.d(__webpack_exports__, "CSidebarBrand", function() { return CSidebarBrand; });
/* concated harmony reexport CSidebarClose */__webpack_require__.d(__webpack_exports__, "CSidebarClose", function() { return CSidebarClose; });
/* concated harmony reexport CSidebarFooter */__webpack_require__.d(__webpack_exports__, "CSidebarFooter", function() { return CSidebarFooter; });
/* concated harmony reexport CSidebarForm */__webpack_require__.d(__webpack_exports__, "CSidebarForm", function() { return CSidebarForm; });
/* concated harmony reexport CSidebarHeader */__webpack_require__.d(__webpack_exports__, "CSidebarHeader", function() { return CSidebarHeader; });
/* concated harmony reexport CSidebarMinimizer */__webpack_require__.d(__webpack_exports__, "CSidebarMinimizer", function() { return CSidebarMinimizer; });
/* concated harmony reexport CSidebarNav */__webpack_require__.d(__webpack_exports__, "CSidebarNav", function() { return CSidebarNav; });
/* concated harmony reexport CSidebarNavDivider */__webpack_require__.d(__webpack_exports__, "CSidebarNavDivider", function() { return CSidebarNavDivider; });
/* concated harmony reexport CSidebarNavDropdown */__webpack_require__.d(__webpack_exports__, "CSidebarNavDropdown", function() { return CSidebarNavDropdown; });
/* concated harmony reexport CSidebarNavItem */__webpack_require__.d(__webpack_exports__, "CSidebarNavItem", function() { return CSidebarNavItem; });
/* concated harmony reexport CSidebarNavTitle */__webpack_require__.d(__webpack_exports__, "CSidebarNavTitle", function() { return CSidebarNavTitle; });
/* concated harmony reexport CWrapper */__webpack_require__.d(__webpack_exports__, "CWrapper", function() { return CWrapper; });
/* concated harmony reexport CToast */__webpack_require__.d(__webpack_exports__, "CToast", function() { return CToast; });
/* concated harmony reexport CToaster */__webpack_require__.d(__webpack_exports__, "CToaster", function() { return CToaster; });
/* concated harmony reexport CToggler */__webpack_require__.d(__webpack_exports__, "CToggler", function() { return CToggler; });
/* concated harmony reexport CWidgetProgress */__webpack_require__.d(__webpack_exports__, "CWidgetProgress", function() { return CWidgetProgress; });
/* concated harmony reexport CWidgetIcon */__webpack_require__.d(__webpack_exports__, "CWidgetIcon", function() { return CWidgetIcon; });
/* concated harmony reexport CWidgetBrand */__webpack_require__.d(__webpack_exports__, "CWidgetBrand", function() { return CWidgetBrand; });
/* concated harmony reexport CWidgetProgressIcon */__webpack_require__.d(__webpack_exports__, "CWidgetProgressIcon", function() { return CWidgetProgressIcon; });
/* concated harmony reexport CWidgetDropdown */__webpack_require__.d(__webpack_exports__, "CWidgetDropdown", function() { return CWidgetDropdown; });
/* concated harmony reexport CWidgetSimple */__webpack_require__.d(__webpack_exports__, "CWidgetSimple", function() { return CWidgetSimple; });
/* concated harmony reexport CIcon */__webpack_require__.d(__webpack_exports__, "CIcon", function() { return CIconRaw; });
/* concated harmony reexport CPopover */__webpack_require__.d(__webpack_exports__, "CPopover", function() { return CPopover; });
/* concated harmony reexport CTooltip */__webpack_require__.d(__webpack_exports__, "CTooltip", function() { return CTooltip; });
/* concated harmony reexport CEmitRootEvent */__webpack_require__.d(__webpack_exports__, "CEmitRootEvent", function() { return CEmitRootEvent; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "fdf6":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a693");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("497e5532", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

/******/ });
});
//# sourceMappingURL=coreui-vue.umd.js.map