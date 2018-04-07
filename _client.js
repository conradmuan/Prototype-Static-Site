'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fooComponent = require('./components/foo-component');

var _fooComponent2 = _interopRequireDefault(_fooComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mount = document.getElementById('foo-component');

_react2.default.render(new _fooComponent2.default({}), mount);
