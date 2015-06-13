'use strict';

/* Services */
angular.module('myApp.services', [])
.value('categoryList',["House","Electricity","Water/Trash","Education", "Fuel", "Grocery", "Entertainment"])
.factory('expService',[function() {
    var prefix = 'exp-mgr';
    return {
      saveExpense: function(data) {
        var timeStamp = Math.round(new Date().getTime());
        var key = prefix + timeStamp;
      
        data = JSON.stringify(data);
        localStorage[key] = data;
      }
    };
}]);