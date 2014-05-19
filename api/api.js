/*jshint node: true */

//================================== routes for API ====================================
module.exports = function(app, express) {



	var api = express.Router();

	api.get('/somget', function(req, res) {
		res.send('some json');
	});

	app.use('/api', api);

};
