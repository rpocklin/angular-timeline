'use strict';

angular.module('angular-timeline').directive('timelineFooter', function() {
  return {
    require: '^timelineContent',
    restrict: 'AE',
    transclude: true,
    template: '<div class="timeline-footer" ng-transclude></div>'
  };
});
