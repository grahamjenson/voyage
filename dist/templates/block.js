(function() {
  if (module.exports == null) {
    module.exports = {};
  }

  module.exports['t'] = function(context) {
    return (function() {
      var $c, $e, $o, color;
      $e = function(text, escape) {
        return ("" + text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/\//g, '&#47;').replace(/"/g, '&quot;');
      };
      $c = function(text) {
        switch (text) {
          case null:
          case void 0:
            return '';
          case true:
          case false:
            return '' + text;
          default:
            return text;
        }
      };
      $o = [];
      color = d3.scale.linear().domain([0, 255]).range(["#0000aa", "green"]);
      $o.push("<div class='block' style='left: " + ($e($c(this.block.xy[0] + this.width / 2 - 320))) + "px; top: " + ($e($c(this.block.xy[1]))) + "px; height: " + ($e($c(this.size))) + "px; width: " + ($e($c(this.size))) + "px; background-color: " + ($e($c(color(this.block.ac)))) + "'>\n  <div class='land large'></div>\n</div>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(context);
  };

}).call(this);
