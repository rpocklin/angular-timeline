'use strict';

/**
 * @ngdoc directive
 * @name angular-timeline.directive:timeline-footer
 * @restrict AE
 *
 * @description
 * Optional element to add a footer section to the `timeline-panel` for links or other actions.
 */
angular.module('angular-timeline').directive('timelineFooter', function() {
  return {
    require: '^timelinePanel',
    restrict: 'AE',
    transclude: true,
    template: '<div class="timeline-footer" ng-transclude></div>'
  };
});
