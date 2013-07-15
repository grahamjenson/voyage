(function() {
  if (module.exports == null) {
    module.exports = {};
  }

  module.exports['t'] = function(context) {
    return (function() {
      var $o;
      $o = [];
      $o.push("CARD");
      return $o.join("\n");
    }).call(context);
  };

}).call(this);
