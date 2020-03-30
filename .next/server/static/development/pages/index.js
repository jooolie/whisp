module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./comps/grater.js":
/*!*************************!*\
  !*** ./comps/grater.js ***!
  \*************************/
/*! exports provided: Grater, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grater", function() { return Grater; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/jmklefeker/s20/whisp/comps/grater.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Grater extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "playSound", () => {
      console.log('alksdj');
      var thissound = document.getElementById('mySound');
      thissound.volume = 0.03;
      thissound.play();
    });

    _defineProperty(this, "stopSound", () => {
      var thissound = document.getElementById('mySound');
      thissound.pause();
      thissound.currentTime = 0;
    });

    this.state = {};
  }

  render() {
    return __jsx("div", {
      className: "jsx-3940202219" + " " + "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3940202219" + " " + "grid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("div", {
      onMouseEnter: this.playSound,
      onMouseLeave: this.stopSound,
      className: "jsx-3940202219" + " " + "g",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("img", {
      height: "50px",
      src: "../static/grater1.png",
      className: "jsx-3940202219",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })), __jsx("div", {
      onMouseEnter: this.playSound,
      onMouseLeave: this.stopSound,
      className: "jsx-3940202219" + " " + "g",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("img", {
      height: "50px",
      src: "../static/grater1.png",
      className: "jsx-3940202219",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), " "), __jsx("div", {
      onMouseEnter: this.playSound,
      onMouseLeave: this.stopSound,
      className: "jsx-3940202219" + " " + "g",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("img", {
      height: "50px",
      src: "../static/grater1.png",
      className: "jsx-3940202219",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    })), __jsx("div", {
      onMouseEnter: this.playSound,
      onMouseLeave: this.stopSound,
      className: "jsx-3940202219" + " " + "g",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("img", {
      height: "50px",
      src: "../static/grater1.png",
      className: "jsx-3940202219",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    })), __jsx("div", {
      onMouseEnter: this.playSound,
      onMouseLeave: this.stopSound,
      className: "jsx-3940202219" + " " + "g",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("img", {
      height: "50px",
      src: "../static/grater1.png",
      className: "jsx-3940202219",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }))), __jsx("audio", {
      id: "mySound",
      src: "../static/glass.mp3",
      className: "jsx-3940202219",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3940202219",
      __self: this
    }, "#title.jsx-3940202219{font-family:'Misto';font-size:300%;}.grid.jsx-3940202219{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.g.jsx-3940202219:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbWtsZWZla2VyL3MyMC93aGlzcC9jb21wcy9ncmF0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NlLEFBSTBCLEFBS1AsQUFLUyxvQkFUUCxlQUNoQix1Q0FJZ0IsSUFLaEIscURBSkEiLCJmaWxlIjoiL1VzZXJzL2pta2xlZmVrZXIvczIwL3doaXNwL2NvbXBzL2dyYXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJ1xuXG5leHBvcnQgY2xhc3MgR3JhdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG4gIFx0dGhpcy5zdGF0ZSA9IHt9XG4gIH1cbiAgXHRwbGF5U291bmQgPSAoKSA9PiB7XG4gIFx0Y29uc29sZS5sb2coJ2Fsa3NkaicpXG4gICAgdmFyIHRoaXNzb3VuZD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlTb3VuZCcpO1xuICAgIHRoaXNzb3VuZC52b2x1bWUgPSAwLjAzO1xuICAgIHRoaXNzb3VuZC5wbGF5KCk7XG5cdH1cblxuXHRzdG9wU291bmQgPSAoKSA9PiB7XG4gICAgdmFyIHRoaXNzb3VuZD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlTb3VuZCcpO1xuICAgIHRoaXNzb3VuZC5wYXVzZSgpO1xuICAgIHRoaXNzb3VuZC5jdXJyZW50VGltZSA9IDA7XG5cdH1cblxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZmxleFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImdyaWRcIiA+XG5cdFx0XHRcdDxkaXYgb25Nb3VzZUVudGVyPXt0aGlzLnBsYXlTb3VuZH0gb25Nb3VzZUxlYXZlPXt0aGlzLnN0b3BTb3VuZH0gY2xhc3NOYW1lID0gXCJnXCI+XG5cdFx0XHRcdFx0PGltZyBoZWlnaHQgPSBcIjUwcHhcIiBzcmM9XCIuLi9zdGF0aWMvZ3JhdGVyMS5wbmdcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBvbk1vdXNlRW50ZXI9e3RoaXMucGxheVNvdW5kfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3RvcFNvdW5kfSBjbGFzc05hbWUgPSBcImdcIj4gXG5cdFx0XHRcdFx0PGltZyBoZWlnaHQgPSBcIjUwcHhcIiBzcmM9XCIuLi9zdGF0aWMvZ3JhdGVyMS5wbmdcIiAvPiA8L2Rpdj5cblx0XHRcdFx0PGRpdiBvbk1vdXNlRW50ZXI9e3RoaXMucGxheVNvdW5kfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3RvcFNvdW5kfSBjbGFzc05hbWUgPSBcImdcIj4gXG5cdFx0XHRcdFx0PGltZyBoZWlnaHQgPSBcIjUwcHhcIiBzcmM9XCIuLi9zdGF0aWMvZ3JhdGVyMS5wbmdcIiAvPiBcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgb25Nb3VzZUVudGVyPXt0aGlzLnBsYXlTb3VuZH0gb25Nb3VzZUxlYXZlPXt0aGlzLnN0b3BTb3VuZH0gY2xhc3NOYW1lID0gXCJnXCI+IFxuXHRcdFx0XHRcdDxpbWcgaGVpZ2h0ID0gXCI1MHB4XCIgc3JjPVwiLi4vc3RhdGljL2dyYXRlcjEucG5nXCIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgb25Nb3VzZUVudGVyPXt0aGlzLnBsYXlTb3VuZH0gb25Nb3VzZUxlYXZlPXt0aGlzLnN0b3BTb3VuZH0gY2xhc3NOYW1lID0gXCJnXCI+IFxuXHRcdFx0XHRcdDxpbWcgaGVpZ2h0ID0gXCI1MHB4XCIgc3JjPVwiLi4vc3RhdGljL2dyYXRlcjEucG5nXCIgLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8YXVkaW8gaWQ9J215U291bmQnIHNyYz0nLi4vc3RhdGljL2dsYXNzLm1wMycvPlxuXG5cdFx0XHQ8c3R5bGUganN4PntgXG5cblx0XHRcdFx0I3RpdGxlIHtcblx0XHRcdFx0XHRmb250LWZhbWlseTogJ01pc3RvJztcblx0XHRcdFx0XHRmb250LXNpemU6IDMwMCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5ncmlkIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5nOmhvdmVyIHtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YH0gPC9zdHlsZT4gXG5cdFx0PC9kaXY+XG5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JhdGVyO1xuIl19 */\n/*@ sourceURL=/Users/jmklefeker/s20/whisp/comps/grater.js */"));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Grater);

