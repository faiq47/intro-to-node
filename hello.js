var http = require('http'); 
var fs   = require('fs');
var url =require('url');
const PORT= process.env.PORT || 5000


 http.createServer(function(req,res){
 	q = url.parse(req.url, true);
 	
 	var filename ='.'+q.pathname;
 	if(filename == './')(filename = './index');

 	filename = filename +'.html';
 	fs.readFile(filename, function(err,data){

 		if(err){
 			res.writeHead(404,{'content-type':'text/html'});
 			return res.end("404 server not Found");
 		}
 	res.writeHead(200, {'content-type':'text/html'});
 	res.write(data);
 	console.log('incomming request.....' + req.url);
 	return res.end();

})
 }).listen(5000);
 console.log("server is listning 8080!!")