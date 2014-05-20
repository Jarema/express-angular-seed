/*jshint node: true */

//================================== routes for API ====================================
module.exports = function(app, express) {
	'use strict';
	var api = express.Router();

	api.get('/somget', function(req, res) {
		res.send('some json');
	});

	// init api route. all api routes will begin with /api
	app.use('/api', api);

};
