(function() {
  // http://www.codeblocq.com/2016/04/Convert-a-base64-string-to-a-file-in-Node/
  // https://forums.meteor.com/t/base64-convert-back-to-file/34188/3

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var DATA_TYPE_RE = /^data:([^;]+);/;

  nx.base64ToFile = function(inDataUrl, inOptions) {
    var options = nx.mix(inOptions, {
      type: inDataUrl.match(DATA_TYPE_RE)[1],
      name: Math.random()
        .toString(36)
        .slice(-8)
    });
    var index = inDataUrl.indexOf('base64,');
    var buffer = Buffer.from(base64File.slice(index + 7), 'base64');
    return new Promise(function(resolve) {
      var file = new File(nx.mix({ buffer: buffer }, options));
      resolve(file);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.base64ToFile;
  }
})();
