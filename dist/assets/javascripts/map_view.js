(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Voyage.Views.MapView = (function(_super) {
    __extends(MapView, _super);

    function MapView() {
      _ref = MapView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    MapView.prototype.initialize = function(args) {
      this.render();
      return window.mapview = this;
    };

    MapView.prototype.render = function() {
      var block, height, size, width, _i, _len, _ref1, _results;
      width = $(window).width();
      height = $(window).height();
      size = window.blockmap.size;
      _ref1 = window.blockmap.grid;
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        block = _ref1[_i];
        _results.push($(window.HAML.block({
          block: block,
          size: size,
          width: width
        })).appendTo(this.el));
      }
      return _results;
    };

    return MapView;

  })(Backbone.View);

}).call(this);
