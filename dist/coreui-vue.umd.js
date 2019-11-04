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

/***/ "0206":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".toast[data-v-55dc7f9b]{opacity:1}.toast.full[data-v-55dc7f9b]{max-width:100%}.toast[data-v-55dc7f9b]:last-child{margin-bottom:.75rem}.fade-enter-active[data-v-55dc7f9b]{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-leave-active[data-v-55dc7f9b]{-webkit-transition:opacity 2s;transition:opacity 2s}.fade-enter[data-v-55dc7f9b],.fade-leave-to[data-v-55dc7f9b]{opacity:0}", ""]);


/***/ }),

/***/ "0faf":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("c534");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("61f328c6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "1caf":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ddcb");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("4cf2c4b5", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "1d81":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CCarousel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0faf");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CCarousel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CCarousel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CCarousel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1fb5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "2156":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CAlert_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3d91");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CAlert_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CAlert_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CAlert_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2410":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var clone = (function() {
'use strict';

function _instanceof(obj, type) {
  return type != null && obj instanceof type;
}

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no `Map`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (_instanceof(parent, nativeMap)) {
      child = new nativeMap();
    } else if (_instanceof(parent, nativeSet)) {
      child = new nativeSet();
    } else if (_instanceof(parent, nativePromise)) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      if (Buffer.allocUnsafe) {
        // Node.js >= 4.5.0
        child = Buffer.allocUnsafe(parent.length);
      } else {
        // Older Node.js versions
        child = new Buffer(parent.length);
      }
      parent.copy(child);
      return child;
    } else if (_instanceof(parent, Error)) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (_instanceof(parent, nativeMap)) {
      parent.forEach(function(value, key) {
        var keyChild = _clone(key, depth - 1);
        var valueChild = _clone(value, depth - 1);
        child.set(keyChild, valueChild);
      });
    }
    if (_instanceof(parent, nativeSet)) {
      parent.forEach(function(value) {
        var entryChild = _clone(value, depth - 1);
        child.add(entryChild);
      });
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if ( true && module.exports) {
  module.exports = clone;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("b639").Buffer))

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
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
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
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
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

/***/ "36e4":
/***/ (function(module, exports, __webpack_require__) {

/*!
  * CoreUI v3.0.0-beta.0 (https://coreui.io)
  * Copyright 2019 Łukasz Holeczek
  * Licensed under MIT (https://coreui.io)
  */
(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, function (exports) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v3.0.0-beta.0): classes.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */
  var sidebarCssClasses = ['sidebar-show', 'sidebar-sm-show', 'sidebar-md-show', 'sidebar-lg-show', 'sidebar-xl-show'];
  var asideMenuCssClasses = ['aside-menu-show', 'aside-menu-sm-show', 'aside-menu-md-show', 'aside-menu-lg-show', 'aside-menu-xl-show'];
  var validBreakpoints = ['sm', 'md', 'lg', 'xl'];
  function checkBreakpoint(breakpoint, list) {
    return list.indexOf(breakpoint) > -1;
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v3.0.0-beta.0): deep-objects-merge.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */
  var deepObjectsMerge = function deepObjectsMerge(target, source) {
    // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
    for (var _i = 0, _Object$keys = Object.keys(source); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];

      if (source[key] instanceof Object) {
        Object.assign(source[key], deepObjectsMerge(target[key], source[key]));
      }
    } // Join `target` and modified `source`


    Object.assign(target || {}, source);
    return target;
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v3.0.0-beta.0): get-css-custom-properties.js
   * Licensed under MIT (https://coreui.io/license)
   * @returns {string} css custom property name
   * --------------------------------------------------------------------------
   */
  var getCssCustomProperties = function getCssCustomProperties() {
    var cssCustomProperties = {};
    var sheets = document.styleSheets;
    var cssText = '';

    for (var i = sheets.length - 1; i > -1; i--) {
      var rules = sheets[i].cssRules;

      for (var j = rules.length - 1; j > -1; j--) {
        if (rules[j].selectorText === '.ie-custom-properties') {
          // eslint-disable-next-line prefer-destructuring
          cssText = rules[j].cssText;
          break;
        }
      }

      if (cssText) {
        break;
      }
    } // eslint-disable-next-line unicorn/prefer-string-slice


    cssText = cssText.substring(cssText.lastIndexOf('{') + 1, cssText.lastIndexOf('}'));
    cssText.split(';').forEach(function (property) {
      if (property) {
        var name = property.split(': ')[0];
        var value = property.split(': ')[1];

        if (name && value) {
          cssCustomProperties["--" + name.trim()] = value.trim();
        }
      }
    });
    return cssCustomProperties;
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v3.0.0-beta.0): get-style.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */
  var minIEVersion = 10;

  var isIE1x = function isIE1x() {
    return Boolean(document.documentMode) && document.documentMode >= minIEVersion;
  };

  var isCustomProperty = function isCustomProperty(property) {
    return property.match(/^--.*/i);
  };

  var getStyle = function getStyle(property, element) {
    if (element === void 0) {
      element = document.body;
    }

    var style;

    if (isCustomProperty(property) && isIE1x()) {
      var cssCustomProperties = getCssCustomProperties();
      style = cssCustomProperties[property];
    } else {
      style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
    }

    return style;
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v3.0.0-beta.0): get-color.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  var getColor = function getColor(rawProperty, element) {
    if (element === void 0) {
      element = document.body;
    }

    var property = "--" + rawProperty;
    var style = getStyle(property, element);
    return style ? style : rawProperty;
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v3.0.0-beta.0): hex-to-rgb.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var hexToRgb = function hexToRgb(color) {
    if (typeof color === 'undefined') {
      throw new TypeError('Hex color is not defined');
    }

    var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

    if (!hex) {
      throw new Error(color + " is not a valid hex color");
    }

    var r;
    var g;
    var b;

    if (color.length === 7) {
      r = parseInt(color.substring(1, 3), 16);
      g = parseInt(color.substring(3, 5), 16);
      b = parseInt(color.substring(5, 7), 16);
    } else {
      r = parseInt(color.substring(1, 2), 16);
      g = parseInt(color.substring(2, 3), 16);
      b = parseInt(color.substring(3, 5), 16);
    }

    return "rgba(" + r + ", " + g + ", " + b + ")";
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v3.0.0-beta.0): hex-to-rgba.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var hexToRgba = function hexToRgba(color, opacity) {
    if (opacity === void 0) {
      opacity = 100;
    }

    if (typeof color === 'undefined') {
      throw new TypeError('Hex color is not defined');
    }

    var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

    if (!hex) {
      throw new Error(color + " is not a valid hex color");
    }

    var r;
    var g;
    var b;

    if (color.length === 7) {
      r = parseInt(color.substring(1, 3), 16);
      g = parseInt(color.substring(3, 5), 16);
      b = parseInt(color.substring(5, 7), 16);
    } else {
      r = parseInt(color.substring(1, 2), 16);
      g = parseInt(color.substring(2, 3), 16);
      b = parseInt(color.substring(3, 5), 16);
    }

    return "rgba(" + r + ", " + g + ", " + b + ", " + opacity / 100 + ")";
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v3.0.0-beta.0): rgb-to-hex.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var rgbToHex = function rgbToHex(color) {
    if (typeof color === 'undefined') {
      throw new TypeError('Hex color is not defined');
    }

    if (color === 'transparent') {
      return '#00000000';
    }

    var rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

    if (!rgb) {
      throw new Error(color + " is not a valid rgb color");
    }

    var r = "0" + parseInt(rgb[1], 10).toString(16);
    var g = "0" + parseInt(rgb[2], 10).toString(16);
    var b = "0" + parseInt(rgb[3], 10).toString(16);
    return "#" + r.slice(-2) + g.slice(-2) + b.slice(-2);
  };

  exports.asideMenuCssClasses = asideMenuCssClasses;
  exports.checkBreakpoint = checkBreakpoint;
  exports.deepObjectsMerge = deepObjectsMerge;
  exports.getColor = getColor;
  exports.getStyle = getStyle;
  exports.hexToRgb = hexToRgb;
  exports.hexToRgba = hexToRgba;
  exports.rgbToHex = rgbToHex;
  exports.sidebarCssClasses = sidebarCssClasses;
  exports.validBreakpoints = validBreakpoints;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=coreui-utilities.js.map


/***/ }),

/***/ "3d91":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e300");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("7df46d4f", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "3dbf":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".fade-enter-active,.fade-leave-active{-webkit-transition:opacity .3s;transition:opacity .3s}.fade-enter,.fade-leave-to{opacity:0}", ""]);


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

/***/ "6685":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".c-scroll-area[data-v-f7cd7c72]{height:100%}", ""]);


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

/***/ "877c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6685");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("5ec7ec1b", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "89dc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CTabs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e829");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CTabs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CTabs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CTabs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "9152":
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "9681":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CDataTable_vue_vue_type_style_index_0_id_d490c5f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1caf");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CDataTable_vue_vue_type_style_index_0_id_d490c5f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CDataTable_vue_vue_type_style_index_0_id_d490c5f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CDataTable_vue_vue_type_style_index_0_id_d490c5f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9c30":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_perfect_scrollbar_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ac1a");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_perfect_scrollbar_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_perfect_scrollbar_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_perfect_scrollbar_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a19c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CToast_vue_vue_type_style_index_0_id_55dc7f9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cba8");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CToast_vue_vue_type_style_index_0_id_55dc7f9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CToast_vue_vue_type_style_index_0_id_55dc7f9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CToast_vue_vue_type_style_index_0_id_55dc7f9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a635":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CSidebarNav_vue_vue_type_style_index_0_id_f7cd7c72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("877c");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CSidebarNav_vue_vue_type_style_index_0_id_f7cd7c72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CSidebarNav_vue_vue_type_style_index_0_id_f7cd7c72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CSidebarNav_vue_vue_type_style_index_0_id_f7cd7c72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ac1a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("c235");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("45bbb95e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "b639":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__("1fb5")
var ieee754 = __webpack_require__("9152")
var isArray = __webpack_require__("e3db")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c235":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{height:15px;bottom:0}.ps__rail-x,.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;position:absolute}.ps__rail-y{width:15px;right:0}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px}.ps__thumb-x,.ps__thumb-y{background-color:#aaa;border-radius:6px;position:absolute}.ps__thumb-y{transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}", ""]);


/***/ }),

/***/ "c534":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".carousel-inner,.carousel-item{height:inherit}", ""]);


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

/***/ "cba8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0206");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("471d2f28", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "ddcb":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".transparent[data-v-d490c5f4]{opacity:.4}.icon-transition[data-v-d490c5f4]{-webkit-transition:transform .3s;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.arrow-position[data-v-d490c5f4]{right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.rotate-icon[data-v-d490c5f4]{-webkit-transform:translateY(-50%) rotate(-180deg);transform:translateY(-50%) rotate(-180deg)}", ""]);


/***/ }),

/***/ "e300":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".fade-enter-active,.fade-leave-active{-webkit-transition:opacity .3s;transition:opacity .3s}.fade-enter,.fade-leave-to{opacity:0}", ""]);


/***/ }),

/***/ "e3db":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "e829":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3dbf");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("52014f0a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "f0bd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.0
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

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
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
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

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
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

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
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
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

