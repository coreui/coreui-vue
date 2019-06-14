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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "014b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("e53d");
var has = __webpack_require__("07e3");
var DESCRIPTORS = __webpack_require__("8e60");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var META = __webpack_require__("ebfd").KEY;
var $fails = __webpack_require__("294c");
var shared = __webpack_require__("dbdb");
var setToStringTag = __webpack_require__("45f2");
var uid = __webpack_require__("62a0");
var wks = __webpack_require__("5168");
var wksExt = __webpack_require__("ccb9");
var wksDefine = __webpack_require__("6718");
var enumKeys = __webpack_require__("47ee");
var isArray = __webpack_require__("9003");
var anObject = __webpack_require__("e4ae");
var isObject = __webpack_require__("f772");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var createDesc = __webpack_require__("aebd");
var _create = __webpack_require__("a159");
var gOPNExt = __webpack_require__("0395");
var $GOPD = __webpack_require__("bf0b");
var $DP = __webpack_require__("d9f6");
var $keys = __webpack_require__("c3a1");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("6abf").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("355d").f = $propertyIsEnumerable;
  __webpack_require__("9aa9").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("b8e3")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("35e8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "0240":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".toaster{z-index:1100}", ""]);

// exports


/***/ }),

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

/***/ "0395":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("36c3");
var gOPN = __webpack_require__("6abf").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
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

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "10e4":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".c-nav-link{cursor:pointer}", ""]);

// exports


/***/ }),

/***/ "1169":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("2d95");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "12ee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e146");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1654":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("71c1")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("30f1")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "18d2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects objects to elements in order to detect resize events.
 * Heavily inspired by: http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/
 */



var browserDetector = __webpack_require__("18e9");

module.exports = function(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var batchProcessor  = options.batchProcessor;
    var getState        = options.stateHandler.getState;

    if(!reporter) {
        throw new Error("Missing required dependency: reporter.");
    }

    /**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
    function addListener(element, listener) {
        function listenerProxy() {
            listener(element);
        }

        if(browserDetector.isIE(8)) {
            //IE 8 does not support object, but supports the resize event directly on elements.
            getState(element).object = {
                proxy: listenerProxy
            };
            element.attachEvent("onresize", listenerProxy);
        } else {
            var object = getObject(element);

            if(!object) {
                throw new Error("Element is not detectable by this strategy.");
            }

            object.contentDocument.defaultView.addEventListener("resize", listenerProxy);
        }
    }

    function buildCssTextString(rules) {
        var seperator = options.important ? " !important; " : "; ";

        return (rules.join(seperator) + seperator).trim();
    }

    /**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
    function makeDetectable(options, element, callback) {
        if (!callback) {
            callback = element;
            element = options;
            options = null;
        }

        options = options || {};
        var debug = options.debug;

        function injectObject(element, callback) {
            var OBJECT_STYLE = buildCssTextString(["display: block", "position: absolute", "top: 0", "left: 0", "width: 100%", "height: 100%", "border: none", "padding: 0", "margin: 0", "opacity: 0", "z-index: -1000", "pointer-events: none"]);

            //The target element needs to be positioned (everything except static) so the absolute positioned object will be positioned relative to the target element.

            // Position altering may be performed directly or on object load, depending on if style resolution is possible directly or not.
            var positionCheckPerformed = false;

            // The element may not yet be attached to the DOM, and therefore the style object may be empty in some browsers.
            // Since the style object is a reference, it will be updated as soon as the element is attached to the DOM.
            var style = window.getComputedStyle(element);
            var width = element.offsetWidth;
            var height = element.offsetHeight;

            getState(element).startSize = {
                width: width,
                height: height
            };

            function mutateDom() {
                function alterPositionStyles() {
                    if(style.position === "static") {
                        element.style.setProperty("position", "relative", options.important ? "important" : "");

                        var removeRelativeStyles = function(reporter, element, style, property) {
                            function getNumericalValue(value) {
                                return value.replace(/[^-\d\.]/g, "");
                            }

                            var value = style[property];

                            if(value !== "auto" && getNumericalValue(value) !== "0") {
                                reporter.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element);
                                element.style.setProperty(property, "0", options.important ? "important" : "");
                            }
                        };

                        //Check so that there are no accidental styles that will make the element styled differently now that is is relative.
                        //If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
                        removeRelativeStyles(reporter, element, style, "top");
                        removeRelativeStyles(reporter, element, style, "right");
                        removeRelativeStyles(reporter, element, style, "bottom");
                        removeRelativeStyles(reporter, element, style, "left");
                    }
                }

                function onObjectLoad() {
                    // The object has been loaded, which means that the element now is guaranteed to be attached to the DOM.
                    if (!positionCheckPerformed) {
                        alterPositionStyles();
                    }

                    /*jshint validthis: true */

                    function getDocument(element, callback) {
                        //Opera 12 seem to call the object.onload before the actual document has been created.
                        //So if it is not present, poll it with an timeout until it is present.
                        //TODO: Could maybe be handled better with object.onreadystatechange or similar.
                        if(!element.contentDocument) {
                            setTimeout(function checkForObjectDocument() {
                                getDocument(element, callback);
                            }, 100);

                            return;
                        }

                        callback(element.contentDocument);
                    }

                    //Mutating the object element here seems to fire another load event.
                    //Mutating the inner document of the object element is fine though.
                    var objectElement = this;

                    //Create the style element to be added to the object.
                    getDocument(objectElement, function onObjectDocumentReady(objectDocument) {
                        //Notify that the element is ready to be listened to.
                        callback(element);
                    });
                }

                // The element may be detached from the DOM, and some browsers does not support style resolving of detached elements.
                // The alterPositionStyles needs to be delayed until we know the element has been attached to the DOM (which we are sure of when the onObjectLoad has been fired), if style resolution is not possible.
                if (style.position !== "") {
                    alterPositionStyles(style);
                    positionCheckPerformed = true;
                }

                //Add an object element as a child to the target element that will be listened to for resize events.
                var object = document.createElement("object");
                object.style.cssText = OBJECT_STYLE;
                object.tabIndex = -1;
                object.type = "text/html";
                object.onload = onObjectLoad;

                //Safari: This must occur before adding the object to the DOM.
                //IE: Does not like that this happens before, even if it is also added after.
                if(!browserDetector.isIE()) {
                    object.data = "about:blank";
                }

                if (!getState(element)) {
                    // The element has been uninstalled before the actual loading happened.
                    return;
                }

                element.appendChild(object);
                getState(element).object = object;

                //IE: This must occur after adding the object to the DOM.
                if(browserDetector.isIE()) {
                    object.data = "about:blank";
                }
            }

            if(batchProcessor) {
                batchProcessor.add(mutateDom);
            } else {
                mutateDom();
            }
        }

        if(browserDetector.isIE(8)) {
            //IE 8 does not support objects properly. Luckily they do support the resize event.
            //So do not inject the object and notify that the element is already ready to be listened to.
            //The event handler for the resize event is attached in the utils.addListener instead.
            callback(element);
        } else {
            injectObject(element, callback);
        }
    }

    /**
     * Returns the child object of the target element.
     * @private
     * @param {element} element The target element.
     * @returns The object element of the target.
     */
    function getObject(element) {
        return getState(element).object;
    }

    function uninstall(element) {
        if (!getState(element)) {
            return;
        }

        var object = getObject(element);

        if (!object) {
            return;
        }

        if (browserDetector.isIE(8)) {
            element.detachEvent("onresize", object.proxy);
        } else {
            element.removeChild(object);
        }
        delete getState(element).object;
    }

    return {
        makeDetectable: makeDetectable,
        addListener: addListener,
        uninstall: uninstall
    };
};


/***/ }),

/***/ "18e9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var detector = module.exports = {};

detector.isIE = function(version) {
    function isAnyIeVersion() {
        var agent = navigator.userAgent.toLowerCase();
        return agent.indexOf("msie") !== -1 || agent.indexOf("trident") !== -1 || agent.indexOf(" edge/") !== -1;
    }

    if(!isAnyIeVersion()) {
        return false;
    }

    if(!version) {
        return true;
    }

    //Shamelessly stolen from https://gist.github.com/padolsey/527683
    var ieVersion = (function(){
        var undef,
            v = 3,
            div = document.createElement("div"),
            all = div.getElementsByTagName("i");

        do {
            div.innerHTML = "<!--[if gt IE " + (++v) + "]><i></i><![endif]-->";
        }
        while (all[0]);

        return v > 4 ? v : undef;
    }());

    return version === ieVersion;
};

detector.isLegacyOpera = function() {
    return !!window.opera;
};


/***/ }),

/***/ "1a98":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".c-carousel-inner,.c-carousel-item{height:inherit}", ""]);

// exports


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

/***/ "1c4c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("9b43");
var $export = __webpack_require__("5ca1");
var toObject = __webpack_require__("4bf8");
var call = __webpack_require__("1fa8");
var isArrayIter = __webpack_require__("33a4");
var toLength = __webpack_require__("9def");
var createProperty = __webpack_require__("f1ae");
var getIterFn = __webpack_require__("27ee");

$export($export.S + $export.F * !__webpack_require__("5cc5")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


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

/***/ "1fa8":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("cb7c");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
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

/***/ "2350":
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

/***/ "241e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "268f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fde4");

/***/ }),

/***/ "27ee":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("23c6");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var Iterators = __webpack_require__("84f2");
module.exports = __webpack_require__("8378").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__("aae3");
var anObject = __webpack_require__("cb7c");
var speciesConstructor = __webpack_require__("ebd6");
var advanceStringIndex = __webpack_require__("0390");
var toLength = __webpack_require__("9def");
var callRegExpExec = __webpack_require__("5f1b");
var regexpExec = __webpack_require__("520a");
var fails = __webpack_require__("79e5");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__("214f")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


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

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


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

/***/ "2cef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
    var idCount = 1;

    /**
     * Generates a new unique id in the context.
     * @public
     * @returns {number} A unique id in the context.
     */
    function generate() {
        return idCount++;
    }

    return {
        generate: generate
    };
};


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

/***/ "2f21":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("79e5");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
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

/***/ "30f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var $iterCreate = __webpack_require__("8f60");
var setToStringTag = __webpack_require__("45f2");
var getPrototypeOf = __webpack_require__("53e2");
var ITERATOR = __webpack_require__("5168")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "32a6":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("241e");
var $keys = __webpack_require__("c3a1");

__webpack_require__("ce7e")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
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

/***/ "32fc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "33a4":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("84f2");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


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

/***/ "36bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__("4bf8");
var toAbsoluteIndex = __webpack_require__("77f1");
var toLength = __webpack_require__("9def");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("335c");
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "37c8":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("2b4c");


/***/ }),

/***/ "3846":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("9e1e") && /./g.flags != 'g') __webpack_require__("86cc").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("0bfb")
});


/***/ }),

/***/ "386b":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "3a72":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var LIBRARY = __webpack_require__("2d00");
var wksExt = __webpack_require__("37c8");
var defineProperty = __webpack_require__("86cc").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
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

/***/ "456d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("4bf8");
var $keys = __webpack_require__("0d58");

__webpack_require__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


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

/***/ "45f2":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d9f6").f;
var has = __webpack_require__("07e3");
var TAG = __webpack_require__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
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

/***/ "47ee":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "481b":
/***/ (function(module, exports) {

module.exports = {};


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

/***/ "49ad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(idHandler) {
    var eventListeners = {};

    /**
     * Gets all listeners for the given element.
     * @public
     * @param {element} element The element to get all listeners for.
     * @returns All listeners for the given element.
     */
    function getListeners(element) {
        var id = idHandler.get(element);

        if (id === undefined) {
            return [];
        }

        return eventListeners[id] || [];
    }

    /**
     * Stores the given listener for the given element. Will not actually add the listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The callback that the element has added.
     */
    function addListener(element, listener) {
        var id = idHandler.get(element);

        if(!eventListeners[id]) {
            eventListeners[id] = [];
        }

        eventListeners[id].push(listener);
    }

    function removeListener(element, listener) {
        var listeners = getListeners(element);
        for (var i = 0, len = listeners.length; i < len; ++i) {
            if (listeners[i] === listener) {
              listeners.splice(i, 1);
              break;
            }
        }
    }

    function removeAllListeners(element) {
      var listeners = getListeners(element);
      if (!listeners) { return; }
      listeners.length = 0;
    }

    return {
        get: getListeners,
        add: addListener,
        removeListener: removeListener,
        removeAllListeners: removeAllListeners
    };
};


/***/ }),

/***/ "4ad2":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8ae4");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("1abcdf21", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "504c":
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__("0d58");
var toIObject = __webpack_require__("6821");
var isEnum = __webpack_require__("52a7").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "5058":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(options) {
    var idGenerator     = options.idGenerator;
    var getState        = options.stateHandler.getState;

    /**
     * Gets the resize detector id of the element.
     * @public
     * @param {element} element The target element to get the id of.
     * @returns {string|number|null} The id of the element. Null if it has no id.
     */
    function getId(element) {
        var state = getState(element);

        if (state && state.id !== undefined) {
            return state.id;
        }

        return null;
    }

    /**
     * Sets the resize detector id of the element. Requires the element to have a resize detector state initialized.
     * @public
     * @param {element} element The target element to set the id of.
     * @returns {string|number|null} The id of the element.
     */
    function setId(element) {
        var state = getState(element);

        if (!state) {
            throw new Error("setId required the element to have a resize detection state.");
        }

        var id = idGenerator.generate();

        state.id = id;

        return id;
    }

    return {
        get: getId,
        set: setId
    };
};


/***/ }),

/***/ "50bf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = module.exports = {};

utils.getOption = getOption;

function getOption(options, name, defaultValue) {
    var value = options[name];

    if((value === undefined || value === null) && defaultValue !== undefined) {
        return defaultValue;
    }

    return value;
}


/***/ }),

/***/ "50ed":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
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

/***/ "5168":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("dbdb")('wks');
var uid = __webpack_require__("62a0");
var Symbol = __webpack_require__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


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

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "53e2":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("07e3");
var toObject = __webpack_require__("241e");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


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

/***/ "5559":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("dbdb")('keys');
var uid = __webpack_require__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "557d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a8c8");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("7d43fbde", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "55dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("5ca1");
var aFunction = __webpack_require__("d8e8");
var toObject = __webpack_require__("4bf8");
var fails = __webpack_require__("79e5");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__("2f21")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("36c3");
var toLength = __webpack_require__("b447");
var toAbsoluteIndex = __webpack_require__("0fc9");
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

/***/ "5be5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(options) {
    var getState = options.stateHandler.getState;

    /**
     * Tells if the element has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is detectable or not.
     */
    function isDetectable(element) {
        var state = getState(element);
        return state && !!state.isDetectable;
    }

    /**
     * Marks the element that it has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to mark.
     */
    function markAsDetectable(element) {
        getState(element).isDetectable = true;
    }

    /**
     * Tells if the element is busy or not.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is busy or not.
     */
    function isBusy(element) {
        return !!getState(element).busy;
    }

    /**
     * Marks the object is busy and should not be made detectable.
     * @public
     * @param {element} element The element to mark.
     * @param {boolean} busy If the element is busy or not.
     */
    function markBusy(element, busy) {
        getState(element).busy = !!busy;
    }

    return {
        isDetectable: isDetectable,
        markAsDetectable: markAsDetectable,
        isBusy: isBusy,
        markBusy: markBusy
    };
};


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

/***/ "5cc5":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("2b4c")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "5d58":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d8d6");

/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5dbc0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CAlert_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("557d");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CAlert_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CAlert_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CAlert_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5df3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("02f4")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("01f9")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var fails = __webpack_require__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


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

/***/ "6002":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CSidebarNavDropdown_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bc42");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CSidebarNavDropdown_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CSidebarNavDropdown_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CSidebarNavDropdown_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
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

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
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

/***/ "6718":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var LIBRARY = __webpack_require__("b8e3");
var wksExt = __webpack_require__("ccb9");
var defineProperty = __webpack_require__("d9f6").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


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

/***/ "67ab":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("ca5a")('meta');
var isObject = __webpack_require__("d3f4");
var has = __webpack_require__("69a8");
var setDesc = __webpack_require__("86cc").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("79e5")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "67bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f921");

/***/ }),

/***/ "67e9":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".c-transparent[data-v-58e33ed4]{opacity:.4}.c-icon-transition[data-v-58e33ed4]{-webkit-transition:transform .3s;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.c-is-loading[data-v-58e33ed4]{opacity:.4}.c-arrow-position[data-v-58e33ed4]{right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.c-rotate-icon[data-v-58e33ed4]{-webkit-transform:translateY(-50%) rotate(-180deg);transform:translateY(-50%) rotate(-180deg)}", ""]);

// exports


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

/***/ "69d3":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('asyncIterator');


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

/***/ "6abf":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("e6f3");
var hiddenKeys = __webpack_require__("1691").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "6afe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CTable_vue_vue_type_style_index_0_id_58e33ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d023");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CTable_vue_vue_type_style_index_0_id_58e33ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CTable_vue_vue_type_style_index_0_id_58e33ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CTable_vue_vue_type_style_index_0_id_58e33ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6b54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("3846");
var anObject = __webpack_require__("cb7c");
var $flags = __webpack_require__("0bfb");
var DESCRIPTORS = __webpack_require__("9e1e");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("2aba")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("79e5")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "6b75":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1a98");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("a434cf3c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "6c1c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c367");
var global = __webpack_require__("e53d");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var TO_STRING_TAG = __webpack_require__("5168")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "6c7b":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__("5ca1");

$export($export.P, 'Array', { fill: __webpack_require__("36bd") });

__webpack_require__("9c6c")('fill');


/***/ }),

/***/ "6d21":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("f32a");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("c26e82b6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "71c1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var defined = __webpack_require__("25eb");
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

/***/ "71c10":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CToast_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6d21");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CToast_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CToast_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CToast_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "7333":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
var toObject = __webpack_require__("4bf8");
var IObject = __webpack_require__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "765d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('observable');


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

/***/ "7bbc":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("6821");
var gOPN = __webpack_require__("9093").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var anObject = __webpack_require__("e4ae");
var getKeys = __webpack_require__("c3a1");

module.exports = __webpack_require__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
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

/***/ "8293":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CCarousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6b75");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CCarousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CCarousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CCarousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "85f2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("454f");

/***/ }),

/***/ "8615":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("5ca1");
var $values = __webpack_require__("504c")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


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

/***/ "8a81":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var DESCRIPTORS = __webpack_require__("9e1e");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var META = __webpack_require__("67ab").KEY;
var $fails = __webpack_require__("79e5");
var shared = __webpack_require__("5537");
var setToStringTag = __webpack_require__("7f20");
var uid = __webpack_require__("ca5a");
var wks = __webpack_require__("2b4c");
var wksExt = __webpack_require__("37c8");
var wksDefine = __webpack_require__("3a72");
var enumKeys = __webpack_require__("d4c0");
var isArray = __webpack_require__("1169");
var anObject = __webpack_require__("cb7c");
var isObject = __webpack_require__("d3f4");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var createDesc = __webpack_require__("4630");
var _create = __webpack_require__("2aeb");
var gOPNExt = __webpack_require__("7bbc");
var $GOPD = __webpack_require__("11e9");
var $DP = __webpack_require__("86cc");
var $keys = __webpack_require__("0d58");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("9093").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("52a7").f = $propertyIsEnumerable;
  __webpack_require__("2621").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("2d00")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("32e9")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "8aae":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("32a6");
module.exports = __webpack_require__("584a").Object.keys;


/***/ }),

/***/ "8ae4":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".c-scroll-area{height:100%;margin:auto}", ""]);

// exports


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8f60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a159");
var descriptor = __webpack_require__("aebd");
var setToStringTag = __webpack_require__("45f2");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("35e8")(IteratorPrototype, __webpack_require__("5168")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "9003":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("6b4c");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9138":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("35e8");


/***/ }),

/***/ "96f8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CImageLazy_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cabd");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CImageLazy_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CImageLazy_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CImageLazy_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9aa9":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


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

/***/ "9d63":
/***/ (function(module, exports) {

module.exports=function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=6)}([function(t,e,r){"use strict";function o(t,e){function r(){t.classList.add("ps--focus")}function o(){t.classList.remove("ps--focus")}var n=this;n.settings=a();for(var i in e)n.settings[i]=e[i];n.containerWidth=null,n.containerHeight=null,n.contentWidth=null,n.contentHeight=null,n.isRtl="rtl"===c.css(t,"direction"),n.isNegativeScroll=function(){var e=t.scrollLeft,r=null;return t.scrollLeft=-1,r=t.scrollLeft<0,t.scrollLeft=e,r}(),n.negativeScrollAdjustment=n.isNegativeScroll?t.scrollWidth-t.clientWidth:0,n.event=new u,n.ownerDocument=t.ownerDocument||document,n.scrollbarXRail=c.appendTo(c.create("div","ps__scrollbar-x-rail"),t),n.scrollbarX=c.appendTo(c.create("div","ps__scrollbar-x"),n.scrollbarXRail),n.scrollbarX.setAttribute("tabindex",0),n.event.bind(n.scrollbarX,"focus",r),n.event.bind(n.scrollbarX,"blur",o),n.scrollbarXActive=null,n.scrollbarXWidth=null,n.scrollbarXLeft=null,n.scrollbarXBottom=s.toInt(c.css(n.scrollbarXRail,"bottom")),n.isScrollbarXUsingBottom=n.scrollbarXBottom===n.scrollbarXBottom,n.scrollbarXTop=n.isScrollbarXUsingBottom?null:s.toInt(c.css(n.scrollbarXRail,"top")),n.railBorderXWidth=s.toInt(c.css(n.scrollbarXRail,"borderLeftWidth"))+s.toInt(c.css(n.scrollbarXRail,"borderRightWidth")),c.css(n.scrollbarXRail,"display","block"),n.railXMarginWidth=s.toInt(c.css(n.scrollbarXRail,"marginLeft"))+s.toInt(c.css(n.scrollbarXRail,"marginRight")),c.css(n.scrollbarXRail,"display",""),n.railXWidth=null,n.railXRatio=null,n.scrollbarYRail=c.appendTo(c.create("div","ps__scrollbar-y-rail"),t),n.scrollbarY=c.appendTo(c.create("div","ps__scrollbar-y"),n.scrollbarYRail),n.scrollbarY.setAttribute("tabindex",0),n.event.bind(n.scrollbarY,"focus",r),n.event.bind(n.scrollbarY,"blur",o),n.scrollbarYActive=null,n.scrollbarYHeight=null,n.scrollbarYTop=null,n.scrollbarYRight=s.toInt(c.css(n.scrollbarYRail,"right")),n.isScrollbarYUsingRight=n.scrollbarYRight===n.scrollbarYRight,n.scrollbarYLeft=n.isScrollbarYUsingRight?null:s.toInt(c.css(n.scrollbarYRail,"left")),n.scrollbarYOuterWidth=n.isRtl?s.outerWidth(n.scrollbarY):null,n.railBorderYWidth=s.toInt(c.css(n.scrollbarYRail,"borderTopWidth"))+s.toInt(c.css(n.scrollbarYRail,"borderBottomWidth")),c.css(n.scrollbarYRail,"display","block"),n.railYMarginHeight=s.toInt(c.css(n.scrollbarYRail,"marginTop"))+s.toInt(c.css(n.scrollbarYRail,"marginBottom")),c.css(n.scrollbarYRail,"display",""),n.railYHeight=null,n.railYRatio=null}function n(t){return t.getAttribute("data-ps-id")}function i(t,e){t.setAttribute("data-ps-id",e)}function l(t){t.removeAttribute("data-ps-id")}var s=r(2),a=r(14),c=r(4),u=r(11),p=r(12),d={};e.add=function(t,e){var r=p();return i(t,r),d[r]=new o(t,e),d[r]},e.remove=function(t){delete d[n(t)],l(t)},e.get=function(t){return d[n(t)]}},function(t,e,r){"use strict";function o(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function n(t,e){var r={width:e.railXWidth};e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:r.left=t.scrollLeft,e.isScrollbarXUsingBottom?r.bottom=e.scrollbarXBottom-t.scrollTop:r.top=e.scrollbarXTop+t.scrollTop,l.css(e.scrollbarXRail,r);var o={top:t.scrollTop,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?o.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:o.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?o.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:o.left=e.scrollbarYLeft+t.scrollLeft,l.css(e.scrollbarYRail,o),l.css(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),l.css(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}var i=r(2),l=r(4),s=r(0),a=r(3);t.exports=function(t){var e=s.get(t);e.containerWidth=t.clientWidth,e.containerHeight=t.clientHeight,e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight;var r;t.contains(e.scrollbarXRail)||(r=l.queryChildren(t,".ps__scrollbar-x-rail"),r.length>0&&r.forEach(function(t){l.remove(t)}),l.appendTo(e.scrollbarXRail,t)),t.contains(e.scrollbarYRail)||(r=l.queryChildren(t,".ps__scrollbar-y-rail"),r.length>0&&r.forEach(function(t){l.remove(t)}),l.appendTo(e.scrollbarYRail,t)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=o(e,i.toInt(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=i.toInt((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=o(e,i.toInt(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=i.toInt(t.scrollTop*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),n(t,e),e.scrollbarXActive?t.classList.add("ps--active-x"):(t.classList.remove("ps--active-x"),e.scrollbarXWidth=0,e.scrollbarXLeft=0,a(t,"left",0)),e.scrollbarYActive?t.classList.add("ps--active-y"):(t.classList.remove("ps--active-y"),e.scrollbarYHeight=0,e.scrollbarYTop=0,a(t,"top",0))}},function(t,e,r){"use strict";function o(t){var e,r=["ps--in-scrolling"];return e=void 0===t?["ps--x","ps--y"]:["ps--"+t],r.concat(e)}var n=r(4),i=e.toInt=function(t){return parseInt(t,10)||0};e.isEditable=function(t){return n.matches(t,"input,[contenteditable]")||n.matches(t,"select,[contenteditable]")||n.matches(t,"textarea,[contenteditable]")||n.matches(t,"button,[contenteditable]")},e.removePsClasses=function(t){for(var e=0;e<t.classList.length;e++){var r=t.classList[e];0===r.indexOf("ps-")&&t.classList.remove(r)}},e.outerWidth=function(t){return i(n.css(t,"width"))+i(n.css(t,"paddingLeft"))+i(n.css(t,"paddingRight"))+i(n.css(t,"borderLeftWidth"))+i(n.css(t,"borderRightWidth"))},e.startScrolling=function(t,e){for(var r=o(e),n=0;n<r.length;n++)t.classList.add(r[n])},e.stopScrolling=function(t,e){for(var r=o(e),n=0;n<r.length;n++)t.classList.remove(r[n])},e.env={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof window&&null!==window.navigator.msMaxTouchPoints}},function(t,e,r){"use strict";var o=r(0),n=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e};t.exports=function(t,e,r){if(void 0===t)throw"You must provide an element to the update-scroll function";if(void 0===e)throw"You must provide an axis to the update-scroll function";if(void 0===r)throw"You must provide a value to the update-scroll function";"top"===e&&r<=0&&(t.scrollTop=r=0,t.dispatchEvent(n("ps-y-reach-start"))),"left"===e&&r<=0&&(t.scrollLeft=r=0,t.dispatchEvent(n("ps-x-reach-start")));var i=o.get(t);"top"===e&&r>=i.contentHeight-i.containerHeight&&(r=i.contentHeight-i.containerHeight,r-t.scrollTop<=2?r=t.scrollTop:t.scrollTop=r,t.dispatchEvent(n("ps-y-reach-end"))),"left"===e&&r>=i.contentWidth-i.containerWidth&&(r=i.contentWidth-i.containerWidth,r-t.scrollLeft<=2?r=t.scrollLeft:t.scrollLeft=r,t.dispatchEvent(n("ps-x-reach-end"))),void 0===i.lastTop&&(i.lastTop=t.scrollTop),void 0===i.lastLeft&&(i.lastLeft=t.scrollLeft),"top"===e&&r<i.lastTop&&t.dispatchEvent(n("ps-scroll-up")),"top"===e&&r>i.lastTop&&t.dispatchEvent(n("ps-scroll-down")),"left"===e&&r<i.lastLeft&&t.dispatchEvent(n("ps-scroll-left")),"left"===e&&r>i.lastLeft&&t.dispatchEvent(n("ps-scroll-right")),"top"===e&&r!==i.lastTop&&(t.scrollTop=i.lastTop=r,t.dispatchEvent(n("ps-scroll-y"))),"left"===e&&r!==i.lastLeft&&(t.scrollLeft=i.lastLeft=r,t.dispatchEvent(n("ps-scroll-x")))}},function(t,e,r){"use strict";function o(t,e){return window.getComputedStyle(t)[e]}function n(t,e,r){return"number"==typeof r&&(r=r.toString()+"px"),t.style[e]=r,t}function i(t,e){for(var r in e){var o=e[r];"number"==typeof o&&(o=o.toString()+"px"),t.style[r]=o}return t}var l={};l.create=function(t,e){var r=document.createElement(t);return r.className=e,r},l.appendTo=function(t,e){return e.appendChild(t),t},l.css=function(t,e,r){return"object"==typeof e?i(t,e):void 0===r?o(t,e):n(t,e,r)},l.matches=function(t,e){return void 0!==t.matches?t.matches(e):t.msMatchesSelector(e)},l.remove=function(t){void 0!==t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)},l.queryChildren=function(t,e){return Array.prototype.filter.call(t.childNodes,function(t){return l.matches(t,e)})},t.exports=l},function(t,e,r){r(28);var o=r(25)(r(7),r(26),null,null);t.exports=o.exports},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(5),n=r.n(o);e.default=n.a},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(10),n=r.n(o);e.default={name:"vue-perfect-scrollbar",props:{settings:{default:void 0},swicher:{type:Boolean,default:!0},tagname:{type:String,default:"section"}},methods:{scrollHanle:function(t){this.$emit(t.type,t)},update:function(){n.a.update(this.$el)},__init:function(){this.swicher&&(this._ps_inited?this.update(this.$el):(this._ps_inited=!0,n.a.initialize(this.$el,this.settings)))},__uninit:function(){n.a.destroy(this.$el),this._ps_inited=!1}},watch:{swicher:function(t){t&&!this._ps_inited&&this.__init(),!t&&this._ps_inited&&this.__uninit()},$route:function(){this.update()}},mounted:function(){this.__init()},updated:function(){this.$nextTick(this.update)},activated:function(){this.__init()},deactivated:function(){this.__uninit()},beforeDestroy:function(){this.__uninit()}}},function(t,e,r){e=t.exports=r(9)(),e.push([t.i,".ps{-ms-touch-action:auto;touch-action:auto;overflow:hidden!important;-ms-overflow-style:none}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}.ps.ps--active-x>.ps__scrollbar-x-rail,.ps.ps--active-y>.ps__scrollbar-y-rail{display:block;background-color:transparent}.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail{background-color:#eee;opacity:.9}.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x{background-color:#999;height:11px}.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail{background-color:#eee;opacity:.9}.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y{background-color:#999;width:11px}.ps>.ps__scrollbar-x-rail{display:none;position:absolute;opacity:0;transition:background-color .2s linear,opacity .2s linear;bottom:0;height:15px}.ps>.ps__scrollbar-x-rail>.ps__scrollbar-x{position:absolute;background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;bottom:2px;height:6px}.ps>.ps__scrollbar-x-rail:active>.ps__scrollbar-x,.ps>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x{height:11px}.ps>.ps__scrollbar-y-rail{display:none;position:absolute;opacity:0;transition:background-color .2s linear,opacity .2s linear;right:0;width:15px}.ps>.ps__scrollbar-y-rail>.ps__scrollbar-y{position:absolute;background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;right:2px;width:6px}.ps>.ps__scrollbar-y-rail:active>.ps__scrollbar-y,.ps>.ps__scrollbar-y-rail:hover>.ps__scrollbar-y{width:11px}.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail{background-color:#eee;opacity:.9}.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x{background-color:#999;height:11px}.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail{background-color:#eee;opacity:.9}.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y{background-color:#999;width:11px}.ps:hover>.ps__scrollbar-x-rail,.ps:hover>.ps__scrollbar-y-rail{opacity:.6}.ps:hover>.ps__scrollbar-x-rail:hover{background-color:#eee;opacity:.9}.ps:hover>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x{background-color:#999}.ps:hover>.ps__scrollbar-y-rail:hover{background-color:#eee;opacity:.9}.ps:hover>.ps__scrollbar-y-rail:hover>.ps__scrollbar-y{background-color:#999}.ps-container{position:relative}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var r=this[e];r[2]?t.push("@media "+r[2]+"{"+r[1]+"}"):t.push(r[1])}return t.join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(o[i]=!0)}for(n=0;n<e.length;n++){var l=e[n];"number"==typeof l[0]&&o[l[0]]||(r&&!l[2]?l[2]=r:r&&(l[2]="("+l[2]+") and ("+r+")"),t.push(l))}},t}},function(t,e,r){"use strict";t.exports=r(13)},function(t,e,r){"use strict";var o=function(t){this.element=t,this.events={}};o.prototype.bind=function(t,e){void 0===this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1)},o.prototype.unbind=function(t,e){var r=void 0!==e;this.events[t]=this.events[t].filter(function(o){return!(!r||o===e)||(this.element.removeEventListener(t,o,!1),!1)},this)},o.prototype.unbindAll=function(){for(var t in this.events)this.unbind(t)};var n=function(){this.eventElements=[]};n.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return void 0===e&&(e=new o(t),this.eventElements.push(e)),e},n.prototype.bind=function(t,e,r){this.eventElement(t).bind(e,r)},n.prototype.unbind=function(t,e,r){this.eventElement(t).unbind(e,r)},n.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++)this.eventElements[t].unbindAll()},n.prototype.once=function(t,e,r){var o=this.eventElement(t),n=function(t){o.unbind(e,n),r(t)};o.bind(e,n)},t.exports=n},function(t,e,r){"use strict";t.exports=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}()},function(t,e,r){"use strict";var o=r(15),n=r(23),i=r(24);t.exports={initialize:n,update:i,destroy:o}},function(t,e,r){"use strict";t.exports=function(){return{handlers:["click-rail","drag-scrollbar","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1,theme:"default"}}},function(t,e,r){"use strict";var o=r(2),n=r(4),i=r(0);t.exports=function(t){var e=i.get(t);e&&(e.event.unbindAll(),n.remove(e.scrollbarX),n.remove(e.scrollbarY),n.remove(e.scrollbarXRail),n.remove(e.scrollbarYRail),o.removePsClasses(t),i.remove(t))}},function(t,e,r){"use strict";function o(t,e){function r(t){return t.getBoundingClientRect()}var o=function(t){t.stopPropagation()};e.event.bind(e.scrollbarY,"click",o),e.event.bind(e.scrollbarYRail,"click",function(o){var n=o.pageY-window.pageYOffset-r(e.scrollbarYRail).top,s=n>e.scrollbarYTop?1:-1;l(t,"top",t.scrollTop+s*e.containerHeight),i(t),o.stopPropagation()}),e.event.bind(e.scrollbarX,"click",o),e.event.bind(e.scrollbarXRail,"click",function(o){var n=o.pageX-window.pageXOffset-r(e.scrollbarXRail).left,s=n>e.scrollbarXLeft?1:-1;l(t,"left",t.scrollLeft+s*e.containerWidth),i(t),o.stopPropagation()})}var n=r(0),i=r(1),l=r(3);t.exports=function(t){o(t,n.get(t))}},function(t,e,r){"use strict";function o(t,e){function r(r){var n=o+r*e.railXRatio,l=Math.max(0,e.scrollbarXRail.getBoundingClientRect().left)+e.railXRatio*(e.railXWidth-e.scrollbarXWidth);e.scrollbarXLeft=n<0?0:n>l?l:n;var s=i.toInt(e.scrollbarXLeft*(e.contentWidth-e.containerWidth)/(e.containerWidth-e.railXRatio*e.scrollbarXWidth))-e.negativeScrollAdjustment;c(t,"left",s)}var o=null,n=null,s=function(e){r(e.pageX-n),a(t),e.stopPropagation(),e.preventDefault()},u=function(){i.stopScrolling(t,"x"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarX,"mousedown",function(r){n=r.pageX,o=i.toInt(l.css(e.scrollbarX,"left"))*e.railXRatio,i.startScrolling(t,"x"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),r.stopPropagation(),r.preventDefault()})}function n(t,e){function r(r){var n=o+r*e.railYRatio,l=Math.max(0,e.scrollbarYRail.getBoundingClientRect().top)+e.railYRatio*(e.railYHeight-e.scrollbarYHeight);e.scrollbarYTop=n<0?0:n>l?l:n;var s=i.toInt(e.scrollbarYTop*(e.contentHeight-e.containerHeight)/(e.containerHeight-e.railYRatio*e.scrollbarYHeight));c(t,"top",s)}var o=null,n=null,s=function(e){r(e.pageY-n),a(t),e.stopPropagation(),e.preventDefault()},u=function(){i.stopScrolling(t,"y"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarY,"mousedown",function(r){n=r.pageY,o=i.toInt(l.css(e.scrollbarY,"top"))*e.railYRatio,i.startScrolling(t,"y"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),r.stopPropagation(),r.preventDefault()})}var i=r(2),l=r(4),s=r(0),a=r(1),c=r(3);t.exports=function(t){var e=s.get(t);o(t,e),n(t,e)}},function(t,e,r){"use strict";function o(t,e){function r(r,o){var n=t.scrollTop;if(0===r){if(!e.scrollbarYActive)return!1;if(0===n&&o>0||n>=e.contentHeight-e.containerHeight&&o<0)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===o){if(!e.scrollbarXActive)return!1;if(0===i&&r<0||i>=e.contentWidth-e.containerWidth&&r>0)return!e.settings.wheelPropagation}return!0}var o=!1;e.event.bind(t,"mouseenter",function(){o=!0}),e.event.bind(t,"mouseleave",function(){o=!1});var l=!1;e.event.bind(e.ownerDocument,"keydown",function(c){if(!(c.isDefaultPrevented&&c.isDefaultPrevented()||c.defaultPrevented)){var u=i.matches(e.scrollbarX,":focus")||i.matches(e.scrollbarY,":focus");if(o||u){var p=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(p){if("IFRAME"===p.tagName)p=p.contentDocument.activeElement;else for(;p.shadowRoot;)p=p.shadowRoot.activeElement;if(n.isEditable(p))return}var d=0,f=0;switch(c.which){case 37:d=c.metaKey?-e.contentWidth:c.altKey?-e.containerWidth:-30;break;case 38:f=c.metaKey?e.contentHeight:c.altKey?e.containerHeight:30;break;case 39:d=c.metaKey?e.contentWidth:c.altKey?e.containerWidth:30;break;case 40:f=c.metaKey?-e.contentHeight:c.altKey?-e.containerHeight:-30;break;case 33:f=90;break;case 32:f=c.shiftKey?90:-90;break;case 34:f=-90;break;case 35:f=c.ctrlKey?-e.contentHeight:-e.containerHeight;break;case 36:f=c.ctrlKey?t.scrollTop:e.containerHeight;break;default:return}a(t,"top",t.scrollTop-f),a(t,"left",t.scrollLeft+d),s(t),l=r(d,f),l&&c.preventDefault()}}})}var n=r(2),i=r(4),l=r(0),s=r(1),a=r(3);t.exports=function(t){o(t,l.get(t))}},function(t,e,r){"use strict";function o(t,e){function r(r,o){var n=t.scrollTop;if(0===r){if(!e.scrollbarYActive)return!1;if(0===n&&o>0||n>=e.contentHeight-e.containerHeight&&o<0)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===o){if(!e.scrollbarXActive)return!1;if(0===i&&r<0||i>=e.contentWidth-e.containerWidth&&r>0)return!e.settings.wheelPropagation}return!0}function o(t){var e=t.deltaX,r=-1*t.deltaY;return void 0!==e&&void 0!==r||(e=-1*t.wheelDeltaX/6,r=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,r*=10),e!==e&&r!==r&&(e=0,r=t.wheelDelta),t.shiftKey?[-r,-e]:[e,r]}function n(e,r){var o=t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");if(o){var n=window.getComputedStyle(o);if(![n.overflow,n.overflowX,n.overflowY].join("").match(/(scroll|auto)/))return!1;var i=o.scrollHeight-o.clientHeight;if(i>0&&!(0===o.scrollTop&&r>0||o.scrollTop===i&&r<0))return!0;var l=o.scrollLeft-o.clientWidth;if(l>0&&!(0===o.scrollLeft&&e<0||o.scrollLeft===l&&e>0))return!0}return!1}function s(s){var c=o(s),u=c[0],p=c[1];n(u,p)||(a=!1,e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(p?l(t,"top",t.scrollTop-p*e.settings.wheelSpeed):l(t,"top",t.scrollTop+u*e.settings.wheelSpeed),a=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(u?l(t,"left",t.scrollLeft+u*e.settings.wheelSpeed):l(t,"left",t.scrollLeft-p*e.settings.wheelSpeed),a=!0):(l(t,"top",t.scrollTop-p*e.settings.wheelSpeed),l(t,"left",t.scrollLeft+u*e.settings.wheelSpeed)),i(t),(a=a||r(u,p))&&(s.stopPropagation(),s.preventDefault()))}var a=!1;void 0!==window.onwheel?e.event.bind(t,"wheel",s):void 0!==window.onmousewheel&&e.event.bind(t,"mousewheel",s)}var n=r(0),i=r(1),l=r(3);t.exports=function(t){o(t,n.get(t))}},function(t,e,r){"use strict";function o(t,e){e.event.bind(t,"scroll",function(){i(t)})}var n=r(0),i=r(1);t.exports=function(t){o(t,n.get(t))}},function(t,e,r){"use strict";function o(t,e){function r(){var t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"";return 0===t.toString().length?null:t.getRangeAt(0).commonAncestorContainer}function o(){c||(c=setInterval(function(){if(!i.get(t))return void clearInterval(c);s(t,"top",t.scrollTop+u.top),s(t,"left",t.scrollLeft+u.left),l(t)},50))}function a(){c&&(clearInterval(c),c=null),n.stopScrolling(t)}var c=null,u={top:0,left:0},p=!1;e.event.bind(e.ownerDocument,"selectionchange",function(){t.contains(r())?p=!0:(p=!1,a())}),e.event.bind(window,"mouseup",function(){p&&(p=!1,a())}),e.event.bind(window,"keyup",function(){p&&(p=!1,a())}),e.event.bind(window,"mousemove",function(e){if(p){var r={x:e.pageX,y:e.pageY},i={left:t.offsetLeft,right:t.offsetLeft+t.offsetWidth,top:t.offsetTop,bottom:t.offsetTop+t.offsetHeight};r.x<i.left+3?(u.left=-5,n.startScrolling(t,"x")):r.x>i.right-3?(u.left=5,n.startScrolling(t,"x")):u.left=0,r.y<i.top+3?(u.top=i.top+3-r.y<5?-5:-20,n.startScrolling(t,"y")):r.y>i.bottom-3?(u.top=r.y-i.bottom+3<5?5:20,n.startScrolling(t,"y")):u.top=0,0===u.top&&0===u.left?a():o()}})}var n=r(2),i=r(0),l=r(1),s=r(3);t.exports=function(t){o(t,i.get(t))}},function(t,e,r){"use strict";function o(t,e,r,o){function n(r,o){var n=t.scrollTop,i=t.scrollLeft,l=Math.abs(r),s=Math.abs(o);if(s>l){if(o<0&&n===e.contentHeight-e.containerHeight||o>0&&0===n)return!e.settings.swipePropagation}else if(l>s&&(r<0&&i===e.contentWidth-e.containerWidth||r>0&&0===i))return!e.settings.swipePropagation;return!0}function a(e,r){s(t,"top",t.scrollTop-r),s(t,"left",t.scrollLeft-e),l(t)}function c(){w=!0}function u(){w=!1}function p(t){return t.targetTouches?t.targetTouches[0]:t}function d(t){return(!t.pointerType||"pen"!==t.pointerType||0!==t.buttons)&&(!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function f(t){if(d(t)){_=!0;var e=p(t);b.pageX=e.pageX,b.pageY=e.pageY,g=(new Date).getTime(),null!==y&&clearInterval(y),t.stopPropagation()}}function h(t){if(!_&&e.settings.swipePropagation&&f(t),!w&&_&&d(t)){var r=p(t),o={pageX:r.pageX,pageY:r.pageY},i=o.pageX-b.pageX,l=o.pageY-b.pageY;a(i,l),b=o;var s=(new Date).getTime(),c=s-g;c>0&&(m.x=i/c,m.y=l/c,g=s),n(i,l)&&(t.stopPropagation(),t.preventDefault())}}function v(){!w&&_&&(_=!1,e.settings.swipeEasing&&(clearInterval(y),y=setInterval(function(){return i.get(t)&&(m.x||m.y)?Math.abs(m.x)<.01&&Math.abs(m.y)<.01?void clearInterval(y):(a(30*m.x,30*m.y),m.x*=.8,void(m.y*=.8)):void clearInterval(y)},10)))}var b={},g=0,m={},y=null,w=!1,_=!1;r?(e.event.bind(window,"touchstart",c),e.event.bind(window,"touchend",u),e.event.bind(t,"touchstart",f),e.event.bind(t,"touchmove",h),e.event.bind(t,"touchend",v)):o&&(window.PointerEvent?(e.event.bind(window,"pointerdown",c),e.event.bind(window,"pointerup",u),e.event.bind(t,"pointerdown",f),e.event.bind(t,"pointermove",h),e.event.bind(t,"pointerup",v)):window.MSPointerEvent&&(e.event.bind(window,"MSPointerDown",c),e.event.bind(window,"MSPointerUp",u),e.event.bind(t,"MSPointerDown",f),e.event.bind(t,"MSPointerMove",h),e.event.bind(t,"MSPointerUp",v)))}var n=r(2),i=r(0),l=r(1),s=r(3);t.exports=function(t){if(n.env.supportsTouch||n.env.supportsIePointer){o(t,i.get(t),n.env.supportsTouch,n.env.supportsIePointer)}}},function(t,e,r){"use strict";var o=r(0),n=r(1),i={"click-rail":r(16),"drag-scrollbar":r(17),keyboard:r(18),wheel:r(19),touch:r(22),selection:r(21)},l=r(20);t.exports=function(t,e){t.classList.add("ps");var r=o.add(t,"object"==typeof e?e:{});t.classList.add("ps--theme_"+r.settings.theme),r.settings.handlers.forEach(function(e){i[e](t)}),l(t),n(t)}},function(t,e,r){"use strict";var o=r(2),n=r(4),i=r(0),l=r(1),s=r(3);t.exports=function(t){var e=i.get(t);e&&(e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,n.css(e.scrollbarXRail,"display","block"),n.css(e.scrollbarYRail,"display","block"),e.railXMarginWidth=o.toInt(n.css(e.scrollbarXRail,"marginLeft"))+o.toInt(n.css(e.scrollbarXRail,"marginRight")),e.railYMarginHeight=o.toInt(n.css(e.scrollbarYRail,"marginTop"))+o.toInt(n.css(e.scrollbarYRail,"marginBottom")),n.css(e.scrollbarXRail,"display","none"),n.css(e.scrollbarYRail,"display","none"),l(t),s(t,"top",t.scrollTop),s(t,"left",t.scrollLeft),n.css(e.scrollbarXRail,"display",""),n.css(e.scrollbarYRail,"display",""))}},function(t,e){t.exports=function(t,e,r,o){var n,i=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(n=t,i=t.default);var s="function"==typeof i?i.options:i;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),r&&(s._scopeId=r),o){var a=s.computed||(s.computed={});Object.keys(o).forEach(function(t){var e=o[t];a[t]=function(){return e}})}return{esModule:n,exports:i,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.$props.tagname,{tag:"section",staticClass:"ps-container",on:{"~mouseover":function(e){t.update(e)},"ps-scroll-y":t.scrollHanle,"ps-scroll-x":t.scrollHanle,"ps-scroll-up":t.scrollHanle,"ps-scroll-down":t.scrollHanle,"ps-scroll-left":t.scrollHanle,"ps-scroll-right":t.scrollHanle,"ps-y-reach-start":t.scrollHanle,"ps-y-reach-end":t.scrollHanle,"ps-x-reach-start":t.scrollHanle,"ps-x-reach-end":t.scrollHanle}},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){function r(t,e){for(var r=0;r<t.length;r++){var o=t[r],n=u[o.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](o.parts[i]);for(;i<o.parts.length;i++)n.parts.push(s(o.parts[i],e))}else{for(var l=[],i=0;i<o.parts.length;i++)l.push(s(o.parts[i],e));u[o.id]={id:o.id,refs:1,parts:l}}}}function o(t){for(var e=[],r={},o=0;o<t.length;o++){var n=t[o],i=n[0],l=n[1],s=n[2],a=n[3],c={css:l,media:s,sourceMap:a};r[i]?r[i].parts.push(c):e.push(r[i]={id:i,parts:[c]})}return e}function n(t,e){var r=f(),o=b[b.length-1];if("top"===t.insertAt)o?o.nextSibling?r.insertBefore(e,o.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function i(t){t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function l(t){var e=document.createElement("style");return e.type="text/css",n(t,e),e}function s(t,e){var r,o,n;if(e.singleton){var s=v++;r=h||(h=l(e)),o=a.bind(null,r,s,!1),n=a.bind(null,r,s,!0)}else r=l(e),o=c.bind(null,r),n=function(){i(r)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else n()}}function a(t,e,r,o){var n=r?"":o.css;if(t.styleSheet)t.styleSheet.cssText=g(e,n);else{var i=document.createTextNode(n),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(i,l[e]):t.appendChild(i)}}function c(t,e){var r=e.css,o=e.media,n=e.sourceMap;if(o&&t.setAttribute("media",o),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var u={},p=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},d=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=p(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,b=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=d()),void 0===e.insertAt&&(e.insertAt="bottom");var n=o(t);return r(n,e),function(t){for(var i=[],l=0;l<n.length;l++){var s=n[l],a=u[s.id];a.refs--,i.push(a)}if(t){r(o(t),e)}for(var l=0;l<i.length;l++){var a=i[l];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete u[a.id]}}}};var g=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e,r){var o=r(8);"string"==typeof o&&(o=[[t.i,o,""]]);r(27)(o,{});o.locals&&(t.exports=o.locals)}]);
//# sourceMappingURL=index.js.map

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

/***/ "9efa":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".c-opacity-0{opacity:0}", ""]);

// exports


/***/ }),

/***/ "a159":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("e4ae");
var dPs = __webpack_require__("7e90");
var enumBugKeys = __webpack_require__("1691");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("32fc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


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

/***/ "a4bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8aae");

/***/ }),

/***/ "a8c8":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".fade-enter-active,.fade-leave-active{-webkit-transition:opacity .3s;transition:opacity .3s}.fade-enter,.fade-leave-to{opacity:0}", ""]);

// exports


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


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

/***/ "abb4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global console: false */

/**
 * Reporter that handles the reporting of logs, warnings and errors.
 * @public
 * @param {boolean} quiet Tells if the reporter should be quiet or not.
 */
module.exports = function(quiet) {
    function noop() {
        //Does nothing.
    }

    var reporter = {
        log: noop,
        warn: noop,
        error: noop
    };

    if(!quiet && window.console) {
        var attachFunction = function(reporter, name) {
            //The proxy is needed to be able to call the method with the console context,
            //since we cannot use bind.
            reporter[name] = function reporterProxy() {
                var f = console[name];
                if (f.apply) { //IE9 does not support console.log.apply :)
                    f.apply(console, arguments);
                } else {
                    for (var i = 0; i < arguments.length; i++) {
                        f(arguments[i]);
                    }
                }
            };
        };

        attachFunction(reporter, "log");
        attachFunction(reporter, "warn");
        attachFunction(reporter, "error");
    }

    return reporter;
};

/***/ }),

/***/ "abb5":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".fade-enter-active,.fade-leave-active{-webkit-transition:opacity .3s;transition:opacity .3s}.fade-enter,.fade-leave-to{opacity:0}", ""]);

// exports


/***/ }),

