/*!
 * @fullpage/react-fullpage 0.1.3
 * https://github.com/alvarotrigo/react-fullpage
 * @license https://github.com/alvarotrigo/react-fullpage#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo & Michael Walker
 */
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * fullPage 3.0.4 - Extensions 0.1.7
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,t,n,o,r){ true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return e.fullpage=o(t,n),e.fullpage}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,window,document,function(e,t){"use strict";var n="fullpage-wrapper",o="."+n,r="fp-responsive",i="fp-notransition",l="fp-destroyed",a="fp-enabled",s="fp-viewing",c="active",u="."+c,d="fp-completely",f="."+d,v=".section",p="fp-section",h="."+p,g=h+u,m="fp-tableCell",S="."+m,b="fp-auto-height",w="fp-normal-scroll",y="fp-nav",E="#"+y,x="fp-tooltip",L="."+x,A="fp-show-active",M=".slide",T="fp-slide",O="."+T,k=O+u,C="fp-slides",H="."+C,R="fp-slidesContainer",I="."+R,z="fp-table",B="fp-initial",N="fp-slidesNav",j="."+N,P=j+" a",D="fp-controlArrow",Y="."+D,W="fp-prev",V=D+" "+W,X=Y+("."+W),Z="fp-next",G=D+" "+Z,F=Y+".fp-next";function U(t,n){e.console&&e.console[t]&&e.console[t]("fullPage: "+n)}function _(e,n){return(n=arguments.length>1?n:t)?n.querySelectorAll(e):null}function Q(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=Q(e[r],o[r]))}return e}function J(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function K(){return"innerHeight"in e?e.innerHeight:t.documentElement.offsetHeight}function q(e,t){var n;for(n in e=le(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function $(e,t,n){for(var o=e[n];o&&!Me(o,t);)o=o[n];return o}function ee(e,t){return $(e,t,"previousElementSibling")}function te(e,t){return $(e,t,"nextElementSibling")}function ne(e,t){if(null==t)return e.previousElementSibling;var n=ne(e);return n&&Me(n,t)?n:null}function oe(e,t){if(null==t)return e.nextElementSibling;var n=oe(e);return n&&Me(n,t)?n:null}function re(e){return e[e.length-1]}function ie(e,t){e=ce(e)?e[0]:e;for(var n=null!=t?_(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function le(e){return ce(e)?e:[e]}function ae(e){e=le(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function se(e){e=le(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function ce(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function ue(e,t){e=le(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function de(e,t){e=le(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function fe(e,t){t.appendChild(e)}function ve(e,n,o){var r;n=n||t.createElement("div");for(var i=0;i<e.length;i++){var l=e[i];(o&&!i||!o)&&(r=n.cloneNode(!0),l.parentNode.insertBefore(r,l)),r.appendChild(l)}return e}function pe(e,t){ve(e,t,!0)}function he(e,t){for("string"==typeof t&&(t=Oe(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function ge(e){for(var n=t.createDocumentFragment();e.firstChild;)n.appendChild(e.firstChild);e.parentNode.replaceChild(n,e)}function me(e,t){return e&&1===e.nodeType?Me(e,t)?e:me(e.parentNode,t):null}function Se(e,t){we(e,e.nextSibling,t)}function be(e,t){we(e,e,t)}function we(e,t,n){ce(n)||("string"==typeof n&&(n=Oe(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function ye(){var n=t.documentElement;return(e.pageYOffset||n.scrollTop)-(n.clientTop||0)}function Ee(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}function xe(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function Le(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function Ae(n,o,r){var i;r=void 0===r?{}:r,"function"==typeof e.CustomEvent?i=new CustomEvent(o,{detail:r}):(i=t.createEvent("CustomEvent")).initCustomEvent(o,!0,!0,r),n.dispatchEvent(i)}function Me(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function Te(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function Oe(e){var n=t.createElement("div");return n.innerHTML=e.trim(),n.firstChild}function ke(e){e=le(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function Ce(e,t,n){for(var o=e[n],r=[];o;)(Me(o,t)||null==t)&&r.push(o),o=o[n];return r}function He(e,t){return Ce(e,t,"nextElementSibling")}function Re(e,t){return Ce(e,t,"previousElementSibling")}function Ie(e,t){e.insertBefore(t,e.firstChild)}return e.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,n){n=n||e;for(var o=0;o<this.length;o++)t.call(n,this[o],o,this)}),e.fp_utils={$:_,deepExtend:Q,hasClass:J,getWindowHeight:K,css:q,until:$,prevUntil:ee,nextUntil:te,prev:ne,next:oe,last:re,index:ie,getList:le,hide:ae,show:se,isArrayOrList:ce,addClass:ue,removeClass:de,appendTo:fe,wrap:ve,wrapAll:pe,wrapInner:he,unwrap:ge,closest:me,after:Se,before:be,insertBefore:we,getScrollTop:ye,siblings:Ee,preventDefault:xe,isFunction:Le,trigger:Ae,matches:Me,toggle:Te,createElementFromHTML:Oe,remove:ke,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:Ce,nextAll:He,prevAll:Re,showError:U,prependTo:Ie,toggleClass:function(e,t,n){if(e.classList&&null==n)e.classList.toggle(t);else{var o=J(e,t);o&&null==n||!n?de(e,t):(!o&&null==n||n)&&ue(e,t)}}},function(D,Z){var $=Z&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|OPEN-SOURCE-GPLV3-LICENSE").test(Z.licenseKey)||t.domain.indexOf("alvarotrigo.com")>-1;if(!J(_("html"),a)){var le=_("html, body"),ce=_("body")[0],ve={};Z=Q({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:e.fp_scrolloverflow?e.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},sectionSelector:v,slideSelector:M,v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},Z);var we,Ce,ze,Be,Ne=!1,je=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),Pe="ontouchstart"in e||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,De="string"==typeof D?_(D)[0]:D,Ye=K(),We=!1,Ve=!0,Xe=!0,Ze=[],Ge={m:{up:!0,down:!0,left:!0,right:!0}};Ge.k=Q({},Ge.m);var Fe,Ue,_e,Qe,Je,Ke,qe,$e,et,tt=Kn(),nt={touchmove:"ontouchmove"in e?"touchmove":tt.move,touchstart:"ontouchstart"in e?"touchstart":tt.down},ot=!1,rt='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',it=Q({},Z),lt={};co(),e.fp_easings=Q(e.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),De&&(ve.version="3.0.2",ve.setAutoScrolling=bt,ve.setRecordHistory=wt,ve.setScrollingSpeed=yt,ve.setFitToSection=Et,ve.setLockAnchors=function(e){Z.lockAnchors=e},ve.setMouseWheelScrolling=xt,ve.setAllowScrolling=Lt,ve.setKeyboardScrolling=Mt,ve.moveSectionUp=Tt,ve.moveSectionDown=Ot,ve.silentMoveTo=kt,ve.moveTo=Ct,ve.moveSlideRight=Ht,ve.moveSlideLeft=Rt,ve.fitToSection=Zt,ve.reBuild=It,ve.setResponsive=zt,ve.getFullpageData=function(){return{options:Z,internals:{container:De,canScroll:Xe,isScrollAllowed:Ge,getDestinationPosition:en,isTouch:Pe,c:Sn,getXmovement:Yn,removeAnimation:jn,getTransforms:to,lazyLoad:cn,addAnimation:Nn,performHorizontalMove:In,landscapeScroll:Cn,silentLandscapeScroll:$n,keepSlidesPosition:$t,silentScroll:eo,styleSlides:Dt,scrollHandler:Xt,getEventsPage:qn,getMSPointer:Kn,isReallyTouch:_t,usingExtension:ro,toggleControlArrows:Hn,touchStartHandler:Qt,touchMoveHandler:Ut}}},ve.destroy=function(n){Ae(De,"destroy",n),bt(!1,"internal"),Lt(!0),At(!1),Mt(!1),ue(De,l),clearTimeout(Qe),clearTimeout(_e),clearTimeout(Ue),clearTimeout(Je),clearTimeout(Ke),e.removeEventListener("scroll",Xt),e.removeEventListener("hashchange",yn),e.removeEventListener("resize",zn),t.removeEventListener("keydown",xn),t.removeEventListener("keyup",Ln),["click","touchstart"].forEach(function(e){t.removeEventListener(e,Bt)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){t.removeEventListener(e,jt,!0)}),ro("dragAndMove")&&ve.dragAndMove.destroy(),clearTimeout(Qe),clearTimeout(_e),n&&(eo(0),_("img[data-src], source[data-src], audio[data-src], iframe[data-src]",De).forEach(function(e){sn(e,"src")}),_("img[data-srcset]").forEach(function(e){sn(e,"srcset")}),ke(_(E+", "+j+", "+Y)),q(_(h),{height:"","background-color":"",padding:""}),q(_(O),{width:""}),q(De,{height:"",position:"","-ms-touch-action":"","touch-action":""}),q(le,{overflow:"",height:""}),de(_("html"),a),de(ce,r),ce.className.split(/\s+/).forEach(function(e){0===e.indexOf(s)&&de(ce,e)}),_(h+", "+O).forEach(function(e){Z.scrollOverflowHandler&&Z.scrollOverflow&&Z.scrollOverflowHandler.remove(e),de(e,z+" "+c+" "+d);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles"))}),oo(De),[S,I,H].forEach(function(e){_(e,De).forEach(function(e){ge(e)})}),e.scrollTo(0,0),[p,T,R].forEach(function(e){de(_("."+e),e)}))},ve.getActiveSection=function(){return new po(_(g)[0])},ve.getActiveSlide=function(){return rn(_(k,_(g)[0])[0])},ve.landscapeScroll=Cn,ve.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<_(Z.sectionSelector,De).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<_(Z.sectionSelector,De).length;t++)e.push(0);return e}(),options:Z,setAutoScrolling:bt},ve.shared={afterRenderActions:Vt},e.fullpage_api=ve,Pt("continuousHorizontal"),Pt("scrollHorizontally"),Pt("resetSliders"),Pt("interlockedSlides"),Pt("responsiveSlides"),Pt("fadingEffect"),Pt("dragAndMove"),Pt("offsetSections"),Pt("scrollOverflowReset"),Pt("parallax"),ro("dragAndMove")&&ve.dragAndMove.init(),Z.css3&&(Z.css3=function(){var n,o=t.createElement("p"),r={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var i in o.style.display="block",t.body.insertBefore(o,null),r)void 0!==o.style[i]&&(o.style[i]="translate3d(1px,1px,1px)",n=e.getComputedStyle(o).getPropertyValue(r[i]));return t.body.removeChild(o),void 0!==n&&n.length>0&&"none"!==n}()),Z.scrollBar=Z.scrollBar||Z.hybrid,function(){if(!Z.anchors.length){var e="[data-anchor]",t=_(Z.sectionSelector.split(",").join(e+",")+e,De);t.length&&t.forEach(function(e){Z.anchors.push(e.getAttribute("data-anchor").toString())})}if(!Z.navigationTooltips.length){var e="[data-tooltip]",n=_(Z.sectionSelector.split(",").join(e+",")+e,De);n.length&&n.forEach(function(e){Z.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){q(De,{height:"100%",position:"relative"}),ue(De,n),ue(_("html"),a),Ye=K(),de(De,l),ue(_(Z.sectionSelector,De),p),ue(_(Z.slideSelector,De),T),io("parallax","init");for(var e=_(h),r=0;r<e.length;r++){var i=r,s=e[r],u=_(O,s),d=u.length;s.setAttribute("data-fp-styles",s.getAttribute("style")),m=s,(S=i)||null!=_(g)[0]||ue(m,c),Be=_(g)[0],q(m,{height:Yt(m)+"px"}),Z.paddingTop&&q(m,{"padding-top":Z.paddingTop}),Z.paddingBottom&&q(m,{"padding-bottom":Z.paddingBottom}),void 0!==Z.sectionsColor[S]&&q(m,{"background-color":Z.sectionsColor[S]}),void 0!==Z.anchors[S]&&m.setAttribute("data-anchor",Z.anchors[S]),f=s,v=i,void 0!==Z.anchors[v]&&J(f,c)&&Pn(Z.anchors[v],v),Z.menu&&Z.css3&&null!=me(_(Z.menu)[0],o)&&ce.appendChild(_(Z.menu)[0]),d>0?Dt(s,u,d):Z.verticalCentered&&Wn(s)}var f,v,m,S;Z.fixedElements&&Z.css3&&_(Z.fixedElements).forEach(function(e){ce.appendChild(e)}),Z.navigation&&function(){var e=t.createElement("div");e.setAttribute("id",y);var n=t.createElement("ul");e.appendChild(n),fe(e,ce);var o=_(E)[0];ue(o,"fp-"+Z.navigationPosition),Z.showActiveTooltip&&ue(o,A);for(var r="",i=0;i<_(h).length;i++){var l="";Z.anchors.length&&(l=Z.anchors[i]),r+='<li><a href="#'+l+'"><span class="fp-sr-only">'+Wt(i,"Section")+"</span><span></span></a>";var a=Z.navigationTooltips[i];void 0!==a&&""!==a&&(r+='<div class="'+x+" fp-"+Z.navigationPosition+'">'+a+"</div>"),r+="</li>"}_("ul",o)[0].innerHTML=r,q(_(E),{"margin-top":"-"+_(E)[0].offsetHeight/2+"px"}),ue(_("a",_("li",_(E)[0])[ie(_(g)[0],h)]),c)}(),_('iframe[src*="youtube.com/embed/"]',De).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),Z.fadingEffect&&ve.fadingEffect&&ve.fadingEffect.apply(),Z.scrollOverflow?Fe=Z.scrollOverflowHandler.init(Z):Vt()}(),Lt(!0),At(!0),bt(Z.autoScrolling,"internal"),Bn(),Jn(),"complete"===t.readyState&&wn(),e.addEventListener("load",wn),e.addEventListener("scroll",Xt),e.addEventListener("hashchange",yn),e.addEventListener("blur",On),e.addEventListener("resize",zn),t.addEventListener("keydown",xn),t.addEventListener("keyup",Ln),["click","touchstart"].forEach(function(e){t.addEventListener(e,Bt)}),Z.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){Nt(e,!1)}),["mouseleave","touchend"].forEach(function(e){Nt(e,!0)})),ro("dragAndMove")&&ve.dragAndMove.turnOffTouch());var at,st,ct,ut=!1,dt=0,ft=0,vt=0,pt=0,ht=(new Date).getTime(),gt=0,mt=0,St=Ye;return ve}function bt(e,t){e||eo(0),so("autoScrolling",e,t);var n=_(g)[0];if(Z.autoScrolling&&!Z.scrollBar)q(le,{overflow:"hidden",height:"100%"}),wt(it.recordHistory,"internal"),q(De,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&eo(n.offsetTop);else if(q(le,{overflow:"visible",height:"initial"}),wt(!1,"internal"),q(De,{"-ms-touch-action":"","touch-action":""}),oo(De),null!=n){var o=ln(n.offsetTop);o.element.scrollTo(0,o.options)}Ae(De,"setAutoScrolling",e)}function wt(e,t){so("recordHistory",e,t)}function yt(e,t){"internal"!==t&&Z.fadingEffect&&ve.fadingEffect&&ve.fadingEffect.update(e),so("scrollingSpeed",e,t)}function Et(e,t){so("fitToSection",e,t)}function xt(n){n?(function(){var n,o="";e.addEventListener?n="addEventListener":(n="attachEvent",o="on");var r="onwheel"in t.createElement("div")?"wheel":void 0!==t.onmousewheel?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==r?t[n](o+"MozMousePixelScroll",Kt,!1):t[n](o+r,Kt,!1)}(),De.addEventListener("mousedown",An),De.addEventListener("mouseup",Mn)):(t.addEventListener?(t.removeEventListener("mousewheel",Kt,!1),t.removeEventListener("wheel",Kt,!1),t.removeEventListener("MozMousePixelScroll",Kt,!1)):t.detachEvent("onmousewheel",Kt),De.removeEventListener("mousedown",An),De.removeEventListener("mouseup",Mn))}function Lt(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){no(e,t,"m")}):no(e,"all","m"),Ae(De,"setAllowScrolling",{value:e,directions:t})}function At(e){e?(xt(!0),(je||Pe)&&(Z.autoScrolling&&(ce.removeEventListener(nt.touchmove,Ft,{passive:!1}),ce.addEventListener(nt.touchmove,Ft,{passive:!1})),_(o).length>0&&(_(o)[0].removeEventListener(nt.touchstart,Qt),_(o)[0].removeEventListener(nt.touchmove,Ut,{passive:!1}),_(o)[0].addEventListener(nt.touchstart,Qt),_(o)[0].addEventListener(nt.touchmove,Ut,{passive:!1})))):(xt(!1),(je||Pe)&&(Z.autoScrolling&&(ce.removeEventListener(nt.touchmove,Ut,{passive:!1}),ce.removeEventListener(nt.touchmove,Ft,{passive:!1})),_(o).length>0&&(_(o)[0].removeEventListener(nt.touchstart,Qt),_(o)[0].removeEventListener(nt.touchmove,Ut,{passive:!1}))))}function Mt(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){no(e,t,"k")}):(no(e,"all","k"),Z.keyboardScrolling=e)}function Tt(){var e=ee(_(g)[0],h);e||!Z.loopTop&&!Z.continuousVertical||(e=re(_(h))),null!=e&&tn(e,null,!0)}function Ot(){var e=te(_(g)[0],h);e||!Z.loopBottom&&!Z.continuousVertical||(e=_(h)[0]),null!=e&&tn(e,null,!1)}function kt(e,t){yt(0,"internal"),Ct(e,t),yt(it.scrollingSpeed,"internal")}function Ct(e,t){var n=Zn(e);void 0!==t?Gn(e,t):null!=n&&tn(n)}function Ht(e){qt("right",e)}function Rt(e){qt("left",e)}function It(t){if(!J(De,l)){We=!0,Ye=K();for(var n=_(h),o=0;o<n.length;++o){var r=n[o],i=_(H,r)[0],a=_(O,r);Z.verticalCentered&&q(_(S,r),{height:Vn(r)+"px"}),q(r,{height:Yt(r)+"px"}),a.length>1&&Cn(i,_(k,i)[0])}Z.scrollOverflow&&Fe.createScrollBarForAll();var s=ie(_(g)[0],h);s&&!ro("fadingEffect")&&kt(s+1),We=!1,Le(Z.afterResize)&&t&&Z.afterResize.call(De,e.innerWidth,e.innerHeight),Le(Z.afterReBuild)&&!t&&Z.afterReBuild.call(De),Ae(De,"afterRebuild")}}function zt(e){var t=J(ce,r);e?t||(bt(!1,"internal"),Et(!1,"internal"),ae(_(E)),ue(ce,r),Le(Z.afterResponsive)&&Z.afterResponsive.call(De,e),Z.responsiveSlides&&ve.responsiveSlides&&ve.responsiveSlides.toSections(),Ae(De,"afterResponsive",e),Z.scrollOverflow&&Fe.createScrollBarForAll()):t&&(bt(it.autoScrolling,"internal"),Et(it.autoScrolling,"internal"),se(_(E)),de(ce,r),Le(Z.afterResponsive)&&Z.afterResponsive.call(De,e),Z.responsiveSlides&&ve.responsiveSlides&&ve.responsiveSlides.toSlides(),Ae(De,"afterResponsive",e))}function Bt(e){var t=e.target;t&&me(t,E+" a")?function(e){xe(e);var t=ie(me(this,E+" li"));tn(_(h)[t])}.call(t,e):Me(t,L)?function(){Ae(ne(this),"click")}.call(t):Me(t,Y)?function(){var e=me(this,h);J(this,W)?Ge.m.left&&Rt(e):Ge.m.right&&Ht(e)}.call(t,e):(Me(t,P)||null!=me(t,P))&&function(e){xe(e);var t=_(H,me(this,h))[0],n=_(O,t)[ie(me(this,"li"))];Cn(t,n)}.call(t,e)}function Nt(e,n){t["fp_"+e]=n,t.addEventListener(e,jt,!0)}function jt(e){e.target!=t&&Z.normalScrollElements.split(",").forEach(function(n){Me(e.target,n)&&At(t["fp_"+e.type])})}function Pt(t){var n="fp_"+t+"Extension";lt[t]=Z[t+"Key"],ve[t]=void 0!==e[n]?new e[n]:null,ve[t]&&ve[t].c(t)}function Dt(e,n,o){var r=100*o,i=100/o,l=t.createElement("div");l.className=C,pe(n,l);var a,s,u=t.createElement("div");u.className=R,pe(n,u),q(_(I,e),{width:r+"%"}),o>1&&(Z.controlArrows&&(a=e,s=[Oe('<div class="'+V+'"></div>'),Oe('<div class="'+G+'"></div>')],Se(_(H,a)[0],s),"#fff"!==Z.controlArrowColor&&(q(_(F,a),{"border-color":"transparent transparent transparent "+Z.controlArrowColor}),q(_(X,a),{"border-color":"transparent "+Z.controlArrowColor+" transparent transparent"})),Z.loopHorizontal||ae(_(X,a))),Z.slidesNavigation&&function(e,t){fe(Oe('<div class="'+N+'"><ul></ul></div>'),e);var n=_(j,e)[0];ue(n,"fp-"+Z.slidesNavPosition);for(var o=0;o<t;o++)fe(Oe('<li><a href="#"><span class="fp-sr-only">'+Wt(o,"Slide")+"</span><span></span></a></li>"),_("ul",n)[0]);q(n,{"margin-left":"-"+n.innerWidth/2+"px"}),ue(_("a",_("li",n)[0]),c)}(e,o)),n.forEach(function(e){q(e,{width:i+"%"}),Z.verticalCentered&&Wn(e)});var d=_(k,e)[0];null!=d&&(0!==ie(_(g),h)||0===ie(_(g),h)&&0!==ie(d))?($n(d,"internal"),ue(d,B)):ue(n[0],c)}function Yt(e){return Z.offsetSections&&ve.offsetSections?Math.round(ve.offsetSections.getWindowHeight(e)):K()}function Wt(e,t){return Z.navigationTooltips[e]||Z.anchors[e]||t+" "+(e+1)}function Vt(){var e,t=_(g)[0];ue(t,d),cn(t),un(t),Z.scrollOverflow&&Z.scrollOverflowHandler.afterLoad(),(!(e=Zn(En().section))||void 0!==e&&ie(e)===ie(Be))&&Le(Z.afterLoad)&&nn("afterLoad",{activeSection:null,element:t,direction:null,anchorLink:t.getAttribute("data-anchor"),sectionIndex:ie(t,h)}),Le(Z.afterRender)&&nn("afterRender"),Ae(De,"afterRender")}function Xt(){var e;if(Ae(De,"onScroll"),(!Z.autoScrolling||Z.scrollBar||ro("dragAndMove"))&&!ao()){var t=ro("dragAndMove")?Math.abs(ve.dragAndMove.getCurrentScroll()):ye(),n=0,o=t+K()/2,r=(ro("dragAndMove")?ve.dragAndMove.getDocumentHeight():ce.offsetHeight-K())===t,i=_(h);if(r)n=i.length-1;else if(t)for(var l=0;l<i.length;++l)i[l].offsetTop<=o&&(n=l);else n=0;if(!J(e=i[n],c)){ut=!0;var a,s,u=_(g)[0],d=ie(u,h)+1,f=Dn(e),v=e.getAttribute("data-anchor"),p=ie(e,h)+1,m=_(k,e)[0],S={activeSection:u,sectionIndex:p-1,anchorLink:v,element:e,leavingSection:d,direction:f};m&&(s=m.getAttribute("data-anchor"),a=ie(m)),Xe&&(ue(e,c),de(Ee(e),c),io("parallax","afterLoad"),Le(Z.onLeave)&&nn("onLeave",S),Le(Z.afterLoad)&&nn("afterLoad",S),Z.resetSliders&&ve.resetSliders&&ve.resetSliders.apply({localIsResizing:We,leavingSection:d}),fn(u),cn(e),un(e),Pn(v,p-1),Z.anchors.length&&(we=v),Un(a,s,v)),clearTimeout(Je),Je=setTimeout(function(){ut=!1},100)}Z.fitToSection&&(clearTimeout(Ke),Ke=setTimeout(function(){Z.fitToSection&&_(g)[0].offsetHeight<=Ye&&Zt()},Z.fitToSectionDelay))}}function Zt(){Xe&&(We=!0,tn(_(g)[0]),We=!1)}function Gt(e){if(Ge.m[e]){var t="down"===e?Ot:Tt;if(ve.scrollHorizontally&&(t=ve.scrollHorizontally.getScrollSection(e,t)),Z.scrollOverflow){var n=Z.scrollOverflowHandler.scrollable(_(g)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!Z.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function Ft(e){Z.autoScrolling&&_t(e)&&xe(e)}function Ut(t){var n=me(t.target,h);if(_t(t)){Z.autoScrolling&&xe(t);var o=qn(t);vt=o.y,pt=o.x,_(H,n).length&&Math.abs(ft-pt)>Math.abs(dt-vt)?!Ne&&Math.abs(ft-pt)>e.innerWidth/100*Z.touchSensitivity&&(ft>pt?Ge.m.right&&Ht(n):Ge.m.left&&Rt(n)):Z.autoScrolling&&Xe&&Math.abs(dt-vt)>e.innerHeight/100*Z.touchSensitivity&&(dt>vt?Gt("down"):vt>dt&&Gt("up"))}}function _t(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function Qt(e){if(Z.fitToSection&&(et=!1),_t(e)){var t=qn(e);dt=t.y,ft=t.x}}function Jt(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function Kt(t){var n=(new Date).getTime(),o=J(_(f)[0],w);if(!Ge.m.down&&!Ge.m.up)return xe(t),!1;if(Z.autoScrolling&&!ze&&!o){var r=(t=t||e.event).wheelDelta||-t.deltaY||-t.detail,i=Math.max(-1,Math.min(1,r)),l=void 0!==t.wheelDeltaX||void 0!==t.deltaX,a=Math.abs(t.wheelDeltaX)<Math.abs(t.wheelDelta)||Math.abs(t.deltaX)<Math.abs(t.deltaY)||!l;Ze.length>149&&Ze.shift(),Ze.push(Math.abs(r)),Z.scrollBar&&xe(t);var s=n-ht;return ht=n,s>200&&(Ze=[]),Xe&&!lo()&&Jt(Ze,10)>=Jt(Ze,70)&&a&&Gt(i<0?"down":"up"),!1}Z.fitToSection&&(et=!1)}function qt(e,t){var n=null==t?_(g)[0]:t,o=_(H,n)[0];if(!(null==o||lo()||Ne||_(O,o).length<2)){var r=_(k,o)[0],i=null;if(null==(i="left"===e?ee(r,O):te(r,O))){if(!Z.loopHorizontal)return;var l=Ee(r);i="left"===e?l[l.length-1]:l[0]}Ne=!ve.test.isTesting,Cn(o,i,e)}}function $t(){for(var e=_(k),t=0;t<e.length;t++)$n(e[t],"internal")}function en(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=ro("dragAndMove")&&ve.dragAndMove.isGrabbing?ve.dragAndMove.isScrollingDown():n>gt,i=o-Ye+t,l=Z.bigSectionsDestination;return t>Ye?(r||l)&&"bottom"!==l||(o=i):(r||We&&null==oe(e))&&(o=i),Z.offsetSections&&ve.offsetSections&&(o=ve.offsetSections.getSectionPosition(r,o,e)),gt=o,o}function tn(e,t,n){if(null!=e){var r,i,l={element:e,callback:t,isMovementUp:n,dtop:en(e),yMovement:Dn(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:ie(e,h),activeSlide:_(k,e)[0],activeSection:_(g)[0],leavingSection:ie(_(g),h)+1,localIsResizing:We};if(!(l.activeSection==e&&!We||Z.scrollBar&&ye()===l.dtop&&!J(e,b))){if(null!=l.activeSlide&&(r=l.activeSlide.getAttribute("data-anchor"),i=ie(l.activeSlide)),Le(Z.onLeave)&&!l.localIsResizing){var a=l.yMovement;if(void 0!==n&&(a=n?"up":"down"),l.direction=a,!1===nn("onLeave",l))return}io("parallax","apply",l),Z.autoScrolling&&Z.continuousVertical&&void 0!==l.isMovementUp&&(!l.isMovementUp&&"up"==l.yMovement||l.isMovementUp&&"down"==l.yMovement)&&((u=l).isMovementUp?be(_(g)[0],He(u.activeSection,h)):Se(_(g)[0],Re(u.activeSection,h).reverse()),eo(_(g)[0].offsetTop),$t(),u.wrapAroundElements=u.activeSection,u.dtop=u.element.offsetTop,u.yMovement=Dn(u.element),u.leavingSection=ie(u.activeSection,h)+1,u.sectionIndex=ie(u.element,h),Ae(_(o)[0],"onContinuousVertical",u),l=u),ro("scrollOverflowReset")&&ve.scrollOverflowReset.setPrevious(l.activeSection),l.localIsResizing||fn(l.activeSection),Z.scrollOverflow&&Z.scrollOverflowHandler.beforeLeave(),ue(e,c),de(Ee(e),c),cn(e),Z.scrollOverflow&&Z.scrollOverflowHandler.onLeave(),Xe=ve.test.isTesting,Un(i,r,l.anchorLink,l.sectionIndex),function(e){if(Z.css3&&Z.autoScrolling&&!Z.scrollBar){var t="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";Xn(t,!0),Z.scrollingSpeed?(clearTimeout(_e),_e=setTimeout(function(){an(e)},Z.scrollingSpeed)):an(e)}else{var n=ln(e.dtop);ve.test.top=-e.dtop+"px",uo(n.element,n.options,Z.scrollingSpeed,function(){Z.scrollBar?setTimeout(function(){an(e)},30):an(e)})}}(l),we=l.anchorLink,Pn(l.anchorLink,null!=(s=l).wrapAroundElements?s.isMovementUp?_(h).length-1:0:s.sectionIndex)}}var s,u}function nn(e,t){var n,o,r,i,l=(o=e,r=t,(i=Z.v2compatible?{afterRender:function(){return[De]},onLeave:function(){return[r.activeSection,r.leavingSection,r.sectionIndex+1,r.direction]},afterLoad:function(){return[r.element,r.anchorLink,r.sectionIndex+1]},afterSlideLoad:function(){return[r.destiny,r.anchorLink,r.sectionIndex+1,r.slideAnchor,r.slideIndex]},onSlideLeave:function(){return[r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.direction,r.slideIndex]}}:{afterRender:function(){return{section:on(_(g)[0]),slide:rn(_(k,_(g)[0])[0])}},onLeave:function(){return{origin:on(r.activeSection),destination:on(r.element),direction:r.direction}},afterLoad:function(){return i.onLeave()},afterSlideLoad:function(){return{section:on(r.section),origin:rn(r.prevSlide),destination:rn(r.destiny),direction:r.direction}},onSlideLeave:function(){return i.afterSlideLoad()}})[o]());if(Z.v2compatible){if(!1===Z[e].apply(l[0],l.slice(1)))return!1}else if(Ae(De,e,l),!1===Z[e].apply(l[Object.keys(l)[0]],(n=l,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function on(e){return e?new po(e):null}function rn(e){return e?new function(e){vo.call(this,e,O)}(e):null}function ln(t){var n={};return Z.autoScrolling&&!Z.scrollBar?(n.options=-t,n.element=_(o)[0]):(n.options=t,n.element=e),n}function an(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?be(_(h)[0],t.wrapAroundElements):Se(_(h)[_(h).length-1],t.wrapAroundElements),eo(_(g)[0].offsetTop),$t(),t.sectionIndex=ie(t.element,h),t.leavingSection=ie(t.activeSection,h)+1),Le(Z.afterLoad)&&!e.localIsResizing&&nn("afterLoad",e),Z.scrollOverflow&&Z.scrollOverflowHandler.afterLoad(),io("parallax","afterLoad"),ro("scrollOverflowReset")&&ve.scrollOverflowReset.reset(),ro("resetSliders")&&ve.resetSliders.apply(e),e.localIsResizing||un(e.element),ue(e.element,d),de(Ee(e.element),d),Xe=!0,Le(e.callback)&&e.callback()}function sn(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function cn(e){Z.lazyLoading&&_("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",vn(e)).forEach(function(e){if(["src","srcset"].forEach(function(t){var n=e.getAttribute("data-"+t);null!=n&&n&&sn(e,t)}),Me(e,"source")){var t=me(e,"video, audio");t&&t.load()}})}function un(e){var t=vn(e);_("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),_('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&dn(e),e.onload=function(){e.hasAttribute("data-autoplay")&&dn(e)}})}function dn(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function fn(e){var t=vn(e);_("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),_('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function vn(e){var t=_(k,e);return t.length&&(e=t[0]),e}function pn(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function n(e){var n,o,r,i,l,a,s="",c=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");c<e.length;)n=t.indexOf(e.charAt(c++))<<2|(i=t.indexOf(e.charAt(c++)))>>4,o=(15&i)<<4|(l=t.indexOf(e.charAt(c++)))>>2,r=(3&l)<<6|(a=t.indexOf(e.charAt(c++))),s+=String.fromCharCode(n),64!=l&&(s+=String.fromCharCode(o)),64!=a&&(s+=String.fromCharCode(r));return s=function(e){for(var t,n="",o=0,r=0,i=0;o<e.length;)(r=e.charCodeAt(o))<128?(n+=String.fromCharCode(r),o++):r>191&&r<224?(i=e.charCodeAt(o+1),n+=String.fromCharCode((31&r)<<6|63&i),o+=2):(i=e.charCodeAt(o+1),t=e.charCodeAt(o+2),n+=String.fromCharCode((15&r)<<12|(63&i)<<6|63&t),o+=3);return n}(s)}function o(e){return e.slice(3).slice(0,-3)}return function(e){var t=e.split("_");if(t.length>1){var r=t[1];return e.replace(o(t[1]),"").split("_")[0]+"_"+n(r.slice(3).slice(0,-3))}return o(e)}(n(e))}function hn(e){var n=function(){if(t.domain.length){for(var e=t.domain.replace(/^(www\.)/,"").split(".");e.length>2;)e.shift();return e.join(".").replace(/(^\.*)|(\.*$)/g,"")}return""}(),o=["MTM0bG9jYWxob3N0MjM0","MTM0MC4xMjM0","MTM0anNoZWxsLm5ldDIzNA==","UDdDQU5ZNlNN"],r=pn(o[0]),i=pn(o[1]),l=pn(o[2]),a=pn(o[3]),s=[r,i,l].indexOf(n)<0&&0!==n.length,c=void 0!==lt[e]&&lt[e].length;if(!c&&s)return!1;var u=c?pn(lt[e]):"",d=(u=u.split("_")).length>1&&u[1].indexOf(e,u[1].length-e.length)>-1;return!(u[0].indexOf(n,u[0].length-n.length)<0&&s&&a!=u[0])&&d||!s}function gn(e){e.forEach(function(e){e.removedNodes[0]&&e.removedNodes[0].isEqualNode(st)&&(clearTimeout(ct),ct=setTimeout(mn,900))})}function mn(){ot=!1}function Sn(n){st=t.createElement("div"),at=pn("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),st.innerHTML=at,st=st.firstChild,"MutationObserver"in e&&new MutationObserver(gn).observe(t.body,{childList:!0,subtree:!1}),ro(n)&&ve[n]&&(hn(n)||(bn(),setInterval(bn,2e3)))}function bn(){st&&(ot||(Math.random()<.5?Ie(ce,st):fe(st,ce),ot=!0),st.setAttribute("style",pn("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g,pn("MTIzICFpbXBvcnRhbnQ7MzQ1"))))}function wn(){var e=En(),t=e.section,n=e.slide;t&&(Z.animateAnchor?Gn(t,n):kt(t,n))}function yn(){if(!ut&&!Z.lockAnchors){var e=En(),t=e.section,n=e.slide,o=void 0===we,r=void 0===we&&void 0===n&&!Ne;t&&t.length&&(t&&t!==we&&!o||r||!Ne&&Ce!=n)&&Gn(t,n)}}function En(){var t,n,o=e.location.hash;if(o.length){var r=o.replace("#","").split("/"),i=o.indexOf("#/")>-1;t=i?"/"+r[1]:decodeURIComponent(r[0]);var l=i?r[2]:r[1];l&&l.length&&(n=decodeURIComponent(l))}return{section:t,slide:n}}function xn(e){clearTimeout(qe);var n=t.activeElement,o=e.keyCode;9===o?function(e){var n,o,r,i,l,a,s,c=e.shiftKey,u=t.activeElement,d=Tn(vn(_(g)[0]));function f(e){return xe(e),d[0]?d[0].focus():null}(n=e,o=Tn(t),r=o.indexOf(t.activeElement),i=n.shiftKey?r-1:r+1,l=o[i],a=rn(me(l,O)),s=on(me(l,h)),a||s)&&(u?null==me(u,g+","+g+" "+k)&&(u=f(e)):f(e),(!c&&u==d[d.length-1]||c&&u==d[0])&&xe(e))}(e):Me(n,"textarea")||Me(n,"input")||Me(n,"select")||"true"===n.getAttribute("contentEditable")||""===n.getAttribute("contentEditable")||!Z.keyboardScrolling||!Z.autoScrolling||([40,38,32,33,34].indexOf(o)>-1&&xe(e),ze=e.ctrlKey,qe=setTimeout(function(){!function(e){var t=e.shiftKey;if(Xe||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:Ge.k.up&&Tt();break;case 32:if(t&&Ge.k.up){Tt();break}case 40:case 34:Ge.k.down&&Ot();break;case 36:Ge.k.up&&Ct(1);break;case 35:Ge.k.down&&Ct(_(h).length);break;case 37:Ge.k.left&&Rt();break;case 39:Ge.k.right&&Ht()}}(e)},150))}function Ln(e){Ve&&(ze=e.ctrlKey)}function An(e){2==e.which&&(mt=e.pageY,De.addEventListener("mousemove",kn))}function Mn(e){2==e.which&&De.removeEventListener("mousemove",kn)}function Tn(e){return[].slice.call(_(rt,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function On(){Ve=!1,ze=!1}function kn(e){Xe&&(e.pageY<mt&&Ge.m.up?Tt():e.pageY>mt&&Ge.m.down&&Ot()),mt=e.pageY}function Cn(e,t,n){var o=me(e,h),r={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:ie(t),section:o,sectionIndex:ie(o,h),anchorLink:o.getAttribute("data-anchor"),slidesNav:_(j,o)[0],slideAnchor:Qn(t),prevSlide:_(k,o)[0],prevSlideIndex:ie(_(k,o)[0]),localIsResizing:We};r.xMovement=Yn(r.prevSlideIndex,r.slideIndex),r.localIsResizing||(Xe=!1),io("parallax","applyHorizontal",r),Z.onSlideLeave&&!r.localIsResizing&&"none"!==r.xMovement&&Le(Z.onSlideLeave)&&!1===nn("onSlideLeave",r)?Ne=!1:(ue(t,c),de(Ee(t),c),r.localIsResizing||(fn(r.prevSlide),cn(t)),Hn(r),J(o,c)&&!r.localIsResizing&&Un(r.slideIndex,r.slideAnchor,r.anchorLink,r.sectionIndex),ve.continuousHorizontal&&ve.continuousHorizontal.apply(r),ao()?Rn(r):In(e,r,!0),Z.interlockedSlides&&ve.interlockedSlides&&(ro("continuousHorizontal")&&void 0!==n&&n!==r.xMovement||ve.interlockedSlides.apply(r)))}function Hn(e){!Z.loopHorizontal&&Z.controlArrows&&(Te(_(X,e.section),0!==e.slideIndex),Te(_(F,e.section),null!=oe(e.destiny)))}function Rn(e){var t,n;ve.continuousHorizontal&&ve.continuousHorizontal.afterSlideLoads(e),t=e.slidesNav,n=e.slideIndex,Z.slidesNavigation&&null!=t&&(de(_(u,t),c),ue(_("a",_("li",t)[n]),c)),e.localIsResizing||(io("parallax","afterSlideLoads"),Le(Z.afterSlideLoad)&&nn("afterSlideLoad",e),Xe=!0,un(e.destiny)),Ne=!1,ro("interlockedSlides")&&ve.interlockedSlides.apply(e)}function In(e,t,n){var o=t.destinyPos;if(Z.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";ve.test.translate3dH[t.sectionIndex]=r,q(Nn(_(I,e)),to(r)),Qe=setTimeout(function(){n&&Rn(t)},Z.scrollingSpeed)}else ve.test.left[t.sectionIndex]=Math.round(o.left),uo(e,Math.round(o.left),Z.scrollingSpeed,function(){n&&Rn(t)})}function zn(){if(Ae(De,"onResize"),Bn(),je){var e=t.activeElement;if(!Me(e,"textarea")&&!Me(e,"input")&&!Me(e,"select")){var n=K();Math.abs(n-St)>20*Math.max(St,n)/100&&(It(!0),St=n)}}else clearTimeout(Ue),Ue=setTimeout(function(){It(!0)},350)}function Bn(){var t=Z.responsive||Z.responsiveWidth,n=Z.responsiveHeight,o=t&&e.innerWidth<t,r=n&&e.innerHeight<n;t&&n?zt(o||r):t?zt(o):n&&zt(r)}function Nn(e){var t="all "+Z.scrollingSpeed+"ms "+Z.easingcss3;return de(e,i),q(e,{"-webkit-transition":t,transition:t})}function jn(e){return ue(e,i)}function Pn(e,t){var n,o,r,i;n=e,o=_(Z.menu)[0],Z.menu&&null!=o&&(de(_(u,o),c),ue(_('[data-menuanchor="'+n+'"]',o),c)),r=e,i=t,Z.navigation&&null!=_(E)[0]&&(de(_(u,_(E)[0]),c),ue(r?_('a[href="#'+r+'"]',_(E)[0]):_("a",_("li",_(E)[0])[i]),c))}function Dn(e){var t=ie(_(g)[0],h),n=ie(e,h);return t==n?"none":t>n?"up":"down"}function Yn(e,t){return e==t?"none":e>t?"left":"right"}function Wn(e){if(!J(e,z)){var n=t.createElement("div");n.className=m,n.style.height=Vn(e)+"px",ue(e,z),he(e,n)}}function Vn(e){var t=Yt(e);if(Z.paddingTop||Z.paddingBottom){var n=e;J(n,p)||(n=me(e,h)),t-=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"])}return t}function Xn(e,t){t?Nn(De):jn(De),clearTimeout($e),q(De,to(e)),ve.test.translate3d=e,$e=setTimeout(function(){de(De,i)},10)}function Zn(e){var t=_(h+'[data-anchor="'+e+'"]',De)[0];if(!t){var n=void 0!==e?e-1:0;t=_(h)[n]}return t}function Gn(e,t){var n=Zn(e);if(null!=n){var o,r,i,l=(null==(i=_(O+'[data-anchor="'+(o=t)+'"]',r=n)[0])&&(o=void 0!==o?o:0,i=_(O,r)[o]),i);Qn(n)===we||J(n,c)?Fn(l):tn(n,function(){Fn(l)})}}function Fn(e){null!=e&&Cn(me(e,H),e)}function Un(e,t,n,o){var r="";Z.anchors.length&&!Z.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),Ce=t,_n(r+"/"+t)):null!=e?(Ce=t,_n(n)):_n(n)),Jn()}function _n(t){if(Z.recordHistory)location.hash=t;else if(je||Pe)e.history.replaceState(void 0,void 0,"#"+t);else{var n=e.location.href.split("#")[0];e.location.replace(n+"#"+t)}}function Qn(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=ie(e);return null==t&&(t=n),t}function Jn(){var e=_(g)[0],t=_(k,e)[0],n=Qn(e),o=Qn(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+s+"-[^\\s]+\\b","g");ce.className=ce.className.replace(i,""),ue(ce,s+"-"+r)}function Kn(){return e.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function qn(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,Pe&&_t(e)&&Z.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function $n(e,t){yt(0,"internal"),void 0!==t&&(We=!0),Cn(me(e,H),e),void 0!==t&&(We=!1),yt(it.scrollingSpeed,"internal")}function eo(e){var t=Math.round(e);if(Z.css3&&Z.autoScrolling&&!Z.scrollBar)Xn("translate3d(0px, -"+t+"px, 0px)",!1);else if(Z.autoScrolling&&!Z.scrollBar)q(De,{top:-t+"px"}),ve.test.top=-t+"px";else{var n=ln(t);fo(n.element,n.options)}}function to(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function no(e,t,n){"all"!==t?Ge[n][t]=e:Object.keys(Ge[n]).forEach(function(t){Ge[n][t]=e})}function oo(e){return q(e,{"-webkit-transition":"none",transition:"none"})}function ro(e){return null!==Z[e]&&"[object Array]"===Object.prototype.toString.call(Z[e])?Z[e].length&&ve[e]:Z[e]&&ve[e]}function io(e,t,n){if(ro(e))return ve[e][t](n)}function lo(){return ro("dragAndMove")&&ve.dragAndMove.isAnimating}function ao(){return ro("dragAndMove")&&ve.dragAndMove.isGrabbing}function so(e,t,n){Z[e]=t,"internal"!==n&&(it[e]=t)}function co(){$||(U("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),U("error","https://github.com/alvarotrigo/fullPage.js#options.")),J(_("html"),a)?U("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(Z.continuousVertical&&(Z.loopTop||Z.loopBottom)&&(Z.continuousVertical=!1,U("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!Z.scrollOverflow||!Z.scrollBar&&Z.autoScrolling||U("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!Z.continuousVertical||!Z.scrollBar&&Z.autoScrolling||(Z.continuousVertical=!1,U("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),Z.scrollOverflow&&null==Z.scrollOverflowHandler&&(Z.scrollOverflow=!1,U("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),Z.anchors.forEach(function(e){var t=[].slice.call(_("[name]")).filter(function(t){return t.getAttribute("name")&&t.getAttribute("name").toLowerCase()==e.toLowerCase()}),n=[].slice.call(_("[id]")).filter(function(t){return t.getAttribute("id")&&t.getAttribute("id").toLowerCase()==e.toLowerCase()});(n.length||t.length)&&(U("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),n.length&&U("error",'"'+e+'" is is being used by another element `id` property'),t.length&&U("error",'"'+e+'" is is being used by another element `name` property'))}))}function uo(t,n,o,r){var i,l=(i=t).self!=e&&J(i,C)?i.scrollLeft:!Z.autoScrolling||Z.scrollBar?ye():i.offsetTop,a=n-l,s=0;et=!0;var c=function(){if(et){var i=n;s+=20,o&&(i=e.fp_easings[Z.easing](s,l,a,o)),fo(t,i),s<o?setTimeout(c,20):void 0!==r&&r()}else s<o&&r()};c()}function fo(t,n){!Z.autoScrolling||Z.scrollBar||t.self!=e&&J(t,C)?t.self!=e&&J(t,C)?t.scrollLeft=n:t.scrollTo(0,n):t.style.top=n+"px"}function vo(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=ie(e,t),this.isLast=this.index===_(t).length-1,this.isFirst=!this.index}function po(e){vo.call(this,e,h)}co()}}),window.jQuery&&window.fullpage&&function(e,t){"use strict";e&&t?e.fn.fullpage=function(n){var o=new t(this[0],n);Object.keys(o).forEach(function(t){e.fn.fullpage[t]=o[t]})}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/Wrapper/index.js
/* eslint-disable import/no-extraneous-dependencies */var Wrapper_Wrapper=function Wrapper(_ref){var children=_ref.children;return external_react_default.a.createElement(external_react_["Fragment"],null,children);};/* harmony default export */ var components_Wrapper = (Wrapper_Wrapper);
// CONCATENATED MODULE: ./components/index.js
/* eslint-disable *//* harmony default export */ var components = __webpack_exports__["default"] = ((function(){var exported=void 0;if(typeof window!=='undefined'){exported=__webpack_require__(9).default;}else{// NOTE: SSR support
exported=__webpack_require__(3).default;}exported.Wrapper=components_Wrapper;return exported;})());

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/* eslint-disable import/no-extraneous-dependencies *//* eslint-disable react/prop-types */// NOTE: SSR support
var ReactFullpageShell=function(_React$Component){_inherits(ReactFullpageShell,_React$Component);function ReactFullpageShell(props){_classCallCheck(this,ReactFullpageShell);var _this=_possibleConstructorReturn(this,(ReactFullpageShell.__proto__||Object.getPrototypeOf(ReactFullpageShell)).call(this,props));_this.state={};return _this;}_createClass(ReactFullpageShell,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:"fullpage"},this.props.render(this));}}]);return ReactFullpageShell;}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (ReactFullpageShell);

/***/ }),
/* 4 */
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
/* 5 */
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

var	fixUrls = __webpack_require__(4);

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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// imports


// module
exports.push([module.i, "/*!\r\n * fullPage 3.0.3\r\n * https://github.com/alvarotrigo/fullPage.js\r\n *\r\n * @license GPLv3 for open source use only\r\n * or Fullpage Commercial License for commercial use\r\n * http://alvarotrigo.com/fullPage/pricing/\r\n *\r\n * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo\r\n */.fp-enabled body,html.fp-enabled{margin:0;padding:0;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.fp-section{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.fp-slide{float:left}.fp-slide,.fp-slidesContainer{height:100%;display:block}.fp-slides{z-index:1;height:100%;overflow:hidden;position:relative;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.fp-section.fp-table,.fp-slide.fp-table{display:table;table-layout:fixed;width:100%}.fp-tableCell{display:table-cell;vertical-align:middle;width:100%;height:100%}.fp-slidesContainer{float:left;position:relative}.fp-controlArrow{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none;position:absolute;z-index:4;top:50%;cursor:pointer;width:0;height:0;border-style:solid;margin-top:-38px;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0)}.fp-controlArrow.fp-prev{left:15px;width:0;border-width:38.5px 34px 38.5px 0;border-color:transparent #fff transparent transparent}.fp-controlArrow.fp-next{right:15px;border-width:38.5px 0 38.5px 34px;border-color:transparent transparent transparent #fff}.fp-scrollable{position:relative}.fp-scrollable,.fp-scroller{overflow:hidden}.iScrollIndicator{border:0!important}.fp-notransition{-webkit-transition:none!important;transition:none!important}#fp-nav{position:fixed;z-index:100;margin-top:-32px;top:50%;opacity:1;-webkit-transform:translateZ(0)}#fp-nav.fp-right{right:17px}#fp-nav.fp-left{left:17px}.fp-slidesNav{position:absolute;z-index:4;opacity:1;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);left:0!important;right:0;margin:0 auto!important}.fp-slidesNav.fp-bottom{bottom:17px}.fp-slidesNav.fp-top{top:17px}#fp-nav ul,.fp-slidesNav ul{margin:0;padding:0}#fp-nav ul li,.fp-slidesNav ul li{display:block;width:14px;height:13px;margin:7px;position:relative}.fp-slidesNav ul li{display:inline-block}#fp-nav ul li a,.fp-slidesNav ul li a{display:block;position:relative;z-index:1;width:100%;height:100%;cursor:pointer;text-decoration:none}#fp-nav ul li:hover a.active span,#fp-nav ul li a.active span,.fp-slidesNav ul li:hover a.active span,.fp-slidesNav ul li a.active span{height:12px;width:12px;margin:-6px 0 0 -6px;border-radius:100%}#fp-nav ul li a span,.fp-slidesNav ul li a span{border-radius:50%;position:absolute;z-index:1;height:4px;width:4px;border:0;background:#333;left:50%;top:50%;margin:-2px 0 0 -2px;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;transition:all .1s ease-in-out}#fp-nav ul li:hover a span,.fp-slidesNav ul li:hover a span{width:10px;height:10px;margin:-5px 0 0 -5px}#fp-nav ul li .fp-tooltip{position:absolute;top:-2px;color:#fff;font-size:14px;font-family:arial,helvetica,sans-serif;white-space:nowrap;max-width:220px;overflow:hidden;display:block;opacity:0;width:0;cursor:pointer}#fp-nav.fp-show-active a.active+.fp-tooltip,#fp-nav ul li:hover .fp-tooltip{-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;width:auto;opacity:1}#fp-nav ul li .fp-tooltip.fp-right{right:20px}#fp-nav ul li .fp-tooltip.fp-left{left:20px}.fp-auto-height.fp-section,.fp-auto-height .fp-slide,.fp-auto-height .fp-tableCell,.fp-responsive .fp-auto-height-responsive.fp-section,.fp-responsive .fp-auto-height-responsive .fp-slide,.fp-responsive .fp-auto-height-responsive .fp-tableCell{height:auto!important}.fp-sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}", "", {"version":3,"sources":["/Users/alvarotrigolopez/Sites/react-fullpage/node_modules/fullpage.js/dist/fullpage.min.css"],"names":[],"mappings":"AAAA;;;;;;;;;GASG,iCAAiC,SAAS,UAAU,gBAAgB,yCAAyC,CAAC,YAAY,kBAAkB,8BAA8B,2BAA2B,qBAAqB,CAAC,UAAU,UAAU,CAAC,8BAA8B,YAAY,aAAa,CAAC,WAAW,UAAU,YAAY,gBAAgB,kBAAkB,oCAAoC,2BAA2B,CAAC,wCAAwC,cAAc,mBAAmB,UAAU,CAAC,cAAc,mBAAmB,sBAAsB,WAAW,WAAW,CAAC,oBAAoB,WAAW,iBAAiB,CAAC,iBAAiB,yBAAyB,sBAAsB,wBAAwB,qBAAqB,kBAAkB,UAAU,QAAQ,eAAe,QAAQ,SAAS,mBAAmB,iBAAiB,gCAAqC,4BAAiC,uBAA4B,CAAC,yBAAyB,UAAU,QAAQ,kCAAkC,qDAAqD,CAAC,yBAAyB,WAAW,kCAAkC,qDAAqD,CAAC,eAA+B,iBAAiB,CAAC,4BAAlC,eAAgB,CAA+C,kBAAkB,kBAAkB,CAAC,iBAAiB,kCAAkC,yBAAyB,CAAC,QAAQ,eAAe,YAAY,iBAAiB,QAAQ,UAAU,+BAAoC,CAAC,iBAAiB,UAAU,CAAC,gBAAgB,SAAS,CAAC,cAAc,kBAAkB,UAAU,UAAU,gCAAqC,4BAAiC,wBAA6B,iBAAiB,QAAQ,uBAAuB,CAAC,wBAAwB,WAAW,CAAC,qBAAqB,QAAQ,CAAC,4BAA4B,SAAS,SAAS,CAAC,kCAAkC,cAAc,WAAW,YAAY,WAAW,iBAAiB,CAAC,oBAAoB,oBAAoB,CAAC,sCAAsC,cAAc,kBAAkB,UAAU,WAAW,YAAY,eAAe,oBAAoB,CAAC,wIAAwI,YAAY,WAAW,qBAAqB,kBAAkB,CAAC,gDAAgD,kBAAkB,kBAAkB,UAAU,WAAW,UAAU,SAAS,gBAAgB,SAAS,QAAQ,qBAAqB,uCAAuC,oCAAoC,kCAAkC,8BAA8B,CAAC,4DAA4D,WAAW,YAAY,oBAAoB,CAAC,0BAA0B,kBAAkB,SAAS,WAAW,eAAe,uCAAuC,mBAAmB,gBAAgB,gBAAgB,cAAc,UAAU,QAAQ,cAAc,CAAC,4EAA4E,uCAAuC,+BAA+B,WAAW,SAAS,CAAC,mCAAmC,UAAU,CAAC,kCAAkC,SAAS,CAAC,AAAyG,oPAAiK,qBAAqB,CAAC,YAAY,kBAAkB,UAAU,WAAW,UAAU,gBAAgB,mBAAmB,mBAAmB,QAAQ,CAAC","file":"fullpage.min.css","sourcesContent":["/*!\r\n * fullPage 3.0.3\r\n * https://github.com/alvarotrigo/fullPage.js\r\n *\r\n * @license GPLv3 for open source use only\r\n * or Fullpage Commercial License for commercial use\r\n * http://alvarotrigo.com/fullPage/pricing/\r\n *\r\n * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo\r\n */.fp-enabled body,html.fp-enabled{margin:0;padding:0;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.fp-section{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.fp-slide{float:left}.fp-slide,.fp-slidesContainer{height:100%;display:block}.fp-slides{z-index:1;height:100%;overflow:hidden;position:relative;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.fp-section.fp-table,.fp-slide.fp-table{display:table;table-layout:fixed;width:100%}.fp-tableCell{display:table-cell;vertical-align:middle;width:100%;height:100%}.fp-slidesContainer{float:left;position:relative}.fp-controlArrow{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none;position:absolute;z-index:4;top:50%;cursor:pointer;width:0;height:0;border-style:solid;margin-top:-38px;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.fp-controlArrow.fp-prev{left:15px;width:0;border-width:38.5px 34px 38.5px 0;border-color:transparent #fff transparent transparent}.fp-controlArrow.fp-next{right:15px;border-width:38.5px 0 38.5px 34px;border-color:transparent transparent transparent #fff}.fp-scrollable{overflow:hidden;position:relative}.fp-scroller{overflow:hidden}.iScrollIndicator{border:0!important}.fp-notransition{-webkit-transition:none!important;transition:none!important}#fp-nav{position:fixed;z-index:100;margin-top:-32px;top:50%;opacity:1;-webkit-transform:translate3d(0,0,0)}#fp-nav.fp-right{right:17px}#fp-nav.fp-left{left:17px}.fp-slidesNav{position:absolute;z-index:4;opacity:1;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);left:0!important;right:0;margin:0 auto!important}.fp-slidesNav.fp-bottom{bottom:17px}.fp-slidesNav.fp-top{top:17px}#fp-nav ul,.fp-slidesNav ul{margin:0;padding:0}#fp-nav ul li,.fp-slidesNav ul li{display:block;width:14px;height:13px;margin:7px;position:relative}.fp-slidesNav ul li{display:inline-block}#fp-nav ul li a,.fp-slidesNav ul li a{display:block;position:relative;z-index:1;width:100%;height:100%;cursor:pointer;text-decoration:none}#fp-nav ul li a.active span,#fp-nav ul li:hover a.active span,.fp-slidesNav ul li a.active span,.fp-slidesNav ul li:hover a.active span{height:12px;width:12px;margin:-6px 0 0 -6px;border-radius:100%}#fp-nav ul li a span,.fp-slidesNav ul li a span{border-radius:50%;position:absolute;z-index:1;height:4px;width:4px;border:0;background:#333;left:50%;top:50%;margin:-2px 0 0 -2px;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;transition:all .1s ease-in-out}#fp-nav ul li:hover a span,.fp-slidesNav ul li:hover a span{width:10px;height:10px;margin:-5px 0 0 -5px}#fp-nav ul li .fp-tooltip{position:absolute;top:-2px;color:#fff;font-size:14px;font-family:arial,helvetica,sans-serif;white-space:nowrap;max-width:220px;overflow:hidden;display:block;opacity:0;width:0;cursor:pointer}#fp-nav ul li:hover .fp-tooltip,#fp-nav.fp-show-active a.active+.fp-tooltip{-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;width:auto;opacity:1}#fp-nav ul li .fp-tooltip.fp-right{right:20px}#fp-nav ul li .fp-tooltip.fp-left{left:20px}.fp-auto-height .fp-slide,.fp-auto-height .fp-tableCell,.fp-auto-height.fp-section{height:auto!important}.fp-responsive .fp-auto-height-responsive .fp-slide,.fp-responsive .fp-auto-height-responsive .fp-tableCell,.fp-responsive .fp-auto-height-responsive.fp-section{height:auto!important}.fp-sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}\r\n/*# sourceMappingURL=fullpage.min.css.map */\r\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(7);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fullpage_js_dist_fullpage_extensions_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var fullpage_js_dist_fullpage_extensions_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fullpage_js_dist_fullpage_extensions_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_2__);
var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/* eslint-disable import/no-extraneous-dependencies *//* eslint-disable react/prop-types */// eslint-disable-line no-unused-vars
var isFunc=function isFunc(val){return typeof val==='function';};var fullpageCallbacks=['afterLoad','afterRender','afterResize','afterResponsive','afterSlideLoad','onLeave','onSlideLeave'];var ReactFullpage=function(_React$Component){_inherits(ReactFullpage,_React$Component);function ReactFullpage(props){_classCallCheck(this,ReactFullpage);var _this=_possibleConstructorReturn(this,(ReactFullpage.__proto__||Object.getPrototypeOf(ReactFullpage)).call(this,props));var render=_this.props.render;if(!isFunc(render)){throw new Error('must provide render prop to <ReactFullpage />');}_this.state={initialized:false};return _this;}_createClass(ReactFullpage,[{key:'componentDidMount',value:function componentDidMount(){var opts=this.buildOptions();if(fullpage_js_dist_fullpage_extensions_min__WEBPACK_IMPORTED_MODULE_1___default.a){this.init(opts);this.markInitialized();}}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps,prevState){var newSectionCount=this.getSectionCount();var newSlideCount=this.getSlideCount();var _state=this.state,sectionCount=_state.sectionCount,slideCount=_state.slideCount;/* TODO: add a list of fullpage.js specific props to subscribe too
      similar to how callbacks are handled)
    */if(this.props.sectionsColor!==prevProps.sectionsColor){console.log('rebuilding due to a change in fullpage.js props');// NOTE: if fullpage props have changed we need to rebuild
this.destroy();this.init(this.buildOptions());return;}if(sectionCount===newSectionCount&&slideCount===newSlideCount){return;}console.log('rebuilding due to a change in fullpage.js sections/slides');// NOTE: if sections have changed we need to rebuild
this.destroy();this.init(this.buildOptions());}},{key:'componentWillUnmount',value:function componentWillUnmount(){this.destroy();}},{key:'getSectionCount',value:function getSectionCount(){var _props$sectionSelecto=this.props.sectionSelector,sectionSelector=_props$sectionSelecto===undefined?'.section':_props$sectionSelecto;return document.querySelectorAll(sectionSelector).length;}},{key:'getSlideCount',value:function getSlideCount(){var _props$slideSelector=this.props.slideSelector,slideSelector=_props$slideSelector===undefined?'.slide':_props$slideSelector;return document.querySelectorAll(slideSelector).length;}},{key:'init',value:function init(opts){new fullpage_js_dist_fullpage_extensions_min__WEBPACK_IMPORTED_MODULE_1___default.a('#fullpage',opts);// eslint-disable-line
this.fullpageApi=window.fullpage_api;this.fpUtils=window.fp_utils;this.fpEasings=window.fp_easings;}},{key:'destroy',value:function destroy(){// NOTE: need to check for init to support SSR
if(typeof window!=='undefined'){this.fullpageApi.destroy('all');}}},{key:'markInitialized',value:function markInitialized(){this.setState({initialized:true,sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()});}},{key:'buildOptions',value:function buildOptions(){var _this2=this;var filterCb=function filterCb(key){return!!Object.keys(_this2.props).find(function(cb){return cb===key;});};var registered=fullpageCallbacks.filter(filterCb);var listeners=registered.reduce(function(result,key){var agg=_extends({},result);agg[key]=function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var newArgs=[key].concat(args);_this2.update.apply(_this2,_toConsumableArray(newArgs));};return agg;},{});return _extends({},this.props,listeners);}},{key:'update',value:function update(lastEvent){var _this3=this;for(var _len2=arguments.length,args=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2];}var state=_extends({},this.state,{sectionCount:this.getSectionCount(),getSlideCount:this.getSlideCount()});var makeState=function makeState(callbackParameters){return _extends({},state,callbackParameters,{lastEvent:lastEvent});};var fromArgs=function fromArgs(argList){return argList.reduce(function(result,key,i){var value=args[i];result[key]=value;// eslint-disable-line
return result;},{});};// NOTE: remapping callback args to v3
// https://github.com/alvarotrigo/fullPage.js#callbacks
switch(lastEvent){// After-*
case'afterLoad':state=makeState(fromArgs(['origin','destination','direction']));break;case'afterResize':state=makeState(fromArgs(['']));break;case'afterResponsive':state=makeState(fromArgs(['isResponsive']));break;case'afterSlideLoad':state=makeState(fromArgs(['section','origin','destination','direction']));break;// On-*
case'onLeave':state=makeState(fromArgs(['origin','destination','direction']));break;case'onSlideLeave':state=makeState(fromArgs(['section','origin','slideIndex','destination','direction']));break;default:break;}this.setState(state,function(){var _props;(_props=_this3.props)[lastEvent].apply(_props,args);});}},{key:'render',value:function render(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div',{id:'fullpage'},this.props.render(this));}}]);return ReactFullpage;}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (ReactFullpage);

/***/ })
/******/ ]);