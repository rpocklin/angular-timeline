'use strict';

angular.module('angular-timeline').directive('timeline', function() {
  return {
    restrict: 'AE',
    transclude: true,
    template: '<ul class="timeline" ng-transclude></ul>'
  };
});
