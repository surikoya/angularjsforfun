(function() {
  "use strict";

  var lunchController = function($scope) {
    //console.log($scope);

    $scope.validate = function() {
      console.log($scope.lunchMenu);
    };
  };
  lunchController.$inject =['$scope'];

  angular.module('lunch-checkr', [])
  .controller('lunchController', lunchController);

})()
