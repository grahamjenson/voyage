(function() {
  var app, express, js, port, ss, temp, templates, twitter, util;

  express = require("express");

  util = require('util');

  twitter = require('twit');

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

  app.get('/tweets', function(req, res) {
    var twit, twit_oauth;
    twit_oauth = {
      consumer_key: process.env.consumer_key,
      consumer_secret: process.env.consumer_secret,
      access_token: process.env.access_key,
      access_token_secret: process.env.access_secret
    };
    twit = new twitter(twit_oauth);
    return twit.get('search/tweets', {
      q: 'ba',
      count: 10
    }, function(err, data) {
      console.log(util.inspect(data));
      return res.send(JSON.stringify([err, data]));
    });
  });

  port = process.env.PORT || 3000;

  app.listen(port, function() {
    return console.log("Listening on " + port);
  });

}).call(this);
