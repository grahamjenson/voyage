###### module
files = ['layout', 'body', 'javascripts', 'stylesheets', 'templates']
for f in files
  tem = require "./" + f
  if tem.t
    module.exports[f] = tem.t
