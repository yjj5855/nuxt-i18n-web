require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = {
  build: {
    vendor: ['axios', 'vue-i18n'],
    externals: {
      jquery: 'window.$'
    }
  },
  router: {
    middleware: 'i18n'
  },
  plugins: [
  // Will inject the plugin in the $root app and also in the context as `i18n`
  { src: '~plugins/i18n.js', injectAs: 'i18n' }],
  loading: { color: '#1ab394' },
  head: {
    title: '班步官网',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    script: [{ src: 'js/jquery-2.1.1.js' }, { src: 'js/bootstrap.min.js' }],
    link: [{ rel: 'stylesheet', href: 'css/bootstrap.min.css' }, { rel: 'stylesheet', href: 'css/animate.min.css' }, { rel: 'stylesheet', href: 'font-awesome/css/font-awesome.min.css' }]
  },
  css: ['~static/css/style.less']
};

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_yangjiajun_nuxt_i18n_web_node_modules_6_23_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_yangjiajun_nuxt_i18n_web_node_modules_6_23_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_yangjiajun_nuxt_i18n_web_node_modules_6_23_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);


var start = function () {
  var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_yangjiajun_nuxt_i18n_web_node_modules_6_23_0_babel_runtime_regenerator___default.a.mark(function _callee() {
    var config, nuxt;
    return __WEBPACK_IMPORTED_MODULE_0__Users_yangjiajun_nuxt_i18n_web_node_modules_6_23_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Import and Set Nuxt.js options
            config = __webpack_require__(1);

            config.dev = !("development" === 'production');
            // Instanciate nuxt.js
            nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt___default.a(config);
            // Add nuxt.js middleware

            app.use(nuxt.render
            // Listen the server
            );app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port // eslint-disable-line no-console
            );
          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




// import api from './api'

var app = __WEBPACK_IMPORTED_MODULE_2_express___default()();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

app.set('port', port

// Import API Routes
// app.use('/api', api)

);app.get('/', function (req, res, next) {
  var userAgentInfo = req.headers['user-agent']; // 获取user-agent
  var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
  var mobile_pc = 'pc'; // pc端返回pc，移动端返回mobile
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      mobile_pc = 'mobile';
      break;
    }
  }
  if (mobile_pc === 'mobile') {
    res.redirect('/m');
  } else {
    next();
  }
}

// Start nuxt.js
);

start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map