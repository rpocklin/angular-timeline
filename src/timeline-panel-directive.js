'use strict';

angular.module('angular-timeline').directive('timelinePanel', function() {
  return {
    require: '^timeline',
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<div class="timeline-panel" ng-transclude></div>',
    controller: function($scope, $element, $attrs) {},
    link: function(scope, element, attrs, parentCtrl) {}
  };
});
