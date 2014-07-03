/*jshint node: true */
var express = require('express');
//================================== routes for API ====================================
module.exports = function(app) {
	'use strict';

	var api = express.Router();

	api.get('/names', function(req, res) {
		req.session.auth = true;
		res.json({imiona: [
			{"imie": "tomek", "nazwisko": "pietrek", "wiek": 29},
			{"imie": "arturek", "nazwisko": "pietrek", "wiek": 2},
			{"imie": "artur", nazwisko: "gawronski", "wiek": 30},
			{"imie": "karina", nazwisko: "wawrzyniak", "wiek": 15},
			{"imie": "samson1", "nazwisko": "snow", "wiek": 6},
			{"imie": "samson2", "nazwisko": "snow", "wiek": 6},
			{"imie": "samson3", "nazwisko": "snow", "wiek": 6},
			{"imie": "samson4", "nazwisko": "snow", "wiek": 6},
			{"imie": "samson5", "nazwisko": "snow", "wiek": 6},
			{"imie": "samson6", "nazwisko": "snow", "wiek": 6},
			{"imie": "samson7", "nazwisko": "snow", "wiek": 6},
			{"imie": "samson8", "nazwisko": "snow", "wiek": 6},
			{"imie": "samson9", "nazwisko": "snow", "wiek": 6},
			{"imie": "samson0", "nazwisko": "snow", "wiek": 6},
			{"imie": "samson11", "nazwisko": "snow", "wiek": 6},
			{"imie": "samson12", "nazwisko": "snow", "wiek": 6},
			{"imie": "samson13", "nazwisko": "snow", "wiek": 6},
			{"imie": "samson14", "nazwisko": "snow", "wiek": 6},
			{"imie": "samson15", "nazwisko": "snow", "wiek": 6},
			{"imie": "samson16", "nazwisko": "snow", "wiek": 6},
			{"imie": "samson17", "nazwisko": "snow", "wiek": 6},
			{"imie": "samson19", "nazwisko": "snow", "wiek": 6},
			{"imie": "samson20", "nazwisko": "snow", "wiek": 6},
			{"imie": "samson21", "nazwisko": "snow", "wiek": 6}

		]

		});
	});

	// init api route. all api routes will begin with /api
	app.use('/api', api);

};
