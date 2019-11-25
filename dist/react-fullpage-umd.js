/*!
 * @fullpage/react-fullpage 0.1.17
 * https://github.com/alvarotrigo/react-fullpage
 * @license https://github.com/alvarotrigo/react-fullpage#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo & Michael Walker
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define("ReactFullpage", ["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactFullpage"] = factory(require("React"));
	else
		root["ReactFullpage"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(29)('wks');
var uid = __webpack_require__(14);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(18);
module.exports = __webpack_require__(10) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MAIN_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ID_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_SECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEFAULT_SLIDE; });
var MAIN_SELECTOR='fullpage';var ID_SELECTOR="#".concat(MAIN_SELECTOR);var DEFAULT_SECTION='.section';var DEFAULT_SLIDE='.SLIDE';

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(39);
var defined = __webpack_require__(17);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(13);
var hide = __webpack_require__(3);
var redefine = __webpack_require__(15);
var ctx = __webpack_require__(41);
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
/* 9 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(47);
var toPrimitive = __webpack_require__(30);
var dP = Object.defineProperty;

exports.f = __webpack_require__(10) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(40);
var enumBugKeys = __webpack_require__(25);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var hide = __webpack_require__(3);
var has = __webpack_require__(4);
var SRC = __webpack_require__(14)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(13).inspectSource = function (it) {
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
/* 16 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(debug,compName){return debug?function(){var _console;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return(_console=console).log.apply(_console,["<".concat(compName,"/> Debug Log: ")].concat(args));}:function(){};});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(17);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(0)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(3)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(29)('keys');
var uid = __webpack_require__(14);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(4);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(13);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(16) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(5);
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(23);
var step = __webpack_require__(72);
var Iterators = __webpack_require__(22);
var toIObject = __webpack_require__(7);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(71)(Array, 'Array', function (iterated, kind) {
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(40);
var hiddenKeys = __webpack_require__(25).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(19);
var dPs = __webpack_require__(77);
var enumBugKeys = __webpack_require__(25);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(46)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(76).appendChild(iframe);
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(27);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(36);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(7);
var toLength = __webpack_require__(37);
var toAbsoluteIndex = __webpack_require__(78);
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(27);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var toIObject = __webpack_require__(7);
var arrayIndexOf = __webpack_require__(38)(false);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(81);
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(10);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(15);
var META = __webpack_require__(80).KEY;
var $fails = __webpack_require__(9);
var shared = __webpack_require__(29);
var setToStringTag = __webpack_require__(28);
var uid = __webpack_require__(14);
var wks = __webpack_require__(0);
var wksExt = __webpack_require__(43);
var wksDefine = __webpack_require__(44);
var enumKeys = __webpack_require__(79);
var isArray = __webpack_require__(34);
var anObject = __webpack_require__(19);
var isObject = __webpack_require__(5);
var toIObject = __webpack_require__(7);
var toPrimitive = __webpack_require__(30);
var createDesc = __webpack_require__(18);
var _create = __webpack_require__(33);
var gOPNExt = __webpack_require__(75);
var $GOPD = __webpack_require__(74);
var $DP = __webpack_require__(11);
var $keys = __webpack_require__(12);
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
  __webpack_require__(32).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(24).f = $propertyIsEnumerable;
  __webpack_require__(35).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(16)) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(3)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(13);
var LIBRARY = __webpack_require__(16);
var wksExt = __webpack_require__(43);
var defineProperty = __webpack_require__(11).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44)('asyncIterator');


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(10) && !__webpack_require__(9)(function () {
  return Object.defineProperty(__webpack_require__(46)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__(84);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(2);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// CONCATENATED MODULE: ./components/Wrapper/index.js
/* eslint-disable import/no-extraneous-dependencies */var Wrapper_Wrapper=function Wrapper(_ref){var children=_ref.children;return external_React_default.a.createElement(external_React_["Fragment"],null,children);};/* harmony default export */ var components_Wrapper = (Wrapper_Wrapper);
// CONCATENATED MODULE: ./components/index.js
/* eslint-disable */var windowExists=function windowExists(){if(typeof window==='undefined'){return false;}try{var env="production".toLowerCase();return!env.match(/test/);}catch(e){return true;}};/* harmony default export */ var components = __webpack_exports__["default"] = ((function(){var exported;if(windowExists()){exported=__webpack_require__(82).default;}else{// NOTE: SSR support
exported=__webpack_require__(49).default;}exported.Wrapper=components_Wrapper;return exported;})());

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}/* eslint-disable import/no-extraneous-dependencies */ /* eslint-disable react/prop-types */// NOTE: SSR support
var ReactFullpageShell=/*#__PURE__*/function(_React$Component){_inherits(ReactFullpageShell,_React$Component);function ReactFullpageShell(props){var _this;_classCallCheck(this,ReactFullpageShell);_this=_possibleConstructorReturn(this,_getPrototypeOf(ReactFullpageShell).call(this,props));_this.state={};_this.log=Object(_Logger__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this.props.debug,'ReactFullpageShell');_this.log('Building component');return _this;}_createClass(ReactFullpageShell,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{id:_selectors__WEBPACK_IMPORTED_MODULE_4__[/* MAIN_SELECTOR */ "d"]},this.props.render(this));}}]);return ReactFullpageShell;}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (ReactFullpageShell);