/***/ "f72e":
/***/ (function(module, exports) {

module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("5ca1");
var context = __webpack_require__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "454f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("46a7");
var $Object = __webpack_require__("584a").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "46a7":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("8e60"), 'Object', { defineProperty: __webpack_require__("d9f6").f });


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("5ca1");
var $includes = __webpack_require__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("9c6c")('includes');


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "85f2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("454f");

/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var toInteger = __webpack_require__("4588");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "aebd":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("aae3");
var defined = __webpack_require__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


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

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6d8e4675-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./CIcon.vue?vue&type=template&id=017f04da&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.name || _vm.content)?_c('svg',{class:_vm.computedClasses,attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":_vm.viewBox},domProps:{"innerHTML":_vm._s(_vm.icon.svgContent)}}):_c(_vm.fontIconTag,{tag:"component",class:_vm.computedClasses})}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("85f2");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./CIcon.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_CIconvue_type_script_lang_js_ = ({
  name: 'CIcon',
  //This object contains icons added before component registration
  icons: {},
  props: {
    name: String,
    content: [String, Array],
    // fill: String,
    // background: String,
    size: {
      type: String,
      validator: function validator(size) {
        return ['sm', 'lg', 'xl', 'custom-size'].includes(size);
      }
    },
    customClasses: [String, Array, Object],
    fontIconTag: {
      type: String,
      default: 'i'
    }
  },
  computed: {
    iconName: function iconName() {
      var iconNameIsKebabCase = this.name && this.name.includes('-');
      return iconNameIsKebabCase ? this.toCamelCase(this.name) : this.name;
    },
    code: function code() {
      return this.content || this.$options.icons[this.iconName];
    },
    icon: function icon() {
      if (Array.isArray(this.code)) {
        var coordinates = this.code.length > 1 ? this.code[0] : '64 64';
        var svgContent = this.code.length > 1 ? this.code[1] : this.code[0];
        return {
          coordinates: coordinates,
          svgContent: svgContent
        };
      }

      return {
        coordinates: '64 64',
        svgContent: this.code
      };
    },
    viewBox: function viewBox() {
      return this.$attrs.viewBox || "0 0 ".concat(this.icon.coordinates);
    },
    // style () {
    //   return {
    //     fill: this.fill || 'currentColor',
    //     background: this.background
    //   }
    // },
    computedSize: function computedSize() {
      return this.$attrs.width || this.$attrs.height ? 'custom-size' : this.size;
    },
    computedClasses: function computedClasses() {
      return this.customClasses || ['c-icon', _defineProperty({}, "c-icon-".concat(this.computedSize), this.computedSize)];
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
// CONCATENATED MODULE: ./CIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var CIconvue_type_script_lang_js_ = (lib_vue_loader_options_CIconvue_type_script_lang_js_); 
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
      // register for functioal component in vue file
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

// CONCATENATED MODULE: ./CIcon.vue





/* normalize component */

var component = normalizeComponent(
  CIconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CIcon = (component.exports);
// CONCATENATED MODULE: ./index.js


var CIconPlugin = {
  install: function install(Vue, customIconSet) {
    CIcon.icons = customIconSet;
    Vue.component('CIcon', CIcon);
  }
};

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport CIcon */__webpack_require__.d(__webpack_exports__, "CIcon", function() { return CIcon; });
/* concated harmony reexport CIconPlugin */__webpack_require__.d(__webpack_exports__, "CIconPlugin", function() { return CIconPlugin; });




/***/ })

/******/ });
//# sourceMappingURL=coreui-icons-vue.common.js.map

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var form_mixins_namespaceObject = {};
__webpack_require__.r(form_mixins_namespaceObject);
__webpack_require__.d(form_mixins_namespaceObject, "safeId", function() { return safeId; });
__webpack_require__.d(form_mixins_namespaceObject, "wrapperComputedProps", function() { return wrapperComputedProps; });
__webpack_require__.d(form_mixins_namespaceObject, "validationComputedProps", function() { return validationComputedProps; });
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
__webpack_require__.d(components_namespaceObject, "CEmbed", function() { return CEmbed; });
__webpack_require__.d(components_namespaceObject, "CFooter", function() { return CFooter; });
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
__webpack_require__.d(components_namespaceObject, "CHeader", function() { return CHeader; });
__webpack_require__.d(components_namespaceObject, "CHeaderBrand", function() { return CHeaderBrand; });
__webpack_require__.d(components_namespaceObject, "CHeaderNav", function() { return CHeaderNav; });
__webpack_require__.d(components_namespaceObject, "CHeaderNavItem", function() { return CHeaderNavItem; });
__webpack_require__.d(components_namespaceObject, "CHeaderNavLink", function() { return CHeaderNavLink; });
__webpack_require__.d(components_namespaceObject, "CSubheader", function() { return CSubheader; });
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
__webpack_require__.d(components_namespaceObject, "CSidebarNavLink", function() { return CSidebarNavLink; });
__webpack_require__.d(components_namespaceObject, "CSidebarNavTitle", function() { return CSidebarNavTitle; });
__webpack_require__.d(components_namespaceObject, "CSpinner", function() { return CSpinner; });
__webpack_require__.d(components_namespaceObject, "CSwitch", function() { return CSwitch; });
__webpack_require__.d(components_namespaceObject, "CDataTable", function() { return CDataTable; });
__webpack_require__.d(components_namespaceObject, "CTab", function() { return CTab; });
__webpack_require__.d(components_namespaceObject, "CTabs", function() { return CTabs; });
__webpack_require__.d(components_namespaceObject, "CToast", function() { return CToast; });
__webpack_require__.d(components_namespaceObject, "CToaster", function() { return CToaster; });
__webpack_require__.d(components_namespaceObject, "CToggler", function() { return CToggler; });
__webpack_require__.d(components_namespaceObject, "CWidgetProgress", function() { return CWidgetProgress; });
__webpack_require__.d(components_namespaceObject, "CWidgetIcon", function() { return CWidgetIcon; });
__webpack_require__.d(components_namespaceObject, "CWidgetBrand", function() { return CWidgetBrand; });
__webpack_require__.d(components_namespaceObject, "CWidgetProgressIcon", function() { return CWidgetProgressIcon; });
__webpack_require__.d(components_namespaceObject, "CWidgetDropdown", function() { return CWidgetDropdown; });
__webpack_require__.d(components_namespaceObject, "CWidgetHeaderDetails", function() { return CWidgetHeaderDetails; });
__webpack_require__.d(components_namespaceObject, "CWidgetSimple", function() { return CWidgetSimple; });
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

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/alert/CAlert.vue?vue&type=template&id=1ea68802&
var CAlertvue_type_template_id_1ea68802_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.fade ? 'fade' : null,"appear":true}},[(_vm.state)?_c('div',{class:_vm.alertClasses,attrs:{"role":"alert","aria-live":"polite","aria-atomic":"true"}},[(_vm.closeButton)?_c('CButtonClose',{on:{"click":function($event){return _vm.dismiss()}}}):_vm._e(),_vm._t("default")],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/alert/CAlert.vue?vue&type=template&id=1ea68802&

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
      // register for functioal component in vue file
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
// EXTERNAL MODULE: ./src/components/alert/CAlert.vue?vue&type=style&index=0&lang=css&
var CAlertvue_type_style_index_0_lang_css_ = __webpack_require__("2156");

// CONCATENATED MODULE: ./src/components/alert/CAlert.vue






/* normalize component */

var CAlert_component = normalizeComponent(
  alert_CAlertvue_type_script_lang_js_,
  CAlertvue_type_template_id_1ea68802_render,
  staticRenderFns,
  false,
  null,
  null,
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
      default: 'active'
    },
    append: Boolean,
    event: {
      type: [String, Array],
      default: 'click'
    },
    exact: Boolean,
    exactActiveClass: {
      type: String,
      default: 'active'
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
    } else {
      if (typeof suppliedHandler === 'function') {
        suppliedHandler.apply(void 0, arguments);
      }
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



var CBadgevue_type_script_lang_js_props = Object.assign(CLinkvue_type_script_lang_js_props, {
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


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/breadcrumb/CBreadcrumb.vue?vue&type=template&id=82c05f04&
var CBreadcrumbvue_type_template_id_82c05f04_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ol',{staticClass:"breadcrumb"},[_vm._l((_vm.linkItems),function(item,index){return _c('li',{key:index,class:[item.addClasses, _vm.sharedClasses, _vm.addLinkClasses],attrs:{"role":"presentation"}},[_c('CLink',_vm._b({},'CLink',Object.assign({}, item, { addClasses: null, text: null }),false),[_vm._v(" "+_vm._s(item.text)+" ")])],1)}),(_vm.lastItem)?_c('li',{class:['active', _vm.lastItem.addClasses, _vm.sharedClasses, _vm.addLastItemClasses],attrs:{"role":"presentation"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.lastItem.text)}})]):_vm._e(),_vm._t("default")],2)}
var CBreadcrumbvue_type_template_id_82c05f04_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/breadcrumb/CBreadcrumb.vue?vue&type=template&id=82c05f04&

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
    }
  }
});
// CONCATENATED MODULE: ./src/components/breadcrumb/CBreadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var breadcrumb_CBreadcrumbvue_type_script_lang_js_ = (CBreadcrumbvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/breadcrumb/CBreadcrumb.vue





/* normalize component */

var CBreadcrumb_component = normalizeComponent(
  breadcrumb_CBreadcrumbvue_type_script_lang_js_,
  CBreadcrumbvue_type_template_id_82c05f04_render,
  CBreadcrumbvue_type_template_id_82c05f04_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CBreadcrumb = (CBreadcrumb_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/breadcrumb/CBreadcrumbRouter.vue?vue&type=template&id=811c5d4a&
var CBreadcrumbRoutervue_type_template_id_811c5d4a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CBreadcrumb',_vm._b({},'CBreadcrumb',_vm.props,false),[_vm._t("default")],2)}
var CBreadcrumbRoutervue_type_template_id_811c5d4a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/breadcrumb/CBreadcrumbRouter.vue?vue&type=template&id=811c5d4a&

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



// CONCATENATED MODULE: ./src/utils/pick-by-keys.js
function pickByKeys(originalObject, keys) {
  var newObj = {};

  for (var i = 0; i < keys.length; i++) {
    newObj[keys[i]] = originalObject[keys[i]];
  }

  return newObj;
}
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
  return _ref = {}, CButtonvue_type_script_lang_js_defineProperty(_ref, "btn-".concat(outlineSuffix).concat(props.color), props.color), CButtonvue_type_script_lang_js_defineProperty(_ref, "btn-".concat(props.size), Boolean(props.size)), CButtonvue_type_script_lang_js_defineProperty(_ref, "btn-ghost-".concat(props.color), props.variant === 'ghost'), CButtonvue_type_script_lang_js_defineProperty(_ref, 'btn-block', props.block), CButtonvue_type_script_lang_js_defineProperty(_ref, 'btn-pill', props.shape === 'pill'), CButtonvue_type_script_lang_js_defineProperty(_ref, 'btn-square', props.shape === 'square'), CButtonvue_type_script_lang_js_defineProperty(_ref, 'disabled', props.disabled), CButtonvue_type_script_lang_js_defineProperty(_ref, 'active', props.pressed), _ref;
}

function computePassedProps(props) {
  if (!CButtonvue_type_script_lang_js_isLink(props)) {
    return null;
  }

  return pickByKeys(props, Object.keys(propsFactory()));
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
          // Send .sync updates to any "pressed" prop (if .sync listeners)
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
      class: [!props.vertical ? 'btn-group' : 'btn-group-vertical', CButtonGroupvue_type_script_lang_js_defineProperty({}, "btn-group-".concat(props.size), Boolean(props.size))],
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





// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/callout/CCallout.vue?vue&type=template&id=8fc790c6&
var CCalloutvue_type_template_id_8fc790c6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("c-callout " + (_vm.color ? 'c-callout-' + _vm.color : ''))},[_vm._t("default")],2)}
var CCalloutvue_type_template_id_8fc790c6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/callout/CCallout.vue?vue&type=template&id=8fc790c6&

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


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/carousel/CCarousel.vue?vue&type=template&id=6082e4f0&
var CCarouselvue_type_template_id_6082e4f0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"carousel slide",style:({ height: _vm.height || 'auto' })},[(_vm.indicators)?_c('ol',{class:_vm.indicatorClasses},_vm._l((_vm.items.length),function(index,key){return _c('li',{key:key,class:{ 'active': _vm.activated === key },on:{"click":function($event){return _vm.setItem(key)}}})}),0):_vm._e(),_c('div',{staticClass:"carousel-inner"},[_vm._t("default")],2),(_vm.arrows)?[_c('a',{staticClass:"carousel-control-prev",on:{"click":_vm.previousItem}},[_c('span',{staticClass:"carousel-control-prev-icon",attrs:{"aria-label":"Previous"}})]),_c('a',{staticClass:"carousel-control-next",on:{"click":_vm.nextItem}},[_c('span',{staticClass:"carousel-control-next-icon",attrs:{"aria-label":"Next"}})])]:_vm._e()],2)}
var CCarouselvue_type_template_id_6082e4f0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/carousel/CCarousel.vue?vue&type=template&id=6082e4f0&

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
// EXTERNAL MODULE: ./src/components/carousel/CCarousel.vue?vue&type=style&index=0&lang=css&
var CCarouselvue_type_style_index_0_lang_css_ = __webpack_require__("1d81");

// CONCATENATED MODULE: ./src/components/carousel/CCarousel.vue






/* normalize component */

var CCarousel_component = normalizeComponent(
  carousel_CCarouselvue_type_script_lang_js_,
  CCarouselvue_type_template_id_6082e4f0_render,
  CCarouselvue_type_template_id_6082e4f0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCarousel = (CCarousel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/carousel/CCarouselItem.vue?vue&type=template&id=643514fc&
var CCarouselItemvue_type_template_id_643514fc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.itemClasses},[(_vm.image)?_c('CImg',_vm._b({staticClass:"d-block w-100 h-100 img-fluid"},'CImg',_vm.computedImage,false)):_vm._e(),_vm._t("default",[(_vm.captionHeader || _vm.captionText)?_c('div',{staticClass:"carousel-caption"},[_c('h3',[_vm._v(_vm._s(_vm.captionHeader))]),_c('p',[_vm._v(_vm._s(_vm.captionText))])]):_vm._e()])],2)}
var CCarouselItemvue_type_template_id_643514fc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/carousel/CCarouselItem.vue?vue&type=template&id=643514fc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/image/CImg.vue?vue&type=template&id=91e4e712&
var CImgvue_type_template_id_91e4e712_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.src && _vm.isActive)?_c('img',{class:_vm.imageClasses,attrs:{"src":_vm.src,"alt":_vm.alt,"width":_vm.width,"height":_vm.height}}):_c('svg',{class:_vm.imageClasses,style:({'background-color': _vm.isActive ? _vm.placeholderColor : 'transparent' }),attrs:{"width":_vm.width,"height":_vm.height}})}
var CImgvue_type_template_id_91e4e712_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/image/CImg.vue?vue&type=template&id=91e4e712&

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
      class: [(_ref2 = {}, CCardHeadervue_type_script_lang_js_defineProperty(_ref2, "text-".concat(props.align), Boolean(props.align)), CCardHeadervue_type_script_lang_js_defineProperty(_ref2, "bg-".concat(props.color), Boolean(props.color)), CCardHeadervue_type_script_lang_js_defineProperty(_ref2, "border-".concat(props.borderColor), Boolean(props.borderColor)), CCardHeadervue_type_script_lang_js_defineProperty(_ref2, "text-".concat(props.textColor), Boolean(props.textColor)), _ref2)]
    }), children || [h('div', {
      domProps: {
        innerHTML: props.headerHtml
      }
    })]);
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
      class: [(_ref2 = {}, CCardBodyvue_type_script_lang_js_defineProperty(_ref2, "bg-".concat(props.color), Boolean(props.color)), CCardBodyvue_type_script_lang_js_defineProperty(_ref2, "border-".concat(props.borderColor), Boolean(props.borderColor)), CCardBodyvue_type_script_lang_js_defineProperty(_ref2, "text-".concat(props.textColor), Boolean(props.textColor)), CCardBodyvue_type_script_lang_js_defineProperty(_ref2, "text-".concat(props.align), Boolean(props.align)), _ref2)]
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
      class: [(_ref2 = {}, CCardFootervue_type_script_lang_js_defineProperty(_ref2, "text-".concat(props.align), Boolean(props.align)), CCardFootervue_type_script_lang_js_defineProperty(_ref2, "bg-".concat(props.color), Boolean(props.color)), CCardFootervue_type_script_lang_js_defineProperty(_ref2, "border-".concat(props.borderColor), Boolean(props.borderColor)), CCardFootervue_type_script_lang_js_defineProperty(_ref2, "text-".concat(props.textColor), Boolean(props.textColor)), _ref2)]
    }), children || [h('div', {
      domProps: {
        innerHTML: props.footerHtml
      }
    })]);
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/card/CCard.vue?vue&type=script&lang=js&
function CCardvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var CCardvue_type_script_lang_js_props = Object.assign(shared_card_props, {
  headerHtml: String,
  bodyHtml: String,
  footerHtml: String,
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
    var header = h(false);
    var main = slots().default;
    var footer = h(false);

    if (props.headerHtml) {
      header = h(CCardHeader, {
        domProps: {
          innerHTML: props.headerHtml
        }
      });
    }

    if (main === undefined && props.bodyHtml) {
      main = h(CCardBody, {
        domProps: {
          innerHTML: props.bodyHtml
        }
      });
    } else if (props.bodyWrapper) {
      main = h(CCardBody, main);
    }

    if (props.footerHtml) {
      footer = h(CCardFooter, {
        domProps: {
          innerHTML: props.footerHtml
        }
      });
    }

    return h(props.tag || 'div', a(data, {
      staticClass: 'card',
      class: (_class = {}, CCardvue_type_script_lang_js_defineProperty(_class, "card-accent-".concat(props.accentColor), props.accentColor), CCardvue_type_script_lang_js_defineProperty(_class, "text-".concat(props.align), props.align), CCardvue_type_script_lang_js_defineProperty(_class, "bg-".concat(props.color), props.color), CCardvue_type_script_lang_js_defineProperty(_class, "border-".concat(props.borderColor), props.borderColor), CCardvue_type_script_lang_js_defineProperty(_class, "text-".concat(props.textColor), props.textColor), _class)
    }), [header, main, footer]);
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/card/CCardGroup.vue?vue&type=script&lang=js&

/* harmony default export */ var CCardGroupvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CCardGroup',
  props: {
    tag: String,
    deck: Boolean,
    columns: Boolean
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag || 'div', a(data, {
      staticClass: "card-".concat(props.columns ? 'columns' : props.deck ? 'deck' : 'group')
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
    tag: String
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag || 'div', a(data, {
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
    tag: String
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag || 'h6', a(data, {
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
    tag: String
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag || 'p', a(data, {
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
    tag: String
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag || 'h4', a(data, {
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












// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/collapse/CCollapse.vue?vue&type=template&id=519d2c88&
var CCollapsevue_type_template_id_519d2c88_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{ 'navbar-collapse': this.navbar }},[_vm._t("default")],2)}
var CCollapsevue_type_template_id_519d2c88_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/collapse/CCollapse.vue?vue&type=template&id=519d2c88&

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
        var time = val ? (height - current) / height : current / height;
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
  CCollapsevue_type_template_id_519d2c88_render,
  CCollapsevue_type_template_id_519d2c88_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCollapse = (CCollapse_component.exports);
// CONCATENATED MODULE: ./src/components/collapse/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/dropdown/CDropdown.vue?vue&type=template&id=dce1c2e6&
var CDropdownvue_type_template_id_dce1c2e6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.inNav ? 'li' : 'div',{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:(_vm.hide),expression:"hide"}],tag:"component",class:_vm.computedDropdownClasses,on:{"click":function($event){return _vm.checkClick($event)}}},[_vm._t("toggler",[_c(_vm.togglerTag,_vm._g(_vm._b({tag:"component",class:_vm.computedTogglerClasses},'component',_vm.splittedToggler ? '' : _vm.togglerAttrs,false),{ click: _vm.splittedToggler ? _vm.hide : _vm.toggle }),[_vm._t("toggler-content",[_vm._v(_vm._s(_vm.togglerText))])],2),(_vm.splittedToggler)?_c('button',_vm._b({staticClass:"dropdown-toggle dropdown-toggle-split",class:_vm.computedTogglerClasses,on:{"click":_vm.toggle}},'button',_vm.togglerAttrs,false)):_vm._e()]),_c('div',{ref:"menu",class:_vm.computedMenuClasses},[_vm._t("default")],2)],2)}
var CDropdownvue_type_template_id_dce1c2e6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/dropdown/CDropdown.vue?vue&type=template&id=dce1c2e6&

// EXTERNAL MODULE: ./node_modules/popper.js/dist/esm/popper.js
var popper = __webpack_require__("f0bd");

// EXTERNAL MODULE: ./node_modules/vue-clickaway2/dist/vue-clickaway.common.js
var vue_clickaway_common = __webpack_require__("723b");

// EXTERNAL MODULE: ./node_modules/@coreui/coreui/dist/js/coreui-utilities.js
var coreui_utilities = __webpack_require__("36e4");

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
    offset: Number,
    placement: {
      type: String,
      validator: function validator(position) {
        return ['', 'top-end', 'top', 'top-start', 'bottom-end', 'bottom', 'bottom-start', 'right-start', 'right', 'right-end', 'left-start', 'left', 'left-end'].includes(position);
      },
      default: 'bottom-start'
    },
    flip: {
      type: Boolean,
      default: true
    },
    popperConfig: Object
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
        _this._popper = new popper["a" /* default */](_this.$el.firstElementChild, _this.$refs.menu, _this.computedPopperConfig);
      });
    }
  },
  computed: {
    generatedPopperConfig: function generatedPopperConfig() {
      return {
        placement: this.placement,
        modifiers: {
          offset: {
            offset: this.offset || 0
          },
          flip: {
            enabled: this.flip
          }
        }
      };
    },
    computedPopperConfig: function computedPopperConfig() {
      return Object(coreui_utilities["deepObjectsMerge"])(this.generatedPopperConfig, this.popperConfig || {});
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
  CDropdownvue_type_template_id_dce1c2e6_render,
  CDropdownvue_type_template_id_dce1c2e6_staticRenderFns,
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


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/footer/CFooter.vue?vue&type=template&id=7a3c95e6&
var CFootervue_type_template_id_7a3c95e6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",class:_vm.classList},[_vm._t("default")],2)}
var CFootervue_type_template_id_7a3c95e6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/footer/CFooter.vue?vue&type=template&id=7a3c95e6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/footer/CFooter.vue?vue&type=script&lang=js&
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
// CONCATENATED MODULE: ./src/components/footer/CFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer_CFootervue_type_script_lang_js_ = (CFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/footer/CFooter.vue





/* normalize component */

var CFooter_component = normalizeComponent(
  footer_CFootervue_type_script_lang_js_,
  CFootervue_type_template_id_7a3c95e6_render,
  CFootervue_type_template_id_7a3c95e6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CFooter = (CFooter_component.exports);
// CONCATENATED MODULE: ./src/components/footer/index.js


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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CFormGroup.vue?vue&type=template&id=08dba86f&functional=true&
var CFormGroupvue_type_template_id_08dba86f_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('div',{class:[_vm.data.class, _vm.data.staticClass],style:([_vm.data.style, _vm.data.staticStyle]),attrs:{"role":"group"}},[(_vm.props.wrapperClasses)?[_vm._t("label"),_c('div',{class:_vm.props.wrapperClasses},[(_vm.props.prependHtml || _vm.$slots.prepend)?_c('div',{staticClass:"input-group-prepend"},[_vm._t("prepend",[_c('span',{staticClass:"input-group-text",domProps:{"innerHTML":_vm._s(_vm.props.prependHtml)}})])],2):_vm._e(),_vm._t("input"),_vm._t("label-after-input"),(_vm.props.appendHtml || _vm.$slots.append)?_c('div',{staticClass:"input-group-append"},[_vm._t("append",[_c('span',{staticClass:"input-group-text",domProps:{"innerHTML":_vm._s(_vm.props.appendHtml)}})])],2):_vm._e(),_vm._t("valid-feedback",[(_vm.props.validFeedback)?_c('div',{class:_vm.props.tooltipFeedback ? 'valid-tooltip' : 'valid-feedback',domProps:{"textContent":_vm._s(_vm.props.validFeedback)}}):_vm._e()]),_vm._t("invalid-feedback",[(_vm.props.invalidFeedback)?_c('div',{class:_vm.props.tooltipFeedback ? 'invalid-tooltip' : 'invalid-feedback',domProps:{"textContent":_vm._s(_vm.props.invalidFeedback)}}):_vm._e()]),_vm._t("description",[(_vm.props.description)?_c('small',{staticClass:"form-text text-muted w-100",domProps:{"textContent":_vm._s(_vm.props.description)}}):_vm._e()])],2)]:[_vm._t("label"),(_vm.props.prependHtml || _vm.$slots.prepend)?_c('div',{staticClass:"input-group-prepend"},[_vm._t("prepend",[_c('span',{staticClass:"input-group-text",domProps:{"innerHTML":_vm._s(_vm.props.prependHtml)}})])],2):_vm._e(),_vm._t("input"),_vm._t("label-after-input"),(_vm.props.appendHtml || _vm.$slots.append)?_c('div',{staticClass:"input-group-append"},[_vm._t("append",[_c('span',{staticClass:"input-group-text",domProps:{"innerHTML":_vm._s(_vm.props.appendHtml)}})])],2):_vm._e(),_vm._t("valid-feedback",[(_vm.props.validFeedback)?_c('div',{class:_vm.props.tooltipFeedback ? 'valid-tooltip' : 'valid-feedback',domProps:{"textContent":_vm._s(_vm.props.validFeedback)}}):_vm._e()]),_vm._t("invalid-feedback",[(_vm.props.invalidFeedback)?_c('div',{class:_vm.props.tooltipFeedback ? 'invalid-tooltip' : 'invalid-feedback',domProps:{"textContent":_vm._s(_vm.props.invalidFeedback)}}):_vm._e()]),_vm._t("description",[(_vm.props.description)?_c('small',{staticClass:"form-text text-muted w-100",domProps:{"textContent":_vm._s(_vm.props.description)}}):_vm._e()])]],2)}
var CFormGroupvue_type_template_id_08dba86f_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/form/CFormGroup.vue?vue&type=template&id=08dba86f&functional=true&

// CONCATENATED MODULE: ./src/components/form/form-props.js
var formGroupAlwaysSharedProps = {
  validFeedback: String,
  invalidFeedback: String,
  tooltipFeedback: Boolean,
  description: String
};
var formGroupSharedProps = Object.assign({}, formGroupAlwaysSharedProps, {
  appendHtml: String,
  prependHtml: String
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
  value: {
    type: [String, Number, Boolean],
    default: undefined
  },
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
  //   appendHtml: String,
  //   prependHtml: String,
  //   wrapperClasses: [String, Array, Object],
  // },

});
// CONCATENATED MODULE: ./src/components/form/CFormGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_CFormGroupvue_type_script_lang_js_ = (CFormGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form/CFormGroup.vue





/* normalize component */

var CFormGroup_component = normalizeComponent(
  form_CFormGroupvue_type_script_lang_js_,
  CFormGroupvue_type_template_id_08dba86f_functional_true_render,
  CFormGroupvue_type_template_id_08dba86f_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var CFormGroup = (CFormGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CInput.vue?vue&type=template&id=63924800&
var CInputvue_type_template_id_63924800_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CFormGroup',_vm._b({scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._t("label",[(_vm.label)?_c('label',{class:_vm.labelClasses,attrs:{"for":_vm.safeId}},[_vm._v(" "+_vm._s(_vm.label)+" ")]):_vm._e()])]},proxy:true},{key:"input",fn:function(){return [_c('input',_vm._b({class:_vm.inputClasses,attrs:{"id":_vm.safeId,"type":_vm.type,"readonly":_vm.readonly || _vm.plaintext},domProps:{"value":_vm.state},on:{"input":function($event){return _vm.onInput($event)},"change":function($event){return _vm.onChange($event)}}},'input',_vm.$attrs,false))]},proxy:true},_vm._l((['prepend', 'append', 'label-after-input',
                    'valid-feedback', 'invalid-feedback','description']),function(slot){return {key:slot,fn:function(){return [_vm._t(slot)]},proxy:true}})],null,true)},'CFormGroup',{appendHtml: _vm.appendHtml, prependHtml: _vm.prependHtml, validFeedback: _vm.validFeedback, invalidFeedback: _vm.invalidFeedback,
      tooltipFeedback: _vm.tooltipFeedback, description: _vm.description, wrapperClasses: _vm.wrapperClasses, class: _vm.computedClasses},false))}
