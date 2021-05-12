var dbg=require('./debug') //Loads first for logging.
dbg.logit('loading system mods')
var gsh = require('./system/gsh')
dbg.logit('system loaded. begin graphical shell init')
gsh.startshell()