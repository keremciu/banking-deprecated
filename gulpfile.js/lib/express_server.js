var express = require('express');
var http = require('http');
var app = express();
var router = express.Router();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://10.0.10.138:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', function(req, res) {
    res.sendfile('./public/index.html');
});

app.get('/login', function(req, res) {
    res.sendfile('./public/login.html');
});

app.post('/password-send', function (req, res) {
  res.send('password-actions');
});

app.post('/sms-send', function (req, res) {
  res.send('sms-actions');
});

app.post('/login', function (req, res) {
    res.send(req);
});
 
app.server = http.createServer(app);
app.server.listen(5000);