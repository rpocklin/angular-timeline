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
 *
 * @param {string=} side  Define the side of the element (i.e. side="left", side="right", or use an expression).
 */
angular.module('angular-timeline').directive('timelineEvent', function() {
  return {
    require: '^timeline',
    restrict: 'AE',
    transclude: true,
    template: '<li ng-class-even="{\'timeline-inverted\': defaultLayout}" ng-transclude></li>',
    link: function(scope, element, attrs) {

      if ('undefined' !== typeof attrs.side) {
        var liElt = element.find('li');
        switch (attrs.side) {
          case 'right':
            liElt.addClass('timeline-inverted');
            break;
          default:
            liElt.removeClass('timeline-inverted');
        }
      }
      else {
        scope.defaultLayout = true;
      }

    }
  };
});
