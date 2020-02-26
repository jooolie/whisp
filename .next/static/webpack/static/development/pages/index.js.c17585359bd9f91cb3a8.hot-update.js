webpackHotUpdate("static/development/pages/index.js",{

/***/ "./comps/parallax.js":
/*!***************************!*\
  !*** ./comps/parallax.js ***!
  \***************************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/jmklefeker/s20/whisp/comps/parallax.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

var _require = __webpack_require__(/*! react-spring/addons.cjs */ "./node_modules/react-spring/addons.cjs.js"),
    Parallax = _require.Parallax,
    ParallaxLayer = _require.ParallaxLayer;

 //const sketch = require('./sketches.js')

var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _React$Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
    _this.rugRef = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
    _this.seqRef = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
    _this.state = {
      x: 100,
      y: 100
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var p5 = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.js");

      __webpack_require__(/*! p5/lib/addons/p5.sound */ "./node_modules/p5/lib/addons/p5.sound.js");

      this.rugSketch = new p5(function (p) {
        var locs = [];
        var res = 20;

        p.setup = function () {
          p.createCanvas(400, 400).parent(_this2.rugRef.current);
          var countX = p.ceil(p.width / res) + 1;
          var countY = p.ceil(p.height / res) + 1;

          for (var j = 0; j < countY; j++) {
            for (var i = 0; i < countX; i++) {
              locs.push(new p5.Vector(res * i, res * j));
            }
          }

          ;
        };

        p.windowResized = function () {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
        };

        p.draw = function () {
          p.background(255);

          for (var i = locs.length - 1; i >= 0; i--) {
            var h = calcVec(locs[i].x - p.mouseX, locs[i].y - p.mouseY);
            p.bezier(locs[i].x, locs[i].y, locs[i].x + 15 * p.cos(h.heading()), locs[i].y + 15 * p.sin(h.heading()), locs[i].x + 15 * p.cos(h.heading()) + 30, locs[i].y + 15 * p.sin(h.heading()) + 30, locs[i].x, locs[i].y);
          }

          ;
        };

        function calcVec(x, y) {
          return new p5.Vector(y - x, -x - y);
        }
      });
      this.seqSketch = new p5(function (p) {
        var osc,
            envelope,
            mySound,
            mouseMoved = "";
        var res = 30;
        var seqs = [];

        p.setup = function () {
          p.createCanvas(400, 600).parent(_this2.seqRef.current);
          var countX = p.ceil(p.width / res) + 1;
          var countY = p.ceil(p.height / res) + 1; //osc = new p5.SinOsc();
          //envelope = new p5.Env();
          //envelope.setADSR(0.001, 0.5, 0.1, 0.5);
          //envelope.setRange(1, 0);
          //osc.start();

          for (var j = 0; j < countY; j++) {
            for (var i = 0; i < countX; i++) {
              seqs.push({
                x: res * i,
                y: res * j,
                r: res,
                visited: false
              });
            }
          }
        };

        p.windowResized = function () {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
        /*
        p.mouseMoved = () => {
        p.userStartAudio()
        mouseMoved = (p.mouseX / p.width - 0.5) * 4
        if(mouseMoved < 1 && mouseMoved > 0.5) {
            let freqValue = p.midiToFreq(60);
            osc.freq(freqValue);
            envelope.play(osc, 0, 0.1);
        } 
        if(mouseMoved > 0 && mouseMoved < 0.5) {
            let freqValue = p.midiToFreq(62);
            osc.freq(freqValue);
            envelope.play(osc, 0, 0.1);
        }
        if(mouseMoved < 0 && mouseMoved < -(0.5)) {
            let freqValue = p.midiToFreq(64);
            osc.freq(freqValue);
            envelope.play(osc, 0, 0.1);
        }
        if(mouseMoved > -(1.0) && mouseMoved < -(0.5)) {
            let freqValue = p.midiToFreq(67);
            osc.freq(freqValue);
            envelope.play(osc, 0, 0.1);
        }
        }*/


        p.draw = function () {
          for (var i = seqs.length - 1; i >= 0; i--) {
            var x_bound = seqs[i].x + res;
            var y_bound = seqs[i].y + res;

            if (p.mouseX > seqs[i].x - res && p.mouseX < x_bound && p.mouseY > seqs[i].y - res && p.mouseY < y_bound && seqs[i].visited == false) {
              p.fill("blue");
              p.circle(seqs[i].x, seqs[i].y, res * 1.5);
              seqs[i].visited = true;
            } else if (seqs[i].visited == true) {
              p.fill("blue");
              p.circle(seqs[i].x, seqs[i].y, res * 1.5);
            } else {
              p.fill("pink");
              p.circle(seqs[i].x, seqs[i].y, res * 1.5);
            }
          }
        };

        function calcVec(x, y) {
          return new p5.Vector(y - x, -x - y);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx(Parallax, {
        pages: 4,
        scrolling: true,
        horizontal: true,
        ref: function ref(_ref) {
          return _this3.parallax = _ref;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, __jsx(ParallaxLayer, {
        offset: 0,
        speed: 0.5,
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        onClick: function onClick() {
          return _this3.parallax.scrollTo(1);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx("div", {
        className: "p5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx("div", {
        ref: this.rugRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }))), __jsx(ParallaxLayer, {
        offset: 0.23,
        speed: .75,
        onClick: function onClick() {
          return _this3.parallax.scrollTo(1);
        },
        style: {
          marginTop: '3em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), __jsx(ParallaxLayer, {
        offset: .58,
        speed: 1,
        style: {
          marginTop: '23em'
        },
        onClick: function onClick() {
          return _this3.parallax.scrollTo(1);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), __jsx(ParallaxLayer, {
        offset: 1,
        speed: 0.5,
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        onClick: function onClick() {
          return _this3.parallax.scrollTo(2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, __jsx("div", {
        className: "p5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, __jsx("div", {
        ref: this.seqRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }))), __jsx(ParallaxLayer, {
        offset: 1.58,
        speed: .75,
        onClick: function onClick() {
          return _this3.parallax.scrollTo(2);
        },
        style: {
          marginTop: '3em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }), __jsx(ParallaxLayer, {
        offset: 1.23,
        speed: 1,
        style: {
          marginTop: '23em'
        },
        onClick: function onClick() {
          return _this3.parallax.scrollTo(2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }), __jsx(ParallaxLayer, {
        offset: 2,
        speed: 0.5,
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        onClick: function onClick() {
          return _this3.parallax.scrollTo(0);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, __jsx("img", {
        width: "400em",
        src: '../static/placeholder.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      })), __jsx(ParallaxLayer, {
        offset: 2.23,
        speed: .75,
        style: {
          zIndex: '1',
          marginTop: '3em'
        },
        onClick: function onClick() {
          return _this3.parallax.scrollTo(0);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, __jsx("img", {
        width: "200",
        src: '../static/blob-shape (3).svg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      })), __jsx(ParallaxLayer, {
        offset: 2.58,
        speed: 1,
        style: {
          zIndex: '2',
          marginTop: '23em'
        },
        onClick: function onClick() {
          return _this3.parallax.scrollTo(0);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
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
          lineNumber: 214
        },
        __self: this
      }, __jsx("span", {
        onClick: function onClick() {
          return _this3.parallax.scrollTo(0);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, __jsx("img", {
        width: "400em",
        src: '../static/placeholder.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.c17585359bd9f91cb3a8.hot-update.js.map