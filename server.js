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



//================== ROUTES ======================================
//all api routes go in ./routes/api.js file
require('./routes/api')(app, express);
require('./routes/web')(app, express);
//================================================================


// port settings
var port = process.env.PORT || 8080;

//get and post:
app.use(bodyParser());
app.use(methodOverride());


//set jade as template engine
app.set('view engine', 'jade');
app.set('views', __dirname + '/public/views/');


//logs
app.use(logger('dev'));


// ================================= start server =========================================

app.listen(port);
console.log('server is listening on port ' + port);
