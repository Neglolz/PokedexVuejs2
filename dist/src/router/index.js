'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Hello = require('../components/Hello.vue');

var _Hello2 = _interopRequireDefault(_Hello);

var _Map = require('../components/Map.vue');

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  routes: [{
    path: '/hello',
    name: 'Hello',
    component: _Hello2.default
  }, {
    path: '/map',
    name: 'Map',
    component: _Map2.default
  }]
});
//# sourceMappingURL=index.js.map