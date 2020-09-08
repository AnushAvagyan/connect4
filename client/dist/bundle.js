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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/App.jsx":
/*!***************************************!*\
  !*** ./client/src/components/App.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rows_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rows.jsx */ \"./client/src/components/rows.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      board: [],\n      currentPlayer: 'red',\n      winner: undefined,\n      status: ''\n    };\n    _this.onColClick = _this.onColClick.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"createBoard\",\n    value: function createBoard() {\n      for (var i = 0; i < 6; i++) {\n        var row = [];\n\n        for (var c = 0; c < 7; c++) {\n          row.push(null);\n        }\n\n        this.state.board.push(row);\n      }\n    }\n  }, {\n    key: \"onColClick\",\n    value: function onColClick(col) {\n      if (!this.state.winner && this.checkSpace(col)) {\n        for (var row = 5; row >= 0; row--) {\n          if (this.state.board[row][col] === null) {\n            this.state.board[row][col] = this.state.currentPlayer;\n            break;\n          }\n        }\n\n        this.setState({\n          currentPlayer: this.state.currentPlayer === 'red' ? 'yellow' : 'red'\n        });\n        this.checkForWin(this.state.board);\n      }\n    }\n  }, {\n    key: \"declareWin\",\n    value: function declareWin() {\n      if (this.state.winner === 'red') {\n        this.setState({\n          status: 'Congratulations!! Red player wins!'\n        });\n      } else if (this.state.winner === 'yellow') {\n        this.setState({\n          status: 'Congratulations!! Yellow player wins!'\n        });\n      } else if (this.state.winner === 'tie') {\n        this.setState({\n          status: 'Oh-oh no winner. It is a tie. Refresh the page to play again'\n        });\n      }\n\n      if (this.state.winner) {\n        $.ajax({\n          url: 'http://localhost:3000/gameOver',\n          type: 'POST',\n          data: this.state.winner,\n          success: function success(data) {\n            $('h1').append(data);\n            console.log(data);\n          },\n          error: function error(data) {\n            console.error('Failed', data);\n          }\n        });\n      }\n    }\n  }, {\n    key: \"checkRows\",\n    value: function checkRows(board) {\n      for (var row = 3; row < 6; row++) {\n        for (var col = 0; col < 7; col++) {\n          if (board[row][col]) {\n            if (board[row][col] === board[row - 1][col] && board[row][col] === board[row - 2][col] && board[row][col] === board[row - 3][col]) {\n              this.state.winner = board[row][col];\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"checkColumns\",\n    value: function checkColumns(board) {\n      for (var row = 0; row < 6; row++) {\n        for (var col = 0; col < 4; col++) {\n          if (board[row][col]) {\n            if (board[row][col] === board[row][col + 1] && board[row][col] === board[row][col + 2] && board[row][col] === board[row][col + 3]) {\n              this.state.winner = board[row][col];\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"checkDiagonalRight\",\n    value: function checkDiagonalRight(board) {\n      for (var row = 3; row < 6; row++) {\n        for (var col = 0; col < 4; col++) {\n          if (board[row][col]) {\n            if (board[row][col] === board[row - 1][col + 1] && board[row][col] === board[row - 2][col + 2] && board[row][col] === board[row - 3][col + 3]) {\n              this.state.winner = board[row][col];\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"checkDiagonalLeft\",\n    value: function checkDiagonalLeft(board) {\n      for (var row = 3; row < 6; row++) {\n        for (var col = 3; col < 7; col++) {\n          if (board[row][col]) {\n            if (board[row][col] === board[row - 1][col - 1] && board[row][col] === board[row - 2][col - 2] && board[row][col] === board[row - 3][col - 3]) {\n              this.state.winner = board[row][col];\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"checkSpace\",\n    value: function checkSpace(col) {\n      for (var row = 0; row < 6; row++) {\n        if (this.state.board[row][col] === null) {\n          return true;\n        }\n      }\n\n      return false;\n    }\n  }, {\n    key: \"checkTie\",\n    value: function checkTie(board) {\n      for (var row = 0; row < 6; row++) {\n        for (var col = 0; col < 7; col++) {\n          if (board[row][col] === null) {\n            return null;\n          }\n        }\n      }\n\n      this.state.winner = 'tie';\n    }\n  }, {\n    key: \"checkForWin\",\n    value: function checkForWin(board) {\n      this.checkRows(board);\n      this.checkColumns(board);\n      this.checkDiagonalRight(board);\n      this.checkDiagonalLeft(board);\n      this.checkTie(board);\n      this.declareWin();\n    }\n  }, {\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      this.createBoard();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(\"div\", null, React.createElement(\"div\", {\n        className: \"status\"\n      }, this.state.status), React.createElement(\"table\", null, React.createElement(\"tbody\", null, this.state.board.map(function (row, i) {\n        return React.createElement(_rows_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n          key: i,\n          row: row,\n          onColClick: _this2.onColClick\n        });\n      }))));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4P2U1N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdyBmcm9tICcuL3Jvd3MuanN4JztcclxuXHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBib2FyZDogW10sXHJcbiAgICAgIGN1cnJlbnRQbGF5ZXI6ICdyZWQnLFxyXG4gICAgICB3aW5uZXI6IHVuZGVmaW5lZCxcclxuICAgICAgc3RhdHVzOiAnJ1xyXG4gICAgfTtcclxuICAgIHRoaXMub25Db2xDbGljayA9IHRoaXMub25Db2xDbGljay5iaW5kKHRoaXMpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNyZWF0ZUJvYXJkKCkge1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgICB2YXIgcm93ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCA3OyBjKyspIHtcclxuICAgICAgICAgIHJvdy5wdXNoKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlLmJvYXJkLnB1c2gocm93KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkNvbENsaWNrKGNvbCkge1xyXG4gICAgICBpZiAoIXRoaXMuc3RhdGUud2lubmVyICYmIHRoaXMuY2hlY2tTcGFjZShjb2wpKSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDU7IHJvdyA+PSAwOyByb3ctLSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYm9hcmRbcm93XVtjb2xdID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYm9hcmRbcm93XVtjb2xdID0gdGhpcy5zdGF0ZS5jdXJyZW50UGxheWVyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50UGxheWVyOiAodGhpcy5zdGF0ZS5jdXJyZW50UGxheWVyID09PSAncmVkJykgPyAneWVsbG93JyA6ICdyZWQnIH0pO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0Zvcldpbih0aGlzLnN0YXRlLmJvYXJkKTtcclxuXHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkZWNsYXJlV2luKCkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS53aW5uZXIgPT09ICdyZWQnKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogJ0NvbmdyYXR1bGF0aW9ucyEhIFJlZCBwbGF5ZXIgd2lucyEnIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUud2lubmVyID09PSAneWVsbG93Jykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6ICdDb25ncmF0dWxhdGlvbnMhISBZZWxsb3cgcGxheWVyIHdpbnMhJyB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLndpbm5lciA9PT0gJ3RpZScpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiAnT2gtb2ggbm8gd2lubmVyLiBJdCBpcyBhIHRpZS4gUmVmcmVzaCB0aGUgcGFnZSB0byBwbGF5IGFnYWluJyB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5zdGF0ZS53aW5uZXIpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhbWVPdmVyJyxcclxuICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgIGRhdGE6IHRoaXMuc3RhdGUud2lubmVyLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgJCgnaDEnKS5hcHBlbmQoZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQnLCBkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tSb3dzKGJvYXJkKSB7XHJcblxyXG4gICAgICBmb3IgKHZhciByb3cgPSAzOyByb3cgPCA2OyByb3crKykge1xyXG5cclxuICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCA3OyBjb2wrKykge1xyXG4gICAgICAgICAgaWYgKGJvYXJkW3Jvd11bY29sXSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGJvYXJkW3Jvd11bY29sXSA9PT0gYm9hcmRbcm93IC0gMV1bY29sXSAmJiBib2FyZFtyb3ddW2NvbF0gPT09IGJvYXJkW3JvdyAtIDJdW2NvbF0gJiYgYm9hcmRbcm93XVtjb2xdID09PSBib2FyZFtyb3cgLSAzXVtjb2xdKSB7XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUud2lubmVyID0gYm9hcmRbcm93XVtjb2xdO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ29sdW1ucyhib2FyZCkge1xyXG4gICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCA2OyByb3crKykge1xyXG4gICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IDQ7IGNvbCsrKSB7XHJcbiAgICAgICAgICBpZiAoYm9hcmRbcm93XVtjb2xdKSB7XHJcbiAgICAgICAgICAgIGlmIChib2FyZFtyb3ddW2NvbF0gPT09IGJvYXJkW3Jvd11bY29sICsgMV0gJiYgYm9hcmRbcm93XVtjb2xdID09PSBib2FyZFtyb3ddW2NvbCArIDJdICYmIGJvYXJkW3Jvd11bY29sXSA9PT0gYm9hcmRbcm93XVtjb2wgKyAzXSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUud2lubmVyID0gYm9hcmRbcm93XVtjb2xdO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRGlhZ29uYWxSaWdodChib2FyZCkge1xyXG5cclxuICAgICAgZm9yICh2YXIgcm93ID0gMzsgcm93IDwgNjsgcm93KyspIHtcclxuICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCA0OyBjb2wrKykge1xyXG4gICAgICAgICAgaWYgKGJvYXJkW3Jvd11bY29sXSkge1xyXG4gICAgICAgICAgICBpZiAoYm9hcmRbcm93XVtjb2xdID09PSBib2FyZFtyb3cgLSAxXVtjb2wgKyAxXSAmJiBib2FyZFtyb3ddW2NvbF0gPT09IGJvYXJkW3JvdyAtIDJdW2NvbCArIDJdICYmIGJvYXJkW3Jvd11bY29sXSA9PT0gYm9hcmRbcm93IC0gM11bY29sICsgM10pIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aW5uZXIgPSBib2FyZFtyb3ddW2NvbF07XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tEaWFnb25hbExlZnQoYm9hcmQpIHtcclxuXHJcbiAgICAgIGZvciAodmFyIHJvdyA9IDM7IHJvdyA8IDY7IHJvdysrKSB7XHJcbiAgICAgICAgZm9yICh2YXIgY29sID0gMzsgY29sIDwgNzsgY29sKyspIHtcclxuICAgICAgICAgIGlmIChib2FyZFtyb3ddW2NvbF0pIHtcclxuICAgICAgICAgICAgaWYgKGJvYXJkW3Jvd11bY29sXSA9PT0gYm9hcmRbcm93IC0gMV1bY29sIC0gMV0gJiYgYm9hcmRbcm93XVtjb2xdID09PSBib2FyZFtyb3cgLSAyXVtjb2wgLSAyXSAmJiBib2FyZFtyb3ddW2NvbF0gPT09IGJvYXJkW3JvdyAtIDNdW2NvbCAtIDNdKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aW5uZXIgPSBib2FyZFtyb3ddW2NvbF07XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrU3BhY2UoY29sKSB7XHJcbiAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IDY7IHJvdysrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYm9hcmRbcm93XVtjb2xdID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tUaWUoYm9hcmQpIHtcclxuICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgNjsgcm93KyspIHtcclxuICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCA3OyBjb2wrKykge1xyXG4gICAgICAgICAgaWYgKGJvYXJkW3Jvd11bY29sXSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdGF0ZS53aW5uZXIgPSAndGllJztcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0Zvcldpbihib2FyZCkge1xyXG4gICAgICB0aGlzLmNoZWNrUm93cyhib2FyZCk7XHJcbiAgICAgIHRoaXMuY2hlY2tDb2x1bW5zKGJvYXJkKTtcclxuICAgICAgdGhpcy5jaGVja0RpYWdvbmFsUmlnaHQoYm9hcmQpO1xyXG4gICAgICB0aGlzLmNoZWNrRGlhZ29uYWxMZWZ0KGJvYXJkKTtcclxuICAgICAgdGhpcy5jaGVja1RpZShib2FyZCk7XHJcbiAgICAgIHRoaXMuZGVjbGFyZVdpbigpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlQm9hcmQoKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXR1c1wiPnt0aGlzLnN0YXRlLnN0YXR1c308L2Rpdj5cclxuICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJvYXJkLm1hcCgocm93LCBpKSA9PiAoPFJvdyBrZXk9e2l9IHJvdz17cm93fSBvbkNvbENsaWNrPXt0aGlzLm9uQ29sQ2xpY2t9IC8+KSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBUkE7QUFXQTtBQUNBOzs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBY0E7QUFFQTs7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBOzs7O0FBaExBO0FBQ0E7QUFxTEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/App.jsx\n");

