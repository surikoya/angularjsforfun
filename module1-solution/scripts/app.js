(function() {
  "use strict";
  const MESG_TOO_MUCH = 'Too Much!';
  const MESG_ENJOY = 'Enjoy!';
  const MESG_INVALID = 'Please enter data first!';

  var LunchCheckController = function($scope) {
    $scope.lunchState = "none";
    $scope.isValid = function() {
        return this.lunchState;
    };
    $scope.checkQuantity = function() {
      var lunchItems = $scope.lunchMenu;
      const items = (lunchItems || '').split(',');
      const itemCount = items.reduce(function(previous, item, idx ) {
        if (item && item.trim().length > 0)
          return previous + 1
        else
          return previous;
      }, 0);
      if (itemCount === 0) {
        $scope.message = MESG_INVALID;
        $scope.lunchState = "invalid";
      }
      if (itemCount > 0) {
        $scope.lunchState = "valid";
        if (itemCount <=3) {
          $scope.message = MESG_ENJOY;
        } else {
          $scope.message = MESG_TOO_MUCH;
        }
      }
    };
  };
  LunchCheckController.$inject =['$scope'];

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

})()
