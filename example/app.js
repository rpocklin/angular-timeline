'use strict';

var app = angular.module('example', [
	'ngSanitize',
  'ui.router',
  'angular-timeline',
	'angular-scroll-animate'
]);

app.config(function($stateProvider) {
  $stateProvider.state('user', {
    url:         '',
    controller: 'ExampleCtrl',
    templateUrl: 'example.html'
  });
});