/***/ }),

/***/ "./client/src/components/rows.jsx":
/*!****************************************!*\
  !*** ./client/src/components/rows.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Rows = function Rows(_ref) {\n  var row = _ref.row,\n      onColClick = _ref.onColClick;\n  return React.createElement(\"tr\", null, row.map(function (col, i) {\n    return React.createElement(Col, {\n      value: col,\n      index: i,\n      onColClick: onColClick\n    });\n  }));\n};\n\nvar Col = function Col(_ref2) {\n  var value = _ref2.value,\n      index = _ref2.index,\n      onColClick = _ref2.onColClick;\n  var color = 'empty';\n\n  if (value === 'red') {\n    color = 'red';\n  } else if (value === 'yellow') {\n    color = 'yellow';\n  }\n\n  return React.createElement(\"td\", null, React.createElement(\"div\", {\n    className: \"col\",\n    onClick: function onClick() {\n      onColClick(index);\n    }\n  }, React.createElement(\"div\", {\n    className: color,\n    id: index\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rows);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcm93cy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcm93cy5qc3g/NWNkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIFJvd3MgPSAoeyByb3csIG9uQ29sQ2xpY2sgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8dHI+XHJcbiAgICAgIHtyb3cubWFwKChjb2wsIGkpID0+IDxDb2wgdmFsdWU9e2NvbH0gaW5kZXg9e2l9IG9uQ29sQ2xpY2s9e29uQ29sQ2xpY2t9IC8+KX1cclxuICAgIDwvdHI+XHJcbiAgKTtcclxufTtcclxuXHJcblxyXG52YXIgQ29sID0gKHsgdmFsdWUsIGluZGV4LCBvbkNvbENsaWNrIH0pID0+IHtcclxuICB2YXIgY29sb3IgPSAnZW1wdHknO1xyXG4gIGlmICh2YWx1ZSA9PT0gJ3JlZCcpIHtcclxuICAgIGNvbG9yID0gJ3JlZCc7XHJcbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ3llbGxvdycpIHtcclxuICAgIGNvbG9yID0gJ3llbGxvdyc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHRkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIG9uQ2xpY2s9eygpID0+IHtvbkNvbENsaWNrKGluZGV4KX19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb2xvcn0gaWQ9e2luZGV4fT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3RkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3dzO1xyXG5cclxuIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/rows.jsx\n");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App.jsx */ \"./client/src/components/App.jsx\");\n\nReactDOM.render(React.createElement(_components_App_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwLmpzeCc7XHJcblxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });