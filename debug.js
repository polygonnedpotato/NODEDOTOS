var dt = require('./system/dt'); var fs = require('fs');var logdir='./log';
exports.logit = function (content) {
    if(!fs.existsSync(logdir)){
	    fs.mkdir(logdir, (err)=>{
		    if(err) return err;
	    });
    }
    fs.appendFile(logdir+'/base.log', '[' + dt.getTimeDate() + ']' + content + '\n', function (err) {
         if (err) console.error('ERR:' + err); 
    });
}
exports.deleteLogs=function(){
    fs.rmdir(logdir, { recursive: true }, (err) => {if (err) {throw err;}
        console.log('cleared log directory.');
    });
}