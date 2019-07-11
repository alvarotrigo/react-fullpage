webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullpage/react-fullpage */ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/alvarotrigolopez/Sites/react-fullpage/examples/next/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




 // import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true

var originalColors = ["#282c34", "#ff5f45", "#0798ec"];

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      sectionsColor: originalColors.concat(),
      fullpages: [{
        text: "section 1"
      }, {
        text: "section 2"
      }]
    };
    return _this;
  }

  _createClass(App, [{
    key: "onLeave",
    value: function onLeave(origin, destination, direction) {
      console.log("onLeave", {
        origin: origin,
        destination: destination,
        direction: direction
      }); // arguments are mapped in order of fullpage.js callback arguments do something
      // with the event
    }
  }, {
    key: "handleChangeColors",
    value: function handleChangeColors() {
      var newColors = this.state.sectionsColor[0] === "yellow" ? originalColors.concat() : ["yellow", "blue", "white"];
      this.setState({
        sectionsColor: newColors
      });
    }
  }, {
    key: "handleAddSection",
    value: function handleAddSection() {
      this.setState(function (state) {
        var fullpages = state.fullpages;
        var length = fullpages.length;
        fullpages.push({
          text: "section ".concat(length + 1),
          id: Math.random()
        });
        return {
          fullpages: _toConsumableArray(fullpages)
        };
      });
    }
  }, {
    key: "handleRemoveSection",
    value: function handleRemoveSection() {
      this.setState(function (state) {
        var fullpages = state.fullpages;

        var newPages = _toConsumableArray(fullpages);

        newPages.pop();
        return {
          fullpages: newPages
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var fullpages = this.state.fullpages;

      if (!fullpages.length) {
        return null;
      }

      var Menu = function Menu() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "menu",
          style: {
            position: "fixed",
            top: 0,
            zIndex: 100
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          classNme: "actions",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: function onClick() {
            return _this2.handleAddSection();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, "+ Section"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: function onClick() {
            return _this2.handleRemoveSection();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, "- Section"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: function onClick() {
            return _this2.handleChangeColors();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "Change colors"))));
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "My styled page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "/static/styles.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2___default.a, {
        navigation: true,
        onLeave: this.onLeave.bind(this),
        sectionsColor: this.state.sectionsColor,
        render: function render(comp) {
          return console.log("render prop change") || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2___default.a.Wrapper, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            },
            __self: this
          }, fullpages.map(function (_ref) {
            var text = _ref.text;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: text,
              className: "section",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              },
              __self: this
            }, text));
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.ee6a38661863357ad465.hot-update.js.map