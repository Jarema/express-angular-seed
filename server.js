/* jshint node: true*/


//============================== server base settings===================================

//express server dependencies

var express = require('express');
var app = express();

//express modules dependencies

var bodyParser		= require('body-parser');
var methodOverride	= require('method-override');
var logger			= require('morgan');

// ================= SESSIONS ===================================

var session    = require('express-session');
var MongoStore = require('connect-mongo')(session);

app.use(session({
	secret: '&Hhg97g9&G$#97g9ggihGFSGI37y49t79r3r397t',
	store: new MongoStore({
		db: 'settings',
		url: 'mongodb://localhost:27017/settings/sessions'
    })
 }));

//==================ENVIROMENT SETTINGS ==========================

// or You set env, or it will be development
var env = process.env.NODE_ENV || 'development';

// if env == development - dont minify jade -> html
if (env === 'development') {

	app.locals.pretty = true;
}

//==================================================================

// port settings
var port = process.env.PORT || 8080;

//get and post:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// restful support
app.use(methodOverride());

// logs
app.use(logger('dev'));


//set jade as template engine
app.set('view engine', 'jade');
app.set('views', __dirname + '/app/views/');
app.use('/components', express.static(__dirname + '/app/components'));
app.use('/libs', express.static(__dirname + '/app/libs'));


//================== ROUTES ======================================

require('./routes/api')(app);	//all api routes go in ./routes/api.js file
require('./routes/web')(app);	//all website routes go in ./routes/web.js file

// ================================= start server =========================================

app.listen(port);
console.log('server is listening on port ' + port);
