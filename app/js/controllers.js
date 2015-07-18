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
  
  .controller('ExpenseCtrl', ['$scope', 'categoryList','expense',function(
    $scope, categoryList,$location) {
        $scope.categories=categoryList;
        $scope.submit = function(){
          $scope.data.expense.push({
            date : $scope.date,
            category : $scope.category,
            amount : $scope.amount,
            description : $scope.description
            /*console.log ("values submitted");*/
          });
          $scope.resetForm(form);
          $location.path('/viewsummery');
        }
    }])
   .controller('ViewSummeryCtrl', ['$scope', 'categoryList','expense',
        function($scope, categoryList) {
            $scope.getExpense=function(){
             $scope.data=$scope.data || {};
             $scope.data.expenses= $scope.data.expenses ||[];
              };
            }
       
    ]);
  
