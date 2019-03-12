(function() {
  // http://www.codeblocq.com/2016/04/Convert-a-base64-string-to-a-file-in-Node/
  // https://forums.meteor.com/t/base64-convert-back-to-file/34188/3

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var DATA_TYPE_RE = /:(.*?);/;

  nx.base64ToFile = function(inDataUrl, inOptions) {
    var arr = inDataUrl.split(',');
    var blobStr = global.atob(arr[1]);
    var len = blobStr.length;
    var u8arr = new Uint8Array(len);
    var options = nx.mix({
      type: arr[0].match(DATA_TYPE_RE)[1],
      name: Math.random().toString(36).slice(-8)
    }, inOptions);

    while (len--) {
      u8arr[len] = blobStr.charCodeAt(len);
    }
    return new File([u8arr], options.name, { type: options.type });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.base64ToFile;
  }
})();