var CInputvue_type_template_id_63924800_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/form/CInput.vue?vue&type=template&id=63924800&

// CONCATENATED MODULE: ./src/mixins/safe-id.js
/* harmony default export */ var safe_id = ({
  computed: {
    safeId: function safeId() {
      if (this.id || this.$attrs.id) {
        return this.id || this.$attrs.id;
      }

      return generateSafeId();
    }
  }
});

function generateSafeId() {
  var key = Math.random().toString(36).replace('0.', '');
  return '_safe_id_' + key;
}
// CONCATENATED MODULE: ./src/components/form/form-mixins.js
function form_mixins_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var safeId = safe_id;
var wrapperComputedProps = {
  computed: {
    isHorizontal: function isHorizontal() {
      return Boolean(this.horizontal);
    },
    haveInputGroup: function haveInputGroup() {
      return Boolean(this.tooltipFeedback || this.appendHtml || this.prependHtml || this.$slots.append || this.$slots.prepend);
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
var validationComputedProps = {
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
//
//



var mixins = Object.values(form_mixins_namespaceObject);
/* harmony default export */ var CInputvue_type_script_lang_js_ = ({
  name: 'CInput',
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
  //   appendHtml: String,
  //   prependHtml: String,
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
  //   value: String,
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
    //     this.appendHtml ||
    //     this.prependHtml || 
    //     this.$slots.append || 
    //     this.$slots.prepend
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
  CInputvue_type_template_id_63924800_render,
  CInputvue_type_template_id_63924800_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CInput = (CInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CInputCheckbox.vue?vue&type=template&id=a0c91134&
var CInputCheckboxvue_type_template_id_a0c91134_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CFormGroup',_vm._b({scopedSlots:_vm._u([{key:"input",fn:function(){return [_c('input',_vm._b({class:_vm.inputClasses,attrs:{"id":_vm.safeId,"type":_vm.$options.type},domProps:{"value":_vm.value,"checked":_vm.state},on:{"change":function($event){return _vm.onChange($event)}}},'input',_vm.$attrs,false))]},proxy:true},{key:"label-after-input",fn:function(){return [_vm._t("label",[(_vm.label)?_c('label',{class:_vm.labelClasses,attrs:{"for":_vm.safeId}},[_vm._v(" "+_vm._s(_vm.label)+" ")]):_vm._e()])]},proxy:true},_vm._l((['valid-feedback', 'invalid-feedback', 'description']),function(slot){return {key:slot,fn:function(){return [_vm._t(slot)]},proxy:true}})],null,true)},'CFormGroup',{validFeedback: _vm.validFeedback, invalidFeedback: _vm.invalidFeedback, tooltipFeedback: _vm.tooltipFeedback,
                     description: _vm.description, class: _vm.computedClasses},false))}
var CInputCheckboxvue_type_template_id_a0c91134_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/form/CInputCheckbox.vue?vue&type=template&id=a0c91134&

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
  mixins: [safeId, validationComputedProps],
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
  // checked: [Boolean, String, Number],
  // value: {
  //   type: [String, Number, Boolean],
  //   default: undefined
  // },
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
  CInputCheckboxvue_type_template_id_a0c91134_render,
  CInputCheckboxvue_type_template_id_a0c91134_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CInputCheckbox = (CInputCheckbox_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CInputFile.vue?vue&type=template&id=45495cff&
var CInputFilevue_type_template_id_45495cff_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CFormGroup',_vm._b({scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._t("label",[(_vm.label)?_c('label',{class:_vm.labelClasses,attrs:{"for":_vm.safeId}},[_vm._v(" "+_vm._s(_vm.label)+" ")]):_vm._e()])]},proxy:true},{key:"input",fn:function(){return [_c('input',_vm._b({class:_vm.inputClasses,attrs:{"id":_vm.safeId,"multiple":_vm.multiple,"type":"file"},on:{"change":function($event){return _vm.onChange($event)}}},'input',_vm.$attrs,false)),(_vm.custom)?_c('label',{staticClass:"custom-file-label",attrs:{"for":_vm.safeId}},[_vm._v(" "+_vm._s(_vm.computedPlaceholder)+" ")]):_vm._e()]},proxy:true},_vm._l((['label-after-input','valid-feedback',
                            'invalid-feedback','description']),function(slot){return {key:slot,fn:function(){return [_vm._t(slot)]},proxy:true}})],null,true)},'CFormGroup',{validFeedback: _vm.validFeedback, invalidFeedback: _vm.invalidFeedback, tooltipFeedback: _vm.tooltipFeedback, description: _vm.description,
           wrapperClasses: _vm.wrapperClasses, class: _vm.computedClasses},false))}
var CInputFilevue_type_template_id_45495cff_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/form/CInputFile.vue?vue&type=template&id=45495cff&

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
  CInputFilevue_type_template_id_45495cff_render,
  CInputFilevue_type_template_id_45495cff_staticRenderFns,
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CSelect.vue?vue&type=template&id=de62d3b6&
var CSelectvue_type_template_id_de62d3b6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CFormGroup',_vm._b({scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._t("label",[(_vm.label)?_c('label',{class:_vm.labelClasses,attrs:{"for":_vm.safeId}},[_vm._v(" "+_vm._s(_vm.label)+" ")]):_vm._e()])]},proxy:true},{key:"input",fn:function(){return [_c('select',_vm._b({class:_vm.inputClasses,attrs:{"id":_vm.safeId},on:{"input":function($event){return _vm.onSelect($event)}}},'select',_vm.$attrs,false),[(_vm.placeholder)?_c('option',{attrs:{"value":"","selected":"","disabled":"","hidden":""}},[_vm._v(" "+_vm._s(_vm.placeholder)+" ")]):_vm._e(),_vm._l((_vm.options),function(option,key){return [(typeof option === 'object')?_c('option',_vm._b({key:key,attrs:{"disabled":option.disabled,"data-key":key},domProps:{"value":option.value,"selected":option.value === _vm.value}},'option',option.attrs,false),[_vm._v(" "+_vm._s(option.label || option.value)+" ")]):_c('option',{key:key,attrs:{"data-key":key},domProps:{"value":option,"selected":option === _vm.value}},[_vm._v(" "+_vm._s(option)+" ")])]})],2)]},proxy:true},_vm._l((_vm.$options.slots),function(slot){return {key:slot,fn:function(){return [_vm._t(slot)]},proxy:true}})],null,true)},'CFormGroup',{
    appendHtml: _vm.appendHtml, prependHtml: _vm.prependHtml, validFeedback: _vm.validFeedback, invalidFeedback: _vm.invalidFeedback,
    tooltipFeedback: _vm.tooltipFeedback, description: _vm.description, wrapperClasses: _vm.wrapperClasses, class: _vm.computedClasses
  },false))}
var CSelectvue_type_template_id_de62d3b6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/form/CSelect.vue?vue&type=template&id=de62d3b6&

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

var CSelectvue_type_script_lang_js_mixins = Object.values(form_mixins_namespaceObject);


/* harmony default export */ var CSelectvue_type_script_lang_js_ = ({
  name: 'CSelect',
  inheritAttrs: false,
  components: {
    CFormGroup: CFormGroup
  },
  slots: ['prepend', 'append', 'label-after-input', 'valid-feedback', 'invalid-feedback', 'description'],
  mixins: CSelectvue_type_script_lang_js_mixins,
  props: selectProps,
  // Html props: disabled, required don't use multiple
  // {
  //   validFeedback: String,
  //   invalidFeedback: String,
  //   tooltipFeedback: Boolean,
  //   description: String,
  //   appendHtml: String,
  //   prependHtml: String,
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
    selectedItem: function selectedItem() {},
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
    //     this.appendHtml ||
    //     this.prependHtml || 
    //     this.$slots.append || 
    //     this.$slots.prepend
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
  CSelectvue_type_template_id_de62d3b6_render,
  CSelectvue_type_template_id_de62d3b6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSelect = (CSelect_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CTextarea.vue?vue&type=template&id=fb45821a&
var CTextareavue_type_template_id_fb45821a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CFormGroup',_vm._b({scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._t("label",[(_vm.label)?_c('label',{class:_vm.labelClasses,attrs:{"for":_vm.safeId}},[_vm._v(" "+_vm._s(_vm.label)+" ")]):_vm._e()])]},proxy:true},{key:"input",fn:function(){return [_c('textarea',_vm._b({class:_vm.inputClasses,attrs:{"id":_vm.safeId,"readonly":_vm.readonly || _vm.plaintext},domProps:{"value":_vm.state},on:{"input":function($event){return _vm.onInput($event)},"change":function($event){return _vm.onChange($event)}}},'textarea',_vm.$attrs,false))]},proxy:true},_vm._l((['prepend', 'append', 'label-after-input',
                    'valid-feedback', 'invalid-feedback','description']),function(slot){return {key:slot,fn:function(){return [_vm._t(slot)]},proxy:true}})],null,true)},'CFormGroup',{appendHtml: _vm.appendHtml, prependHtml: _vm.prependHtml, validFeedback: _vm.validFeedback, invalidFeedback: _vm.invalidFeedback,
    tooltipFeedback: _vm.tooltipFeedback, description: _vm.description, wrapperClasses: _vm.wrapperClasses, class: _vm.computedClasses},false))}
var CTextareavue_type_template_id_fb45821a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/form/CTextarea.vue?vue&type=template&id=fb45821a&

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
//



