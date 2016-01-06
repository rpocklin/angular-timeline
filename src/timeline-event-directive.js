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
 * @param {string=} side  Define the side of the element (i.e. side="left", side="right", or use an {{ expression }}).
 */

angular.module('angular-timeline').directive('timelineEvent', function() {
  return {
    require: '^timeline',
    restrict: 'AE',
    transclude: true,
    template: '<li ng-class-odd="oddClass" ng-class-even="evenClass" ng-transclude></li>',
    link: function(scope, element, attrs, controller) {

      var checkClass = function(side, leftSide) {

        var leftClass = '';
        var rightClass = 'timeline-inverted';

        if (side === 'left' || (!side && leftSide === true)) {
          return leftClass;
        }
        else if ((side === 'alternate' || !side) && leftSide === false) {
          return rightClass;
        }
        else if (side === 'right') {
          return rightClass;
        }
        else {
          return leftClass;
        }
      };

      var updateRowClasses = function(value) {
        scope.oddClass = checkClass(value, true);
        scope.evenClass = checkClass(value, false);
      };

      attrs.$observe('side', function(newValue) {
        updateRowClasses(newValue);
      });

      updateRowClasses(attrs.side);
    }
  };
});
