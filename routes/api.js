/*jshint node: true */

//================================== routes for API ====================================
module.exports = function(app, express) {
	'use strict';
	var api = express.Router();

	api.get('/names', function(req, res) {
		res.json({imiona: [
			{"imie": "tomek", "wiek": "29"},
			{"imie": "arturek", "wiek": "2"},
			{"imie": "artur", "wiek": "30"}
		]

		});
	});

	// init api route. all api routes will begin with /api
	app.use('/api', api);

};
