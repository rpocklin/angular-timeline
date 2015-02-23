'use strict';

angular.module('angular-timeline').directive('timeline', function() {
  return {
    restrict: 'AE',
    replace: true,
    transclude: true,
    template: '<ul class="timeline" ng-transclude></ul>'
  };
});
