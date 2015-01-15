'use strict';

angular.module('angular-timeline').directive('timelineNode', function() {
  return {
    require: '^timeline',
    scope: {
      side: '@'
    },
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<li ng-class="{\'timeline-inverted\': side == \'right\'}" ng-transclude></li>',
    controller: function($scope, $element, $attrs) {},
    link: function(scope, element, attrs, parentCtrl) {}
  };
});
