'use strict';

/**
 * @ngdoc directive
 * @name angular-timeline
 * @restrict AE
 *
 * @description
 * Primary container for displaying a vertical set of timeline events.
 */
angular.module('angular-timeline').directive('timeline', function() {
  return {
    restrict: 'AE',
    transclude: true,
    template: '<ul class="timeline" ng-transclude></ul>',
    controller: function() {}
  };
});