var CTextareavue_type_script_lang_js_mixins = Object.values(form_mixins_namespaceObject);
/* harmony default export */ var CTextareavue_type_script_lang_js_ = ({
  name: 'CTextarea',
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
  //   appendHtml: String,
  //   prependHtml: String,
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
  //   value: String,
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
    //     this.appendHtml ||
    //     this.prependHtml || 
    //     this.$slots.append || 
    //     this.$slots.prepend
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
  CTextareavue_type_template_id_fb45821a_render,
  CTextareavue_type_template_id_fb45821a_staticRenderFns,
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
    tag: String
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag || 'div', a(data, {
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
  tag: String,
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
    return h(props.tag || 'div', a(data, {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


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
      if (props[key] === true) {
        classes.push("col".concat(suffixes[key]));
      } else if (typeof props[key] === 'number' || typeof props[key] === 'string') {
        classes.push("col".concat(suffixes[key], "-").concat(props[key]));
      } else if (_typeof(props[key]) === 'object') {
        if (props[key].size) {
          classes.push("col".concat(suffixes[key], "-").concat(props[key].size));
        }

        if (props[key].offset) {
          classes.push("offset".concat(suffixes[key], "-").concat(props[key].offset));
        }

        if (props[key].order) {
          classes.push("order".concat(suffixes[key], "-").concat(props[key].order));
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




// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header/CHeader.vue?vue&type=template&id=bba4f5f6&
var CHeadervue_type_template_id_bba4f5f6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",class:_vm.classList},[_vm._t("default")],2)}
var CHeadervue_type_template_id_bba4f5f6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/header/CHeader.vue?vue&type=template&id=bba4f5f6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header/CHeader.vue?vue&type=script&lang=js&
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
// CONCATENATED MODULE: ./src/components/header/CHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var header_CHeadervue_type_script_lang_js_ = (CHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/header/CHeader.vue





/* normalize component */

var CHeader_component = normalizeComponent(
  header_CHeadervue_type_script_lang_js_,
  CHeadervue_type_template_id_bba4f5f6_render,
  CHeadervue_type_template_id_bba4f5f6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CHeader = (CHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header/CHeaderBrand.vue?vue&type=template&id=48600a63&
var CHeaderBrandvue_type_template_id_48600a63_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',{staticClass:"c-header-brand"})}
var CHeaderBrandvue_type_template_id_48600a63_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/header/CHeaderBrand.vue?vue&type=template&id=48600a63&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header/CHeaderBrand.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var CHeaderBrandvue_type_script_lang_js_ = ({
  name: 'CHeaderBrand'
});
// CONCATENATED MODULE: ./src/components/header/CHeaderBrand.vue?vue&type=script&lang=js&
 /* harmony default export */ var header_CHeaderBrandvue_type_script_lang_js_ = (CHeaderBrandvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/header/CHeaderBrand.vue





/* normalize component */

var CHeaderBrand_component = normalizeComponent(
  header_CHeaderBrandvue_type_script_lang_js_,
  CHeaderBrandvue_type_template_id_48600a63_render,
  CHeaderBrandvue_type_template_id_48600a63_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CHeaderBrand = (CHeaderBrand_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header/CHeaderNav.vue?vue&type=template&id=e2a4423a&
var CHeaderNavvue_type_template_id_e2a4423a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"c-header-nav"},[_vm._t("default")],2)}
var CHeaderNavvue_type_template_id_e2a4423a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/header/CHeaderNav.vue?vue&type=template&id=e2a4423a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header/CHeaderNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CHeaderNavvue_type_script_lang_js_ = ({
  name: 'CHeaderNav'
});
// CONCATENATED MODULE: ./src/components/header/CHeaderNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var header_CHeaderNavvue_type_script_lang_js_ = (CHeaderNavvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/header/CHeaderNav.vue





/* normalize component */

var CHeaderNav_component = normalizeComponent(
  header_CHeaderNavvue_type_script_lang_js_,
  CHeaderNavvue_type_template_id_e2a4423a_render,
  CHeaderNavvue_type_template_id_e2a4423a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CHeaderNav = (CHeaderNav_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header/CHeaderNavItem.vue?vue&type=template&id=60e02db5&
var CHeaderNavItemvue_type_template_id_60e02db5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"c-header-nav-item"},[_vm._t("default")],2)}
var CHeaderNavItemvue_type_template_id_60e02db5_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/header/CHeaderNavItem.vue?vue&type=template&id=60e02db5&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header/CHeaderNavItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CHeaderNavItemvue_type_script_lang_js_ = ({
  name: 'CHeaderNavItem'
});
// CONCATENATED MODULE: ./src/components/header/CHeaderNavItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var header_CHeaderNavItemvue_type_script_lang_js_ = (CHeaderNavItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/header/CHeaderNavItem.vue





/* normalize component */

var CHeaderNavItem_component = normalizeComponent(
  header_CHeaderNavItemvue_type_script_lang_js_,
  CHeaderNavItemvue_type_template_id_60e02db5_render,
  CHeaderNavItemvue_type_template_id_60e02db5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CHeaderNavItem = (CHeaderNavItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header/CHeaderNavLink.vue?vue&type=template&id=0a86fe07&
var CHeaderNavLinkvue_type_template_id_0a86fe07_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CLink',_vm._b({staticClass:"c-header-nav-link"},'CLink',_vm.$props,false),[_vm._t("default")],2)}
var CHeaderNavLinkvue_type_template_id_0a86fe07_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/header/CHeaderNavLink.vue?vue&type=template&id=0a86fe07&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header/CHeaderNavLink.vue?vue&type=script&lang=js&
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
// CONCATENATED MODULE: ./src/components/header/CHeaderNavLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var header_CHeaderNavLinkvue_type_script_lang_js_ = (CHeaderNavLinkvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/header/CHeaderNavLink.vue





/* normalize component */

var CHeaderNavLink_component = normalizeComponent(
  header_CHeaderNavLinkvue_type_script_lang_js_,
  CHeaderNavLinkvue_type_template_id_0a86fe07_render,
  CHeaderNavLinkvue_type_template_id_0a86fe07_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CHeaderNavLink = (CHeaderNavLink_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header/CSubheader.vue?vue&type=template&id=778c6ab4&
var CSubheadervue_type_template_id_778c6ab4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"c-subheader"},[_vm._t("default")],2)}
var CSubheadervue_type_template_id_778c6ab4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/header/CSubheader.vue?vue&type=template&id=778c6ab4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header/CSubheader.vue?vue&type=script&lang=js&
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
// CONCATENATED MODULE: ./src/components/header/CSubheader.vue?vue&type=script&lang=js&
 /* harmony default export */ var header_CSubheadervue_type_script_lang_js_ = (CSubheadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/header/CSubheader.vue





/* normalize component */

var CSubheader_component = normalizeComponent(
  header_CSubheadervue_type_script_lang_js_,
  CSubheadervue_type_template_id_778c6ab4_render,
  CSubheadervue_type_template_id_778c6ab4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSubheader = (CSubheader_component.exports);
// CONCATENATED MODULE: ./src/components/header/index.js







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
      }, CJumbotronvue_type_script_lang_js_defineProperty(_class, "text-".concat(props.textColor), Boolean(props.textColor)), CJumbotronvue_type_script_lang_js_defineProperty(_class, "bg-".concat(props.color), Boolean(props.color)), CJumbotronvue_type_script_lang_js_defineProperty(_class, "border-".concat(props.borderColor), Boolean(props.borderColor)), CJumbotronvue_type_script_lang_js_defineProperty(_class, 'border', Boolean(props.borderColor)), _class)
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
      itemProps = pickByKeys(props, Object.keys(propsFactory()));
    }

    var componentData = {
      attrs: attrs,
      props: itemProps,
      staticClass: 'list-group-item',
      class: (_class = {}, CListGroupItemvue_type_script_lang_js_defineProperty(_class, "list-group-item-".concat(props.color), Boolean(props.color)), CListGroupItemvue_type_script_lang_js_defineProperty(_class, 'list-group-item-action', isAction), CListGroupItemvue_type_script_lang_js_defineProperty(_class, 'active', props.active), CListGroupItemvue_type_script_lang_js_defineProperty(_class, 'disabled', props.disabled), _class)
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



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/media/CMedia.vue?vue&type=template&id=f9a384fa&
var CMediavue_type_template_id_f9a384fa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.mediaClasses},[_c('div',{class:_vm.asideClasses},[_vm._t("aside",[_c('CImg',_vm._b({},'CImg',_vm.computedAsideImageProps,false))])],2),_c('div',{class:_vm.mediaBodyClasses},[_vm._t("default")],2)])}
var CMediavue_type_template_id_f9a384fa_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/media/CMedia.vue?vue&type=template&id=f9a384fa&

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


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modal/CModal.vue?vue&type=template&id=699ca0c9&
var CModalvue_type_template_id_699ca0c9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:_vm.modalClasses,attrs:{"tabindex":"-1","role":"dialog"},on:{"click":function($event){return _vm.modalClick($event)}}},[_c('div',{class:_vm.dialogClasses,attrs:{"role":"document"}},[_c('div',{class:_vm.contentClasses},[_vm._t("header-wrapper",[_c('header',{staticClass:"modal-header"},[_vm._t("header",[_c('h5',{staticClass:"modal-title"},[_vm._v(" "+_vm._s(_vm.title)+" ")]),_c('CButtonClose',{on:{"click":function($event){return _vm.hide($event)}}})])],2)]),_vm._t("body-wrapper",[_c('div',{staticClass:"modal-body"},[_vm._t("default")],2)]),_vm._t("footer-wrapper",[_c('footer',{staticClass:"modal-footer"},[_vm._t("footer",[_c('button',{staticClass:"btn btn-secondary",attrs:{"type":"button"},on:{"click":function($event){return _vm.hide($event)}}},[_vm._v(" Cancel ")]),_c('button',{class:_vm.btnClasses,attrs:{"type":"button"},on:{"click":function($event){return _vm.hide($event)}}},[_vm._v(" OK ")])])],2)])],2)])]),(_vm.backdrop && (_vm.visible || _vm.isTransitioning))?_c('div',{class:_vm.backdropClasses}):_vm._e()])}
var CModalvue_type_template_id_699ca0c9_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/modal/CModal.vue?vue&type=template&id=699ca0c9&

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
    addModalClasses: [String, Array, Object],
    addDialogClasses: [String, Array, Object],
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
      return ['modal overflow-auto', this.addModalClasses, CModalvue_type_script_lang_js_defineProperty({
        'fade': this.fade,
        'show': this.visible,
        'd-block': this.visible || this.isTransitioning
      }, "modal-".concat(this.color), Boolean(this.color))];
    },
    dialogClasses: function dialogClasses() {
      return [this.addDialogClasses, 'modal-dialog', CModalvue_type_script_lang_js_defineProperty({
        'modal-dialog-centered': this.centered
      }, "modal-".concat(this.size), Boolean(this.size))];
    },
    contentClasses: function contentClasses() {
      return [this.addContentClasses, 'modal-content', CModalvue_type_script_lang_js_defineProperty({}, "border-".concat(this.borderColor), Boolean(this.borderColor))];
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
  CModalvue_type_template_id_699ca0c9_render,
  CModalvue_type_template_id_699ca0c9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CModal = (CModal_component.exports);
// CONCATENATED MODULE: ./src/components/modal/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/nav/CNav.vue?vue&type=template&id=77255b0e&
var CNavvue_type_template_id_77255b0e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{class:_vm.navClasses,on:{"click":_vm.onClick}},[_vm._t("default")],2)}
var CNavvue_type_template_id_77255b0e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/nav/CNav.vue?vue&type=template&id=77255b0e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/nav/CNav.vue?vue&type=script&lang=js&
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
  computed: {
    navClasses: function navClasses() {
      return {
        'nav': true,
        'nav-tabs': this.variant === 'tabs',
        'nav-pills': this.variant === 'pills',
        'flex-column': this.vertical,
        'nav-fill': this.fill,
        'nav-justified': this.justified,
        'card-header-tabs': this.inCard && this.variant === 'tabs',
        'card-header-pills': this.inCard && this.variant === 'pills'
      };
    }
  },
  methods: {
    onClick: function onClick(e) {
      var clickedItem = this.getClickedItem(e);
      clickedItem ? this.activateItem(clickedItem) : null;
    },
    getClickedItem: function getClickedItem(e) {
      var _this = this;

      return this.$children.filter(function (item) {
        return _this.itemWasActivated(item, e);
      })[0];
    },
    itemWasActivated: function itemWasActivated(item, e) {
      return item.$el.contains(e.target) && !item.disabled && item.isActive !== undefined;
    },
    activateItem: function activateItem(itemToActivate) {
      // Works on CNavItem, CTab, CDropdown and every component that have 
      // 'isActive' data prop that determines active state
      this.$children.forEach(function (item) {
        return item.isActive = item === itemToActivate ? true : false;
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
  CNavvue_type_template_id_77255b0e_render,
  CNavvue_type_template_id_77255b0e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CNav = (CNav_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/nav/CNavItem.vue?vue&type=template&id=ed80a8e0&
var CNavItemvue_type_template_id_ed80a8e0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"nav-item"},[_c('CLink',_vm._b({staticClass:"nav-link",attrs:{"active":_vm.isActive}},'CLink',_vm.$props,false),[_vm._t("default")],2)],1)}
var CNavItemvue_type_template_id_ed80a8e0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/nav/CNavItem.vue?vue&type=template&id=ed80a8e0&

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
  props: CLinkvue_type_script_lang_js_props,
  data: function data() {
    return {
      isActive: this.disabled ? null : this.active
    };
  }
});
// CONCATENATED MODULE: ./src/components/nav/CNavItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var nav_CNavItemvue_type_script_lang_js_ = (CNavItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/nav/CNavItem.vue





/* normalize component */

var CNavItem_component = normalizeComponent(
  nav_CNavItemvue_type_script_lang_js_,
  CNavItemvue_type_template_id_ed80a8e0_render,
  CNavItemvue_type_template_id_ed80a8e0_staticRenderFns,
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
      }, CNavbarvue_type_script_lang_js_defineProperty(_ref2, "bg-".concat(props.color), Boolean(props.color)), CNavbarvue_type_script_lang_js_defineProperty(_ref2, "fixed-".concat(props.fixed), Boolean(props.fixed)), CNavbarvue_type_script_lang_js_defineProperty(_ref2, "navbar-expand".concat(expandClassSuffix), Boolean(props.expandable)), _ref2)],
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
  tag: String
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
    var tag = isLink ? CLink : props.tag || 'div';
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/navbar/CNavbarText.vue?vue&type=template&id=bbae35c6&
var CNavbarTextvue_type_template_id_bbae35c6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"navbar-text"},[_vm._t("default")],2)}
var CNavbarTextvue_type_template_id_bbae35c6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/navbar/CNavbarText.vue?vue&type=template&id=bbae35c6&

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





// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pagination/CPagination.vue?vue&type=template&id=66893609&
var CPaginationvue_type_template_id_66893609_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{attrs:{"aria-label":"pagination"}},[_c('ul',{class:_vm.computedClasses},[(_vm.doubleArrows)?_c('li',{class:_vm.backArrowsClasses},[_c('CLink',{staticClass:"page-link",attrs:{"disabled":_vm.activePage === 1,"aria-label":"Go to first page","aria-disabled":_vm.activePage === 1},on:{"click":function($event){return _vm.setPage(1)}}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.firstButtonHtml)}})])],1):_vm._e(),(_vm.arrows)?_c('li',{class:_vm.backArrowsClasses},[_c('CLink',{staticClass:"page-link",attrs:{"disabled":_vm.activePage === 1,"aria-label":"Go to previous page","aria-disabled":_vm.activePage === 1},on:{"click":function($event){return _vm.setPage(_vm.activePage - 1)}}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.previousButtonHtml)}})])],1):_vm._e(),(_vm.beforeDots)?_c('li',{staticClass:"page-item disabled",attrs:{"role":"separator"}},[_c('span',{staticClass:"page-link"},[_vm._v("…")])]):_vm._e(),_vm._l((_vm.items),function(item,index){return _c('li',{key:index,class:[{ 'active': _vm.activePage === item }, 'page-item']},[_c('CLink',{staticClass:"page-link c-page-link-number",attrs:{"aria-label":_vm.activePage === item ? ("Current page " + item) : ("Go to page " + item)},on:{"click":function($event){return _vm.setPage(item, $event)}}},[_vm._v(" "+_vm._s(item)+" ")])],1)}),(_vm.afterDots)?_c('li',{staticClass:"page-item disabled",attrs:{"role":"separator"}},[_c('span',{staticClass:"page-link"},[_vm._v("…")])]):_vm._e(),(_vm.arrows)?_c('li',{class:_vm.nextArrowsClasses},[_c('CLink',{staticClass:"page-link",attrs:{"disabled":_vm.activePage === _vm.pages,"aria-label":"Go to next page","aria-disabled":_vm.activePage === _vm.pages},on:{"click":function($event){return _vm.setPage(_vm.activePage + 1)}}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.nextButtonHtml)}})])],1):_vm._e(),(_vm.doubleArrows)?_c('li',{class:_vm.nextArrowsClasses},[_c('CLink',{staticClass:"page-link",attrs:{"disabled":_vm.activePage === _vm.pages,"aria-label":"Go to last page","aria-disabled":_vm.activePage === _vm.pages},on:{"click":function($event){return _vm.setPage(_vm.pages)}}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.lastButtonHtml)}})])],1):_vm._e()],2)])}
var CPaginationvue_type_template_id_66893609_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/pagination/CPagination.vue?vue&type=template&id=66893609&

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
    },
    firstButtonHtml: {
      type: String,
      default: '&laquo;'
    },
    previousButtonHtml: {
      type: String,
      default: '&lsaquo;'
    },
    nextButtonHtml: {
      type: String,
      default: '&rsaquo;'
    },
    lastButtonHtml: {
      type: String,
      default: '&raquo;'
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
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (number !== this.activePage) {
        this.$emit('update:activePage', number);

        if (e) {
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
    }
  }
});
// CONCATENATED MODULE: ./src/components/pagination/CPagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagination_CPaginationvue_type_script_lang_js_ = (CPaginationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/pagination/CPagination.vue





