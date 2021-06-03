var fs=require('fs')
var gsh=require('./gsh')
var net=require('./net')
exports.freeze=function(reason){
  if(reason=="hostIsWebServer"){
    gsh.forceQuit()
    gsh.writeRawText("WARNING:SYSTEM HALTED\n\nYOUR COPY OF NODE.OS IS BEING DEPLOYED ON A WEB SERVER. WHILE NODE.OS CREATES AN HTTP SERVER TO OPERATE, USING AN ONLINE COPY CAN BE DANGEROUS.\n<i>To bypass this restriction, create a key in Local Storage called \"BypassHTTPRestriction\" and set the value to \"true\". Do not include the quotations.")
  }
}