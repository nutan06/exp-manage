'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('HomeCtrl', ['$scope','$location', function($scope,$location) {
       $scope.login=function(){
         $location.path('/add-expense');
       }
       $scope.register=function(){
         $location.path('/add-expense');
       }
  }])
  .controller('AddExpenseCtrl', ['$scope', 'categoryList','expService',function($scope, categoryList,expService) {
        $scope.categories = categoryList;
            $scope.submit = function() {
      
      expService.saveExpense($scope.expense);
    };
    }
])
  .controller('ViewSummaryCtrl', ['$scope', 'expService',function($scope, expService) {
       
    }
]);
