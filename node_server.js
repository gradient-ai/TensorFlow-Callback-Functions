var http = require('http');
var server = http.createServer ( function(request,response){

response.writeHead(200,{"Content-Type":"text\plain"});
if(request.method == "POST")
    {
        console.log("Posted")
        console.log(request)
        response.end("received POST request.");
    }
});