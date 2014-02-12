define([], function() {
  return {
    parse : function() {
      var match,
          pl     = /\+/g,  // Regex for replacing addition symbol with a space
          search = /([^&=]+)=?([^&]*)/g,
          decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
          query  = window.location.search.substring(1);

      var urlParams = {};
      while ( (match = search.exec(query)) ) {
         urlParams[decode(match[1])] = decode(match[2]);
      }
     return urlParams;
    },
    /*
      CAN ONLY BE 1 LEVEL DEEP!!!!
    */
    stringify: function(obj) {
      var encoded = '?';
      for(var el in obj) {
        if(obj.hasOwnProperty(el)) {
          encoded += el + '=' + obj[el] +'&';
        }
      }
      encoded = encoded.slice(0, -1); //remove trailing &
      return encoded;
    }
  };
});
