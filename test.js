var http =require('http')
var url =require('url')
var fs =require('fs')

http.createServer(function(req,res){
	q=url.parse(req.url, true);
	var filename='.'+q.pathname;
	fs.readFile('filename', function(err,data){
		res.writeHead(200, {'content-type':'text/html'});
		
	res.write(data);
	res.end();
})
})
.listen(8080);
console.log('server ios lisening 8080')