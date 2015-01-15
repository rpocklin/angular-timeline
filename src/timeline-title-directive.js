'use strict';

angular.module('angular-timeline').directive('timelineTitle', function() {
  return {
    require: '^timelineHeading',
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<h4 class="timeline-title" ng-transclude></h4>'
  };
});
