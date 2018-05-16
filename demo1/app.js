var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
}); //路由

app.get('/register', function (req, res) {
    res.send('注册');
}); //路由

app.get('/login', function (req, res) {
    res.send('登录');
}); //路由

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});