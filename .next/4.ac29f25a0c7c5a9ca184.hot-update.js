webpackHotUpdate(4,{

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(80);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(32);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(33);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(83);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(82);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(34);

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = __webpack_require__(576);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = __webpack_require__(567);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _AppBar = __webpack_require__(575);

var _AppBar2 = _interopRequireDefault(_AppBar);

__webpack_require__(656);

var _RaisedButton = __webpack_require__(655);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Drawer = __webpack_require__(660);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = __webpack_require__(661);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
    margin: 12
};

var muiTheme = (0, _getMuiTheme2.default)({ userAgent: false });

var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App(props) {
        (0, _classCallCheck3.default)(this, App);

        var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

        _this.handleToggle = function () {
            return _this.setState({
                open: !_this.state.open
            });
        };

        _this.handleClose = function () {
            return _this.setState({ open: false });
        };

        _this.state = {
            counter: 0,
            open: false
        };
        return _this;
    }

    (0, _createClass3.default)(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.interval = setInterval(this.increment.bind(this), 1000);
        }
    }, {
        key: 'increment',
        value: function increment() {
            this.setState(function (_ref) {
                var counter = _ref.counter;

                return {
                    counter: counter + 1
                };
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.interval);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var counter = this.state.counter;

            return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: muiTheme }, _react2.default.createElement('div', null, _react2.default.createElement('header', null, _react2.default.createElement(_AppBar2.default, { title: 'Title', iconClassNameRight: 'muidocs-icon-navigation-expand-more', onLeftIconButtonTouchTap: function onLeftIconButtonTouchTap(open) {
                    return _this2.setState({ open: open });
                } }), _react2.default.createElement('div', null, 'Webpack is doing its thing with React and ES2015'), _react2.default.createElement('div', {
                style: {
                    color: "red"
                } }, counter)), _react2.default.createElement(_RaisedButton2.default, { label: 'Default', style: style }), _react2.default.createElement(_RaisedButton2.default, { label: 'Primary', primary: true, style: style }), _react2.default.createElement(_RaisedButton2.default, { label: 'Secondary', secondary: true, style: style }), _react2.default.createElement(_RaisedButton2.default, { label: 'Disabled', disabled: true, style: style }), _react2.default.createElement('br', null), _react2.default.createElement('br', null), _react2.default.createElement(_RaisedButton2.default, { label: 'Full width', fullWidth: true }), _react2.default.createElement(_RaisedButton2.default, { label: 'Open Drawer', onTouchTap: this.handleToggle }), _react2.default.createElement(_Drawer2.default, {
                docked: false,
                width: 200,
                open: this.state.open,
                onRequestChange: function onRequestChange(open) {
                    return _this2.setState({ open: open });
                } }, _react2.default.createElement(_MenuItem2.default, { onTouchTap: this.handleClose }, 'Menu Item'), _react2.default.createElement(_MenuItem2.default, { onTouchTap: this.handleClose }, 'Menu Item 2'))));
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Volumes/Data/dev/demo-nextjs-v2/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Volumes/Data/dev/demo-nextjs-v2/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(76)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

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
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9lMjI2ZDhiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWU7Ozs7QUFDUjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVQLElBQU07WUFDTTtBQUFSOztBQUdKLElBQU0sV0FBVywyQkFBWSxFQUFDLFdBQVc7O0lBRXBCO2lDQUNqQjs7aUJBQVksT0FBTzs0Q0FBQTs7b0lBQ1Q7O2NBd0JWLGVBQWU7eUJBQVc7c0JBQ2hCLENBQUMsTUFBSyxNQUFNO0FBQWxCLGFBRGlCO0FBekJGOztjQTZCbkIsY0FBYzttQkFBTSxNQUFLLFNBQVMsRUFBQyxNQUFNO0FBM0JyQzs7Y0FBSztxQkFFRDtrQkFBTTtBQUROO2VBR1A7Ozs7OzRDQUdHO2lCQUFLLFdBQVcsWUFBWSxLQUFLLFVBQVUsS0FBSyxPQUVuRDs7OztvQ0FHRztpQkFBSyxTQUFTLGdCQUFlO29CQUFBLGVBQ3pCOzs7NkJBQ2EsVUFFaEI7QUFGTztBQUdYOzs7OytDQUdHOzBCQUFjLEtBQ2pCOzs7O2lDQU9RO3lCQUFBOztnQkFDRSxVQUFXLEtBQUssTUFFdkI7O21CQUVJLGdCQUFDLDRDQUFpQixVQUNkLGlEQUNJLDhDQUNJLHNCQUFDLGtDQUFPLE9BQU0sU0FBUSxvQkFBbUIsdUNBQXNDLDBCQUEwQixrQ0FBQyxNQUFEOzJCQUFVLE9BQUssU0FBUyxFQUFDLE1BQUQ7QUFDakksaUVBQ0E7OzJCQUdJO0FBREEsaUJBREEsSUFJUiwyQkFBQyx3Q0FBYSxPQUFNLFdBQVUsT0FDOUIsMEJBQUMsd0NBQWEsT0FBTSxXQUFVLFNBQVMsTUFBTSxPQUM3QywwQkFBQyx3Q0FBYSxPQUFNLGFBQVksV0FBVyxNQUFNLE9BQ2pELDBCQUFDLHdDQUFhLE9BQU0sWUFBVyxVQUFVLE1BQU0sT0FDL0MsOENBQ0EsMkNBQ0EsdUJBQUMsd0NBQWEsT0FBTSxjQUFhLFdBQ2pDLHlCQUFDLHdDQUFhLE9BQU0sZUFBYyxZQUFZLEtBQzlDLGlDQUFDO3dCQUVHO3VCQUNBO3NCQUFNLEtBQUssTUFDWDtpQ0FBaUIseUJBQUMsTUFBRDsyQkFBVSxPQUFLLFNBQVMsRUFBQyxNQUFEO0FBQ3pDLGlCQUpBLG9CQUlDLG9DQUFTLFlBQVksS0FBSyxlQUMzQiw4QkFBQyxvQ0FBUyxZQUFZLEtBQUssZUFLOUM7Ozs7O0FBakU0Qjs7a0JBQVosSSIsImZpbGUiOiI0LmFjMjlmMjVhMGM3YzVhOWNhMTg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE11aVRoZW1lUHJvdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL011aVRoZW1lUHJvdmlkZXInO1xuaW1wb3J0IGdldE11aVRoZW1lIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9nZXRNdWlUaGVtZSc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ21hdGVyaWFsLXVpL0FwcEJhcic7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvdGFwX2V2ZW50cydcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnbWF0ZXJpYWwtdWkvRHJhd2VyJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdtYXRlcmlhbC11aS9NZW51SXRlbSc7XG5cbmNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbjogMTJcbn07XG5cbmNvbnN0IG11aVRoZW1lID0gZ2V0TXVpVGhlbWUoe3VzZXJBZ2VudDogZmFsc2V9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb3VudGVyOiAwLFxuICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuaW5jcmVtZW50LmJpbmQodGhpcyksIDEwMDApXG5cbiAgICB9XG5cbiAgICBpbmNyZW1lbnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHtjb3VudGVyfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyOiBjb3VudGVyICsgMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcbiAgICB9XG5cbiAgICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlbjogIXRoaXMuc3RhdGUub3BlblxuICAgIH0pO1xuXG4gICAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2NvdW50ZXJ9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciBtdWlUaGVtZT17bXVpVGhlbWV9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXBwQmFyIHRpdGxlPVwiVGl0bGVcIiBpY29uQ2xhc3NOYW1lUmlnaHQ9XCJtdWlkb2NzLWljb24tbmF2aWdhdGlvbi1leHBhbmQtbW9yZVwiIG9uTGVmdEljb25CdXR0b25Ub3VjaFRhcD17KG9wZW4pID0+IHRoaXMuc2V0U3RhdGUoe29wZW59KX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5XZWJwYWNrIGlzIGRvaW5nIGl0cyB0aGluZyB3aXRoIFJlYWN0IGFuZCBFUzIwMTU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT57Y291bnRlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxSYWlzZWRCdXR0b24gbGFiZWw9XCJEZWZhdWx0XCIgc3R5bGU9e3N0eWxlfS8+XG4gICAgICAgICAgICAgICAgICAgIDxSYWlzZWRCdXR0b24gbGFiZWw9XCJQcmltYXJ5XCIgcHJpbWFyeT17dHJ1ZX0gc3R5bGU9e3N0eWxlfS8+XG4gICAgICAgICAgICAgICAgICAgIDxSYWlzZWRCdXR0b24gbGFiZWw9XCJTZWNvbmRhcnlcIiBzZWNvbmRhcnk9e3RydWV9IHN0eWxlPXtzdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8UmFpc2VkQnV0dG9uIGxhYmVsPVwiRGlzYWJsZWRcIiBkaXNhYmxlZD17dHJ1ZX0gc3R5bGU9e3N0eWxlfS8+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIDxSYWlzZWRCdXR0b24gbGFiZWw9XCJGdWxsIHdpZHRoXCIgZnVsbFdpZHRoPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgICAgIDxSYWlzZWRCdXR0b24gbGFiZWw9XCJPcGVuIERyYXdlclwiIG9uVG91Y2hUYXA9e3RoaXMuaGFuZGxlVG9nZ2xlfS8+XG4gICAgICAgICAgICAgICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY2tlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2hhbmdlPXsob3BlbikgPT4gdGhpcy5zZXRTdGF0ZSh7b3Blbn0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZUNsb3NlfT5NZW51IEl0ZW08L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uVG91Y2hUYXA9e3RoaXMuaGFuZGxlQ2xvc2V9Pk1lbnUgSXRlbSAyPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9