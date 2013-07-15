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


port = process.env.PORT || 3000
app.listen(port, ->
  console.log("Listening on " + port)
)