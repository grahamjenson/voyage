window.Voyage =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  init: ->
    Backbone.defaultrouter = new Voyage.Routers.Router()
    Backbone.history.start()


class Voyage.Routers.Router extends Backbone.Router
  routes:
    '': 'visualise'

  visualise: () ->
    bm = new Voyage.Views.MapView({el: $('#container')})

$(document).ready ->
  Voyage.init()
