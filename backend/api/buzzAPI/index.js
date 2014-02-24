var helpers = require('./_helpers.js');
function buzzAPI() {
  /* 
    Load each API, and bind as method
  */
  var methods = {};
  require('fs').readdirSync(__dirname ).forEach(function(file) {
    if (file.match(/.+\.js/g) !== null && file !== 'index.js') {
      if(file !== 'index.js') {
        var name = file.replace('.js', '');
        methods[name] = require(__dirname + '/' + file);
      }
    }
  });
  return methods;
}
module.exports = buzzAPI;