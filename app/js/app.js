'use strict';


// Declare app level module which depends on filters, and services
var myApp=angular.module('myApp', [
  'ngRoute',
  'ngMessages',
  'firebase',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
constant('FIREBASE_URL','https://expense-management.firebaseio.com/');
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
  	templateUrl: 'partials/home.html', 
  	controller: 'HomeCtrl'
  }).when('/register', {
      templateUrl: 'partials/register.html',
      controller:  'HomeCtrl'
  }).
  when('/add-expense', {
  	templateUrl: 'partials/add-expense.html', 
  	controller: 'ExpenseCtrl'
  }).
  when('/viewsummery', {
  	templateUrl: 'partials/viewsummery.html', 
  	controller: 'ExpenseCtrl'
  }).
  otherwise({
  	redirectTo: '/'
  });
}]);
