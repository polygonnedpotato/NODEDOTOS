var requestify = require('requestify');
exports.httpReqGet = function(url) {
  requestify.get(url)
    .then(function (response) {
      response.getBody();
    });
}