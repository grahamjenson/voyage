class Voyage.Views.MapView extends Backbone.View

  initialize: (args) ->
    @render() 
    window.mapview = @

  render: () ->
    width = $(window).width()
    height = $(window).height()
    
    size = window.blockmap.size
    for block in window.blockmap.grid
      #ac: 117
      #latlon: Array[2]
      #xy: Array[2]
      $(window.HAML.block({block: block, size: size, width: width})).appendTo(@el)