webpackHotUpdate("main",{

/***/ "./react-client/src/Components/HeaderComponent/AppHeader.jsx":
/*!*******************************************************************!*\
  !*** ./react-client/src/Components/HeaderComponent/AppHeader.jsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _NavbarHeader = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-bootstrap/lib/NavbarHeader'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _NavbarHeader2 = _interopRequireDefault(_NavbarHeader);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AppHeader = function (_Component) {\n  _inherits(AppHeader, _Component);\n\n  function AppHeader() {\n    _classCallCheck(this, AppHeader);\n\n    return _possibleConstructorReturn(this, (AppHeader.__proto__ || Object.getPrototypeOf(AppHeader)).apply(this, arguments));\n  }\n\n  _createClass(AppHeader, [{\n    key: 'render',\n    value: function render() {\n      return (\n        // <header>\n        //   <ul id=\"headerButtons\">\n        //     <li className=\"navButton\"><Link to=\"\">Home</Link></li>\n        //     <li className=\"navButton\"><Link to=\"\">Fund</Link></li>\n        //     <li className=\"navButton\"><Link to=\"\">Make a fund</Link></li>\n        //   </ul>\n        // </header>\n        _react2.default.createElement(\n          'header',\n          null,\n          _react2.default.createElement(\n            Navbar,\n            null,\n            _react2.default.createElement(\n              Navbar.Header,\n              null,\n              _react2.default.createElement(\n                Navbar.Brand,\n                null,\n                _react2.default.createElement(\n                  'a',\n                  { href: '#home' },\n                  'React-Bootstrap'\n                )\n              )\n            ),\n            _react2.default.createElement(\n              Nav,\n              null,\n              _react2.default.createElement(\n                NavItem,\n                { eventKey: 1, href: '#' },\n                'Link'\n              ),\n              _react2.default.createElement(\n                NavItem,\n                { eventKey: 2, href: '#' },\n                'Link'\n              ),\n              _react2.default.createElement(\n                NavDropdown,\n                { eventKey: 3, title: 'Dropdown', id: 'basic-nav-dropdown' },\n                _react2.default.createElement(\n                  MenuItem,\n                  { eventKey: 3.1 },\n                  'Action'\n                ),\n                _react2.default.createElement(\n                  MenuItem,\n                  { eventKey: 3.2 },\n                  'Another action'\n                ),\n                _react2.default.createElement(\n                  MenuItem,\n                  { eventKey: 3.3 },\n                  'Something else here'\n                ),\n                _react2.default.createElement(MenuItem, { divider: true }),\n                _react2.default.createElement(\n                  MenuItem,\n                  { eventKey: 3.4 },\n                  'Separated link'\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return AppHeader;\n}(_react.Component);\n\nexports.default = _NavbarHeader2.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFjdC1jbGllbnQvc3JjL0NvbXBvbmVudHMvSGVhZGVyQ29tcG9uZW50L0FwcEhlYWRlci5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVhY3QtY2xpZW50L3NyYy9Db21wb25lbnRzL0hlYWRlckNvbXBvbmVudC9BcHBIZWFkZXIuanN4PzU3YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdkJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL05hdmJhckhlYWRlcic7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuY2xhc3MgQXBwSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAvLyA8aGVhZGVyPlxyXG4gICAgICAvLyAgIDx1bCBpZD1cImhlYWRlckJ1dHRvbnNcIj5cclxuICAgICAgLy8gICAgIDxsaSBjbGFzc05hbWU9XCJuYXZCdXR0b25cIj48TGluayB0bz1cIlwiPkhvbWU8L0xpbms+PC9saT5cclxuICAgICAgLy8gICAgIDxsaSBjbGFzc05hbWU9XCJuYXZCdXR0b25cIj48TGluayB0bz1cIlwiPkZ1bmQ8L0xpbms+PC9saT5cclxuICAgICAgLy8gICAgIDxsaSBjbGFzc05hbWU9XCJuYXZCdXR0b25cIj48TGluayB0bz1cIlwiPk1ha2UgYSBmdW5kPC9MaW5rPjwvbGk+XHJcbiAgICAgIC8vICAgPC91bD5cclxuICAgICAgLy8gPC9oZWFkZXI+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPE5hdmJhcj5cclxuICAgICAgICAgIDxOYXZiYXIuSGVhZGVyPlxyXG4gICAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjaG9tZVwiPlJlYWN0LUJvb3RzdHJhcDwvYT5cclxuICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICA8L05hdmJhci5IZWFkZXI+XHJcbiAgICAgICAgICA8TmF2PlxyXG4gICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17MX0gaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICBMaW5rXHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezJ9IGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgTGlua1xyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZEcm9wZG93biBldmVudEtleT17M30gdGl0bGU9XCJEcm9wZG93blwiIGlkPVwiYmFzaWMtbmF2LWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXszLjF9PkFjdGlvbjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXszLjJ9PkFub3RoZXIgYWN0aW9uPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezMuM30+U29tZXRoaW5nIGVsc2UgaGVyZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezMuNH0+U2VwYXJhdGVkIGxpbms8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVBBO0FBTkE7QUFEQTtBQVJBO0FBaUNBOzs7O0FBbkNBO0FBQ0E7QUFvQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./react-client/src/Components/HeaderComponent/AppHeader.jsx\n");

/***/ })

})