/***/ }),
/* 50 */
/***/ (function(module, exports) {

window.fp_easings={def:"easeOutQuad",linear:function(n,t,e,u){return e*n/u+t},swing:function(n,t,e,u){return window.fp_easings[window.fp_easings.def](n,t,e,u)},easeInQuad:function(n,t,e,u){return e*(n/=u)*n+t},easeOutQuad:function(n,t,e,u){return-e*(n/=u)*(n-2)+t},easeInOutQuad:function(n,t,e,u){return(n/=u/2)<1?e/2*n*n+t:-e/2*(--n*(n-2)-1)+t},easeInCubic:function(n,t,e,u){return e*(n/=u)*n*n+t},easeOutCubic:function(n,t,e,u){return e*((n=n/u-1)*n*n+1)+t},easeInOutCubic:function(n,t,e,u){return(n/=u/2)<1?e/2*n*n*n+t:e/2*((n-=2)*n*n+2)+t},easeInQuart:function(n,t,e,u){return e*(n/=u)*n*n*n+t},easeOutQuart:function(n,t,e,u){return-e*((n=n/u-1)*n*n*n-1)+t},easeInOutQuart:function(n,t,e,u){return(n/=u/2)<1?e/2*n*n*n*n+t:-e/2*((n-=2)*n*n*n-2)+t},easeInQuint:function(n,t,e,u){return e*(n/=u)*n*n*n*n+t},easeOutQuint:function(n,t,e,u){return e*((n=n/u-1)*n*n*n*n+1)+t},easeInOutQuint:function(n,t,e,u){return(n/=u/2)<1?e/2*n*n*n*n*n+t:e/2*((n-=2)*n*n*n*n+2)+t},easeInSine:function(n,t,e,u){return-e*Math.cos(n/u*(Math.PI/2))+e+t},easeOutSine:function(n,t,e,u){return e*Math.sin(n/u*(Math.PI/2))+t},easeInOutSine:function(n,t,e,u){return-e/2*(Math.cos(Math.PI*n/u)-1)+t},easeInExpo:function(n,t,e,u){return 0==n?t:e*Math.pow(2,10*(n/u-1))+t},easeOutExpo:function(n,t,e,u){return n==u?t+e:e*(1-Math.pow(2,-10*n/u))+t},easeInOutExpo:function(n,t,e,u){return 0==n?t:n==u?t+e:(n/=u/2)<1?e/2*Math.pow(2,10*(n-1))+t:e/2*(2-Math.pow(2,-10*--n))+t},easeInCirc:function(n,t,e,u){return-e*(Math.sqrt(1-(n/=u)*n)-1)+t},easeOutCirc:function(n,t,e,u){return e*Math.sqrt(1-(n=n/u-1)*n)+t},easeInOutCirc:function(n,t,e,u){return(n/=u/2)<1?-e/2*(Math.sqrt(1-n*n)-1)+t:e/2*(Math.sqrt(1-(n-=2)*n)+1)+t},easeInElastic:function(n,t,e,u){var a=1.70158,r=0,i=e;if(0==n)return t;if(1==(n/=u))return t+e;if(r||(r=.3*u),i<Math.abs(e)){i=e;a=r/4}else a=r/(2*Math.PI)*Math.asin(e/i);return-i*Math.pow(2,10*(n-=1))*Math.sin((n*u-a)*(2*Math.PI)/r)+t},easeOutElastic:function(n,t,e,u){var a=1.70158,r=0,i=e;if(0==n)return t;if(1==(n/=u))return t+e;if(r||(r=.3*u),i<Math.abs(e)){i=e;a=r/4}else a=r/(2*Math.PI)*Math.asin(e/i);return i*Math.pow(2,-10*n)*Math.sin((n*u-a)*(2*Math.PI)/r)+e+t},easeInOutElastic:function(n,t,e,u){var a=1.70158,r=0,i=e;if(0==n)return t;if(2==(n/=u/2))return t+e;if(r||(r=u*(.3*1.5)),i<Math.abs(e)){i=e;a=r/4}else a=r/(2*Math.PI)*Math.asin(e/i);return n<1?i*Math.pow(2,10*(n-=1))*Math.sin((n*u-a)*(2*Math.PI)/r)*-.5+t:i*Math.pow(2,-10*(n-=1))*Math.sin((n*u-a)*(2*Math.PI)/r)*.5+e+t},easeInBack:function(n,t,e,u,a){return null==a&&(a=1.70158),e*(n/=u)*n*((a+1)*n-a)+t},easeOutBack:function(n,t,e,u,a){return null==a&&(a=1.70158),e*((n=n/u-1)*n*((a+1)*n+a)+1)+t},easeInOutBack:function(n,t,e,u,a){return null==a&&(a=1.70158),(n/=u/2)<1?e/2*(n*n*((1+(a*=1.525))*n-a))+t:e/2*((n-=2)*n*((1+(a*=1.525))*n+a)+2)+t},easeInBounce:function(n,t,e,u){return e-window.fp_easings.easeOutBounce(u-n,0,e,u)+t},easeOutBounce:function(n,t,e,u){return(n/=u)<1/2.75?e*(7.5625*n*n)+t:n<2/2.75?e*(7.5625*(n-=1.5/2.75)*n+.75)+t:n<2.5/2.75?e*(7.5625*(n-=2.25/2.75)*n+.9375)+t:e*(7.5625*(n-=2.625/2.75)*n+.984375)+t},easeInOutBounce:function(n,t,e,u){return n<u/2?.5*window.fp_easings.easeInBounce(2*n,0,e,u)+t:.5*window.fp_easings.easeOutBounce(2*n-u,0,e,u)+.5*e+t}};
//# sourceMappingURL=easings.min.js.map


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
* Customized version of iScroll.js 0.1.3
* It fixes bugs affecting its integration with fullpage.js
* @license
*/
!function(r,n,p){var f=r.requestAnimationFrame||r.webkitRequestAnimationFrame||r.mozRequestAnimationFrame||r.oRequestAnimationFrame||r.msRequestAnimationFrame||function(t){r.setTimeout(t,1e3/60)},m=function(){var e={},o=n.createElement("div").style,i=function(){for(var t=["t","webkitT","MozT","msT","OT"],i=0,s=t.length;i<s;i++)if(t[i]+"ransform"in o)return t[i].substr(0,t[i].length-1);return!1}();function t(t){return!1!==i&&(""===i?t:i+t.charAt(0).toUpperCase()+t.substr(1))}e.getTime=Date.now||function(){return(new Date).getTime()},e.extend=function(t,i){for(var s in i)t[s]=i[s]},e.addEvent=function(t,i,s,e){t.addEventListener(i,s,!!e)},e.removeEvent=function(t,i,s,e){t.removeEventListener(i,s,!!e)},e.prefixPointerEvent=function(t){return r.MSPointerEvent?"MSPointer"+t.charAt(7).toUpperCase()+t.substr(8):t},e.momentum=function(t,i,s,e,o,n){var r,h,a=t-i,l=p.abs(a)/s;return h=l/(n=void 0===n?6e-4:n),(r=t+l*l/(2*n)*(a<0?-1:1))<e?(r=o?e-o/2.5*(l/8):e,h=(a=p.abs(r-t))/l):0<r&&(r=o?o/2.5*(l/8):0,h=(a=p.abs(t)+r)/l),{destination:p.round(r),duration:h}};var s=t("transform");return e.extend(e,{hasTransform:!1!==s,hasPerspective:t("perspective")in o,hasTouch:"ontouchstart"in r,hasPointer:!(!r.PointerEvent&&!r.MSPointerEvent),hasTransition:t("transition")in o}),e.isBadAndroid=function(){var t=r.navigator.appVersion;if(!/Android/.test(t)||/Chrome\/\d/.test(t))return!1;var i=t.match(/Safari\/(\d+.\d)/);return!(i&&"object"==typeof i&&2<=i.length)||parseFloat(i[1])<535.19}(),e.extend(e.style={},{transform:s,transitionTimingFunction:t("transitionTimingFunction"),transitionDuration:t("transitionDuration"),transitionDelay:t("transitionDelay"),transformOrigin:t("transformOrigin")}),e.hasClass=function(t,i){return new RegExp("(^|\\s)"+i+"(\\s|$)").test(t.className)},e.addClass=function(t,i){if(!e.hasClass(t,i)){var s=t.className.split(" ");s.push(i),t.className=s.join(" ")}},e.removeClass=function(t,i){if(e.hasClass(t,i)){var s=new RegExp("(^|\\s)"+i+"(\\s|$)","g");t.className=t.className.replace(s," ")}},e.offset=function(t){for(var i=-t.offsetLeft,s=-t.offsetTop;t=t.offsetParent;)i-=t.offsetLeft,s-=t.offsetTop;return{left:i,top:s}},e.preventDefaultException=function(t,i){for(var s in i)if(i[s].test(t[s]))return!0;return!1},e.extend(e.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),e.extend(e.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return p.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){return(t-=1)*t*(5*t+4)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){return 0===t?0:1==t?1:.4*p.pow(2,-10*t)*p.sin((t-.055)*(2*p.PI)/.22)+1}}}),e.tap=function(t,i){var s=n.createEvent("Event");s.initEvent(i,!0,!0),s.pageX=t.pageX,s.pageY=t.pageY,t.target.dispatchEvent(s)},e.click=function(t){var i,s=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(s.tagName)||((i=n.createEvent(r.MouseEvent?"MouseEvents":"Event")).initEvent("click",!0,!0),i.view=t.view||r,i.detail=1,i.screenX=s.screenX||0,i.screenY=s.screenY||0,i.clientX=s.clientX||0,i.clientY=s.clientY||0,i.ctrlKey=!!t.ctrlKey,i.altKey=!!t.altKey,i.shiftKey=!!t.shiftKey,i.metaKey=!!t.metaKey,i.button=0,i.relatedTarget=null,i._constructed=!0,s.dispatchEvent(i))},e}();function t(t,i){for(var s in this.wrapper="string"==typeof t?n.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,disablePointer:!m.hasPointer,disableTouch:m.hasPointer||!m.hasTouch,disableMouse:m.hasPointer||m.hasTouch,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:void 0===r.onmousedown},i)this.options[s]=i[s];this.translateZ=this.options.HWCompositing&&m.hasPerspective?" translateZ(0)":"",this.options.useTransition=m.hasTransition&&this.options.useTransition,this.options.useTransform=m.hasTransform&&this.options.useTransform,this.options.eventPassthrough=!0===this.options.eventPassthrough?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?m.ease[this.options.bounceEasing]||m.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,!0===this.options.tap&&(this.options.tap="tap"),this.options.useTransition||this.options.useTransform||/relative|absolute/i.test(this.scrollerStyle.position)||(this.scrollerStyle.position="relative"),"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}function h(t,i,s){var e=n.createElement("div"),o=n.createElement("div");return!0===s&&(e.style.cssText="position:absolute;z-index:9999",o.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),o.className="iScrollIndicator",e.className="h"==t?(!0===s&&(e.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",o.style.height="100%"),"iScrollHorizontalScrollbar"):(!0===s&&(e.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",o.style.width="100%"),"iScrollVerticalScrollbar"),e.style.cssText+=";overflow:hidden",i||(e.style.pointerEvents="none"),e.appendChild(o),e}function a(t,i){for(var s in this.wrapper="string"==typeof i.el?n.querySelector(i.el):i.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=t,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0},i)this.options[s]=i[s];if(this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(this.options.disableTouch||(m.addEvent(this.indicator,"touchstart",this),m.addEvent(r,"touchend",this)),this.options.disablePointer||(m.addEvent(this.indicator,m.prefixPointerEvent("pointerdown"),this),m.addEvent(r,m.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(m.addEvent(this.indicator,"mousedown",this),m.addEvent(r,"mouseup",this))),this.options.fade){this.wrapperStyle[m.style.transform]=this.scroller.translateZ;var e=m.style.transitionDuration;if(!e)return;this.wrapperStyle[e]=m.isBadAndroid?"0.0001ms":"0ms";var o=this;m.isBadAndroid&&f(function(){"0.0001ms"===o.wrapperStyle[e]&&(o.wrapperStyle[e]="0s")}),this.wrapperStyle.opacity="0"}}t.prototype={version:"5.2.0",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0),clearTimeout(this.resizeTimeout),this.resizeTimeout=null,this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){if(1!=m.eventType[t.type]&&0!==(t.which?t.button:t.button<2?0:4==t.button?1:2))return;if(this.enabled&&(!this.initiated||m.eventType[t.type]===this.initiated)){!this.options.preventDefault||m.isBadAndroid||m.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var i,s=t.touches?t.touches[0]:t;this.initiated=m.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.startTime=m.getTime(),this.options.useTransition&&this.isInTransition?(this._transitionTime(),this.isInTransition=!1,i=this.getComputedPosition(),this._translate(p.round(i.x),p.round(i.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=s.pageX,this.pointY=s.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&m.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i,s,e,o,n=t.touches?t.touches[0]:t,r=n.pageX-this.pointX,h=n.pageY-this.pointY,a=m.getTime();if(this.pointX=n.pageX,this.pointY=n.pageY,this.distX+=r,this.distY+=h,e=p.abs(this.distX),o=p.abs(this.distY),!(300<a-this.endTime&&e<10&&o<10)){if(this.directionLocked||this.options.freeScroll||(e>o+this.options.directionLockThreshold?this.directionLocked="h":o>=e+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);h=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);r=0}r=this.hasHorizontalScroll?r:0,h=this.hasVerticalScroll?h:0,i=this.x+r,s=this.y+h,(0<i||i<this.maxScrollX)&&(i=this.options.bounce?this.x+r/3:0<i?0:this.maxScrollX),(0<s||s<this.maxScrollY)&&(s=this.options.bounce?this.y+h/3:0<s?0:this.maxScrollY),this.directionX=0<r?-1:r<0?1:0,this.directionY=0<h?-1:h<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(i,s),300<a-this.startTime&&(this.startTime=a,this.startX=this.x,this.startY=this.y)}}},_end:function(t){if(this.enabled&&m.eventType[t.type]===this.initiated){this.options.preventDefault&&!m.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();t.changedTouches&&t.changedTouches[0];var i,s,e=m.getTime()-this.startTime,o=p.round(this.x),n=p.round(this.y),r=p.abs(o-this.startX),h=p.abs(n-this.startY),a=0,l="";if(this.isInTransition=0,this.initiated=0,this.endTime=m.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(o,n),!this.moved)return this.options.tap&&m.tap(t,this.options.tap),this.options.click&&m.click(t),void this._execEvent("scrollCancel");if(this._events.flick&&e<200&&r<100&&h<100)this._execEvent("flick");else{if(this.options.momentum&&e<300&&(i=this.hasHorizontalScroll?m.momentum(this.x,this.startX,e,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:o,duration:0},s=this.hasVerticalScroll?m.momentum(this.y,this.startY,e,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:n,duration:0},o=i.destination,n=s.destination,a=p.max(i.duration,s.duration),this.isInTransition=1),this.options.snap){var c=this._nearestSnap(o,n);this.currentPage=c,a=this.options.snapSpeed||p.max(p.max(p.min(p.abs(o-c.x),1e3),p.min(p.abs(n-c.y),1e3)),300),o=c.x,n=c.y,this.directionX=0,this.directionY=0,l=this.options.bounceEasing}if(o!=this.x||n!=this.y)return(0<o||o<this.maxScrollX||0<n||n<this.maxScrollY)&&(l=m.ease.quadratic),void this.scrollTo(o,n,a,l);this._execEvent("scrollEnd")}}}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},resetPosition:function(t){var i=this.x,s=this.y;return t=t||0,!this.hasHorizontalScroll||0<this.x?i=0:this.x<this.maxScrollX&&(i=this.maxScrollX),!this.hasVerticalScroll||0<this.y?s=0:this.y<this.maxScrollY&&(s=this.maxScrollY),(i!=this.x||s!=this.y)&&(this.scrollTo(i,s,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=m.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,i){this._events[t]||(this._events[t]=[]),this._events[t].push(i)},off:function(t,i){if(this._events[t]){var s=this._events[t].indexOf(i);-1<s&&this._events[t].splice(s,1)}},_execEvent:function(t){if(this._events[t]){var i=0,s=this._events[t].length;if(s)for(;i<s;i++)this._events[t][i].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,i,s,e){t=this.x+t,i=this.y+i,s=s||0,this.scrollTo(t,i,s,e)},scrollTo:function(t,i,s,e){e=e||m.ease.circular,this.isInTransition=this.options.useTransition&&0<s;var o=this.options.useTransition&&e.style;!s||o?(o&&(this._transitionTimingFunction(e.style),this._transitionTime(s)),this._translate(t,i)):this._animate(t,i,s,e.fn)},scrollToElement:function(t,i,s,e,o){if(t=t.nodeType?t:this.scroller.querySelector(t)){var n=m.offset(t);n.left-=this.wrapperOffset.left,n.top-=this.wrapperOffset.top,!0===s&&(s=p.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===e&&(e=p.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),n.left-=s||0,n.top-=e||0,n.left=0<n.left?0:n.left<this.maxScrollX?this.maxScrollX:n.left,n.top=0<n.top?0:n.top<this.maxScrollY?this.maxScrollY:n.top,i=null==i||"auto"===i?p.max(p.abs(this.x-n.left),p.abs(this.y-n.top)):i,this.scrollTo(n.left,n.top,i,o)}},_transitionTime:function(t){if(this.options.useTransition){t=t||0;var i=m.style.transitionDuration;if(i){if(this.scrollerStyle[i]=t+"ms",!t&&m.isBadAndroid){this.scrollerStyle[i]="0.0001ms";var s=this;f(function(){"0.0001ms"===s.scrollerStyle[i]&&(s.scrollerStyle[i]="0s")})}if(this.indicators)for(var e=this.indicators.length;e--;)this.indicators[e].transitionTime(t)}}},_transitionTimingFunction:function(t){if(this.scrollerStyle[m.style.transitionTimingFunction]=t,this.indicators)for(var i=this.indicators.length;i--;)this.indicators[i].transitionTimingFunction(t)},_translate:function(t,i){if(this.options.useTransform?this.scrollerStyle[m.style.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=p.round(t),i=p.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.x=t,this.y=i,this.indicators)for(var s=this.indicators.length;s--;)this.indicators[s].updatePosition()},_initEvents:function(t){var i=t?m.removeEvent:m.addEvent,s=this.options.bindToWrapper?this.wrapper:r;i(r,"orientationchange",this),i(r,"resize",this),this.options.click&&i(this.wrapper,"click",this,!0),this.options.disableMouse||(i(this.wrapper,"mousedown",this),i(s,"mousemove",this),i(s,"mousecancel",this),i(s,"mouseup",this)),m.hasPointer&&!this.options.disablePointer&&(i(this.wrapper,m.prefixPointerEvent("pointerdown"),this),i(s,m.prefixPointerEvent("pointermove"),this),i(s,m.prefixPointerEvent("pointercancel"),this),i(s,m.prefixPointerEvent("pointerup"),this)),m.hasTouch&&!this.options.disableTouch&&(i(this.wrapper,"touchstart",this),i(s,"touchmove",this),i(s,"touchcancel",this),i(s,"touchend",this)),i(this.scroller,"transitionend",this),i(this.scroller,"webkitTransitionEnd",this),i(this.scroller,"oTransitionEnd",this),i(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t,i,s=r.getComputedStyle(this.scroller,null);return i=this.options.useTransform?(t=+((s=s[m.style.transform].split(")")[0].split(", "))[12]||s[4]),+(s[13]||s[5])):(t=+s.left.replace(/[^-\d.]/g,""),+s.top.replace(/[^-\d.]/g,"")),{x:t,y:i}},_initIndicators:function(){var t,i=this.options.interactiveScrollbars,s="string"!=typeof this.options.scrollbars,e=[],o=this;this.indicators=[],this.options.scrollbars&&(this.options.scrollY&&(t={el:h("v",i,this.options.scrollbars),interactive:i,defaultScrollbars:!0,customStyle:s,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(t.el),e.push(t)),this.options.scrollX&&(t={el:h("h",i,this.options.scrollbars),interactive:i,defaultScrollbars:!0,customStyle:s,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(t.el),e.push(t))),this.options.indicators&&(e=e.concat(this.options.indicators));for(var n=e.length;n--;)this.indicators.push(new a(this,e[n]));function r(t){if(o.indicators)for(var i=o.indicators.length;i--;)t.call(o.indicators[i])}this.options.fadeScrollbars&&(this.on("scrollEnd",function(){r(function(){this.fade()})}),this.on("scrollCancel",function(){r(function(){this.fade()})}),this.on("scrollStart",function(){r(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){r(function(){this.fade(1,!0)})})),this.on("refresh",function(){r(function(){this.refresh()})}),this.on("destroy",function(){r(function(){this.destroy()}),delete this.indicators})},_initWheel:function(){m.addEvent(this.wrapper,"wheel",this),m.addEvent(this.wrapper,"mousewheel",this),m.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){clearTimeout(this.wheelTimeout),this.wheelTimeout=null,m.removeEvent(this.wrapper,"wheel",this),m.removeEvent(this.wrapper,"mousewheel",this),m.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(t){if(this.enabled){r.navigator.userAgent.match(/(MSIE|Trident)/)||t.preventDefault();var i,s,e,o,n=this;if(void 0===this.wheelTimeout&&n._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){n.options.snap||n._execEvent("scrollEnd"),n.wheelTimeout=void 0},400),"deltaX"in t)s=1===t.deltaMode?(i=-t.deltaX*this.options.mouseWheelSpeed,-t.deltaY*this.options.mouseWheelSpeed):(i=-t.deltaX,-t.deltaY);else if("wheelDeltaX"in t)i=t.wheelDeltaX/120*this.options.mouseWheelSpeed,s=t.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in t)i=s=t.wheelDelta/120*this.options.mouseWheelSpeed;else{if(!("detail"in t))return;i=s=-t.detail/3*this.options.mouseWheelSpeed}if(i*=this.options.invertWheelDirection,s*=this.options.invertWheelDirection,this.hasVerticalScroll||(i=s,s=0),this.options.snap)return e=this.currentPage.pageX,o=this.currentPage.pageY,0<i?e--:i<0&&e++,0<s?o--:s<0&&o++,void this.goToPage(e,o);e=this.x+p.round(this.hasHorizontalScroll?i:0),o=this.y+p.round(this.hasVerticalScroll?s:0),this.directionX=0<i?-1:i<0?1:0,this.directionY=0<s?-1:s<0?1:0,0<e?e=0:e<this.maxScrollX&&(e=this.maxScrollX),0<o?o=0:o<this.maxScrollY&&(o=this.maxScrollY),this.scrollTo(e,o,0)}},_initSnap:function(){this.currentPage={},"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var t,i,s,e,o,n,r=0,h=0,a=0,l=this.options.snapStepX||this.wrapperWidth,c=this.options.snapStepY||this.wrapperHeight;if(this.pages=[],this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(!0===this.options.snap)for(s=p.round(l/2),e=p.round(c/2);a>-this.scrollerWidth;){for(this.pages[r]=[],o=t=0;o>-this.scrollerHeight;)this.pages[r][t]={x:p.max(a,this.maxScrollX),y:p.max(o,this.maxScrollY),width:l,height:c,cx:a-s,cy:o-e},o-=c,t++;a-=l,r++}else for(t=(n=this.options.snap).length,i=-1;r<t;r++)(0===r||n[r].offsetLeft<=n[r-1].offsetLeft)&&(h=0,i++),this.pages[h]||(this.pages[h]=[]),a=p.max(-n[r].offsetLeft,this.maxScrollX),o=p.max(-n[r].offsetTop,this.maxScrollY),s=a-p.round(n[r].offsetWidth/2),e=o-p.round(n[r].offsetHeight/2),this.pages[h][i]={x:a,y:o,width:n[r].offsetWidth,height:n[r].offsetHeight,cx:s,cy:e},a>this.maxScrollX&&h++;this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1==0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=p.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=p.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}}),this.on("flick",function(){var t=this.options.snapSpeed||p.max(p.max(p.min(p.abs(this.x-this.startX),1e3),p.min(p.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,t)})},_nearestSnap:function(t,i){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var s=0,e=this.pages.length,o=0;if(p.abs(t-this.absStartX)<this.snapThresholdX&&p.abs(i-this.absStartY)<this.snapThresholdY)return this.currentPage;for(0<t?t=0:t<this.maxScrollX&&(t=this.maxScrollX),0<i?i=0:i<this.maxScrollY&&(i=this.maxScrollY);s<e;s++)if(t>=this.pages[s][0].cx){t=this.pages[s][0].x;break}for(e=this.pages[s].length;o<e;o++)if(i>=this.pages[0][o].cy){i=this.pages[0][o].y;break}return s==this.currentPage.pageX&&((s+=this.directionX)<0?s=0:s>=this.pages.length&&(s=this.pages.length-1),t=this.pages[s][0].x),o==this.currentPage.pageY&&((o+=this.directionY)<0?o=0:o>=this.pages[0].length&&(o=this.pages[0].length-1),i=this.pages[0][o].y),{x:t,y:i,pageX:s,pageY:o}},goToPage:function(t,i,s,e){e=e||this.options.bounceEasing,t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),i>=this.pages[t].length?i=this.pages[t].length-1:i<0&&(i=0);var o=this.pages[t][i].x,n=this.pages[t][i].y;s=void 0===s?this.options.snapSpeed||p.max(p.max(p.min(p.abs(o-this.x),1e3),p.min(p.abs(n-this.y),1e3)),300):s,this.currentPage={x:o,y:n,pageX:t,pageY:i},this.scrollTo(o,n,s,e)},next:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;++s>=this.pages.length&&this.hasVerticalScroll&&(s=0,e++),this.goToPage(s,e,t,i)},prev:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;--s<0&&this.hasVerticalScroll&&(s=0,e--),this.goToPage(s,e,t,i)},_initKeys:function(t){var i,s={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};if("object"==typeof this.options.keyBindings)for(i in this.options.keyBindings)"string"==typeof this.options.keyBindings[i]&&(this.options.keyBindings[i]=this.options.keyBindings[i].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(i in s)this.options.keyBindings[i]=this.options.keyBindings[i]||s[i];m.addEvent(r,"keydown",this),this.on("destroy",function(){m.removeEvent(r,"keydown",this)})},_key:function(t){if(this.enabled){var i,s=this.options.snap,e=s?this.currentPage.pageX:this.x,o=s?this.currentPage.pageY:this.y,n=m.getTime(),r=this.keyTime||0;switch(this.options.useTransition&&this.isInTransition&&(i=this.getComputedPosition(),this._translate(p.round(i.x),p.round(i.y)),this.isInTransition=!1),this.keyAcceleration=n-r<200?p.min(this.keyAcceleration+.25,50):0,t.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?e+=s?1:this.wrapperWidth:o+=s?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?e-=s?1:this.wrapperWidth:o-=s?1:this.wrapperHeight;break;case this.options.keyBindings.end:e=s?this.pages.length-1:this.maxScrollX,o=s?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:o=e=0;break;case this.options.keyBindings.left:e+=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:o+=s?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:e-=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:o-=s?1:5+this.keyAcceleration>>0;break;default:return}s?this.goToPage(e,o):(0<e?(e=0,this.keyAcceleration=0):e<this.maxScrollX&&(e=this.maxScrollX,this.keyAcceleration=0),0<o?(o=0,this.keyAcceleration=0):o<this.maxScrollY&&(o=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(e,o,0),this.keyTime=n)}},_animate:function(n,r,h,a){var l=this,c=this.x,p=this.y,d=m.getTime(),u=d+h;this.isAnimating=!0,function t(){var i,s,e,o=m.getTime();if(u<=o)return l.isAnimating=!1,l._translate(n,r),void(l.resetPosition(l.options.bounceTime)||l._execEvent("scrollEnd"));e=a(o=(o-d)/h),i=(n-c)*e+c,s=(r-p)*e+p,l._translate(i,s),l.isAnimating&&f(t)}()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":this.enabled&&!t._constructed&&(t.preventDefault(),t.stopPropagation())}}},a.prototype={handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t)}},destroy:function(){this.options.fadeScrollbars&&(clearTimeout(this.fadeTimeout),this.fadeTimeout=null),this.options.interactive&&(m.removeEvent(this.indicator,"touchstart",this),m.removeEvent(this.indicator,m.prefixPointerEvent("pointerdown"),this),m.removeEvent(this.indicator,"mousedown",this),m.removeEvent(r,"touchmove",this),m.removeEvent(r,m.prefixPointerEvent("pointermove"),this),m.removeEvent(r,"mousemove",this),m.removeEvent(r,"touchend",this),m.removeEvent(r,m.prefixPointerEvent("pointerup"),this),m.removeEvent(r,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(t){var i=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=i.pageX,this.lastPointY=i.pageY,this.startTime=m.getTime(),this.options.disableTouch||m.addEvent(r,"touchmove",this),this.options.disablePointer||m.addEvent(r,m.prefixPointerEvent("pointermove"),this),this.options.disableMouse||m.addEvent(r,"mousemove",this),this.scroller._execEvent("beforeScrollStart")},_move:function(t){var i,s,e,o,n=t.touches?t.touches[0]:t;m.getTime();this.moved||this.scroller._execEvent("scrollStart"),this.moved=!0,i=n.pageX-this.lastPointX,this.lastPointX=n.pageX,s=n.pageY-this.lastPointY,this.lastPointY=n.pageY,e=this.x+i,o=this.y+s,this._pos(e,o),t.preventDefault(),t.stopPropagation()},_end:function(t){if(this.initiated){if(this.initiated=!1,t.preventDefault(),t.stopPropagation(),m.removeEvent(r,"touchmove",this),m.removeEvent(r,m.prefixPointerEvent("pointermove"),this),m.removeEvent(r,"mousemove",this),this.scroller.options.snap){var i=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),s=this.options.snapSpeed||p.max(p.max(p.min(p.abs(this.scroller.x-i.x),1e3),p.min(p.abs(this.scroller.y-i.y),1e3)),300);this.scroller.x==i.x&&this.scroller.y==i.y||(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=i,this.scroller.scrollTo(i.x,i.y,s,this.scroller.options.bounceEasing))}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(t){t=t||0;var i=m.style.transitionDuration;if(i&&(this.indicatorStyle[i]=t+"ms",!t&&m.isBadAndroid)){this.indicatorStyle[i]="0.0001ms";var s=this;f(function(){"0.0001ms"===s.indicatorStyle[i]&&(s.indicatorStyle[i]="0s")})}},transitionTimingFunction:function(t){this.indicatorStyle[m.style.transitionTimingFunction]=t},refresh:function(){this.transitionTime(),this.options.listenX&&!this.options.listenY?this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none":this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(m.addClass(this.wrapper,"iScrollBothScrollbars"),m.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(m.removeClass(this.wrapper,"iScrollBothScrollbars"),m.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px"));this.wrapper.offsetHeight;this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=p.max(p.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=8-this.indicatorWidth,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=p.max(p.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(this.minBoundaryY=8-this.indicatorHeight,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var t=this.options.listenX&&p.round(this.sizeRatioX*this.scroller.x)||0,i=this.options.listenY&&p.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(t<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=p.max(this.indicatorWidth+t,8),this.indicatorStyle.width=this.width+"px"),t=this.minBoundaryX):t>this.maxBoundaryX?t="scale"==this.options.shrink?(this.width=p.max(this.indicatorWidth-(t-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",this.maxPosX+this.indicatorWidth-this.width):this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),i<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=p.max(this.indicatorHeight+3*i,8),this.indicatorStyle.height=this.height+"px"),i=this.minBoundaryY):i>this.maxBoundaryY?i="scale"==this.options.shrink?(this.height=p.max(this.indicatorHeight-3*(i-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",this.maxPosY+this.indicatorHeight-this.height):this.maxBoundaryY:"scale"==this.options.shrink&&this.height!=this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px")),this.x=t,this.y=i,this.scroller.options.useTransform?this.indicatorStyle[m.style.transform]="translate("+t+"px,"+i+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=t+"px",this.indicatorStyle.top=i+"px")},_pos:function(t,i){t<0?t=0:t>this.maxPosX&&(t=this.maxPosX),i<0?i=0:i>this.maxPosY&&(i=this.maxPosY),t=this.options.listenX?p.round(t/this.sizeRatioX):this.scroller.x,i=this.options.listenY?p.round(i/this.sizeRatioY):this.scroller.y,this.scroller.scrollTo(t,i)},fade:function(t,i){if(!i||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null;var s=t?250:500,e=t?0:300;t=t?"1":"0",this.wrapperStyle[m.style.transitionDuration]=s+"ms",this.fadeTimeout=setTimeout(function(t){this.wrapperStyle.opacity=t,this.visible=+t}.bind(this,t),e)}}},t.utils=m,"undefined"!=typeof module&&module.exports?module.exports=t: true?(!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return t}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)),void 0!==r&&(r.IScroll=t)):undefined}(window,document,Math),
/*!
* Scrolloverflow 2.0.5 module for fullPage.js >= 3
* https://github.com/alvarotrigo/fullPage.js
* @license MIT licensed
*
* Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
*/
function(l,c){l.fp_scrolloverflow=function(){l.IScroll||(l.IScroll=module.exports);var s="fp-scrollable",n="."+s,t=".active",d=".fp-section",e=d+t,o=".fp-slide",u=".fp-tableCell";function r(){var p=this;function s(){var i;fp_utils.hasClass(c.body,"fp-responsive")?(i=p.options.scrollOverflowHandler,e(function(t){fp_utils.hasClass(fp_utils.closest(t,d),"fp-auto-height-responsive")&&i.remove(t)})):e(t)}function t(t){if(!fp_utils.hasClass(t,"fp-noscroll")){fp_utils.css(t,{overflow:"hidden"});var i,s,e,o=p.options.scrollOverflowHandler,n=o.wrapContent(),r=fp_utils.closest(t,d),h=o.scrollable(t),a=(s=r,null!=(e=fp_utils.closest(s,d))?parseInt(getComputedStyle(e)["padding-bottom"])+parseInt(getComputedStyle(e)["padding-top"]):0);null!=h?i=o.scrollHeight(t):(i=t.scrollHeight,p.options.verticalCentered&&(i=f(u,t)[0].scrollHeight));var l=fp_utils.getWindowHeight(),c=l-a;l<i+a?null!=h?o.update(t,c):(p.options.verticalCentered?(fp_utils.wrapInner(f(u,t)[0],n.scroller),fp_utils.wrapInner(f(u,t)[0],n.scrollable)):(fp_utils.wrapInner(t,n.scroller),fp_utils.wrapInner(t,n.scrollable)),o.create(t,c,p.iscrollOptions)):o.remove(t),fp_utils.css(t,{overflow:""})}}function e(s){f(d).forEach(function(t){var i=f(o,t);i.length?i.forEach(function(t){s(t)}):s(t)})}p.options=null,p.init=function(t,i){return p.options=t,p.iscrollOptions=i,"complete"===c.readyState&&(s(),fullpage_api.shared.afterRenderActions()),l.addEventListener("load",function(){s(),fullpage_api.shared.afterRenderActions()}),p},p.createScrollBarForAll=s,p.createScrollBar=t}IScroll.prototype.wheelOn=function(){this.wrapper.addEventListener("wheel",this),this.wrapper.addEventListener("mousewheel",this),this.wrapper.addEventListener("DOMMouseScroll",this)},IScroll.prototype.wheelOff=function(){this.wrapper.removeEventListener("wheel",this),this.wrapper.removeEventListener("mousewheel",this),this.wrapper.removeEventListener("DOMMouseScroll",this)};var f=null,h=null,a={refreshId:null,iScrollInstances:[],lastScrollY:null,hasBeenInit:!1,iscrollOptions:{scrollbars:!0,mouseWheel:!0,hideScrollbars:!1,fadeScrollbars:!1,disableMouse:!0,interactiveScrollbars:!0},init:function(t){f=fp_utils.$,h=t;var i="ontouchstart"in l||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints;return a.iscrollOptions.click=i,a.hasBeenInit=!0,a.iscrollOptions=fp_utils.deepExtend(a.iscrollOptions,t.scrollOverflowOptions),(new r).init(t,a.iscrollOptions)},toggleWheel:function(s){f(n,f(e)[0]).forEach(function(t){var i=t.fp_iscrollInstance;null!=i&&(s?i.wheelOn():i.wheelOff())})},setIscroll:function(t,i){if(a.hasBeenInit){var s=fp_utils.closest(t,n)||f(n,t)[0],e=i?"enable":"disable";s&&s.fp_iscrollInstance[e]()}},onLeave:function(){a.toggleWheel(!1)},beforeLeave:function(){a.onLeave()},afterLoad:function(){a.toggleWheel(!0)},create:function(s,e,o){f(n,s).forEach(function(t){fp_utils.css(t,{height:e+"px"});var i=t.fp_iscrollInstance;null!=i&&a.iScrollInstances.forEach(function(t){t.destroy()}),i=new IScroll(t,o),a.iScrollInstances.push(i),fp_utils.hasClass(fp_utils.closest(s,d),"active")||i.wheelOff(),t.fp_iscrollInstance=i})},isScrolled:function(t,i){var s=i.fp_iscrollInstance;return!s||("top"===t?0<=s.y&&!fp_utils.getScrollTop(i):"bottom"===t?0-s.y+fp_utils.getScrollTop(i)+i.offsetHeight>=i.scrollHeight:void 0)},scrollable:function(t){return f(".fp-slides",t).length?f(n,f(".fp-slide.active",t)[0])[0]:f(n,t)[0]},scrollHeight:function(t){return f(".fp-scroller",f(n,t)[0])[0].scrollHeight},remove:function(t){if(null!=t){var i=f(n,t)[0];if(null!=i){var s=i.fp_iscrollInstance;null!=s&&s.destroy(),i.fp_iscrollInstance=null,fp_utils.unwrap(f(".fp-scroller",t)[0]),fp_utils.unwrap(f(n,t)[0])}}},update:function(t,i){clearTimeout(a.refreshId),a.refreshId=setTimeout(function(){a.iScrollInstances.forEach(function(t){t.refresh(),fullpage_api.silentMoveTo(fp_utils.index(f(e)[0])+1)})},150),fp_utils.css(f(n,t)[0],{height:i+"px"}),h.verticalCentered&&fp_utils.css(f(n,t)[0].parentNode,{height:i+"px"})},wrapContent:function(){var t=c.createElement("div");t.className=s;var i=c.createElement("div");return i.className="fp-scroller",{scrollable:t,scroller:i}}};return{iscrollHandler:a}}()}(window,document);
//# sourceMappingURL=scrolloverflow.min.js.map


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * fullPage 3.0.8 - Extensions 0.1.9
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,t,n,o,r){ true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return e.fullpage=o(t,n),e.fullpage}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,window,document,function(rn,ln){"use strict";var an="fullpage-wrapper",sn="."+an,cn="fp-responsive",un="fp-notransition",fn="fp-destroyed",dn="fp-enabled",vn="fp-viewing",pn="active",hn="."+pn,gn="fp-completely",mn="fp-section",Sn="."+mn,bn=Sn+hn,wn="fp-tableCell",yn="."+wn,En="fp-auto-height",xn="fp-normal-scroll",An="fp-nav",Ln="#"+An,Mn="fp-tooltip",Tn="fp-slide",On="."+Tn,kn=On+hn,Cn="fp-slides",Hn="."+Cn,Rn="fp-slidesContainer",In="."+Rn,zn="fp-table",Bn="fp-slidesNav",Nn="."+Bn,jn=Nn+" a",e="fp-controlArrow",Pn="."+e,Wn="fp-prev",Dn=Pn+".fp-prev",Yn=Pn+".fp-next";function Vn(e,t){rn.console&&rn.console[e]&&rn.console[e]("fullPage: "+t)}function Zn(e,t){return(t=1<arguments.length?t:ln)?t.querySelectorAll(e):null}function Xn(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=Xn(e[r],o[r]))}return e}function Gn(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function Fn(){return"innerHeight"in rn?rn.innerHeight:ln.documentElement.offsetHeight}function Un(){return rn.innerWidth}function Qn(e,t){var n;for(n in e=l(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function n(e,t,n){for(var o=e[n];o&&!bo(o,t);)o=o[n];return o}function _n(e,t){return n(e,t,"previousElementSibling")}function Jn(e,t){return n(e,t,"nextElementSibling")}function Kn(e,t){if(null==t)return e.previousElementSibling;var n=Kn(e);return n&&bo(n,t)?n:null}function $n(e,t){if(null==t)return e.nextElementSibling;var n=$n(e);return n&&bo(n,t)?n:null}function qn(e){return e[e.length-1]}function eo(e,t){e=oo(e)?e[0]:e;for(var n=null!=t?Zn(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function l(e){return oo(e)?e:[e]}function to(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function no(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function oo(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function ro(e,t){e=l(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function io(e,t){e=l(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function lo(e,t){t.appendChild(e)}function o(e,t,n){var o;t=t||ln.createElement("div");for(var r=0;r<e.length;r++){var i=e[r];(n&&!r||!n)&&(o=t.cloneNode(!0),i.parentNode.insertBefore(o,i)),o.appendChild(i)}return e}function ao(e,t){o(e,t,!0)}function so(e,t){for("string"==typeof t&&(t=yo(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function co(e){for(var t=ln.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}function uo(e,t){return e&&1===e.nodeType?bo(e,t)?e:uo(e.parentNode,t):null}function fo(e,t){r(e,e.nextSibling,t)}function vo(e,t){r(e,e,t)}function r(e,t,n){oo(n)||("string"==typeof n&&(n=yo(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function po(){var e=ln.documentElement;return(rn.pageYOffset||e.scrollTop)-(e.clientTop||0)}function ho(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}function go(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function mo(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function So(e,t,n){var o;n=void 0===n?{}:n,"function"==typeof rn.CustomEvent?o=new CustomEvent(t,{detail:n}):(o=ln.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(o)}function bo(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function wo(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function yo(e){var t=ln.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function Eo(e){e=l(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function i(e,t,n){for(var o=e[n],r=[];o;)(bo(o,t)||null==t)&&r.push(o),o=o[n];return r}function xo(e,t){return i(e,t,"nextElementSibling")}function Ao(e,t){return i(e,t,"previousElementSibling")}function Lo(e,t){e.insertBefore(t,e.firstChild)}return rn.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||rn;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),rn.fp_utils={$:Zn,deepExtend:Xn,hasClass:Gn,getWindowHeight:Fn,css:Qn,until:n,prevUntil:_n,nextUntil:Jn,prev:Kn,next:$n,last:qn,index:eo,getList:l,hide:to,show:no,isArrayOrList:oo,addClass:ro,removeClass:io,appendTo:lo,wrap:o,wrapAll:ao,wrapInner:so,unwrap:co,closest:uo,after:fo,before:vo,insertBefore:r,getScrollTop:po,siblings:ho,preventDefault:go,isFunction:mo,trigger:So,matches:bo,toggle:wo,createElementFromHTML:yo,remove:Eo,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:i,nextAll:xo,prevAll:Ao,showError:Vn,prependTo:Lo,toggleClass:function(e,t,n){if(e.classList&&null==n)e.classList.toggle(t);else{var o=Gn(e,t);o&&null==n||!n?io(e,t):(!o&&null==n||n)&&ro(e,t)}}},function(e,g){var n=g&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(g.licenseKey)||-1<ln.domain.indexOf("alvarotrigo.com"),r=Zn("html, body"),s=Zn("html")[0],m=Zn("body")[0];if(!Gn(s,dn)){var S={};g=Xn({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:rn.fp_scrolloverflow?rn.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof e?Zn(e)[0]:e,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},g);var b,l,c,o,a=!1,i=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),u="ontouchstart"in rn||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,w="string"==typeof e?Zn(e)[0]:e,y=Fn(),f=Un(),E=!1,t=!0,x=!0,d=[],v={m:{up:!0,down:!0,left:!0,right:!0}};v.k=Xn({},v.m);var p,h,A,L,M,T,O,k,C,H,R=Dt(),I={touchmove:"ontouchmove"in rn?"touchmove":R.move,touchstart:"ontouchstart"in rn?"touchstart":R.down},z=!1,B=!Gn(m,nt("OHNsd3AtZnVsbHBhZ2UtanM5T20=")),N='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',j=!1;try{var P=Object.defineProperty({},"passive",{get:function(){j=!0}});rn.addEventListener("testPassive",null,P),rn.removeEventListener("testPassive",null,P)}catch(e){}var W,D,Y=Xn({},g),V=!1,Z=!0,X={};$t(),rn.fp_easings=Xn(rn.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),w&&(S.version="3.0.8",S.setAutoScrolling=oe,S.setRecordHistory=re,S.setScrollingSpeed=ie,S.setFitToSection=le,S.setLockAnchors=function(e){g.lockAnchors=e},S.setMouseWheelScrolling=ae,S.setAllowScrolling=se,S.setKeyboardScrolling=ue,S.moveSectionUp=fe,S.moveSectionDown=de,S.silentMoveTo=ve,S.moveTo=pe,S.moveSlideRight=he,S.moveSlideLeft=ge,S.fitToSection=He,S.reBuild=me,S.setResponsive=be,S.getFullpageData=function(){return{options:g,internals:{container:w,canScroll:x,isScrollAllowed:v,getDestinationPosition:Ye,isTouch:u,c:lt,getXmovement:kt,removeAnimation:Mt,getTransforms:Xt,lazyLoad:Je,addAnimation:Lt,performHorizontalMove:yt,landscapeScroll:St,silentLandscapeScroll:Vt,keepSlidesPosition:De,silentScroll:Zt,styleSlides:Le,styleSection:Te,scrollHandler:Ce,getEventsPage:Yt,getMSPointer:Dt,isReallyTouch:Be,usingExtension:Ut,toggleControlArrows:bt,touchStartHandler:Ne,touchMoveHandler:ze}}},S.destroy=function(e){So(w,"destroy",e),oe(!1,"internal"),se(!0),ce(!1),ue(!1),ro(w,fn),[M,L,h,T,O,C,A].forEach(function(e){clearTimeout(e)}),rn.removeEventListener("scroll",Ce),rn.removeEventListener("hashchange",ct),rn.removeEventListener("resize",Et),ln.removeEventListener("keydown",ft),ln.removeEventListener("keyup",dt),["click","touchstart"].forEach(function(e){ln.removeEventListener(e,we)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){ln.removeEventListener(e,Ee,!0)}),Qt("dragAndMove","destroy"),e&&(Zt(0),Zn("img[data-src], source[data-src], audio[data-src], iframe[data-src]",w).forEach(function(e){Qe(e,"src")}),Zn("img[data-srcset]").forEach(function(e){Qe(e,"srcset")}),Eo(Zn(Ln+", "+Nn+", "+Pn)),Qn(Zn(Sn),{height:"","background-color":"",padding:""}),Qn(Zn(On),{width:""}),Qn(w,{height:"",position:"","-ms-touch-action":"","touch-action":""}),Qn(r,{overflow:"",height:""}),io(s,dn),io(m,cn),m.className.split(/\s+/).forEach(function(e){0===e.indexOf(vn)&&io(m,e)}),Zn(Sn+", "+On).forEach(function(e){g.scrollOverflowHandler&&g.scrollOverflow&&g.scrollOverflowHandler.remove(e),io(e,zn+" "+pn+" "+gn);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),Gn(e,mn)&&!V&&e.removeAttribute("data-anchor")}),Ft(w),[yn,In,Hn].forEach(function(e){Zn(e,w).forEach(function(e){co(e)})}),rn.scrollTo(0,0),[mn,Tn,Rn].forEach(function(e){io(Zn("."+e),e)}))},S.getActiveSection=function(){return new nn(Zn(bn)[0])},S.getActiveSlide=function(){return Ge(Zn(kn,Zn(bn)[0])[0])},S.landscapeScroll=St,S.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<Zn(g.sectionSelector,w).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<Zn(g.sectionSelector,w).length;t++)e.push(0);return e}(),options:g,setAutoScrolling:oe},S.shared={afterRenderActions:ke,isNormalScrollElement:!1},rn.fullpage_api=S,rn.fullpage_extensions=!0,g.$&&Object.keys(S).forEach(function(e){g.$.fn.fullpage[e]=S[e]}),Ae("continuousHorizontal"),Ae("scrollHorizontally"),Ae("resetSliders"),Ae("interlockedSlides"),Ae("responsiveSlides"),Ae("fadingEffect"),Ae("dragAndMove"),Ae("offsetSections"),Ae("scrollOverflowReset"),Ae("parallax"),Ae("cards"),Qt("dragAndMove","init"),g.css3&&(g.css3=function(){var e,t=ln.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var o in t.style.display="block",ln.body.insertBefore(t,null),n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",e=rn.getComputedStyle(t).getPropertyValue(n[o]));return ln.body.removeChild(t),void 0!==e&&0<e.length&&"none"!==e}()),g.scrollBar=g.scrollBar||g.hybrid,function(){if(!g.anchors.length){var e="[data-anchor]",t=Zn(g.sectionSelector.split(",").join(e+",")+e,w);t.length&&(V=!0,t.forEach(function(e){g.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!g.navigationTooltips.length){var n="[data-tooltip]",o=Zn(g.sectionSelector.split(",").join(n+",")+n,w);o.length&&o.forEach(function(e){g.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){Qn(w,{height:"100%",position:"relative"}),ro(w,an),ro(s,dn),y=Fn(),io(w,fn),ro(Zn(g.sectionSelector,w),mn),ro(Zn(g.slideSelector,w),Tn),Qt("parallax","init");for(var e=Zn(Sn),t=0;t<e.length;t++){var n=t,o=e[t],r=Zn(On,o),i=r.length;o.setAttribute("data-fp-styles",o.getAttribute("style")),Te(o,n),l=o,a=n,void 0!==g.anchors[a]&&Gn(l,pn)&&Tt(g.anchors[a],a),g.menu&&g.css3&&null!=uo(Zn(g.menu)[0],sn)&&Zn(g.menu).forEach(function(e){m.appendChild(e)}),0<i?Le(o,r,i):g.verticalCentered&&Ct(o)}var l,a;g.fixedElements&&g.css3&&Zn(g.fixedElements).forEach(function(e){m.appendChild(e)}),g.navigation&&function(){var e=ln.createElement("div");e.setAttribute("id",An);var t=ln.createElement("ul");e.appendChild(t),lo(e,m);var n=Zn(Ln)[0];ro(n,"fp-"+g.navigationPosition),g.showActiveTooltip&&ro(n,"fp-show-active");for(var o="",r=0;r<Zn(Sn).length;r++){var i="";g.anchors.length&&(i=g.anchors[r]),o+='<li><a href="#'+i+'"><span class="fp-sr-only">'+Oe(r,"Section")+"</span><span></span></a>";var l=g.navigationTooltips[r];void 0!==l&&""!==l&&(o+='<div class="'+Mn+" fp-"+g.navigationPosition+'">'+l+"</div>"),o+="</li>"}Zn("ul",n)[0].innerHTML=o,Qn(Zn(Ln),{"margin-top":"-"+Zn(Ln)[0].offsetHeight/2+"px"}),ro(Zn("a",Zn("li",Zn(Ln)[0])[eo(Zn(bn)[0],Sn)]),pn)}(),Zn('iframe[src*="youtube.com/embed/"]',w).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),Qt("fadingEffect","apply"),Qt("cards","init"),g.scrollOverflow&&(p=g.scrollOverflowHandler.init(g))}(),se(!0),ce(!0),oe(g.autoScrolling,"internal"),At(),Wt(),"complete"===ln.readyState&&st(),rn.addEventListener("load",st),g.scrollOverflow||ke(),function(){for(var e=1;e<4;e++)C=setTimeout(xe,350*e)}(),B||lt("l"),rn.addEventListener("scroll",Ce),rn.addEventListener("hashchange",ct),rn.addEventListener("blur",gt),rn.addEventListener("resize",Et),ln.addEventListener("keydown",ft),ln.addEventListener("keyup",dt),["click","touchstart"].forEach(function(e){ln.addEventListener(e,we)}),g.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){ye(e,!1)}),["mouseleave","touchend"].forEach(function(e){ye(e,!0)})),Qt("dragAndMove","turnOffTouch"));var G,F,U,Q=!1,_=0,J=0,K=0,$=0,q=(new Date).getTime(),ee=0,te=0,ne=y;return S}function oe(e,t){e||Zt(0),Kt("autoScrolling",e,t);var n=Zn(bn)[0];if(g.autoScrolling&&!g.scrollBar)Qn(r,{overflow:"hidden",height:"100%"}),re(Y.recordHistory,"internal"),Qn(w,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&Zt(n.offsetTop);else if(Qn(r,{overflow:"visible",height:"initial"}),re(!!g.autoScrolling&&Y.recordHistory,"internal"),Qn(w,{"-ms-touch-action":"","touch-action":""}),Ft(w),null!=n){var o=Fe(n.offsetTop);o.element.scrollTo(0,o.options)}So(w,"setAutoScrolling",e)}function re(e,t){Kt("recordHistory",e,t)}function ie(e,t){"internal"!==t&&Ut("fadingEffect")&&S.fadingEffect.update(e),Ut("cards")&&S.cards.update(e),Kt("scrollingSpeed",e,t)}function le(e,t){Kt("fitToSection",e,t)}function ae(e){e?(function(){var e,t="";rn.addEventListener?e="addEventListener":(e="attachEvent",t="on");var n="onwheel"in ln.createElement("div")?"wheel":void 0!==ln.onmousewheel?"mousewheel":"DOMMouseScroll",o=!!j&&{passive:!1};"DOMMouseScroll"==n?ln[e](t+"MozMousePixelScroll",Pe,o):ln[e](t+n,Pe,o)}(),w.addEventListener("mousedown",vt),w.addEventListener("mouseup",pt)):(ln.addEventListener?(ln.removeEventListener("mousewheel",Pe,!1),ln.removeEventListener("wheel",Pe,!1),ln.removeEventListener("MozMousePixelScroll",Pe,!1)):ln.detachEvent("onmousewheel",Pe),w.removeEventListener("mousedown",vt),w.removeEventListener("mouseup",pt))}function se(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Gt(t,e,"m")}):Gt(t,"all","m"),So(w,"setAllowScrolling",{value:t,directions:e})}function ce(e){e?(ae(!0),function(){if(i||u){g.autoScrolling&&(m.removeEventListener(I.touchmove,Ie,{passive:!1}),m.addEventListener(I.touchmove,Ie,{passive:!1}));var e=g.touchWrapper;e.removeEventListener(I.touchstart,Ne),e.removeEventListener(I.touchmove,ze,{passive:!1}),e.addEventListener(I.touchstart,Ne),e.addEventListener(I.touchmove,ze,{passive:!1})}}()):(ae(!1),function(){if(i||u){g.autoScrolling&&(m.removeEventListener(I.touchmove,ze,{passive:!1}),m.removeEventListener(I.touchmove,Ie,{passive:!1}));var e=g.touchWrapper;e.removeEventListener(I.touchstart,Ne),e.removeEventListener(I.touchmove,ze,{passive:!1})}}())}function ue(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Gt(t,e,"k")}):(Gt(t,"all","k"),g.keyboardScrolling=t)}function fe(){var e=_n(Zn(bn)[0],Sn);e||!g.loopTop&&!g.continuousVertical||(e=qn(Zn(Sn))),null!=e&&Ve(e,null,!0)}function de(){var e=Jn(Zn(bn)[0],Sn);e||!g.loopBottom&&!g.continuousVertical||(e=Zn(Sn)[0]),null!=e&&Ve(e,null,!1)}function ve(e,t){ie(0,"internal"),pe(e,t),ie(Y.scrollingSpeed,"internal")}function pe(e,t){var n=It(e);void 0!==t?zt(e,t):null!=n&&Ve(n)}function he(e){We("right",e)}function ge(e){We("left",e)}function me(e){if(!Gn(w,fn)){E=!0,y=Fn(),f=Un();for(var t=Zn(Sn),n=0;n<t.length;++n){var o=t[n],r=Zn(Hn,o)[0],i=Zn(On,o);g.verticalCentered&&Qn(Zn(yn,o),{height:Ht(o)+"px"}),Qn(o,{height:Me(o)+"px"}),1<i.length&&St(r,Zn(kn,r)[0])}g.scrollOverflow&&p.createScrollBarForAll();var l=eo(Zn(bn)[0],Sn);l&&!Ut("fadingEffect")&&ve(l+1),E=!1,mo(g.afterResize)&&e&&g.afterResize.call(w,rn.innerWidth,rn.innerHeight),mo(g.afterReBuild)&&!e&&g.afterReBuild.call(w),So(w,"afterRebuild")}}function Se(){return Gn(m,cn)}function be(e){var t=Se();e?t||(oe(!1,"internal"),le(!1,"internal"),to(Zn(Ln)),ro(m,cn),mo(g.afterResponsive)&&g.afterResponsive.call(w,e),Qt("responsiveSlides","toSections"),So(w,"afterResponsive",e),g.scrollOverflow&&p.createScrollBarForAll()):t&&(oe(Y.autoScrolling,"internal"),le(Y.autoScrolling,"internal"),no(Zn(Ln)),io(m,cn),mo(g.afterResponsive)&&g.afterResponsive.call(w,e),Qt("responsiveSlides","toSlides"),So(w,"afterResponsive",e))}function we(e){var t=e.target;t&&uo(t,Ln+" a")?function(e){go(e);var t=eo(uo(this,Ln+" li"));Ve(Zn(Sn)[t])}.call(t,e):bo(t,".fp-tooltip")?function(){So(Kn(this),"click")}.call(t):bo(t,Pn)?function(){var e=uo(this,Sn);Gn(this,Wn)?v.m.left&&ge(e):v.m.right&&he(e)}.call(t,e):bo(t,jn)||null!=uo(t,jn)?function(e){go(e);var t=Zn(Hn,uo(this,Sn))[0],n=Zn(On,t)[eo(uo(this,"li"))];St(t,n)}.call(t,e):uo(t,g.menu+" [data-menuanchor]")&&function(e){!Zn(g.menu)[0]||!g.lockAnchors&&g.anchors.length||(go(e),pe(this.getAttribute("data-menuanchor")))}.call(t,e)}function ye(e,t){ln["fp_"+e]=t,ln.addEventListener(e,Ee,!0)}function Ee(e){var t=e.type,o=!1,r=g.scrollOverflow,i="mouseleave"===t?e.toElement||e.relatedTarget:e.target;if(i==ln||!i)return ce(!0),void(r&&g.scrollOverflowHandler.setIscroll(i,!0));"touchend"===t&&(Z=!1,setTimeout(function(){Z=!0},800)),("mouseenter"!==t||Z)&&(g.normalScrollElements.split(",").forEach(function(e){if(!o){var t=bo(i,e),n=uo(i,e);(t||n)&&(S.shared.isNormalScrollElement||(ce(!1),r&&g.scrollOverflowHandler.setIscroll(i,!1)),S.shared.isNormalScrollElement=!0,o=!0)}}),!o&&S.shared.isNormalScrollElement&&(ce(!0),r&&g.scrollOverflowHandler.setIscroll(i,!0),S.shared.isNormalScrollElement=!1))}function xe(){var e=Fn(),t=Un();y===e&&f===t||(y=e,f=t,me(!0))}function Ae(e){var t="fp_"+e+"Extension";X[e]=g[e+"Key"],S[e]=void 0!==rn[t]?new rn[t]:null,S[e]&&S[e].c(e)}function Le(e,t,n){var o=100*n,r=100/n,i=ln.createElement("div");i.className=Cn,ao(t,i);var l,a,s=ln.createElement("div");s.className=Rn,ao(t,s),Qn(Zn(In,e),{width:o+"%"}),1<n&&(g.controlArrows&&(l=e,a=[yo('<div class="fp-controlArrow fp-prev"></div>'),yo('<div class="fp-controlArrow fp-next"></div>')],fo(Zn(Hn,l)[0],a),"#fff"!==g.controlArrowColor&&(Qn(Zn(Yn,l),{"border-color":"transparent transparent transparent "+g.controlArrowColor}),Qn(Zn(Dn,l),{"border-color":"transparent "+g.controlArrowColor+" transparent transparent"})),g.loopHorizontal||to(Zn(Dn,l))),g.slidesNavigation&&function(e,t){lo(yo('<div class="'+Bn+'"><ul></ul></div>'),e);var n=Zn(Nn,e)[0];ro(n,"fp-"+g.slidesNavPosition);for(var o=0;o<t;o++)lo(yo('<li><a href="#"><span class="fp-sr-only">'+Oe(o,"Slide")+"</span><span></span></a></li>"),Zn("ul",n)[0]);Qn(n,{"margin-left":"-"+n.innerWidth/2+"px"}),ro(Zn("a",Zn("li",n)[0]),pn)}(e,n)),t.forEach(function(e){Qn(e,{width:r+"%"}),g.verticalCentered&&Ct(e)});var c=Zn(kn,e)[0];null!=c&&(0!==eo(Zn(bn),Sn)||0===eo(Zn(bn),Sn)&&0!==eo(c))?(Vt(c,"internal"),ro(c,"fp-initial")):ro(t[0],pn)}function Me(e){return g.offsetSections&&S.offsetSections?Math.round(S.offsetSections.getWindowHeight(e)):Fn()}function Te(e,t){t||null!=Zn(bn)[0]||ro(e,pn),o=Zn(bn)[0],Qn(e,{height:Me(e)+"px"}),g.paddingTop&&Qn(e,{"padding-top":g.paddingTop}),g.paddingBottom&&Qn(e,{"padding-bottom":g.paddingBottom}),void 0!==g.sectionsColor[t]&&Qn(e,{"background-color":g.sectionsColor[t]}),void 0!==g.anchors[t]&&e.setAttribute("data-anchor",g.anchors[t])}function Oe(e,t){return g.navigationTooltips[e]||g.anchors[e]||t+" "+(e+1)}function ke(){var e,t,n=Zn(bn)[0];ro(n,gn),Je(n),_e(),$e(n),g.scrollOverflow&&g.scrollOverflowHandler.afterLoad(),e=ut(),t=It(e.section),e.section&&t&&(void 0===t||eo(t)!==eo(o))||!mo(g.afterLoad)||Ze("afterLoad",{activeSection:n,element:n,direction:null,anchorLink:n.getAttribute("data-anchor"),sectionIndex:eo(n,Sn)}),mo(g.afterRender)&&Ze("afterRender"),So(w,"afterRender")}function Ce(){var e;if(So(w,"onScroll"),(!g.autoScrolling||g.scrollBar||Ut("dragAndMove"))&&!Jt()){var t=Ut("dragAndMove")?Math.abs(S.dragAndMove.getCurrentScroll()):po(),n=0,o=t+Fn()/2,r=(Ut("dragAndMove")?S.dragAndMove.getDocumentHeight():m.offsetHeight-Fn())===t,i=Zn(Sn);if(r)n=i.length-1;else if(t)for(var l=0;l<i.length;++l)i[l].offsetTop<=o&&(n=l);else n=0;if(!Gn(e=i[n],pn)){Q=!0;var a,s,c=Zn(bn)[0],u=eo(c,Sn)+1,f=Ot(e),d=e.getAttribute("data-anchor"),v=eo(e,Sn)+1,p=Zn(kn,e)[0],h={activeSection:c,sectionIndex:v-1,anchorLink:d,element:e,leavingSection:u,direction:f};p&&(s=p.getAttribute("data-anchor"),a=eo(p)),x&&(ro(e,pn),io(ho(e),pn),Qt("parallax","afterLoad"),mo(g.onLeave)&&Ze("onLeave",h),mo(g.afterLoad)&&Ze("afterLoad",h),Ut("resetSliders")&&S.resetSliders.apply({localIsResizing:E,leavingSection:u}),et(c),Je(e),$e(e),Tt(d,v-1),g.anchors.length&&(b=d),Nt(a,s,d)),clearTimeout(T),T=setTimeout(function(){Q=!1},100)}g.fitToSection&&(clearTimeout(O),O=setTimeout(function(){g.fitToSection&&Zn(bn)[0].offsetHeight<=y&&He()},g.fitToSectionDelay))}}function He(){x&&(E=!0,Ve(Zn(bn)[0]),E=!1)}function Re(e){if(v.m[e]){var t="down"===e?de:fe;if(Ut("scrollHorizontally")&&(t=S.scrollHorizontally.getScrollSection(e,t)),g.scrollOverflow){var n=g.scrollOverflowHandler.scrollable(Zn(bn)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!g.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function Ie(e){g.autoScrolling&&Be(e)&&v.m.up&&go(e)}function ze(e){var t=uo(e.target,Sn)||Zn(bn)[0];if(Be(e)){g.autoScrolling&&go(e);var n=Yt(e);K=n.y,$=n.x,Zn(Hn,t).length&&Math.abs(J-$)>Math.abs(_-K)?!a&&Math.abs(J-$)>Un()/100*g.touchSensitivity&&($<J?v.m.right&&he(t):v.m.left&&ge(t)):g.autoScrolling&&x&&Math.abs(_-K)>rn.innerHeight/100*g.touchSensitivity&&(K<_?Re("down"):_<K&&Re("up"))}}function Be(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function Ne(e){if(g.fitToSection&&(W=!1),Be(e)){var t=Yt(e);_=t.y,J=t.x}}function je(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function Pe(e){var t=(new Date).getTime(),n=Gn(Zn(".fp-completely")[0],xn);if(!v.m.down&&!v.m.up)return go(e),!1;if(g.autoScrolling&&!c&&!n){var o=(e=e||rn.event).wheelDelta||-e.deltaY||-e.detail,r=Math.max(-1,Math.min(1,o)),i=void 0!==e.wheelDeltaX||void 0!==e.deltaX,l=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!i;149<d.length&&d.shift(),d.push(Math.abs(o)),g.scrollBar&&go(e);var a=t-q;if(q=t,200<a&&(d=[]),x&&!_t()){var s=je(d,10);je(d,70)<=s&&l&&Re(r<0?"down":"up")}return!1}g.fitToSection&&(W=!1)}function We(e,t){var n=null==t?Zn(bn)[0]:t,o=Zn(Hn,n)[0];if(!(null==o||_t()||a||Zn(On,o).length<2)){var r=Zn(kn,o)[0],i=null;if(null==(i="left"===e?_n(r,On):Jn(r,On))){if(!g.loopHorizontal)return;var l=ho(r);i="left"===e?l[l.length-1]:l[0]}a=!S.test.isTesting,St(o,i,e)}}function De(){for(var e=Zn(kn),t=0;t<e.length;t++)Vt(e[t],"internal")}function Ye(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=Ut("dragAndMove")&&S.dragAndMove.isGrabbing?S.dragAndMove.isScrollingDown():ee<n,i=o-y+t,l=g.bigSectionsDestination;return y<t?(r||l)&&"bottom"!==l||(o=i):(r||E&&null==$n(e))&&(o=i),g.offsetSections&&S.offsetSections&&(o=S.offsetSections.getSectionPosition(r,o,e)),ee=o}function Ve(e,t,n){if(null!=e){var o,r,i={element:e,callback:t,isMovementUp:n,dtop:Ye(e),yMovement:Ot(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:eo(e,Sn),activeSlide:Zn(kn,e)[0],activeSection:Zn(bn)[0],leavingSection:eo(Zn(bn),Sn)+1,localIsResizing:E};if(!(i.activeSection==e&&!E||g.scrollBar&&po()===i.dtop&&!Gn(e,En))){if(null!=i.activeSlide&&(o=i.activeSlide.getAttribute("data-anchor"),r=eo(i.activeSlide)),!i.localIsResizing){var l=i.yMovement;if(void 0!==n&&(l=n?"up":"down"),i.direction=l,mo(g.onLeave)&&!1===Ze("onLeave",i))return}var a;Qt("parallax","apply",i),Qt("cards","apply",i),g.autoScrolling&&g.continuousVertical&&void 0!==i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&((s=i).isMovementUp?vo(Zn(bn)[0],xo(s.activeSection,Sn)):fo(Zn(bn)[0],Ao(s.activeSection,Sn).reverse()),Zt(Zn(bn)[0].offsetTop),De(),s.wrapAroundElements=s.activeSection,s.dtop=s.element.offsetTop,s.yMovement=Ot(s.element),s.leavingSection=eo(s.activeSection,Sn)+1,s.sectionIndex=eo(s.element,Sn),So(Zn(sn)[0],"onContinuousVertical",s),i=s),Ut("scrollOverflowReset")&&S.scrollOverflowReset.setPrevious(i.activeSection),i.localIsResizing||et(i.activeSection),g.scrollOverflow&&g.scrollOverflowHandler.beforeLeave(),ro(e,pn),io(ho(e),pn),Je(e),g.scrollOverflow&&g.scrollOverflowHandler.onLeave(),x=S.test.isTesting,Nt(r,o,i.anchorLink,i.sectionIndex),function(e){if(g.css3&&g.autoScrolling&&!g.scrollBar){var t="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";Rt(t,!0),g.scrollingSpeed?(clearTimeout(L),L=setTimeout(function(){Ue(e)},g.scrollingSpeed)):Ue(e)}else{var n=Fe(e.dtop);S.test.top=-e.dtop+"px",qt(n.element,n.options,g.scrollingSpeed,function(){g.scrollBar?setTimeout(function(){Ue(e)},30):Ue(e)})}}(i),b=i.anchorLink,Tt(i.anchorLink,null==(a=i).wrapAroundElements?a.sectionIndex:a.isMovementUp?Zn(Sn).length-1:0)}}var s}function Ze(e,t){var n,o,r,i,l=(o=e,r=t,(i=g.v2compatible?{afterRender:function(){return[w]},onLeave:function(){return[r.activeSection,r.leavingSection,r.sectionIndex+1,r.direction]},afterLoad:function(){return[r.element,r.anchorLink,r.sectionIndex+1]},afterSlideLoad:function(){return[r.destiny,r.anchorLink,r.sectionIndex+1,r.slideAnchor,r.slideIndex]},onSlideLeave:function(){return[r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.direction,r.slideIndex]}}:{afterRender:function(){return{section:Xe(Zn(bn)[0]),slide:Ge(Zn(kn,Zn(bn)[0])[0])}},onLeave:function(){return{origin:Xe(r.activeSection),destination:Xe(r.element),direction:r.direction}},afterLoad:function(){return i.onLeave()},afterSlideLoad:function(){return{section:Xe(r.section),origin:Ge(r.prevSlide),destination:Ge(r.destiny),direction:r.direction}},onSlideLeave:function(){return i.afterSlideLoad()}})[o]());if(g.v2compatible){if(!1===g[e].apply(l[0],l.slice(1)))return!1}else if(So(w,e,l),!1===g[e].apply(l[Object.keys(l)[0]],(n=l,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function Xe(e){return e?new nn(e):null}function Ge(e){return e?new on(e):null}function Fe(e){var t={};return g.autoScrolling&&!g.scrollBar?(t.options=-e,t.element=Zn(sn)[0]):(t.options=e,t.element=rn),t}function Ue(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?vo(Zn(Sn)[0],t.wrapAroundElements):fo(Zn(Sn)[Zn(Sn).length-1],t.wrapAroundElements),Zt(Zn(bn)[0].offsetTop),De(),t.sectionIndex=eo(t.element,Sn),t.leavingSection=eo(t.activeSection,Sn)+1),mo(g.afterLoad)&&!e.localIsResizing&&Ze("afterLoad",e),g.scrollOverflow&&g.scrollOverflowHandler.afterLoad(),Qt("parallax","afterLoad"),Qt("scrollOverflowReset","reset"),Ut("resetSliders")&&S.resetSliders.apply(e),e.localIsResizing||$e(e.element),ro(e.element,gn),io(ho(e.element),gn),_e(),x=!0,mo(e.callback)&&e.callback()}function Qe(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function _e(){var e=Zn(".fp-auto-height")[0]||Se()&&Zn(".fp-auto-height-responsive")[0];g.lazyLoading&&e&&Zn(Sn+":not("+hn+")").forEach(function(e){var t,n,o;t=e.getBoundingClientRect(),n=t.top,o=t.bottom,(n+2<y&&0<n||2<o&&o<y)&&Je(e)})}function Je(o){g.lazyLoading&&Zn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",tt(o)).forEach(function(n){if(["src","srcset"].forEach(function(e){var t=n.getAttribute("data-"+e);null!=t&&t&&(Qe(n,e),n.addEventListener("load",function(){Ke(o)}))}),bo(n,"source")){var e=uo(n,"video, audio");e&&(e.load(),e.onloadeddata=function(){Ke(o)})}})}function Ke(e){g.scrollOverflow&&(clearTimeout(D),D=setTimeout(function(){p.createScrollBar(e)},200))}function $e(e){var t=tt(e);Zn("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),Zn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&qe(e),e.onload=function(){e.hasAttribute("data-autoplay")&&qe(e)}})}function qe(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function et(e){var t=tt(e);Zn("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),Zn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function tt(e){var t=Zn(kn,e);return t.length&&(e=t[0]),e}function nt(e){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(e){var t,n,o,r,i,l,a="",s=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");s<e.length;)t=c.indexOf(e.charAt(s++))<<2|(r=c.indexOf(e.charAt(s++)))>>4,n=(15&r)<<4|(i=c.indexOf(e.charAt(s++)))>>2,o=(3&i)<<6|(l=c.indexOf(e.charAt(s++))),a+=String.fromCharCode(t),64!=i&&(a+=String.fromCharCode(n)),64!=l&&(a+=String.fromCharCode(o));return a=function(e){for(var t,n="",o=0,r=0,i=0;o<e.length;)(r=e.charCodeAt(o))<128?(n+=String.fromCharCode(r),o++):191<r&&r<224?(i=e.charCodeAt(o+1),n+=String.fromCharCode((31&r)<<6|63&i),o+=2):(i=e.charCodeAt(o+1),t=e.charCodeAt(o+2),n+=String.fromCharCode((15&r)<<12|(63&i)<<6|63&t),o+=3);return n}(a)}function r(e){return e.slice(3).slice(0,-3)}return function(e){var t=e.split("_");if(1<t.length){var n=t[1];return e.replace(r(t[1]),"").split("_")[0]+"_"+o(n.slice(3).slice(0,-3))}return r(e)}(o(e))}function ot(f){var d=void 0!==X[f]&&X[f].length,e=[],v=!1;return oo(X[f])?e=X[f]:e.push(X[f]),e.forEach(function(e){var t=function(){if(ln.domain.length){for(var e=ln.domain.replace(/^(www\.)/,"").split(".");2<e.length;)e.shift();return e.join(".").replace(/(^\.*)|(\.*$)/g,"")}return""}(),n=["MTM0bG9jYWxob3N0MjM0","MTM0MC4xMjM0","MTM0anNoZWxsLm5ldDIzNA==","UDdDQU5ZNlNN"],o=nt(n[0]),r=nt(n[1]),i=nt(n[2]),l=nt(n[3]),a=[o,r,i].indexOf(t)<0&&0!==t.length;if(!d&&a)return!1;var s=d?nt(e):"",c=1<(s=s.split("_")).length&&-1<s[1].indexOf(f,s[1].length-f.length),u=s[0].indexOf(t,s[0].length-t.length)<0;v=v||!(u&&a&&l!=s[0])&&c||!a}),v}function rt(e){e.forEach(function(e){if(e.removedNodes[0]&&e.removedNodes[0].isEqualNode(F)){clearTimeout(U);var t=nt("bDIwc2V0VGltZW91dDAzbA==");U=rn[t](it,900)}})}function it(){z=!1}function lt(e){if(F=ln.createElement("div"),G=nt("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),B||(G=G.replace("extensions/","").replace("Extension","")),F.innerHTML=G,F=F.firstChild,"MutationObserver"in rn&&new MutationObserver(rt).observe(ln.body,{childList:!0,subtree:!1}),(!B||Ut(e)&&S[e])&&(!ot(e)||!B)){at();var t=nt("MzQ1c2V0SW50ZXJ2YWwxMjM=");rn[t](at,2e3)}}function at(){F&&(z||(Math.random()<.5?Lo(m,F):lo(F,m),z=!0),F.setAttribute("style",nt("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g,nt("MTIzICFpbXBvcnRhbnQ7MzQ1"))))}function st(){var e=ut(),t=e.section,n=e.slide;t&&(g.animateAnchor?zt(t,n):ve(t,n))}function ct(){if(!Q&&!g.lockAnchors){var e=ut(),t=e.section,n=e.slide,o=void 0===b,r=void 0===b&&void 0===n&&!a;if(t&&t.length){var i=!Ut("dragAndMove")||l;(t&&t!==b&&!o||r||!a&&l!=n&&i)&&zt(t,n)}}}function ut(){var e,t,n=rn.location.hash;if(n.length){var o=n.replace("#","").split("/"),r=-1<n.indexOf("#/");e=r?"/"+o[1]:decodeURIComponent(o[0]);var i=r?o[2]:o[1];i&&i.length&&(t=decodeURIComponent(i))}return{section:e,slide:t}}function ft(e){clearTimeout(k);var t=ln.activeElement,n=e.keyCode;9===n?function(e){var t,n,o,r,i,l,a,s=e.shiftKey,c=ln.activeElement,u=ht(tt(Zn(bn)[0]));function f(e){return go(e),u[0]?u[0].focus():null}(t=e,n=ht(ln),o=n.indexOf(ln.activeElement),r=t.shiftKey?o-1:o+1,i=n[r],l=Ge(uo(i,On)),a=Xe(uo(i,Sn)),l||a)&&(c?null==uo(c,bn+","+bn+" "+kn)&&(c=f(e)):f(e),(!s&&c==u[u.length-1]||s&&c==u[0])&&go(e))}(e):bo(t,"textarea")||bo(t,"input")||bo(t,"select")||"true"===t.getAttribute("contentEditable")||""===t.getAttribute("contentEditable")||!g.keyboardScrolling||!g.autoScrolling||(-1<[40,38,32,33,34].indexOf(n)&&go(e),c=e.ctrlKey,k=setTimeout(function(){!function(e){var t=e.shiftKey,n=ln.activeElement,o=bo(n,"video")||bo(n,"audio");if(x||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:v.k.up&&fe();break;case 32:if(t&&v.k.up&&!o){fe();break}case 40:case 34:v.k.down&&(32===e.keyCode&&o||de());break;case 36:v.k.up&&pe(1);break;case 35:v.k.down&&pe(Zn(Sn).length);break;case 37:v.k.left&&ge();break;case 39:v.k.right&&he()}}(e)},150))}function dt(e){t&&(c=e.ctrlKey)}function vt(e){2==e.which&&(te=e.pageY,w.addEventListener("mousemove",mt))}function pt(e){2==e.which&&w.removeEventListener("mousemove",mt)}function ht(e){return[].slice.call(Zn(N,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function gt(){c=t=!1}function mt(e){g.autoScrolling&&(x&&(e.pageY<te&&v.m.up?fe():e.pageY>te&&v.m.down&&de()),te=e.pageY)}function St(e,t,n){var o=uo(e,Sn),r={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:eo(t),section:o,sectionIndex:eo(o,Sn),anchorLink:o.getAttribute("data-anchor"),slidesNav:Zn(Nn,o)[0],slideAnchor:Pt(t),prevSlide:Zn(kn,o)[0],prevSlideIndex:eo(Zn(kn,o)[0]),localIsResizing:E};r.xMovement=kt(r.prevSlideIndex,r.slideIndex),r.direction=r.direction?r.direction:r.xMovement,r.localIsResizing||(x=!1),Qt("parallax","applyHorizontal",r),Qt("cards","apply",r),g.onSlideLeave&&!r.localIsResizing&&"none"!==r.xMovement&&mo(g.onSlideLeave)&&!1===Ze("onSlideLeave",r)?a=!1:(ro(t,pn),io(ho(t),pn),r.localIsResizing||(et(r.prevSlide),Je(t)),bt(r),Gn(o,pn)&&!r.localIsResizing&&Nt(r.slideIndex,r.slideAnchor,r.anchorLink,r.sectionIndex),S.continuousHorizontal&&S.continuousHorizontal.apply(r),Jt()?wt(r):yt(e,r,!0),g.interlockedSlides&&S.interlockedSlides&&(Ut("continuousHorizontal")&&void 0!==n&&n!==r.xMovement||S.interlockedSlides.apply(r)))}function bt(e){!g.loopHorizontal&&g.controlArrows&&(wo(Zn(Dn,e.section),0!==e.slideIndex),wo(Zn(Yn,e.section),null!=$n(e.destiny)))}function wt(e){var t,n;S.continuousHorizontal&&S.continuousHorizontal.afterSlideLoads(e),t=e.slidesNav,n=e.slideIndex,g.slidesNavigation&&null!=t&&(io(Zn(hn,t),pn),ro(Zn("a",Zn("li",t)[n]),pn)),e.localIsResizing||(Qt("parallax","afterSlideLoads"),Qt("scrollOverflowReset","setPrevious",e.prevSlide),Qt("scrollOverflowReset","reset"),mo(g.afterSlideLoad)&&Ze("afterSlideLoad",e),x=!0,$e(e.destiny)),a=!1,Ut("interlockedSlides")&&S.interlockedSlides.apply(e)}function yt(e,t,n){var o=t.destinyPos;if(g.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";S.test.translate3dH[t.sectionIndex]=r,Qn(Lt(Zn(In,e)),Xt(r)),M=setTimeout(function(){n&&wt(t)},g.scrollingSpeed)}else S.test.left[t.sectionIndex]=Math.round(o.left),qt(e,Math.round(o.left),g.scrollingSpeed,function(){n&&wt(t)})}function Et(){clearTimeout(h),h=setTimeout(function(){for(var e=0;e<4;e++)A=setTimeout(xt,200*e)},200)}function xt(){if(So(w,"onResize"),At(),i){var e=ln.activeElement;if(!bo(e,"textarea")&&!bo(e,"input")&&!bo(e,"select")){var t=Fn();Math.abs(t-ne)>20*Math.max(ne,t)/100&&(me(!0),ne=t)}}else xe()}function At(){var e=g.responsive||g.responsiveWidth,t=g.responsiveHeight,n=e&&rn.innerWidth<e,o=t&&rn.innerHeight<t;e&&t?be(n||o):e?be(n):t&&be(o)}function Lt(e){var t="all "+g.scrollingSpeed+"ms "+g.easingcss3;return io(e,un),Qn(e,{"-webkit-transition":t,transition:t})}function Mt(e){return ro(e,un)}function Tt(e,t){var n,o,r,i;n=e,Zn(g.menu).forEach(function(e){g.menu&&null!=e&&(io(Zn(hn,e),pn),ro(Zn('[data-menuanchor="'+n+'"]',e),pn))}),o=e,r=t,i=Zn(Ln)[0],g.navigation&&null!=i&&"none"!==i.style.display&&(io(Zn(hn,Zn(Ln)[0]),pn),ro(o?Zn('a[href="#'+o+'"]',Zn(Ln)[0]):Zn("a",Zn("li",Zn(Ln)[0])[r]),pn))}function Ot(e){var t=eo(Zn(bn)[0],Sn),n=eo(e,Sn);return t==n?"none":n<t?"up":"down"}function kt(e,t){return e==t?"none":t<e?"left":"right"}function Ct(e){if(!Gn(e,zn)){var t=ln.createElement("div");t.className=wn,t.style.height=Ht(e)+"px",ro(e,zn),so(e,t)}}function Ht(e){var t=Me(e);if(g.paddingTop||g.paddingBottom){var n=e;Gn(n,mn)||(n=uo(e,Sn)),t-=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"])}return t}function Rt(e,t){t?Lt(w):Mt(w),clearTimeout(H),Qn(w,Xt(e)),S.test.translate3d=e,H=setTimeout(function(){io(w,un)},10)}function It(e){var t=Zn(Sn+'[data-anchor="'+e+'"]',w)[0];if(!t){var n=void 0!==e?e-1:0;t=Zn(Sn)[n]}return t}function zt(e,t){var n=It(e);if(null!=n){var o,r,i,l=(null==(i=Zn(On+'[data-anchor="'+(o=t)+'"]',r=n)[0])&&(o=void 0!==o?o:0,i=Zn(On,r)[o]),i);Pt(n)===b||Gn(n,pn)?Bt(l):Ve(n,function(){Bt(l)})}}function Bt(e){null!=e&&St(uo(e,Hn),e)}function Nt(e,t,n,o){var r="";g.anchors.length&&!g.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),jt(r+"/"+(l=t))):(null!=e&&(l=t),jt(n))),Wt()}function jt(e){if(g.recordHistory)location.hash=e;else if(i||u)rn.history.replaceState(void 0,void 0,"#"+e);else{var t=rn.location.href.split("#")[0];rn.location.replace(t+"#"+e)}}function Pt(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=eo(e);return null==t&&(t=n),t}function Wt(){var e=Zn(bn)[0],t=Zn(kn,e)[0],n=Pt(e),o=Pt(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+vn+"-[^\\s]+\\b","g");m.className=m.className.replace(i,""),ro(m,vn+"-"+r)}function Dt(){return rn.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Yt(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,u&&Be(e)&&g.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function Vt(e,t){ie(0,"internal"),void 0!==t&&(E=!0),St(uo(e,Hn),e),void 0!==t&&(E=!1),ie(Y.scrollingSpeed,"internal")}function Zt(e){var t=Math.round(e);if(g.css3&&g.autoScrolling&&!g.scrollBar)Rt("translate3d(0px, -"+t+"px, 0px)",!1);else if(g.autoScrolling&&!g.scrollBar)Qn(w,{top:-t+"px"}),S.test.top=-t+"px";else{var n=Fe(t);en(n.element,n.options)}}function Xt(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Gt(t,e,n){"all"!==e?v[n][e]=t:Object.keys(v[n]).forEach(function(e){v[n][e]=t})}function Ft(e){return Qn(e,{"-webkit-transition":"none",transition:"none"})}function Ut(e){return null!==g[e]&&"[object Array]"===Object.prototype.toString.call(g[e])?g[e].length&&S[e]:g[e]&&S[e]}function Qt(e,t,n){if(Ut(e))return S[e][t](n)}function _t(){return Ut("dragAndMove")&&S.dragAndMove.isAnimating}function Jt(){return Ut("dragAndMove")&&S.dragAndMove.isGrabbing}function Kt(e,t,n){g[e]=t,"internal"!==n&&(Y[e]=t)}function $t(){var e=g.licenseKey,t="font-size: 15px;background:yellow;";n?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(Vn("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),Vn("error","https://github.com/alvarotrigo/fullPage.js#options.")),Gn(s,dn)?Vn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(g.continuousVertical&&(g.loopTop||g.loopBottom)&&(g.continuousVertical=!1,Vn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!g.scrollOverflow||!g.scrollBar&&g.autoScrolling||Vn("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!g.continuousVertical||!g.scrollBar&&g.autoScrolling||(g.continuousVertical=!1,Vn("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),g.scrollOverflow&&null==g.scrollOverflowHandler&&(g.scrollOverflow=!1,Vn("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),g.anchors.forEach(function(t){var e=[].slice.call(Zn("[name]")).filter(function(e){return e.getAttribute("name")&&e.getAttribute("name").toLowerCase()==t.toLowerCase()}),n=[].slice.call(Zn("[id]")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").toLowerCase()==t.toLowerCase()});if(n.length||e.length){Vn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var o=n.length?"id":"name";(n.length||e.length)&&Vn("error",'"'+t+'" is is being used by another element `'+o+"` property")}}))}function qt(t,n,o,r){var e,i=(e=t).self!=rn&&Gn(e,Cn)?e.scrollLeft:!g.autoScrolling||g.scrollBar?po():e.offsetTop,l=n-i,a=0;W=!0;var s=function(){if(W){var e=n;a+=20,o&&(e=rn.fp_easings[g.easing](a,i,l,o)),en(t,e),a<o?setTimeout(s,20):void 0!==r&&r()}else a<o&&r()};s()}function en(e,t){!g.autoScrolling||g.scrollBar||e.self!=rn&&Gn(e,Cn)?e.self!=rn&&Gn(e,Cn)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function tn(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=eo(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function nn(e){tn.call(this,e,Sn)}function on(e){tn.call(this,e,On)}$t()}}),window.jQuery&&window.fullpage&&function(t,n){"use strict";t&&n?t.fn.fullpage=function(e){e=t.extend({},e,{$:t});new n(this[0],e)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);

/***/ }),
/* 53 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(53);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 55 */
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(false);
// imports


// module
exports.push([module.i, "/*!\r\n * fullPage 3.0.8\r\n * https://github.com/alvarotrigo/fullPage.js\r\n *\r\n * @license GPLv3 for open source use only\r\n * or Fullpage Commercial License for commercial use\r\n * http://alvarotrigo.com/fullPage/pricing/\r\n *\r\n * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo\r\n */.fp-enabled body,html.fp-enabled{margin:0;padding:0;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.fp-section{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.fp-slide{float:left}.fp-slide,.fp-slidesContainer{height:100%;display:block}.fp-slides{z-index:1;height:100%;overflow:hidden;position:relative;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.fp-section.fp-table,.fp-slide.fp-table{display:table;table-layout:fixed;width:100%}.fp-tableCell{display:table-cell;vertical-align:middle;width:100%;height:100%}.fp-slidesContainer{float:left;position:relative}.fp-controlArrow{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none;position:absolute;z-index:4;top:50%;cursor:pointer;width:0;height:0;border-style:solid;margin-top:-38px;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0)}.fp-controlArrow.fp-prev{left:15px;width:0;border-width:38.5px 34px 38.5px 0;border-color:transparent #fff transparent transparent}.fp-controlArrow.fp-next{right:15px;border-width:38.5px 0 38.5px 34px;border-color:transparent transparent transparent #fff}.fp-scrollable{position:relative}.fp-scrollable,.fp-scroller{overflow:hidden}.iScrollIndicator{border:0!important}.fp-notransition{-webkit-transition:none!important;transition:none!important}#fp-nav{position:fixed;z-index:100;margin-top:-32px;top:50%;opacity:1;-webkit-transform:translateZ(0)}#fp-nav.fp-right{right:17px}#fp-nav.fp-left{left:17px}.fp-slidesNav{position:absolute;z-index:4;opacity:1;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);left:0!important;right:0;margin:0 auto!important}.fp-slidesNav.fp-bottom{bottom:17px}.fp-slidesNav.fp-top{top:17px}#fp-nav ul,.fp-slidesNav ul{margin:0;padding:0}#fp-nav ul li,.fp-slidesNav ul li{display:block;width:14px;height:13px;margin:7px;position:relative}.fp-slidesNav ul li{display:inline-block}#fp-nav ul li a,.fp-slidesNav ul li a{display:block;position:relative;z-index:1;width:100%;height:100%;cursor:pointer;text-decoration:none}#fp-nav ul li:hover a.active span,#fp-nav ul li a.active span,.fp-slidesNav ul li:hover a.active span,.fp-slidesNav ul li a.active span{height:12px;width:12px;margin:-6px 0 0 -6px;border-radius:100%}#fp-nav ul li a span,.fp-slidesNav ul li a span{border-radius:50%;position:absolute;z-index:1;height:4px;width:4px;border:0;background:#333;left:50%;top:50%;margin:-2px 0 0 -2px;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;transition:all .1s ease-in-out}#fp-nav ul li:hover a span,.fp-slidesNav ul li:hover a span{width:10px;height:10px;margin:-5px 0 0 -5px}#fp-nav ul li .fp-tooltip{position:absolute;top:-2px;color:#fff;font-size:14px;font-family:arial,helvetica,sans-serif;white-space:nowrap;max-width:220px;overflow:hidden;display:block;opacity:0;width:0;cursor:pointer}#fp-nav.fp-show-active a.active+.fp-tooltip,#fp-nav ul li:hover .fp-tooltip{-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;width:auto;opacity:1}#fp-nav ul li .fp-tooltip.fp-right{right:20px}#fp-nav ul li .fp-tooltip.fp-left{left:20px}.fp-auto-height.fp-section,.fp-auto-height .fp-slide,.fp-auto-height .fp-tableCell,.fp-responsive .fp-auto-height-responsive.fp-section,.fp-responsive .fp-auto-height-responsive .fp-slide,.fp-responsive .fp-auto-height-responsive .fp-tableCell{height:auto!important}.fp-sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}", ""]);

// exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(56);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(54)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var isArray = __webpack_require__(34);
var SPECIES = __webpack_require__(0)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(58);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(41);
var IObject = __webpack_require__(39);
var toObject = __webpack_require__(21);
var toLength = __webpack_require__(37);
var asc = __webpack_require__(59);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(8);
var $find = __webpack_require__(60)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(23)(KEY);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(0)('match');
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(5);
var cof = __webpack_require__(27);
var MATCH = __webpack_require__(0)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(63);
var defined = __webpack_require__(17);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(8);
var context = __webpack_require__(64);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(62)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(8);
var $includes = __webpack_require__(38)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(23)('includes');


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(8);
var core = __webpack_require__(13);
var fails = __webpack_require__(9);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(21);
var $keys = __webpack_require__(12);

__webpack_require__(67)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(4);
var toObject = __webpack_require__(21);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(33);
var descriptor = __webpack_require__(18);
var setToStringTag = __webpack_require__(28);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(3)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(16);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(15);
var hide = __webpack_require__(3);
var Iterators = __webpack_require__(22);
var $iterCreate = __webpack_require__(70);
var setToStringTag = __webpack_require__(28);
var getPrototypeOf = __webpack_require__(69);
var ITERATOR = __webpack_require__(0)('iterator');
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
/* 72 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(31);
var getKeys = __webpack_require__(12);
var redefine = __webpack_require__(15);
var global = __webpack_require__(1);
var hide = __webpack_require__(3);
var Iterators = __webpack_require__(22);
var wks = __webpack_require__(0);
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(24);
var createDesc = __webpack_require__(18);
var toIObject = __webpack_require__(7);
var toPrimitive = __webpack_require__(30);
var has = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(47);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(10) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(7);
var gOPN = __webpack_require__(32).f;
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(19);
var getKeys = __webpack_require__(12);

module.exports = __webpack_require__(10) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(36);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(12);
var gOPS = __webpack_require__(35);
var pIE = __webpack_require__(24);
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(14)('meta');
var isObject = __webpack_require__(5);
var has = __webpack_require__(4);
var setDesc = __webpack_require__(11).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(9)(function () {
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
/* 81 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57);
/* harmony import */ var fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6);
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}/* eslint-disable import/no-extraneous-dependencies */ /* eslint-disable react/prop-types */// eslint-disable-line no-unused-vars
var Fullpage;var isFunc=function isFunc(val){return typeof val==='function';};var isEqualArray=function isEqualArray(firstArr,secondArr){if(firstArr.length!==secondArr.length)return false;return firstArr.find(function(el){return!secondArr.includes(el);})==null;};var fullpageCallbacks=['afterLoad','afterRender','afterResize','afterResponsive','afterSlideLoad','onLeave','onSlideLeave'];var ReactFullpage=/*#__PURE__*/function(_React$Component){_inherits(ReactFullpage,_React$Component);function ReactFullpage(props){var _this;_classCallCheck(this,ReactFullpage);_this=_possibleConstructorReturn(this,_getPrototypeOf(ReactFullpage).call(this,props));var _this$props=_this.props,render=_this$props.render,pluginWrapper=_this$props.pluginWrapper;if(!isFunc(render)){throw new Error('must provide render prop to <ReactFullpage />');}_this.log=Object(_Logger__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_this.props.debug,'ReactFullpage');_this.log('Building component');_this.log('Importing vendor files');_this.importVendors();if(pluginWrapper){_this.log('Calling plugin wrapper');pluginWrapper();}_this.log('Requiring fullpage.js');Fullpage=__webpack_require__(52);_this.state={initialized:false,sectionCount:0,slideCount:0};return _this;}_createClass(ReactFullpage,[{key:"componentDidMount",value:function componentDidMount(){var opts=this.buildOptions();this.log('React Lifecycle: componentDidMount()');if(Fullpage){this.init(opts);this.markInitialized();}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){this.log('React Lifecycle: componentDidUpdate()');var newSectionCount=this.getSectionCount();var newSlideCount=this.getSlideCount();var _this$state=this.state,sectionCount=_this$state.sectionCount,slideCount=_this$state.slideCount;// comparing sectionColors array option
var areSameSectionColors=isEqualArray(prevProps.sectionsColor,this.props.sectionsColor);// NOTE: if fullpage props have changed we need to rebuild
if(!areSameSectionColors){this.log('rebuilding due to a change in fullpage.js props');this.reRender();return;}if(sectionCount===newSectionCount&&slideCount===newSlideCount){return;}// NOTE: if sections/slides have changed we need to rebuild
this.log('rebuilding due to a change in fullpage.js sections/slides');this.reRender();}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.destroy();}},{key:"getSectionCount",value:function getSectionCount(){var _this$props$sectionSe=this.props.sectionSelector,sectionSelector=_this$props$sectionSe===void 0?_selectors__WEBPACK_IMPORTED_MODULE_11__[/* DEFAULT_SECTION */ "a"]:_this$props$sectionSe;var _document$querySelect=document.querySelectorAll(sectionSelector),length=_document$querySelect.length;return length;}},{key:"getSlideCount",value:function getSlideCount(){var _this$props$slideSele=this.props.slideSelector,slideSelector=_this$props$slideSele===void 0?_selectors__WEBPACK_IMPORTED_MODULE_11__[/* DEFAULT_SLIDE */ "b"]:_this$props$slideSele;var _document$querySelect2=document.querySelectorAll(slideSelector),length=_document$querySelect2.length;return length;}},{key:"importVendors",value:function importVendors(){var _this$props2=this.props,scrollOverflow=_this$props2.scrollOverflow,easing=_this$props2.easing;if(scrollOverflow){__webpack_require__(51);}if(easing){__webpack_require__(50);}}},{key:"init",value:function init(opts){this.log('Reinitializing fullpage with options',opts);new Fullpage(_selectors__WEBPACK_IMPORTED_MODULE_11__[/* ID_SELECTOR */ "c"],opts);// eslint-disable-line
this.fullpageApi=window.fullpage_api;this.fpUtils=window.fp_utils;this.fpEasings=window.fp_easings;}},{key:"destroy",value:function destroy(){this.log('Destroying fullpage instance');this.fullpageApi.destroy('all');}},{key:"reRender",value:function reRender(){this.destroy();this.init(this.buildOptions());}},{key:"markInitialized",value:function markInitialized(){this.log('Marking initialized');this.setState({initialized:true,sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()});}},{key:"buildOptions",value:function buildOptions(){var _this2=this;var filterCb=function filterCb(key){return!!Object.keys(_this2.props).find(function(cb){return cb===key;});};var registered=fullpageCallbacks.filter(filterCb);var listeners=registered.reduce(function(result,key){return _objectSpread({},result,_defineProperty({},key,function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _this2.update.apply(_this2,[key].concat(args));}));},{});// NOTE: override passed in callbacks w/  wrapped listeners
var options=_objectSpread({},this.props,listeners);this.log('Building fullpage.js options: ',options);return options;}},{key:"update",value:function update(lastEvent){var _this$props3;for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2];}this.log('Event trigger: ',lastEvent);var state=_objectSpread({},this.state,{sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()});var makeState=function makeState(callbackParameters){return _objectSpread({},state,callbackParameters,{lastEvent:lastEvent});};var fromArgs=function fromArgs(argList){return argList.reduce(function(result,key,i){var value=args[i];result[key]=value;// eslint-disable-line
return result;},{});};// NOTE: remapping callback args to v3
// https://github.com/alvarotrigo/fullPage.js#callbacks
switch(lastEvent){// After-*
case'afterLoad':state=makeState(fromArgs(['origin','destination','direction']));break;case'afterResize':state=makeState(fromArgs(['']));break;case'afterResponsive':state=makeState(fromArgs(['isResponsive']));break;case'afterSlideLoad':state=makeState(fromArgs(['section','origin','destination','direction']));break;// On-*
case'onLeave':state=makeState(fromArgs(['origin','destination','direction']));break;case'onSlideLeave':state=makeState(fromArgs(['section','origin','slideIndex','destination','direction']));break;default:break;}var returned=(_this$props3=this.props)[lastEvent].apply(_this$props3,args);this.log('Called callback: Returning => ',returned);this.log('Updating State => ',state);this.setState(state);return returned;}},{key:"render",value:function render(){this.log('<== Rendering ==>');return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{id:_selectors__WEBPACK_IMPORTED_MODULE_11__[/* MAIN_SELECTOR */ "d"]},this.props.render(this));}}]);return ReactFullpage;}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);ReactFullpage.defaultProps={sectionsColor:[]};/* harmony default export */ __webpack_exports__["default"] = (ReactFullpage);

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(3);
var redefine = __webpack_require__(15);
var fails = __webpack_require__(9);
var defined = __webpack_require__(17);
var wks = __webpack_require__(0);

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(83)('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ })
/******/ ]);
});