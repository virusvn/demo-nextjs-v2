'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

require('../components/tap_events');

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = require('material-ui/MenuItem');

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