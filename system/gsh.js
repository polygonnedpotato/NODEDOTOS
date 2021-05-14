var http=require('http')
var fs=require('fs')
exports.startshell=function(){
    console.log('creating http server on port 663367')
    http.createServer(function (req, res) {
        console.log('reading "./app/gsh/gui.html"')
        fs.readFile('./app/gsh/gui.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
    })}).listen(6633)
    console.log('gui init done')
}