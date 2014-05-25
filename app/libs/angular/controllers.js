/*global angular */

/* controllers */

var certeControllers = angular.module('certeControllers', []);

certeControllers.controller('mainController', ['$scope', 'dane',
	function($scope, dane){
		'use strict';
		dane.list({}, function(lista) {
			$scope.imiona = lista.imiona;
		});
		$scope.orderProp = 'wiek';
		$scope.queryType = 'wiek';
	}]);
