'use strict';

angular.module('angular-timeline').directive('timelineFooter', function() {
  return {
    require: '^timelineContent',
    restrict: 'AE',
    replace: true,
    transclude: true,
    template: '<div class="timeline-footer" ng-transclude></div>'
  };
});