/***/ }),

/***/ "./comps/nav.js":
/*!**********************!*\
  !*** ./comps/nav.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jmklefeker/s20/whisp/comps/nav.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Nav = () => __jsx("div", {
  className: "jsx-522538918" + " " + "nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("p", {
  className: "jsx-522538918",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, " Whisp "), __jsx("ul", {
  className: "jsx-522538918" + " " + "links",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-522538918",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, " shop "), " "), __jsx("li", {
  className: "jsx-522538918",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, " about "), " ")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "522538918",
  __self: undefined
}, "@import url('https://fonts.googleapis.com/css?family=DM+Serif+Text|Source+Code+Pro');.nav.jsx-522538918{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}p.jsx-522538918{margin-left:.5em;font-family:'DM Serif Text';}.links.jsx-522538918{font-family:'Source Code Pro';list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:.4em;-webkit-text-decoration:none;text-decoration:none;}li.jsx-522538918{padding-left:.3em;padding-right:.3em;color:blue;}li.jsx-522538918: active.jsx-522538918{color:blue;}li.jsx-522538918: visited.jsx-522538918{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbWtsZWZla2VyL3MyMC93aGlzcC9jb21wcy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2lCLEFBRXdGLEFBRXBFLEFBTUksQUFLYSxBQU9aLEFBTUwsQUFJQSxXQUhiLEFBSUEsTUF0QjRCLENBWVQsWUFQSCxPQVFMLFFBWlgsQ0FLYSxFQVFiLDBCQXBCOEIsOENBYVosa0JBQ0csa0RBQ3hCLENBZHNCLDZGQUNuQiIsImZpbGUiOiIvVXNlcnMvam1rbGVmZWtlci9zMjAvd2hpc3AvY29tcHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBOYXYgPSAoKSA9PiAoXG48ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgIDxwPiBXaGlzcCA8L3A+XG4gICAgPHVsIGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICA8bGk+IDxMaW5rIGhyZWY9Jy8nPiBzaG9wIDwvTGluaz4gPC9saT5cbiAgICAgIDxsaT4gPExpbmsgaHJlZj0nL2Fib3V0Jz4gYWJvdXQgPC9MaW5rPiA8L2xpPlxuICAgIDwvdWw+XG4gICAgPHN0eWxlIGpzeD4ge2Bcblx0XHRcdEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RE0rU2VyaWYrVGV4dHxTb3VyY2UrQ29kZStQcm8nKTtcbiAgICAgIC5uYXYge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgbWFyZ2luLWxlZnQ6IC41ZW07XG4gICAgICBmb250LWZhbWlseTogJ0RNIFNlcmlmIFRleHQnO1xuICAgICAgfVxuXG4gICAgICAubGlua3Mge1xuICAgICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgQ29kZSBQcm8nO1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC40ZW07XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHR9XG5cdFx0XHRsaSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IC4zZW07XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAuM2VtO1xuICAgICAgY29sb3I6IGJsdWU7XG4gICAgICB9XG5cbiAgICAgIGxpOiBhY3RpdmUge1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgIH1cblxuICAgICAgbGk6IHZpc2l0ZWQge1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgIGB9IDwvc3R5bGU+XG4gICAgPC9kaXY+XG4pXG5leHBvcnQgZGVmYXVsdCBOYXZcbiJdfQ== */\n/*@ sourceURL=/Users/jmklefeker/s20/whisp/comps/nav.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./comps/parallax.js":
/*!***************************!*\
  !*** ./comps/parallax.js ***!
  \***************************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _comps_grater__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comps/grater */ "./comps/grater.js");
