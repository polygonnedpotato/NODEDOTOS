var http=require('http')
var fs=require('fs')
exports.startshell=function(){
    http.createServer(function (req, res) {
        fs.readFile('./app/gsh/gui.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
    })}).listen(8080)
}