/* global angular*/
// services

var certeServices = angular.module('certeServices', ['ngResource']);

certeServices.factory('dane', ['$resource', function($resource) {
	'use strict';

	return $resource('api/:rsc', {}, {

		list: {
			method: 'GET',
			params: { rsc: 'names'},
			isArray: false
		}

	});

}]);
