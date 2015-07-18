'use strict';

/* Services */
angular.module('myApp.services', [])
.value('categoryList',["House",
	"Electricity",
	"Water/Trash",
	"Education", 
	"Fuel",
	"Grocery",
	"Entertainment"])
.factory('expense', function($scope,$location){
 	$scope.data={expenses:[]};
});



