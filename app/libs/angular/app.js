
/*global angular */

// main app module

var certe = angular.module('certe', [
	'certeControllers',
	'certeServices',
	'ngRoute',
	'ngResource'
]);


certe.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		'use strict';
		$routeProvider.
			when('/test', {
				templateUrl: '/partials/main',
				controller: 'mainController'
			}).
			when('/dupa', {
				templateUrl: '/partials/partial1',
				controller: 'mainController'
			}).
			otherwise({
				redirectTo: '/test'
			});

		//use the HTML History API
		$locationProvider.html5Mode(true);
	}]);
