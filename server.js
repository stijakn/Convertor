var https = require('https'),
    http  = require('http'),
    httpProxy = require('http-proxy'),
    fs = require('fs'),
    express = require('express'),
    XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


//
// Create a server
//
  var app = express();
  app.use(express.static(__dirname + '/.'));
  app.get('/fetchJsonFile', function(req, res){
      if(req.url.indexOf("fetchJsonFile") > -1) {
        fetchAndSaveJsonFile("https://api.kursna-lista.info/b7b80a59415046c33449b6a2a96bd4d8/kursna_lista");
        res.end("OK");
      }
  });
  app.listen(8080);


// //
// // Create a server
// //
// http.createServer(function (req, res) {
//  if(req.url.indexOf("fetchJsonFile") > -1) {
//    fetchAndSaveJsonFile("https://api.kursna-lista.info/b7b80a59415046c33449b6a2a96bd4d8/kursna_lista");
//  }
//  res.write('Hello World!'); //write a response to the client
//    res.end();
// }).listen(8080);


//
// Create a proxy
//
httpProxy.createProxyServer({
  target: 'https://api.kursna-lista.info/b7b80a59415046c33449b6a2a96bd4d8/kursna_lista',
  agent : https.globalAgent,
  headers: {
    host: 'api.kursna-lista.info'
  }
}).listen(8011);

//
// Function for fetching and saving json file from url
//
function fetchAndSaveJsonFile(url) {

var xhr = new XMLHttpRequest();
xhr.responseType = 'json';

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      fs.writeFile("./file.json", this.responseText, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
      });
    }

};
xhr.open("GET", url, true);
xhr.send();

}
