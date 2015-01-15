'use strict';

angular.module('angular-timeline').directive('timeline', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<ul class="timeline" ng-transclude></ul>',
    controller: function($scope, $element, $attrs) {},
    link: function(scope, element, attrs, parentCtrl) {}
  };
});
