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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/* eslint-disable import/no-extraneous-dependencies *//* eslint-disable react/prop-types */var isFunc=function isFunc(val){return typeof val==='function';};var fullpageCallbacks=['afterLoad','afterRender','afterResize','afterResponsive','afterSlideLoad','onLeave','onSlideLeave'];var ReactFullpage=function(_React$Component){_inherits(ReactFullpage,_React$Component);function ReactFullpage(props){_classCallCheck(this,ReactFullpage);var _this=_possibleConstructorReturn(this,(ReactFullpage.__proto__||Object.getPrototypeOf(ReactFullpage)).call(this,props));var _this$props=_this.props,fullpage=_this$props.fullpage,render=_this$props.render;if(!fullpage||!isFunc(fullpage)){throw new Error('must provide fullpage prop (fullpage.js library) to <ReactFullage />');}if(!isFunc(render)){throw new Error('must provide render prop to <ReactFullpage />');}_this.state={};return _this;}_createClass(ReactFullpage,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;var _props=this.props,fullpage=_props.fullpage,$=_props.$,_props$v2compatible=_props.v2compatible,v2compatible=_props$v2compatible===undefined?false:_props$v2compatible,_props$callbacks=_props.callbacks,cbs=_props$callbacks===undefined?[]:_props$callbacks;var registered=fullpageCallbacks.filter(function(key){return!!cbs.find(function(cb){return cb===key;});});var listeners=registered.reduce(function(result,key){result[key]=function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}// eslint-disable-line no-param-reassign
var newArgs=[key].concat(args);_this2.update.apply(_this2,_toConsumableArray(newArgs));};return result;},{});var finalOpts=_extends({},this.props,listeners);if(v2compatible){if(!$||$ instanceof window.jQuery===false){throw new Error('Must provide $ (jQuery) as a prop if using v2 API');}$(document).ready(function(){// eslint-disable-line
$('#fullpage').fullpage(finalOpts);});}else{var Fullpage=fullpage;new Fullpage('#fullpage',finalOpts);// eslint-disable-line
this.markInitialized();}}},{key:'markInitialized',value:function markInitialized(){this.setState({fullpageApi:window.fullpage_api,fullpage:window.fullpage});}},{key:'update',value:function update(lastEvent){for(var _len2=arguments.length,args=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2];}var _props$v2compatible2=this.props.v2compatible,v2compatible=_props$v2compatible2===undefined?false:_props$v2compatible2;var state=_extends({},this.state);var makeState=function makeState(callbackParameters){return _extends({},state,callbackParameters,{callback:lastEvent});};var fromArgs=function fromArgs(argList){return argList.reduce(function(result,key,i){var value=args[i];result[key]=value;// eslint-disable-line
return result;},{});};// TODO: change all fromArgs to constants After-*
if(v2compatible){// NOTE: remapping callback args for v2
// https://github.com/alvarotrigo/fullPage.js#callbacks
switch(lastEvent){// After-*
case'afterLoad':state=makeState(fromArgs(['anchorLink','index']));break;case'afterResponsive':state=makeState(fromArgs(['isResponsive']));break;case'afterSlideLoad':state=makeState(fromArgs(['anchorLink','index','slideAnchor','slideIndex']));break;// On-*
case'onLeave':state=makeState(fromArgs(['index','nextIndex','direction']));break;case'onSlideLeave':state=makeState(fromArgs(['anchorLink','index','slideIndex','direction','nextSlideIndex']));break;default:break;}}else{// NOTE: remapping callback args to v3
// https://github.com/alvarotrigo/fullPage.js#callbacks
switch(lastEvent){// After-*
case'afterLoad':state=makeState(fromArgs(['origin','destination','direction']));break;// TODO: update accoding to new API
case'afterResize':state=makeState(fromArgs(['']));break;case'afterResponsive':state=makeState(fromArgs(['isResponsive']));break;case'afterSlideLoad':state=makeState(fromArgs(['section','origin','destination','direction']));break;// On-*
case'onLeave':state=makeState(fromArgs(['origin','destination','direction']));break;case'onSlideLeave':state=makeState(fromArgs(['section','origin','slideIndex','destination','direction']));break;default:break;}}this.setState(state);}},{key:'render',value:function render(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div',{id:'fullpage'},this.props.render(this));}}]);return ReactFullpage;}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (ReactFullpage);

/***/ })
/******/ ]);