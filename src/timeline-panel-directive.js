'use strict';

/**
 * @ngdoc directive
 * @name angular-timeline.directive:timeline-panel
 * @restrict AE
 *
 * @description
 * An panel inside the `timeline-event` which shows detailed information about the event.
 */
angular.module('angular-timeline').directive('timelinePanel', function() {
  return {
    require: '^timeline',
    restrict: 'AE',
    transclude: true,
    template: '<div class="timeline-panel" ng-transclude></div>'
  };
});
