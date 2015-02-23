'use strict';

angular.module('angular-timeline').directive('timelineContent', function() {
  return {
    require: '^timelinePanel',
    restrict: 'AE',
    replace: true,
    transclude: true,
    template: '<div class="timeline-body" ng-transclude></div>'
  };
});
