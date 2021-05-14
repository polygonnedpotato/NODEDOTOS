var dbg=require('./debug') //Loads first for logging.
dbg.logit('loading system mods')
var gsh = require('./system/gsh')
var net=require('./system/net')
dbg.logit('system loaded. begin graphical shell init')
gsh.startshell()
var serversysstat=net.httpGET('http://sys.nodeos.repl.co/ping')
console.log(serversysstat)