'use strict';

/**
 * @ngdoc directive
 * @name angular-timeline.directive:timeline-row
 * @restrict AE
 *
 * @description
 * Represents an event occuring at a point in time, displayed on the left or the right
 * of the timeline line.
 *
 * You typically embed a `timeline-badge` and `timeline-panel` element within a `timeline-event`.
 *
 * @param {string=} side  Define the side of the element (i.e. side="left", side="right", or use an {{ expression }}).
 */

angular.module('angular-timeline').directive('timelineRow', function() {
  return {
    require: '^timeline',
    restrict: 'AE',
    transclude: true,
    template: '<li class="timeline-row" ng-transclude></li>',
    link: function(scope, element, attrs, controller) {}
  };
});
