// server.js
// load the things we need
var express = require('express');
var app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use( express.static( "public" ) );

let routes = require('./api/routes') //importing route
routes(app)
// use res.render to load up an ejs view file

// home pages
app.get('/', function(req, res) {
    res.render('index');
});

// home pages
app.get('/index', function(req, res) {
    res.render('index');
});

app.get('/product', function(req, res) {
    res.render('product');
});
app.get('/introduce', function(req, res) {
    res.render('introduce');
});
app.listen(8080);
console.log('8080 is the magic port');