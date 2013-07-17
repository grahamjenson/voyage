(function() {
  if (module.exports == null) {
    module.exports = {};
  }

  module.exports['t'] = function(context) {
    return (function() {
      var $o;
      $o = [];
      $o.push("<div class='hero'>\n  <div class='inner'>\n    <h1>\n      The Voyage\n    </h1>\n    <p>\n      A Mashed Katherine Mansfield Story\n    </p>\n  </div>\n</div>\n<div id='container'></div>\n<script>\n  var _gaq = _gaq || [];\n  _gaq.push(['_setAccount', 'UA-21053562-1']);\n  _gaq.push(['_setDomainName', 'voyage.maori.geek.nz']);\n  _gaq.push(['_trackPageview']);\n  (function() {\n      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;\n      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\n      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);\n    })();\n</script>");
      return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(context);
  };

}).call(this);
