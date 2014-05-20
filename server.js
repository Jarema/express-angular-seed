/* jshint node: true*/


//============================== server base settings===================================

//express server dependencies

var express = require('express');
var app = express();

//express modules dependencies

var bodyParser		= require('body-parser');
var methodOverride	= require('method-override');
var logger			= require('morgan');
//var session			= require('express-session');
//var cookieParser	= require('cookie-parser');

// other dependencies

var fs				= require('fs');

//==================ENVIROMENT SETTINGS ==========================
var env = process.env.NODE_ENV || 'development';

if (env === 'development') {

	app.locals.pretty = true;
	app.use(logger('dev'));
}

//logs

var logfile = fs.createWriteStream('./logfile.log', {flags: 'a'});
app.use(logger({stream: logfile}));


//==================================================================
// port settings
var port = process.env.PORT || 8080;

//get and post:
app.use(bodyParser());
app.use(methodOverride());


//set jade as template engine
app.set('view engine', 'jade');
app.set('views', __dirname + '/app/views/');


//================== ROUTES ======================================

require('./routes/api')(app, express);	//all api routes go in ./routes/api.js file
require('./routes/web')(app, express);	//all website routes go in ./routes/web.js file

// ================================= start server =========================================

app.listen(port);
console.log('server is listening on port ' + port);
