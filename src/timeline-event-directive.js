'use strict';

/**
 * @ngdoc directive
 * @name angular-timeline.directive:timeline
 * @restrict AE
 *
 * @description
 * Represents an event occuring at a point in time, displayed on the left or the right
 * of the timeline line.
 *
 * You typically embed a `timeline-badge` and `timeline-panel` element within a `timeline-event`.
 */
angular.module('angular-timeline').directive('timelineEvent', function() {
  return {
    require: '^timeline',
    restrict: 'AE',
    transclude: true,
    template: '<li ng-class-even="\'timeline-inverted\'" ng-transclude></li>'
  };
});
