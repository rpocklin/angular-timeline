'use strict';

angular.module('angular-timeline').directive('timelineBadge', function() {
  return {
    require: '^timelineNode',
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<div ng-transclude class="timeline-badge"></div>',
    link: function(scope, element, attrs, parentCtrl) {}
  };
});
