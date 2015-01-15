'use strict';

var ExampleCtrl = function($rootScope, $scope) {

  $scope.initialise = function() {
    $scope.order = [
      { state: 'created', description: 'Created online via Ebay', on: '1/1/15' },
      { state: 'packaged', description: 'Created online via Ebay', on: '2/1/15' },
      { state: 'sent', description: 'Created online via Ebay', on: '4/1/15' },
      { state: 'delivered', description: 'Confirmed delivery via EMS', on: '6/1/15' }
    ]
  };

  $scope.initialise();
};

angular.module('example').controller('ExampleCtrl', ExampleCtrl);
