/* jshint node: true*/


//============================== server base settings===================================

//express server dependencies

var express = require('express');
var app = express();

//express modules dependencies

var bodyParser		= require('body-parser');
var methodOverride	= require('method-override');
var logger			= require('morgan');
var session			= require('express-session');
var cookieParser	= require('cookie-parser');

// port settings
var port = process.env.PORT || 8080;

//get and post:
app.use(bodyParser());
app.use(methodOverride());

//================================== routes for website================================

var router = express.Router();

router.get('/', function(req, res) {
	res.send('home page!');
});

//apply router
app.use('/', router);


//================================== routes for API ====================================
var api = express.Router();

api.get('/somget', function(req, res) {
	res.send('some json');
});

app.use('/api', api);

// ================================= start server =========================================

app.listen(port);
console.log('server is listening on port ' + port);
