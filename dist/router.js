(function() {
  var app, express, js, port, ss, temp, templates;

  express = require("express");

  templates = require('./templates');

  app = express();

  app.use(express.logger());

  app.use(express["static"](__dirname + '/assets'));

  js = function() {
    var jss;
    jss = ['jquery', 'underscore', 'backbone', 'd3', 'nzblock', 'voyage', 'map_view', 'card'];
    return templates.javascripts({
      files: jss
    });
  };

  ss = function() {
    var sss;
    sss = ['base'];
    return templates.stylesheets({
      files: sss
    });
  };

  temp = function() {
    var ttt;
    ttt = ['block', 'card'];
    return templates.templates({
      files: ttt
    });
  };

  app.get('/', function(request, response) {
    return response.send(templates.layout({
      body: templates.body,
      javascripts: js,
      stylesheets: ss,
      templates: temp
    }));
  });

  port = process.env.PORT || 3000;

  app.listen(port, function() {
    return console.log("Listening on " + port);
  });

}).call(this);
