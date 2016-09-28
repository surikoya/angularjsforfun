(function() {
  "use strict";

  var ToBuyController = function(ShoppingListCheckOffService) {
    this.toBuyItems = function() {
      return ShoppingListCheckOffService.getToBuyItems();
    };

    this.moveToBoughtList = function(idx) {
      ShoppingListCheckOffService.addToBoughtList(idx);
    }

    this.allItemsBought = function() {
      return ShoppingListCheckOffService.getToBuyItems().length === 0;
    }

  };
  ToBuyController.$inject =['ShoppingListCheckOffService'];

  var AlreadyBoughtController = function($scope, ShoppingListCheckOffService) {
    this.getBoughtItems = function() {
      return ShoppingListCheckOffService.getBoughtItems();
    };
  };
  AlreadyBoughtController.$inject =['$scope', 'ShoppingListCheckOffService'];

  var ShoppingListCheckOffService = function() {
    this.toBuyItems = [{"quantity": 2, "name": "Milk Can"},
    {"quantity": 2, "name": "Bread packet"},
    {"quantity": 1, "name": "Dozen egg"},
    {"quantity": 2, "name": "Pumpkin"},
    {"quantity": 2, "name": "Squash"}
    ];
    this.boughtItems = [];
    this.getToBuyItems = function() {
      return this.toBuyItems;
    };
    this.getBoughtItems = function() {
      return this.boughtItems;
    };

    this.addToBoughtList = function(idx) {
      this.boughtItems.push(this.toBuyItems.splice(idx,1)[0]);
      console.log('bought items', this.boughtItems);
    };
  };
  angular.module('ShoppingListCheckOff', [])
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController);

})()
