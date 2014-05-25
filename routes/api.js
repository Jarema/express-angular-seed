/*jshint node: true */

//================================== routes for API ====================================
module.exports = function(app, express) {
	'use strict';
	var api = express.Router();

	api.get('/names', function(req, res) {
		res.json({imiona: [
			{"imie": "tomek", "nazwisko": "pietrek", "wiek": 29},
			{"imie": "arturek", "nazwisko": "pietrek", "wiek": 2},
			{"imie": "artur", nazwisko: "gawronski", "wiek": 30},
			{"imie": "karina", nazwisko: "wawrzyniak", "wiek": 15},
			{"imie": "samson", "nazwisko": "snow", "wiek": 6}
		]

		});
	});

	// init api route. all api routes will begin with /api
	app.use('/api', api);

};
