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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
      height: "75px",
      src: "../static/grater_green.png",
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
      height: "75px",
      src: "../static/grater_green.png",
      className: "jsx-3940202219",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })), __jsx("div", {
      onMouseEnter: this.playSound,
      onMouseLeave: this.stopSound,
      className: "jsx-3940202219" + " " + "g",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("img", {
      height: "75px",
      src: "../static/grater_green.png",
      className: "jsx-3940202219",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    })), __jsx("div", {
      onMouseEnter: this.playSound,
      onMouseLeave: this.stopSound,
      className: "jsx-3940202219" + " " + "g",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("img", {
      height: "75px",
      src: "../static/grater_green.png",
      className: "jsx-3940202219",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    })), __jsx("div", {
      onMouseEnter: this.playSound,
      onMouseLeave: this.stopSound,
      className: "jsx-3940202219" + " " + "g",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("img", {
      height: "75px",
      src: "../static/grater_green.png",
      className: "jsx-3940202219",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }))), __jsx("audio", {
      id: "mySound",
      src: "../static/glass.mp3",
      className: "jsx-3940202219",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3940202219",
      __self: this
    }, "#title.jsx-3940202219{font-family:'Misto';font-size:300%;}.grid.jsx-3940202219{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.g.jsx-3940202219:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbWtsZWZla2VyL3MyMC93aGlzcC9jb21wcy9ncmF0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RlLEFBSTBCLEFBS1AsQUFLUyxvQkFUUCxlQUNoQix1Q0FJZ0IsSUFLaEIscURBSkEiLCJmaWxlIjoiL1VzZXJzL2pta2xlZmVrZXIvczIwL3doaXNwL2NvbXBzL2dyYXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJ1xuXG5leHBvcnQgY2xhc3MgR3JhdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG4gIFx0dGhpcy5zdGF0ZSA9IHt9XG4gIH1cbiAgXHRwbGF5U291bmQgPSAoKSA9PiB7XG4gIFx0Y29uc29sZS5sb2coJ2Fsa3NkaicpXG4gICAgdmFyIHRoaXNzb3VuZD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlTb3VuZCcpO1xuICAgIHRoaXNzb3VuZC52b2x1bWUgPSAwLjAzO1xuICAgIHRoaXNzb3VuZC5wbGF5KCk7XG5cdH1cblxuXHRzdG9wU291bmQgPSAoKSA9PiB7XG4gICAgdmFyIHRoaXNzb3VuZD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlTb3VuZCcpO1xuICAgIHRoaXNzb3VuZC5wYXVzZSgpO1xuICAgIHRoaXNzb3VuZC5jdXJyZW50VGltZSA9IDA7XG5cdH1cblxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZmxleFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImdyaWRcIiA+XG5cdFx0XHRcdDxkaXYgb25Nb3VzZUVudGVyPXt0aGlzLnBsYXlTb3VuZH0gb25Nb3VzZUxlYXZlPXt0aGlzLnN0b3BTb3VuZH0gY2xhc3NOYW1lID0gXCJnXCI+XG5cdFx0XHRcdFx0PGltZyBoZWlnaHQgPSBcIjc1cHhcIiBzcmM9XCIuLi9zdGF0aWMvZ3JhdGVyX2dyZWVuLnBuZ1wiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IG9uTW91c2VFbnRlcj17dGhpcy5wbGF5U291bmR9IG9uTW91c2VMZWF2ZT17dGhpcy5zdG9wU291bmR9IGNsYXNzTmFtZSA9IFwiZ1wiPiBcblx0XHRcdFx0XHQ8aW1nIGhlaWdodCA9IFwiNzVweFwiIHNyYz1cIi4uL3N0YXRpYy9ncmF0ZXJfZ3JlZW4ucG5nXCIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgb25Nb3VzZUVudGVyPXt0aGlzLnBsYXlTb3VuZH0gb25Nb3VzZUxlYXZlPXt0aGlzLnN0b3BTb3VuZH0gY2xhc3NOYW1lID0gXCJnXCI+IFxuXHRcdFx0XHRcdDxpbWcgaGVpZ2h0ID0gXCI3NXB4XCIgc3JjPVwiLi4vc3RhdGljL2dyYXRlcl9ncmVlbi5wbmdcIiAvPiBcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgb25Nb3VzZUVudGVyPXt0aGlzLnBsYXlTb3VuZH0gb25Nb3VzZUxlYXZlPXt0aGlzLnN0b3BTb3VuZH0gY2xhc3NOYW1lID0gXCJnXCI+IFxuXHRcdFx0XHRcdDxpbWcgaGVpZ2h0ID0gXCI3NXB4XCIgc3JjPVwiLi4vc3RhdGljL2dyYXRlcl9ncmVlbi5wbmdcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBvbk1vdXNlRW50ZXI9e3RoaXMucGxheVNvdW5kfSBvbk1vdXNlTGVhdmU9e3RoaXMuc3RvcFNvdW5kfSBjbGFzc05hbWUgPSBcImdcIj4gXG5cdFx0XHRcdFx0PGltZyBoZWlnaHQgPSBcIjc1cHhcIiBzcmM9XCIuLi9zdGF0aWMvZ3JhdGVyX2dyZWVuLnBuZ1wiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGF1ZGlvIGlkPSdteVNvdW5kJyBzcmM9Jy4uL3N0YXRpYy9nbGFzcy5tcDMnLz5cblxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXG5cdFx0XHRcdCN0aXRsZSB7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdNaXN0byc7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAzMDAlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHQuZ3JpZCB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuZzpob3ZlciB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGB9IDwvc3R5bGU+IFxuXHRcdDwvZGl2PlxuXG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/jmklefeker/s20/whisp/comps/grater.js */"));
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
  className: "jsx-2637810242" + " " + "nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("p", {
  className: "jsx-2637810242" + " " + "title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, " Whisp "), __jsx("p", {
  className: "jsx-2637810242" + " " + "desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, " Spring Collection: 29,99:-/month "), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2637810242",
  __self: undefined
}, "@import url('https://fonts.googleapis.com/css?family=DM+Serif+Text|Source+Code+Pro');@font-face{font-family:'Misto';src:url('../static/fonts/Misto.woff');}.nav.jsx-2637810242{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:-0.4em;position:fixed;}.title.jsx-2637810242{margin-left:1em;font-family:'Misto';font-size:170%;color:black;}.desc.jsx-2637810242{font-family:'Misto';font-size:100%;margin-left:2em;color:gray;}.links.jsx-2637810242{font-family:'Source Code Pro';list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:55em;margin-right:1em;-webkit-text-decoration:none;text-decoration:none;}li.jsx-2637810242{padding-left:.4em;padding-right:.4em;color:gray;}li.jsx-2637810242: active.jsx-2637810242{color:black;}li.jsx-2637810242: visited.jsx-2637810242{color:gray;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbWtsZWZla2VyL3MyMC93aGlzcC9jb21wcy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2lCLEFBRXdGLEFBR3ZELEFBS2IsQUFVRyxBQU9JLEFBT1UsQUFVWixBQU1KLEFBSUQsV0FDYixDQUpBLElBOUJvQixFQXdCRCxFQXZDeUIsQUFzQjdCLFVBT0MsS0FOQSxDQVBELENBd0JKLFNBVkUsRUFXYixHQXhCWSxBQU9ELE9BdkJULElBd0JGLENBUEEsV0FiOEIsOENBMEJiLGlCQUNBLGlCQUNJLG1DQTNCRixlQTRCdEIsOEVBM0JxQixrQkFDSCxlQUdmIiwiZmlsZSI6Ii9Vc2Vycy9qbWtsZWZla2VyL3MyMC93aGlzcC9jb21wcy9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IE5hdiA9ICgpID0+IChcbjxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj4gV2hpc3AgPC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cImRlc2NcIj4gU3ByaW5nIENvbGxlY3Rpb246IDI5LDk5Oi0vbW9udGggPC9wPlxuICAgXG4gICAgPHN0eWxlIGpzeD4ge2Bcblx0XHRcdEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RE0rU2VyaWYrVGV4dHxTb3VyY2UrQ29kZStQcm8nKTtcblxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTWlzdG8nO1xuICAgICAgICAgICAgc3JjOiB1cmwoJy4uL3N0YXRpYy9mb250cy9NaXN0by53b2ZmJyk7XG4gICAgICAgIH1cblxuICAgICAgLm5hdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IC0wLjRlbTtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuXG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgICAgZm9udC1mYW1pbHk6ICdNaXN0byc7XG4gICAgICBmb250LXNpemU6IDE3MCU7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB9XG5cbiAgICAgIC5kZXNjIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTWlzdG8nO1xuICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgfVxuXG4gICAgICAubGlua3Mge1xuICAgICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgQ29kZSBQcm8nO1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW4tbGVmdDogNTVlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0fVxuICAgICAgXG5cblx0XHRcdGxpIHtcbiAgICAgIHBhZGRpbmctbGVmdDogLjRlbTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IC40ZW07XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIH1cblxuICAgICAgbGk6IGFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cblxuICAgICAgbGk6IHZpc2l0ZWQge1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgIH1cbiAgICAgIFxuICAgIGB9IDwvc3R5bGU+XG4gICAgPC9kaXY+XG4pXG5leHBvcnQgZGVmYXVsdCBOYXZcbiJdfQ== */\n/*@ sourceURL=/Users/jmklefeker/s20/whisp/comps/nav.js */"));

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
/* harmony import */ var _comps_vase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comps/vase */ "./comps/vase.js");
/* harmony import */ var _comps_seq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comps/seq */ "./comps/seq.js");
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
      className: "jsx-3444269292" + " " + "wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx(Parallax, {
      pages: 4,
      scrolling: true,
      horizontal: true,
      ref: ref => this.parallax = ref,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx(ParallaxLayer, {
      offset: 0.35,
      speed: .75,
      style: {
        marginTop: '10em'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-3444269292" + " " + "welcome",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, " Spring Collection ")), __jsx(ParallaxLayer, {
      offset: 0.35,
      speed: .75,
      style: {
        marginTop: '15em'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-3444269292" + " " + "headphones",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, " 29,99:- per month ")), __jsx(ParallaxLayer, {
      offset: 0.35,
      speed: .75,
      style: {
        marginTop: '17em',
        height: "60px",
        width: "60px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-3444269292" + " " + "headphones",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, " please wear headphones ")), __jsx(ParallaxLayer, {
      offset: 0.92,
      speed: .75,
      onClick: () => this.parallax.scrollTo(1),
      style: {
        marginTop: '3em',
        height: "60px",
        width: "60px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3444269292" + " " + "arrow-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, " ")), __jsx(ParallaxLayer, {
      offset: 1.25,
      speed: 0.5,
      style: {
        marginTop: '7em'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("img", {
      height: "325px",
      src: '../static/plantimg_1.jpeg',
      className: "jsx-3444269292",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })), __jsx(ParallaxLayer, {
      offset: 1.1,
      speed: 1,
      style: {
        marginTop: '11em'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("img", {
      height: "150px",
      src: "../static/plantimg_2.jpeg",
      className: "jsx-3444269292",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    })), __jsx(ParallaxLayer, {
      offset: 1.1,
      speed: 1,
      style: {
        marginTop: '22em'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("img", {
      height: "150px",
      src: "../static/plantimg_3.jpeg",
      className: "jsx-3444269292",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    })), __jsx(ParallaxLayer, {
      offset: 1.7,
      style: {
        marginTop: '7em'
      },
      speed: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx(_comps_seq__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    })), __jsx(ParallaxLayer, {
      offset: 1.03,
      speed: .75,
      onClick: () => this.parallax.scrollTo(0),
      style: {
        marginTop: '3em',
        height: "60px",
        width: "60px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3444269292" + " " + "arrow-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, " ")), __jsx(ParallaxLayer, {
      offset: 1.92,
      speed: .75,
      onClick: () => this.parallax.scrollTo(2),
      style: {
        marginTop: '3em',
        height: "60px",
        width: "60px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3444269292" + " " + "arrow-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, " ")), __jsx(ParallaxLayer, {
      offset: 2.53,
      speed: 0.5,
      style: {
        marginTop: '7em'
      },
      onClick: () => this.parallax.scrollTo(0),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3444269292",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx("img", {
      height: "325px",
      src: '../static/vaseimg_1.jpg',
      className: "jsx-3444269292",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }))), __jsx(ParallaxLayer, {
      offset: 2.2,
      speed: 1,
      style: {
        marginTop: '7em'
      },
      onClick: () => this.parallax.scrollTo(0),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx("img", {
      height: "150px",
      src: "../static/vaseimg_2.jpeg",
      className: "jsx-3444269292",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    })), __jsx(ParallaxLayer, {
      offset: 2.2,
      speed: 1,
      style: {
        marginTop: '18em'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, __jsx("img", {
      height: "150px",
      src: "../static/vaseimg_3.jpeg",
      className: "jsx-3444269292",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    })), __jsx(ParallaxLayer, {
      offset: 2.42,
      speed: 1,
      style: {
        marginTop: '6em'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, __jsx(_comps_vase__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    })), __jsx(ParallaxLayer, {
      offset: 2.03,
      speed: .75,
      onClick: () => this.parallax.scrollTo(1),
      style: {
        marginTop: '3em',
        height: "60px",
        width: "60px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3444269292" + " " + "arrow-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, " ")), __jsx(ParallaxLayer, {
      offset: 2.92,
      speed: .75,
      onClick: () => this.parallax.scrollTo(3),
      style: {
        marginTop: '3em',
        height: "60px",
        width: "60px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3444269292" + " " + "arrow-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, " ")), __jsx(ParallaxLayer, {
      offset: 3.1,
      speed: 1,
      style: {
        marginTop: '7em'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, __jsx("img", {
      height: "325px",
      src: "../static/gratimg_1.jpeg",
      className: "jsx-3444269292",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    })), __jsx(ParallaxLayer, {
      offset: 3.5,
      speed: 1,
      style: {
        marginTop: '7em'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, __jsx("img", {
      height: "325px",
      src: "../static/gratimg_2.jpg",
      className: "jsx-3444269292",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    })), __jsx(ParallaxLayer, {
      offset: 3.1,
      speed: .75,
      style: {
        marginTop: '3em',
        height: "100px",
        width: "500px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx(_comps_grater__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    })), __jsx(ParallaxLayer, {
      offset: 3.03,
      speed: .75,
      onClick: () => this.parallax.scrollTo(2),
      style: {
        marginTop: '3em',
        height: "60px",
        width: "60px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3444269292" + " " + "arrow-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, " ")), __jsx(ParallaxLayer, {
      offset: 3.92,
      speed: .75,
      onClick: () => this.parallax.scrollTo(0),
      style: {
        marginTop: '3em',
        height: "60px",
        width: "60px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3444269292" + " " + "arrow-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, " "))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3444269292",
      __self: this
    }, "@font-face{font-family:'Misto';src:url('../static/fonts/Misto.woff');}@import url('https://fonts.googleapis.com/css?family=DM+Serif+Text|Source+Code+Pro');.wrapper.jsx-3444269292{padding-top:3em;}.welcome.jsx-3444269292{font-family:'Misto';font-size:200%;}.headphones.jsx-3444269292{font-family:'Source Code Pro';color:gray;font-size:115%;}.arrow-left.jsx-3444269292{margin-top:12em;border-bottom:1px solid #000;border-right:1px solid #000;width:35px;height:35px;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}.arrow-left.jsx-3444269292:hover{border-bottom:2px solid #000;border-right:2px solid #000;}.arrow-right.jsx-3444269292{margin-top:12em;border-bottom:1px solid #000;border-right:1px solid #000;width:35px;height:35px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.arrow-right.jsx-3444269292:hover{border-bottom:2px solid #000;border-right:2px solid #000;}h2.jsx-3444269292{font-family:'Misto';font-size:150%;color:#585858;padding-top:9em;-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbWtsZWZla2VyL3MyMC93aGlzcC9jb21wcy9wYXJhbGxheC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4S2UsQUFJNkIsQUFHNEQsQUFHbkUsQUFLSSxBQUtVLEFBTWQsQUFVYSxBQU1iLEFBVWEsQUFLVCxnQkE3Q3JCLEFBZThCLEFBZ0JBLElBdENZLEFBVzFCLEFBMENBLFNBckJhLEFBZ0JBLENBaENqQixLQUpaLEFBMENlLE1BcENoQixJQUs4QixBQWdCQSxJQWdCWixPQXJDakIsQ0FlQSxBQWdCQSxDQWhEQSxPQXVEMEIsUUFoQ2QsQUFnQkEsV0FmQyxBQWdCQSxZQWZhLEFBZ0JBLGtEQWUxQixxQ0E3QkEsQUFnQkEiLCJmaWxlIjoiL1VzZXJzL2pta2xlZmVrZXIvczIwL3doaXNwL2NvbXBzL3BhcmFsbGF4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBQYXJhbGxheCwgUGFyYWxsYXhMYXllciB9ID0gcmVxdWlyZSgncmVhY3Qtc3ByaW5nL2FkZG9ucy5janMnKTtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluaydcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgR3JhdGVyIGZyb20gJy4uL2NvbXBzL2dyYXRlcidcbmltcG9ydCBWYXNlIGZyb20gJy4uL2NvbXBzL3Zhc2UnXG5pbXBvcnQgU2VxIGZyb20gJy4uL2NvbXBzL3NlcSdcblxuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuICBcdHRoaXMuc3RhdGUgPSB7XG4gICBcdFx0eDogMTAwLFxuICBcdFx0eTogMTAwXG4gICAgfVxuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG5cdFx0XHQ8UGFyYWxsYXggcGFnZXM9ezR9IHNjcm9sbGluZz17dHJ1ZX0gaG9yaXpvbnRhbCByZWY9e3JlZiA9PiAodGhpcy5wYXJhbGxheCA9IHJlZil9PlxuXHRcdFx0XHR7LyogUEFHRSAwICovfVxuXHRcdFx0XHQ8UGFyYWxsYXhMYXllclxuICAgICAgICBcdFx0XHRvZmZzZXQgPSB7MC4zNX1cblx0XHRcdFx0XHRzcGVlZD17Ljc1fVxuXHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luVG9wOiAnMTBlbSd9fT5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ3ZWxjb21lXCI+IFNwcmluZyBDb2xsZWN0aW9uIDwvcD5cblx0XHRcdFx0PC9QYXJhbGxheExheWVyPlxuXHRcdFx0XHQ8UGFyYWxsYXhMYXllclxuICAgICAgICBcdFx0XHRvZmZzZXQgPSB7MC4zNX1cblx0XHRcdFx0XHRzcGVlZD17Ljc1fVxuXHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luVG9wOiAnMTVlbSd9fT5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJoZWFkcGhvbmVzXCI+IDI5LDk5Oi0gcGVyIG1vbnRoIDwvcD5cblx0XHRcdFx0PC9QYXJhbGxheExheWVyPlxuXHRcdFx0XHQ8UGFyYWxsYXhMYXllclxuICAgICAgICBcdFx0XHRvZmZzZXQgPSB7MC4zNX1cblx0XHRcdFx0XHRzcGVlZD17Ljc1fVxuXHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luVG9wOiAnMTdlbScsIGhlaWdodDogXCI2MHB4XCIsIHdpZHRoOiBcIjYwcHhcIn19PlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImhlYWRwaG9uZXNcIj4gcGxlYXNlIHdlYXIgaGVhZHBob25lcyA8L3A+XG5cdFx0XHRcdDwvUGFyYWxsYXhMYXllcj5cblx0XHRcdFx0PFBhcmFsbGF4TGF5ZXJcbiAgICAgICAgXHRcdFx0b2Zmc2V0ID0gezAuOTJ9XG5cdFx0XHRcdFx0c3BlZWQ9ey43NX1cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0aGlzLnBhcmFsbGF4LnNjcm9sbFRvKDEpfVxuXHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luVG9wOiAnM2VtJywgaGVpZ2h0OiBcIjYwcHhcIiwgd2lkdGg6IFwiNjBweFwifX0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPiA8L2Rpdj5cblx0XHRcdFx0PC9QYXJhbGxheExheWVyPlxuXG5cdFx0XHRcdHsvKiBQQUdFIDEgKi99XG5cblx0XHRcdFx0PFBhcmFsbGF4TGF5ZXJcblx0XHRcdFx0XHRvZmZzZXQ9ezEuMjV9XG5cdFx0XHRcdFx0c3BlZWQ9ezAuNX1cblx0XHRcdFx0XHRzdHlsZT17e21hcmdpblRvcDogJzdlbSd9fT5cbiAgXHRcdFx0XHQgIDxpbWcgaGVpZ2h0PVwiMzI1cHhcIiBzcmM9eycuLi9zdGF0aWMvcGxhbnRpbWdfMS5qcGVnJ30vPlxuXHRcdFx0XHQ8L1BhcmFsbGF4TGF5ZXI+XG5cdFx0XHRcdDxQYXJhbGxheExheWVyXG5cdFx0XHRcdCAgICBvZmZzZXQgPSB7MS4xfVxuXHRcdFx0XHRcdHNwZWVkPXsxfVxuXHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luVG9wOiAnMTFlbSd9fT5cblx0XHRcdFx0XHQ8aW1nIGhlaWdodCA9IFwiMTUwcHhcIiBzcmM9XCIuLi9zdGF0aWMvcGxhbnRpbWdfMi5qcGVnXCIgLz5cblx0XHRcdFx0PC9QYXJhbGxheExheWVyPlxuXHRcdFx0XHQ8UGFyYWxsYXhMYXllclxuXHRcdFx0XHQgICAgb2Zmc2V0ID0gezEuMX1cblx0XHRcdFx0XHRzcGVlZD17MX1cblx0XHRcdFx0XHRzdHlsZT17e21hcmdpblRvcDogJzIyZW0nfX0+XG5cdFx0XHRcdFx0PGltZyBoZWlnaHQgPSBcIjE1MHB4XCIgc3JjPVwiLi4vc3RhdGljL3BsYW50aW1nXzMuanBlZ1wiIC8+XG5cdFx0XHRcdDwvUGFyYWxsYXhMYXllcj5cblx0XHRcdFx0XG5cdFx0XHRcdDxQYXJhbGxheExheWVyXG5cdFx0XHRcdFx0b2Zmc2V0PXsxLjd9XG5cdFx0XHRcdFx0c3R5bGU9e3ttYXJnaW5Ub3A6ICc3ZW0nfX1cblx0XHRcdFx0XHRzcGVlZD17MX0+XG5cdFx0XHRcdFx0PFNlcSAvPlxuXHRcdFx0XHQ8L1BhcmFsbGF4TGF5ZXI+XG5cblx0XHRcdFx0XG5cdFx0XHRcdDxQYXJhbGxheExheWVyXG4gICAgICAgIFx0XHRcdG9mZnNldCA9IHsxLjAzfVxuXHRcdFx0XHRcdHNwZWVkPXsuNzV9XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gdGhpcy5wYXJhbGxheC5zY3JvbGxUbygwKX1cblx0XHRcdFx0XHRzdHlsZT17e21hcmdpblRvcDogJzNlbScsIGhlaWdodDogXCI2MHB4XCIsIHdpZHRoOiBcIjYwcHhcIn19PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXJyb3ctbGVmdFwiPiA8L2Rpdj5cblx0XHRcdFx0PC9QYXJhbGxheExheWVyPlxuXHRcdFx0XHQ8UGFyYWxsYXhMYXllclxuICAgICAgICBcdFx0XHRvZmZzZXQgPSB7MS45Mn1cblx0XHRcdFx0XHRzcGVlZD17Ljc1fVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRoaXMucGFyYWxsYXguc2Nyb2xsVG8oMil9XG5cdFx0XHRcdFx0c3R5bGU9e3ttYXJnaW5Ub3A6ICczZW0nLCBoZWlnaHQ6IFwiNjBweFwiLCB3aWR0aDogXCI2MHB4XCJ9fT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+IDwvZGl2PlxuXHRcdFx0XHQ8L1BhcmFsbGF4TGF5ZXI+XG5cblx0XHRcdFx0ey8qIFBBR0UgMiAqL31cblxuXHRcdFx0XHQ8UGFyYWxsYXhMYXllclxuXHRcdFx0XHRcdG9mZnNldD17Mi41M31cblx0XHRcdFx0XHRzcGVlZD17MC41fVxuXHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luVG9wOiAnN2VtJ319XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gdGhpcy5wYXJhbGxheC5zY3JvbGxUbygwKX0+XG5cdFx0XHRcdFx0PGRpdj5cbiAgXHRcdFx0XHQgIDxpbWcgaGVpZ2h0PVwiMzI1cHhcIiBzcmM9eycuLi9zdGF0aWMvdmFzZWltZ18xLmpwZyd9Lz5cbiAgICAgICAgICBcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9QYXJhbGxheExheWVyPlxuXHRcdFx0XHQ8UGFyYWxsYXhMYXllclxuXHRcdFx0XHQgICAgb2Zmc2V0ID0gezIuMn1cblx0XHRcdFx0XHRzcGVlZD17MX1cblx0XHRcdFx0XHRzdHlsZT17e21hcmdpblRvcDogJzdlbSd9fVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRoaXMucGFyYWxsYXguc2Nyb2xsVG8oMCl9PlxuXHRcdFx0XHRcdDxpbWcgaGVpZ2h0ID0gXCIxNTBweFwiIHNyYz1cIi4uL3N0YXRpYy92YXNlaW1nXzIuanBlZ1wiIC8+XG5cdFx0XHRcdDwvUGFyYWxsYXhMYXllcj5cblx0XHRcdFx0PFBhcmFsbGF4TGF5ZXJcblx0XHRcdFx0ICAgIG9mZnNldCA9IHsyLjJ9XG5cdFx0XHRcdFx0c3BlZWQ9ezF9XG5cdFx0XHRcdFx0c3R5bGU9e3ttYXJnaW5Ub3A6ICcxOGVtJ319PlxuXHRcdFx0XHRcdDxpbWcgaGVpZ2h0ID0gXCIxNTBweFwiIHNyYz1cIi4uL3N0YXRpYy92YXNlaW1nXzMuanBlZ1wiIC8+XG5cdFx0XHRcdDwvUGFyYWxsYXhMYXllcj5cblx0XHRcdFx0XG5cdFx0XHRcdDxQYXJhbGxheExheWVyXG5cdFx0XHRcdFx0b2Zmc2V0PXsyLjQyfVxuXHRcdFx0XHRcdHNwZWVkPXsxfVxuXHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luVG9wOiAnNmVtJ319PlxuXHRcdFx0XHRcdCAgPFZhc2UgLz5cblx0XHRcdFx0PC9QYXJhbGxheExheWVyPlxuXHRcdFx0XHQgXG5cdFx0XHRcdDxQYXJhbGxheExheWVyXG4gICAgICAgIFx0XHRcdG9mZnNldCA9IHsyLjAzfVxuXHRcdFx0XHRcdHNwZWVkPXsuNzV9XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gdGhpcy5wYXJhbGxheC5zY3JvbGxUbygxKX1cblx0XHRcdFx0XHRzdHlsZT17e21hcmdpblRvcDogJzNlbScsIGhlaWdodDogXCI2MHB4XCIsIHdpZHRoOiBcIjYwcHhcIn19PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXJyb3ctbGVmdFwiPiA8L2Rpdj5cblx0XHRcdFx0PC9QYXJhbGxheExheWVyPlxuXHRcdFx0XHQ8UGFyYWxsYXhMYXllclxuICAgICAgICBcdFx0XHRvZmZzZXQgPSB7Mi45Mn1cblx0XHRcdFx0XHRzcGVlZD17Ljc1fVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRoaXMucGFyYWxsYXguc2Nyb2xsVG8oMyl9XG5cdFx0XHRcdFx0c3R5bGU9e3ttYXJnaW5Ub3A6ICczZW0nLCBoZWlnaHQ6IFwiNjBweFwiLCB3aWR0aDogXCI2MHB4XCJ9fT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+IDwvZGl2PlxuXHRcdFx0XHQ8L1BhcmFsbGF4TGF5ZXI+XG5cblx0XHRcdFx0ey8qIFBBR0UgMyAqL31cblxuXHRcdFx0XHQ8UGFyYWxsYXhMYXllclxuXHRcdFx0XHQgICAgb2Zmc2V0ID0gezMuMX1cblx0XHRcdFx0XHRzcGVlZD17MX1cblx0XHRcdFx0XHRzdHlsZT17e21hcmdpblRvcDogJzdlbSd9fT5cblx0XHRcdFx0XHQ8aW1nIGhlaWdodCA9IFwiMzI1cHhcIiBzcmM9XCIuLi9zdGF0aWMvZ3JhdGltZ18xLmpwZWdcIiAvPlxuXHRcdFx0XHQ8L1BhcmFsbGF4TGF5ZXI+XG5cdFx0XHRcdDxQYXJhbGxheExheWVyXG5cdFx0XHRcdCAgICBvZmZzZXQgPSB7My41fVxuXHRcdFx0XHRcdHNwZWVkPXsxfVxuXHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luVG9wOiAnN2VtJ319PlxuXHRcdFx0XHRcdDxpbWcgaGVpZ2h0ID0gXCIzMjVweFwiIHNyYz1cIi4uL3N0YXRpYy9ncmF0aW1nXzIuanBnXCIgLz5cblx0XHRcdFx0PC9QYXJhbGxheExheWVyPlxuICAgICAgICBcdFx0PFBhcmFsbGF4TGF5ZXJcbiAgICAgICAgXHRcdFx0b2Zmc2V0ID0gezMuMX1cblx0XHRcdFx0XHRzcGVlZD17Ljc1fVxuXHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luVG9wOiAnM2VtJywgaGVpZ2h0OiBcIjEwMHB4XCIsIHdpZHRoOiBcIjUwMHB4XCJ9fT5cblx0XHRcdFx0XHQ8R3JhdGVyIC8+XG5cdFx0XHRcdDwvUGFyYWxsYXhMYXllcj5cblxuXHRcdFx0XHQ8UGFyYWxsYXhMYXllclxuICAgICAgICBcdFx0XHRvZmZzZXQgPSB7My4wM31cblx0XHRcdFx0XHRzcGVlZD17Ljc1fVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRoaXMucGFyYWxsYXguc2Nyb2xsVG8oMil9XG5cdFx0XHRcdFx0c3R5bGU9e3ttYXJnaW5Ub3A6ICczZW0nLCBoZWlnaHQ6IFwiNjBweFwiLCB3aWR0aDogXCI2MHB4XCJ9fT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFycm93LWxlZnRcIj4gPC9kaXY+XG5cdFx0XHRcdDwvUGFyYWxsYXhMYXllcj5cblx0XHRcdFx0PFBhcmFsbGF4TGF5ZXJcbiAgICAgICAgXHRcdFx0b2Zmc2V0ID0gezMuOTJ9XG5cdFx0XHRcdFx0c3BlZWQ9ey43NX1cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0aGlzLnBhcmFsbGF4LnNjcm9sbFRvKDApfVxuXHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luVG9wOiAnM2VtJywgaGVpZ2h0OiBcIjYwcHhcIiwgd2lkdGg6IFwiNjBweFwifX0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPiA8L2Rpdj5cblx0XHRcdFx0PC9QYXJhbGxheExheWVyPlxuXHRcdFx0PC9QYXJhbGxheD5cblx0XHRcdDxzdHlsZSBqc3g+e2BcblxuXHRcdFx0XHRAZm9udC1mYWNlIHtcblx0XHRcdFx0ICAgIGZvbnQtZmFtaWx5OiAnTWlzdG8nO1xuXHRcdFx0XHQgICAgc3JjOiB1cmwoJy4uL3N0YXRpYy9mb250cy9NaXN0by53b2ZmJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0QGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1ETStTZXJpZitUZXh0fFNvdXJjZStDb2RlK1BybycpO1xuXG5cdFx0XHRcdC53cmFwcGVyIHtcblx0XHRcdFx0XHRwYWRkaW5nLXRvcDogM2VtO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQud2VsY29tZSB7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdNaXN0byc7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyMDAlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmhlYWRwaG9uZXMge1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnU291cmNlIENvZGUgUHJvJztcblx0XHRcdFx0XHRjb2xvcjogZ3JheTtcblx0XHRcdFx0XHRmb250LXNpemU6IDExNSVcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5hcnJvdy1sZWZ0IHtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMmVtO1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuXHRcdFx0XHRcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDA7XG5cdFx0XHRcdFx0d2lkdGg6IDM1cHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAzNXB4O1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5hcnJvdy1sZWZ0OmhvdmVyIHtcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcblx0XHRcdFx0XHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDAwO1xuXHRcdFx0XHR9XG5cblxuXHRcdFx0XHQuYXJyb3ctcmlnaHQge1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDEyZW07XG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG5cdFx0XHRcdFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDtcblx0XHRcdFx0XHR3aWR0aDogMzVweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDM1cHg7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmFycm93LXJpZ2h0OmhvdmVyIHtcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcblx0XHRcdFx0XHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aDIge1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnTWlzdG8nO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTUwJTtcblx0XHRcdFx0XHRjb2xvcjogIzU4NTg1ODtcblx0XHRcdFx0XHRwYWRkaW5nLXRvcDogOWVtO1xuXHRcdFx0XHRcdHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRgfSA8L3N0eWxlPiBcblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQpXG59XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */\n/*@ sourceURL=/Users/jmklefeker/s20/whisp/comps/parallax.js */"));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./comps/seq.js":
/*!**********************!*\
  !*** ./comps/seq.js ***!
  \**********************/
/*! exports provided: Seq, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seq", function() { return Seq; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jmklefeker/s20/whisp/comps/seq.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Seq extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.seqRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.state = {
      x: 100,
      y: 100
    };
  }

  componentDidMount() {
    const p5 = __webpack_require__(/*! p5 */ "p5");

    __webpack_require__(/*! p5/lib/addons/p5.sound */ "p5/lib/addons/p5.sound");

    this.seqSketch = new p5(p => {
      let cnv, sound;
      let canWidth = 200;
      let canHeight = 400;
      let x = canWidth / 2;
      let y = canHeight - 100;
      let center = canWidth / 2;

      p.setup = () => {
        sound = p.loadSound('../static/plantsound3.mp3');
        cnv = p.createCanvas(canWidth, canHeight).parent(this.seqRef.current);
        cnv.mouseOver(playSound);
        cnv.mouseMoved(mouseMoved);
        cnv.mouseOut(mouseOut);
        p.masterVolume(0.01);
      };

      function playSound() {
        sound.play();
      }

      function mouseMoved() {
        x = p.mouseX;
        y = p.mouseY;
      }

      function mouseOut() {
        x = canWidth / 2;
        y = canHeight - 100;
      }

      p.draw = () => {
        p.background(255);
        p.stroke(91, 186, 93);
        p.noFill();
        p.bezier(center, 60, center + 10, 90, center + 10, 90, x, y);
        p.bezier(center, 90, center + 10, 100, center + 20, 110, x, y);
      };
    });
  }

  render() {
    return __jsx("div", {
      className: "p5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("div", {
      ref: this.seqRef,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Seq);

/***/ }),

/***/ "./comps/vase.js":
/*!***********************!*\
  !*** ./comps/vase.js ***!
  \***********************/
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
var _jsxFileName = "/Users/jmklefeker/s20/whisp/comps/vase.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Grater extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "playSound", () => {
      console.log('alksdj');
      var thissound = document.getElementById('vaseSound');
      thissound.volume = 0.07;
      thissound.play();
    });

    _defineProperty(this, "stopSound", () => {
      var thissound = document.getElementById('vaseSound');
      thissound.pause();
      thissound.currentTime = 0;
    });

    this.state = {};
  }

  render() {
    return __jsx("div", {
      className: "jsx-2346535599" + " " + "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2346535599" + " " + "grid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("div", {
      onMouseEnter: this.playSound,
      onMouseLeave: this.stopSound,
      className: "jsx-2346535599" + " " + "g",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("img", {
      height: "325px",
      src: "../static/vase.png",
      className: "jsx-2346535599",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }))), __jsx("audio", {
      id: "vaseSound",
      src: "../static/vase3.mp3",
      className: "jsx-2346535599",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2346535599",
      __self: this
    }, "#title.jsx-2346535599{font-family:'Misto';font-size:300%;}.grid.jsx-2346535599{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.g.jsx-2346535599{width:100px;height:375px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.g.jsx-2346535599:hover{-webkit-transform:scale(1.08);-ms-transform:scale(1.08);transform:scale(1.08);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbWtsZWZla2VyL3MyMC93aGlzcC9jb21wcy92YXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DZSxBQUkwQixBQUtQLEFBS0QsQUFPVSxZQU5ULFFBVkUsS0FXRixVQVZkLHVDQUlnQixJQVloQixxQkFMd0IsZ0NBTnhCLG1FQU9BIiwiZmlsZSI6Ii9Vc2Vycy9qbWtsZWZla2VyL3MyMC93aGlzcC9jb21wcy92YXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXG5cbmV4cG9ydCBjbGFzcyBHcmF0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcbiAgXHR0aGlzLnN0YXRlID0ge31cbiAgfVxuICBcdHBsYXlTb3VuZCA9ICgpID0+IHtcbiAgXHRjb25zb2xlLmxvZygnYWxrc2RqJylcbiAgICB2YXIgdGhpc3NvdW5kPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YXNlU291bmQnKTtcbiAgICB0aGlzc291bmQudm9sdW1lID0gMC4wNztcbiAgICB0aGlzc291bmQucGxheSgpO1xuXHR9XG5cblx0c3RvcFNvdW5kID0gKCkgPT4ge1xuICAgIHZhciB0aGlzc291bmQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zhc2VTb3VuZCcpO1xuICAgIHRoaXNzb3VuZC5wYXVzZSgpO1xuICAgIHRoaXNzb3VuZC5jdXJyZW50VGltZSA9IDA7XG5cdH1cblxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZmxleFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImdyaWRcIiA+XG5cdFx0XHRcdDxkaXYgb25Nb3VzZUVudGVyPXt0aGlzLnBsYXlTb3VuZH0gb25Nb3VzZUxlYXZlPXt0aGlzLnN0b3BTb3VuZH0gY2xhc3NOYW1lID0gXCJnXCI+XG5cdFx0XHRcdFx0PGltZyBoZWlnaHQgPSBcIjMyNXB4XCIgc3JjPVwiLi4vc3RhdGljL3Zhc2UucG5nXCIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGF1ZGlvIGlkPSd2YXNlU291bmQnIHNyYz0nLi4vc3RhdGljL3Zhc2UzLm1wMycvPlxuXG5cdFx0XHQ8c3R5bGUganN4PntgXG5cblx0XHRcdFx0I3RpdGxlIHtcblx0XHRcdFx0XHRmb250LWZhbWlseTogJ01pc3RvJztcblx0XHRcdFx0XHRmb250LXNpemU6IDMwMCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5ncmlkIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5nIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwcHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAzNzVweDtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Lmc6aG92ZXIge1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRgfSA8L3N0eWxlPiBcblx0XHQ8L2Rpdj5cblxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmF0ZXI7XG4iXX0= */\n/*@ sourceURL=/Users/jmklefeker/s20/whisp/comps/vase.js */"));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Grater);

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
}, __jsx(_comps_nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), __jsx(_comps_parallax__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
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

/***/ "p5":
/*!*********************!*\
  !*** external "p5" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("p5");

/***/ }),

/***/ "p5/lib/addons/p5.sound":
/*!*****************************************!*\
  !*** external "p5/lib/addons/p5.sound" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("p5/lib/addons/p5.sound");

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