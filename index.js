var fs = require('fs')
function logit(content){fs.appendFile('./log/base.log', '['+Date()+']'+content+'\n', function (err) {if (err) console.error('ERR:'+err);});}
logit('loading system mods')
var gsh = require('./system/gsh.js')
logit('system loaded. begin graphical shell init')
gsh.startshell()