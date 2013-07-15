(function() {
  if (window.HAML == null) {
    window.HAML = {};
  }

  window.HAML['card'] = function(context) {
    return (function() {
      var $o;
      $o = [];
      $o.push("CARD");
      return $o.join("\n");
    }).call(context);
  };

}).call(this);
