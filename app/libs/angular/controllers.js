/*jshint devel: true*/
/*global angular */

/* controllers */

var certeControllers = angular.module('certeControllers', []);

certeControllers.controller('mainController', ['$scope', 'dane',
	function($scope, dane){
		'use strict';

		dane.list({}, function(lista) {
			$scope.imiona = lista.imiona;
			/*
			var paged = [];
			for (var i = 0; i < lista.imiona.length; i += 4) {
				paged.push(lista.imiona.slice(i,i + 4));
			}
			console.log(paged);
			*/
		});
		$scope.orderProp = 'wiek';

		$scope.filter = 'imie';
		$scope.getFilter = function() {
			var filter= {};
			filter[$scope.filter] = $scope.query;
			return filter;
		};

	}]);

certeControllers.controller('paginator', ['$scope', 'dane', function($scope, dane) {
	'use strict';

	$scope.currentPage = 1;

	$scope.setPage = function (pageNo) {

	};

	$scope.pageChanged = function() {
	console.log('Page changed to: ' + $scope.currentPage);
	};

	$scope.maxSize = 100;




	dane.list({}, function(lista) {
		$scope.imiona = lista.imiona;

		var paged = [];
		for (var i = 0; i < lista.imiona.length; i += 4) {
			paged.push(lista.imiona.slice(i,i + 4));
		}

		$scope.paged = paged;
		$scope.totalItems = lista.imiona.length;

	});

}]);