/***/ "ac4d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("3a72")('asyncIterator');


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


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

/***/ "b447":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b718":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0240");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("67c5ed82", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "b770":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = module.exports = {};

/**
 * Loops through the collection and calls the callback for each element. if the callback returns truthy, the loop is broken and returns the same value.
 * @public
 * @param {*} collection The collection to loop through. Needs to have a length property set and have indices set from 0 to length - 1.
 * @param {function} callback The callback to be called for each element. The element will be given as a parameter to the callback. If this callback returns truthy, the loop is broken and the same value is returned.
 * @returns {*} The value that a callback has returned (if truthy). Otherwise nothing.
 */
utils.forEach = function(collection, callback) {
    for(var i = 0; i < collection.length; i++) {
        var result = callback(collection[i]);
        if(result) {
            return result;
        }
    }
};


/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "bc42":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("10e4");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("013a21c3", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "bf0b":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("355d");
var createDesc = __webpack_require__("aebd");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var has = __webpack_require__("07e3");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("8e60") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "bf90":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__("36c3");
var $getOwnPropertyDescriptor = __webpack_require__("bf0b").f;

__webpack_require__("ce7e")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "c207":
/***/ (function(module, exports) {



/***/ }),

/***/ "c274":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("50bf");

module.exports = function batchProcessorMaker(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var asyncProcess    = utils.getOption(options, "async", true);
    var autoProcess     = utils.getOption(options, "auto", true);

    if(autoProcess && !asyncProcess) {
        reporter && reporter.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true.");
        asyncProcess = true;
    }

    var batch = Batch();
    var asyncFrameHandler;
    var isProcessing = false;

    function addFunction(level, fn) {
        if(!isProcessing && autoProcess && asyncProcess && batch.size() === 0) {
            // Since this is async, it is guaranteed to be executed after that the fn is added to the batch.
            // This needs to be done before, since we're checking the size of the batch to be 0.
            processBatchAsync();
        }

        batch.add(level, fn);
    }

    function processBatch() {
        // Save the current batch, and create a new batch so that incoming functions are not added into the currently processing batch.
        // Continue processing until the top-level batch is empty (functions may be added to the new batch while processing, and so on).
        isProcessing = true;
        while (batch.size()) {
            var processingBatch = batch;
            batch = Batch();
            processingBatch.process();
        }
        isProcessing = false;
    }

    function forceProcessBatch(localAsyncProcess) {
        if (isProcessing) {
            return;
        }

        if(localAsyncProcess === undefined) {
            localAsyncProcess = asyncProcess;
        }

        if(asyncFrameHandler) {
            cancelFrame(asyncFrameHandler);
            asyncFrameHandler = null;
        }

        if(localAsyncProcess) {
            processBatchAsync();
        } else {
            processBatch();
        }
    }

    function processBatchAsync() {
        asyncFrameHandler = requestFrame(processBatch);
    }

    function clearBatch() {
        batch           = {};
        batchSize       = 0;
        topLevel        = 0;
        bottomLevel     = 0;
    }

    function cancelFrame(listener) {
        // var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
        var cancel = clearTimeout;
        return cancel(listener);
    }

    function requestFrame(callback) {
        // var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) { return window.setTimeout(fn, 20); };
        var raf = function(fn) { return setTimeout(fn, 0); };
        return raf(callback);
    }

    return {
        add: addFunction,
        force: forceProcessBatch
    };
};

function Batch() {
    var batch       = {};
    var size        = 0;
    var topLevel    = 0;
    var bottomLevel = 0;

    function add(level, fn) {
        if(!fn) {
            fn = level;
            level = 0;
        }

        if(level > topLevel) {
            topLevel = level;
        } else if(level < bottomLevel) {
            bottomLevel = level;
        }

        if(!batch[level]) {
            batch[level] = [];
        }

        batch[level].push(fn);
        size++;
    }

    function process() {
        for(var level = bottomLevel; level <= topLevel; level++) {
            var fns = batch[level];

            for(var i = 0; i < fns.length; i++) {
                var fn = fns[i];
                fn();
            }
        }
    }

    function getSize() {
        return size;
    }

    return {
        add: add,
        process: process,
        size: getSize
    };
}


/***/ }),

/***/ "c2cb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CToaster_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b718");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CToaster_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CToaster_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CToaster_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "c367":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("8436");
var step = __webpack_require__("50ed");
var Iterators = __webpack_require__("481b");
var toIObject = __webpack_require__("36c3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("30f1")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "c3a1":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e6f3");
var enumBugKeys = __webpack_require__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


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

/***/ "c946":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects divs to elements in order to detect resize events on scroll events.
 * Heavily inspired by: https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
 */



var forEach = __webpack_require__("b770").forEach;

module.exports = function(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var batchProcessor  = options.batchProcessor;
    var getState        = options.stateHandler.getState;
    var hasState        = options.stateHandler.hasState;
    var idHandler       = options.idHandler;

    if (!batchProcessor) {
        throw new Error("Missing required dependency: batchProcessor");
    }

    if (!reporter) {
        throw new Error("Missing required dependency: reporter.");
    }

    //TODO: Could this perhaps be done at installation time?
    var scrollbarSizes = getScrollbarSizes();

    var styleId = "erd_scroll_detection_scrollbar_style";
    var detectionContainerClass = "erd_scroll_detection_container";

    function initDocument(targetDocument) {
        // Inject the scrollbar styling that prevents them from appearing sometimes in Chrome.
        // The injected container needs to have a class, so that it may be styled with CSS (pseudo elements).
        injectScrollStyle(targetDocument, styleId, detectionContainerClass);
    }

    initDocument(window.document);

    function buildCssTextString(rules) {
        var seperator = options.important ? " !important; " : "; ";

        return (rules.join(seperator) + seperator).trim();
    }

    function getScrollbarSizes() {
        var width = 500;
        var height = 500;

        var child = document.createElement("div");
        child.style.cssText = buildCssTextString(["position: absolute", "width: " + width*2 + "px", "height: " + height*2 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);

        var container = document.createElement("div");
        container.style.cssText = buildCssTextString(["position: absolute", "width: " + width + "px", "height: " + height + "px", "overflow: scroll", "visibility: none", "top: " + -width*3 + "px", "left: " + -height*3 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);

        container.appendChild(child);

        document.body.insertBefore(container, document.body.firstChild);

        var widthSize = width - container.clientWidth;
        var heightSize = height - container.clientHeight;

        document.body.removeChild(container);

        return {
            width: widthSize,
            height: heightSize
        };
    }

    function injectScrollStyle(targetDocument, styleId, containerClass) {
        function injectStyle(style, method) {
            method = method || function (element) {
                targetDocument.head.appendChild(element);
            };

            var styleElement = targetDocument.createElement("style");
            styleElement.innerHTML = style;
            styleElement.id = styleId;
            method(styleElement);
            return styleElement;
        }

        if (!targetDocument.getElementById(styleId)) {
            var containerAnimationClass = containerClass + "_animation";
            var containerAnimationActiveClass = containerClass + "_animation_active";
            var style = "/* Created by the element-resize-detector library. */\n";
            style += "." + containerClass + " > div::-webkit-scrollbar { " + buildCssTextString(["display: none"]) + " }\n\n";
            style += "." + containerAnimationActiveClass + " { " + buildCssTextString(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + containerAnimationClass, "animation-name: " + containerAnimationClass]) + " }\n";
            style += "@-webkit-keyframes " + containerAnimationClass +  " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n";
            style += "@keyframes " + containerAnimationClass +          " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }";
            injectStyle(style);
        }
    }

    function addAnimationClass(element) {
        element.className += " " + detectionContainerClass + "_animation_active";
    }

    function addEvent(el, name, cb) {
        if (el.addEventListener) {
            el.addEventListener(name, cb);
        } else if(el.attachEvent) {
            el.attachEvent("on" + name, cb);
        } else {
            return reporter.error("[scroll] Don't know how to add event listeners.");
        }
    }

    function removeEvent(el, name, cb) {
        if (el.removeEventListener) {
            el.removeEventListener(name, cb);
        } else if(el.detachEvent) {
            el.detachEvent("on" + name, cb);
        } else {
            return reporter.error("[scroll] Don't know how to remove event listeners.");
        }
    }

    function getExpandElement(element) {
        return getState(element).container.childNodes[0].childNodes[0].childNodes[0];
    }

    function getShrinkElement(element) {
        return getState(element).container.childNodes[0].childNodes[0].childNodes[1];
    }

    /**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
    function addListener(element, listener) {
        var listeners = getState(element).listeners;

        if (!listeners.push) {
            throw new Error("Cannot add listener to an element that is not detectable.");
        }

        getState(element).listeners.push(listener);
    }

    /**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
    function makeDetectable(options, element, callback) {
        if (!callback) {
            callback = element;
            element = options;
            options = null;
        }

        options = options || {};

        function debug() {
            if (options.debug) {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(idHandler.get(element), "Scroll: ");
                if (reporter.log.apply) {
                    reporter.log.apply(null, args);
                } else {
                    for (var i = 0; i < args.length; i++) {
                        reporter.log(args[i]);
                    }
                }
            }
        }

        function isDetached(element) {
            function isInDocument(element) {
                return element === element.ownerDocument.body || element.ownerDocument.body.contains(element);
            }

            if (!isInDocument(element)) {
                return true;
            }

            // FireFox returns null style in hidden iframes. See https://github.com/wnr/element-resize-detector/issues/68 and https://bugzilla.mozilla.org/show_bug.cgi?id=795520
            if (window.getComputedStyle(element) === null) {
                return true;
            }

            return false;
        }

        function isUnrendered(element) {
            // Check the absolute positioned container since the top level container is display: inline.
            var container = getState(element).container.childNodes[0];
            var style = window.getComputedStyle(container);
            return !style.width || style.width.indexOf("px") === -1; //Can only compute pixel value when rendered.
        }

        function getStyle() {
            // Some browsers only force layouts when actually reading the style properties of the style object, so make sure that they are all read here,
            // so that the user of the function can be sure that it will perform the layout here, instead of later (important for batching).
            var elementStyle            = window.getComputedStyle(element);
            var style                   = {};
            style.position              = elementStyle.position;
            style.width                 = element.offsetWidth;
            style.height                = element.offsetHeight;
            style.top                   = elementStyle.top;
            style.right                 = elementStyle.right;
            style.bottom                = elementStyle.bottom;
            style.left                  = elementStyle.left;
            style.widthCSS              = elementStyle.width;
            style.heightCSS             = elementStyle.height;
            return style;
        }

        function storeStartSize() {
            var style = getStyle();
            getState(element).startSize = {
                width: style.width,
                height: style.height
            };
            debug("Element start size", getState(element).startSize);
        }

        function initListeners() {
            getState(element).listeners = [];
        }

        function storeStyle() {
            debug("storeStyle invoked.");
            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            var style = getStyle();
            getState(element).style = style;
        }

        function storeCurrentSize(element, width, height) {
            getState(element).lastWidth = width;
            getState(element).lastHeight  = height;
        }

        function getExpandChildElement(element) {
            return getExpandElement(element).childNodes[0];
        }

        function getWidthOffset() {
            return 2 * scrollbarSizes.width + 1;
        }

        function getHeightOffset() {
            return 2 * scrollbarSizes.height + 1;
        }

        function getExpandWidth(width) {
            return width + 10 + getWidthOffset();
        }

        function getExpandHeight(height) {
            return height + 10 + getHeightOffset();
        }

        function getShrinkWidth(width) {
            return width * 2 + getWidthOffset();
        }

        function getShrinkHeight(height) {
            return height * 2 + getHeightOffset();
        }

        function positionScrollbars(element, width, height) {
            var expand          = getExpandElement(element);
            var shrink          = getShrinkElement(element);
            var expandWidth     = getExpandWidth(width);
            var expandHeight    = getExpandHeight(height);
            var shrinkWidth     = getShrinkWidth(width);
            var shrinkHeight    = getShrinkHeight(height);
            expand.scrollLeft   = expandWidth;
            expand.scrollTop    = expandHeight;
            shrink.scrollLeft   = shrinkWidth;
            shrink.scrollTop    = shrinkHeight;
        }

        function injectContainerElement() {
            var container = getState(element).container;

            if (!container) {
                container                   = document.createElement("div");
                container.className         = detectionContainerClass;
                container.style.cssText     = buildCssTextString(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]);
                getState(element).container = container;
                addAnimationClass(container);
                element.appendChild(container);

                var onAnimationStart = function () {
                    getState(element).onRendered && getState(element).onRendered();
                };

                addEvent(container, "animationstart", onAnimationStart);

                // Store the event handler here so that they may be removed when uninstall is called.
                // See uninstall function for an explanation why it is needed.
                getState(element).onAnimationStart = onAnimationStart;
            }

            return container;
        }

        function injectScrollElements() {
            function alterPositionStyles() {
                var style = getState(element).style;

                if(style.position === "static") {
                    element.style.setProperty("position", "relative",options.important ? "important" : "");

                    var removeRelativeStyles = function(reporter, element, style, property) {
                        function getNumericalValue(value) {
                            return value.replace(/[^-\d\.]/g, "");
                        }

                        var value = style[property];

                        if(value !== "auto" && getNumericalValue(value) !== "0") {
                            reporter.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element);
                            element.style[property] = 0;
                        }
                    };

                    //Check so that there are no accidental styles that will make the element styled differently now that is is relative.
                    //If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
                    removeRelativeStyles(reporter, element, style, "top");
                    removeRelativeStyles(reporter, element, style, "right");
                    removeRelativeStyles(reporter, element, style, "bottom");
                    removeRelativeStyles(reporter, element, style, "left");
                }
            }

            function getLeftTopBottomRightCssText(left, top, bottom, right) {
                left = (!left ? "0" : (left + "px"));
                top = (!top ? "0" : (top + "px"));
                bottom = (!bottom ? "0" : (bottom + "px"));
                right = (!right ? "0" : (right + "px"));

                return ["left: " + left, "top: " + top, "right: " + right, "bottom: " + bottom];
            }

            debug("Injecting elements");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            alterPositionStyles();

            var rootContainer = getState(element).container;

            if (!rootContainer) {
                rootContainer = injectContainerElement();
            }

            // Due to this WebKit bug https://bugs.webkit.org/show_bug.cgi?id=80808 (currently fixed in Blink, but still present in WebKit browsers such as Safari),
            // we need to inject two containers, one that is width/height 100% and another that is left/top -1px so that the final container always is 1x1 pixels bigger than
            // the targeted element.
            // When the bug is resolved, "containerContainer" may be removed.

            // The outer container can occasionally be less wide than the targeted when inside inline elements element in WebKit (see https://bugs.webkit.org/show_bug.cgi?id=152980).
            // This should be no problem since the inner container either way makes sure the injected scroll elements are at least 1x1 px.

            var scrollbarWidth          = scrollbarSizes.width;
            var scrollbarHeight         = scrollbarSizes.height;
            var containerContainerStyle = buildCssTextString(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"]);
            var containerStyle          = buildCssTextString(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat(getLeftTopBottomRightCssText(-(1 + scrollbarWidth), -(1 + scrollbarHeight), -scrollbarHeight, -scrollbarWidth)));
            var expandStyle             = buildCssTextString(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]);
            var shrinkStyle             = buildCssTextString(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]);
            var expandChildStyle        = buildCssTextString(["position: absolute", "left: 0", "top: 0"]);
            var shrinkChildStyle        = buildCssTextString(["position: absolute", "width: 200%", "height: 200%"]);

            var containerContainer      = document.createElement("div");
            var container               = document.createElement("div");
            var expand                  = document.createElement("div");
            var expandChild             = document.createElement("div");
            var shrink                  = document.createElement("div");
            var shrinkChild             = document.createElement("div");

            // Some browsers choke on the resize system being rtl, so force it to ltr. https://github.com/wnr/element-resize-detector/issues/56
            // However, dir should not be set on the top level container as it alters the dimensions of the target element in some browsers.
            containerContainer.dir              = "ltr";

            containerContainer.style.cssText    = containerContainerStyle;
            containerContainer.className        = detectionContainerClass;
            container.className                 = detectionContainerClass;
            container.style.cssText             = containerStyle;
            expand.style.cssText                = expandStyle;
            expandChild.style.cssText           = expandChildStyle;
            shrink.style.cssText                = shrinkStyle;
            shrinkChild.style.cssText           = shrinkChildStyle;

            expand.appendChild(expandChild);
            shrink.appendChild(shrinkChild);
            container.appendChild(expand);
            container.appendChild(shrink);
            containerContainer.appendChild(container);
            rootContainer.appendChild(containerContainer);

            function onExpandScroll() {
                getState(element).onExpand && getState(element).onExpand();
            }

            function onShrinkScroll() {
                getState(element).onShrink && getState(element).onShrink();
            }

            addEvent(expand, "scroll", onExpandScroll);
            addEvent(shrink, "scroll", onShrinkScroll);

            // Store the event handlers here so that they may be removed when uninstall is called.
            // See uninstall function for an explanation why it is needed.
            getState(element).onExpandScroll = onExpandScroll;
            getState(element).onShrinkScroll = onShrinkScroll;
        }

        function registerListenersAndPositionElements() {
            function updateChildSizes(element, width, height) {
                var expandChild             = getExpandChildElement(element);
                var expandWidth             = getExpandWidth(width);
                var expandHeight            = getExpandHeight(height);
                expandChild.style.setProperty("width", expandWidth + "px", options.important ? "important" : "");
                expandChild.style.setProperty("height", expandHeight + "px", options.important ? "important" : "");
            }

            function updateDetectorElements(done) {
                var width           = element.offsetWidth;
                var height          = element.offsetHeight;

                // Check whether the size has actually changed since last time the algorithm ran. If not, some steps may be skipped.
                var sizeChanged = width !== getState(element).lastWidth || height !== getState(element).lastHeight;

                debug("Storing current size", width, height);

                // Store the size of the element sync here, so that multiple scroll events may be ignored in the event listeners.
                // Otherwise the if-check in handleScroll is useless.
                storeCurrentSize(element, width, height);

                // Since we delay the processing of the batch, there is a risk that uninstall has been called before the batch gets to execute.
                // Since there is no way to cancel the fn executions, we need to add an uninstall guard to all fns of the batch.

                batchProcessor.add(0, function performUpdateChildSizes() {
                    if (!sizeChanged) {
                        return;
                    }

                    if (!getState(element)) {
                        debug("Aborting because element has been uninstalled");
                        return;
                    }

                    if (!areElementsInjected()) {
                        debug("Aborting because element container has not been initialized");
                        return;
                    }

                    if (options.debug) {
                        var w = element.offsetWidth;
                        var h = element.offsetHeight;

                        if (w !== width || h !== height) {
                            reporter.warn(idHandler.get(element), "Scroll: Size changed before updating detector elements.");
                        }
                    }

                    updateChildSizes(element, width, height);
                });

                batchProcessor.add(1, function updateScrollbars() {
                    // This function needs to be invoked event though the size is unchanged. The element could have been resized very quickly and then
                    // been restored to the original size, which will have changed the scrollbar positions.

                    if (!getState(element)) {
                        debug("Aborting because element has been uninstalled");
                        return;
                    }

                    if (!areElementsInjected()) {
                        debug("Aborting because element container has not been initialized");
                        return;
                    }

                    positionScrollbars(element, width, height);
                });

                if (sizeChanged && done) {
                    batchProcessor.add(2, function () {
                        if (!getState(element)) {
                            debug("Aborting because element has been uninstalled");
                            return;
                        }

                        if (!areElementsInjected()) {
                          debug("Aborting because element container has not been initialized");
                          return;
                        }

                        done();
                    });
                }
            }

            function areElementsInjected() {
                return !!getState(element).container;
            }

            function notifyListenersIfNeeded() {
                function isFirstNotify() {
                    return getState(element).lastNotifiedWidth === undefined;
                }

                debug("notifyListenersIfNeeded invoked");

                var state = getState(element);

                // Don't notify if the current size is the start size, and this is the first notification.
                if (isFirstNotify() && state.lastWidth === state.startSize.width && state.lastHeight === state.startSize.height) {
                    return debug("Not notifying: Size is the same as the start size, and there has been no notification yet.");
                }

                // Don't notify if the size already has been notified.
                if (state.lastWidth === state.lastNotifiedWidth && state.lastHeight === state.lastNotifiedHeight) {
                    return debug("Not notifying: Size already notified");
                }


                debug("Current size not notified, notifying...");
                state.lastNotifiedWidth = state.lastWidth;
                state.lastNotifiedHeight = state.lastHeight;
                forEach(getState(element).listeners, function (listener) {
                    listener(element);
                });
            }

            function handleRender() {
                debug("startanimation triggered.");

                if (isUnrendered(element)) {
                    debug("Ignoring since element is still unrendered...");
                    return;
                }

                debug("Element rendered.");
                var expand = getExpandElement(element);
                var shrink = getShrinkElement(element);
                if (expand.scrollLeft === 0 || expand.scrollTop === 0 || shrink.scrollLeft === 0 || shrink.scrollTop === 0) {
                    debug("Scrollbars out of sync. Updating detector elements...");
                    updateDetectorElements(notifyListenersIfNeeded);
                }
            }

            function handleScroll() {
                debug("Scroll detected.");

                if (isUnrendered(element)) {
                    // Element is still unrendered. Skip this scroll event.
                    debug("Scroll event fired while unrendered. Ignoring...");
                    return;
                }

                updateDetectorElements(notifyListenersIfNeeded);
            }

            debug("registerListenersAndPositionElements invoked.");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            getState(element).onRendered = handleRender;
            getState(element).onExpand = handleScroll;
            getState(element).onShrink = handleScroll;

            var style = getState(element).style;
            updateChildSizes(element, style.width, style.height);
        }

        function finalizeDomMutation() {
            debug("finalizeDomMutation invoked.");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            var style = getState(element).style;
            storeCurrentSize(element, style.width, style.height);
            positionScrollbars(element, style.width, style.height);
        }

        function ready() {
            callback(element);
        }

        function install() {
            debug("Installing...");
            initListeners();
            storeStartSize();

            batchProcessor.add(0, storeStyle);
            batchProcessor.add(1, injectScrollElements);
            batchProcessor.add(2, registerListenersAndPositionElements);
            batchProcessor.add(3, finalizeDomMutation);
            batchProcessor.add(4, ready);
        }

        debug("Making detectable...");

        if (isDetached(element)) {
            debug("Element is detached");

            injectContainerElement();

            debug("Waiting until element is attached...");

            getState(element).onRendered = function () {
                debug("Element is now attached");
                install();
            };
        } else {
            install();
        }
    }

    function uninstall(element) {
        var state = getState(element);

        if (!state) {
            // Uninstall has been called on a non-erd element.
            return;
        }

        // Uninstall may have been called in the following scenarios:
        // (1) Right between the sync code and async batch (here state.busy = true, but nothing have been registered or injected).
        // (2) In the ready callback of the last level of the batch by another element (here, state.busy = true, but all the stuff has been injected).
        // (3) After the installation process (here, state.busy = false and all the stuff has been injected).
        // So to be on the safe side, let's check for each thing before removing.

        // We need to remove the event listeners, because otherwise the event might fire on an uninstall element which results in an error when trying to get the state of the element.
        state.onExpandScroll && removeEvent(getExpandElement(element), "scroll", state.onExpandScroll);
        state.onShrinkScroll && removeEvent(getShrinkElement(element), "scroll", state.onShrinkScroll);
        state.onAnimationStart && removeEvent(state.container, "animationstart", state.onAnimationStart);

        state.container && element.removeChild(state.container);
    }

    return {
        makeDetectable: makeDetectable,
        addListener: addListener,
        uninstall: uninstall,
        initDocument: initDocument
    };
};


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cabd":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9efa");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("1dead25c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ccb9":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("5168");


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "ce7e":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("63b6");
var core = __webpack_require__("584a");
var fails = __webpack_require__("294c");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "d023":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("67e9");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("0b07ff43", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "d263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__("386b")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


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

/***/ "d4c0":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d6eb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var prop = "_erd";

function initState(element) {
    element[prop] = {};
    return getState(element);
}

function getState(element) {
    return element[prop];
}

function cleanState(element) {
    delete element[prop];
}

module.exports = {
    initState: initState,
    getState: getState,
    cleanState: cleanState
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

/***/ "d8d6":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1654");
__webpack_require__("6c1c");
module.exports = __webpack_require__("ccb9").f('iterator');


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

/***/ "dbdb":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b8e3") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "de19":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("fb66");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("20676310", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "df53":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CPagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("de19");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CPagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CPagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CPagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e146":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("abb5");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("5c88b888", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "e265":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ed33");

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

/***/ "e6f3":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("07e3");
var toIObject = __webpack_require__("36c3");
var arrayIndexOf = __webpack_require__("5b4e")(false);
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "e919":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CSidebarNav_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4ad2");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CSidebarNav_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CSidebarNav_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CSidebarNav_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ebd6":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("cb7c");
var aFunction = __webpack_require__("d8e8");
var SPECIES = __webpack_require__("2b4c")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "ebfd":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("62a0")('meta');
var isObject = __webpack_require__("f772");
var has = __webpack_require__("07e3");
var setDesc = __webpack_require__("d9f6").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("294c")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "ed33":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("014b");
module.exports = __webpack_require__("584a").Object.getOwnPropertySymbols;


/***/ }),

/***/ "eec4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach                 = __webpack_require__("b770").forEach;
var elementUtilsMaker       = __webpack_require__("5be5");
var listenerHandlerMaker    = __webpack_require__("49ad");
var idGeneratorMaker        = __webpack_require__("2cef");
var idHandlerMaker          = __webpack_require__("5058");
var reporterMaker           = __webpack_require__("abb4");
var browserDetector         = __webpack_require__("18e9");
var batchProcessorMaker     = __webpack_require__("c274");
var stateHandler            = __webpack_require__("d6eb");

//Detection strategies.
var objectStrategyMaker     = __webpack_require__("18d2");
var scrollStrategyMaker     = __webpack_require__("c946");

function isCollection(obj) {
    return Array.isArray(obj) || obj.length !== undefined;
}

function toArray(collection) {
    if (!Array.isArray(collection)) {
        var array = [];
        forEach(collection, function (obj) {
            array.push(obj);
        });
        return array;
    } else {
        return collection;
    }
}

function isElement(obj) {
    return obj && obj.nodeType === 1;
}

/**
 * @typedef idHandler
 * @type {object}
 * @property {function} get Gets the resize detector id of the element.
 * @property {function} set Generate and sets the resize detector id of the element.
 */

/**
 * @typedef Options
 * @type {object}
 * @property {boolean} callOnAdd    Determines if listeners should be called when they are getting added.
                                    Default is true. If true, the listener is guaranteed to be called when it has been added.
                                    If false, the listener will not be guarenteed to be called when it has been added (does not prevent it from being called).
 * @property {idHandler} idHandler  A custom id handler that is responsible for generating, setting and retrieving id's for elements.
                                    If not provided, a default id handler will be used.
 * @property {reporter} reporter    A custom reporter that handles reporting logs, warnings and errors.
                                    If not provided, a default id handler will be used.
                                    If set to false, then nothing will be reported.
 * @property {boolean} debug        If set to true, the the system will report debug messages as default for the listenTo method.
 */

/**
 * Creates an element resize detector instance.
 * @public
 * @param {Options?} options Optional global options object that will decide how this instance will work.
 */
module.exports = function(options) {
    options = options || {};

    //idHandler is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var idHandler;

    if (options.idHandler) {
        // To maintain compatability with idHandler.get(element, readonly), make sure to wrap the given idHandler
        // so that readonly flag always is true when it's used here. This may be removed next major version bump.
        idHandler = {
            get: function (element) { return options.idHandler.get(element, true); },
            set: options.idHandler.set
        };
    } else {
        var idGenerator = idGeneratorMaker();
        var defaultIdHandler = idHandlerMaker({
            idGenerator: idGenerator,
            stateHandler: stateHandler
        });
        idHandler = defaultIdHandler;
    }

    //reporter is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var reporter = options.reporter;

    if(!reporter) {
        //If options.reporter is false, then the reporter should be quiet.
        var quiet = reporter === false;
        reporter = reporterMaker(quiet);
    }

    //batchProcessor is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var batchProcessor = getOption(options, "batchProcessor", batchProcessorMaker({ reporter: reporter }));

    //Options to be used as default for the listenTo function.
    var globalOptions = {};
    globalOptions.callOnAdd     = !!getOption(options, "callOnAdd", true);
    globalOptions.debug         = !!getOption(options, "debug", false);

    var eventListenerHandler    = listenerHandlerMaker(idHandler);
    var elementUtils            = elementUtilsMaker({
        stateHandler: stateHandler
    });

    //The detection strategy to be used.
    var detectionStrategy;
    var desiredStrategy = getOption(options, "strategy", "object");
    var importantCssRules = getOption(options, "important", false);
    var strategyOptions = {
        reporter: reporter,
        batchProcessor: batchProcessor,
        stateHandler: stateHandler,
        idHandler: idHandler,
        important: importantCssRules
    };

    if(desiredStrategy === "scroll") {
        if (browserDetector.isLegacyOpera()) {
            reporter.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy.");
            desiredStrategy = "object";
        } else if (browserDetector.isIE(9)) {
            reporter.warn("Scroll strategy is not supported on IE9. Changing to object strategy.");
            desiredStrategy = "object";
        }
    }

    if(desiredStrategy === "scroll") {
        detectionStrategy = scrollStrategyMaker(strategyOptions);
    } else if(desiredStrategy === "object") {
        detectionStrategy = objectStrategyMaker(strategyOptions);
    } else {
        throw new Error("Invalid strategy name: " + desiredStrategy);
    }

    //Calls can be made to listenTo with elements that are still being installed.
    //Also, same elements can occur in the elements list in the listenTo function.
    //With this map, the ready callbacks can be synchronized between the calls
    //so that the ready callback can always be called when an element is ready - even if
    //it wasn't installed from the function itself.
    var onReadyCallbacks = {};

    /**
     * Makes the given elements resize-detectable and starts listening to resize events on the elements. Calls the event callback for each event for each element.
     * @public
     * @param {Options?} options Optional options object. These options will override the global options. Some options may not be overriden, such as idHandler.
     * @param {element[]|element} elements The given array of elements to detect resize events of. Single element is also valid.
     * @param {function} listener The callback to be executed for each resize event for each element.
     */
    function listenTo(options, elements, listener) {
        function onResizeCallback(element) {
            var listeners = eventListenerHandler.get(element);
            forEach(listeners, function callListenerProxy(listener) {
                listener(element);
            });
        }

        function addListener(callOnAdd, element, listener) {
            eventListenerHandler.add(element, listener);

            if(callOnAdd) {
                listener(element);
            }
        }

        //Options object may be omitted.
        if(!listener) {
            listener = elements;
            elements = options;
            options = {};
        }

        if(!elements) {
            throw new Error("At least one element required.");
        }

        if(!listener) {
            throw new Error("Listener required.");
        }

        if (isElement(elements)) {
            // A single element has been passed in.
            elements = [elements];
        } else if (isCollection(elements)) {
            // Convert collection to array for plugins.
            // TODO: May want to check so that all the elements in the collection are valid elements.
            elements = toArray(elements);
        } else {
            return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        }

        var elementsReady = 0;

        var callOnAdd = getOption(options, "callOnAdd", globalOptions.callOnAdd);
        var onReadyCallback = getOption(options, "onReady", function noop() {});
        var debug = getOption(options, "debug", globalOptions.debug);

        forEach(elements, function attachListenerToElement(element) {
            if (!stateHandler.getState(element)) {
                stateHandler.initState(element);
                idHandler.set(element);
            }

            var id = idHandler.get(element);

            debug && reporter.log("Attaching listener to element", id, element);

            if(!elementUtils.isDetectable(element)) {
                debug && reporter.log(id, "Not detectable.");
                if(elementUtils.isBusy(element)) {
                    debug && reporter.log(id, "System busy making it detectable");

                    //The element is being prepared to be detectable. Do not make it detectable.
                    //Just add the listener, because the element will soon be detectable.
                    addListener(callOnAdd, element, listener);
                    onReadyCallbacks[id] = onReadyCallbacks[id] || [];
                    onReadyCallbacks[id].push(function onReady() {
                        elementsReady++;

                        if(elementsReady === elements.length) {
                            onReadyCallback();
                        }
                    });
                    return;
                }

                debug && reporter.log(id, "Making detectable...");
                //The element is not prepared to be detectable, so do prepare it and add a listener to it.
                elementUtils.markBusy(element, true);
                return detectionStrategy.makeDetectable({ debug: debug, important: importantCssRules }, element, function onElementDetectable(element) {
                    debug && reporter.log(id, "onElementDetectable");

                    if (stateHandler.getState(element)) {
                        elementUtils.markAsDetectable(element);
                        elementUtils.markBusy(element, false);
                        detectionStrategy.addListener(element, onResizeCallback);
                        addListener(callOnAdd, element, listener);

                        // Since the element size might have changed since the call to "listenTo", we need to check for this change,
                        // so that a resize event may be emitted.
                        // Having the startSize object is optional (since it does not make sense in some cases such as unrendered elements), so check for its existance before.
                        // Also, check the state existance before since the element may have been uninstalled in the installation process.
                        var state = stateHandler.getState(element);
                        if (state && state.startSize) {
                            var width = element.offsetWidth;
                            var height = element.offsetHeight;
                            if (state.startSize.width !== width || state.startSize.height !== height) {
                                onResizeCallback(element);
                            }
                        }

                        if(onReadyCallbacks[id]) {
                            forEach(onReadyCallbacks[id], function(callback) {
                                callback();
                            });
                        }
                    } else {
                        // The element has been unisntalled before being detectable.
                        debug && reporter.log(id, "Element uninstalled before being detectable.");
                    }

                    delete onReadyCallbacks[id];

                    elementsReady++;
                    if(elementsReady === elements.length) {
                        onReadyCallback();
                    }
                });
            }

            debug && reporter.log(id, "Already detecable, adding listener.");

            //The element has been prepared to be detectable and is ready to be listened to.
            addListener(callOnAdd, element, listener);
            elementsReady++;
        });

        if(elementsReady === elements.length) {
            onReadyCallback();
        }
    }

    function uninstall(elements) {
        if(!elements) {
            return reporter.error("At least one element is required.");
        }

        if (isElement(elements)) {
            // A single element has been passed in.
            elements = [elements];
        } else if (isCollection(elements)) {
            // Convert collection to array for plugins.
            // TODO: May want to check so that all the elements in the collection are valid elements.
            elements = toArray(elements);
        } else {
            return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        }

        forEach(elements, function (element) {
            eventListenerHandler.removeAllListeners(element);
            detectionStrategy.uninstall(element);
            stateHandler.cleanState(element);
        });
    }

    function initDocument(targetDocument) {
        detectionStrategy.initDocument && detectionStrategy.initDocument(targetDocument);
    }

    return {
        listenTo: listenTo,
        removeListener: eventListenerHandler.removeListener,
        removeAllListeners: eventListenerHandler.removeAllListeners,
        uninstall: uninstall,
        initDocument: initDocument
    };
};

function getOption(options, name, defaultValue) {
    var value = options[name];

    if((value === undefined || value === null) && defaultValue !== undefined) {
        return defaultValue;
    }

    return value;
}


/***/ }),

