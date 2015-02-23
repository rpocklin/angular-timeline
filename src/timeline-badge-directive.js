'use strict';

angular.module('angular-timeline').directive('timelineBadge', function() {
  return {
    require: '^timelineNode',
    restrict: 'AE',
    replace: true,
    transclude: true,
    template: '<div ng-transclude class="timeline-badge"></div>'
  };
});
