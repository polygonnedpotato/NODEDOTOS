var dbg=require('./debug') //Loads first for logging.
dbg.logit('loading system mods')
var gsh = require('./system/gsh')
var httpm=require('./system/http')
dbg.logit('system loaded. begin graphical shell init')
gsh.startshell()
var serversysstat=httpm.httpReqGet('https://sys.nodeos.repl.co/ping')
console.log(serversysstat)