/* normalize component */

var CPagination_component = normalizeComponent(
  pagination_CPaginationvue_type_script_lang_js_,
  CPaginationvue_type_template_id_66893609_render,
  CPaginationvue_type_template_id_66893609_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CPagination = (CPagination_component.exports);
// CONCATENATED MODULE: ./src/components/pagination/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/progress/CProgress.vue?vue&type=template&id=5f6e68a6&
var CProgressvue_type_template_id_5f6e68a6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"progress",style:({ height: _vm.height })},[_vm._t("default",[_c('CProgressBar',{attrs:{"value":_vm.value}})])],2)}
var CProgressvue_type_template_id_5f6e68a6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/progress/CProgress.vue?vue&type=template&id=5f6e68a6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/progress/CProgressBar.vue?vue&type=template&id=7eb1af54&
var CProgressBarvue_type_template_id_7eb1af54_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.progressBarClasses,style:(_vm.progressBarStyles),attrs:{"role":"progressbar","aria-valuemin":"0","aria-valuemax":_vm.props.max.toString(),"aria-valuenow":_vm.computedValue}},[_vm._t("default",[_vm._v(_vm._s(_vm.text))])],2)}
var CProgressBarvue_type_template_id_7eb1af54_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/progress/CProgressBar.vue?vue&type=template&id=7eb1af54&

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



// EXTERNAL MODULE: ./node_modules/clone/clone.js
var clone = __webpack_require__("2410");
var clone_default = /*#__PURE__*/__webpack_require__.n(clone);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/render-function/CRenderFunction.vue?vue&type=script&lang=js&
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


/* harmony default export */ var CRenderFunctionvue_type_script_lang_js_ = ({
  name: 'CRenderFunction',
  props: {
    contentToRender: Array
  },
  computed: {
    content: function content() {
      return clone_default()(this.contentToRender);
    }
  },
  render: function render(h) {
    var _this = this;

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
              return _this.$scopedSlots[child.slot]();
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
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
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
    var this$1 = this;

  for (var name in this$1.handlers) {
    this$1.unbind(name);
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

var processScrollDiff = function(
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
};

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
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

var updateGeometry = function(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);

  i.containerWidth = element.clientWidth;
  i.containerHeight = element.clientHeight;
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
      toInt(i.railXWidth * i.containerWidth / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      (i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth) /
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
      toInt(i.railYHeight * i.containerHeight / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      roundedScrollTop *
        (i.railYHeight - i.scrollbarYHeight) /
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
    element.scrollLeft = 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
};

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
        i.scrollbarYOuterWidth;
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

var clickRail = function(i) {
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
};

var dragThumb = function(i) {
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
};

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

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    startingScrollTop = element[scrollTop];
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
    e.preventDefault();
  });
}

var keyboard = function(i) {
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
};

var wheel = function(i) {
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
      deltaX = -1 * e.wheelDeltaX / 6;
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
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
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
};

var touch = function(i) {
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
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
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
};

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
    this$1.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
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
// EXTERNAL MODULE: ./node_modules/perfect-scrollbar/css/perfect-scrollbar.css?vue&type=style&index=0&lang=css&
var perfect_scrollbarvue_type_style_index_0_lang_css_ = __webpack_require__("9c30");

// CONCATENATED MODULE: ./src/components/scrollbar/CScrollbar.vue
var CScrollbar_render, CScrollbar_staticRenderFns





/* normalize component */

var CScrollbar_component = normalizeComponent(
  scrollbar_CScrollbarvue_type_script_lang_js_,
  CScrollbar_render,
  CScrollbar_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CScrollbar = (CScrollbar_component.exports);
// CONCATENATED MODULE: ./src/components/scrollbar/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebar.vue?vue&type=template&id=014ea570&
var CSidebarvue_type_template_id_014ea570_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.sidebarClasses,on:{"click":_vm.sidebarClick}},[_vm._t("default")],2)}
var CSidebarvue_type_template_id_014ea570_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/sidebar/CSidebar.vue?vue&type=template&id=014ea570&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebar.vue?vue&type=script&lang=js&
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
    }
  },
  computed: {
    sidebarClasses: function sidebarClasses() {
      var _ref;

      return ['c-sidebar', "c-sidebar-".concat(this.colorScheme), (_ref = {
        'c-sidebar-show': this.open === true
      }, CSidebarvue_type_script_lang_js_defineProperty(_ref, "c-sidebar-".concat(this.breakpoint, "-show"), this.open === 'responsive'), CSidebarvue_type_script_lang_js_defineProperty(_ref, 'c-sidebar-fixed', this.fixed), CSidebarvue_type_script_lang_js_defineProperty(_ref, 'c-sidebar-right', this.aside), CSidebarvue_type_script_lang_js_defineProperty(_ref, 'c-sidebar-minimized', this.minimize && !this.unfoldable), CSidebarvue_type_script_lang_js_defineProperty(_ref, 'c-sidebar-unfoldable', this.minimize && this.unfoldable), CSidebarvue_type_script_lang_js_defineProperty(_ref, 'c-sidebar-overlaid', this.overlaid), CSidebarvue_type_script_lang_js_defineProperty(_ref, "c-sidebar-".concat(this.size), this.size), _ref)];
    }
  },
  methods: {
    sidebarClick: function sidebarClick(event) {
      var hiddingElementClicked = event.target.tagName === 'A';

      if (hiddingElementClicked && this.hideOnMobileClick && this.isOnMobile()) {
        this.open = 'responsive';
        this.$emit('update:show', 'responsive');
      }
    },
    isOnMobile: function isOnMobile() {
      return Boolean(getComputedStyle(this.$el).getPropertyValue('--is-mobile'));
    }
  }
});
// CONCATENATED MODULE: ./src/components/sidebar/CSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var sidebar_CSidebarvue_type_script_lang_js_ = (CSidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/sidebar/CSidebar.vue





/* normalize component */

