'use strict';

angular.module('angular-timeline').directive('timelineBadge', function() {
  return {
    require: '^timelineNode',
    restrict: 'AE',
    transclude: true,
    template: '<div ng-transclude class="timeline-badge"></div>'
  };
});
