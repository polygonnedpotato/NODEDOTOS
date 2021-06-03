const https = require('https');
exports.httpsGET=function(link){
https.get(link, (response) => {
  let todo = '';

  // called when a data chunk is received.
  response.on('data', (chunk) => {
    todo += chunk;
  });

  // called when the complete response is received.
  response.on('end', () => {
    console.log(JSON.parse(todo));
  });

}).on("error", (error) => {
  console.log("Error: " + error.message);
});}