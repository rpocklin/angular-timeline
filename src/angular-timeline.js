'use strict';
angular.module('angular-timeline', []);// Source: src/timeline-badge-directive.js
angular.module('angular-timeline').directive('timelineBadge', function() {
  return {
    require: '^timelineNode',
    restrict: 'AE',
    replace: true,
    transclude: true,
    template: '<div ng-transclude class="timeline-badge"></div>'
  };
});

// Source: src/timeline-content-directive.js
angular.module('angular-timeline').directive('timelineContent', function() {
  return {
    require: '^timelinePanel',
    restrict: 'AE',
    replace: true,
    transclude: true,
    template: '<div class="timeline-body" ng-transclude></div>'
  };
});

// Source: src/timeline-directive.js
angular.module('angular-timeline').directive('timeline', function() {
  return {
    restrict: 'AE',
    replace: true,
    transclude: true,
    template: '<ul class="timeline" ng-transclude></ul>'
  };
});

// Source: src/timeline-footer-directive.js
angular.module('angular-timeline').directive('timelineFooter', function() {
  return {
    require: '^timelineContent',
    restrict: 'AE',
    replace: true,
    transclude: true,
    template: '<div class="timeline-footer" ng-transclude></div>'
  };
});

// Source: src/timeline-heading-directive.js
angular.module('angular-timeline').directive('timelineHeading', function() {
  return {
    require: '^timelinePanel',
    restrict: 'AE',
    replace: true,
    transclude: true,
    template: '<div class="timeline-heading" ng-transclude></div>'
  };
});

// Source: src/timeline-node-directive.js
angular.module('angular-timeline').directive('timelineNode', function() {
  return {
    require: '^timeline',
    scope: {
      side: '@'
    },
    restrict: 'AE',
    replace: true,
    transclude: true,
    template: '<li ng-class="{\'timeline-inverted\': side == \'right\'}" ng-transclude></li>'
  };
});

// Source: src/timeline-panel-directive.js
angular.module('angular-timeline').directive('timelinePanel', function() {
  return {
    require: '^timeline',
    restrict: 'AE',
    replace: true,
    transclude: true,
    template: '<div class="timeline-panel" ng-transclude></div>'
  };
});

// Source: src/timeline-title-directive.js
angular.module('angular-timeline').directive('timelineTitle', function() {
  return {
    require: '^timelineHeading',
    restrict: 'AE',
    replace: true,
    transclude: true,
    template: '<h4 class="timeline-title" ng-transclude></h4>'
  };
});
