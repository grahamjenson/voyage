(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.Voyage = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function() {
      Backbone.defaultrouter = new Voyage.Routers.Router();
      return Backbone.history.start();
    }
  };

  Voyage.Routers.Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      _ref = Router.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Router.prototype.routes = {
      '': 'visualise'
    };

    Router.prototype.visualise = function() {
      var bm;
      return bm = new Voyage.Views.MapView({
        el: $('#container')
      });
    };

    return Router;

  })(Backbone.Router);

  $(document).ready(function() {
    return Voyage.init();
  });

}).call(this);
