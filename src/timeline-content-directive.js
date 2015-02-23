'use strict';

angular.module('angular-timeline').directive('timelineContent', function() {
  return {
    require: '^timelinePanel',
    restrict: 'AE',
    transclude: true,
    template: '<div class="timeline-body" ng-transclude></div>'
  };
});