var CSidebar_component = normalizeComponent(
  sidebar_CSidebarvue_type_script_lang_js_,
  CSidebarvue_type_template_id_014ea570_render,
  CSidebarvue_type_template_id_014ea570_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebar = (CSidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarBrand.vue?vue&type=template&id=355f7aed&
var CSidebarBrandvue_type_template_id_355f7aed_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-sidebar-brand"},[_vm._t("default",[(_vm.wrappedInLink)?_c('CLink',_vm._b({},'CLink',_vm.linkProps,false),[_c('img',_vm._b({staticClass:"c-sidebar-brand-full"},'img',_vm.fullAttributes,false)),_c('img',_vm._b({staticClass:"c-sidebar-brand-minimized"},'img',_vm.minimizedAttributes,false))]):[_c('img',_vm._b({staticClass:"c-sidebar-brand-full"},'img',_vm.fullAttributes,false)),_c('img',_vm._b({staticClass:"c-sidebar-brand-minimized"},'img',_vm.minimizedAttributes,false))]])],2)}
var CSidebarBrandvue_type_template_id_355f7aed_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/sidebar/CSidebarBrand.vue?vue&type=template&id=355f7aed&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarBrand.vue?vue&type=script&lang=js&
function CSidebarBrandvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CSidebarBrandvue_type_script_lang_js_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CSidebarBrandvue_type_script_lang_js_typeof = function _typeof(obj) { return typeof obj; }; } else { CSidebarBrandvue_type_script_lang_js_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CSidebarBrandvue_type_script_lang_js_typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CSidebarBrandvue_type_script_lang_js_ = ({
  name: 'CSidebarBrand',
  components: {
    CLink: CLink
  },
  props: {
    img: [String, Object],
    imgFull: [String, Object],
    imgMinimized: [String, Object],
    wrappedInLink: [String, Object]
  },
  computed: {
    linkProps: function linkProps() {
      return this.getObject(this.wrappedInLink, 'href');
    },
    minimizedAttributes: function minimizedAttributes() {
      return this.getObject(this.imgMinimized || this.img, 'src');
    },
    fullAttributes: function fullAttributes() {
      return this.getObject(this.imgFull || this.img, 'src');
    }
  },
  methods: {
    getObject: function getObject(prop, key) {
      return CSidebarBrandvue_type_script_lang_js_typeof(prop) === 'object' ? prop : CSidebarBrandvue_type_script_lang_js_defineProperty({}, "".concat(key), prop);
    }
  }
});
// CONCATENATED MODULE: ./src/components/sidebar/CSidebarBrand.vue?vue&type=script&lang=js&
 /* harmony default export */ var sidebar_CSidebarBrandvue_type_script_lang_js_ = (CSidebarBrandvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/sidebar/CSidebarBrand.vue





/* normalize component */

var CSidebarBrand_component = normalizeComponent(
  sidebar_CSidebarBrandvue_type_script_lang_js_,
  CSidebarBrandvue_type_template_id_355f7aed_render,
  CSidebarBrandvue_type_template_id_355f7aed_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarBrand = (CSidebarBrand_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarClose.vue?vue&type=template&id=0a1dd641&
var CSidebarClosevue_type_template_id_0a1dd641_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CButtonClose',{attrs:{"buttonClasses":"c-sidebar-close"}},[_c('svg',{staticClass:"c-icon",attrs:{"width":"24","height":"24","viewBox":"0 0 24 24"}},[_c('title',[_vm._v("x")]),_c('path',{attrs:{"d":"M20.030 5.030l-1.061-1.061-6.97 6.97-6.97-6.97-1.061 1.061 6.97 6.97-6.97 6.97 1.061 1.061 6.97-6.97 6.97 6.97 1.061-1.061-6.97-6.97 6.97-6.97z"}})])])}
var CSidebarClosevue_type_template_id_0a1dd641_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/sidebar/CSidebarClose.vue?vue&type=template&id=0a1dd641&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarClose.vue?vue&type=script&lang=js&
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
// CONCATENATED MODULE: ./src/components/sidebar/CSidebarClose.vue?vue&type=script&lang=js&
 /* harmony default export */ var sidebar_CSidebarClosevue_type_script_lang_js_ = (CSidebarClosevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/sidebar/CSidebarClose.vue





/* normalize component */

var CSidebarClose_component = normalizeComponent(
  sidebar_CSidebarClosevue_type_script_lang_js_,
  CSidebarClosevue_type_template_id_0a1dd641_render,
  CSidebarClosevue_type_template_id_0a1dd641_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarClose = (CSidebarClose_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarFooter.vue?vue&type=template&id=8c6f42c2&
var CSidebarFootervue_type_template_id_8c6f42c2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-sidebar-footer"},[_vm._t("default")],2)}
var CSidebarFootervue_type_template_id_8c6f42c2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/sidebar/CSidebarFooter.vue?vue&type=template&id=8c6f42c2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CSidebarFootervue_type_script_lang_js_ = ({
  name: 'CSidebarFooter'
});
// CONCATENATED MODULE: ./src/components/sidebar/CSidebarFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var sidebar_CSidebarFootervue_type_script_lang_js_ = (CSidebarFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/sidebar/CSidebarFooter.vue





/* normalize component */

var CSidebarFooter_component = normalizeComponent(
  sidebar_CSidebarFootervue_type_script_lang_js_,
  CSidebarFootervue_type_template_id_8c6f42c2_render,
  CSidebarFootervue_type_template_id_8c6f42c2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarFooter = (CSidebarFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarForm.vue?vue&type=template&id=082ffa36&
var CSidebarFormvue_type_template_id_082ffa36_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-sidebar-form"},[_vm._t("default")],2)}
var CSidebarFormvue_type_template_id_082ffa36_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/sidebar/CSidebarForm.vue?vue&type=template&id=082ffa36&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CSidebarFormvue_type_script_lang_js_ = ({
  name: 'CSidebarForm'
});
// CONCATENATED MODULE: ./src/components/sidebar/CSidebarForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var sidebar_CSidebarFormvue_type_script_lang_js_ = (CSidebarFormvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/sidebar/CSidebarForm.vue





/* normalize component */

var CSidebarForm_component = normalizeComponent(
  sidebar_CSidebarFormvue_type_script_lang_js_,
  CSidebarFormvue_type_template_id_082ffa36_render,
  CSidebarFormvue_type_template_id_082ffa36_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarForm = (CSidebarForm_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarHeader.vue?vue&type=template&id=2dc599ad&
var CSidebarHeadervue_type_template_id_2dc599ad_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-sidebar-header"},[_vm._t("default")],2)}
var CSidebarHeadervue_type_template_id_2dc599ad_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/sidebar/CSidebarHeader.vue?vue&type=template&id=2dc599ad&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CSidebarHeadervue_type_script_lang_js_ = ({
  name: 'CSidebarHeader'
});
// CONCATENATED MODULE: ./src/components/sidebar/CSidebarHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var sidebar_CSidebarHeadervue_type_script_lang_js_ = (CSidebarHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/sidebar/CSidebarHeader.vue





/* normalize component */

var CSidebarHeader_component = normalizeComponent(
  sidebar_CSidebarHeadervue_type_script_lang_js_,
  CSidebarHeadervue_type_template_id_2dc599ad_render,
  CSidebarHeadervue_type_template_id_2dc599ad_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarHeader = (CSidebarHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarMinimizer.vue?vue&type=template&id=408e6900&
var CSidebarMinimizervue_type_template_id_408e6900_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"c-sidebar-minimizer",attrs:{"type":"button"}})}
var CSidebarMinimizervue_type_template_id_408e6900_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/sidebar/CSidebarMinimizer.vue?vue&type=template&id=408e6900&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarMinimizer.vue?vue&type=script&lang=js&
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
// CONCATENATED MODULE: ./src/components/sidebar/CSidebarMinimizer.vue?vue&type=script&lang=js&
 /* harmony default export */ var sidebar_CSidebarMinimizervue_type_script_lang_js_ = (CSidebarMinimizervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/sidebar/CSidebarMinimizer.vue





/* normalize component */

var CSidebarMinimizer_component = normalizeComponent(
  sidebar_CSidebarMinimizervue_type_script_lang_js_,
  CSidebarMinimizervue_type_template_id_408e6900_render,
  CSidebarMinimizervue_type_template_id_408e6900_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarMinimizer = (CSidebarMinimizer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarNav.vue?vue&type=template&id=f7cd7c72&scoped=true&
var CSidebarNavvue_type_template_id_f7cd7c72_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CScrollbar',{staticClass:"c-scroll-area c-sidebar-nav",attrs:{"settings":_vm.psSettings,"switcher":!_vm.state.minimize,"tag":"ul"}},[_vm._t("default")],2)}
var CSidebarNavvue_type_template_id_f7cd7c72_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/sidebar/CSidebarNav.vue?vue&type=template&id=f7cd7c72&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarNav.vue?vue&type=script&lang=js&
//
//
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
// CONCATENATED MODULE: ./src/components/sidebar/CSidebarNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var sidebar_CSidebarNavvue_type_script_lang_js_ = (CSidebarNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/sidebar/CSidebarNav.vue?vue&type=style&index=0&id=f7cd7c72&scoped=true&lang=css&
var CSidebarNavvue_type_style_index_0_id_f7cd7c72_scoped_true_lang_css_ = __webpack_require__("a635");

// CONCATENATED MODULE: ./src/components/sidebar/CSidebarNav.vue






/* normalize component */

var CSidebarNav_component = normalizeComponent(
  sidebar_CSidebarNavvue_type_script_lang_js_,
  CSidebarNavvue_type_template_id_f7cd7c72_scoped_true_render,
  CSidebarNavvue_type_template_id_f7cd7c72_scoped_true_staticRenderFns,
  false,
  null,
  "f7cd7c72",
  null
  
)

/* harmony default export */ var CSidebarNav = (CSidebarNav_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarNavDivider.vue?vue&type=template&id=2a9b183a&
var CSidebarNavDividervue_type_template_id_2a9b183a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"c-sidebar-nav-divider"})}
var CSidebarNavDividervue_type_template_id_2a9b183a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/sidebar/CSidebarNavDivider.vue?vue&type=template&id=2a9b183a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarNavDivider.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var CSidebarNavDividervue_type_script_lang_js_ = ({
  name: 'CSidebarNavDivider'
});
// CONCATENATED MODULE: ./src/components/sidebar/CSidebarNavDivider.vue?vue&type=script&lang=js&
 /* harmony default export */ var sidebar_CSidebarNavDividervue_type_script_lang_js_ = (CSidebarNavDividervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/sidebar/CSidebarNavDivider.vue





/* normalize component */

var CSidebarNavDivider_component = normalizeComponent(
  sidebar_CSidebarNavDividervue_type_script_lang_js_,
  CSidebarNavDividervue_type_template_id_2a9b183a_render,
  CSidebarNavDividervue_type_template_id_2a9b183a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarNavDivider = (CSidebarNavDivider_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarNavDropdown.vue?vue&type=template&id=5d311c0d&
var CSidebarNavDropdownvue_type_template_id_5d311c0d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:_vm.dropdownClasses},[_c('a',{staticClass:"c-sidebar-nav-link c-sidebar-nav-dropdown-toggle",on:{"click":_vm.handleClick}},[(_vm.icon)?_c('CIcon',_vm._b({},'CIcon',_vm.computedIcon,false)):_vm._e(),_vm._v(" "+_vm._s(_vm.name)+" ")],1),_c('ul',{staticClass:"c-sidebar-nav-dropdown-items",on:{"click":_vm.itemClicked}},[_vm._t("default")],2)])}
var CSidebarNavDropdownvue_type_template_id_5d311c0d_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/sidebar/CSidebarNavDropdown.vue?vue&type=template&id=5d311c0d&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarNavDropdown.vue?vue&type=script&lang=js&
function CSidebarNavDropdownvue_type_script_lang_js_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CSidebarNavDropdownvue_type_script_lang_js_typeof = function _typeof(obj) { return typeof obj; }; } else { CSidebarNavDropdownvue_type_script_lang_js_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CSidebarNavDropdownvue_type_script_lang_js_typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
// import CIcon from '@coreui/icons/vue'
/* harmony default export */ var CSidebarNavDropdownvue_type_script_lang_js_ = ({
  name: 'CSidebarNavDropdown',
  // components: {
  //   CIcon
  // },
  props: {
    name: String,
    route: {
      type: String,
      validator: function validator(val) {
        return val.length > 0;
      }
    },
    icon: [String, Object],
    show: Boolean
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
    classIcon: function classIcon() {
      return ['c-sidebar-nav-icon', this.icon];
    },
    dropdownClasses: function dropdownClasses() {
      return ['c-sidebar-nav-item c-sidebar-nav-dropdown', {
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
          customClasses: [this.icon, 'c-sidebar-nav-icon']
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
// CONCATENATED MODULE: ./src/components/sidebar/CSidebarNavDropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var sidebar_CSidebarNavDropdownvue_type_script_lang_js_ = (CSidebarNavDropdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/sidebar/CSidebarNavDropdown.vue





/* normalize component */

var CSidebarNavDropdown_component = normalizeComponent(
  sidebar_CSidebarNavDropdownvue_type_script_lang_js_,
  CSidebarNavDropdownvue_type_template_id_5d311c0d_render,
  CSidebarNavDropdownvue_type_template_id_5d311c0d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarNavDropdown = (CSidebarNavDropdown_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarNavLink.vue?vue&type=template&id=5ce78c00&
var CSidebarNavLinkvue_type_template_id_5ce78c00_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"c-sidebar-nav-item"},[_c('CLink',_vm._b({class:_vm.linkClasses,nativeOn:{"click":function($event){return _vm.click($event)}}},'CLink',_vm.computedLinkProps,false),[_vm._t("default",[(_vm.icon)?_c('CIcon',_vm._b({},'CIcon',_vm.computedIcon,false)):_vm._e(),_vm._v(" "+_vm._s(_vm.name)+" "),(_vm.badge)?_c('CBadge',_vm._b({},'CBadge',Object.assign({}, _vm.badge, { text: null }),false),[_vm._v(" "+_vm._s(_vm.badge.text)+" ")]):_vm._e()])],2)],1)}
var CSidebarNavLinkvue_type_template_id_5ce78c00_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/sidebar/CSidebarNavLink.vue?vue&type=template&id=5ce78c00&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarNavLink.vue?vue&type=script&lang=js&
function CSidebarNavLinkvue_type_script_lang_js_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CSidebarNavLinkvue_type_script_lang_js_typeof = function _typeof(obj) { return typeof obj; }; } else { CSidebarNavLinkvue_type_script_lang_js_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CSidebarNavLinkvue_type_script_lang_js_typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import CIcon from '@coreui/icons/vue'

var CSidebarNavLinkvue_type_script_lang_js_props = Object.assign(CLinkvue_type_script_lang_js_props, {
  name: String,
  icon: [String, Object],
  badge: Object,
  addLinkClasses: [String, Array, Object],
  label: Boolean
});
/* harmony default export */ var CSidebarNavLinkvue_type_script_lang_js_ = ({
  name: 'CSidebarNavLink',
  components: {
    CLink: CLink,
    CBadge: CBadge // CIcon

  },
  props: CSidebarNavLinkvue_type_script_lang_js_props,
  computed: {
    linkProps: function linkProps() {
      var _this = this;

      return Object.keys(CLinkvue_type_script_lang_js_props).reduce(function (props, key) {
        props[key] = _this[key];
        return props;
      }, {});
    },
    addedLinkProps: function addedLinkProps() {
      return this.$options.propsData.exact === undefined ? {
        exact: true
      } : {};
    },
    computedLinkProps: function computedLinkProps() {
      return Object.assign(this.linkProps, this.addedLinkProps);
    },
    linkClasses: function linkClasses() {
      return [this.label ? 'c-sidebar-nav-label' : 'c-sidebar-nav-link', this.addLinkClasses];
    },
    computedIcon: function computedIcon() {
      if (CSidebarNavLinkvue_type_script_lang_js_typeof(this.icon) === 'object') {
        return Object.assign({
          customClasses: 'c-sidebar-nav-icon'
        }, this.icon);
      } else {
        return {
          customClasses: [this.icon, 'c-sidebar-nav-icon']
        };
      }
    }
  },
  methods: {
    click: function click(e) {
      this.$emit('link-clicked', e);
    }
  }
});
// CONCATENATED MODULE: ./src/components/sidebar/CSidebarNavLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var sidebar_CSidebarNavLinkvue_type_script_lang_js_ = (CSidebarNavLinkvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/sidebar/CSidebarNavLink.vue





/* normalize component */

var CSidebarNavLink_component = normalizeComponent(
  sidebar_CSidebarNavLinkvue_type_script_lang_js_,
  CSidebarNavLinkvue_type_template_id_5ce78c00_render,
  CSidebarNavLinkvue_type_template_id_5ce78c00_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarNavLink = (CSidebarNavLink_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarNavTitle.vue?vue&type=template&id=2df27ff6&
var CSidebarNavTitlevue_type_template_id_2df27ff6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"c-sidebar-nav-title"},[_vm._t("default")],2)}
var CSidebarNavTitlevue_type_template_id_2df27ff6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/sidebar/CSidebarNavTitle.vue?vue&type=template&id=2df27ff6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar/CSidebarNavTitle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CSidebarNavTitlevue_type_script_lang_js_ = ({
  name: 'CSidebarNavTitle'
});
// CONCATENATED MODULE: ./src/components/sidebar/CSidebarNavTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var sidebar_CSidebarNavTitlevue_type_script_lang_js_ = (CSidebarNavTitlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/sidebar/CSidebarNavTitle.vue





/* normalize component */

var CSidebarNavTitle_component = normalizeComponent(
  sidebar_CSidebarNavTitlevue_type_script_lang_js_,
  CSidebarNavTitlevue_type_template_id_2df27ff6_render,
  CSidebarNavTitlevue_type_template_id_2df27ff6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarNavTitle = (CSidebarNavTitle_component.exports);
// CONCATENATED MODULE: ./src/components/sidebar/index.js













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
      class: ["spinner-".concat(type), (_ref2 = {}, CSpinnervue_type_script_lang_js_defineProperty(_ref2, "spinner-".concat(type, "-").concat(props.size), props.size), CSpinnervue_type_script_lang_js_defineProperty(_ref2, "text-".concat(props.color), Boolean(props.color)), _ref2)]
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
// CONCATENATED MODULE: ./src/components/spinner/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/switch/CSwitch.vue?vue&type=template&id=658b3108&
var CSwitchvue_type_template_id_658b3108_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:_vm.classList},[_c('input',_vm._b({staticClass:"c-switch-input form-check-input",attrs:{"type":_vm.type},domProps:{"checked":_vm.state,"value":_vm.value},on:{"change":_vm.onChange}},'input',_vm.$attrs,false)),_c('span',{staticClass:"c-switch-slider",attrs:{"data-checked":_vm.labelOn,"data-unchecked":_vm.labelOff}})])}
var CSwitchvue_type_template_id_658b3108_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/switch/CSwitch.vue?vue&type=template&id=658b3108&

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
//
/* harmony default export */ var CSwitchvue_type_script_lang_js_ = ({
  name: 'CSwitch',
  inheritAttrs: false,
  props: {
    color: String,
    outline: {
      type: [Boolean, String],
      default: undefined,
      validator: function validator(value) {
        return [false, true, '', 'alt'].includes(value);
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
        return ['', '3d', 'pill'].includes(value);
      }
    },
    checked: Boolean,
    value: {
      type: [String, Number, Boolean],
      default: undefined
    },
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

      var outlineString = this.outline ? '-outline' : '';
      var outlinedAltString = this.outline === 'alt' ? '-alt' : '';
      return ['c-switch form-check-label', "c-switch".concat(outlineString, "-").concat(this.color).concat(outlinedAltString), (_ref = {}, CSwitchvue_type_script_lang_js_defineProperty(_ref, "c-switch-".concat(this.size), this.size), CSwitchvue_type_script_lang_js_defineProperty(_ref, "c-switch-".concat(this.shape), this.shape), CSwitchvue_type_script_lang_js_defineProperty(_ref, 'c-switch-label', this.labelOn || this.labelOff), _ref)];
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
  CSwitchvue_type_template_id_658b3108_render,
  CSwitchvue_type_template_id_658b3108_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSwitch = (CSwitch_component.exports);
// CONCATENATED MODULE: ./src/components/switch/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/table/CDataTable.vue?vue&type=template&id=d490c5f4&scoped=true&
var CDataTablevue_type_template_id_d490c5f4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.itemsPerPageSelect || _vm.tableFilter)?_c('div',{staticClass:"row my-2 mx-0"},[(_vm.tableFilter)?_c('div',{staticClass:"col-sm-6 form-inline p-0"},[_c('label',{staticClass:"mr-2"},[_vm._v("Filter:")]),_c('input',{staticClass:"form-control table-filter",attrs:{"type":"text","placeholder":"type string..."},domProps:{"value":_vm.tableFilterState},on:{"input":function($event){return _vm.tableFilterChange($event.target.value)},"change":function($event){return _vm.tableFilterChange($event.target.value, 'change')}}})]):_vm._e(),(_vm.itemsPerPageSelect)?_c('div',{staticClass:"col-sm-6 p-0",class:{ 'offset-sm-6': !_vm.tableFilter }},[_c('div',{staticClass:"form-inline float-sm-right"},[_c('label',{staticClass:"mr-2"},[_vm._v("Items per page:")]),_c('select',{staticClass:"form-control",on:{"change":_vm.paginationChange}},[_c('option',{attrs:{"value":"","selected":"","disabled":"","hidden":""}},[_vm._v(" "+_vm._s(_vm.perPageItems)+" ")]),_vm._l(([5,10,20,50]),function(number,key){return _c('option',{key:key,attrs:{"val":number}},[_vm._v(" "+_vm._s(number)+" ")])})],2)])]):_vm._e()]):_vm._e(),_vm._t("over-table"),_c('div',{class:("position-relative " + (_vm.responsive ? 'table-responsive' : ''))},[_c('table',{class:_vm.tableClasses},[_c('thead',[_c('tr',[_vm._l((_vm.columnNames),function(name,index){return [_c('th',{key:index,class:[_vm.headerClass(index), _vm.sortingIconStyles],style:(_vm.headerStyles(index)),on:{"click":function($event){return _vm.changeSort(_vm.rawColumnNames[index], index)}}},[_vm._t(((_vm.rawColumnNames[index]) + "-header"),[_c('div',{staticClass:"d-inline"},[_vm._v(_vm._s(name))])]),(_vm.isSortable(index))?_vm._t("sorting-icon",[_c('CIcon',{class:_vm.iconClasses(index),attrs:{"width":"18","name":"arrowTop"}})],{"state":_vm.getIconState(index)}):_vm._e()],2)]})],2),(_vm.columnFilter)?_c('tr',{staticClass:"table-sm"},[_vm._l((_vm.rawColumnNames),function(colName,index){return [_c('th',{key:index,class:_vm.headerClass(index)},[_vm._t(((_vm.rawColumnNames[index]) + "-filter"),[(!_vm.fields || _vm.fields[index].filter !== false)?_c('input',{staticClass:"w-100 table-filter",domProps:{"value":_vm.columnFilterState[colName]},on:{"input":function($event){return _vm.columnFilterEvent(colName, $event.target.value, 'input')},"change":function($event){return _vm.columnFilterEvent(colName, $event.target.value, 'change')}}}):_vm._e()])],2)]})],2):_vm._e()]),_c('tbody',{staticClass:"position-relative",style:(_vm.clickableRows ? 'cursor:pointer;': null)},[_vm._l((_vm.currentItems),function(item,itemIndex){return [_c('tr',{key:itemIndex,class:item._classes,attrs:{"tabindex":_vm.clickableRows ? 0 : null},on:{"click":function($event){return _vm.rowClicked(item, itemIndex + _vm.firstItemIndex)}}},[_vm._l((_vm.rawColumnNames),function(colName,index){return [(_vm.$scopedSlots[colName])?_vm._t(colName,null,{"item":item,"index":itemIndex + _vm.firstItemIndex}):_c('td',{key:index,class:_vm.cellClass(item, colName, index)},[_vm._v(" "+_vm._s(String(item[colName]))+" ")])]})],2),(_vm.$scopedSlots.details)?_c('tr',{key:'details' + itemIndex,staticClass:"p-0",staticStyle:{"border":"none !important"}},[_c('td',{staticClass:"p-0",staticStyle:{"border":"none !important"},attrs:{"colspan":_vm.colspan}},[_vm._t("details",null,{"item":item,"index":itemIndex + _vm.firstItemIndex})],2)]):_vm._e()]}),(!_vm.currentItems.length)?_c('tr',[_c('td',{attrs:{"colspan":_vm.colspan}},[_vm._t("no-items-view",[_c('div',{staticClass:"text-center my-5"},[_c('h2',[_vm._v(_vm._s(_vm.passedItems.length ? 'No filtering results ' : 'No items')+" "),_c('CIcon',{staticClass:"text-danger mb-2",attrs:{"width":"30","name":"ban"}})],1)])])],2)]):_vm._e()],2),(_vm.footer && _vm.currentItems.length > 0)?_c('tfoot',[_c('tr',[_vm._l((_vm.columnNames),function(name,index){return [_c('th',{key:index,class:[_vm.headerClass(index), _vm.sortingIconStyles],style:(_vm.headerStyles(index)),on:{"click":function($event){return _vm.changeSort(_vm.rawColumnNames[index], index)}}},[_vm._t(((_vm.rawColumnNames[index]) + "-header"),[_c('div',{staticClass:"d-inline"},[_vm._v(_vm._s(name))])]),(_vm.isSortable(index))?_vm._t("sorting-icon",[_c('CIcon',{class:_vm.iconClasses(index),attrs:{"width":"18","name":"arrowTop"}})],{"state":_vm.getIconState(index)}):_vm._e()],2)]})],2)]):_vm._e(),_vm._t("caption")],2),(_vm.loading)?_vm._t("loading",[_c('div',{staticStyle:{"position":"absolute","left":"0","top":"0","bottom":"0","right":"0","background-color":"rgb(255,255,255,0.4)"}},[_c('div',{staticStyle:{"position":"absolute","bottom":"50%","left":"50%","transform":"translateX(-50%)"}},[_c('CSpinner',{attrs:{"color":"success"}})],1)])]):_vm._e()],2),_vm._t("under-table"),(_vm.pagination)?_c('CPagination',_vm._b({directives:[{name:"show",rawName:"v-show",value:(_vm.totalPages > 1),expression:"totalPages > 1"}],attrs:{"activePage":_vm.page,"pages":_vm.totalPages},on:{"update:activePage":function($event){_vm.page=$event},"update:active-page":function($event){_vm.page=$event}}},'CPagination',typeof _vm.pagination === 'object' ? _vm.pagination : null,false)):_vm._e()],2)}
var CDataTablevue_type_template_id_d490c5f4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/table/CDataTable.vue?vue&type=template&id=d490c5f4&scoped=true&

// EXTERNAL MODULE: ./node_modules/@coreui/icons/vue/dist/coreui-icons-vue.common.js
var coreui_icons_vue_common = __webpack_require__("f72e");

// CONCATENATED MODULE: ./node_modules/@coreui/icons/js/arrow-top.js
const arrowTop = ["24 24","\r\r<title>arrow-top</title>\r<path d='M18.311 7.061l-6.311-6.311-6.31 6.311 1.061 1.061 4.5-4.5v19.593h1.5v-19.593l4.5 4.5 1.061-1.061z'></path>\r\r"]
// CONCATENATED MODULE: ./node_modules/@coreui/icons/js/ban.js
const ban = ["24 24","\r\r<title>ban</title>\r<path d='M19.955 4.045c-2.036-2.036-4.848-3.295-7.955-3.295-6.213 0-11.25 5.037-11.25 11.25 0 3.107 1.259 5.919 3.295 7.955v0c2.036 2.036 4.848 3.295 7.955 3.295 6.213 0 11.25-5.037 11.25-11.25 0-3.107-1.259-5.919-3.295-7.955v0zM12 2.25c0.003 0 0.006 0 0.009 0 2.431 0 4.653 0.894 6.356 2.37l-0.012-0.010-13.743 13.743c-1.466-1.691-2.36-3.913-2.36-6.344 0-0.003 0-0.006 0-0.009v0c0-5.376 4.374-9.75 9.75-9.75zM12 21.75c-0.002 0-0.005 0-0.008 0-2.419 0-4.632-0.885-6.332-2.349l0.013 0.011 13.739-13.739c1.453 1.687 2.338 3.9 2.338 6.319 0 0.003 0 0.006 0 0.009v-0c0 5.376-4.374 9.75-9.75 9.75z'></path>\r\r"]
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




var CIcon = Object.assign({}, coreui_icons_vue_common["CIcon"], {
  icons: {
    arrowTop: arrowTop,
    ban: ban
  }
});
/* harmony default export */ var CDataTablevue_type_script_lang_js_ = ({
  name: 'CDataTable',
  components: {
    CPagination: CPagination,
    CSpinner: CSpinner,
    CIcon: CIcon
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
    itemsPerPageSelect: Boolean,
    sorter: [Boolean, String],
    tableFilter: [Boolean, String],
    columnFilter: [Boolean, String],
    sorterValue: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tableFilterValue: String,
    columnFilterValue: Object,
    footer: Boolean,
    loading: Boolean,
    clickableRows: Boolean
  },
  data: function data() {
    return {
      tableFilterState: this.tableFilterValue,
      columnFilterState: {},
      sorterState: {
        column: undefined,
        asc: true
      },
      page: this.activePage || 1,
      perPageItems: this.itemsPerPage,
      passedItems: this.items || []
    };
  },
  watch: {
    sorterValue: {
      immediate: true,
      handler: function handler(val) {
        this.sorterState.column = val.column;
        this.sorterState.asc = val.asc === false ? false : true;
      }
    },
    tableFilterValue: function tableFilterValue(val) {
      this.tableFilterState = val;
    },
    columnFilterValue: {
      immediate: true,
      handler: function handler(val) {
        this.columnFilterState = Object.assign({}, val);
      } // const state = this.columnFilterState
      // const currentColumns = Object.keys(state)
      // Object.keys(val).forEach(colName => {
      //   if (!currentColumns.includes(colName)) {
      //     this.setColumnFilter(colName, val[colName] || '')
      //   }
      // })
      // currentColumns.forEach(colName => state[colName] = val[colName] || '')

    },
    items: function items(val, oldVal) {
      if (val.length !== oldVal.length || JSON.stringify(val) !== JSON.stringify(oldVal)) {
        this.passedItems = val;
      }
    },
    totalPages: {
      immediate: true,
      handler: function handler(val) {
        this.$emit('pages-change', val);
      }
    }
  },
  computed: {
    columnFiltered: function columnFiltered() {
      var _this = this;

      var items = this.passedItems.slice();

      if (this.columnFilter === true) {
        Object.entries(this.columnFilterState).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          if (value && _this.rawColumnNames.includes(key)) {
            var columnFilter = String(value).toLowerCase();
            items = items.filter(function (item) {
              return String(item[key]).toLowerCase().includes(columnFilter);
            });
          }
        });
      }

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

      var items = this.columnFiltered.slice();

      if (this.tableFilter === true && this.tableFilterState) {
        var filter = this.tableFilterState.toLowerCase();

        var hasFilter = function hasFilter(item) {
          return String(item).toLowerCase().includes(filter);
        };

        items = items.filter(function (item) {
          return _this3.filterableCols.filter(function (key) {
            return hasFilter(item[key]);
          }).length;
        });
      }

      return items;
    },
    sortedItems: function sortedItems() {
      var col = this.sorterState.column;

      if (!col || this.sorter !== true || !this.rawColumnNames.includes(col)) {
        return this.tableFiltered;
      } //if values in column are to be sorted by numeric value they all have to be type number


      var flip = this.sorterState.asc ? 1 : -1;
      return this.tableFiltered.slice().sort(function (a, b) {
        return a[col] > b[col] ? 1 * flip : b[col] > a[col] ? -1 * flip : 0;
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
    } // isFiltered () {
    //   return this.tableFilterState || Object.values(this.columnFilterState).join('')
    // }

  },
  methods: {
    changeSort: function changeSort(column, index) {
      if (column && !this.isSortable(index)) {
        return;
      } //if column changed or sort was descending change asc to true


      var state = this.sorterState;
      state.asc = state.column !== column || !state.asc;
      state.column = column;
      this.$emit('update:sorter-value', this.sorterState);
    },
    columnFilterEvent: function columnFilterEvent(colName, value, type) {
      this.setColumnFilter(colName, value);
      var e = type === 'input' ? 'column-filter-input' : 'update:column-filter-value';
      this.$emit(e, this.columnFilterState);
    },
    setColumnFilter: function setColumnFilter(colName, value) {
      this.$set(this.columnFilterState, colName, value);
    },
    tableFilterChange: function tableFilterChange(value) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'input';
      this.tableFilterState = value;
      var e = type === 'input' ? 'table-filter-input' : 'update:table-filter-value';
      this.$emit(e, this.tableFilterState);
    },
    // clear () {
    //   this.tableFilterState = ''
    //   this.columnFilterState = {}
    //   this.sorterState.column = ''
    //   this.sorterState.asc = true
    //   const inputs = this.$el.getElementsByClassName('table-filter')
    //   for (let input of inputs) {
    //     input.value = ''
    //   }
    // },
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
    }
  }
});
// CONCATENATED MODULE: ./src/components/table/CDataTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var table_CDataTablevue_type_script_lang_js_ = (CDataTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/table/CDataTable.vue?vue&type=style&index=0&id=d490c5f4&scoped=true&lang=css&
var CDataTablevue_type_style_index_0_id_d490c5f4_scoped_true_lang_css_ = __webpack_require__("9681");

// CONCATENATED MODULE: ./src/components/table/CDataTable.vue






/* normalize component */

var CDataTable_component = normalizeComponent(
  table_CDataTablevue_type_script_lang_js_,
  CDataTablevue_type_template_id_d490c5f4_scoped_true_render,
  CDataTablevue_type_template_id_d490c5f4_scoped_true_staticRenderFns,
  false,
  null,
  "d490c5f4",
  null
  
)

/* harmony default export */ var CDataTable = (CDataTable_component.exports);
// CONCATENATED MODULE: ./src/components/table/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tabs/CTab.vue?vue&type=script&lang=js&
/* harmony default export */ var CTabvue_type_script_lang_js_ = ({
  name: 'CTab',
  props: {
    titleHtml: String,
    active: Boolean,
    disabled: Boolean
  },
  render: function render(h) {
    return h(false);
  }
});
// CONCATENATED MODULE: ./src/components/tabs/CTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var tabs_CTabvue_type_script_lang_js_ = (CTabvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/tabs/CTab.vue
var CTab_render, CTab_staticRenderFns




/* normalize component */

var CTab_component = normalizeComponent(
  tabs_CTabvue_type_script_lang_js_,
  CTab_render,
  CTab_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CTab = (CTab_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tabs/CTabs.vue?vue&type=template&id=6028dc90&
var CTabsvue_type_template_id_6028dc90_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.wrapperClasses},[_c('div',{class:_vm.navWrapperClasses},[_c('ul',{class:_vm.navClasses},_vm._l((_vm.ctabInstances),function(tab,key){return _c('CTabNav',_vm._b({key:key,attrs:{"title-html":tab.titleHtml,"custom-title-slot":tab.$scopedSlots.title,"active":tab === _vm.activeTab,"disabled":tab.disabled},nativeOn:{"click":function($event){return _vm.tabClick(tab)}}},'CTabNav',tab.$attrs,false))}),1)]),_c('div',{class:[_vm.addTabsWrapperClasses, _vm.gridClasses.content]},[_c('div',{class:_vm.tabsClasses},[_c('transition',{attrs:{"name":_vm.fade ? 'fade' : '',"mode":"out-in"}},[_c('KeepAlive',[_vm._l((_vm.ctabInstances),function(tab,key){return [(_vm.activeTab === tab)?_c('CTabContent',{key:key,class:[_vm.addTabClasses, 'tab-pane active'],attrs:{"content":tab.$scopedSlots.default}}):_vm._e()]})],2)],1)],1)]),_vm._t("default")],2)}
var CTabsvue_type_template_id_6028dc90_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tabs/CTabs.vue?vue&type=template&id=6028dc90&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tabs/CTabNav.vue?vue&type=script&lang=js&

/* harmony default export */ var CTabNavvue_type_script_lang_js_ = ({
  name: 'CTabNav',
  props: Object.assign(propsFactory(), {
    titleHtml: String,
    customTitleSlot: Function
  }),
  render: function render(h) {
    return h('li', {
      staticClass: 'nav-item'
    }, [h(CLink, {
      staticClass: 'nav-link',
      class: {
        'active': this.active
      },
      props: this.props,
      domProps: this.titleHtml ? {
        innerHTML: this.titleHtml
      } : null
    }, this.customTitleSlot ? this.customTitleSlot() : null)]);
  }
});
// CONCATENATED MODULE: ./src/components/tabs/CTabNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var tabs_CTabNavvue_type_script_lang_js_ = (CTabNavvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/tabs/CTabNav.vue
var CTabNav_render, CTabNav_staticRenderFns




/* normalize component */

var CTabNav_component = normalizeComponent(
  tabs_CTabNavvue_type_script_lang_js_,
  CTabNav_render,
  CTabNav_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CTabNav = (CTabNav_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tabs/CTabContent.vue?vue&type=script&lang=js&
/* harmony default export */ var CTabContentvue_type_script_lang_js_ = ({
  name: 'CTabContent',
  props: {
    content: Function
  },
  render: function render(h) {
    return h('div', this.content ? this.content() : '');
  }
});
// CONCATENATED MODULE: ./src/components/tabs/CTabContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var tabs_CTabContentvue_type_script_lang_js_ = (CTabContentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/tabs/CTabContent.vue
var CTabContent_render, CTabContent_staticRenderFns




/* normalize component */

var CTabContent_component = normalizeComponent(
  tabs_CTabContentvue_type_script_lang_js_,
  CTabContent_render,
  CTabContent_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CTabContent = (CTabContent_component.exports);
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
//
//
//
//
//
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
    CTabNav: CTabNav,
    CTabContent: CTabContent
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
    addTabClasses: [String, Array, Object]
  },
  data: function data() {
    return {
      defaultSlotNodes: null,
      activatedTab: null
    };
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
    activeTab: function activeTab() {
      return this.activatedTab || this.ctabInstances.filter(function (el) {
        return el.active;
      })[0];
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
    },
    ctabInstances: function ctabInstances() {
      if (this.defaultSlotNodes) {
        return this.defaultSlotNodes.map(function (node) {
          var instance = node.componentInstance;

          if (instance && instance.$options._componentTag === 'CTab') {
            return instance;
          }
        }).filter(function (el) {
          return el;
        });
      } else {
        return [];
      }
    }
  },
  mounted: function mounted() {
    this.defaultSlotNodes = this.$slots.default;
  },
  updated: function updated() {
    this.defaultSlotNodes = this.$slots.default;
  },
  methods: {
    tabClick: function tabClick(tab) {
      if (!tab.disabled) {
        this.activatedTab = tab;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/tabs/CTabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var tabs_CTabsvue_type_script_lang_js_ = (CTabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/tabs/CTabs.vue?vue&type=style&index=0&lang=css&
var CTabsvue_type_style_index_0_lang_css_ = __webpack_require__("89dc");

// CONCATENATED MODULE: ./src/components/tabs/CTabs.vue






/* normalize component */

var CTabs_component = normalizeComponent(
  tabs_CTabsvue_type_script_lang_js_,
  CTabsvue_type_template_id_6028dc90_render,
  CTabsvue_type_template_id_6028dc90_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CTabs = (CTabs_component.exports);
// CONCATENATED MODULE: ./src/components/tabs/index.js



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/toast/CToast.vue?vue&type=template&id=55dc7f9b&scoped=true&
var CToastvue_type_template_id_55dc7f9b_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.props.fade ? 'fade' : null,"appear":""}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowed),expression:"isShowed"}],class:_vm.toastClasses,style:(_vm.computedStyles),attrs:{"role":"alert","aria-live":"assertive","aria-atomic":"true"}},[(_vm.headerHtml !== undefined || _vm.$slots.header)?_c('div',{staticClass:"toast-header"},[_vm._t("header",[_c('strong',{staticClass:"mr-auto",domProps:{"innerHTML":_vm._s(_vm.headerHtml)}})]),(_vm.props.closeButton)?_c('CButtonClose',{staticClass:"ml-2 mb-1",on:{"click":function($event){return _vm.close()}}}):_vm._e()],2):_vm._e(),(_vm.$slots.default)?_c('div',{staticClass:"toast-body"},[_vm._t("default")],2):_c('div',{staticClass:"toast-body",domProps:{"innerHTML":_vm._s(_vm.bodyHtml)}})])])}
var CToastvue_type_template_id_55dc7f9b_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/toast/CToast.vue?vue&type=template&id=55dc7f9b&scoped=true&

// CONCATENATED MODULE: ./src/components/toast/toast-mixin.js
/* harmony default export */ var toast_mixin = ({
  props: {
    position: {
      type: String,
      default: 'top-right',
      validator: function validator(position) {
        return ['', 'static', 'top-right', 'top-left', 'top-center', 'top-full', 'bottom-right', 'bottom-left', 'bottom-center', 'bottom-full'].includes(position);
      }
    },
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
  },
  computed: {
    computedStyles: function computedStyles() {
      var position = this.props ? this.props.position : this.position;

      if (position !== 'static' && !this.toaster) {
        return [{
          'z-index': 1100
        }, {
          'min-width': '350px'
        }, {
          position: 'fixed'
        }, this.getVerticalPosition(this.position), this.getHorizontalPosition(this.position)];
      }
    }
  },
  methods: {
    getVerticalPosition: function getVerticalPosition(position) {
      return position.includes('bottom') ? {
        bottom: 0
      } : {
        top: 0
      };
    },
    getHorizontalPosition: function getHorizontalPosition(position) {
      if (position.includes('right')) {
        return {
          right: 0
        };
      } else if (position.includes('center')) {
        return {
          left: '50%',
          transform: 'translateX(-50%)'
        };
      } else if (position.includes('full')) {
        return {
          right: 0,
          left: 0
        };
      } else {
        return {
          left: 0
        };
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/toast/CToast.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [toast_mixin],
  components: {
    CButtonClose: CButtonClose
  },
  props: {
    show: Boolean,
    headerHtml: String,
    bodyHtml: String
  },
  inject: {
    toaster: {
      default: false
    }
  },
  data: function data() {
    return {
      isShowed: false,
      hidding: false,
      timeout: null,
      hiddingTimeout: null
    };
  },
  watch: {
    show: function show(val) {
      val ? this.display() : this.close();
    }
  },
  //needed not to be called in show watcher to allow SSR
  mounted: function mounted() {
    this.show ? this.display() : this.close();
  },
  computed: {
    toastClasses: function toastClasses() {
      return ['toast', {
        'd-none': !this.isShowed && !this.hidding,
        'full': this.props.position.includes('full')
      }];
    },
    directlyDeclaredProps: function directlyDeclaredProps() {
      return Object.keys(this.$options.propsData);
    },
    injectedProps: function injectedProps() {
      return this.toaster && this.toaster.props ? this.toaster.props : {};
    },
    props: function props() {
      var _this = this;

      return Object.keys(toast_mixin.props).reduce(function (computedProps, key) {
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

        _this2.finishHidding();
      });
    },
    close: function close() {
      var restoreOnHover = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.isShowed === false) {
        return;
      }

      this.isShowed = false;
      this.$emit('update:show', false);
      this.$el.removeEventListener('mouseout', this.onHoverOut);
      this.$el.removeEventListener('mouseover', this.onHover);

      if (this.props.fade) {
        this.setHiddingMode(restoreOnHover);
      }
    },
    setHiddingMode: function setHiddingMode(restoreOnHover) {
      this.hidding = true;

      if (restoreOnHover) {
        this.$el.addEventListener('mouseover', this.restoreHiddingToast);
      }

      clearTimeout(this.timeout);
      this.hiddingTimeout = setTimeout(this.finishHidding, 1500);
    },
    finishHidding: function finishHidding() {
      this.$el.removeEventListener('mouseover', this.restoreHiddingToast);
      this.hidding = false;
      clearTimeout(this.hiddingTimeout);
    },
    onHover: function onHover() {
      this.$el.removeEventListener('mouseover', this.onHover);
      clearTimeout(this.timeout);
      this.$el.addEventListener('mouseout', this.onHoverOut);
    },
    onHoverOut: function onHoverOut() {
      this.$el.removeEventListener('mouseout', this.onHoverOut);
      this.setAutohide();
    },
    setAutohide: function setAutohide() {
      var _this3 = this;

      this.timeout = setTimeout(function () {
        _this3.close(true);
      }, this.props.autohide);
      this.$el.addEventListener('mouseover', this.onHover);
    },
    restoreHiddingToast: function restoreHiddingToast() {
      this.display();
    }
  }
});
// CONCATENATED MODULE: ./src/components/toast/CToast.vue?vue&type=script&lang=js&
 /* harmony default export */ var toast_CToastvue_type_script_lang_js_ = (CToastvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/toast/CToast.vue?vue&type=style&index=0&id=55dc7f9b&scoped=true&lang=css&
var CToastvue_type_style_index_0_id_55dc7f9b_scoped_true_lang_css_ = __webpack_require__("a19c");

// CONCATENATED MODULE: ./src/components/toast/CToast.vue






/* normalize component */

var CToast_component = normalizeComponent(
  toast_CToastvue_type_script_lang_js_,
  CToastvue_type_template_id_55dc7f9b_scoped_true_render,
  CToastvue_type_template_id_55dc7f9b_scoped_true_staticRenderFns,
  false,
  null,
  "55dc7f9b",
  null
  
)

/* harmony default export */ var CToast = (CToast_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/toast/CToaster.vue?vue&type=template&id=19f95340&
var CToastervue_type_template_id_19f95340_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.toasterClasses,style:(_vm.computedStyles)},[_vm._t("default")],2)}
var CToastervue_type_template_id_19f95340_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/toast/CToaster.vue?vue&type=template&id=19f95340&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/toast/CToaster.vue?vue&type=script&lang=js&
//
//
//
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
  mixins: [toast_mixin],
  props: {
    reverse: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    toasterClasses: function toasterClasses() {
      return ['toaster', {
        'd-flex flex-column-reverse': this.reverse
      }];
    }
  }
});
// CONCATENATED MODULE: ./src/components/toast/CToaster.vue?vue&type=script&lang=js&
 /* harmony default export */ var toast_CToastervue_type_script_lang_js_ = (CToastervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/toast/CToaster.vue





/* normalize component */

var CToaster_component = normalizeComponent(
  toast_CToastervue_type_script_lang_js_,
  CToastervue_type_template_id_19f95340_render,
  CToastervue_type_template_id_19f95340_staticRenderFns,
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


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/CWidgetProgress.vue?vue&type=template&id=2a04d440&
var CWidgetProgressvue_type_template_id_2a04d440_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.inverse ? ("card text-white bg-" + _vm.color) : 'card'},[_c('div',{staticClass:"card-body"},[(_vm.header)?_c('div',{staticClass:"h4 m-0"},[_vm._v(_vm._s(_vm.header))]):_vm._e(),(_vm.text)?_c('div',[_vm._v(_vm._s(_vm.text))]):_vm._e(),_vm._t("default",[_c('CProgress',{staticClass:"progress-xs my-3 mb-0",class:_vm.inverse ? 'progress-white' : '',attrs:{"color":!_vm.inverse ? _vm.color : '',"value":_vm.value}})]),(_vm.footer)?_c('small',{staticClass:"text-muted"},[_vm._v(" "+_vm._s(_vm.footer)+" ")]):_vm._e()],2)])}
var CWidgetProgressvue_type_template_id_2a04d440_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/widgets/CWidgetProgress.vue?vue&type=template&id=2a04d440&

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
  CWidgetProgressvue_type_template_id_2a04d440_render,
  CWidgetProgressvue_type_template_id_2a04d440_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CWidgetProgress = (CWidgetProgress_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/CWidgetIcon.vue?vue&type=template&id=4c394cc4&
var CWidgetIconvue_type_template_id_4c394cc4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body clearfix d-flex align-items-center",class:_vm.iconPadding ? 'p-3' : 'p-0'},[_c('div',{staticClass:"float-left mr-3 text-white",class:[("bg-" + _vm.color), _vm.iconPadding ? 'p-3' : 'p-4']},[_vm._t("default")],2),_c('div',[(_vm.header)?_c('div',{class:("text-value text-" + _vm.color)},[_vm._v(" "+_vm._s(_vm.header)+" ")]):_vm._e(),(_vm.text)?_c('div',{staticClass:"text-muted text-uppercase font-weight-bold small"},[_vm._v(" "+_vm._s(_vm.text)+" ")]):_vm._e()])])])}
var CWidgetIconvue_type_template_id_4c394cc4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/widgets/CWidgetIcon.vue?vue&type=template&id=4c394cc4&

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
  CWidgetIconvue_type_template_id_4c394cc4_render,
  CWidgetIconvue_type_template_id_4c394cc4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CWidgetIcon = (CWidgetIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/CWidgetBrand.vue?vue&type=template&id=3094e01a&
var CWidgetBrandvue_type_template_id_3094e01a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header content-center text-white p-0",class:[("bg-" + _vm.color), _vm.addHeaderClasses]},[_vm._t("default")],2),_vm._t("body",[_c('div',{staticClass:"card-body row text-center"},[_c('div',{staticClass:"col"},[(_vm.rightHeader)?_c('div',{staticClass:"text-value-lg"},[_vm._v(" "+_vm._s(_vm.rightHeader)+" ")]):_vm._e(),(_vm.rightFooter)?_c('div',{staticClass:"text-uppercase text-muted small"},[_vm._v(" "+_vm._s(_vm.rightFooter)+" ")]):_vm._e()]),_c('div',{staticClass:"vr"}),_c('div',{staticClass:"col"},[(_vm.leftHeader)?_c('div',{staticClass:"text-value-lg"},[_vm._v(" "+_vm._s(_vm.leftHeader)+" ")]):_vm._e(),(_vm.leftFooter)?_c('div',{staticClass:"text-uppercase text-muted small"},[_vm._v(" "+_vm._s(_vm.leftFooter)+" ")]):_vm._e()])])])],2)}
var CWidgetBrandvue_type_template_id_3094e01a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/widgets/CWidgetBrand.vue?vue&type=template&id=3094e01a&

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
  CWidgetBrandvue_type_template_id_3094e01a_render,
  CWidgetBrandvue_type_template_id_3094e01a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CWidgetBrand = (CWidgetBrand_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/CWidgetProgressIcon.vue?vue&type=template&id=7955a402&
var CWidgetProgressIconvue_type_template_id_7955a402_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.inverse ? ("card text-white bg-" + _vm.color) : 'card'},[_c('div',{staticClass:"card-body"},[(_vm.$slots.default)?_c('div',{staticClass:"h1 text-muted text-right mb-4"},[_vm._t("default")],2):_vm._e(),(_vm.header)?_c('div',{staticClass:"h4 mb-0"},[_vm._v(_vm._s(_vm.header))]):_vm._e(),(_vm.text)?_c('small',{staticClass:"text-muted text-uppercase font-weight-bold"},[_vm._v(" "+_vm._s(_vm.text)+" ")]):_vm._e(),_vm._t("progress",[_c('CProgress',{staticClass:"progress-xs my-3 mb-0",class:_vm.inverse ? 'progress-white' : '',attrs:{"color":!_vm.inverse ? _vm.color : '',"value":_vm.value}})])],2)])}
var CWidgetProgressIconvue_type_template_id_7955a402_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/widgets/CWidgetProgressIcon.vue?vue&type=template&id=7955a402&

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
  CWidgetProgressIconvue_type_template_id_7955a402_render,
  CWidgetProgressIconvue_type_template_id_7955a402_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CWidgetProgressIcon = (CWidgetProgressIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/CWidgetDropdown.vue?vue&type=template&id=22e48cf8&
var CWidgetDropdownvue_type_template_id_22e48cf8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card",class:("bg-" + _vm.color + " text-white")},[_c('div',{staticClass:"card-body pb-0"},[_vm._t("default"),(_vm.header)?_c('h4',{staticClass:"mb-0"},[_vm._v(_vm._s(_vm.header))]):_vm._e(),(_vm.text)?_c('p',[_vm._v(_vm._s(_vm.text))]):_vm._e()],2),_vm._t("footer")],2)}
var CWidgetDropdownvue_type_template_id_22e48cf8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/widgets/CWidgetDropdown.vue?vue&type=template&id=22e48cf8&

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
  CWidgetDropdownvue_type_template_id_22e48cf8_render,
  CWidgetDropdownvue_type_template_id_22e48cf8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CWidgetDropdown = (CWidgetDropdown_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/CWidgetHeaderDetails.vue?vue&type=template&id=207b4ac0&
var CWidgetHeaderDetailsvue_type_template_id_207b4ac0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card",class:("bg-" + _vm.color + " text-white")},[_c('div',{staticClass:"card-header"},[_c('div',{staticClass:"font-weight-bold"},[(_vm.rightHeader)?_c('span',[_vm._v(_vm._s(_vm.rightHeader))]):_vm._e(),(_vm.leftHeader)?_c('span',{staticClass:"float-right"},[_vm._v(_vm._s(_vm.leftHeader))]):_vm._e()]),_c('div',[_c('span',[(_vm.rightFooter)?_c('small',[_vm._v(_vm._s(_vm.rightFooter))]):_vm._e()]),_c('span',{staticClass:"float-right"},[(_vm.leftFooter)?_c('small',[_vm._v(_vm._s(_vm.leftFooter))]):_vm._e()])]),_vm._t("default")],2)])}
var CWidgetHeaderDetailsvue_type_template_id_207b4ac0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/widgets/CWidgetHeaderDetails.vue?vue&type=template&id=207b4ac0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/CWidgetHeaderDetails.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CWidgetHeaderDetailsvue_type_script_lang_js_ = ({
  name: 'CWidgetHeaderDetails',
  props: {
    color: String,
    rightHeader: String,
    rightFooter: String,
    leftHeader: String,
    leftFooter: String
  }
});
// CONCATENATED MODULE: ./src/components/widgets/CWidgetHeaderDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var widgets_CWidgetHeaderDetailsvue_type_script_lang_js_ = (CWidgetHeaderDetailsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/widgets/CWidgetHeaderDetails.vue





/* normalize component */

var CWidgetHeaderDetails_component = normalizeComponent(
  widgets_CWidgetHeaderDetailsvue_type_script_lang_js_,
  CWidgetHeaderDetailsvue_type_template_id_207b4ac0_render,
  CWidgetHeaderDetailsvue_type_template_id_207b4ac0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CWidgetHeaderDetails = (CWidgetHeaderDetails_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33fa373e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/CWidgetSimple.vue?vue&type=template&id=2a54f662&
var CWidgetSimplevue_type_template_id_2a54f662_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body text-center"},[(_vm.header)?_c('div',{staticClass:"text-muted small text-uppercase font-weight-bold"},[_vm._v(" "+_vm._s(_vm.header)+" ")]):_vm._e(),(_vm.text)?_c('div',{staticClass:"h2 py-3"},[_vm._v(" "+_vm._s(_vm.text)+" ")]):_vm._e(),_vm._t("default")],2)])}
var CWidgetSimplevue_type_template_id_2a54f662_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/widgets/CWidgetSimple.vue?vue&type=template&id=2a54f662&

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

      this.popperInstance = new popper["a" /* default */](reference, tooltipNode, this._popperOptions);

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
      popperOptions: props.popperOptions
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
    var title = props.content || props; // const modifiersTriggers = String(Object.keys(binding.modifiers)).replace(',',' ')

    var closeOnClickOutside = props.closeOnClickOutside === false ? false : true;
    return {
      title: title,
      trigger: 'hover',
      html: true,
      placement: props.placement || 'top',
      delay: props.delay || 0,
      offset: props.offset || 0,
      arrowSelector: '.arrow',
      innerSelector: '.tooltip-inner',
      template: binding.def.getTemplate(),
      boundariesElement: document.getElementById(props.boundaries) || props.boundaries,
      container: props.appendToBody ? document.body : false,
      closeOnClickOutside: closeOnClickOutside,
      popperOptions: props.popperOptions
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
/* concated harmony reexport CPopover */__webpack_require__.d(__webpack_exports__, "CPopover", function() { return CPopover; });
/* concated harmony reexport CTooltip */__webpack_require__.d(__webpack_exports__, "CTooltip", function() { return CTooltip; });
/* concated harmony reexport CEmitRootEvent */__webpack_require__.d(__webpack_exports__, "CEmitRootEvent", function() { return CEmitRootEvent; });
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
/* concated harmony reexport CEmbed */__webpack_require__.d(__webpack_exports__, "CEmbed", function() { return CEmbed; });
/* concated harmony reexport CFooter */__webpack_require__.d(__webpack_exports__, "CFooter", function() { return CFooter; });
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
/* concated harmony reexport CHeader */__webpack_require__.d(__webpack_exports__, "CHeader", function() { return CHeader; });
/* concated harmony reexport CHeaderBrand */__webpack_require__.d(__webpack_exports__, "CHeaderBrand", function() { return CHeaderBrand; });
/* concated harmony reexport CHeaderNav */__webpack_require__.d(__webpack_exports__, "CHeaderNav", function() { return CHeaderNav; });
/* concated harmony reexport CHeaderNavItem */__webpack_require__.d(__webpack_exports__, "CHeaderNavItem", function() { return CHeaderNavItem; });
/* concated harmony reexport CHeaderNavLink */__webpack_require__.d(__webpack_exports__, "CHeaderNavLink", function() { return CHeaderNavLink; });
/* concated harmony reexport CSubheader */__webpack_require__.d(__webpack_exports__, "CSubheader", function() { return CSubheader; });
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
/* concated harmony reexport CSidebarNavLink */__webpack_require__.d(__webpack_exports__, "CSidebarNavLink", function() { return CSidebarNavLink; });
/* concated harmony reexport CSidebarNavTitle */__webpack_require__.d(__webpack_exports__, "CSidebarNavTitle", function() { return CSidebarNavTitle; });
/* concated harmony reexport CSpinner */__webpack_require__.d(__webpack_exports__, "CSpinner", function() { return CSpinner; });
/* concated harmony reexport CSwitch */__webpack_require__.d(__webpack_exports__, "CSwitch", function() { return CSwitch; });
/* concated harmony reexport CDataTable */__webpack_require__.d(__webpack_exports__, "CDataTable", function() { return CDataTable; });
/* concated harmony reexport CTab */__webpack_require__.d(__webpack_exports__, "CTab", function() { return CTab; });
/* concated harmony reexport CTabs */__webpack_require__.d(__webpack_exports__, "CTabs", function() { return CTabs; });
/* concated harmony reexport CToast */__webpack_require__.d(__webpack_exports__, "CToast", function() { return CToast; });
/* concated harmony reexport CToaster */__webpack_require__.d(__webpack_exports__, "CToaster", function() { return CToaster; });
/* concated harmony reexport CToggler */__webpack_require__.d(__webpack_exports__, "CToggler", function() { return CToggler; });
/* concated harmony reexport CWidgetProgress */__webpack_require__.d(__webpack_exports__, "CWidgetProgress", function() { return CWidgetProgress; });
/* concated harmony reexport CWidgetIcon */__webpack_require__.d(__webpack_exports__, "CWidgetIcon", function() { return CWidgetIcon; });
/* concated harmony reexport CWidgetBrand */__webpack_require__.d(__webpack_exports__, "CWidgetBrand", function() { return CWidgetBrand; });
/* concated harmony reexport CWidgetProgressIcon */__webpack_require__.d(__webpack_exports__, "CWidgetProgressIcon", function() { return CWidgetProgressIcon; });
/* concated harmony reexport CWidgetDropdown */__webpack_require__.d(__webpack_exports__, "CWidgetDropdown", function() { return CWidgetDropdown; });
/* concated harmony reexport CWidgetHeaderDetails */__webpack_require__.d(__webpack_exports__, "CWidgetHeaderDetails", function() { return CWidgetHeaderDetails; });
/* concated harmony reexport CWidgetSimple */__webpack_require__.d(__webpack_exports__, "CWidgetSimple", function() { return CWidgetSimple; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
});
//# sourceMappingURL=coreui-vue.umd.js.map