var http=require('http')
exports.startshell=function(){
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('<!DOCTYPE html>\n<html>\n<head>\n<title>NODE.OS-GRAPHICAL_SHELL</title>\n</head>\n<body>\n<canvas id="GUI"/>\n<script src="./system/hc.js"></script>\n</body>\n</html>')
    }).listen(8080)
}