'use strict';

angular.module('angular-timeline').directive('timelineHeading', function() {
  return {
    require: '^timelinePanel',
    restrict: 'AE',
    replace: true,
    transclude: true,
    template: '<div class="timeline-heading" ng-transclude></div>'
  };
});
