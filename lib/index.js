var path = require('path')
  , tmpl = require('consolidate')
  ;

module.exports.render = function(file, data, fn) {
  console.log(file);
  tmpl.ejs(file, data, fn);
}
module.exports.options = {
  theme: path.resolve(__dirname + '/../theme'),
  ext: '.ejs'
} 