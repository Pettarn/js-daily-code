(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.FRouter = factory());
}(this, function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var RouterView = {
    name: 'RouterView',
    functional: true,
    props: {
      name: {
        type: String,
        "default": 'default'
      }
    },
    data: function data() {
      return {};
    },
    render: function render(_, _ref) {
      var parent = _ref.parent,
          data = _ref.data;
      // router-view will be rendered as matched component 
      var hash = parent.$router.currentHash;


      if (hash[0] === '#') {
        hash = hash.split('');
        hash.shift();
        hash = hash.join('');
      }

      console.log(hash);
      var options = {};

      var renderCore = function renderCore() {
        // the x level routeMap and hash match

        console.log(parent.$vnode.data._childrenMap)
        if (_typeof(parent.$vnode.data._childrenMap) === 'undefined') {

          var currentMap = parent.$router.routeMap;
          var matched = [];
          currentMap.forEach(function (item) {
            var index = hash.indexOf(item.path);

            if (index === 0) {
              matched.push(item);
            }
          }); // matched nothing

          console.log(matched)

          if (matched.length === 0) {
            return
          }

          if (matched[matched.length - 1].redirect) {
            console.log('redirect bug')
            hash = hash.replace(matched[matched.length - 1].path, matched[matched.length - 1].redirect);
            location.hash = '#' + hash;
            return renderCore();
          }

          if (_typeof(matched[matched.length - 1].children) !== 'undefined') {
            data._childrenMap = matched[matched.length - 1].children;
            data._hashChip = matched[matched.length - 1].path;
            console.log(data)
          }

          options.data = data;
          options.component = matched[matched.length - 1].component;
          console.log(options)
        } else {
          var _currentMap = parent.$vnode.data._childrenMap;
          var parentHashChip = parent.$vnode.data._hashChip;
          var _matched = [];

          if (parentHashChip[parentHashChip.length - 1] !== '/') {
            parentHashChip += '/';
          }

          _currentMap.forEach(function (item) {
            var index = hash.indexOf(parentHashChip + item.path);

            console.log(parentHashChip + item.path)
            console.log(hash)

            if (index !== -1) {
              _matched.push(item);
            }
          });


          if (_matched.length === 0) {
            return
          }

          if (_matched[_matched.length - 1].redirect) {
            hash = hash.replace(_matched[_matched.length - 1].path, _matched[_matched.length - 1].redirect);
            location.hash = '#' + hash;
            return renderCore();
          }

          if (_matched[_matched.length - 1].children) {
            data._childrenMap = _matched[_matched.length - 1].children;
            data._hashChip = _matched[_matched.length - 1].path;
          }

          options.data = data;
          options.component = _matched[_matched.length - 1].component;
        }
      };

      renderCore();
      return _(options.component, options.data);
    }
  };

  var isDef = function isDef(v) {
    return v !== undefined;
  };

  var install = function install(Vue) {
    Vue.mixin({
      beforeCreate: function beforeCreate() {
        if (isDef(this.$options.router)) {
          this._routerRoot = this;
          this._router = this.$options.router;

          this._router.initHistory();
        } else {
          this._routerRoot = this.$parent && this.$parent._routerRoot || this;
        }
      }
    });
    Object.defineProperty(Vue.prototype, '$router', {
      get: function get() {
        return this._routerRoot._router;
      }
    });
    Vue.component('RouterView', RouterView);
  };

  var History =
  /*#__PURE__*/
  function () {
    function History(router) {
      _classCallCheck(this, History);

      this.router = router;
    }

    _createClass(History, [{
      key: "initHistory",
      value: function initHistory() {
        this.Stack = [];
        this.Stack.push(this.router.currentHash);
      }
    }, {
      key: "push",
      value: function push(url) {
        location.href = url;
        this.Stack.push(this.router.currentHash);
      }
    }, {
      key: "back",
      value: function back() {
        var index = this.Stack.indexOf(this.router.currentHash);

        if (index > 0) {
          location.href = this.Stack[index - 1];
        } else {
          location.reload();
        }
      }
    }, {
      key: "forward",
      value: function forward() {
        var index = this.Stack.indexOf(this.router.currentHash);

        if (index < this.Stack.length) {
          location.href = this.Stack[index + 1];
        } else {
          location.reload();
        }
      }
    }]);

    return History;
  }();

  window.onhashchange = function () {
    location.reload();
  };

  var FRouter =
  /*#__PURE__*/
  function () {
    function FRouter(options) {
      _classCallCheck(this, FRouter);

      this.routeMap = options.routes;
    } // get href () {
    // }


    _createClass(FRouter, [{
      key: "initHistory",
      value: function initHistory() {
        this.history.initHistory();
      }
    }, {
      key: "push",
      value: function push(url) {
        this.history.push(url);
      }
    }, {
      key: "back",
      value: function back() {
        this.history.back();
      }
    }, {
      key: "forward",
      value: function forward() {
        this.history.forward();
      }
    }, {
      key: "currentHash",
      get: function get() {
        var hash = window.location.hash; // let index = hash.indexOf('#')

        return hash;
      }
    }]);

    return FRouter;
  }();

  FRouter.install = install;
  FRouter.prototype.history = new History(FRouter.prototype);

  return FRouter;

}));
//# sourceMappingURL=FRouter.umd.js.map
