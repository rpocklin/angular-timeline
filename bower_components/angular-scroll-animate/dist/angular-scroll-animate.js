'use strict';
angular.module('angular-scroll-animate', []);// Source: src/angular-scroll-animate.js
/**
 * @ngdoc directive
 * @name angular-scroll-animate.directive:when-visible
 * @restrict A
 *
 * @description
 * Allows method hooks into the detection of when an element is scrolled into or out of view.
 */
angular.module('angular-scroll-animate', []).directive('whenVisible', ['$document', '$window',
 function($document, $window) {

    var determineWhereElementIsInViewport =
      function($el, viewportHeight, whenVisibleFn, whenNotVisibleFn, delayPercent, scope) {

        var elementBounds = $el[0].getBoundingClientRect();

        var panelTop = elementBounds.top;
        var panelBottom = elementBounds.bottom;

        // pixel buffer until deciding to show the element
        var delayPx = delayPercent * elementBounds.height;

        var bottomVisible = (panelBottom - delayPx > 0) && (panelBottom < viewportHeight);
        var topVisible = (panelTop + delayPx <= viewportHeight) && (panelTop > 0);

        if ($el.data('hidden') && bottomVisible || topVisible) {
          whenVisibleFn($el, scope);
          $el.data('hidden', false);
        }

        // scrolled out from scrolling down or up
        else if (!($el.data('hidden')) && (panelBottom < 0 || panelTop > viewportHeight)) {
          whenNotVisibleFn($el, scope);
          $el.data('hidden', true);
        }
      };

    return {
      restrict: 'A',
      scope: {
        whenVisible: '&',
        whenNotVisible: '&?',
        delayPercent: '=?'
      },

      controller: ['$scope', function(scope) {
        if (!scope.whenVisible || !angular.isFunction(scope.whenVisible())) {
          throw new Error('Directive: angular-scroll-animate \'when-visible\' attribute must specify a function.');
        }

        if (scope.whenNotVisible && !angular.isFunction(scope.whenNotVisible())) {
          throw new Error('Directive: angular-scroll-animate \'when-not-visible\' attribute must specify a function.');
        }

        if (scope.delayPercent) {

          var delayPercent = parseFloat(scope.delayPercent);

          if ((Number.isNaN(delayPercent)) || (delayPercent < 0 || delayPercent > 1)) {
            throw new Error('Directive: angular-scroll-animate \'delay-percent\' attribute must be a decimal fraction between 0 and 1.');
          }
        }
    }],

      link: function(scope, el, attributes) {

        var delayPercent = attributes.delayPercent || 0.25; // lower = more eager to hide / show, higher = less eager

        var onScroll = function() {

          var document = $document[0].documentElement;
          var viewportHeight = document.clientHeight;

          determineWhereElementIsInViewport(el, viewportHeight,
            scope.whenVisible(), scope.whenNotVisible(), delayPercent, scope);
        };

        var unbindDocumentEvents = $document.on('scroll', onScroll);
        var unbindWindowEvents = angular.element($window).on('resize orientationchange', onScroll);

        scope.$on('$destroy', unbindDocumentEvents);
        scope.$on('$destroy', unbindWindowEvents);

        // initialise
        el.data('hidden', true);
        scope.$evalAsync(onScroll);
      }
    };
 }]);
