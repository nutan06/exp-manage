'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('HomeCtrl',
   ['$scope','$location', 
   function($scope, $location) {
      $scope.login = function() {
    $location.path('/add-expense');
  } 

  $scope.register = function() {
    $location.path('/add-expense');
  }  

  }])
  
  .controller('ExpenseCtrl', ['$scope', 'categoryList',function(
    $scope, categoryList,$location) {
        $scope.categories=categoryList;
        
    }])
   .controller('ViewSummeryCtrl', ['$scope', '$http', 'categoryList',
        function($scope,$http,$q, categoryList) {
            $scope.getExpense=function(){
              $http.get("expense.js")
              .success(function(data){
                $scope.expense=data.expense;
              });
            }
        }
    ]);
  