var _jsxFileName = "/Users/jmklefeker/s20/whisp/comps/parallax.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const {
  Parallax,
  ParallaxLayer
} = __webpack_require__(/*! react-spring/addons.cjs */ "react-spring/addons.cjs");




class App extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 100,
      y: 100
    };
  }

  render() {
    return __jsx("div", {
      className: "jsx-1635709391",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx(Parallax, {
      pages: 4,
      scrolling: true,
      horizontal: true,
      ref: ref => this.parallax = ref,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1635709391",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx(ParallaxLayer, {
      offset: .2,
      speed: 1,
      style: {
        marginTop: '7em'
      },
      onClick: () => this.parallax.scrollTo(1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("img", {
      height: "325px",
      src: "../static/gratimg_1.jpeg",
      className: "jsx-1635709391",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    })), __jsx(ParallaxLayer, {
      offset: .62,
      speed: 1,
      style: {
        marginTop: '7em'
      },
      onClick: () => this.parallax.scrollTo(1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("img", {
      height: "150px",
      src: "../static/gratimg_2.jpeg",
      className: "jsx-1635709391",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })), __jsx(ParallaxLayer, {
      offset: .62,
      speed: 1,
      style: {
        marginTop: '18em'
      },
      onClick: () => this.parallax.scrollTo(1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("img", {
      height: "150px",
      src: "../static/gratimg_3.jpeg",
      className: "jsx-1635709391",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })), __jsx(ParallaxLayer, {
      offset: .15,
      speed: 0.5,
      onClick: () => this.parallax.scrollTo(1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-1635709391",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, " Ginger Grater ")), __jsx(ParallaxLayer, {
      offset: .2,
      speed: .75,
      onClick: () => this.parallax.scrollTo(1),
      style: {
        marginTop: '3em'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx(_comps_grater__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }))), __jsx(ParallaxLayer, {
      offset: 1,
      speed: 0.5,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      onClick: () => this.parallax.scrollTo(2),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1635709391" + " " + "p5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("img", {
      width: "400em",
      src: '../static/placeholder.png',
      className: "jsx-1635709391",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }))), __jsx(ParallaxLayer, {
      offset: 1.58,
      speed: .75,
      onClick: () => this.parallax.scrollTo(2),
      style: {
        marginTop: '3em'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("img", {
      width: "200",
      src: '../static/blob-shape (4).svg',
      className: "jsx-1635709391",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })), __jsx(ParallaxLayer, {
      offset: 1.23,
      speed: 1,
      style: {
        marginTop: '23em'
      },
      onClick: () => this.parallax.scrollTo(2),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-1635709391",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, " This is the second product. ")), __jsx(ParallaxLayer, {
      offset: 2,
      speed: 0.5,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      onClick: () => this.parallax.scrollTo(0),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("img", {
      width: "400em",
      src: '../static/placeholder.png',
      className: "jsx-1635709391",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    })), __jsx(ParallaxLayer, {
      offset: 2.23,
      speed: .75,
      style: {
        zIndex: '1',
        marginTop: '3em'
      },
      onClick: () => this.parallax.scrollTo(0),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx("img", {
      width: "200",
      src: '../static/blob-shape (3).svg',
      className: "jsx-1635709391",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    })), __jsx(ParallaxLayer, {
      offset: 2.58,
      speed: 1,
      style: {
        zIndex: '2',
        marginTop: '23em'
      },
      onClick: () => this.parallax.scrollTo(0),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-1635709391",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, " This is the third product. ")), __jsx(ParallaxLayer, {
      offset: 2,
      speed: 0.5,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx("span", {
      onClick: () => this.parallax.scrollTo(0),
      className: "jsx-1635709391",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("img", {
      width: "400em",
      src: '../static/placeholder.png',
      className: "jsx-1635709391",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1635709391",
      __self: this
    }, "@font-face{font-family:'Misto';src:url('../static/fonts/Misto.woff');}h2.jsx-1635709391{font-family:'Misto';font-size:150%;color:#585858;padding-top:9em;-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbWtsZWZla2VyL3MyMC93aGlzcC9jb21wcy9wYXJhbGxheC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErR2UsQUFJNkIsQUFLSCxvQkFKcUIsQUFLMUIsZUFDRCxjQUNFLFNBTmpCLE9BTzBCLGlGQUUxQiIsImZpbGUiOiIvVXNlcnMvam1rbGVmZWtlci9zMjAvd2hpc3AvY29tcHMvcGFyYWxsYXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IFBhcmFsbGF4LCBQYXJhbGxheExheWVyIH0gPSByZXF1aXJlKCdyZWFjdC1zcHJpbmcvYWRkb25zLmNqcycpO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCBHcmF0ZXIgZnJvbSAnLi4vY29tcHMvZ3JhdGVyJ1xuXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG4gIFx0dGhpcy5zdGF0ZSA9IHtcbiAgIFx0XHR4OiAxMDAsXG4gIFx0XHR5OiAxMDBcbiAgICB9XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0PFBhcmFsbGF4IHBhZ2VzPXs0fSBzY3JvbGxpbmc9e3RydWV9IGhvcml6b250YWwgcmVmPXtyZWYgPT4gKHRoaXMucGFyYWxsYXggPSByZWYpfT5cblx0XHRcdFx0ey8qIFBBR0UgMSAqL31cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0PFBhcmFsbGF4TGF5ZXJcblx0XHRcdFx0ICAgIG9mZnNldCA9IHsuMn1cblx0XHRcdFx0XHRzcGVlZD17MX1cblx0XHRcdFx0XHRzdHlsZT17e21hcmdpblRvcDogJzdlbSd9fVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRoaXMucGFyYWxsYXguc2Nyb2xsVG8oMSl9PlxuXHRcdFx0XHRcdDxpbWcgaGVpZ2h0ID0gXCIzMjVweFwiIHNyYz1cIi4uL3N0YXRpYy9ncmF0aW1nXzEuanBlZ1wiIC8+XG5cdFx0XHRcdDwvUGFyYWxsYXhMYXllcj5cblx0XHRcdFx0PFBhcmFsbGF4TGF5ZXJcblx0XHRcdFx0ICAgIG9mZnNldCA9IHsuNjJ9XG5cdFx0XHRcdFx0c3BlZWQ9ezF9XG5cdFx0XHRcdFx0c3R5bGU9e3ttYXJnaW5Ub3A6ICc3ZW0nfX1cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0aGlzLnBhcmFsbGF4LnNjcm9sbFRvKDEpfT5cblx0XHRcdFx0XHQ8aW1nIGhlaWdodCA9IFwiMTUwcHhcIiBzcmM9XCIuLi9zdGF0aWMvZ3JhdGltZ18yLmpwZWdcIiAvPlxuXHRcdFx0XHQ8L1BhcmFsbGF4TGF5ZXI+XG5cdFx0XHRcdDxQYXJhbGxheExheWVyXG5cdFx0XHRcdCAgICBvZmZzZXQgPSB7LjYyfVxuXHRcdFx0XHRcdHNwZWVkPXsxfVxuXHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luVG9wOiAnMThlbSd9fVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRoaXMucGFyYWxsYXguc2Nyb2xsVG8oMSl9PlxuXHRcdFx0XHRcdDxpbWcgaGVpZ2h0ID0gXCIxNTBweFwiIHNyYz1cIi4uL3N0YXRpYy9ncmF0aW1nXzMuanBlZ1wiIC8+XG5cdFx0XHRcdDwvUGFyYWxsYXhMYXllcj5cbiAgICAgICAgXHRcdDxQYXJhbGxheExheWVyXG4gICAgICAgIFx0XHRcdG9mZnNldCA9IHsuMTV9XG5cdFx0XHRcdFx0c3BlZWQ9ezAuNX1cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0aGlzLnBhcmFsbGF4LnNjcm9sbFRvKDEpfT5cblx0XHRcdFx0XHQ8aDI+IEdpbmdlciBHcmF0ZXIgPC9oMj4gXG4gICAgICAgIFx0XHQ8L1BhcmFsbGF4TGF5ZXI+XG4gICAgICAgIFx0XHQ8UGFyYWxsYXhMYXllclxuICAgICAgICBcdFx0XHRvZmZzZXQgPSB7LjJ9XG5cdFx0XHRcdFx0c3BlZWQ9ey43NX1cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0aGlzLnBhcmFsbGF4LnNjcm9sbFRvKDEpfVxuXHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luVG9wOiAnM2VtJ319PlxuXHRcdFx0XHRcdDxHcmF0ZXIgLz5cblx0XHRcdFx0PC9QYXJhbGxheExheWVyPlxuICAgICAgICBcdFx0PC9kaXY+XG5cblx0XHRcdFx0ey8qIFBBR0UgMiAqL31cblx0XHRcdFx0PFBhcmFsbGF4TGF5ZXJcblx0XHRcdFx0XHRvZmZzZXQ9ezF9XG5cdFx0XHRcdFx0c3BlZWQ9ezAuNX1cblx0XHRcdFx0XHRzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX1cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0aGlzLnBhcmFsbGF4LnNjcm9sbFRvKDIpfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInA1XCI+XG4gIFx0XHRcdFx0ICA8aW1nIHdpZHRoPVwiNDAwZW1cIiBzcmM9eycuLi9zdGF0aWMvcGxhY2Vob2xkZXIucG5nJ30vPlxuICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHQ8L1BhcmFsbGF4TGF5ZXI+XG5cdFx0XHRcdDxQYXJhbGxheExheWVyXG5cdFx0XHRcdFx0b2Zmc2V0PXsxLjU4fVxuXHRcdFx0XHRcdHNwZWVkPXsuNzV9XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gdGhpcy5wYXJhbGxheC5zY3JvbGxUbygyKX1cblx0XHRcdFx0XHRzdHlsZT17e21hcmdpblRvcDogJzNlbSd9fT5cblx0XHRcdFx0ICAgIDxpbWcgd2lkdGg9XCIyMDBcIiBzcmM9eycuLi9zdGF0aWMvYmxvYi1zaGFwZSAoNCkuc3ZnJ30vPlxuXHRcdFx0XHQ8L1BhcmFsbGF4TGF5ZXI+XG5cdFx0XHRcdDxQYXJhbGxheExheWVyXG5cdFx0XHRcdFx0b2Zmc2V0PXsxLjIzfVxuXHRcdFx0XHRcdHNwZWVkPXsxfVxuXHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luVG9wOiAnMjNlbSd9fVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRoaXMucGFyYWxsYXguc2Nyb2xsVG8oMil9PlxuXHRcdFx0XHRcdCAgPHA+IFRoaXMgaXMgdGhlIHNlY29uZCBwcm9kdWN0LiA8L3A+XG5cdFx0XHRcdDwvUGFyYWxsYXhMYXllcj5cblx0XHRcdFx0ey8qIFBBR0UgMyAqL31cblx0XHRcdFx0PFBhcmFsbGF4TGF5ZXJcblx0XHRcdFx0XHRvZmZzZXQ9ezJ9XG5cdFx0XHRcdFx0c3BlZWQ9ezAuNX1cblx0XHRcdFx0XHRzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRoaXMucGFyYWxsYXguc2Nyb2xsVG8oMCl9PlxuXHRcdFx0XHRcdFx0PGltZyB3aWR0aD1cIjQwMGVtXCIgc3JjPXsnLi4vc3RhdGljL3BsYWNlaG9sZGVyLnBuZyd9Lz5cblx0XHRcdFx0PC9QYXJhbGxheExheWVyPlxuXHRcdFx0XHQ8UGFyYWxsYXhMYXllclxuXHRcdFx0XHRcdG9mZnNldD17Mi4yM31cblx0XHRcdFx0XHRzcGVlZD17Ljc1fVxuXHRcdFx0XHRcdHN0eWxlPXt7ekluZGV4OiAnMScsIG1hcmdpblRvcDogJzNlbSd9fVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRoaXMucGFyYWxsYXguc2Nyb2xsVG8oMCl9PlxuXHRcdFx0XHQ8aW1nIHdpZHRoPVwiMjAwXCIgc3JjPXsnLi4vc3RhdGljL2Jsb2Itc2hhcGUgKDMpLnN2Zyd9Lz5cblx0XHRcdFx0PC9QYXJhbGxheExheWVyPlxuXHRcdFx0XHQ8UGFyYWxsYXhMYXllclxuXHRcdFx0XHRcdG9mZnNldD17Mi41OH1cblx0XHRcdFx0XHRzcGVlZD17MX1cblx0XHRcdFx0XHRzdHlsZT17e3pJbmRleDogJzInLCBtYXJnaW5Ub3A6ICcyM2VtJ319XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gdGhpcy5wYXJhbGxheC5zY3JvbGxUbygwKX0+XG5cdFx0XHRcdFx0PHA+IFRoaXMgaXMgdGhlIHRoaXJkIHByb2R1Y3QuIDwvcD5cblx0XHRcdFx0PC9QYXJhbGxheExheWVyPlxuICAgICAgICA8UGFyYWxsYXhMYXllclxuXHRcdFx0XHRcdG9mZnNldD17Mn1cblx0XHRcdFx0XHRzcGVlZD17MC41fVxuXHRcdFx0XHRcdHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cblx0XHRcdFx0XHQ8c3BhbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBhcmFsbGF4LnNjcm9sbFRvKDApfT5cblx0XHRcdFx0XHRcdDxpbWcgd2lkdGg9XCI0MDBlbVwiIHNyYz17Jy4uL3N0YXRpYy9wbGFjZWhvbGRlci5wbmcnfS8+XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8L1BhcmFsbGF4TGF5ZXI+XG5cdFx0XHQ8L1BhcmFsbGF4PlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXG5cdFx0XHRcdEBmb250LWZhY2Uge1xuXHRcdFx0XHQgICAgZm9udC1mYW1pbHk6ICdNaXN0byc7XG5cdFx0XHRcdCAgICBzcmM6IHVybCgnLi4vc3RhdGljL2ZvbnRzL01pc3RvLndvZmYnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGgyIHtcblx0XHRcdFx0XHRmb250LWZhbWlseTogJ01pc3RvJztcblx0XHRcdFx0XHRmb250LXNpemU6IDE1MCU7XG5cdFx0XHRcdFx0Y29sb3I6ICM1ODU4NTg7XG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDllbTtcblx0XHRcdFx0XHR3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRgfSA8L3N0eWxlPiBcblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQpXG59XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */\n/*@ sourceURL=/Users/jmklefeker/s20/whisp/comps/parallax.js */"));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _comps_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comps/nav */ "./comps/nav.js");
/* harmony import */ var _comps_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/parallax */ "./comps/parallax.js");
var _jsxFileName = "/Users/jmklefeker/s20/whisp/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Index = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(_comps_parallax__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jmklefeker/s20/whisp/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-spring/addons.cjs":
/*!******************************************!*\
  !*** external "react-spring/addons.cjs" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring/addons.cjs");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map