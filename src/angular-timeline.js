'use strict';
angular.module('angular-timeline', []);// Source: src/timeline-badge-directive.js
angular.module('angular-timeline').directive('timelineBadge', function() {
  return {
    require: '^timelineNode',
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<div ng-transclude class="timeline-badge"></div>',
    link: function(scope, element, attrs, parentCtrl) {}
  };
});

// Source: src/timeline-content-directive.js
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

// Source: src/timeline-directive.js
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

// Source: src/timeline-footer-directive.js
angular.module('angular-timeline').directive('timelineFooter', function() {
  return {
    require: '^timelineContent',
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<div class="timeline-footer" ng-transclude></div>',
    link: function(scope, element, attrs, parentCtrl) {}
  };
});

// Source: src/timeline-heading-directive.js
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

// Source: src/timeline-node-directive.js
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

// Source: src/timeline-panel-directive.js
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

// Source: src/timeline-title-directive.js
angular.module('angular-timeline').directive('timelineTitle', function() {
  return {
    require: '^timelineHeading',
    restrict: 'E',
    replace: true,
    transclude: true,
    template: '<h4 class="timeline-title" ng-transclude></h4>'
  };
});
