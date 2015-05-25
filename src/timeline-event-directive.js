'use strict';

angular.module('angular-timeline').directive('timelineEvent', function() {
  return {
    require: '^timeline',
    scope: {
      side: '@'
    },
    restrict: 'AE',
    transclude: true,
    template: '<li ng-class="{\'timeline-inverted\': side == \'right\'}" ng-transclude></li>'
  };
});
