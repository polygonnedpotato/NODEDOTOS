var fs = require('fs')
function log(content){
  fs.appendFile('./log/base.log')
}
console.log('loading system mods')
var gsh = require('./system/gsh.js')
console.log('system loaded. begin graphical shell init')
gsh.startshell()