/***/ "f0bd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
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
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

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
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

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
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

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

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
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

  // remove the popper if user explicity asked for the deletion on destroy
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

/***/ "f1ae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "f32a":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".toast.full{max-width:100%}.fade-enter,.fade-leave-to{opacity:0}.fade-enter-active,.fade-leave-active{-webkit-transition:opacity .3s;transition:opacity .3s}", ""]);

// exports


/***/ }),

/***/ "f386":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__("386b")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


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

/***/ "f751":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "f921":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("014b");
__webpack_require__("c207");
__webpack_require__("69d3");
__webpack_require__("765d");
module.exports = __webpack_require__("584a").Symbol;


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var formMixins_namespaceObject = {};
__webpack_require__.r(formMixins_namespaceObject);
__webpack_require__.d(formMixins_namespaceObject, "safeId", function() { return formMixins_safeId; });
__webpack_require__.d(formMixins_namespaceObject, "wrapperComputedProps", function() { return wrapperComputedProps; });
__webpack_require__.d(formMixins_namespaceObject, "validationComputedProps", function() { return validationComputedProps; });
__webpack_require__.d(formMixins_namespaceObject, "watchValue", function() { return watchValue; });
__webpack_require__.d(formMixins_namespaceObject, "classesComputedProps", function() { return classesComputedProps; });
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
__webpack_require__.d(components_namespaceObject, "CCardGroup", function() { return CCardGroup; });
__webpack_require__.d(components_namespaceObject, "CCard", function() { return CCard; });
__webpack_require__.d(components_namespaceObject, "CCardBody", function() { return CCardBody; });
__webpack_require__.d(components_namespaceObject, "CCardFooter", function() { return CCardFooter; });
__webpack_require__.d(components_namespaceObject, "CCardHeader", function() { return CCardHeader; });
__webpack_require__.d(components_namespaceObject, "CCollapse", function() { return CCollapse; });
__webpack_require__.d(components_namespaceObject, "CDropdown", function() { return CDropdown; });
__webpack_require__.d(components_namespaceObject, "CDropdownHeader", function() { return CDropdownHeader; });
__webpack_require__.d(components_namespaceObject, "CDropdownDivider", function() { return CDropdownDivider; });
__webpack_require__.d(components_namespaceObject, "CDropdownItem", function() { return CDropdownItem; });
__webpack_require__.d(components_namespaceObject, "CEmbed", function() { return CEmbed; });
__webpack_require__.d(components_namespaceObject, "CFooter", function() { return CFooter; });
__webpack_require__.d(components_namespaceObject, "CForm", function() { return CForm; });
__webpack_require__.d(components_namespaceObject, "CFormGroup", function() { return CFormGroup; });
__webpack_require__.d(components_namespaceObject, "CFormInput", function() { return CFormInput; });
__webpack_require__.d(components_namespaceObject, "CFormCheckbox", function() { return CFormCheckbox; });
__webpack_require__.d(components_namespaceObject, "CFormFile", function() { return CFormFile; });
__webpack_require__.d(components_namespaceObject, "CFormTextarea", function() { return CFormTextarea; });
__webpack_require__.d(components_namespaceObject, "CFormSelect", function() { return CFormSelect; });
__webpack_require__.d(components_namespaceObject, "CFormRadio", function() { return CFormRadio; });
__webpack_require__.d(components_namespaceObject, "CContainer", function() { return CContainer; });
__webpack_require__.d(components_namespaceObject, "CRow", function() { return CRow; });
__webpack_require__.d(components_namespaceObject, "CCol", function() { return CCol; });
__webpack_require__.d(components_namespaceObject, "CHeader", function() { return CHeader; });
__webpack_require__.d(components_namespaceObject, "CImage", function() { return CImage; });
__webpack_require__.d(components_namespaceObject, "CImageLazy", function() { return CImageLazy; });
__webpack_require__.d(components_namespaceObject, "CJumbotron", function() { return CJumbotron; });
__webpack_require__.d(components_namespaceObject, "CLink", function() { return CLink; });
__webpack_require__.d(components_namespaceObject, "CListGroup", function() { return CListGroup; });
__webpack_require__.d(components_namespaceObject, "CListGroupItem", function() { return CListGroupItem; });
__webpack_require__.d(components_namespaceObject, "CMedia", function() { return CMedia; });
__webpack_require__.d(components_namespaceObject, "CModal", function() { return CModal; });
__webpack_require__.d(components_namespaceObject, "CNav", function() { return CNav; });
__webpack_require__.d(components_namespaceObject, "CNavItem", function() { return CNavItem; });
__webpack_require__.d(components_namespaceObject, "CNavbar", function() { return CNavbar; });
__webpack_require__.d(components_namespaceObject, "CNavbarNav", function() { return CNavbarNav; });
__webpack_require__.d(components_namespaceObject, "CNavbarToggle", function() { return CNavbarToggle; });
__webpack_require__.d(components_namespaceObject, "CNavbarBrand", function() { return CNavbarBrand; });
__webpack_require__.d(components_namespaceObject, "CPagination", function() { return CPagination; });
__webpack_require__.d(components_namespaceObject, "CProgress", function() { return CProgress; });
__webpack_require__.d(components_namespaceObject, "CProgressBar", function() { return CProgressBar; });
__webpack_require__.d(components_namespaceObject, "CSidebar", function() { return CSidebar; });
__webpack_require__.d(components_namespaceObject, "CSidebarFooter", function() { return CSidebarFooter; });
__webpack_require__.d(components_namespaceObject, "CSidebarForm", function() { return CSidebarForm; });
__webpack_require__.d(components_namespaceObject, "CSidebarHeader", function() { return CSidebarHeader; });
__webpack_require__.d(components_namespaceObject, "CSidebarMinimizer", function() { return CSidebarMinimizer; });
__webpack_require__.d(components_namespaceObject, "CSidebarNav", function() { return CSidebarNav; });
__webpack_require__.d(components_namespaceObject, "CSidebarNavItems", function() { return CSidebarNavItems; });
__webpack_require__.d(components_namespaceObject, "CSidebarNavDivider", function() { return CSidebarNavDivider; });
__webpack_require__.d(components_namespaceObject, "CSidebarNavItem", function() { return CSidebarNavItem; });
__webpack_require__.d(components_namespaceObject, "CSidebarNavDropdown", function() { return CSidebarNavDropdown; });
__webpack_require__.d(components_namespaceObject, "CSidebarNavLabel", function() { return CSidebarNavLabel; });
__webpack_require__.d(components_namespaceObject, "CSidebarNavLink", function() { return CSidebarNavLink; });
__webpack_require__.d(components_namespaceObject, "CSidebarNavTitle", function() { return CSidebarNavTitle; });
__webpack_require__.d(components_namespaceObject, "CSidebarToggler", function() { return CSidebarToggler; });
__webpack_require__.d(components_namespaceObject, "CSpinner", function() { return CSpinner; });
__webpack_require__.d(components_namespaceObject, "CSwitch", function() { return CSwitch; });
__webpack_require__.d(components_namespaceObject, "CTable", function() { return CTable; });
__webpack_require__.d(components_namespaceObject, "CTab", function() { return CTab; });
__webpack_require__.d(components_namespaceObject, "CTabs", function() { return CTabs; });
__webpack_require__.d(components_namespaceObject, "CToast", function() { return CToast; });
__webpack_require__.d(components_namespaceObject, "CToaster", function() { return CToaster; });
__webpack_require__.d(components_namespaceObject, "CWidgetProgress", function() { return CWidgetProgress; });
__webpack_require__.d(components_namespaceObject, "CWidgetIcon", function() { return CWidgetIcon; });
__webpack_require__.d(components_namespaceObject, "CWidgetSocial", function() { return CWidgetSocial; });
__webpack_require__.d(components_namespaceObject, "CWidgetProgressIcon", function() { return CWidgetProgressIcon; });
__webpack_require__.d(components_namespaceObject, "CWidgetDropdown", function() { return CWidgetDropdown; });
__webpack_require__.d(components_namespaceObject, "CWidgetSmallText", function() { return CWidgetSmallText; });
__webpack_require__.d(components_namespaceObject, "CWidgetSimple", function() { return CWidgetSimple; });
var directives_namespaceObject = {};
__webpack_require__.r(directives_namespaceObject);
__webpack_require__.d(directives_namespaceObject, "CPopover", function() { return CPopover; });
__webpack_require__.d(directives_namespaceObject, "CTooltip", function() { return CTooltip; });

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Alert/CAlert.vue?vue&type=template&id=7ce3e377&
var CAlertvue_type_template_id_7ce3e377_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.fade ? 'fade' : null,"appear":true}},[(_vm.state)?_c('div',{class:_vm.alertClasses,attrs:{"role":"alert","aria-live":"polite","aria-atomic":"true"}},[(_vm.dismissible && _vm.dismissible !== 'customButton' )?_c('CButtonClose',{attrs:{"iconHtml":_vm.iconHtml,"disabled":this.dismissible === 'disabled'},on:{"click":function($event){return _vm.dismiss()}}}):_vm._e(),_vm._t("default",null,{"dismiss":_vm.dismiss})],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Alert/CAlert.vue?vue&type=template&id=7ce3e377&

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
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// CONCATENATED MODULE: ./node_modules/vue-functional-data-merge/dist/lib.esm.js
var e=function(){return(e=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},t={kebab:/-(\w)/g,styleProp:/:(.*)/,styleList:/;(?![^(]*\))/g};function r(e,t){return t?t.toUpperCase():""}function s(e){for(var s,a={},c=0,o=e.split(t.styleList);c<o.length;c++){var n=o[c].split(t.styleProp),i=n[0],l=n[1];(i=i.trim())&&("string"==typeof l&&(l=l.trim()),a[(s=i,s.replace(t.kebab,r))]=l)}return a}function a(){for(var t,r,a={},c=arguments.length;c--;)for(var o=0,n=Object.keys(arguments[c]);o<n.length;o++)switch(t=n[o]){case"class":case"style":case"directives":if(Array.isArray(a[t])||(a[t]=[]),"style"===t){var i=void 0;i=Array.isArray(arguments[c].style)?arguments[c].style:[arguments[c].style];for(var l=0;l<i.length;l++){var y=i[l];"string"==typeof y&&(i[l]=s(y))}arguments[c].style=i}a[t]=a[t].concat(arguments[c][t]);break;case"staticClass":if(!arguments[c][t])break;void 0===a[t]&&(a[t]=""),a[t]&&(a[t]+=" "),a[t]+=arguments[c][t].trim();break;case"on":case"nativeOn":a[t]||(a[t]={});for(var p=0,f=Object.keys(arguments[c][t]||{});p<f.length;p++)r=f[p],a[t][r]?a[t][r]=[].concat(a[t][r],arguments[c][t][r]):a[t][r]=arguments[c][t][r];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":a[t]||(a[t]={}),a[t]=e({},arguments[c][t],a[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:a[t]||(a[t]=arguments[c][t])}return a}
//# sourceMappingURL=lib.esm.js.map

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Button/CButtonClose.vue?vue&type=script&lang=js&

/* harmony default export */ var CButtonClosevue_type_script_lang_js_ = ({
  name: 'CButtonClose',
  functional: true,
  props: {
    iconHtml: {
      type: String,
      default: '&times;'
    },
    buttonClasses: {
      type: String,
      default: 'c-close'
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
        innerHTML: props.iconHtml
      } : null
    }), slots().default);
  }
});
// CONCATENATED MODULE: ./tmp/components/Button/CButtonClose.vue?vue&type=script&lang=js&
 /* harmony default export */ var Button_CButtonClosevue_type_script_lang_js_ = (CButtonClosevue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./tmp/components/Button/CButtonClose.vue
var CButtonClose_render, CButtonClose_staticRenderFns




/* normalize component */

var component = normalizeComponent(
  Button_CButtonClosevue_type_script_lang_js_,
  CButtonClose_render,
  CButtonClose_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CButtonClose = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Alert/CAlert.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
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
    variant: {
      type: String,
      default: 'info'
    },
    dismissible: {
      type: [Boolean, String],
      validator: function validator(val) {
        return [false, true, 'disabled', 'customButton'].includes(val);
      }
    },
    show: {
      type: [Boolean, Number],
      default: true
    },
    fade: Boolean,
    iconHtml: String
  },
  data: function data() {
    return {
      countdownTimeout: null,
      state: this.show
    };
  },
  computed: {
    alertClasses: function alertClasses() {
      return ['c-alert', _defineProperty({
        'c-alert-dismissible': this.dismissible
      }, "c-alert-".concat(this.variant), this.variant)];
    }
  },
  watch: {
    show: function show(val, oldVal) {
      if (val == oldVal) return;
      this.clearCounter();
      this.state = val;
    },
    state: {
      immediate: true,
      handler: function handler(val, oldVal) {
        var _this = this;

        if (val == oldVal) return;

        if (!val && oldVal) {
          this.clearCounter();
          this.$emit('dismissed');
        } else if (typeof val === 'number' && val) {
          this.countdownTimeout = setTimeout(function () {
            _this.$listeners['update:show'] ? _this.$emit('update:show', _this.state - 1) : _this.state--;
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
      this.$emit('update:show', false);
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
// CONCATENATED MODULE: ./tmp/components/Alert/CAlert.vue?vue&type=script&lang=js&
 /* harmony default export */ var Alert_CAlertvue_type_script_lang_js_ = (CAlertvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./tmp/components/Alert/CAlert.vue?vue&type=style&index=0&lang=css&
var CAlertvue_type_style_index_0_lang_css_ = __webpack_require__("5dbc0");

// CONCATENATED MODULE: ./tmp/components/Alert/CAlert.vue






/* normalize component */

var CAlert_component = normalizeComponent(
  Alert_CAlertvue_type_script_lang_js_,
  CAlertvue_type_template_id_7ce3e377_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CAlert = (CAlert_component.exports);
// CONCATENATED MODULE: ./tmp/components/Alert/index.js


// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Link/CLink.vue?vue&type=script&lang=js&


function propsFactory() {
  return {
    href: String,
    textHtml: String,
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
      default: 'c-active'
    },
    append: Boolean,
    event: {
      type: [String, Array],
      default: 'click'
    },
    exact: Boolean,
    exactActiveClass: {
      type: String,
      default: 'c-active'
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
    var domProps = props.textHtml ? {
      innerHTML: props.textHtml
    } : null;
    var componentData = a(data, {
      class: {
        'c-disabled': props.disabled,
        'c-active': props.active
      },
      attrs: {
        rel: rel,
        href: href,
        target: props.target,
        tabindex: props.disabled ? '-1' : tabindex,
        'aria-disabled': tag === 'a' && props.disabled ? 'true' : null
      },
      domProps: domProps,
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
// CONCATENATED MODULE: ./tmp/components/Link/CLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var Link_CLinkvue_type_script_lang_js_ = (CLinkvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Link/CLink.vue
var CLink_render, CLink_staticRenderFns




/* normalize component */

var CLink_component = normalizeComponent(
  Link_CLinkvue_type_script_lang_js_,
  CLink_render,
  CLink_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CLink = (CLink_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Badge/CBadge.vue?vue&type=script&lang=js&



var CBadgevue_type_script_lang_js_props = Object.assign(CLinkvue_type_script_lang_js_props, {
  tag: {
    type: String,
    default: 'span'
  },
  variant: {
    type: String,
    default: 'secondary'
  },
  pill: Boolean,
  textHtml: String
});
/* harmony default export */ var CBadgevue_type_script_lang_js_ = ({
  functional: true,
  name: 'CBadge',
  props: CBadgevue_type_script_lang_js_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var tag = !props.href && !props.to ? props.tag : CLink;
    var domProps = props.textHtml ? {
      innerHTML: props.textHtml
    } : null;
    var componentData = {
      staticClass: 'c-badge',
      class: ["c-badge-".concat(props.variant), {
        'c-badge-pill': Boolean(props.pill),
        'c-active': props.active,
        'c-disabled': props.disabled
      }],
      domProps: domProps,
      props: props
    };
    return h(tag, a(data, componentData), children);
  }
});
// CONCATENATED MODULE: ./tmp/components/Badge/CBadge.vue?vue&type=script&lang=js&
 /* harmony default export */ var Badge_CBadgevue_type_script_lang_js_ = (CBadgevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Badge/CBadge.vue
var CBadge_render, CBadge_staticRenderFns




/* normalize component */

var CBadge_component = normalizeComponent(
  Badge_CBadgevue_type_script_lang_js_,
  CBadge_render,
  CBadge_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CBadge = (CBadge_component.exports);
// CONCATENATED MODULE: ./tmp/components/Badge/index.js


// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("5d58");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("67bb");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Breadcrumb/CBreadcrumb.vue?vue&type=script&lang=js&



/* harmony default export */ var CBreadcrumbvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CBreadcrumb',
  props: {
    items: Array,
    addClasses: [String, Array],
    addLinkClasses: [String, Array],
    addLastItemClasses: [String, Array]
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;

    if (!Array.isArray(props.items)) {
      return;
    }

    var childNodes = props.items.map(function (item, index, items) {
      if (typeof_typeof(item) !== 'object') {
        return;
      }

      var isLast = items.length === index + 1;
      var tag = isLast ? 'span' : CLink;
      var lastItemProps = {
        class: [props.addClasses, props.addLastItemClasses, item.addClasses],
        domProps: {
          innerHTML: item.textHtml
        }
      };
      var linkItemProps = {
        class: [props.addClasses, props.addLinkClasses, item.addClasses],
        domProps: {
          innerHTML: item.textHtml
        },
        props: item
      };
      var itemProps = isLast ? lastItemProps : linkItemProps;
      return h('li', {
        staticClass: 'c-breadcrumb-item',
        class: {
          'c-active': isLast
        },
        attrs: {
          role: 'presentation'
        }
      }, [h(tag, itemProps)]);
    });
    return h('ol', a(data, {
      staticClass: 'c-breadcrumb'
    }), childNodes);
  }
});
// CONCATENATED MODULE: ./tmp/components/Breadcrumb/CBreadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var Breadcrumb_CBreadcrumbvue_type_script_lang_js_ = (CBreadcrumbvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Breadcrumb/CBreadcrumb.vue
var CBreadcrumb_render, CBreadcrumb_staticRenderFns




/* normalize component */

var CBreadcrumb_component = normalizeComponent(
  Breadcrumb_CBreadcrumbvue_type_script_lang_js_,
  CBreadcrumb_render,
  CBreadcrumb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CBreadcrumb = (CBreadcrumb_component.exports);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Breadcrumb/CBreadcrumbRouter.vue?vue&type=script&lang=js&


/* harmony default export */ var CBreadcrumbRoutervue_type_script_lang_js_ = ({
  name: 'CBreadcrumbRouter',
  props: {
    addClasses: [String, Array],
    addLinkClasses: [String, Array],
    addLastItemClasses: [String, Array]
  },
  computed: {
    items: function items() {
      var routes = this.$route.matched.filter(function (route) {
        return route.name || route.meta.label;
      });
      return routes.map(function (route) {
        var item = {
          to: route,
          textHtml: route.meta && route.meta.label ? route.meta.label : route.name || null
        };
        return item;
      });
    }
  },
  render: function render(h) {
    return h(CBreadcrumb, {
      props: {
        items: this.items,
        addClasses: this.addClasses,
        addLinkClasses: this.addLinkClasses,
        addLastItemClasses: this.addLastItemClasses
      }
    });
  }
});
// CONCATENATED MODULE: ./tmp/components/Breadcrumb/CBreadcrumbRouter.vue?vue&type=script&lang=js&
 /* harmony default export */ var Breadcrumb_CBreadcrumbRoutervue_type_script_lang_js_ = (CBreadcrumbRoutervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Breadcrumb/CBreadcrumbRouter.vue
var CBreadcrumbRouter_render, CBreadcrumbRouter_staticRenderFns




/* normalize component */

var CBreadcrumbRouter_component = normalizeComponent(
  Breadcrumb_CBreadcrumbRoutervue_type_script_lang_js_,
  CBreadcrumbRouter_render,
  CBreadcrumbRouter_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CBreadcrumbRouter = (CBreadcrumbRouter_component.exports);
// CONCATENATED MODULE: ./tmp/components/Breadcrumb/index.js



// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// CONCATENATED MODULE: ./tmp/utils/getPartOfObject.js





function getPartOfObject(originalObject, keys) {
  var reduce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var keysArray = Array.isArray(keys) ? keys : Object.keys(keys);
  return Object.keys(originalObject).reduce(function (generatedObject, key) {
    if (reduce !== keysArray.includes(key)) {
      generatedObject[key] = originalObject[key];
    }

    return generatedObject;
  }, {});
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Button/CButton.vue?vue&type=script&lang=js&







var btnProps = {
  block: Boolean,
  pill: Boolean,
  square: Boolean,
  ghost: Boolean,
  outline: Boolean,
  size: {
    type: String,
    validator: function validator(value) {
      return ['sm', 'lg'].includes(value);
    }
  },
  variant: {
    type: String,
    default: 'secondary'
  },
  type: {
    type: String,
    default: 'button'
  },
  pressed: {
    type: Boolean,
    default: null
  },
  textHtml: String
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

  return ["c-btn-".concat(props.outline ? 'outline-' : '').concat(props.variant), props.pill ? 'c-btn-pill' : props.square ? 'c-btn-square' : '', (_ref = {}, _defineProperty(_ref, "c-btn-".concat(props.size), Boolean(props.size)), _defineProperty(_ref, "c-btn-ghost-".concat(props.variant), props.ghost), _defineProperty(_ref, 'c-btn-block', props.block), _defineProperty(_ref, 'c-disabled', props.disabled), _defineProperty(_ref, 'c-active', props.pressed), _ref)];
}

function computePassedProps(props) {
  return CButtonvue_type_script_lang_js_isLink(props) ? getPartOfObject(props, propsFactory()) : null;
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
      click: function click(e) {
        if (props.disabled && e instanceof Event) {
          e.stopPropagation();
          e.preventDefault();
        } else if (toggle && listeners && listeners['update:pressed']) {
          // Send .sync updates to any "pressed" prop (if .sync listeners)
          listeners['update:pressed'](!props.pressed);
        }
      }
    };
    var domProps = children ? '' : {
      innerHTML: props.textHtml
    };
    var componentData = {
      staticClass: 'c-btn',
      class: computeClasses(props),
      props: computePassedProps(props),
      attrs: computeAttrs(props, data, isButton, toggle),
      domProps: domProps,
      on: on
    };
    return h(isButton ? 'button' : CLink, a(data, componentData), children);
  }
});
// CONCATENATED MODULE: ./tmp/components/Button/CButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var Button_CButtonvue_type_script_lang_js_ = (CButtonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Button/CButton.vue
var CButton_render, CButton_staticRenderFns




/* normalize component */

var CButton_component = normalizeComponent(
  Button_CButtonvue_type_script_lang_js_,
  CButton_render,
  CButton_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CButton = (CButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Button/CButtonGroup.vue?vue&type=script&lang=js&


/* harmony default export */ var CButtonGroupvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CButtonGroup',
  props: {
    vertical: Boolean,
    size: String
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('div', a(data, {
      class: [!props.vertical ? 'c-btn-group' : 'c-btn-group-vertical', _defineProperty({}, "c-btn-group-".concat(props.size), Boolean(props.size))],
      attrs: {
        role: 'group'
      }
    }), children);
  }
});
// CONCATENATED MODULE: ./tmp/components/Button/CButtonGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var Button_CButtonGroupvue_type_script_lang_js_ = (CButtonGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Button/CButtonGroup.vue
var CButtonGroup_render, CButtonGroup_staticRenderFns




/* normalize component */

var CButtonGroup_component = normalizeComponent(
  Button_CButtonGroupvue_type_script_lang_js_,
  CButtonGroup_render,
  CButtonGroup_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CButtonGroup = (CButtonGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Button/CButtonToolbar.vue?vue&type=script&lang=js&

/* harmony default export */ var CButtonToolbarvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CButtonToolbar',
  props: {
    justify: Boolean
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('div', a(data, {
      class: ['c-btn-toolbar', props.justify ? 'c-justify-content-between' : ''],
      attrs: {
        role: 'toolbar'
      }
    }), children);
  }
});
// CONCATENATED MODULE: ./tmp/components/Button/CButtonToolbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Button_CButtonToolbarvue_type_script_lang_js_ = (CButtonToolbarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Button/CButtonToolbar.vue
var CButtonToolbar_render, CButtonToolbar_staticRenderFns




/* normalize component */

var CButtonToolbar_component = normalizeComponent(
  Button_CButtonToolbarvue_type_script_lang_js_,
  CButtonToolbar_render,
  CButtonToolbar_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CButtonToolbar = (CButtonToolbar_component.exports);
// CONCATENATED MODULE: ./tmp/components/Button/index.js





// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Callout/CCallout.vue?vue&type=template&id=91f7936a&functional=true&
var CCalloutvue_type_template_id_91f7936a_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('div',{class:("c-callout " + (_vm.props.variant ? 'c-callout-' + _vm.props.variant : ''))},[_vm._t("default")],2)}
var CCalloutvue_type_template_id_91f7936a_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Callout/CCallout.vue?vue&type=template&id=91f7936a&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Callout/CCallout.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CCalloutvue_type_script_lang_js_ = ({
  name: 'CCallout',
  props: {
    variant: String
  }
});
// CONCATENATED MODULE: ./tmp/components/Callout/CCallout.vue?vue&type=script&lang=js&
 /* harmony default export */ var Callout_CCalloutvue_type_script_lang_js_ = (CCalloutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Callout/CCallout.vue





/* normalize component */

var CCallout_component = normalizeComponent(
  Callout_CCalloutvue_type_script_lang_js_,
  CCalloutvue_type_template_id_91f7936a_functional_true_render,
  CCalloutvue_type_template_id_91f7936a_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var CCallout = (CCallout_component.exports);
// CONCATENATED MODULE: ./tmp/components/Callout/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Carousel/CCarousel.vue?vue&type=template&id=37a627ec&
var CCarouselvue_type_template_id_37a627ec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-carousel c-slide",style:({ height: _vm.height || 'auto' })},[(_vm.indicators)?_c('ol',{class:_vm.indicatorClasses},_vm._l((_vm.items.length),function(index,key){return _c('li',{key:key,class:{ 'c-active': _vm.activated === key },on:{"click":function($event){return _vm.setItem(key)}}})}),0):_vm._e(),_c('div',{staticClass:"c-carousel-inner"},[_vm._t("default")],2),(_vm.arrows)?[_vm._t("arrows",[_c('a',{staticClass:"c-carousel-control-prev",on:{"click":_vm.previousItem}},[_c('span',{staticClass:"c-carousel-control-prev-icon"}),_c('span',{staticClass:"sr-only"},[_vm._v("Previous")])]),_c('a',{staticClass:"c-carousel-control-next",on:{"click":_vm.nextItem}},[_c('span',{staticClass:"c-carousel-control-next-icon"}),_c('span',{staticClass:"sr-only"},[_vm._v("Next")])])])]:_vm._e()],2)}
var CCarouselvue_type_template_id_37a627ec_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Carousel/CCarousel.vue?vue&type=template&id=37a627ec&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Carousel/CCarousel.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    interval: {
      type: Number,
      default: 6000
    },
    animate: Boolean,
    indicators: Boolean,
    arrows: Boolean,
    indicatorClasses: {
      type: [String, Array],
      default: 'c-carousel-indicators'
    },
    height: String
  },
  data: function data() {
    return {
      active: null,
      activated: null,
      items: [],
      currentInterval: null,
      transitioning: false,
      waitingItem: null
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
      }

      var order = passedOrder || (this.active > index ? 'prev' : 'next');
      this.active = index;

      if (!this.transitioning) {
        this.activate(index, order);
      } else {
        this.waitingItem = {
          index: index,
          order: order
        };
      }
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
        _this3.transitioning = false;

        if (_this3.waitingItem) {
          _this3.setItem(_this3.waitingItem.index, _this3.waitingItem.order);

          _this3.waitingItem = null;
        }
      }, 600);
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Carousel/CCarousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var Carousel_CCarouselvue_type_script_lang_js_ = (CCarouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./tmp/components/Carousel/CCarousel.vue?vue&type=style&index=0&lang=scss&
var CCarouselvue_type_style_index_0_lang_scss_ = __webpack_require__("8293");

// CONCATENATED MODULE: ./tmp/components/Carousel/CCarousel.vue






/* normalize component */

var CCarousel_component = normalizeComponent(
  Carousel_CCarouselvue_type_script_lang_js_,
  CCarouselvue_type_template_id_37a627ec_render,
  CCarouselvue_type_template_id_37a627ec_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCarousel = (CCarousel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Carousel/CCarouselItem.vue?vue&type=template&id=73801dbb&
var CCarouselItemvue_type_template_id_73801dbb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.itemClasses},[(_vm.image || _vm.imgSrc)?_c('CImage',_vm._b({staticClass:"c-d-block c-w-100 c-h-100 c-img-fluid",attrs:{"src":_vm.imgSrc}},'CImage',_vm.image,false)):_vm._e(),_vm._t("default",[_c('div',{staticClass:"c-carousel-caption"},[_c('h3',[_vm._v(_vm._s(_vm.caption))]),_c('p',[_vm._v(_vm._s(_vm.text))])])])],2)}
var CCarouselItemvue_type_template_id_73801dbb_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Carousel/CCarouselItem.vue?vue&type=template&id=73801dbb&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Image/CImage.vue?vue&type=template&id=e443b11e&
var CImagevue_type_template_id_e443b11e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.src && _vm.isActive)?_c('img',{class:_vm.imageClasses,attrs:{"src":_vm.src,"alt":_vm.alt,"width":_vm.width,"height":_vm.height}}):_c('svg',{class:_vm.imageClasses,style:({'background-color': _vm.isActive ? _vm.blankColor : 'transparent' }),attrs:{"width":_vm.width,"height":_vm.height}})}
var CImagevue_type_template_id_e443b11e_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Image/CImage.vue?vue&type=template&id=e443b11e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Image/CImage.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CImagevue_type_script_lang_js_ = ({
  name: 'CImage',
  props: {
    src: String,
    alt: String,
    width: [Number, String],
    height: [Number, String],
    block: Boolean,
    fluid: Boolean,
    // Gives fluid images class `w-100` to make them grow to fit container
    fluidGrow: Boolean,
    // rounded can be:
    //   false: no rounding of corners
    //   true: slightly rounded corners
    //   'top': top corners rounded
    //   'right': right corners rounded
    //   'bottom': bottom corners rounded
    //   'left': left corners rounded
    //   'circle': circle/oval
    //   '0': force rounding off
    rounded: {
      type: [Boolean, String],
      validator: function validator(val) {
        return [false, true, 'top', 'right', 'bottom', 'left', 'circle'].includes(val);
      }
    },
    thumbnail: Boolean,
    align: {
      type: String,
      validator: function validator(align) {
        return ['left', 'right', 'center'].includes(align);
      }
    },
    blankColor: {
      type: String,
      default: 'transparent'
    }
  },
  computed: {
    isActive: function isActive() {
      //active prop is present in CImageLazy component, here always undefined
      return this.active !== false;
    },
    alignClass: function alignClass() {
      if (this.align === 'left') {
        return 'c-float-left';
      } else if (this.align === 'right') {
        return 'c-float-right';
      } else if (this.align === 'center') {
        return 'c-mx-auto';
      }
    },
    imageClasses: function imageClasses() {
      var _ref;

      return [//animationClass is rendered in CImageLazy
      this.animationClasses, (_ref = {
        'c-img-thumbnail': this.thumbnail,
        'c-img-fluid': this.fluid || this.fluidGrow,
        'c-w-100': this.fluidGrow
      }, _defineProperty(_ref, "c-rounded".concat(this.rounded === true ? '' : '-' + this.rounded), this.rounded), _defineProperty(_ref, this.alignClass, Boolean(this.align)), _defineProperty(_ref, 'c-d-block', this.block), _ref)];
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Image/CImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var Image_CImagevue_type_script_lang_js_ = (CImagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Image/CImage.vue





/* normalize component */

var CImage_component = normalizeComponent(
  Image_CImagevue_type_script_lang_js_,
  CImagevue_type_template_id_e443b11e_render,
  CImagevue_type_template_id_e443b11e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CImage = (CImage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Carousel/CCarouselItem.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
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
    CImage: CImage
  },
  props: {
    image: Object,
    imgSrc: String,
    caption: String,
    text: String,
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

      return ['c-carousel-item', (_ref = {}, _defineProperty(_ref, "c-carousel-item-".concat(this.order), this.order && !this.activated), _defineProperty(_ref, "c-carousel-item-".concat(this.direction), this.transitioning), _defineProperty(_ref, 'c-active', this.activated), _ref)];
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
// CONCATENATED MODULE: ./tmp/components/Carousel/CCarouselItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Carousel_CCarouselItemvue_type_script_lang_js_ = (CCarouselItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Carousel/CCarouselItem.vue





/* normalize component */

var CCarouselItem_component = normalizeComponent(
  Carousel_CCarouselItemvue_type_script_lang_js_,
  CCarouselItemvue_type_template_id_73801dbb_render,
  CCarouselItemvue_type_template_id_73801dbb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCarouselItem = (CCarouselItem_component.exports);
// CONCATENATED MODULE: ./tmp/components/Carousel/index.js



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Card/CCardGroup.vue?vue&type=script&lang=js&

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
      staticClass: "c-card-".concat(props.columns ? 'columns' : props.deck ? 'deck' : 'group')
    }), children);
  }
});
// CONCATENATED MODULE: ./tmp/components/Card/CCardGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CCardGroupvue_type_script_lang_js_ = (CCardGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Card/CCardGroup.vue
var CCardGroup_render, CCardGroup_staticRenderFns




/* normalize component */

var CCardGroup_component = normalizeComponent(
  Card_CCardGroupvue_type_script_lang_js_,
  CCardGroup_render,
  CCardGroup_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCardGroup = (CCardGroup_component.exports);
// CONCATENATED MODULE: ./tmp/components/Card/sharedCardProps.js


/* harmony default export */ var sharedCardProps = ({
  props: {
    tag: String,
    variant: String,
    borderVariant: String,
    textVariant: String,
    align: {
      type: String,
      validator: function validator(val) {
        return ['left', 'center', 'right'].includes(val);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Card/CCardHeader.vue?vue&type=script&lang=js&




var CCardHeadervue_type_script_lang_js_props = Object.assign(sharedCardProps.props, {
  headerHtml: String
});
/* harmony default export */ var CCardHeadervue_type_script_lang_js_ = ({
  functional: true,
  name: 'CCardHeader',
  props: CCardHeadervue_type_script_lang_js_props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag || 'header', a(data, {
      staticClass: 'c-card-header',
      class: [(_ref2 = {}, _defineProperty(_ref2, "c-text-".concat(props.align), Boolean(props.align)), _defineProperty(_ref2, "c-bg-".concat(props.variant), Boolean(props.variant)), _defineProperty(_ref2, "c-border-".concat(props.borderVariant), Boolean(props.borderVariant)), _defineProperty(_ref2, "c-text-".concat(props.textVariant), Boolean(props.textVariant)), _ref2)]
    }), children || [h('div', {
      domProps: {
        innerHTML: props.headerHtml
      }
    })]);
  }
});
// CONCATENATED MODULE: ./tmp/components/Card/CCardHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CCardHeadervue_type_script_lang_js_ = (CCardHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Card/CCardHeader.vue
var CCardHeader_render, CCardHeader_staticRenderFns




/* normalize component */

var CCardHeader_component = normalizeComponent(
  Card_CCardHeadervue_type_script_lang_js_,
  CCardHeader_render,
  CCardHeader_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCardHeader = (CCardHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Card/CCardBody.vue?vue&type=script&lang=js&




var CCardBodyvue_type_script_lang_js_props = Object.assign(sharedCardProps.props, {
  titleHtml: String,
  titleTag: {
    type: String,
    default: 'h4'
  },
  subtitleHtml: String,
  subtitleTag: {
    type: String,
    default: 'h6'
  },
  bodyHtml: String,
  overlay: Boolean
});
/* harmony default export */ var CCardBodyvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CCardBody',
  props: CCardBodyvue_type_script_lang_js_props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var cardTitle = h(false);
    var cardSubtitle = h(false);
    var cardContent = children;

    if (props.title) {
      cardTitle = h(props.titleTag, {
        staticClass: 'c-card-title',
        domProps: {
          innerHTML: props.titleHtml
        }
      });
    }

    if (props.subtitle) {
      cardSubtitle = h(props.subtitleTag, {
        staticClass: 'c-card-subtitle c-mb-2 c-text-muted',
        domProps: {
          innerHTML: props.subtitleHtml
        }
      });
    }

    if (props.bodyHtml && cardContent === undefined) {
      cardContent = h('div', {
        domProps: {
          innerHTML: props.bodyHtml
        }
      });
    }

    return h(props.tag || 'div', a(data, {
      staticClass: 'c-card-body',
      class: [(_ref2 = {
        'c-card-img-overlay': props.overlay
      }, _defineProperty(_ref2, "c-bg-".concat(props.variant), Boolean(props.variant)), _defineProperty(_ref2, "c-border-".concat(props.borderVariant), Boolean(props.borderVariant)), _defineProperty(_ref2, "c-text-".concat(props.textVariant), Boolean(props.textVariant)), _defineProperty(_ref2, "c-text-".concat(props.align), Boolean(props.align)), _ref2)]
    }), [cardTitle, cardSubtitle, cardContent]);
  }
});
// CONCATENATED MODULE: ./tmp/components/Card/CCardBody.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CCardBodyvue_type_script_lang_js_ = (CCardBodyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Card/CCardBody.vue
var CCardBody_render, CCardBody_staticRenderFns




/* normalize component */

var CCardBody_component = normalizeComponent(
  Card_CCardBodyvue_type_script_lang_js_,
  CCardBody_render,
  CCardBody_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCardBody = (CCardBody_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Card/CCardFooter.vue?vue&type=script&lang=js&




var CCardFootervue_type_script_lang_js_props = Object.assign(sharedCardProps.props, {
  footerHtml: String
});
/* harmony default export */ var CCardFootervue_type_script_lang_js_ = ({
  functional: true,
  name: 'CCardFooter',
  props: CCardFootervue_type_script_lang_js_props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag || 'footer', a(data, {
      staticClass: 'c-card-footer',
      class: [(_ref2 = {}, _defineProperty(_ref2, "c-text-".concat(props.align), Boolean(props.align)), _defineProperty(_ref2, "c-bg-".concat(props.variant), Boolean(props.variant)), _defineProperty(_ref2, "c-border-".concat(props.borderVariant), Boolean(props.borderVariant)), _defineProperty(_ref2, "c-text-".concat(props.textVariant), Boolean(props.textVariant)), _ref2)]
    }), children || [h('div', {
      domProps: {
        innerHTML: props.footerHtml
      }
    })]);
  }
});
// CONCATENATED MODULE: ./tmp/components/Card/CCardFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CCardFootervue_type_script_lang_js_ = (CCardFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Card/CCardFooter.vue
var CCardFooter_render, CCardFooter_staticRenderFns




/* normalize component */

var CCardFooter_component = normalizeComponent(
  Card_CCardFootervue_type_script_lang_js_,
  CCardFooter_render,
  CCardFooter_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCardFooter = (CCardFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Card/CCard.vue?vue&type=script&lang=js&







var CCardvue_type_script_lang_js_props = Object.assign(sharedCardProps.props, {
  headerHtml: String,
  bodyHtml: String,
  footerHtml: String,
  bodyWrapper: Boolean
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
    var body = slots().default;
    var footer = h(false);
    if (props.headerHtml) header = h(CCardHeader, {
      domProps: {
        innerHTML: props.headerHtml
      }
    });
    if (body === undefined && props.bodyHtml) body = h(CCardBody, {
      domProps: {
        innerHTML: props.bodyHtml
      }
    });else if (props.bodyWrapper) body = h(CCardBody, body);
    if (props.footerHtml) footer = h(CCardFooter, {
      domProps: {
        innerHTML: props.footerHtml
      }
    });
    return h(props.tag || 'div', a(data, {
      staticClass: 'c-card',
      class: (_class = {}, _defineProperty(_class, "c-text-".concat(props.align), Boolean(props.align)), _defineProperty(_class, "c-bg-".concat(props.variant), Boolean(props.variant)), _defineProperty(_class, "c-border-".concat(props.borderVariant), Boolean(props.borderVariant)), _defineProperty(_class, "c-text-".concat(props.textVariant), Boolean(props.textVariant)), _class)
    }), [header, body, footer]);
  }
});
// CONCATENATED MODULE: ./tmp/components/Card/CCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CCardvue_type_script_lang_js_ = (CCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Card/CCard.vue
var CCard_render, CCard_staticRenderFns




/* normalize component */

var CCard_component = normalizeComponent(
  Card_CCardvue_type_script_lang_js_,
  CCard_render,
  CCard_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCard = (CCard_component.exports);
// CONCATENATED MODULE: ./tmp/components/Card/index.js






// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Collapse/CCollapse.vue?vue&type=template&id=6e63ab64&
var CCollapsevue_type_template_id_6e63ab64_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{ 'c-navbar-collapse': this.navbar }},[_vm._t("default")],2)}
var CCollapsevue_type_template_id_6e63ab64_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Collapse/CCollapse.vue?vue&type=template&id=6e63ab64&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Collapse/CCollapse.vue?vue&type=script&lang=js&

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
  navbar: Boolean,
  toggler: String
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
    show: function show(val, oldVal) {
      if (val === oldVal) return;
      this.visible = val;
    },
    visible: function visible(val, oldVal) {
      if (val !== oldVal) this.collapseController(val);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$el.style.display = this.visible ? '' : 'none';
    this.$nextTick(function () {
      _this.el = document.getElementById(_this.toggler);
      if (_this.el) _this.el.addEventListener('click', _this.collapse);
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.el) this.el.removeEventListener('click', this.collapse);
  },
  methods: {
    collapse: function collapse() {
      this.visible = !this.visible;
    },
    collapseController: function collapseController(val) {
      this.visible = val;

      if (this.collapsing) {
        this.turn();
        var height = Number(this.collapsing.slice(0, -2));
        var current = this.$el.offsetHeight;
        var time = val ? (height - current) / height : current / height;
        this.setFinishTimer(this.duration * time);
      } else {
        val ? this.toggle(true) : this.toggle(false);
        this.setFinishTimer(this.duration);
      }
    },
    turn: function turn() {
      if (this.visible) this.$el.style.height = this.collapsing;else this.$el.style.height = 0;
    },
    toggle: function toggle(val) {
      var _this2 = this;

      this.$el.style.display = '';
      this.collapsing = this.$el.scrollHeight + 'px';
      this.$el.style.height = val ? 0 : this.$el.scrollHeight + 'px';
      this.$el.style.overflow = 'hidden';
      this.$el.style.transition = "all ".concat(this.duration, "ms ").concat(this.transition);
      var self = this;
      setTimeout(function () {
        self.$el.style.height = val ? _this2.collapsing : 0;
      }, 0);
    },
    setFinishTimer: function setFinishTimer(duration) {
      var _this3 = this;

      clearTimeout(this.heightWatcher);
      var self = this;
      this.heightWatcher = setTimeout(function () {
        self.collapsing = false;
        self.$el.style.display = self.visible ? '' : 'none';
        self.$el.style.height = '';
        self.$el.style.overflow = '';
        self.$el.style.transition = '';

        _this3.$emit('finish', self.visible);
      }, duration);
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Collapse/CCollapse.vue?vue&type=script&lang=js&
 /* harmony default export */ var Collapse_CCollapsevue_type_script_lang_js_ = (CCollapsevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Collapse/CCollapse.vue





/* normalize component */

var CCollapse_component = normalizeComponent(
  Collapse_CCollapsevue_type_script_lang_js_,
  CCollapsevue_type_template_id_6e63ab64_render,
  CCollapsevue_type_template_id_6e63ab64_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCollapse = (CCollapse_component.exports);
// CONCATENATED MODULE: ./tmp/components/Collapse/index.js


// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/popper.js/dist/esm/popper.js
var popper = __webpack_require__("f0bd");

// EXTERNAL MODULE: ./node_modules/vue-clickaway2/dist/vue-clickaway.common.js
var vue_clickaway_common = __webpack_require__("723b");

// CONCATENATED MODULE: ./node_modules/@coreui/coreui/js/src/utilities/deep-objects-merge.js
const deepObjectsMerge = (target, source) => {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object) {
      Object.assign(source[key], deepObjectsMerge(target[key], source[key]))
    }
  }

  // Join `target` and modified `source`
  Object.assign(target || {}, source)
  return target
}

/* harmony default export */ var deep_objects_merge = (deepObjectsMerge);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Dropdown/CDropdown.vue?vue&type=script&lang=js&







 //path enables esm build


/* harmony default export */ var CDropdownvue_type_script_lang_js_ = ({
  name: 'CDropdown',
  mixins: [vue_clickaway_common["mixin"]],
  data: function data() {
    return {
      visible: this.show
    };
  },
  props: {
    buttonHtml: {
      type: String,
      default: 'Dropdown'
    },
    show: Boolean,
    dropup: Boolean,
    disabled: Boolean,
    addMenuClasses: String,
    addButtonClasses: String,
    nav: Boolean,
    noCaret: Boolean,
    variant: {
      type: String,
      default: 'secondary'
    },
    size: {
      type: String,
      validator: function validator(val) {
        return ['sm', 'lg'].includes(val);
      }
    },
    split: Boolean,
    offset: Number,
    placement: String,
    noFlip: Boolean,
    popperConfig: Object,
    noPopper: Boolean
  },
  mounted: function mounted() {
    this.menagePopper();
  },
  methods: {
    hide: function hide() {
      if (this.$refs.menu.classList.contains('c-show')) {
        this.toggle(false);
      }
    },
    click: function click(e) {
      e.preventDefault();
      this.toggle(!this.visible);
    },
    toggle: function toggle(value) {
      var _this = this;

      if (!this.disabled) {
        setTimeout(function () {
          _this.visible = value;

          _this.menagePopper();
        }, 0);
      }
    },
    menagePopper: function menagePopper() {
      var _this2 = this;

      if (!this.noPopper) {
        setTimeout(function () {
          _this2.visible ? _this2.createPopper() : _this2.removePopper(), 0;
        });
      }
    },
    removePopper: function removePopper() {
      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
    },
    createPopper: function createPopper() {
      this.removePopper();
      this._popper = new popper["a" /* default */](this.$refs.toggle, this.$refs.menu, this.computedPopperConfig);
    }
  },
  computed: {
    generatedPopperConfig: function generatedPopperConfig() {
      return {
        placement: this.placement || (this.dropup ? 'top-start' : 'bottom-start'),
        modifiers: {
          offset: {
            offset: this.offset || 0
          },
          flip: {
            enabled: !this.noFlip
          }
        }
      };
    },
    computedPopperConfig: function computedPopperConfig() {
      return deep_objects_merge(this.generatedPopperConfig, this.popperConfig || {});
    },
    computedDropdownClasses: function computedDropdownClasses() {
      return [!this.dropup ? 'c-dropdown' : 'c-dropup', {
        'c-show': this.visible,
        'c-nav-item': this.nav,
        'c-btn-group': this.haveButtonClasses
      }];
    },
    buttonTag: function buttonTag() {
      return this.nav ? CLink : 'button';
    },
    haveButtonClasses: function haveButtonClasses() {
      return this.nav && !this.split ? Boolean(this.$options.propsData.variant) : true;
    },
    computedButtonClasses: function computedButtonClasses() {
      var _ref;

      return [this.addButtonClasses, this.haveButtonClasses ? "c-btn c-btn-".concat(this.variant) : 'c-nav-link', (_ref = {
        'c-dropdown-toggle': !this.noCaret && !this.split
      }, _defineProperty(_ref, "c-btn-".concat(this.size), this.size), _defineProperty(_ref, 'c-disabled', this.disabled), _ref)];
    },
    computedMenuClasses: function computedMenuClasses() {
      return [this.addMenuClasses, 'c-dropdown-menu', {
        'c-show': this.visible
      }];
    }
  },
  render: function render(h) {
    var toggle = this.$slots.button || h(this.buttonTag, {
      style: {
        cursor: 'pointer'
      },
      attrs: {
        'aria-haspopup': true,
        'aria-expanded': this.visible
      },
      on: {
        click: this.split ? '' : this.click
      },
      ref: 'toggle',
      class: this.computedButtonClasses,
      domProps: !this.$slots['button-content'] ? {
        innerHTML: this.buttonHtml
      } : null
    }, this.$slots['button-content']);
    var splitButton = h(false);

    if (this.split) {
      splitButton = h(this.buttonTag, {
        class: [this.computedButtonClasses, 'c-dropdown-toggle c-dropdown-toggle-split'],
        on: {
          click: this.click
        }
      });
    }

    var content = h('div', {
      class: this.computedMenuClasses,
      ref: 'menu',
      directives: [{
        name: 'on-clickaway',
        value: this.hide
      }]
    }, this.$slots.default);
    return h(this.nav ? 'li' : 'div', {
      class: this.computedDropdownClasses
    }, [toggle, splitButton, content]);
  }
});
// CONCATENATED MODULE: ./tmp/components/Dropdown/CDropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var Dropdown_CDropdownvue_type_script_lang_js_ = (CDropdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Dropdown/CDropdown.vue
var CDropdown_render, CDropdown_staticRenderFns




/* normalize component */

var CDropdown_component = normalizeComponent(
  Dropdown_CDropdownvue_type_script_lang_js_,
  CDropdown_render,
  CDropdown_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CDropdown = (CDropdown_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Dropdown/CDropdownHeader.vue?vue&type=script&lang=js&

var CDropdownHeadervue_type_script_lang_js_props = {
  tag: {
    type: String,
    default: 'h6'
  }
};
/* harmony default export */ var CDropdownHeadervue_type_script_lang_js_ = ({
  functional: true,
  name: 'CDropdownHeader',
  props: CDropdownHeadervue_type_script_lang_js_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, a(data, {
      staticClass: 'c-dropdown-header'
    }), children);
  }
});
// CONCATENATED MODULE: ./tmp/components/Dropdown/CDropdownHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var Dropdown_CDropdownHeadervue_type_script_lang_js_ = (CDropdownHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Dropdown/CDropdownHeader.vue
var CDropdownHeader_render, CDropdownHeader_staticRenderFns




/* normalize component */

var CDropdownHeader_component = normalizeComponent(
  Dropdown_CDropdownHeadervue_type_script_lang_js_,
  CDropdownHeader_render,
  CDropdownHeader_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CDropdownHeader = (CDropdownHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Dropdown/CDropdownDivider.vue?vue&type=script&lang=js&

var CDropdownDividervue_type_script_lang_js_props = {
  tag: {
    type: String,
    default: 'div'
  }
};
/* harmony default export */ var CDropdownDividervue_type_script_lang_js_ = ({
  functional: true,
  name: 'CDropdownDivider',
  props: CDropdownDividervue_type_script_lang_js_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;
    return h(props.tag, a(data, {
      staticClass: 'c-dropdown-divider',
      attrs: {
        role: 'separator'
      }
    }));
  }
});
// CONCATENATED MODULE: ./tmp/components/Dropdown/CDropdownDivider.vue?vue&type=script&lang=js&
 /* harmony default export */ var Dropdown_CDropdownDividervue_type_script_lang_js_ = (CDropdownDividervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Dropdown/CDropdownDivider.vue
var CDropdownDivider_render, CDropdownDivider_staticRenderFns




/* normalize component */

var CDropdownDivider_component = normalizeComponent(
  Dropdown_CDropdownDividervue_type_script_lang_js_,
  CDropdownDivider_render,
  CDropdownDivider_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CDropdownDivider = (CDropdownDivider_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Dropdown/CDropdownItem.vue?vue&type=script&lang=js&


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
      staticClass: 'c-dropdown-item',
      attrs: {
        role: 'menuitem'
      }
    }), children);
  }
});
// CONCATENATED MODULE: ./tmp/components/Dropdown/CDropdownItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Dropdown_CDropdownItemvue_type_script_lang_js_ = (CDropdownItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Dropdown/CDropdownItem.vue
var CDropdownItem_render, CDropdownItem_staticRenderFns




/* normalize component */

var CDropdownItem_component = normalizeComponent(
  Dropdown_CDropdownItemvue_type_script_lang_js_,
  CDropdownItem_render,
  CDropdownItem_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CDropdownItem = (CDropdownItem_component.exports);
// CONCATENATED MODULE: ./tmp/components/Dropdown/index.js





// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Embed/CEmbed.vue?vue&type=script&lang=js&



var CEmbedvue_type_script_lang_js_props = {
  type: {
    type: String,
    default: 'iframe',
    validator: function validator(type) {
      return ['iframe', 'embed', 'video', 'object', 'img'].includes(type);
    }
  },
  aspect: {
    type: String,
    default: '16by9',
    validator: function validator(aspect) {
      return ['21by9', '16by9', '4by3', '1by1'].includes(aspect);
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
      staticClass: 'c-embed-responsive',
      class: "c-embed-responsive-".concat(props.aspect)
    }, [h(props.type, a(data, {
      ref: '',
      staticClass: 'c-embed-responsive-item'
    }), children)]);
  }
});
// CONCATENATED MODULE: ./tmp/components/Embed/CEmbed.vue?vue&type=script&lang=js&
 /* harmony default export */ var Embed_CEmbedvue_type_script_lang_js_ = (CEmbedvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Embed/CEmbed.vue
var CEmbed_render, CEmbed_staticRenderFns




/* normalize component */

var CEmbed_component = normalizeComponent(
  Embed_CEmbedvue_type_script_lang_js_,
  CEmbed_render,
  CEmbed_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CEmbed = (CEmbed_component.exports);
// CONCATENATED MODULE: ./tmp/components/Embed/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Footer/CFooter.vue?vue&type=template&id=6e94586e&
var CFootervue_type_template_id_6e94586e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{class:_vm.classList},[_vm._t("default",[_vm._v("Footer")])],2)}
var CFootervue_type_template_id_6e94586e_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Footer/CFooter.vue?vue&type=template&id=6e94586e&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.fixed.js
var es6_string_fixed = __webpack_require__("d263");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Footer/CFooter.vue?vue&type=script&lang=js&

//
//
//
//
//
//
/* harmony default export */ var CFootervue_type_script_lang_js_ = ({
  name: 'CFooter',
  props: {
    fixed: Boolean
  },
  computed: {
    classList: function classList() {
      return ['c-footer', {
        'c-footer-fixed': this.fixed
      }];
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Footer/CFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var Footer_CFootervue_type_script_lang_js_ = (CFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Footer/CFooter.vue





/* normalize component */

var CFooter_component = normalizeComponent(
  Footer_CFootervue_type_script_lang_js_,
  CFootervue_type_template_id_6e94586e_render,
  CFootervue_type_template_id_6e94586e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CFooter = (CFooter_component.exports);
// CONCATENATED MODULE: ./tmp/components/Footer/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Form/CForm.vue?vue&type=script&lang=js&

/* harmony default export */ var CFormvue_type_script_lang_js_ = ({
  name: 'CForm',
  functional: true,
  props: {
    // id: String,
    inline: Boolean,
    // novalidate:  Boolean,
    validated: Boolean
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('form', a(data, {
      class: {
        'c-form-inline': props.inline,
        'c-was-validated': props.validated
      } // attrs: {
      //   id: props.id,
      //   novalidate: props.novalidate
      // }

    }), children);
  }
});
// CONCATENATED MODULE: ./tmp/components/Form/CForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var Form_CFormvue_type_script_lang_js_ = (CFormvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Form/CForm.vue
var CForm_render, CForm_staticRenderFns




/* normalize component */

var CForm_component = normalizeComponent(
  Form_CFormvue_type_script_lang_js_,
  CForm_render,
  CForm_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CForm = (CForm_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Form/CFormGroup.vue?vue&type=template&id=462a15c3&functional=true&
var CFormGroupvue_type_template_id_462a15c3_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('div',{class:[_vm.data.class, _vm.data.staticClass],style:([_vm.data.style, _vm.data.staticStyle]),attrs:{"role":"group"}},[(_vm.props.wrapperClasses)?[_vm._t("label"),_c('div',{class:_vm.props.wrapperClasses},[(_vm.props.prependHtml || _vm.$slots.prepend)?_c('div',{staticClass:"c-input-group-prepend"},[_vm._t("prepend",[_c('span',{staticClass:"c-input-group-text",domProps:{"innerHTML":_vm._s(_vm.props.prependHtml)}})])],2):_vm._e(),_vm._t("input"),_vm._t("label-after-input"),(_vm.props.appendHtml || _vm.$slots.append)?_c('div',{staticClass:"c-input-group-append"},[_vm._t("append",[_c('span',{staticClass:"c-input-group-text",domProps:{"innerHTML":_vm._s(_vm.props.appendHtml)}})])],2):_vm._e(),_vm._t("valid-feedback",[(_vm.props.validFeedback)?_c('div',{class:_vm.props.tooltipFeedback ? 'c-valid-tooltip' : 'c-valid-feedback',domProps:{"textContent":_vm._s(_vm.props.validFeedback)}}):_vm._e()]),_vm._t("invalid-feedback",[(_vm.props.invalidFeedback)?_c('div',{class:_vm.props.tooltipFeedback ? 'c-invalid-tooltip' : 'c-invalid-feedback',domProps:{"textContent":_vm._s(_vm.props.invalidFeedback)}}):_vm._e()]),_vm._t("description",[(_vm.props.description)?_c('small',{staticClass:"c-form-text c-text-muted c-w-100",domProps:{"textContent":_vm._s(_vm.props.description)}}):_vm._e()])],2)]:[_vm._t("label"),(_vm.props.prependHtml || _vm.$slots.prepend)?_c('div',{staticClass:"c-input-group-prepend"},[_vm._t("prepend",[_c('span',{staticClass:"c-input-group-text",domProps:{"innerHTML":_vm._s(_vm.props.prependHtml)}})])],2):_vm._e(),_vm._t("input"),_vm._t("label-after-input"),(_vm.props.appendHtml || _vm.$slots.append)?_c('div',{staticClass:"c-input-group-append"},[_vm._t("append",[_c('span',{staticClass:"c-input-group-text",domProps:{"innerHTML":_vm._s(_vm.props.appendHtml)}})])],2):_vm._e(),_vm._t("valid-feedback",[(_vm.props.validFeedback)?_c('div',{class:_vm.props.tooltipFeedback ? 'c-valid-tooltip' : 'c-valid-feedback',domProps:{"textContent":_vm._s(_vm.props.validFeedback)}}):_vm._e()]),_vm._t("invalid-feedback",[(_vm.props.invalidFeedback)?_c('div',{class:_vm.props.tooltipFeedback ? 'c-invalid-tooltip' : 'c-invalid-feedback',domProps:{"textContent":_vm._s(_vm.props.invalidFeedback)}}):_vm._e()]),_vm._t("description",[(_vm.props.description)?_c('small',{staticClass:"c-form-text c-text-muted c-w-100",domProps:{"textContent":_vm._s(_vm.props.description)}}):_vm._e()])]],2)}
var CFormGroupvue_type_template_id_462a15c3_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Form/CFormGroup.vue?vue&type=template&id=462a15c3&functional=true&

// CONCATENATED MODULE: ./tmp/components/Form/formProps.js




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
var wrapperClassesProp = {
  wrapperClasses: [String, Array, Object]
};
var formGroupProps = Object.assign({}, formGroupSharedProps, wrapperClassesProp);
var universalProps = {
  label: String,
  wasValidated: Boolean,
  isValid: {
    type: [Boolean, Function],
    default: null
  },
  addInputClasses: String,
  addLabelClasses: String
};
var formProps_props = Object.assign({}, universalProps, {
  horizontal: [Boolean, Object],
  size: {
    type: String,
    validator: function validator(str) {
      return ['', 'sm', 'lg'].includes(str);
    }
  },
  addWrapperClasses: String
});
var textInputsProps = {
  readonly: Boolean,
  plaintext: Boolean,
  value: String,
  lazy: {
    type: [Boolean, Number],
    default: 400
  } // Html props: disabled, required, accept, id

};
var formFileProps = Object.assign({}, formGroupAlwaysSharedProps, formProps_props, {
  custom: [Boolean, String],
  multiple: Boolean
}); // Html props: disabled, required, rows, cols, placeholder, id

var formTextareaProps = Object.assign({}, formGroupSharedProps, formProps_props, textInputsProps); // HTML props: disabled, required, placeholder, id

var formInputProps = Object.assign({}, formGroupSharedProps, formProps_props, textInputsProps, {
  type: {
    type: String,
    default: 'text'
  }
}); // Html props: disabled, id required don't use multiple

var formSelectProps = Object.assign({}, formGroupSharedProps, formProps_props, {
  options: Array,
  value: [String, Number, Boolean, Array],
  plaintext: Boolean,
  placeholder: String,
  custom: Boolean
}); // Html props: id, disabled, required

var formCheckboxProps = Object.assign({}, formGroupAlwaysSharedProps, universalProps, {
  checked: [Boolean, String, Number],
  value: {
    type: [String, Number, Boolean],
    default: undefined
  },
  trueValue: {
    type: [String, Number],
    default: undefined
  },
  falseValue: {
    type: [String, Number],
    default: undefined
  },
  custom: [Boolean, String],
  inline: Boolean
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Form/CFormGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  //   wrapperClasses: [String, Array, Object],
  //   appendHtml: String,
  //   prependHtml: String,
  //   validFeedback: String,
  //   invalidFeedback: String,
  //   tooltipFeedback: Boolean,
  //   description: String
  // },

});
// CONCATENATED MODULE: ./tmp/components/Form/CFormGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var Form_CFormGroupvue_type_script_lang_js_ = (CFormGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Form/CFormGroup.vue





/* normalize component */

var CFormGroup_component = normalizeComponent(
  Form_CFormGroupvue_type_script_lang_js_,
  CFormGroupvue_type_template_id_462a15c3_functional_true_render,
  CFormGroupvue_type_template_id_462a15c3_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var CFormGroup = (CFormGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Form/CFormInput.vue?vue&type=template&id=b00f415c&
var CFormInputvue_type_template_id_b00f415c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CFormGroup',_vm._b({scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._t("label",[(_vm.label)?_c('label',{class:_vm.labelClasses,attrs:{"for":_vm.safeId}},[_vm._v("\n        "+_vm._s(_vm.label)+"\n      ")]):_vm._e()])]},proxy:true},{key:"input",fn:function(){return [_c('input',_vm._b({class:_vm.inputClasses,attrs:{"id":_vm.safeId,"type":_vm.type,"readonly":_vm.readonly || _vm.plaintext},domProps:{"value":_vm.state},on:{"input":function($event){return _vm.onInput($event)},"change":function($event){return _vm.onChange($event)}}},'input',_vm.$attrs,false))]},proxy:true},_vm._l((['prepend', 'append', 'label-after-input',
                    'valid-feedback', 'invalid-feedback','description']),function(slot){return {key:slot,fn:function(){return [_vm._t(slot)]},proxy:true}})],null,true)},'CFormGroup',{appendHtml: _vm.appendHtml, prependHtml: _vm.prependHtml, validFeedback: _vm.validFeedback, invalidFeedback: _vm.invalidFeedback,
      tooltipFeedback: _vm.tooltipFeedback, description: _vm.description, wrapperClasses: _vm.wrapperClasses, class: _vm.computedClasses},false))}
var CFormInputvue_type_template_id_b00f415c_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Form/CFormInput.vue?vue&type=template&id=b00f415c&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.values.js
var es7_object_values = __webpack_require__("8615");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ./tmp/mixins/safeId.js


/* harmony default export */ var safeId = ({
  computed: {
    safeId: function safeId() {
      if (this.id || this.$attrs.id) return this.id || this.$attrs.id;
      return generateSafeId();
    }
  }
});

function generateSafeId() {
  var key = Math.random().toString(36).replace('0.', '') + new Date().getTime().toString(36);
  return '__safe_id__' + key;
}
// CONCATENATED MODULE: ./tmp/components/Form/formMixins.js




var formMixins_safeId = safeId;
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

        return [this.addWrapperClasses, (_ref = {}, _defineProperty(_ref, this.horizontal.input || 'c-col-sm-9', this.isHorizontal), _defineProperty(_ref, 'c-input-group', this.haveInputGroup), _defineProperty(_ref, "c-input-group-".concat(this.size), this.haveCustomSize), _ref)];
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
        return this.computedIsValid ? 'c-is-valid' : 'c-is-invalid';
      }
    }
  }
};
var watchValue = {
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.state = val;
      }
    }
  }
};
var classesComputedProps = {
  computed: {
    haveCustomSize: function haveCustomSize() {
      return ['sm', 'lg'].includes(this.size);
    },
    computedClasses: function computedClasses() {
      return ['c-form-group', {
        'c-was-validated': this.wasValidated,
        'c-form-row': this.isHorizontal
      }];
    },
    labelClasses: function labelClasses() {
      var _ref2;

      return [this.addLabelClasses, (_ref2 = {
        'c-col-form-label': this.isHorizontal
      }, _defineProperty(_ref2, this.horizontal.label || 'c-col-sm-3', this.isHorizontal), _defineProperty(_ref2, "c-col-form-label-".concat(this.size), this.haveCustomSize), _ref2)];
    },
    customSizeClass: function customSizeClass() {
      if (this.haveCustomSize && !this.haveWrapper) {
        return "c-form-control-".concat(this.size);
      }
    },
    inputClasses: function inputClasses() {
      return [this.inputClass || "c-form-control".concat(this.plaintext ? '-plaintext' : ''), this.validationClass, this.addInputClasses, this.customSizeClass];
    }
  }
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Form/CFormInput.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var mixins = Object.values(formMixins_namespaceObject);
/* harmony default export */ var CFormInputvue_type_script_lang_js_ = ({
  name: 'CFormInput',
  inheritAttrs: false,
  components: {
    CFormGroup: CFormGroup
  },
  mixins: mixins,
  props: formInputProps,
  // {
  //   // HTML props: disabled, required
  //   label: String,
  //   type: {
  //     type: String,
  //     default: 'text'
  //   },
  //   id: String,
  //   readonly: Boolean,
  //   plaintext: Boolean,
  //   wasValidated: Boolean,
  //   size: {
  //     type: String,
  //     validator: str => ['','sm','lg'].includes(str)
  //   },
  //   value: [String, Number, Array],
  //   horizontal: [Boolean, Object],
  //   appendHtml: String,
  //   prependHtml: String,
  //   validFeedback: String,
  //   invalidFeedback: String,
  //   tooltipFeedback: Boolean,
  //   description: String,
  //   isValid: {
  //     type: [Boolean, Function],
  //     default: null
  //   },
  //   lazy: {
  //     type: [Boolean, Number],
  //     default: 400
  //   },
  //   addInputClasses: String,
  //   addLabelClasses: String,
  //   addWrapperClasses: String
  // },
  data: function data() {
    return {
      state: this.value,
      syncTimeout: null
    };
  },
  // created() {
  //   console.log(this.computedIsValid)
  // },
  // watch:{
  //   computedIsValid (val) {
  //     console.log(val)
  //   }
  // },
  computed: {// classesComputedProps mixin
    // haveCustomSize () {
    //   return ['','sm','lg'].includes(this.size) && Boolean(this.size)
    // },
    // computedClasses () {
    //   return [
    //            this.isHorizontal ? 'form-row': 'form-group',
    //            {
    //            'was-validated': this.wasValidated
    //            }
    //          ]
    // },
    // labelClasses () {
    //   return [ this.addLabelClasses, {
    //            'col-form-label': this.isHorizontal,
    //            [this.horizontal.label || 'col-2']: this.isHorizontal,
    //            [`col-form-label-${this.size}`]: this.haveCustomSize,
    //          }]
    // },
    // customSizeClass () {
    //   return this.haveCustomSize ? `form-control-${this.size}` : null
    // },
    // inputClasses () {
    //   return [
    //     this.inputClass || 'form-control',
    //     this.stateClass,
    //     this.addInputClasses,
    //     this.customSizeClass
    //   ]
    // }
    // validationComputedProps mixin
    // computedIsValid () {
    //   if (typeof this.isValid === 'function')
    //     return this.isValid(this.state)
    //   return this.isValid
    // },
    // validationClass () {
    //   if (this.computedIsValid === null)
    //     return
    //   return this.computedIsValid ? 'is-valid' : 'is-invalid'
    // }
    //wrapperComputedProps mixin
    // isHorizontal () {
    //   return Boolean(this.horizontal)
    // },
    // haveInputGroup () {
    //   return Boolean(this.tooltipFeedback || this.appendHtml ||
    //      this.prependHtml || this.$slots.append || this.$slots.prepend)
    // },
    // haveWrapper () {
    //   return this.haveInputGroup || Boolean(this.addWrapperClasses || this.isHorizontal)
    // },
    // wrapperClasses () {
    //   if(this.haveWrapper)
    //     return [ this.addWrapperClasses, {
    //              [this.horizontal.input || 'col-10'] : this.isHorizontal,
    //              'input-group' : this.haveInputGroup
    //            }]
    // }
  },
  //watchValue mixin
  // watch: {
  //   value (val, oldVal) {
  //     if (val !== oldVal)
  //       this.state = val
  //   },
  // },
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
// CONCATENATED MODULE: ./tmp/components/Form/CFormInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var Form_CFormInputvue_type_script_lang_js_ = (CFormInputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Form/CFormInput.vue





/* normalize component */

var CFormInput_component = normalizeComponent(
  Form_CFormInputvue_type_script_lang_js_,
  CFormInputvue_type_template_id_b00f415c_render,
  CFormInputvue_type_template_id_b00f415c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CFormInput = (CFormInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Form/CFormCheckbox.vue?vue&type=template&id=4884c07b&
var CFormCheckboxvue_type_template_id_4884c07b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CFormGroup',_vm._b({scopedSlots:_vm._u([{key:"input",fn:function(){return [_c('input',_vm._b({class:_vm.inputClasses,attrs:{"id":_vm.safeId,"type":_vm.$options.type},domProps:{"value":_vm.value,"checked":_vm.state},on:{"change":function($event){return _vm.onChange($event)}}},'input',_vm.$attrs,false))]},proxy:true},{key:"label-after-input",fn:function(){return [_vm._t("label",[(_vm.label)?_c('label',{class:_vm.labelClasses,attrs:{"for":_vm.safeId}},[_vm._v("\n        "+_vm._s(_vm.label)+"\n      ")]):_vm._e()])]},proxy:true},_vm._l((['valid-feedback', 'invalid-feedback', 'description']),function(slot){return {key:slot,fn:function(){return [_vm._t(slot)]},proxy:true}})],null,true)},'CFormGroup',{validFeedback: _vm.validFeedback, invalidFeedback: _vm.invalidFeedback, tooltipFeedback: _vm.tooltipFeedback,
                     description: _vm.description, class: _vm.computedClasses},false))}
var CFormCheckboxvue_type_template_id_4884c07b_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Form/CFormCheckbox.vue?vue&type=template&id=4884c07b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Form/CFormCheckbox.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var CFormCheckboxvue_type_script_lang_js_ = ({
  name: 'CFormCheckbox',
  inheritAttrs: false,
  components: {
    CFormGroup: CFormGroup
  },
  mixins: [safeId, validationComputedProps],
  props: formCheckboxProps,
  // {
  //   label: String,
  //   id: String,
  //   wasValidated: Boolean,
  //   checked: [Boolean, String, Number],
  //   value: {
  //     type: [String, Number, Boolean],
  //     default: null
  //   },
  //   trueValue: {
  //     type: [String, Number, Boolean],
  //     default: undefined
  //   },
  //   falseValue: {
  //     type: [String, Number, Boolean],
  //     default: undefined
  //   },
  //   validFeedback: String,
  //   invalidFeedback: String,
  //   tooltipFeedback: Boolean,
  //   description: String,
  //   isValid: {
  //     type: Boolean,
  //     default: null
  //   },
  //   addInputClasses: String,
  //   addLabelClasses: String,
  //   custom: [Boolean, String],
  //   inline: Boolean
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
      handler: function handler(val, oldVal) {
        if (val !== oldVal) {
          this.state = this.getCheckState();
        }
      }
    }
  },
  computed: {
    customType: function customType() {
      return this.$options.type === 'checkbox' ? 'checkbox' : 'radio';
    },
    computedClasses: function computedClasses() {
      var _ref;

      var controlClass = this.custom ? 'c-custom-control' : 'c-form-check';
      return _ref = {}, _defineProperty(_ref, "".concat(controlClass), true), _defineProperty(_ref, "".concat(controlClass, "-inline"), this.inline), _defineProperty(_ref, "c-custom-".concat(this.customType), this.custom), _defineProperty(_ref, 'c-was-validated', this.wasValidated), _ref;
    },
    labelClasses: function labelClasses() {
      return [this.addLabelClasses, this.custom ? 'c-custom-control-label' : 'c-form-check-label'];
    },
    inputClasses: function inputClasses() {
      return [this.custom ? 'c-custom-control-input' : 'c-form-check-input', this.validationClass, this.addInputClasses];
    }
  },
  methods: {
    getCheckState: function getCheckState() {
      if (typeof this.checked === 'boolean') {
        return this.checked;
      } else {
        return this.checked === this.trueValue ? true : false;
      }
    },
    onChange: function onChange(e) {
      this.state = e.target.checked;
      this.$emit('update:checked', this.getValue(e), e);
    },
    getValue: function getValue(e) {
      if (e.target.checked) {
        return this.trueValue !== undefined ? this.trueValue : true;
      } else {
        return this.falseValue !== undefined ? this.falseValue : false;
      }
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Form/CFormCheckbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var Form_CFormCheckboxvue_type_script_lang_js_ = (CFormCheckboxvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Form/CFormCheckbox.vue





/* normalize component */

var CFormCheckbox_component = normalizeComponent(
  Form_CFormCheckboxvue_type_script_lang_js_,
  CFormCheckboxvue_type_template_id_4884c07b_render,
  CFormCheckboxvue_type_template_id_4884c07b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CFormCheckbox = (CFormCheckbox_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Form/CFormFile.vue?vue&type=template&id=187acf1c&
var CFormFilevue_type_template_id_187acf1c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CFormGroup',_vm._b({scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._t("label",[(_vm.label)?_c('label',{class:_vm.labelClasses,attrs:{"for":_vm.safeId}},[_vm._v("\n        "+_vm._s(_vm.label)+"\n      ")]):_vm._e()])]},proxy:true},{key:"input",fn:function(){return [_c('input',_vm._b({class:_vm.inputClasses,attrs:{"id":_vm.safeId,"multiple":_vm.multiple,"type":"file"},on:{"change":function($event){return _vm.onChange($event)}}},'input',_vm.$attrs,false)),(_vm.custom)?_c('label',{staticClass:"c-custom-file-label",attrs:{"for":_vm.safeId}},[_vm._v("\n      "+_vm._s(_vm.placeholder)+"\n    ")]):_vm._e()]},proxy:true},_vm._l((['label-after-input','valid-feedback',
                            'invalid-feedback','description']),function(slot){return {key:slot,fn:function(){return [_vm._t(slot)]},proxy:true}})],null,true)},'CFormGroup',{validFeedback: _vm.validFeedback, invalidFeedback: _vm.invalidFeedback, tooltipFeedback: _vm.tooltipFeedback, description: _vm.description,
           wrapperClasses: _vm.wrapperClasses, class: _vm.computedClasses},false))}
var CFormFilevue_type_template_id_187acf1c_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Form/CFormFile.vue?vue&type=template&id=187acf1c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Form/CFormFile.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var CFormFilevue_type_script_lang_js_mixins = Object.values(formMixins_namespaceObject);


/* harmony default export */ var CFormFilevue_type_script_lang_js_ = ({
  name: 'CFormFile',
  inheritAttrs: false,
  components: {
    CFormGroup: CFormGroup
  },
  mixins: CFormFilevue_type_script_lang_js_mixins,
  props: formFileProps,
  // {
  //   // Html props: disabled, required, accept
  //   label: String,
  //   id: String,
  //   wasValidated: Boolean,
  //   size: {
  //     type: String,
  //     validator: str => ['','sm','lg'].includes(str)
  //   },
  //   horizontal: [Boolean, Object],
  //   validFeedback: String,
  //   invalidFeedback: String,
  //   tooltipFeedback: Boolean,
  //   description: String,
  //   isValid: {
  //     type: Boolean,
  //     default: null
  //   },
  //   multiple: Boolean,
  //   custom: [Boolean, String],
  //   addInputClasses: String,
  //   addLabelClasses: String,
  //   addWrapperClasses: String,
  // },
  data: function data() {
    return {
      state: null
    };
  },
  computed: {
    placeholder: function placeholder() {
      return typeof this.custom === 'string' ? this.custom : this.multiple ? 'Choose files...' : 'Choose file...';
    },
    // classesComputedProps mixin
    haveCustomSize: function haveCustomSize() {
      return ['', 'sm', 'lg'].includes(this.size) && Boolean(this.size && !this.custom);
    },
    // haveCustomSize () {
    //   return ['','sm','lg'].includes(this.size) && Boolean(this.size)
    // },
    computedClasses: function computedClasses() {
      return [this.isHorizontal ? 'c-form-row' : this.custom ? 'c-custom-file' : 'c-form-group c-position-relative', {
        'c-was-validated': this.wasValidated
      }];
    },
    // computedClasses () {
    //   return [
    //            this.isHorizontal ? 'form-row': 'form-group',
    //            {
    //            'was-validated': this.wasValidated
    //            }
    //          ]
    // },
    // labelClasses () {
    //   return [ this.addLabelClasses, {
    //            'col-form-label': this.isHorizontal,
    //            [this.horizontal.label || 'col-2']: this.isHorizontal,
    //            [`col-form-label-${this.size}`]: this.haveCustomSize,
    //          }]
    // },
    // customSizeClass () {
    //   return this.haveCustomSize ? `form-control-${this.size}` : null
    // },
    inputClass: function inputClass() {
      return this.custom ? 'c-custom-file-input' : 'c-form-control-file';
    },
    // inputClasses () {
    //   return [
    //     this.inputClass || 'form-control',
    //     this.stateClass,
    //     this.addInputClasses,
    //     this.customSizeClass
    //   ]
    // },
    // validationComputedProps mixin
    // computedIsValid () {
    //   if (typeof this.isValid === 'function')
    //     return this.isValid(this.state)
    //   return this.isValid
    // },
    // validationClass () {
    //   if (this.computedIsValid === null)
    //     return
    //   return this.computedIsValid ? 'is-valid' : 'is-invalid'
    // }
    //wrapperComputedProps mixin
    // isHorizontal () {
    //   return Boolean(this.horizontal)
    // },
    // haveInputGroup () {
    //   return Boolean(this.tooltipFeedback || this.appendHtml ||
    //      this.prependHtml || this.$slots.append || this.$slots.prepend)
    // },
    haveInputGroup: function haveInputGroup() {
      return false;
    } // haveWrapper () {
    //   return this.haveInputGroup || Boolean(this.addWrapperClasses || this.isHorizontal)
    // },
    // wrapperClasses () {
    //   if(this.haveWrapper)
    //     return [ this.addWrapperClasses, {
    //              [this.horizontal.input || 'col-10'] : this.isHorizontal,
    //              'input-group' : this.haveInputGroup
    //            }]
    // }

  },
  methods: {
    onChange: function onChange(e) {
      this.state = e.target.files;
      this.$emit('change', e.target.files, e);
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Form/CFormFile.vue?vue&type=script&lang=js&
 /* harmony default export */ var Form_CFormFilevue_type_script_lang_js_ = (CFormFilevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Form/CFormFile.vue





/* normalize component */

var CFormFile_component = normalizeComponent(
  Form_CFormFilevue_type_script_lang_js_,
  CFormFilevue_type_template_id_187acf1c_render,
  CFormFilevue_type_template_id_187acf1c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CFormFile = (CFormFile_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Form/CFormTextarea.vue?vue&type=template&id=e3eaf7a6&
var CFormTextareavue_type_template_id_e3eaf7a6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CFormGroup',_vm._b({scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._t("label",[(_vm.label)?_c('label',{class:_vm.labelClasses,attrs:{"for":_vm.safeId}},[_vm._v("\n        "+_vm._s(_vm.label)+"\n      ")]):_vm._e()])]},proxy:true},{key:"input",fn:function(){return [_c('textarea',_vm._b({class:_vm.inputClasses,attrs:{"id":_vm.safeId,"readonly":_vm.readonly || _vm.plaintext},domProps:{"value":_vm.state},on:{"input":function($event){return _vm.onInput($event)},"change":function($event){return _vm.onChange($event)}}},'textarea',_vm.$attrs,false))]},proxy:true},_vm._l((['prepend', 'append', 'label-after-input',
                    'valid-feedback', 'invalid-feedback','description']),function(slot){return {key:slot,fn:function(){return [_vm._t(slot)]},proxy:true}})],null,true)},'CFormGroup',{appendHtml: _vm.appendHtml, prependHtml: _vm.prependHtml, validFeedback: _vm.validFeedback, invalidFeedback: _vm.invalidFeedback,
    tooltipFeedback: _vm.tooltipFeedback, description: _vm.description, wrapperClasses: _vm.wrapperClasses, class: _vm.computedClasses},false))}
var CFormTextareavue_type_template_id_e3eaf7a6_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Form/CFormTextarea.vue?vue&type=template&id=e3eaf7a6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Form/CFormTextarea.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var CFormTextareavue_type_script_lang_js_mixins = Object.values(formMixins_namespaceObject);
/* harmony default export */ var CFormTextareavue_type_script_lang_js_ = ({
  name: 'CFormTextarea',
  inheritAttrs: false,
  components: {
    CFormGroup: CFormGroup
  },
  mixins: CFormTextareavue_type_script_lang_js_mixins,
  props: formTextareaProps,
  // {
  //   // Html props: disabled, required, rows, cols, placeholder
  //   appendHtml: String,
  //   prependHtml: String,
  //   validFeedback: String,
  //   invalidFeedback: String,
  //   tooltipFeedback: Boolean,
  //   description: String,
  //   horizontal: [Boolean, Object],
  //   wasValidated: Boolean,
  //   label: String,
  //   id: String,
  //   readonly: Boolean,
  //   plaintext: Boolean,
  //   size: {
  //     type: String,
  //     validator: str => ['','sm','lg'].includes(str)
  //   },
  //   value: [String, Number, Array],
  //   isValid: {
  //     type: Boolean,
  //     default: null
  //   },
  //   lazy: {
  //     type: [Boolean, Number],
  //     default: 400
  //   },
  //   addInputClasses: String,
  //   addLabelClasses: String,
  //   addWrapperClasses: String
  // },
  data: function data() {
    return {
      state: this.value
    };
  },
  computed: {// classesComputedProps mixin
    // haveCustomSize () {
    //   return ['','sm','lg'].includes(this.size) && Boolean(this.size)
    // },
    // computedClasses () {
    //   return [
    //            this.isHorizontal ? 'form-row': 'form-group',
    //            {
    //            'was-validated': this.wasValidated
    //            }
    //          ]
    // },
    // labelClasses () {
    //   return [ this.addLabelClasses, {
    //            'col-form-label': this.isHorizontal,
    //            [this.horizontal.label || 'col-2']: this.isHorizontal,
    //            [`col-form-label-${this.size}`]: this.haveCustomSize,
    //          }]
    // },
    // customSizeClass () {
    //   return this.haveCustomSize ? `form-control-${this.size}` : null
    // },
    // inputClasses () {
    //   return [
    //     this.inputClass || 'form-control',
    //     this.stateClass,
    //     this.addInputClasses,
    //     this.customSizeClass
    //   ]
    // }
    // validationComputedProps mixin
    // computedIsValid () {
    //   if (typeof this.isValid === 'function')
    //     return this.isValid(this.state)
    //   return this.isValid
    // },
    // validationClass () {
    //   if (this.computedIsValid === null)
    //     return
    //   return this.computedIsValid ? 'is-valid' : 'is-invalid'
    // }
    //wrapperComputedProps mixin
    // isHorizontal () {
    //   return Boolean(this.horizontal)
    // },
    // haveInputGroup () {
    //   return Boolean(this.tooltipFeedback || this.appendHtml ||
    //      this.prependHtml || this.$slots.append || this.$slots.prepend)
    // },
    // haveWrapper () {
    //   return this.haveInputGroup || Boolean(this.addWrapperClasses || this.isHorizontal)
    // },
    // wrapperClasses () {
    //   if(this.haveWrapper)
    //     return [ this.addWrapperClasses, {
    //              [this.horizontal.input || 'col-10'] : this.isHorizontal,
    //              'input-group' : this.haveInputGroup
    //            }]
    // }
  },
  //watchValue mixin
  // watch: {
  //   value (val, oldVal) {
  //     if (val !== oldVal)
  //       this.state = val
  //   },
  // },
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
// CONCATENATED MODULE: ./tmp/components/Form/CFormTextarea.vue?vue&type=script&lang=js&
 /* harmony default export */ var Form_CFormTextareavue_type_script_lang_js_ = (CFormTextareavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Form/CFormTextarea.vue





/* normalize component */

var CFormTextarea_component = normalizeComponent(
  Form_CFormTextareavue_type_script_lang_js_,
  CFormTextareavue_type_template_id_e3eaf7a6_render,
  CFormTextareavue_type_template_id_e3eaf7a6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CFormTextarea = (CFormTextarea_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Form/CFormSelect.vue?vue&type=template&id=01360637&
var CFormSelectvue_type_template_id_01360637_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CFormGroup',_vm._b({scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._t("label",[(_vm.label)?_c('label',{class:_vm.labelClasses,attrs:{"for":_vm.safeId}},[_vm._v("\n        "+_vm._s(_vm.label)+"\n      ")]):_vm._e()])]},proxy:true},{key:"input",fn:function(){return [_c('select',_vm._b({class:_vm.inputClasses,attrs:{"id":_vm.safeId},domProps:{"value":_vm.state},on:{"input":function($event){return _vm.onSelect($event)}}},'select',_vm.$attrs,false),[(_vm.placeholder)?_c('option',{attrs:{"value":"","selected":"","disabled":"","hidden":""}},[_vm._v("\n        "+_vm._s(_vm.placeholder)+"\n      ")]):_vm._e(),_vm._l((_vm.options),function(option,key){return [(typeof option === 'object')?_c('option',{key:key,attrs:{"disabled":option.disabled,"data-key":key},domProps:{"value":option.value}},[_vm._v("\n          "+_vm._s(option.label || option.value)+"\n        ")]):_c('option',{key:key,attrs:{"data-key":key},domProps:{"value":String(option)}},[_vm._v("\n          "+_vm._s(option)+"\n        ")])]})],2)]},proxy:true},_vm._l((_vm.$options.slots),function(slot){return {key:slot,fn:function(){return [_vm._t(slot)]},proxy:true}})],null,true)},'CFormGroup',{
    appendHtml: _vm.appendHtml, prependHtml: _vm.prependHtml, validFeedback: _vm.validFeedback, invalidFeedback: _vm.invalidFeedback,
    tooltipFeedback: _vm.tooltipFeedback, description: _vm.description, wrapperClasses: _vm.wrapperClasses, class: _vm.computedClasses
  },false))}
var CFormSelectvue_type_template_id_01360637_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Form/CFormSelect.vue?vue&type=template&id=01360637&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Form/CFormSelect.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var CFormSelectvue_type_script_lang_js_mixins = Object.values(formMixins_namespaceObject);


/* harmony default export */ var CFormSelectvue_type_script_lang_js_ = ({
  name: 'CFormSelect',
  inheritAttrs: false,
  components: {
    CFormGroup: CFormGroup
  },
  slots: ['prepend', 'append', 'label-after-input', 'valid-feedback', 'invalid-feedback', 'description'],
  mixins: CFormSelectvue_type_script_lang_js_mixins,
  props: formSelectProps,
  // {
  //   // Html props: disabled, required don't use multiple
  //   value: [String, Number, Boolean],
  //   options: Array,
  //   label: String,
  //   id: String,
  //   placeholder: String,
  //   plaintext: Boolean,
  //   wasValidated: Boolean,
  //   size: {
  //     type: String,
  //     validator: str => ['','sm','lg'].includes(str)
  //   },
  //   horizontal: [Boolean, Object],
  //   appendHtml: String,
  //   prependHtml: String,
  //   validFeedback: String,
  //   invalidFeedback: String,
  //   tooltipFeedback: Boolean,
  //   description: String,
  //   custom: Boolean,
  //   isValid: {
  //     type: Boolean,
  //     default: null
  //   },
  //   addInputClasses: String,
  //   addLabelClasses: String,
  //   addWrapperClasses: String
  // },
  data: function data() {
    return {
      state: this.value || undefined
    };
  },
  computed: {
    // // classesComputedProps mixin
    // haveCustomSize () {
    //   return ['','sm','lg'].includes(this.size) && Boolean(this.size)
    // },
    // computedClasses () {
    //   return [
    //            this.isHorizontal ? 'form-row': 'form-group',
    //            {
    //            'was-validated': this.wasValidated
    //            }
    //          ]
    // },
    // labelClasses () {
    //   return [ this.addLabelClasses, {
    //            'col-form-label': this.isHorizontal,
    //            [this.horizontal.label || 'col-2']: this.isHorizontal,
    //            [`col-form-label-${this.size}`]: this.haveCustomSize,
    //          }]
    // },
    customSizeClass: function customSizeClass() {
      if (this.haveCustomSize && !this.haveWrapper) {
        return "".concat(this.custom ? 'c-custom-select' : 'c-form-control', "-").concat(this.size);
      }
    },
    // customSizeClass () {
    //   return this.haveCustomSize ? `form-control-${this.size}` : null
    // },
    inputClass: function inputClass() {
      var standardClass = "c-form-control".concat(this.plaintext ? '-plaintext' : '');
      return this.custom ? 'c-custom-select' : standardClass;
    } // inputClasses () {
    //   return [
    //     this.inputClass || 'form-control',
    //     this.stateClass,
    //     this.addInputClasses,
    //     this.customSizeClass
    //   ]
    // }
    // validationComputedProps mixin
    // computedIsValid () {
    //   if (typeof this.isValid === 'function')
    //     return this.isValid(this.state)
    //   return this.isValid
    // },
    // validationClass () {
    //   if (this.computedIsValid === null)
    //     return
    //   return this.computedIsValid ? 'is-valid' : 'is-invalid'
    // }
    //wrapperComputedProps mixin
    // isHorizontal () {
    //   return Boolean(this.horizontal)
    // },
    // haveInputGroup () {
    //   return Boolean(this.tooltipFeedback || this.appendHtml ||
    //      this.prependHtml || this.$slots.append || this.$slots.prepend)
    // },
    // haveWrapper () {
    //   return this.haveInputGroup || Boolean(this.addWrapperClasses || this.isHorizontal)
    // },
    // wrapperClasses () {
    //   if(this.haveWrapper)
    //     return [ this.addWrapperClasses, {
    //              [this.horizontal.input || 'col-10'] : this.isHorizontal,
    //              'input-group' : this.haveInputGroup
    //            }]
    // }

  },
  //watchValue mixin
  // watch: {
  //   value (val, oldVal) {
  //     if (val !== oldVal)
  //       this.state = val
  //   },
  // },
  methods: {
    onSelect: function onSelect(e) {
      // console.log(e)
      var optionIndex = e.target.selectedOptions[0].dataset.key;
      var option = this.options[optionIndex]; // const optionIsObject = Boolean(option.value)

      var value = option.value || option;
      this.state = value;
      this.$emit('update:value', value, e);
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Form/CFormSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var Form_CFormSelectvue_type_script_lang_js_ = (CFormSelectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Form/CFormSelect.vue





/* normalize component */

var CFormSelect_component = normalizeComponent(
  Form_CFormSelectvue_type_script_lang_js_,
  CFormSelectvue_type_template_id_01360637_render,
  CFormSelectvue_type_template_id_01360637_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CFormSelect = (CFormSelect_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Form/CFormRadio.vue?vue&type=script&lang=js&

delete CFormCheckbox.props.trueValue;
delete CFormCheckbox.props.falseValue;
/* harmony default export */ var CFormRadiovue_type_script_lang_js_ = ({
  name: 'CFormRadio',
  extends: CFormCheckbox,
  type: 'radio',
  methods: {
    getCheckState: function getCheckState() {
      return this.checked === this.value;
    },
    getValue: function getValue() {
      return this.value;
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Form/CFormRadio.vue?vue&type=script&lang=js&
 /* harmony default export */ var Form_CFormRadiovue_type_script_lang_js_ = (CFormRadiovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Form/CFormRadio.vue
var CFormRadio_render, CFormRadio_staticRenderFns




/* normalize component */

var CFormRadio_component = normalizeComponent(
  Form_CFormRadiovue_type_script_lang_js_,
  CFormRadio_render,
  CFormRadio_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CFormRadio = (CFormRadio_component.exports);
// CONCATENATED MODULE: ./tmp/components/Form/index.js









// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Grid/CContainer.vue?vue&type=script&lang=js&

/* harmony default export */ var CContainervue_type_script_lang_js_ = ({
  functional: true,
  name: 'CContainer',
  props: {
    fluid: Boolean
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('div', a(data, {
      class: {
        'c-container': !props.fluid,
        'c-container-fluid': props.fluid
      }
    }), children);
  }
});
// CONCATENATED MODULE: ./tmp/components/Grid/CContainer.vue?vue&type=script&lang=js&
 /* harmony default export */ var Grid_CContainervue_type_script_lang_js_ = (CContainervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Grid/CContainer.vue
var CContainer_render, CContainer_staticRenderFns




/* normalize component */

var CContainer_component = normalizeComponent(
  Grid_CContainervue_type_script_lang_js_,
  CContainer_render,
  CContainer_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CContainer = (CContainer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Grid/CRow.vue?vue&type=script&lang=js&




var CRowvue_type_script_lang_js_props = {
  noGutters: Boolean,
  alignV: {
    type: String,
    validator: function validator(str) {
      return ['start', 'end', 'center', 'baseline', 'stretch'].includes(str);
    }
  },
  alignH: {
    type: String,
    validator: function validator(str) {
      return ['start', 'end', 'center', 'between', 'around'].includes(str);
    }
  }
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
    return h('div', a(data, {
      staticClass: 'c-row',
      class: (_class = {
        'c-no-gutters': props.noGutters
      }, _defineProperty(_class, "c-align-items-".concat(props.alignV), props.alignV), _defineProperty(_class, "c-justify-content-".concat(props.alignH), props.alignH), _class)
    }), children);
  }
});
// CONCATENATED MODULE: ./tmp/components/Grid/CRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var Grid_CRowvue_type_script_lang_js_ = (CRowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Grid/CRow.vue
var CRow_render, CRow_staticRenderFns




/* normalize component */

var CRow_component = normalizeComponent(
  Grid_CRowvue_type_script_lang_js_,
  CRow_render,
  CRow_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CRow = (CRow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Grid/CCol.vue?vue&type=script&lang=js&






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
    var prefixes = {
      'col': '',
      'xs': '-xs',
      'sm': '-sm',
      'md': '-md',
      'lg': '-lg',
      'xl': '-xl'
    };
    Object.keys(prefixes).forEach(function (key) {
      if (props[key] === true) classes.push("c-col".concat(prefixes[key]));
      if (typeof props[key] === 'number' || typeof props[key] === 'string') classes.push("c-col".concat(prefixes[key], "-").concat(props[key]));

      if (typeof_typeof(props[key]) === 'object') {
        if (props[key].size) classes.push("c-col".concat(prefixes[key], "-").concat(props[key].size));
        if (props[key].offset) classes.push("c-offset".concat(prefixes[key], "-").concat(props[key].offset));
        if (props[key].order) classes.push("c-order".concat(prefixes[key], "-").concat(props[key].order));
      }
    });
    return h(props.tag, a(data, {
      class: classes.length ? classes : 'c-col'
    }), children);
  }
});
// CONCATENATED MODULE: ./tmp/components/Grid/CCol.vue?vue&type=script&lang=js&
 /* harmony default export */ var Grid_CColvue_type_script_lang_js_ = (CColvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Grid/CCol.vue
var CCol_render, CCol_staticRenderFns




/* normalize component */

var CCol_component = normalizeComponent(
  Grid_CColvue_type_script_lang_js_,
  CCol_render,
  CCol_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CCol = (CCol_component.exports);
// CONCATENATED MODULE: ./tmp/components/Grid/index.js




// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Header/CHeader.vue?vue&type=template&id=eb12824a&
var CHeadervue_type_template_id_eb12824a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{class:_vm.classList},[_vm._t("default",[_vm._v("Header")])],2)}
var CHeadervue_type_template_id_eb12824a_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Header/CHeader.vue?vue&type=template&id=eb12824a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Header/CHeader.vue?vue&type=script&lang=js&

//
//
//
//
//
//
/* harmony default export */ var CHeadervue_type_script_lang_js_ = ({
  name: 'CHeader',
  props: {
    fixed: Boolean
  },
  computed: {
    classList: function classList() {
      return ['c-header c-app-header c-header-light', {
        'c-header-fixed': this.fixed
      }];
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Header/CHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var Header_CHeadervue_type_script_lang_js_ = (CHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Header/CHeader.vue





/* normalize component */

var CHeader_component = normalizeComponent(
  Header_CHeadervue_type_script_lang_js_,
  CHeadervue_type_template_id_eb12824a_render,
  CHeadervue_type_template_id_eb12824a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CHeader = (CHeader_component.exports);
// CONCATENATED MODULE: ./tmp/components/Header/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Image/CImageLazy.vue?vue&type=script&lang=js&


/* harmony default export */ var CImageLazyvue_type_script_lang_js_ = ({
  name: 'CImageLazy',
  extends: CImage,
  props: {
    loadOffset: {
      type: [Number, String, Boolean],
      default: 500
    },
    fade: {
      type: Boolean,
      default: true
    },
    fadeOffset: {
      type: [Number, String, Boolean],
      default: -100
    },
    fadeTime: {
      type: [Number, String],
      default: 1500
    }
  },
  data: function data() {
    return {
      active: this.loadOffset === false,
      animated: this.fadeOffset === false
    };
  },
  mounted: function mounted() {
    document.addEventListener('scroll', this.checkPosition);
    this.checkPosition();
  },
  beforeDestroy: function beforeDestroy() {
    this.removeListener();
  },
  computed: {
    animationClasses: function animationClasses() {
      if (this.fade) {
        return {
          'c-opacity-0': !this.animated
        };
      }
    }
  },
  methods: {
    checkPosition: function checkPosition() {
      var rect = this.$el.getBoundingClientRect();
      var offset = !this.active ? this.loadOffset : this.fadeOffset;
      var positionTop = window.innerHeight - rect.top + offset;
      var positionBottom = rect.bottom + offset;

      if (positionTop > 0 && positionBottom > 0) {
        !this.active ? this.load() : this.animate();
      }
    },
    load: function load() {
      this.active = true;

      if (!this.fade) {
        this.removeListener();
      }
    },
    animate: function animate() {
      this.$el.style.transition = "opacity ".concat(this.fadeTime, "ms ease-in-out");
      this.animated = true;
      this.removeListener();
    },
    removeListener: function removeListener() {
      return document.removeEventListener('scroll', this.checkPosition);
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Image/CImageLazy.vue?vue&type=script&lang=js&
 /* harmony default export */ var Image_CImageLazyvue_type_script_lang_js_ = (CImageLazyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./tmp/components/Image/CImageLazy.vue?vue&type=style&index=0&lang=css&
var CImageLazyvue_type_style_index_0_lang_css_ = __webpack_require__("96f8");

// CONCATENATED MODULE: ./tmp/components/Image/CImageLazy.vue
var CImageLazy_render, CImageLazy_staticRenderFns





/* normalize component */

var CImageLazy_component = normalizeComponent(
  Image_CImageLazyvue_type_script_lang_js_,
  CImageLazy_render,
  CImageLazy_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CImageLazy = (CImageLazy_component.exports);
// CONCATENATED MODULE: ./tmp/components/Image/index.js



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Jumbotron/CJumbotron.vue?vue&type=script&lang=js&


var CJumbotronvue_type_script_lang_js_props = {
  tag: {
    type: String,
    default: 'div'
  },
  fluid: Boolean,
  header: String,
  lead: String,
  variant: String,
  borderVariant: String,
  textVariant: String
};
/* harmony default export */ var CJumbotronvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CJumbotron',
  props: CJumbotronvue_type_script_lang_js_props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots;
    var childNodes = [];
    var $slots = slots();

    if ($slots.header || props.header) {
      var header = $slots.header || h('h1', {
        staticClass: 'c-display-3'
      }, props.header);
      childNodes.push(header);
    }

    if ($slots.lead || props.lead) {
      var lead = $slots.lead || h('p', {
        staticClass: 'c-lead'
      }, props.lead);
      childNodes.push(lead);
    }

    if ($slots.default) {
      childNodes.push($slots.default);
    }

    if (props.fluid) {
      childNodes = [h('div', {
        staticClass: 'c-container-fluid'
      }, childNodes)];
    }

    return h(props.tag, a(data, {
      staticClass: 'c-jumbotron',
      class: (_class = {
        'c-jumbotron-fluid': props.fluid
      }, _defineProperty(_class, "c-text-".concat(props.textVariant), Boolean(props.textVariant)), _defineProperty(_class, "c-bg-".concat(props.variant), Boolean(props.variant)), _defineProperty(_class, "c-border-".concat(props.borderVariant), Boolean(props.borderVariant)), _defineProperty(_class, 'c-border', Boolean(props.borderVariant)), _class)
    }), childNodes);
  }
});
// CONCATENATED MODULE: ./tmp/components/Jumbotron/CJumbotron.vue?vue&type=script&lang=js&
 /* harmony default export */ var Jumbotron_CJumbotronvue_type_script_lang_js_ = (CJumbotronvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Jumbotron/CJumbotron.vue
var CJumbotron_render, CJumbotron_staticRenderFns




/* normalize component */

var CJumbotron_component = normalizeComponent(
  Jumbotron_CJumbotronvue_type_script_lang_js_,
  CJumbotron_render,
  CJumbotron_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CJumbotron = (CJumbotron_component.exports);
// CONCATENATED MODULE: ./tmp/components/Jumbotron/index.js


// CONCATENATED MODULE: ./tmp/components/Link/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/ListGroup/CListGroup.vue?vue&type=script&lang=js&

/* harmony default export */ var CListGroupvue_type_script_lang_js_ = ({
  functional: true,
  name: 'CListGroup',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    flush: Boolean
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var componentData = {
      staticClass: 'c-list-group',
      class: {
        'c-list-group-flush': props.flush
      }
    };
    return h(props.tag, a(data, componentData), children);
  }
});
// CONCATENATED MODULE: ./tmp/components/ListGroup/CListGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var ListGroup_CListGroupvue_type_script_lang_js_ = (CListGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/ListGroup/CListGroup.vue
var CListGroup_render, CListGroup_staticRenderFns




/* normalize component */

var CListGroup_component = normalizeComponent(
  ListGroup_CListGroupvue_type_script_lang_js_,
  CListGroup_render,
  CListGroup_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CListGroup = (CListGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/ListGroup/CListGroupItem.vue?vue&type=script&lang=js&





var CListGroupItemvue_type_script_lang_js_props = Object.assign({
  tag: {
    type: String,
    default: 'div'
  },
  action: Boolean,
  variant: String
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
      if (!data.attrs || !data.attrs.type) attrs.type = 'button';
      if (props.disabled) attrs.disabled = true;
    } else {
      itemProps = getPartOfObject(props, propsFactory());
    }

    var componentData = {
      attrs: attrs,
      props: itemProps,
      staticClass: 'c-list-group-item',
      class: (_class = {}, _defineProperty(_class, "c-list-group-item-".concat(props.variant), Boolean(props.variant)), _defineProperty(_class, 'c-list-group-item-action', isAction), _defineProperty(_class, 'c-active', props.active), _defineProperty(_class, 'c-disabled', props.disabled), _class)
    };
    return h(tag, a(data, componentData), children);
  }
});
// CONCATENATED MODULE: ./tmp/components/ListGroup/CListGroupItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var ListGroup_CListGroupItemvue_type_script_lang_js_ = (CListGroupItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/ListGroup/CListGroupItem.vue
var CListGroupItem_render, CListGroupItem_staticRenderFns




/* normalize component */

var CListGroupItem_component = normalizeComponent(
  ListGroup_CListGroupItemvue_type_script_lang_js_,
  CListGroupItem_render,
  CListGroupItem_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CListGroupItem = (CListGroupItem_component.exports);
// CONCATENATED MODULE: ./tmp/components/ListGroup/index.js



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Media/CMedia.vue?vue&type=template&id=5b1e6a8c&
var CMediavue_type_template_id_5b1e6a8c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.mediaClasses},[_c('div',{class:_vm.asideClasses},[_vm._t("aside",[_c('CImage',_vm._b({},'CImage',_vm.computedAsideImageProps,false))])],2),_c('div',{class:_vm.mediaBodyClasses},[_vm._t("default")],2)])}
var CMediavue_type_template_id_5b1e6a8c_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Media/CMedia.vue?vue&type=template&id=5b1e6a8c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Media/CMedia.vue?vue&type=script&lang=js&



//
//
//
//
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
    CImage: CImage
  },
  props: {
    asidePositionClasses: String,
    addAsideClasses: String,
    addBodyClasses: String,
    asideRight: Boolean,
    asideImageProps: Object,
    asidePosition: {
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
        blankColor: '#777777',
        width: '64px',
        height: this.asidePosition === 'stretch' ? '100%' : '64px'
      }, this.asideImageProps || {});
    },
    computedAsidePositionClasses: function computedAsidePositionClasses() {
      return this.asidePositionClasses || "c-m".concat(this.asideRight ? 'l' : 'r', "-3");
    },
    asideClasses: function asideClasses() {
      return [this.computedAsidePositionClasses, this.addAsideClasses, "c-align-self-".concat(this.asidePosition)];
    },
    mediaBodyClasses: function mediaBodyClasses() {
      return ['c-media-body', this.addBodyClasses];
    },
    mediaClasses: function mediaClasses() {
      return ['c-media', {
        'c-d-flex c-flex-row-reverse': this.asideRight
      }];
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Media/CMedia.vue?vue&type=script&lang=js&
 /* harmony default export */ var Media_CMediavue_type_script_lang_js_ = (CMediavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Media/CMedia.vue





/* normalize component */

var CMedia_component = normalizeComponent(
  Media_CMediavue_type_script_lang_js_,
  CMediavue_type_template_id_5b1e6a8c_render,
  CMediavue_type_template_id_5b1e6a8c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CMedia = (CMedia_component.exports);
// CONCATENATED MODULE: ./tmp/components/Media/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Modal/CModal.vue?vue&type=template&id=078cbd2c&
var CModalvue_type_template_id_078cbd2c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:_vm.modalClasses,attrs:{"tabindex":"-1","role":"dialog"},on:{"click":function($event){return _vm.modalClick($event)}}},[_c('div',{class:_vm.dialogClasses,attrs:{"role":"document"}},[_c('div',{class:_vm.contentClasses},[(!_vm.noHeader)?_c('div',{staticClass:"c-modal-header"},[_vm._t("header",[_c('h5',{staticClass:"c-modal-title"},[_vm._v("\n                "+_vm._s(_vm.title)+"\n              ")]),_c('button',{staticClass:"c-close",attrs:{"type":"button","aria-label":"Close"},on:{"click":function($event){return _vm.hide()}}},[_c('span',[_vm._v("×")])])],{"hide":_vm.hide})],2):_vm._e(),(!_vm.noBody)?_c('div',{staticClass:"c-modal-body"},[_vm._t("body",[_vm._t("default")])],2):_vm._e(),(!_vm.noFooter)?_c('div',{staticClass:"c-modal-footer"},[_vm._t("footer",[_c('button',{staticClass:"c-btn c-btn-secondary",attrs:{"type":"button"},on:{"click":function($event){return _vm.hide()}}},[_vm._v("\n              Close\n            ")]),_c('button',{class:_vm.btnClasses,attrs:{"type":"button"},on:{"click":function($event){return _vm.hide()}}},[_vm._v("\n              OK\n            ")])],{"hide":_vm.hide})],2):_vm._e()])])]),(!_vm.noBackdrop && (_vm.is_visible || _vm.is_transitioning))?_c('div',{class:_vm.backdropClasses}):_vm._e()])}
var CModalvue_type_template_id_078cbd2c_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Modal/CModal.vue?vue&type=template&id=078cbd2c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Modal/CModal.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    visible: Boolean,
    centered: Boolean,
    title: String,
    size: {
      type: String,
      validator: function validator(val) {
        return ['', 'sm', 'lg'].includes(val);
      }
    },
    variant: String,
    borderVariant: String,
    noFade: Boolean,
    noBackdrop: Boolean,
    noCloseOnBackdrop: Boolean,
    noHeader: Boolean,
    noBody: Boolean,
    noFooter: Boolean,
    addModalClasses: String,
    addDialogClasses: String,
    addContentClasses: String
  },
  data: function data() {
    return {
      is_visible: this.visible,
      is_transitioning: false,
      timeout: null
    };
  },
  computed: {
    backdropClasses: function backdropClasses() {
      return {
        'c-modal-backdrop': true,
        'c-fade': !this.noFade,
        'c-show': this.is_visible || this.noFade
      };
    },
    modalClasses: function modalClasses() {
      return ['c-modal c-overflow-auto', this.addModalClasses, _defineProperty({
        // 'c-close-modal': !this.noCloseOnBackdrop,
        'c-fade': !this.noFade,
        'c-show': this.is_visible,
        'c-d-block': this.is_visible || this.is_transitioning
      }, "c-modal-".concat(this.variant), Boolean(this.variant))];
    },
    dialogClasses: function dialogClasses() {
      return [this.addDialogClasses, 'c-modal-dialog', _defineProperty({
        'c-modal-dialog-centered': this.centered
      }, "c-modal-".concat(this.size), Boolean(this.size))];
    },
    contentClasses: function contentClasses() {
      return [this.addContentClasses, 'c-modal-content', _defineProperty({}, "c-border-".concat(this.borderVariant), Boolean(this.borderVariant))];
    },
    btnClasses: function btnClasses() {
      return ["c-btn c-btn-".concat(this.variant || 'primary')];
    }
  },
  watch: {
    visible: function visible(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.toggle(newVal);
      }
    }
  },
  methods: {
    modalClick: function modalClick(e) {
      if (e.target === this.$el.firstElementChild && !this.noCloseOnBackdrop) this.hide();
    },
    hide: function hide() {
      this.$emit('update:visible', false);
    },
    toggle: function toggle(newVal) {
      var _this = this;

      setTimeout(function () {
        _this.is_visible = newVal;
      }, 0);

      if (!this.noFade) {
        this.is_transitioning = true;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
          _this.is_transitioning = false;
        }, 150);
      }
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Modal/CModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_CModalvue_type_script_lang_js_ = (CModalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Modal/CModal.vue





/* normalize component */

var CModal_component = normalizeComponent(
  Modal_CModalvue_type_script_lang_js_,
  CModalvue_type_template_id_078cbd2c_render,
  CModalvue_type_template_id_078cbd2c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CModal = (CModal_component.exports);
// CONCATENATED MODULE: ./tmp/components/Modal/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Nav/CNav.vue?vue&type=template&id=9515e5b2&
var CNavvue_type_template_id_9515e5b2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{class:_vm.navClasses,on:{"click":_vm.onClick}},[_vm._t("default")],2)}
var CNavvue_type_template_id_9515e5b2_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Nav/CNav.vue?vue&type=template&id=9515e5b2&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.fill.js
var es6_array_fill = __webpack_require__("6c7b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Nav/CNav.vue?vue&type=script&lang=js&




//
//
//
//
//
//
/* harmony default export */ var CNavvue_type_script_lang_js_ = ({
  name: 'CNav',
  props: {
    fill: Boolean,
    justified: Boolean,
    tabs: Boolean,
    pills: Boolean,
    vertical: Boolean
  },
  computed: {
    navClasses: function navClasses() {
      return {
        'c-nav': true,
        'c-nav-tabs': this.tabs && !this.pills,
        'c-nav-pills': this.pills,
        'c-flex-column': this.vertical,
        'c-nav-fill': this.fill,
        'c-nav-justified': this.justified
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
      return item.$el.contains(e.target) && !item.disabled && ['CDropdown', 'CNavItem', 'CTab'].includes(item.$options._componentTag);
    },
    activateItem: function activateItem(itemToActivate) {
      this.$children.forEach(function (item) {
        return item.isActive = item === itemToActivate ? true : false;
      });
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Nav/CNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var Nav_CNavvue_type_script_lang_js_ = (CNavvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Nav/CNav.vue





/* normalize component */

var CNav_component = normalizeComponent(
  Nav_CNavvue_type_script_lang_js_,
  CNavvue_type_template_id_9515e5b2_render,
  CNavvue_type_template_id_9515e5b2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CNav = (CNav_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Nav/CNavItem.vue?vue&type=template&id=5b75adfd&
var CNavItemvue_type_template_id_5b75adfd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"c-nav-item"},[_c('CLink',_vm._b({staticClass:"c-nav-link",attrs:{"active":_vm.isActive}},'CLink',_vm.$props,false),[_vm._t("default")],2)],1)}
var CNavItemvue_type_template_id_5b75adfd_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Nav/CNavItem.vue?vue&type=template&id=5b75adfd&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Nav/CNavItem.vue?vue&type=script&lang=js&
//
//
//
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
// CONCATENATED MODULE: ./tmp/components/Nav/CNavItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Nav_CNavItemvue_type_script_lang_js_ = (CNavItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Nav/CNavItem.vue





/* normalize component */

var CNavItem_component = normalizeComponent(
  Nav_CNavItemvue_type_script_lang_js_,
  CNavItemvue_type_template_id_5b75adfd_render,
  CNavItemvue_type_template_id_5b75adfd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CNavItem = (CNavItem_component.exports);
// CONCATENATED MODULE: ./tmp/components/Nav/index.js



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Navbar/CNavbar.vue?vue&type=script&lang=js&





var CNavbarvue_type_script_lang_js_props = {
  tag: {
    type: String,
    default: 'nav'
  },
  light: Boolean,
  variant: String,
  toggleable: {
    type: [Boolean, String],
    default: false,
    validator: function validator(val) {
      return [false, true, 'sm', 'md', 'lg', 'xl'].includes(val);
    }
  },
  fixed: {
    type: String,
    validator: function validator(val) {
      return ['top', 'bottom'].includes(val);
    }
  },
  sticky: Boolean,
  print: Boolean
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
    return h(props.tag, a(data, {
      staticClass: 'c-navbar',
      class: [props.light ? 'c-navbar-light' : 'c-navbar-dark', props.toggleable !== true ? props.toggleable ? "c-navbar-expand-".concat(props.toggleable) : 'c-navbar-expand' : '', (_ref2 = {
        'c-d-print': props.print,
        'c-sticky-top': props.sticky
      }, _defineProperty(_ref2, "c-bg-".concat(props.variant), Boolean(props.variant)), _defineProperty(_ref2, "c-fixed-".concat(props.fixed), Boolean(props.fixed)), _ref2)],
      attrs: {
        role: props.tag === 'nav' ? null : 'navigation'
      }
    }), children);
  }
});
// CONCATENATED MODULE: ./tmp/components/Navbar/CNavbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navbar_CNavbarvue_type_script_lang_js_ = (CNavbarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Navbar/CNavbar.vue
var CNavbar_render, CNavbar_staticRenderFns




/* normalize component */

var CNavbar_component = normalizeComponent(
  Navbar_CNavbarvue_type_script_lang_js_,
  CNavbar_render,
  CNavbar_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CNavbar = (CNavbar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Navbar/CNavbarNav.vue?vue&type=script&lang=js&


/* harmony default export */ var CNavbarNavvue_type_script_lang_js_ = ({
  name: 'CNavbarNav',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'ul'
    },
    fill: Boolean,
    justified: Boolean
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, a(data, {
      staticClass: 'c-navbar-nav',
      class: {
        'c-nav-fill': props.fill,
        'c-nav-justified': props.justified
      }
    }), children);
  }
});
// CONCATENATED MODULE: ./tmp/components/Navbar/CNavbarNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navbar_CNavbarNavvue_type_script_lang_js_ = (CNavbarNavvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Navbar/CNavbarNav.vue
var CNavbarNav_render, CNavbarNav_staticRenderFns




/* normalize component */

var CNavbarNav_component = normalizeComponent(
  Navbar_CNavbarNavvue_type_script_lang_js_,
  CNavbarNav_render,
  CNavbarNav_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CNavbarNav = (CNavbarNav_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Navbar/CNavbarToggle.vue?vue&type=script&lang=js&
 //todo animation to x

/* harmony default export */ var CNavbarTogglevue_type_script_lang_js_ = ({
  name: 'CNavbarToggle',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data,
        slots = _ref.slots;
    return h('button', a(data, {
      class: ['c-navbar-toggler'],
      attrs: {
        type: 'button'
      }
    }), [slots().default || h('span', {
      class: ['c-navbar-toggler-icon']
    })]);
  }
});
// CONCATENATED MODULE: ./tmp/components/Navbar/CNavbarToggle.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navbar_CNavbarTogglevue_type_script_lang_js_ = (CNavbarTogglevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Navbar/CNavbarToggle.vue
var CNavbarToggle_render, CNavbarToggle_staticRenderFns




/* normalize component */

var CNavbarToggle_component = normalizeComponent(
  Navbar_CNavbarTogglevue_type_script_lang_js_,
  CNavbarToggle_render,
  CNavbarToggle_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CNavbarToggle = (CNavbarToggle_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Navbar/CNavbarBrand.vue?vue&type=script&lang=js&



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
      staticClass: 'c-navbar-brand',
      props: isLink ? props : null
    }), children);
  }
});
// CONCATENATED MODULE: ./tmp/components/Navbar/CNavbarBrand.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navbar_CNavbarBrandvue_type_script_lang_js_ = (CNavbarBrandvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Navbar/CNavbarBrand.vue
var CNavbarBrand_render, CNavbarBrand_staticRenderFns




/* normalize component */

var CNavbarBrand_component = normalizeComponent(
  Navbar_CNavbarBrandvue_type_script_lang_js_,
  CNavbarBrand_render,
  CNavbarBrand_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CNavbarBrand = (CNavbarBrand_component.exports);
// CONCATENATED MODULE: ./tmp/components/Navbar/index.js





// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Pagination/CPagination.vue?vue&type=template&id=605fa440&
var CPaginationvue_type_template_id_605fa440_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{class:_vm.computedClasses,attrs:{"role":"menubar","aria-disabled":"false","aria-label":"pagination"}},[(!_vm.hideDoubleArrows)?_c('li',{class:_vm.firstClasses},[_c('CLink',{staticClass:"c-page-link",attrs:{"disabled":_vm.activePage === 1,"aria-label":"Go to first page"},on:{"click":function($event){return _vm.setPage(1)}}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.firstButtonHtml)}})])],1):_vm._e(),(!_vm.hideArrows)?_c('li',{class:_vm.firstClasses},[_c('CLink',{staticClass:"c-page-link",attrs:{"disabled":_vm.activePage === 1,"aria-label":"Go to previous page"},on:{"click":function($event){return _vm.setPage(_vm.activePage - 1)}}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.previousButtonHtml)}})])],1):_vm._e(),(_vm.beforeDots)?_c('li',{staticClass:"c-page-item c-disabled c-d-none c-d-sm-flex",attrs:{"role":"separator"}},[_c('span',{staticClass:"c-page-link"},[_vm._v("…")])]):_vm._e(),_vm._l((_vm.items),function(item,index){return _c('li',{key:index,class:[{ 'c-active': _vm.activePage === item }, 'c-page-item']},[_c('CLink',{staticClass:"c-page-link",attrs:{"aria-label":("Goto page " + item)},on:{"click":function($event){return _vm.setPage(item)}}},[_vm._v("\n      "+_vm._s(item)+"\n    ")])],1)}),(_vm.afterDots)?_c('li',{staticClass:"c-page-item c-disabled c-d-none c-d-sm-flex",attrs:{"role":"separator"}},[_c('span',{staticClass:"c-page-link"},[_vm._v("…")])]):_vm._e(),(!_vm.hideArrows)?_c('li',{class:_vm.lastClasses},[_c('CLink',{staticClass:"c-page-link",attrs:{"disabled":_vm.activePage === _vm.pages,"aria-label":"Go to next page"},on:{"click":function($event){return _vm.setPage(_vm.activePage + 1)}}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.nextButtonHtml)}})])],1):_vm._e(),(!_vm.hideDoubleArrows)?_c('li',{class:_vm.lastClasses},[_c('CLink',{staticClass:"c-page-link",attrs:{"disabled":_vm.activePage === _vm.pages,"aria-label":"Go to last page"},on:{"click":function($event){return _vm.setPage(_vm.pages)}}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.lastButtonHtml)}})])],1):_vm._e()],2)}
var CPaginationvue_type_template_id_605fa440_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Pagination/CPagination.vue?vue&type=template&id=605fa440&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("5df3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("1c4c");

// EXTERNAL MODULE: ./node_modules/element-resize-detector/src/element-resize-detector.js
var element_resize_detector = __webpack_require__("eec4");
var element_resize_detector_default = /*#__PURE__*/__webpack_require__.n(element_resize_detector);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Pagination/CPagination.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      default: 'md',
      validator: function validator(val) {
        return ['sm', 'md', 'lg'].includes(val);
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
    hideDots: Boolean,
    hideArrows: Boolean,
    hideDoubleArrows: Boolean,
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
    },
    notResponsive: Boolean
  },
  data: function data() {
    return {
      rwd: this.size,
      erd: element_resize_detector_default()()
    };
  },
  watch: {
    pages: function pages(val) {
      if (val < this.activePage) {
        this.$emit('update:activePage', val);
      }
    }
  },
  mounted: function mounted() {
    if (this.size !== 'sm' && !this.notResponsive) {
      this.erd.listenTo(this.$el, this.onWrapperResize);
    }
  },
  computed: {
    firstClasses: function firstClasses() {
      return ['c-page-item', {
        'c-disabled': this.activePage === 1
      }];
    },
    lastClasses: function lastClasses() {
      return ['c-page-item', {
        'c-disabled': this.activePage === this.pages
      }];
    },
    computedClasses: function computedClasses() {
      return "c-pagination c-pagination-".concat(this.rwd, " c-justify-content-").concat(this.align, " ");
    },
    dots: function dots() {
      return !this.hideDots && this.limit > 4 && this.limit < this.pages;
    },
    maxPrevItems: function maxPrevItems() {
      return Math.floor((this.limit - 1) / 2);
    },
    maxNextItems: function maxNextItems() {
      return Math.ceil((this.limit - 1) / 2);
    },
    beforeDots: function beforeDots() {
      return this.dots && this.activePage > this.maxPrevItems + 1;
    },
    afterDots: function afterDots() {
      return this.dots && this.activePage < this.pages - this.maxNextItems;
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
    onWrapperResize: function onWrapperResize(el) {
      var responsiveSize = el.clientWidth > 400 ? 'md' : 'sm';
      this.rwd = el.clientWidth > 600 ? this.size : responsiveSize;
    },
    setPage: function setPage(number) {
      if (number !== this.activePage) {
        this.$emit('update:activePage', number);
      }
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Pagination/CPagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var Pagination_CPaginationvue_type_script_lang_js_ = (CPaginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./tmp/components/Pagination/CPagination.vue?vue&type=style&index=0&lang=scss&
var CPaginationvue_type_style_index_0_lang_scss_ = __webpack_require__("df53");

// CONCATENATED MODULE: ./tmp/components/Pagination/CPagination.vue






/* normalize component */

var CPagination_component = normalizeComponent(
  Pagination_CPaginationvue_type_script_lang_js_,
  CPaginationvue_type_template_id_605fa440_render,
  CPaginationvue_type_template_id_605fa440_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CPagination = (CPagination_component.exports);
// CONCATENATED MODULE: ./tmp/components/Pagination/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Progress/CProgress.vue?vue&type=template&id=d4ee3f2e&
var CProgressvue_type_template_id_d4ee3f2e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-progress",style:({ height: _vm.height })},[_vm._t("default",[_c('CProgressBar')])],2)}
var CProgressvue_type_template_id_d4ee3f2e_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Progress/CProgress.vue?vue&type=template&id=d4ee3f2e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Progress/CProgressBar.vue?vue&type=template&id=e1da1122&
var CProgressBarvue_type_template_id_e1da1122_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.progressBarClasses,style:(_vm.progressBarStyles),attrs:{"role":"progressbar","aria-valuemin":"0","aria-valuemax":_vm.props.max.toString(),"aria-valuenow":_vm.props.value.toFixed(_vm.props.precision)}},[_vm._t("default",[_vm._v(_vm._s(_vm.text))])],2)}
var CProgressBarvue_type_template_id_e1da1122_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Progress/CProgressBar.vue?vue&type=template&id=e1da1122&

// CONCATENATED MODULE: ./tmp/components/Progress/progressProps.js

/* harmony default export */ var progressProps = ({
  height: String,
  // These props can be inherited via the child CProgressBar(s)
  variant: String,
  striped: Boolean,
  animated: Boolean,
  precision: {
    type: Number,
    default: 0
  },
  showProgress: Boolean,
  showValue: Boolean,
  max: {
    type: Number,
    default: 100
  },
  value: Number
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Progress/CProgressBar.vue?vue&type=script&lang=js&






//
//
//
//
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
  props: progressProps,
  inject: {
    progress: {
      default: null
    }
  },
  computed: {
    props: function props() {
      var _this = this;

      return Object.keys(progressProps).reduce(function (props, key) {
        var propUndefined = !Object.keys(_this.$options.propsData).includes(key);
        var propInheritedFromProgress = propUndefined && _this.progress.props[key];
        props[key] = propInheritedFromProgress ? _this.progress.props[key] : _this[key];
        return props;
      }, {});
    },
    progressBarClasses: function progressBarClasses() {
      var _ref;

      return ['c-progress-bar', (_ref = {}, _defineProperty(_ref, "c-bg-".concat(this.props.variant), this.props.variant), _defineProperty(_ref, 'c-progress-bar-striped', this.props.striped || this.props.animated), _defineProperty(_ref, 'c-progress-bar-animated', this.props.animated), _ref)];
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
    text: function text() {
      if (this.props.showValue || this.props.showProgress) {
        return this.progressValue || this.props.value;
      }
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Progress/CProgressBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Progress_CProgressBarvue_type_script_lang_js_ = (CProgressBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Progress/CProgressBar.vue





/* normalize component */

var CProgressBar_component = normalizeComponent(
  Progress_CProgressBarvue_type_script_lang_js_,
  CProgressBarvue_type_template_id_e1da1122_render,
  CProgressBarvue_type_template_id_e1da1122_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CProgressBar = (CProgressBar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Progress/CProgress.vue?vue&type=script&lang=js&
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
  props: progressProps,
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
// CONCATENATED MODULE: ./tmp/components/Progress/CProgress.vue?vue&type=script&lang=js&
 /* harmony default export */ var Progress_CProgressvue_type_script_lang_js_ = (CProgressvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Progress/CProgress.vue





/* normalize component */

var CProgress_component = normalizeComponent(
  Progress_CProgressvue_type_script_lang_js_,
  CProgressvue_type_template_id_d4ee3f2e_render,
  CProgressvue_type_template_id_d4ee3f2e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CProgress = (CProgress_component.exports);
// CONCATENATED MODULE: ./tmp/components/Progress/index.js



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebar.vue?vue&type=template&id=85ca7482&
var CSidebarvue_type_template_id_85ca7482_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:(_vm.hideMobile),expression:"hideMobile"}],class:_vm.sidebarClasses},[_vm._t("default",[_vm._v("Sidebar")])],2)}
var CSidebarvue_type_template_id_85ca7482_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebar.vue?vue&type=template&id=85ca7482&

// CONCATENATED MODULE: ./tmp/components/Sidebar/hideMobile.js
var hideMobile = {
  methods: {
    hideMobile: function hideMobile() {
      if (document.body.classList.contains('sidebar-show')) {
        document.body.classList.toggle('sidebar-show');
      }
    }
  }
};

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebar.vue?vue&type=script&lang=js&




//
//
//
//
//


/* harmony default export */ var CSidebarvue_type_script_lang_js_ = ({
  name: 'CSidebar',
  mixins: [vue_clickaway_common["mixin"], hideMobile],
  props: {
    fixed: Boolean,
    minimize: Boolean,
    display: {
      type: [Boolean, String],
      default: 'lg',
      validator: function validator(val) {
        return [true, false, 'sm', 'md', 'lg', 'xl'].includes(val);
      }
    },
    mobile: Boolean,
    aside: Boolean,
    light: Boolean
  },
  provide: function provide() {
    var _this = this;

    var state = {};
    Object.defineProperty(state, 'minimized', {
      get: function get() {
        return _this.minimized;
      }
    });
    return {
      state: state
    };
  },
  data: function data() {
    return {
      displayed: this.display,
      minimized: this.minimize
    };
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$root.$on("c-".concat(this.mode, "-toggle-minimize"), function () {
      _this2.minimized = !_this2.minimized;
    });
    this.$root.$on("c-".concat(this.mode, "-toggle"), function () {
      _this2.displayed = _this2.displayed ? false : _this2.display || true;
    });
  },
  computed: {
    mode: function mode() {
      return this.aside ? 'aside' : 'sidebar';
    },
    breakpoint: function breakpoint() {
      return this.displayed === true || this.mobile ? '' : '-' + this.display;
    },
    sidebarClasses: function sidebarClasses() {
      var _ref;

      return ['c-sidebar', "c-sidebar-".concat(this.light ? 'light' : 'dark'), (_ref = {}, _defineProperty(_ref, "c-sidebar".concat(this.breakpoint, "-show"), this.displayed), _defineProperty(_ref, 'c-sidebar-fixed', this.fixed), _defineProperty(_ref, 'c-sidebar-minimized', this.minimized), _defineProperty(_ref, 'c-sidebar-right', this.aside), _ref)];
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_CSidebarvue_type_script_lang_js_ = (CSidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebar.vue





/* normalize component */

var CSidebar_component = normalizeComponent(
  Sidebar_CSidebarvue_type_script_lang_js_,
  CSidebarvue_type_template_id_85ca7482_render,
  CSidebarvue_type_template_id_85ca7482_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebar = (CSidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarFooter.vue?vue&type=template&id=cc12a40c&functional=true&
var CSidebarFootervue_type_template_id_cc12a40c_functional_true_render = function (_h,_vm) {var _c=_vm._c;return (_vm.$slots.default)?_c('div',{staticClass:"c-sidebar-footer"},[_vm._t("default")],2):_vm._e()}
var CSidebarFootervue_type_template_id_cc12a40c_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarFooter.vue?vue&type=template&id=cc12a40c&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CSidebarFootervue_type_script_lang_js_ = ({
  name: 'CSidebarFooter'
});
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_CSidebarFootervue_type_script_lang_js_ = (CSidebarFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarFooter.vue





/* normalize component */

var CSidebarFooter_component = normalizeComponent(
  Sidebar_CSidebarFootervue_type_script_lang_js_,
  CSidebarFootervue_type_template_id_cc12a40c_functional_true_render,
  CSidebarFootervue_type_template_id_cc12a40c_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarFooter = (CSidebarFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarForm.vue?vue&type=template&id=2f71357a&functional=true&
var CSidebarFormvue_type_template_id_2f71357a_functional_true_render = function (_h,_vm) {var _c=_vm._c;return (_vm.$slots.default)?_c('div',{staticClass:"c-sidebar-form"},[_vm._t("default")],2):_vm._e()}
var CSidebarFormvue_type_template_id_2f71357a_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarForm.vue?vue&type=template&id=2f71357a&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CSidebarFormvue_type_script_lang_js_ = ({
  name: 'CSidebarForm'
});
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_CSidebarFormvue_type_script_lang_js_ = (CSidebarFormvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarForm.vue





/* normalize component */

var CSidebarForm_component = normalizeComponent(
  Sidebar_CSidebarFormvue_type_script_lang_js_,
  CSidebarFormvue_type_template_id_2f71357a_functional_true_render,
  CSidebarFormvue_type_template_id_2f71357a_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarForm = (CSidebarForm_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarHeader.vue?vue&type=template&id=94e4fb28&functional=true&
var CSidebarHeadervue_type_template_id_94e4fb28_functional_true_render = function (_h,_vm) {var _c=_vm._c;return (_vm.$slots.default)?_c('div',{staticClass:"c-sidebar-header"},[_vm._t("default")],2):_vm._e()}
var CSidebarHeadervue_type_template_id_94e4fb28_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarHeader.vue?vue&type=template&id=94e4fb28&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var CSidebarHeadervue_type_script_lang_js_ = ({
  name: 'CSidebarHeader'
});
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_CSidebarHeadervue_type_script_lang_js_ = (CSidebarHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarHeader.vue





/* normalize component */

var CSidebarHeader_component = normalizeComponent(
  Sidebar_CSidebarHeadervue_type_script_lang_js_,
  CSidebarHeadervue_type_template_id_94e4fb28_functional_true_render,
  CSidebarHeadervue_type_template_id_94e4fb28_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarHeader = (CSidebarHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarNav.vue?vue&type=template&id=2d40d8bc&
var CSidebarNavvue_type_template_id_2d40d8bc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"c-sidebar-nav"},[_c('VuePerfectScrollbar',{staticClass:"c-scroll-area",attrs:{"settings":_vm.psSettings,"switcher":!_vm.state.minimized}},[_c('CSidebarNavItems',{attrs:{"items":_vm.navItems}})],1)],1)}
var CSidebarNavvue_type_template_id_2d40d8bc_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNav.vue?vue&type=template&id=2d40d8bc&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("268f");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("e265");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("a4bb");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarNavItems.vue?vue&type=template&id=26da200d&
var CSidebarNavItemsvue_type_template_id_26da200d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"c-nav"},[_vm._l((_vm.items),function(item,index){return [(item.title)?[_c('CSidebarNavTitle',{key:index,class:item.class,attrs:{"name":item.name,"wrapper":item.wrapper}})]:(item.divider)?[_c('CSidebarNavDivider',{key:index,attrs:{"classes":item.class}})]:(item.label)?[_c('CSidebarNavLabel',{key:index,attrs:{"name":item.name,"url":item.url,"icon":item.icon,"label":item.label,"classes":item.class}})]:[_c('CSidebarNavItem',{key:index,attrs:{"item":item}})]]})],2)}
var CSidebarNavItemsvue_type_template_id_26da200d_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNavItems.vue?vue&type=template&id=26da200d&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarNavDivider.vue?vue&type=template&id=9939d5ce&functional=true&
var CSidebarNavDividervue_type_template_id_9939d5ce_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('li',{class:['c-nav-divider', _vm.props.classes]})}
var CSidebarNavDividervue_type_template_id_9939d5ce_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNavDivider.vue?vue&type=template&id=9939d5ce&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarNavDivider.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var CSidebarNavDividervue_type_script_lang_js_ = ({
  name: 'CSidebarNavDivider',
  props: {
    classes: [String, Array, Object]
  }
});
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNavDivider.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_CSidebarNavDividervue_type_script_lang_js_ = (CSidebarNavDividervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNavDivider.vue





/* normalize component */

var CSidebarNavDivider_component = normalizeComponent(
  Sidebar_CSidebarNavDividervue_type_script_lang_js_,
  CSidebarNavDividervue_type_template_id_9939d5ce_functional_true_render,
  CSidebarNavDividervue_type_template_id_9939d5ce_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarNavDivider = (CSidebarNavDivider_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarNavTitle.vue?vue&type=template&id=39c413f0&
var CSidebarNavTitlevue_type_template_id_39c413f0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:['c-nav-title', _vm.classes]},[(_vm.wrapper && _vm.wrapper.element)?[_c(_vm.wrapper.element,_vm._b({tag:"component"},'component',_vm.wrapper.attributes,false),[_vm._v("\n      "+_vm._s(_vm.name)+"\n    ")])]:[_vm._v("\n    "+_vm._s(_vm.name)+"\n  ")]],2)}
var CSidebarNavTitlevue_type_template_id_39c413f0_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNavTitle.vue?vue&type=template&id=39c413f0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarNavTitle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CSidebarNavTitlevue_type_script_lang_js_ = ({
  name: 'CSidebarNavTitle',
  props: {
    name: String,
    classes: [String, Array, Object],
    wrapper: Object
  }
});
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNavTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_CSidebarNavTitlevue_type_script_lang_js_ = (CSidebarNavTitlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNavTitle.vue





/* normalize component */

var CSidebarNavTitle_component = normalizeComponent(
  Sidebar_CSidebarNavTitlevue_type_script_lang_js_,
  CSidebarNavTitlevue_type_template_id_39c413f0_render,
  CSidebarNavTitlevue_type_template_id_39c413f0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarNavTitle = (CSidebarNavTitle_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarNavItem.vue?vue&type=template&id=21c90bc9&
var CSidebarNavItemvue_type_template_id_21c90bc9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.item.children)?_c('CSidebarNavDropdown',{attrs:{"name":_vm.item.name,"url":_vm.item.url,"icon":_vm.item.icon,"open":_vm.item.open}},_vm._l((_vm.item.children),function(dropdownItem,key){return _c('CSidebarNavItem',{key:key,attrs:{"item":dropdownItem}})}),1):_c('li',{class:['c-nav-item', _vm.item.classes],on:{"click":_vm.hideMobile}},[_vm._t("default",[_c('CSidebarNavLink',_vm._b({},'CSidebarNavLink',_vm.item,false))])],2)}
var CSidebarNavItemvue_type_template_id_21c90bc9_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNavItem.vue?vue&type=template&id=21c90bc9&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarNavItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CSidebarNavItemvue_type_script_lang_js_ = ({
  name: 'CSidebarNavItem',
  mixins: [hideMobile],
  props: {
    item: [String, Array, Object]
  }
});
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNavItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_CSidebarNavItemvue_type_script_lang_js_ = (CSidebarNavItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNavItem.vue





/* normalize component */

var CSidebarNavItem_component = normalizeComponent(
  Sidebar_CSidebarNavItemvue_type_script_lang_js_,
  CSidebarNavItemvue_type_template_id_21c90bc9_render,
  CSidebarNavItemvue_type_template_id_21c90bc9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarNavItem = (CSidebarNavItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarNavLabel.vue?vue&type=template&id=2e13612e&
var CSidebarNavLabelvue_type_template_id_2e13612e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CSidebarNavItem',{attrs:{"classes":_vm.navItemClasses}},[_c('a',{staticClass:"nav-label",attrs:{"href":_vm.url}},[_c('i',{class:_vm.iconClasses}),_vm._v("\n    "+_vm._s(_vm.name)+"\n  ")])])}
var CSidebarNavLabelvue_type_template_id_2e13612e_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNavLabel.vue?vue&type=template&id=2e13612e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarNavLabel.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//

/* harmony default export */ var CSidebarNavLabelvue_type_script_lang_js_ = ({
  name: 'CSidebarNavLabel',
  components: {
    CSidebarNavItem: CSidebarNavItem
  },
  props: {
    name: String,
    url: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: 'fa fa-circle'
    },
    classes: String,
    label: {
      type: Object,
      required: true,
      default: function _default() {}
    }
  },
  computed: {
    navItemClasses: function navItemClasses() {
      return ['c-hidden-cn', this.classes];
    },
    iconClasses: function iconClasses() {
      return [this.icon || 'fa fa-circle', this.label.class, _defineProperty({}, "c-text-".concat(this.label.variant), this.label.variant)];
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNavLabel.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_CSidebarNavLabelvue_type_script_lang_js_ = (CSidebarNavLabelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNavLabel.vue





/* normalize component */

var CSidebarNavLabel_component = normalizeComponent(
  Sidebar_CSidebarNavLabelvue_type_script_lang_js_,
  CSidebarNavLabelvue_type_template_id_2e13612e_render,
  CSidebarNavLabelvue_type_template_id_2e13612e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarNavLabel = (CSidebarNavLabel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarNavItems.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var CSidebarNavItemsvue_type_script_lang_js_ = ({
  name: 'CSidebarNavItems',
  props: {
    items: {
      type: Array,
      required: true,
      default: function _default() {
        return [];
      }
    }
  },
  components: {
    CSidebarNavDivider: CSidebarNavDivider,
    CSidebarNavTitle: CSidebarNavTitle,
    CSidebarNavItem: CSidebarNavItem,
    CSidebarNavLabel: CSidebarNavLabel
  }
});
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNavItems.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_CSidebarNavItemsvue_type_script_lang_js_ = (CSidebarNavItemsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNavItems.vue





/* normalize component */

var CSidebarNavItems_component = normalizeComponent(
  Sidebar_CSidebarNavItemsvue_type_script_lang_js_,
  CSidebarNavItemsvue_type_template_id_26da200d_render,
  CSidebarNavItemsvue_type_template_id_26da200d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarNavItems = (CSidebarNavItems_component.exports);
// EXTERNAL MODULE: ./node_modules/vue-perfect-scrollbar/dist/index.js
var dist = __webpack_require__("9d63");
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarNav.vue?vue&type=script&lang=js&

//
//
//
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
  props: {
    navItems: {
      type: Array,
      required: true,
      default: function _default() {
        return [];
      }
    }
  },
  components: {
    CSidebarNavItems: CSidebarNavItems,
    VuePerfectScrollbar: dist_default.a
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
        wheelPropagation: false,
        interceptRailY: function interceptRailY(styles) {
          return _objectSpread({}, styles, {
            height: 0
          });
        }
      };
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_CSidebarNavvue_type_script_lang_js_ = (CSidebarNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./tmp/components/Sidebar/CSidebarNav.vue?vue&type=style&index=0&lang=css&
var CSidebarNavvue_type_style_index_0_lang_css_ = __webpack_require__("e919");

// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNav.vue






/* normalize component */

var CSidebarNav_component = normalizeComponent(
  Sidebar_CSidebarNavvue_type_script_lang_js_,
  CSidebarNavvue_type_template_id_2d40d8bc_render,
  CSidebarNavvue_type_template_id_2d40d8bc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarNav = (CSidebarNav_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarMinimizer.vue?vue&type=template&id=1ac75092&
var CSidebarMinimizervue_type_template_id_1ac75092_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"c-sidebar-minimizer",attrs:{"type":"button"},on:{"click":function($event){return _vm.$root.$emit('c-sidebar-toggle-minimize')}}})}
var CSidebarMinimizervue_type_template_id_1ac75092_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarMinimizer.vue?vue&type=template&id=1ac75092&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarMinimizer.vue?vue&type=script&lang=js&
//
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
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarMinimizer.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_CSidebarMinimizervue_type_script_lang_js_ = (CSidebarMinimizervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarMinimizer.vue





/* normalize component */

var CSidebarMinimizer_component = normalizeComponent(
  Sidebar_CSidebarMinimizervue_type_script_lang_js_,
  CSidebarMinimizervue_type_template_id_1ac75092_render,
  CSidebarMinimizervue_type_template_id_1ac75092_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarMinimizer = (CSidebarMinimizer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarNavDropdown.vue?vue&type=template&id=902ead36&
var CSidebarNavDropdownvue_type_template_id_902ead36_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('router-link',{class:_vm.dropdownClasses,attrs:{"tag":"li","to":_vm.url,"disabled":""}},[_c('div',{staticClass:"c-nav-link c-nav-dropdown-toggle",on:{"click":_vm.handleClick}},[_c('i',{class:_vm.classIcon}),_vm._v("\n    "+_vm._s(_vm.name)+"\n  ")]),_c('ul',{staticClass:"c-nav-dropdown-items"},[_vm._t("default")],2)])}
var CSidebarNavDropdownvue_type_template_id_902ead36_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNavDropdown.vue?vue&type=template&id=902ead36&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarNavDropdown.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    name: String,
    url: String,
    icon: String,
    open: {
      type: Boolean,
      default: undefined
    }
  },
  data: function data() {
    return {
      isOpen: this.open
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler: function handler(route) {
        if (this.open === undefined) {
          this.isOpen = route.fullPath.includes(this.url);
        } else if (this.open === false) {
          this.isOpen = false;
        }
      }
    }
  },
  computed: {
    classIcon: function classIcon() {
      return ['c-nav-icon', this.icon];
    },
    dropdownClasses: function dropdownClasses() {
      return ['c-nav-item c-nav-dropdown', {
        'c-open': this.isOpen
      }];
    }
  },
  methods: {
    handleClick: function handleClick(e) {
      e.preventDefault();
      this.isOpen = !this.isOpen;
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNavDropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_CSidebarNavDropdownvue_type_script_lang_js_ = (CSidebarNavDropdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./tmp/components/Sidebar/CSidebarNavDropdown.vue?vue&type=style&index=0&lang=css&
var CSidebarNavDropdownvue_type_style_index_0_lang_css_ = __webpack_require__("6002");

// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNavDropdown.vue






/* normalize component */

var CSidebarNavDropdown_component = normalizeComponent(
  Sidebar_CSidebarNavDropdownvue_type_script_lang_js_,
  CSidebarNavDropdownvue_type_template_id_902ead36_render,
  CSidebarNavDropdownvue_type_template_id_902ead36_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarNavDropdown = (CSidebarNavDropdown_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarNavLink.vue?vue&type=template&id=7a511feb&
var CSidebarNavLinkvue_type_template_id_7a511feb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CLink',_vm._b({staticClass:"c-nav-link",attrs:{"exact":true}},'CLink',_vm.computedProps,false),[_c('i',{class:['c-nav-icon', _vm.icon]}),_vm._v(" "+_vm._s(_vm.name)+"\n  "),(_vm.badge && _vm.badge.text)?_c('CBadge',{attrs:{"variant":_vm.badge.variant || 'info'}},[_vm._v("\n    "+_vm._s(_vm.badge.text)+"\n  ")]):_vm._e()],1)}
var CSidebarNavLinkvue_type_template_id_7a511feb_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNavLink.vue?vue&type=template&id=7a511feb&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarNavLink.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var CSidebarNavLinkvue_type_script_lang_js_props = Object.assign(propsFactory(), {
  name: String,
  icon: [String, Array, Object],
  badge: Object,
  variant: String,
  url: String
});
/* harmony default export */ var CSidebarNavLinkvue_type_script_lang_js_ = ({
  name: 'CSidebarNavLink',
  components: {
    CLink: CLink
  },
  props: CSidebarNavLinkvue_type_script_lang_js_props,
  computed: {
    linkGeneratedFromUrlProp: function linkGeneratedFromUrlProp() {
      var url = this.url;

      if (!url) {
        return {};
      } else {
        return url.substring(0, 4) === 'http' ? {
          href: url
        } : {
          to: url
        };
      }
    },
    computedProps: function computedProps() {
      return Object.assign({}, this.$props, this.linkGeneratedFromUrlProp);
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNavLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_CSidebarNavLinkvue_type_script_lang_js_ = (CSidebarNavLinkvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarNavLink.vue





/* normalize component */

var CSidebarNavLink_component = normalizeComponent(
  Sidebar_CSidebarNavLinkvue_type_script_lang_js_,
  CSidebarNavLinkvue_type_template_id_7a511feb_render,
  CSidebarNavLinkvue_type_template_id_7a511feb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarNavLink = (CSidebarNavLink_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarToggler.vue?vue&type=template&id=b54193a8&
var CSidebarTogglervue_type_template_id_b54193a8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"c-header-toggler",attrs:{"type":"button"},on:{"click":function($event){return _vm.$root.$emit(("c-" + (_vm.aside ? 'aside' : 'sidebar') + "-toggle"))}}},[_c('span',{staticClass:"c-header-toggler-icon"})])}
var CSidebarTogglervue_type_template_id_b54193a8_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarToggler.vue?vue&type=template&id=b54193a8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Sidebar/CSidebarToggler.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CSidebarTogglervue_type_script_lang_js_ = ({
  name: 'CSidebarToggler',
  props: {
    aside: Boolean
  }
});
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarToggler.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_CSidebarTogglervue_type_script_lang_js_ = (CSidebarTogglervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Sidebar/CSidebarToggler.vue





/* normalize component */

var CSidebarToggler_component = normalizeComponent(
  Sidebar_CSidebarTogglervue_type_script_lang_js_,
  CSidebarTogglervue_type_template_id_b54193a8_render,
  CSidebarTogglervue_type_template_id_b54193a8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSidebarToggler = (CSidebarToggler_component.exports);
// CONCATENATED MODULE: ./tmp/components/Sidebar/index.js















// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.small.js
var es6_string_small = __webpack_require__("f386");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Spinner/CSpinner.vue?vue&type=script&lang=js&



/* harmony default export */ var CSpinnervue_type_script_lang_js_ = ({
  name: 'CSpinner',
  functional: true,
  props: {
    grow: Boolean,
    variant: String,
    small: Boolean,
    tag: {
      type: String,
      default: 'span'
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
      class: ["c-spinner-".concat(type), (_ref2 = {}, _defineProperty(_ref2, "c-spinner-".concat(type, "-sm"), props.small), _defineProperty(_ref2, "c-text-".concat(props.variant), Boolean(props.variant)), _ref2)]
    }));
  }
});
// CONCATENATED MODULE: ./tmp/components/Spinner/CSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var Spinner_CSpinnervue_type_script_lang_js_ = (CSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Spinner/CSpinner.vue
var CSpinner_render, CSpinner_staticRenderFns




/* normalize component */

var CSpinner_component = normalizeComponent(
  Spinner_CSpinnervue_type_script_lang_js_,
  CSpinner_render,
  CSpinner_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSpinner = (CSpinner_component.exports);
// CONCATENATED MODULE: ./tmp/components/Spinner/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Switch/CSwitch.vue?vue&type=template&id=03ad68ff&
var CSwitchvue_type_template_id_03ad68ff_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:_vm.classList},[_c('input',_vm._b({staticClass:"c-switch-input c-form-check-input",attrs:{"type":_vm.type},domProps:{"checked":_vm.isChecked,"value":_vm.value},on:{"change":_vm.toggle}},'input',_vm.$attrs,false)),_c('span',{staticClass:"c-switch-slider",attrs:{"data-checked":_vm.labelOn,"data-unchecked":_vm.labelOff}})])}
var CSwitchvue_type_template_id_03ad68ff_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Switch/CSwitch.vue?vue&type=template&id=03ad68ff&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Switch/CSwitch.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
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
    variant: {
      type: String,
      default: 'secondary'
    },
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
    checked: {
      type: [Boolean, String, Number],
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: undefined
    },
    trueValue: [String, Number],
    falseValue: [String, Number],
    labelOn: String,
    labelOff: String,
    type: {
      type: String,
      default: 'checkbox'
    }
  },
  data: function data() {
    return {
      isChecked: undefined
    };
  },
  watch: {
    checked: {
      immediate: true,
      handler: function handler(val, oldVal) {
        if (val !== oldVal) {
          this.isChecked = this.getCheckState();
        }
      }
    }
  },
  computed: {
    classList: function classList() {
      var _ref;

      var outlineString = this.outline ? '-outline' : '';
      var outlinedAltString = this.outline === 'alt' ? '-alt' : '';
      return ['c-switch c-form-check-label', "c-switch".concat(outlineString, "-").concat(this.variant).concat(outlinedAltString), (_ref = {}, _defineProperty(_ref, "c-switch-".concat(this.size), this.size), _defineProperty(_ref, "c-switch-".concat(this.shape), this.shape), _defineProperty(_ref, 'c-switch-label', this.labelOn || this.labelOff), _ref)];
    }
  },
  methods: {
    getCheckState: function getCheckState() {
      if (this.type === 'radio') {
        return this.checked === this.value;
      } else if (typeof this.checked === 'boolean') {
        return this.checked;
      } else {
        return this.checked === this.trueValue ? true : false;
      }
    },
    toggle: function toggle(event) {
      this.isChecked = event.target.checked;
      this.$emit('update:checked', this.getValue(event), event);
    },
    getValue: function getValue(e) {
      if (this.type === 'radio') {
        return this.value;
      } else if (e.target.checked) {
        return this.trueValue !== undefined ? this.trueValue : true;
      } else {
        return this.falseValue !== undefined ? this.falseValue : false;
      }
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Switch/CSwitch.vue?vue&type=script&lang=js&
 /* harmony default export */ var Switch_CSwitchvue_type_script_lang_js_ = (CSwitchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Switch/CSwitch.vue





/* normalize component */

var CSwitch_component = normalizeComponent(
  Switch_CSwitchvue_type_script_lang_js_,
  CSwitchvue_type_template_id_03ad68ff_render,
  CSwitchvue_type_template_id_03ad68ff_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CSwitch = (CSwitch_component.exports);
// CONCATENATED MODULE: ./tmp/components/Switch/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Table/CTable.vue?vue&type=template&id=58e33ed4&scoped=true&
var CTablevue_type_template_id_58e33ed4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.optionsRow)?_c('div',{staticClass:"c-row c-my-2 c-mx-0"},[(_vm.optionsRow !== 'noFilter')?_c('div',{staticClass:"c-col-sm-6 c-form-inline c-p-0"},[_c('label',{staticClass:"c-mr-2"},[_vm._v("Filter: ")]),_c('input',{staticClass:"c-form-control c-table-filter",attrs:{"type":"text","placeholder":"type string..."},domProps:{"value":_vm.tableFilter},on:{"input":function($event){_vm.tableFilter = $event.target.value}}})]):_vm._e(),(_vm.optionsRow !== 'noPagination')?_c('div',{staticClass:"c-col-sm-6 c-p-0",class:_vm.optionsRow === 'noFilter' ? 'c-offset-sm-6' : ''},[_c('div',{staticClass:"c-form-inline c-float-sm-right"},[_c('label',{staticClass:"mr-2"},[_vm._v("Items per page: ")]),_c('select',{staticClass:"c-form-control",on:{"change":_vm.paginationChange}},[_c('option',{attrs:{"value":"","selected":"","disabled":"","hidden":""}},[_vm._v("\n            "+_vm._s(_vm.perPageItems)+"\n          ")]),_vm._l(([5,10,20,50]),function(number,key){return _c('option',{key:key,attrs:{"val":number}},[_vm._v("\n            "+_vm._s(number)+"\n          ")])})],2)])]):_vm._e()]):_vm._e(),_vm._t("over-table"),_c('div',{class:("c-position-relative " + (_vm.notResponsive ? '' : 'c-table-responsive'))},[_c('table',{class:_vm.tableClasses},[_c('thead',[_c('tr',[(_vm.indexColumn)?_c('th',{staticStyle:{"width":"40px"}}):_vm._e(),_vm._l((_vm.columnNames),function(name,index){return [_c('th',{key:index,class:[_vm.headerClass(index), _vm.sortingIconStyles],style:(_vm.headerStyles(index)),on:{"click":function($event){return _vm.changeSort(_vm.rawColumnNames[index], index)}}},[_vm._t(((_vm.rawColumnNames[index]) + "-header"),[_c('div',{staticClass:"c-d-inline"},[_vm._v(_vm._s(name))])]),(!_vm.noSorting && _vm.sortable(index))?_vm._t("sorting-icon",[_c('CIcon',{class:_vm.iconClasses(index),attrs:{"width":"18","name":"arrowTop"}})],{"state":_vm.getIconState(index)}):_vm._e()],2)]})],2),(_vm.filterRow)?_c('tr',{staticClass:"c-table-sm"},[(_vm.indexColumn)?_c('th',{staticClass:"c-pb-2 c-pl-2"},[(_vm.indexColumn !== 'noCleaner')?_c('CIcon',{class:_vm.isFiltered ? 'c-text-danger' : 'c-text-secondary',attrs:{"width":"18","name":"ban","title":"clear table"},nativeOn:{"click":function($event){return _vm.clear($event)}}}):_vm._e()],1):_vm._e(),_vm._l((_vm.rawColumnNames),function(colName,index){return [_c('th',{key:index,class:_vm.headerClass(index)},[_vm._t(((_vm.rawColumnNames[index]) + "-filter"),[(!_vm.fields || !_vm.fields[index].noFilter)?_c('input',{staticClass:"c-w-100 c-table-filter",domProps:{"value":_vm.columnFilter[colName]},on:{"input":function($event){return _vm.addColumnFilter(colName, $event.target.value)}}}):_vm._e()])],2)]})],2):_vm._e()]),_c('tbody',{staticClass:"c-position-relative",style:(_vm.bodyStyle)},[_vm._l((_vm.currentItems),function(item,itemIndex){return [_c('tr',{key:itemIndex,class:item._classes,attrs:{"tabindex":_vm.bodyStyle ? 0 : null},on:{"click":function($event){return _vm.rowClicked(item, itemIndex + _vm.firstItemIndex)}}},[(_vm.indexColumn)?_vm._t("index-column",[_c('td',[_vm._v("\n                  "+_vm._s(_vm.indexColumn !== 'noIndexes' ? _vm.firstItemIndex + itemIndex + 1 : '')+"\n                ")])],{"pageIndex":itemIndex,"index":_vm.firstItemIndex + itemIndex,"number":_vm.firstItemIndex + itemIndex + 1}):_vm._e(),_vm._l((_vm.rawColumnNames),function(colName,index){return [(_vm.$scopedSlots[colName])?_vm._t(colName,null,{"item":item,"index":itemIndex + _vm.firstItemIndex}):_c('td',{key:index,class:_vm.cellClass(item, colName, index)},[_vm._v("\n                "+_vm._s(item[colName])+"\n              ")])]})],2),(_vm.$scopedSlots.details)?_c('tr',{key:'details' + itemIndex,staticClass:"c-p-0",staticStyle:{"border":"none !important"}},[_c('td',{staticClass:"c-p-0",staticStyle:{"border":"none !important"},attrs:{"colspan":_vm.colspan}},[_vm._t("details",null,{"item":item,"index":itemIndex + _vm.firstItemIndex})],2)]):_vm._e()]}),(!_vm.currentItems.length)?_c('tr',[_c('td',{attrs:{"colspan":_vm.colspan}},[_vm._t("empty-table",[_c('div',{staticClass:"c-text-center c-my-5"},[_c('h2',[_vm._v(_vm._s(_vm.passedItems.length ? 'No filtering results ' : 'No items')+"\n                  "),_c('CIcon',{staticClass:"c-text-danger c-mb-2",attrs:{"width":"30","name":"ban"}})],1)])])],2)]):_vm._e()],2),(_vm.footer && _vm.currentItems.length > 3)?_c('tfoot',[_c('tr',[(_vm.indexColumn)?_c('th',{staticStyle:{"width":"40px"}}):_vm._e(),_vm._l((_vm.columnNames),function(name,index){return [_c('th',{key:index,class:[_vm.headerClass(index), _vm.sortingIconStyles],style:(_vm.headerStyles(index)),on:{"click":function($event){return _vm.changeSort(_vm.rawColumnNames[index], index)}}},[_vm._t(((_vm.rawColumnNames[index]) + "-header"),[_c('div',{staticClass:"c-d-inline"},[_vm._v(_vm._s(name))])]),(!_vm.noSorting && _vm.sortable(index))?_vm._t("sorting-icon",[_c('CIcon',{class:_vm.iconClasses(index),attrs:{"width":"18","name":"arrowTop"}})],{"state":_vm.getIconState(index)}):_vm._e()],2)]})],2)]):_vm._e(),_vm._t("caption")],2),(_vm.loading)?_c('div',{staticStyle:{"position":"absolute","left":"50%","transform":"translateX(-50%)"},style:(_vm.topLoadingPosition)},[_c('CSpinner',{staticClass:"c-spinner-border c-text-success",style:(_vm.spinnerSize),attrs:{"role":"status"}})],1):_vm._e()]),_vm._t("under-table"),(_vm.pagination)?_c('CPagination',_vm._b({directives:[{name:"show",rawName:"v-show",value:(_vm.totalPages > 1),expression:"totalPages > 1"}],attrs:{"activePage":_vm.page,"pages":_vm.totalPages},on:{"update:activePage":function($event){_vm.page=$event},"update:active-page":function($event){_vm.page=$event}}},'CPagination',typeof _vm.pagination === 'object' ? _vm.pagination : null,false)):_vm._e()],2)}
var CTablevue_type_template_id_58e33ed4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Table/CTable.vue?vue&type=template&id=58e33ed4&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("ac4d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("8a81");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("55dd");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@coreui/icons/vue/CIcon.vue?vue&type=template&id=3a958576&
var CIconvue_type_template_id_3a958576_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{style:(_vm.style),attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":_vm.viewBox},domProps:{"innerHTML":_vm._s(_vm.icon.svgContent)}})}
var CIconvue_type_template_id_3a958576_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@coreui/icons/vue/CIcon.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
/* harmony default export */ var CIconvue_type_script_lang_js_ = ({
  name: 'CIcon',
  //This object contains icons added before component registration
  icons: {},
  props: {
    name: String,
    content: [String, Array],
    fill: String,
    background: String
  },
  data: function data() {
    return {
      lineHeight: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.$el && _this.code) {
        var computedStyle = window.getComputedStyle(_this.$el, null);
        _this.lineHeight = computedStyle.getPropertyValue('line-height');
      }
    });
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
    autoDimensions: function autoDimensions() {
      var noDimensions = !this.$attrs.height && !this.$attrs.width;
      return noDimensions ? {
        height: this.lineHeight
      } : {};
    },
    style: function style() {
      return Object.assign({}, this.autoDimensions, {
        fill: this.fill || 'currentColor',
        background: this.background
      });
    }
  },
  methods: {
    toCamelCase: function toCamelCase(str) {
      return str.replace(/([-_][a-z])/ig, function ($1) {
        return $1.toUpperCase().replace('-', '');
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@coreui/icons/vue/CIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_CIconvue_type_script_lang_js_ = (CIconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@coreui/icons/vue/CIcon.vue





/* normalize component */

var CIcon_component = normalizeComponent(
  vue_CIconvue_type_script_lang_js_,
  CIconvue_type_template_id_3a958576_render,
  CIconvue_type_template_id_3a958576_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CIcon = (CIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/@coreui/icons/js/arrow-top.js
const arrowTop = ["<title>arrow-top</title><path d='M48.828 18.828l-16.828-16.828-16.828 16.828 2.829 2.828 12-12v52.248h4v-52.247l11.999 11.999 2.828-2.828z'></path>"]
// CONCATENATED MODULE: ./node_modules/@coreui/icons/js/ban.js
const ban = ["<title>ban</title><path d='M53.213 10.787c-5.429-5.429-12.929-8.787-21.213-8.787-16.569 0-30 13.431-30 30 0 8.284 3.358 15.784 8.787 21.213v0c5.429 5.429 12.929 8.787 21.213 8.787 16.569 0 30-13.431 30-30 0-8.284-3.358-15.784-8.787-21.213v0zM32 6c0.007 0 0.015 0 0.023 0 6.483 0 12.409 2.383 16.951 6.32l-0.032-0.027-36.648 36.648c-3.91-4.509-6.293-10.435-6.293-16.918 0-0.008 0-0.016 0-0.024v0.001c0-14.336 11.664-26 26-26zM32 58c-0.007 0-0.014 0-0.022 0-6.452 0-12.352-2.36-16.885-6.264l0.034 0.028 36.637-36.637c3.876 4.499 6.236 10.399 6.236 16.851 0 0.008 0 0.016 0 0.024v-0.001c0 14.336-11.664 26-26 26z'></path>"]
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Table/CTable.vue?vue&type=script&lang=js&















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var CTablevue_type_script_lang_js_CIcon = Object.assign({}, CIcon, {
  icons: {
    arrowTop: arrowTop,
    ban: ban
  }
});
/* harmony default export */ var CTablevue_type_script_lang_js_ = ({
  name: 'CTable',
  components: {
    CPagination: CPagination,
    CSpinner: CSpinner,
    CIcon: CTablevue_type_script_lang_js_CIcon
  },
  props: {
    items: Array,
    fields: Array,
    perPage: {
      type: Number,
      default: 10
    },
    activePage: Number,
    indexColumn: [Boolean, String],
    filterRow: Boolean,
    pagination: [Boolean, Object],
    addTableClasses: String,
    notResponsive: Boolean,
    noSorting: Boolean,
    small: Boolean,
    dark: Boolean,
    striped: Boolean,
    fixed: Boolean,
    hover: Boolean,
    border: Boolean,
    outlined: Boolean,
    optionsRow: [Boolean, String],
    footer: Boolean,
    defaultSorter: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    defaultTableFilter: String,
    defaultColumnFilter: Object,
    loading: Boolean
  },
  data: function data() {
    return {
      tableFilter: this.defaultTableFilter,
      columnFilter: this.defaultColumnFilter || {},
      sorter: {
        column: this.defaultSorter.column || null,
        asc: this.defaultSorter.asc || true
      },
      page: this.activePage || 1,
      perPageItems: this.perPage,
      passedItems: this.items || []
    };
  },
  computed: {
    columnFiltered: function columnFiltered() {
      var _this = this;

      var items = this.passedItems.slice();
      Object.keys(this.columnFilter).forEach(function (key) {
        items = items.filter(function (item) {
          var columnFilter = _this.columnFilter[key].toLowerCase();

          return String(item[key]).toLowerCase().includes(columnFilter);
        });
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

      var items = this.columnFiltered.slice();

      if (this.tableFilter) {
        var filter = this.tableFilter.toLowerCase();

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
      var col = this.sorter.column;

      if (!col || !this.rawColumnNames.includes(col)) {
        return this.tableFiltered;
      } //if values in column are to be sorted by numeric value they all have to be type number


      var flip = this.sorter.asc ? 1 : -1;
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
      return Object.keys(this.passedItems[0]).filter(function (el) {
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
      return ['c-table', this.addTableClasses, {
        'c-is-loading': this.loading,
        'c-table-sm': this.small,
        'c-table-dark': this.dark,
        'c-table-striped': this.striped,
        'c-b-table-fixed': this.fixed,
        'c-table-hover': this.hover,
        'c-table-bordered': this.border,
        'c-border': this.outlined
      }];
    },
    bodyStyle: function bodyStyle() {
      return {
        'cursor:pointer': this.$listeners && this.$listeners['row-clicked']
      };
    },
    sortingIconStyles: function sortingIconStyles() {
      return !this.noSorting ? 'c-position-relative c-pr-4' : '';
    },
    colspan: function colspan() {
      return this.rawColumnNames.length + (this.indexColumn ? 1 : 0);
    },
    topLoadingPosition: function topLoadingPosition() {
      var headerHeight = (this.filterRow ? 38 : 0) + (this.small ? 32 + 4 : 46 + 7);
      return "top:".concat(headerHeight, "px");
    },
    spinnerSize: function spinnerSize() {
      var size = this.small ? 1.4 : this.currentItems.length === 1 ? 2 : 3;
      return "width:".concat(size + 'rem', ";height:").concat(size + 'rem');
    },
    isFiltered: function isFiltered() {
      return this.tableFilter || Object.values(this.columnFilter).join('');
    }
  },
  watch: {
    items: function items(val, oldVal) {
      if (val.length !== oldVal.length || JSON.stringify(val) !== JSON.stringify(oldVal)) {
        this.passedItems = val;
      }
    },
    totalPages: {
      immediate: true,
      handler: function handler(val, oldVal) {
        if (val !== oldVal) {
          this.$emit('pages-change', val);
        }
      }
    }
  },
  methods: {
    changeSort: function changeSort(column, index) {
      if (index && !this.sortable(index)) {
        return;
      } //if column changed or sort was descending change asc to true


      this.sorter.asc = this.sorter.column !== column || !this.sorter.asc;
      this.sorter.column = column;
    },
    addColumnFilter: function addColumnFilter(colName, value) {
      this.$set(this.columnFilter, colName, value);
    },
    clear: function clear() {
      this.tableFilter = '';
      this.columnFilter = {};
      this.sorter.name = '';
      this.sorter.asc = true;
      var inputs = this.$el.getElementsByClassName('c-table-filter');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var input = _step.value;
          input.value = '';
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    pretifyName: function pretifyName(name) {
      return name.replace(/[-_]/g, ' ').split(' ').map(function (word) {
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
    sortable: function sortable(index) {
      return !this.noSorting && (!this.fields || !this.fields[index].noSorting);
    },
    headerClass: function headerClass(index) {
      var fields = this.fields;
      return fields && fields[index]._classes ? fields[index]._classes : '';
    },
    headerStyles: function headerStyles(index) {
      var style = '';

      if (this.sortable(index)) {
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
      var direction = this.sorter.asc ? 'asc' : 'desc';
      return this.rawColumnNames[index] === this.sorter.column ? direction : 0;
    },
    iconClasses: function iconClasses(index) {
      var state = this.getIconState(index);
      return ['c-icon-transition c-position-absolute c-arrow-position', {
        'c-transparent': !state,
        'c-rotate-icon': state === 'desc'
      }];
    },
    paginationChange: function paginationChange(e) {
      this.$emit('pagination-change', e.target.value);
      this.perPageItems = Number(e.target.value);
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Table/CTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var Table_CTablevue_type_script_lang_js_ = (CTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./tmp/components/Table/CTable.vue?vue&type=style&index=0&id=58e33ed4&scoped=true&lang=css&
var CTablevue_type_style_index_0_id_58e33ed4_scoped_true_lang_css_ = __webpack_require__("6afe");

// CONCATENATED MODULE: ./tmp/components/Table/CTable.vue






/* normalize component */

var CTable_component = normalizeComponent(
  Table_CTablevue_type_script_lang_js_,
  CTablevue_type_template_id_58e33ed4_scoped_true_render,
  CTablevue_type_template_id_58e33ed4_scoped_true_staticRenderFns,
  false,
  null,
  "58e33ed4",
  null
  
)

/* harmony default export */ var CTable = (CTable_component.exports);
// CONCATENATED MODULE: ./tmp/components/Table/index.js


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Tabs/CTab.vue?vue&type=script&lang=js&
/* harmony default export */ var CTabvue_type_script_lang_js_ = ({
  name: 'CTab',
  props: {
    active: Boolean,
    disabled: Boolean
  },
  render: function render(h) {
    return h(false);
  }
});
// CONCATENATED MODULE: ./tmp/components/Tabs/CTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tabs_CTabvue_type_script_lang_js_ = (CTabvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Tabs/CTab.vue
var CTab_render, CTab_staticRenderFns




/* normalize component */

var CTab_component = normalizeComponent(
  Tabs_CTabvue_type_script_lang_js_,
  CTab_render,
  CTab_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CTab = (CTab_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Tabs/CTabs.vue?vue&type=template&id=102a85ad&
var CTabsvue_type_template_id_102a85ad_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.tabsClasses},[_c('div',{class:_vm.navWrapperClasses},[_c('ul',{class:_vm.navClasses},_vm._l((_vm.ctabInstances),function(tab,key){return _c('CTabNav',_vm._b({key:key,attrs:{"customTitleSlot":tab.$scopedSlots.title,"active":tab === _vm.activeTab,"disabled":tab.disabled},nativeOn:{"click":function($event){return _vm.tabClick(tab)}}},'CTabNav',tab.$attrs,false))}),1)]),_c('div',{class:[_vm.addTabsWrapperClasses, _vm.gridClasses.content]},[_c('div',{class:['c-tab-content', _vm.addTabsClasses]},[_c('transition',{attrs:{"name":_vm.noFade ? null : 'fade',"mode":"out-in"}},[_c('KeepAlive',[_vm._l((_vm.ctabInstances),function(tab,key){return [(_vm.activeTab === tab)?_c('CTabContent',{key:key,class:[_vm.addTabClasses, 'c-tab-pane c-active'],attrs:{"content":tab.$scopedSlots.default}}):_vm._e()]})],2)],1)],1)]),_vm._t("default")],2)}
var CTabsvue_type_template_id_102a85ad_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Tabs/CTabs.vue?vue&type=template&id=102a85ad&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Tabs/CTabNav.vue?vue&type=script&lang=js&


/* harmony default export */ var CTabNavvue_type_script_lang_js_ = ({
  name: 'CTabNav',
  props: Object.assign(propsFactory(), {
    titleHtml: String,
    customTitleSlot: Function
  }),
  render: function render(h) {
    return h('li', {
      staticClass: 'c-nav-item '
    }, [h(CLink, {
      staticClass: 'c-nav-link',
      class: {
        'c-active': this.active
      },
      props: this.props,
      domProps: this.titleHtml ? {
        innerHTML: this.titleHtml
      } : null
    }, this.customTitleSlot ? this.customTitleSlot() : null)]);
  }
});
// CONCATENATED MODULE: ./tmp/components/Tabs/CTabNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tabs_CTabNavvue_type_script_lang_js_ = (CTabNavvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Tabs/CTabNav.vue
var CTabNav_render, CTabNav_staticRenderFns




/* normalize component */

var CTabNav_component = normalizeComponent(
  Tabs_CTabNavvue_type_script_lang_js_,
  CTabNav_render,
  CTabNav_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CTabNav = (CTabNav_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Tabs/CTabContent.vue?vue&type=script&lang=js&
/* harmony default export */ var CTabContentvue_type_script_lang_js_ = ({
  name: 'CTabContent',
  props: {
    content: Function
  },
  render: function render(h) {
    return h('div', this.content ? this.content() : '');
  }
});
// CONCATENATED MODULE: ./tmp/components/Tabs/CTabContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tabs_CTabContentvue_type_script_lang_js_ = (CTabContentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Tabs/CTabContent.vue
var CTabContent_render, CTabContent_staticRenderFns




/* normalize component */

var CTabContent_component = normalizeComponent(
  Tabs_CTabContentvue_type_script_lang_js_,
  CTabContent_render,
  CTabContent_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CTabContent = (CTabContent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Tabs/CTabs.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    pills: Boolean,
    tabs: {
      type: Boolean,
      default: true
    },
    noFade: Boolean,
    vertical: [Boolean, Number, String],
    addNavWrapperClasses: [String, Array],
    addNavClasses: [String, Array],
    addTabsWrapperClasses: [String, Array],
    addTabsClasses: [String, Array],
    addTabClasses: [String, Array]
  },
  data: function data() {
    return {
      defaultSlotNodes: null,
      activatedTab: null
    };
  },
  computed: {
    tabsClasses: function tabsClasses() {
      return {
        'c-row c-no-gutters': this.vertical
      };
    },
    navWrapperClasses: function navWrapperClasses() {
      return [this.addNavWrapperClasses, this.gridClasses.navs];
    },
    navClasses: function navClasses() {
      return [this.addNavClasses, {
        'c-nav': true,
        'c-nav-tabs': this.tabs && !this.pills,
        'c-nav-pills': this.pills,
        'c-flex-column': this.vertical,
        'c-nav-fill': this.fill,
        'c-nav-justified': this.justified,
        'c-h-100': this.vertical
      }];
    },
    activeTab: function activeTab() {
      return this.activatedTab || this.ctabInstances.filter(function (el) {
        return el.active;
      })[0];
    },
    gridClasses: function gridClasses() {
      var cols = this.vertical === true ? 6 : this.vertical;
      return cols ? {
        navs: "c-col-sm-".concat(cols),
        content: "c-col-sm-".concat(12 - cols)
      } : {};
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
// CONCATENATED MODULE: ./tmp/components/Tabs/CTabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tabs_CTabsvue_type_script_lang_js_ = (CTabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./tmp/components/Tabs/CTabs.vue?vue&type=style&index=0&lang=scss&
var CTabsvue_type_style_index_0_lang_scss_ = __webpack_require__("12ee");

// CONCATENATED MODULE: ./tmp/components/Tabs/CTabs.vue






/* normalize component */

var CTabs_component = normalizeComponent(
  Tabs_CTabsvue_type_script_lang_js_,
  CTabsvue_type_template_id_102a85ad_render,
  CTabsvue_type_template_id_102a85ad_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CTabs = (CTabs_component.exports);
// CONCATENATED MODULE: ./tmp/components/Tabs/index.js



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Toast/CToast.vue?vue&type=template&id=68a52dc3&
var CToastvue_type_template_id_68a52dc3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.isClosed)?_c('transition',{attrs:{"name":0 ? undefined : 'fade',"appear":true}},[_c('div',{class:[_vm.toastClasses],staticStyle:{"z-index":"1100"},style:(_vm.computedStyles),attrs:{"role":"alert","aria-live":"assertive","aria-atomic":"true"}},[(!_vm.props.noHeader)?_c('div',{staticClass:"c-toast-header"},[_c('strong',{staticClass:"c-mr-auto",domProps:{"innerHTML":_vm._s(_vm.props.titleHtml)}}),(!_vm.props.noCloseButton)?_c('CButtonClose',{staticClass:"c-ml-2 c-mb-1",on:{"click":function($event){return _vm.close()}}}):_vm._e()],1):_vm._e(),_vm._t("default",[_c('div',{staticClass:"c-toast-body",domProps:{"innerHTML":_vm._s(_vm.props.bodyHtml)}})],{"close":_vm.close})],2)]):_vm._e()}
var CToastvue_type_template_id_68a52dc3_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Toast/CToast.vue?vue&type=template&id=68a52dc3&

// CONCATENATED MODULE: ./tmp/components/Toast/toastMixin.js



/* harmony default export */ var toastMixin = ({
  props: {
    position: {
      type: String,
      default: 'top-right',
      validator: function validator(position) {
        return ['static', 'top-right', 'top-left', 'top-center', 'top-full', 'bottom-right', 'bottom-left', 'bottom-center', 'bottom-full'].includes(position);
      }
    },
    show: Boolean,
    autohide: Number,
    noHeader: Boolean,
    titleHtml: {
      type: String,
      default: 'CToast component'
    },
    bodyHtml: {
      type: String,
      default: 'Hello, world! This is a <b>toast</b> message.'
    },
    noCloseButton: Boolean
  },
  computed: {
    computedStyles: function computedStyles() {
      var position = this.props ? this.props.position : this.position;

      if (position !== 'static' && !this.toaster) {
        return [{
          position: 'fixed'
        }, this.getVerticalPosition(this.position), this.getHorizontalPosition(this.position)];
      }
    }
  },
  methods: {
    getVerticalPosition: function getVerticalPosition(position) {
      if (position.includes('bottom')) {
        return {
          bottom: 0
        };
      } else {
        return {
          top: 0
        };
      }
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Toast/CToast.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [toastMixin],
  components: {
    CButtonClose: CButtonClose
  },
  inject: {
    toaster: {
      default: false
    }
  },
  data: function data() {
    return {
      isClosed: false,
      timeout: null
    };
  },
  mounted: function mounted() {
    if (this.props.autohide) {
      this.setAutohide();
    }
  },
  computed: {
    toastClasses: function toastClasses() {
      return ['c-toast', {
        'c-show': this.props.show,
        'c-full': this.props.position.includes('full')
      }];
    },
    props: function props() {
      var _this = this;

      return Object.keys(toastMixin.props).reduce(function (props, key) {
        var propUndefined = !Object.keys(_this.$options.propsData).includes(key);
        var propInheritedFromToaster = propUndefined && _this.toaster.props[key];
        props[key] = propInheritedFromToaster ? _this.toaster.props[key] : _this[key];
        return props;
      }, {});
    }
  },
  methods: {
    close: function close() {
      this.isClosed = true;
      this.$el.removeEventListener('mouseover', this.onHover);
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
      var _this2 = this;

      this.timeout = setTimeout(function () {
        _this2.close();
      }, this.props.autohide);
      this.$el.addEventListener('mouseover', this.onHover);
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Toast/CToast.vue?vue&type=script&lang=js&
 /* harmony default export */ var Toast_CToastvue_type_script_lang_js_ = (CToastvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./tmp/components/Toast/CToast.vue?vue&type=style&index=0&lang=scss&
var CToastvue_type_style_index_0_lang_scss_ = __webpack_require__("71c10");

// CONCATENATED MODULE: ./tmp/components/Toast/CToast.vue






/* normalize component */

var CToast_component = normalizeComponent(
  Toast_CToastvue_type_script_lang_js_,
  CToastvue_type_template_id_68a52dc3_render,
  CToastvue_type_template_id_68a52dc3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CToast = (CToast_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Toast/CToaster.vue?vue&type=template&id=1fa9abf2&
var CToastervue_type_template_id_1fa9abf2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.toasterClasses,style:(_vm.computedStyles)},[_vm._t("default")],2)}
var CToastervue_type_template_id_1fa9abf2_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Toast/CToaster.vue?vue&type=template&id=1fa9abf2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Toast/CToaster.vue?vue&type=script&lang=js&
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
  mixins: [toastMixin],
  props: {
    reverse: Boolean
  },
  computed: {
    toasterClasses: function toasterClasses() {
      return ['c-toaster', {
        'c-d-flex c-flex-column-reverse': this.reverse
      }];
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Toast/CToaster.vue?vue&type=script&lang=js&
 /* harmony default export */ var Toast_CToastervue_type_script_lang_js_ = (CToastervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./tmp/components/Toast/CToaster.vue?vue&type=style&index=0&lang=scss&
var CToastervue_type_style_index_0_lang_scss_ = __webpack_require__("c2cb");

// CONCATENATED MODULE: ./tmp/components/Toast/CToaster.vue






/* normalize component */

var CToaster_component = normalizeComponent(
  Toast_CToastervue_type_script_lang_js_,
  CToastervue_type_template_id_1fa9abf2_render,
  CToastervue_type_template_id_1fa9abf2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CToaster = (CToaster_component.exports);
// CONCATENATED MODULE: ./tmp/components/Toast/index.js



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Widgets/CWidgetProgress.vue?vue&type=template&id=239b8ec6&functional=true&
var CWidgetProgressvue_type_template_id_239b8ec6_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('div',{class:_vm.props.inverse ? ("c-card c-text-white c-bg-" + (_vm.props.variant)) : 'c-card'},[_c('div',{staticClass:"c-card-body"},[_c('div',{staticClass:"c-h4 c-m-0"},[_vm._v(_vm._s(_vm.props.header))]),_c('div',[_vm._v(_vm._s(_vm.props.text))]),_vm._t("default",[_c('CProgress',{staticClass:"c-progress-xs c-my-3 c-mb-0",class:_vm.props.inverse ? 'c-progress-white' : '',attrs:{"variant":!_vm.props.inverse ? _vm.props.variant : '',"value":_vm.props.value}})]),_c('small',{staticClass:"c-text-muted"},[_vm._v("\n      "+_vm._s(_vm.props.footer)+"\n    ")])],2)])}
var CWidgetProgressvue_type_template_id_239b8ec6_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Widgets/CWidgetProgress.vue?vue&type=template&id=239b8ec6&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Widgets/CWidgetProgress.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
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
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    },
    footer: {
      type: String,
      default: 'footer:string'
    },
    variant: String,
    inverse: Boolean,
    value: {
      type: Number,
      default: 25
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Widgets/CWidgetProgress.vue?vue&type=script&lang=js&
 /* harmony default export */ var Widgets_CWidgetProgressvue_type_script_lang_js_ = (CWidgetProgressvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Widgets/CWidgetProgress.vue





/* normalize component */

var CWidgetProgress_component = normalizeComponent(
  Widgets_CWidgetProgressvue_type_script_lang_js_,
  CWidgetProgressvue_type_template_id_239b8ec6_functional_true_render,
  CWidgetProgressvue_type_template_id_239b8ec6_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var CWidgetProgress = (CWidgetProgress_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Widgets/CWidgetIcon.vue?vue&type=template&id=e8beb890&
var CWidgetIconvue_type_template_id_e8beb890_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-card"},[_c('div',{staticClass:"c-card-body c-clearfix c-d-flex c-align-items-center",class:_vm.noPadding ? 'c-p-0' : 'c-p-3'},[_c('div',{staticClass:"c-float-left c-mr-3 c-text-white",class:[("c-bg-" + _vm.variant), _vm.noPadding ? 'c-p-4' : 'c-p-3']},[_vm._t("default")],2),_c('div',[_c('div',{class:("c-text-value c-text-" + _vm.variant)},[_vm._v("\n        "+_vm._s(_vm.header)+"\n      ")]),_c('div',{staticClass:"c-text-muted c-text-uppercase c-font-weight-bold c-small"},[_vm._v("\n        "+_vm._s(_vm.text)+"\n      ")])])]),(_vm.link || _vm.$slots.link)?_c('div',{staticClass:"c-card-footer c-px-3 c-py-2"},[_vm._t("link",[_c('CLink',{staticClass:"c-font-weight-bold c-font-xs c-btn-block c-text-muted",attrs:{"href":_vm.link}},[_vm._v("\n        "+_vm._s(_vm.linkText)+"\n        "),_c('CIcon',{staticClass:"c-float-right",attrs:{"name":"arrowRight","width":"16"}})],1)])],2):_vm._e()])}
var CWidgetIconvue_type_template_id_e8beb890_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Widgets/CWidgetIcon.vue?vue&type=template&id=e8beb890&

// CONCATENATED MODULE: ./node_modules/@coreui/icons/js/arrow-right.js
const arrowRight = ["<title>arrow-right</title><path d='M44.984 15.172l-2.828 2.828 12 12-52.155 0v4h52.155l-11.999 11.999 2.828 2.828 16.828-16.828-16.828-16.828z'></path>"]
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Widgets/CWidgetIcon.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var CWidgetIconvue_type_script_lang_js_CIcon = Object.assign({}, CIcon, {
  icons: {
    arrowRight: arrowRight
  }
});
/* harmony default export */ var CWidgetIconvue_type_script_lang_js_ = ({
  name: 'CWidgetIcon',
  components: {
    CLink: CLink,
    CIcon: CWidgetIconvue_type_script_lang_js_CIcon
  },
  props: {
    addIconClasses: String,
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    },
    linkText: {
      type: String,
      default: 'View More'
    },
    link: String,
    noPadding: Boolean,
    variant: {
      type: String,
      default: 'primary'
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Widgets/CWidgetIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var Widgets_CWidgetIconvue_type_script_lang_js_ = (CWidgetIconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Widgets/CWidgetIcon.vue





/* normalize component */

var CWidgetIcon_component = normalizeComponent(
  Widgets_CWidgetIconvue_type_script_lang_js_,
  CWidgetIconvue_type_template_id_e8beb890_render,
  CWidgetIconvue_type_template_id_e8beb890_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CWidgetIcon = (CWidgetIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Widgets/CWidgetSocial.vue?vue&type=template&id=9966d274&functional=true&
var CWidgetSocialvue_type_template_id_9966d274_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('div',{staticClass:"c-card"},[_c('div',{staticClass:"c-card-header c-content-center c-text-white c-p-0",class:[("c-bg-" + (_vm.props.variant)), _vm.props.addHeaderClasses]},[_vm._t("default")],2),_c('div',{staticClass:"c-card-body c-row c-text-center"},[_c('div',{staticClass:"c-col"},[_c('div',{staticClass:"c-text-value-lg"},[_vm._v("\n        "+_vm._s(_vm.props.rightHeader)+"\n      ")]),_c('div',{staticClass:"c-text-uppercase c-text-muted c-small"},[_vm._v("\n        "+_vm._s(_vm.props.rightFooter)+"\n      ")])]),_c('div',{staticClass:"c-vr"}),_c('div',{staticClass:"c-col"},[_c('div',{staticClass:"c-text-value-lg"},[_vm._v("\n        "+_vm._s(_vm.props.leftHeader)+"\n      ")]),_c('div',{staticClass:"c-text-uppercase c-text-muted c-small"},[_vm._v("\n        "+_vm._s(_vm.props.leftFooter)+"\n      ")])])])])}
var CWidgetSocialvue_type_template_id_9966d274_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Widgets/CWidgetSocial.vue?vue&type=template&id=9966d274&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Widgets/CWidgetSocial.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CWidgetSocialvue_type_script_lang_js_ = ({
  name: 'CWidgetSocial',
  props: {
    variant: String,
    rightHeader: {
      type: String,
      default: 'rightHeader:string'
    },
    rightFooter: {
      type: String,
      default: 'rightFooter:string'
    },
    leftHeader: {
      type: String,
      default: 'leftHeader:string'
    },
    leftFooter: {
      type: String,
      default: 'leftFooter:string'
    },
    addHeaderClasses: String
  }
});
// CONCATENATED MODULE: ./tmp/components/Widgets/CWidgetSocial.vue?vue&type=script&lang=js&
 /* harmony default export */ var Widgets_CWidgetSocialvue_type_script_lang_js_ = (CWidgetSocialvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Widgets/CWidgetSocial.vue





/* normalize component */

var CWidgetSocial_component = normalizeComponent(
  Widgets_CWidgetSocialvue_type_script_lang_js_,
  CWidgetSocialvue_type_template_id_9966d274_functional_true_render,
  CWidgetSocialvue_type_template_id_9966d274_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var CWidgetSocial = (CWidgetSocial_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Widgets/CWidgetProgressIcon.vue?vue&type=template&id=7e50fc2a&functional=true&
var CWidgetProgressIconvue_type_template_id_7e50fc2a_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('div',{class:_vm.props.inverse ? ("c-card c-text-white c-bg-" + (_vm.props.variant)) : 'c-card'},[_c('div',{staticClass:"c-card-body"},[(_vm.$slots.default)?_c('div',{staticClass:"c-h1 c-text-muted c-text-right c-mb-4"},[_vm._t("default")],2):_vm._e(),_c('div',{staticClass:"c-h4 c-mb-0"},[_vm._v(_vm._s(_vm.props.header))]),_c('small',{staticClass:"c-text-muted c-text-uppercase c-font-weight-bold"},[_vm._v("\n      "+_vm._s(_vm.props.text)+"\n    ")]),_vm._t("progress",[_c('CProgress',{staticClass:"c-progress-xs c-my-3 c-mb-0",class:_vm.props.inverse ? 'c-progress-white' : '',attrs:{"variant":!_vm.props.inverse ? _vm.props.variant : '',"value":_vm.props.value}})])],2)])}
var CWidgetProgressIconvue_type_template_id_7e50fc2a_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Widgets/CWidgetProgressIcon.vue?vue&type=template&id=7e50fc2a&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Widgets/CWidgetProgressIcon.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    iconClasses: String,
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    },
    variant: String,
    inverse: Boolean,
    value: {
      type: Number,
      default: 25
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Widgets/CWidgetProgressIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var Widgets_CWidgetProgressIconvue_type_script_lang_js_ = (CWidgetProgressIconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Widgets/CWidgetProgressIcon.vue





/* normalize component */

var CWidgetProgressIcon_component = normalizeComponent(
  Widgets_CWidgetProgressIconvue_type_script_lang_js_,
  CWidgetProgressIconvue_type_template_id_7e50fc2a_functional_true_render,
  CWidgetProgressIconvue_type_template_id_7e50fc2a_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var CWidgetProgressIcon = (CWidgetProgressIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Widgets/CWidgetDropdown.vue?vue&type=template&id=1681d73e&functional=true&
var CWidgetDropdownvue_type_template_id_1681d73e_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('div',{staticClass:"c-card",class:("c-bg-" + (_vm.props.variant))},[_c('div',{staticClass:"c-card-body c-pb-0"},[_vm._t("dropdown"),_c('h4',{staticClass:"c-mb-0"},[_vm._v(_vm._s(_vm.props.header))]),_c('p',[_vm._v(_vm._s(_vm.props.text))])],2),_vm._t("default")],2)}
var CWidgetDropdownvue_type_template_id_1681d73e_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Widgets/CWidgetDropdown.vue?vue&type=template&id=1681d73e&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Widgets/CWidgetDropdown.vue?vue&type=script&lang=js&
//
//
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
    variant: {
      type: String,
      default: 'primary'
    },
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Widgets/CWidgetDropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var Widgets_CWidgetDropdownvue_type_script_lang_js_ = (CWidgetDropdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Widgets/CWidgetDropdown.vue





/* normalize component */

var CWidgetDropdown_component = normalizeComponent(
  Widgets_CWidgetDropdownvue_type_script_lang_js_,
  CWidgetDropdownvue_type_template_id_1681d73e_functional_true_render,
  CWidgetDropdownvue_type_template_id_1681d73e_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var CWidgetDropdown = (CWidgetDropdown_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Widgets/CWidgetSmallText.vue?vue&type=template&id=762340c8&functional=true&
var CWidgetSmallTextvue_type_template_id_762340c8_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('div',{staticClass:"c-card",class:("c-bg-" + (_vm.props.variant))},[_c('div',{staticClass:"c-card-header"},[_c('div',{staticClass:"c-font-weight-bold"},[_c('span',[_vm._v(_vm._s(_vm.props.rightHeader))]),_c('span',{staticClass:"c-float-right"},[_vm._v(_vm._s(_vm.props.leftHeader))])]),_c('div',[_c('span',[_c('small',[_vm._v(_vm._s(_vm.props.rightFooter))])]),_c('span',{staticClass:"c-float-right"},[_c('small',[_vm._v(_vm._s(_vm.props.leftFooter))])])]),_vm._t("default")],2)])}
var CWidgetSmallTextvue_type_template_id_762340c8_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Widgets/CWidgetSmallText.vue?vue&type=template&id=762340c8&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Widgets/CWidgetSmallText.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CWidgetSmallTextvue_type_script_lang_js_ = ({
  name: 'CWidgetSmallText',
  props: {
    variant: {
      type: String,
      default: 'primary'
    },
    rightHeader: {
      type: String,
      default: 'rightHeader:string'
    },
    rightFooter: {
      type: String,
      default: 'rightFooter:string'
    },
    leftHeader: {
      type: String,
      default: 'leftHeader:string'
    },
    leftFooter: {
      type: String,
      default: 'leftFooter:string'
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Widgets/CWidgetSmallText.vue?vue&type=script&lang=js&
 /* harmony default export */ var Widgets_CWidgetSmallTextvue_type_script_lang_js_ = (CWidgetSmallTextvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Widgets/CWidgetSmallText.vue





/* normalize component */

var CWidgetSmallText_component = normalizeComponent(
  Widgets_CWidgetSmallTextvue_type_script_lang_js_,
  CWidgetSmallTextvue_type_template_id_762340c8_functional_true_render,
  CWidgetSmallTextvue_type_template_id_762340c8_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var CWidgetSmallText = (CWidgetSmallText_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2e9d39f8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Widgets/CWidgetSimple.vue?vue&type=template&id=713ac81d&functional=true&
var CWidgetSimplevue_type_template_id_713ac81d_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('div',{staticClass:"c-card"},[_c('div',{staticClass:"c-card-body c-text-center"},[_c('div',{staticClass:"c-text-muted c-small c-text-uppercase c-font-weight-bold"},[_vm._v("\n      "+_vm._s(_vm.props.header)+"\n    ")]),_c('div',{staticClass:"c-h2 c-py-3"},[_vm._v(_vm._s(_vm.props.text))]),_vm._t("default")],2)])}
var CWidgetSimplevue_type_template_id_713ac81d_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./tmp/components/Widgets/CWidgetSimple.vue?vue&type=template&id=713ac81d&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tmp/components/Widgets/CWidgetSimple.vue?vue&type=script&lang=js&
//
//
//
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
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    }
  }
});
// CONCATENATED MODULE: ./tmp/components/Widgets/CWidgetSimple.vue?vue&type=script&lang=js&
 /* harmony default export */ var Widgets_CWidgetSimplevue_type_script_lang_js_ = (CWidgetSimplevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./tmp/components/Widgets/CWidgetSimple.vue





/* normalize component */

var CWidgetSimple_component = normalizeComponent(
  Widgets_CWidgetSimplevue_type_script_lang_js_,
  CWidgetSimplevue_type_template_id_713ac81d_functional_true_render,
  CWidgetSimplevue_type_template_id_713ac81d_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var CWidgetSimple = (CWidgetSimple_component.exports);
// CONCATENATED MODULE: ./tmp/components/Widgets/index.js








// CONCATENATED MODULE: ./tmp/components/index.js































// CONCATENATED MODULE: ./node_modules/tooltip.js/dist/esm/tooltip.js
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.3.2
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
   * @param {String} options.arrowSelector='.tooltip-arrow, .tooltip__arrow' - className used to locate the DOM arrow element in the tooltip.
   * @param {String} options.innerSelector='.tooltip-inner, .tooltip__inner' - className used to locate the DOM inner element in the tooltip.
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
        // if title is a function, call it and set textContent or innerHtml depending by `allowHtml` value
        var titleText = title.call(reference);
        allowHtml ? titleNode.innerHTML = titleText : titleNode.textContent = titleText;
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
          offset: options.offset
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

// CONCATENATED MODULE: ./tmp/directives/CPopover.js





/* harmony default export */ var CPopover = ({
  name: 'c-popover',
  tooltip: null,
  inserted: function inserted(el, binding) {
    var tooltip = new esm_tooltip(el, binding.def.getTooltipConfig(binding));
    binding.def._tooltip = tooltip;
    if (binding.value.active) tooltip.show();
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
    var title = props.content || 'content';
    var modifiersTriggers = String(Object.keys(binding.modifiers)).replace(',', ' ');
    var closeOnClickOutside = props.closeOnClickOutside === false ? false : true;
    var html = props.html === false ? false : true;
    return {
      title: title,
      trigger: modifiersTriggers || props.trigger || 'hover',
      html: html,
      placement: props.placement || 'right',
      delay: props.delay || 0,
      offset: props.offset || 0,
      arrowSelector: '.c-arrow',
      innerSelector: '.c-popover-body',
      //passed by extension
      template: binding.def.getTemplate(props.header),
      //passed by extension
      boundariesElement: document.getElementById(props.boundaries) || props.boundaries,
      container: props.appendToBody ? document.body : false,
      closeOnClickOutside: closeOnClickOutside,
      popperOptions: props.popperOptions
    };
  },
  getTemplate: function getTemplate(header) {
    return "<div class=\"c-popover c-bs-popover-auto c-fade c-show\" role=\"tooltip\">\n              <div class=\"c-arrow\"></div>\n              <h3 class=\"c-popover-header\">".concat(header || 'header', "</h3>\n              <div class=\"c-popover-body\"></div>\n            </div>");
  }
});
// CONCATENATED MODULE: ./tmp/directives/CTooltip.js





/* harmony default export */ var CTooltip = ({
  name: 'c-tooltip',
  inserted: function inserted(el, binding) {
    binding.def._tooltip = new esm_tooltip(el, binding.def.getTooltipConfig(binding));
    if (binding.value.active) binding.def._tooltip.show();
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
    var modifiersTriggers = String(Object.keys(binding.modifiers)).replace(',', ' ');
    var closeOnClickOutside = props.closeOnClickOutside === false ? false : true;
    return {
      title: title,
      trigger: modifiersTriggers || props.trigger || 'hover',
      html: true,
      placement: props.placement || 'top',
      delay: props.delay || 0,
      offset: props.offset || 0,
      arrowSelector: '.c-arrow',
      innerSelector: '.c-tooltip-inner',
      template: binding.def.getTemplate(),
      boundariesElement: document.getElementById(props.boundaries) || props.boundaries,
      container: props.appendToBody ? document.body : false,
      closeOnClickOutside: closeOnClickOutside,
      popperOptions: props.popperOptions
    };
  },
  getTemplate: function getTemplate() {
    return "<div class=\"c-tooltip c-bs-tooltip-auto c-fade c-show\" role=\"tooltip\">\n              <div class=\"c-arrow\"></div>\n              <div class=\"c-tooltip-inner\"></div>\n            </div>";
  }
});
// CONCATENATED MODULE: ./tmp/directives/index.js



// CONCATENATED MODULE: ./tmp/index.js


var CoreuiVue = {
  install: function install(Vue) {
    for (var plugin in components_namespaceObject) {
      Vue.component(plugin, components_namespaceObject[plugin]);
    }

    for (var directive in directives_namespaceObject) {
      Vue.directive(directive, directives_namespaceObject[directive]);
    }
  }
}; // Export library

/* harmony default export */ var tmp = (CoreuiVue); //Export components


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
/* concated harmony reexport CCardGroup */__webpack_require__.d(__webpack_exports__, "CCardGroup", function() { return CCardGroup; });
/* concated harmony reexport CCard */__webpack_require__.d(__webpack_exports__, "CCard", function() { return CCard; });
/* concated harmony reexport CCardBody */__webpack_require__.d(__webpack_exports__, "CCardBody", function() { return CCardBody; });
/* concated harmony reexport CCardFooter */__webpack_require__.d(__webpack_exports__, "CCardFooter", function() { return CCardFooter; });
/* concated harmony reexport CCardHeader */__webpack_require__.d(__webpack_exports__, "CCardHeader", function() { return CCardHeader; });
/* concated harmony reexport CCollapse */__webpack_require__.d(__webpack_exports__, "CCollapse", function() { return CCollapse; });
/* concated harmony reexport CDropdown */__webpack_require__.d(__webpack_exports__, "CDropdown", function() { return CDropdown; });
/* concated harmony reexport CDropdownHeader */__webpack_require__.d(__webpack_exports__, "CDropdownHeader", function() { return CDropdownHeader; });
/* concated harmony reexport CDropdownDivider */__webpack_require__.d(__webpack_exports__, "CDropdownDivider", function() { return CDropdownDivider; });
/* concated harmony reexport CDropdownItem */__webpack_require__.d(__webpack_exports__, "CDropdownItem", function() { return CDropdownItem; });
/* concated harmony reexport CEmbed */__webpack_require__.d(__webpack_exports__, "CEmbed", function() { return CEmbed; });
/* concated harmony reexport CFooter */__webpack_require__.d(__webpack_exports__, "CFooter", function() { return CFooter; });
/* concated harmony reexport CForm */__webpack_require__.d(__webpack_exports__, "CForm", function() { return CForm; });
/* concated harmony reexport CFormGroup */__webpack_require__.d(__webpack_exports__, "CFormGroup", function() { return CFormGroup; });
/* concated harmony reexport CFormInput */__webpack_require__.d(__webpack_exports__, "CFormInput", function() { return CFormInput; });
/* concated harmony reexport CFormCheckbox */__webpack_require__.d(__webpack_exports__, "CFormCheckbox", function() { return CFormCheckbox; });
/* concated harmony reexport CFormFile */__webpack_require__.d(__webpack_exports__, "CFormFile", function() { return CFormFile; });
/* concated harmony reexport CFormTextarea */__webpack_require__.d(__webpack_exports__, "CFormTextarea", function() { return CFormTextarea; });
/* concated harmony reexport CFormSelect */__webpack_require__.d(__webpack_exports__, "CFormSelect", function() { return CFormSelect; });
/* concated harmony reexport CFormRadio */__webpack_require__.d(__webpack_exports__, "CFormRadio", function() { return CFormRadio; });
/* concated harmony reexport CContainer */__webpack_require__.d(__webpack_exports__, "CContainer", function() { return CContainer; });
/* concated harmony reexport CRow */__webpack_require__.d(__webpack_exports__, "CRow", function() { return CRow; });
/* concated harmony reexport CCol */__webpack_require__.d(__webpack_exports__, "CCol", function() { return CCol; });
/* concated harmony reexport CHeader */__webpack_require__.d(__webpack_exports__, "CHeader", function() { return CHeader; });
/* concated harmony reexport CImage */__webpack_require__.d(__webpack_exports__, "CImage", function() { return CImage; });
/* concated harmony reexport CImageLazy */__webpack_require__.d(__webpack_exports__, "CImageLazy", function() { return CImageLazy; });
/* concated harmony reexport CJumbotron */__webpack_require__.d(__webpack_exports__, "CJumbotron", function() { return CJumbotron; });
/* concated harmony reexport CLink */__webpack_require__.d(__webpack_exports__, "CLink", function() { return CLink; });
/* concated harmony reexport CListGroup */__webpack_require__.d(__webpack_exports__, "CListGroup", function() { return CListGroup; });
/* concated harmony reexport CListGroupItem */__webpack_require__.d(__webpack_exports__, "CListGroupItem", function() { return CListGroupItem; });
/* concated harmony reexport CMedia */__webpack_require__.d(__webpack_exports__, "CMedia", function() { return CMedia; });
/* concated harmony reexport CModal */__webpack_require__.d(__webpack_exports__, "CModal", function() { return CModal; });
/* concated harmony reexport CNav */__webpack_require__.d(__webpack_exports__, "CNav", function() { return CNav; });
/* concated harmony reexport CNavItem */__webpack_require__.d(__webpack_exports__, "CNavItem", function() { return CNavItem; });
/* concated harmony reexport CNavbar */__webpack_require__.d(__webpack_exports__, "CNavbar", function() { return CNavbar; });
/* concated harmony reexport CNavbarNav */__webpack_require__.d(__webpack_exports__, "CNavbarNav", function() { return CNavbarNav; });
/* concated harmony reexport CNavbarToggle */__webpack_require__.d(__webpack_exports__, "CNavbarToggle", function() { return CNavbarToggle; });
/* concated harmony reexport CNavbarBrand */__webpack_require__.d(__webpack_exports__, "CNavbarBrand", function() { return CNavbarBrand; });
/* concated harmony reexport CPagination */__webpack_require__.d(__webpack_exports__, "CPagination", function() { return CPagination; });
/* concated harmony reexport CProgress */__webpack_require__.d(__webpack_exports__, "CProgress", function() { return CProgress; });
/* concated harmony reexport CProgressBar */__webpack_require__.d(__webpack_exports__, "CProgressBar", function() { return CProgressBar; });
/* concated harmony reexport CSidebar */__webpack_require__.d(__webpack_exports__, "CSidebar", function() { return CSidebar; });
/* concated harmony reexport CSidebarFooter */__webpack_require__.d(__webpack_exports__, "CSidebarFooter", function() { return CSidebarFooter; });
/* concated harmony reexport CSidebarForm */__webpack_require__.d(__webpack_exports__, "CSidebarForm", function() { return CSidebarForm; });
/* concated harmony reexport CSidebarHeader */__webpack_require__.d(__webpack_exports__, "CSidebarHeader", function() { return CSidebarHeader; });
/* concated harmony reexport CSidebarMinimizer */__webpack_require__.d(__webpack_exports__, "CSidebarMinimizer", function() { return CSidebarMinimizer; });
/* concated harmony reexport CSidebarNav */__webpack_require__.d(__webpack_exports__, "CSidebarNav", function() { return CSidebarNav; });
/* concated harmony reexport CSidebarNavItems */__webpack_require__.d(__webpack_exports__, "CSidebarNavItems", function() { return CSidebarNavItems; });
/* concated harmony reexport CSidebarNavDivider */__webpack_require__.d(__webpack_exports__, "CSidebarNavDivider", function() { return CSidebarNavDivider; });
/* concated harmony reexport CSidebarNavItem */__webpack_require__.d(__webpack_exports__, "CSidebarNavItem", function() { return CSidebarNavItem; });
/* concated harmony reexport CSidebarNavDropdown */__webpack_require__.d(__webpack_exports__, "CSidebarNavDropdown", function() { return CSidebarNavDropdown; });
/* concated harmony reexport CSidebarNavLabel */__webpack_require__.d(__webpack_exports__, "CSidebarNavLabel", function() { return CSidebarNavLabel; });
/* concated harmony reexport CSidebarNavLink */__webpack_require__.d(__webpack_exports__, "CSidebarNavLink", function() { return CSidebarNavLink; });
/* concated harmony reexport CSidebarNavTitle */__webpack_require__.d(__webpack_exports__, "CSidebarNavTitle", function() { return CSidebarNavTitle; });
/* concated harmony reexport CSidebarToggler */__webpack_require__.d(__webpack_exports__, "CSidebarToggler", function() { return CSidebarToggler; });
/* concated harmony reexport CSpinner */__webpack_require__.d(__webpack_exports__, "CSpinner", function() { return CSpinner; });
/* concated harmony reexport CSwitch */__webpack_require__.d(__webpack_exports__, "CSwitch", function() { return CSwitch; });
/* concated harmony reexport CTable */__webpack_require__.d(__webpack_exports__, "CTable", function() { return CTable; });
/* concated harmony reexport CTab */__webpack_require__.d(__webpack_exports__, "CTab", function() { return CTab; });
/* concated harmony reexport CTabs */__webpack_require__.d(__webpack_exports__, "CTabs", function() { return CTabs; });
/* concated harmony reexport CToast */__webpack_require__.d(__webpack_exports__, "CToast", function() { return CToast; });
/* concated harmony reexport CToaster */__webpack_require__.d(__webpack_exports__, "CToaster", function() { return CToaster; });
/* concated harmony reexport CWidgetProgress */__webpack_require__.d(__webpack_exports__, "CWidgetProgress", function() { return CWidgetProgress; });
/* concated harmony reexport CWidgetIcon */__webpack_require__.d(__webpack_exports__, "CWidgetIcon", function() { return CWidgetIcon; });
/* concated harmony reexport CWidgetSocial */__webpack_require__.d(__webpack_exports__, "CWidgetSocial", function() { return CWidgetSocial; });
/* concated harmony reexport CWidgetProgressIcon */__webpack_require__.d(__webpack_exports__, "CWidgetProgressIcon", function() { return CWidgetProgressIcon; });
/* concated harmony reexport CWidgetDropdown */__webpack_require__.d(__webpack_exports__, "CWidgetDropdown", function() { return CWidgetDropdown; });
/* concated harmony reexport CWidgetSmallText */__webpack_require__.d(__webpack_exports__, "CWidgetSmallText", function() { return CWidgetSmallText; });
/* concated harmony reexport CWidgetSimple */__webpack_require__.d(__webpack_exports__, "CWidgetSimple", function() { return CWidgetSimple; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (tmp);



/***/ }),

/***/ "fb66":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".c-page-link:focus{-webkit-box-shadow:none;box-shadow:none}", ""]);

// exports


/***/ }),

/***/ "fde4":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("bf90");
var $Object = __webpack_require__("584a").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ });
//# sourceMappingURL=custom.common.js.map