// get the http module:copy
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('./static/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === '/cars') {
        fs.readFile('./static/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === '/cats') {
        fs.readFile('./static/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === '/cars/new') {
      fs.readFile('./static/carNew.html', 'utf8', function (errors, contents){
          response.writeHead(200, {'Content-type': 'text/html'});
          response.write(contents); 
          response.end();
      });
    }
    // request favicon.ico:
    else if (request.url === '/favicon.ico') {
        // notice we won't include the utf8 encoding
        fs.readFile('./static/img/favicon.ico',  function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/x-iconrs'});
            response.write(contents); 
            response.end();
        });
    }
    // request image:
    else if (request.url === '/static/img/car-1.png') {
      // notice we won't include the utf8 encoding
      fs.readFile('./static/img/car-1.png',  function (errors, contents){
          response.writeHead(200, {'Content-type': 'image/png'});
          response.write(contents); 
          response.end();
      });
    }
    else if (request.url === '/static/img/car-2.png') {
      // notice we won't include the utf8 encoding
      fs.readFile('./static/img/car-2.png',  function (errors, contents){
          response.writeHead(200, {'Content-type': 'image/png'});
          response.write(contents); 
          response.end();
      });
    }
    else if (request.url === '/static/img/car-3.png') {
      // notice we won't include the utf8 encoding
      fs.readFile('./static/img/car-3.png',  function (errors, contents){
          response.writeHead(200, {'Content-type': 'image/png'});
          response.write(contents); 
          response.end();
      });
    }
    else if (request.url === '/static/img/cat-1.png') {
      // notice we won't include the utf8 encoding
      fs.readFile('./static/img/cat-1.png',  function (errors, contents){
          response.writeHead(200, {'Content-type': 'image/png'});
          response.write(contents); 
          response.end();
      });
    }
    else if (request.url === '/static/img/cat-2.png') {
      // notice we won't include the utf8 encoding
      fs.readFile('./static/img/cat-2.png',  function (errors, contents){
          response.writeHead(200, {'Content-type': 'image/png'});
          response.write(contents); 
          response.end();
      });
    }
    else if (request.url === '/static/img/cat-3.png') {
      // notice we won't include the utf8 encoding
      fs.readFile('./static/img/cat-3.png',  function (errors, contents){
          response.writeHead(200, {'Content-type': 'image/png'});
          response.write(contents); 
          response.end();
      });
    }
    // request CSS:
    else if (request.url === '/stylesheets/style.css') {
      fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
          response.writeHead(200, {'Content-type': 'text/css'});
          response.write(contents); 
          response.end();
      });
    }
    // request didn't match anything:
    else {
        fs.readFile('./static/404.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
        // response.writeHead(404);
        // response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");