'use strict';

var app = angular.module('example', [
  'ui.router',
  'angular-timeline'
]);

app.config(function($stateProvider) {
  $stateProvider.state('user', {
    url:         '',
    controller: 'ExampleCtrl',
    templateUrl: 'example.html'
  });
});
