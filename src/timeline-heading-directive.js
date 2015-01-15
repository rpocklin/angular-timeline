'use strict';

angular.module('angular-timeline').directive('timelineHeading', function() {
  return {
    require: '^timelinePanel',
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<div class="timeline-heading" ng-transclude></div>',
    controller: function($scope, $element, $attrs) {},
    link: function(scope, element, attrs, parentCtrl) {}
  };
});
