'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('HomeCtrl',
   ['$scope','$location', 
   function($scope, $location, $firebaseSimpleLogin, Authentication) {
      $scope.login = function() {
    Authentication.login($scope.user)
      .then(function(user) {
      $location.path('/add-expense');
    }, function(error) {
      $scope.message = error.toString();
    });
  } 

  $scope.register = function() {
    Authentication.register($scope.user)
      .then(function(user) {
      Authentication.login($scope.user);
      $location.path('/add-expense');
    }, function(error) {
      $scope.message = error.toString();
    });
  }  

  }])
  
  .controller('ExpenseCtrl', ['$scope', '$firebase',function(
    $scope, categoryList, $firebase, $routeParams,
  $firebaseSimpleLogin, $location, FIREBASE_URL) {
        
    }]);
  
