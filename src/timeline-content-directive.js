'use strict';

angular.module('angular-timeline').directive('timelineContent', function() {
  return {
    require: '^timelinePanel',
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<div class="timeline-body" ng-transclude></div>',
    controller: function($scope, $element, $attrs) {},
    link: function(scope, element, attrs, parentCtrl) {}
  };
});
