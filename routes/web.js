/*jshint node: true*/

var express = require('express');
//================================== routes for index and partials================================

module.exports = function(app) {
	'use strict';
	var router = express.Router();

	router.get('/partials/:name', function (req, res) {
		var name = req.params.name;
		res.render('partials/' + name);
	});

	router.get('*', function(req, res) {
		res.render('index');
	});

	//apply router
	app.use('/', router);
};


