'use strict';

angular.module('angular-timeline').directive('timelineFooter', function() {
  return {
    require: '^timelineContent',
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<div class="timeline-footer" ng-transclude></div>',
    link: function(scope, element, attrs, parentCtrl) {}
  };
});
