################################################
#                    Grahams Node
#             This file is the initial router
# src    <-- All src files
# dist   <-- f(src), all calculated files
# vendor <-- all supplied files (calculated on different grunt task as the change less often)
# 
# src/assets <-- all public files (still usable on server)
# 
#
################################################

express = require("express")
util = require('util')
twitter = require('twit')
templates = require './templates'


app = express()
app.use(express.logger())
app.use(express.static(__dirname + '/assets'));


js = () ->
  jss = ['jquery', 'underscore', 'backbone', 'd3', 'nzblock', 'voyage', 'map_view', 'card']
  templates.javascripts(files: jss)

ss = () ->
  sss = ['base']
  templates.stylesheets(files: sss)

temp = () ->
  ttt = ['block','card']
  templates.templates(files: ttt)

app.get('/', (request, response) ->
  response.send(templates.layout(body: templates.body, javascripts: js, stylesheets: ss, templates: temp))
)



app.get('/tweets', (req,res) ->
  twit_oauth = {
    consumer_key: process.env.consumer_key
    consumer_secret: process.env.consumer_secret
    access_token: process.env.access_key
    access_token_secret: process.env.access_secret
  }
  
  twit = new twitter(twit_oauth)

  twit.get('search/tweets', { q: 'digitalnz', geocode: "-41.2889,174.7772,500km", count: 5 }, (err, data) ->
    if (err) 
      res.writeHead(500, err.message)
    else
      res.json(data)
  )
)

port = process.env.PORT || 3000
app.listen(port, ->
  console.log("Listening on " + port)
)