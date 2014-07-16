var http = require('http');
var express = require('express');
var path = require('path');

var app = express();
server = http.createServer(app);
var port = 3030;

var rootPath = path.join(__dirname, '../');

// Server Static Files
app.use(express.static(rootPath));

app.get('/entry', function (req, res) {
    res.sendfile(path.join(rootPath, 'index.html'));
});

server.listen(port);
console.log('Visit: http://localhost:' + port);