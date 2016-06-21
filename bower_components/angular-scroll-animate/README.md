# Angular Scroll Animate

An Angular.js directive which allows you to perform any javascript actions (in the controller, or on the element) when an element is scrolled into or out of, the users viewport, without requiring any other dependencies.

[![Build Status](https://secure.travis-ci.org/rpocklin/angular-scroll-animate.svg)](http:/travis-ci.org/rpocklin/angular-scroll-animate)

# Motivation

`ngAnimate` is great if you want animations based on showing or hiding elements based on some behaviour, but what if you want to trigger behaviour when an element is scrolled into, or out of the user's view?

The goal of this directive is to be small and focused around behaviour that changes when scrolled in and out of view, without requiring jQuery.  You can add / remove CSS classes in the callbacks, or execute any arbitrary javascript you want such as pre-loading of data, images or anything else.

# Demo

[Demo](http://rpocklin.github.io/angular-scroll-animate/example/index.html)

# NG Docs

[link](http://rpocklin.github.io/angular-scroll-animate/docs/#/api/angular-scroll-animate.directive:when-visible)

# Inspiration
- [ngAnimate](https://docs.angularjs.org/api/ngAnimate)
- [angular-inview](https://github.com/thenikso/angular-inview)

## Installation

1. Install the plugin into your Angular.js project, manually or via

  `bower install angular-scroll-animate --save`

1. Include `angular-scroll-animate.js` in your app:

  `<script src="bower_components/angular-scroll-animate/dist/angular-scroll-animate.js"></script>`

1. Add `angular-scroll-animate` as a new module dependency in your angular app.

  `var myapp = angular.module('myapp', ['angular-scroll-animate']);`

1. Ensure you have a CSS class to mask the visibility of an element eg.
  ```css
  .not-visible {
    visibility: hidden;
  }
  ```

  Add this to the elements class if you want it to be hidden initially when out of a user's view,
  and remove it on the `animateElementIn` callback and add it back on `animateElementOut` callback.

Example markup:
  ```html
    <!-- angular view -->
    <div ng-repeat="car in cars"
      when-visible="animateElementIn"
      when-not-visible="animateElementOut" class="hidden car">
    ...
    </div>
  ```

  ```javascript
    // controller
    $scope.cars = [ ... ];

    $scope.animateElementIn = function($el) {
    $el.removeClass('hidden');
    $el.addClass('animated fadeInUp'); // this example leverages animate.css classes
  };

  $scope.animateElementOut = function($el) {
    $el.addClass('hidden');
    $el.removeClass('animated fadeInUp'); // this example leverages animate.css classes
  };
  ```


## Notes

- `when-visible($el)`: [required] function (executed in the controller scope) which is called when the element
  is scrolled into view.
- `when-not-visible($el)`: [optional] function (executed in the controller scope) which is called when the element is
   moved out of view via scrolling.

- `delay-percent="0.50"`: [optional] decimal value which represents how much of the element should be in the users viewport before triggering the bound callback.  `0.25` is set as a default, a lower value will make it more eager, a higher value will make it lazier.

- `bind-scroll-to=".classname"`: [optional] If you are using `overflow: auto` in a container and the elements are not appearing when they should set  replace `classname` with the class you have applied `overflow: auto` to.

-  To ensure fast CSS3 transition rules are used for animations, I recommend either [velocity.js](http://julian.com/research/velocity/) or
  [animate.css](https://daneden.github.io/animate.css/) which come with many pre-built and tested CSS animation classes.

- Default event bindings are on `scroll` `resize` and `orientationchange` of the `document` element this directive is loaded in.


## Running Locally

1. Checkout git repository locally: `git clone git@github.com:rpocklin/angular-scroll-animate.git`
1. `npm install`
1. `bower install`
1. `grunt serve`
1. View `http://localhost:9000/example/` in your browser to see the example.


## Contributing

1. Fork it
1. Create your feature branch (`git checkout -b my-new-feature`)
1. Beautify (`grunt beautify`)
1. Ensure it passes code-checks / tests (`grunt`)
1. Commit your changes (`git commit -am 'Added some feature'`)
1. Push to the branch (`git push origin my-new-feature`)
1. Create a new Pull Request


## History

* 0.9.9 Changed `.hidden` class in example to `.not-visible` to avoid CSS clashes.
* 0.9.8 Added override attribute of `bind-scroll-to` to bind scroll events to custom parents - see [#3](/../../issues/3)).
* 0.9.8 Optimised reflow / repaints to use `requestAnimationFrame` for performance reasons.
* 0.9.4 Re-fixed `when-not-visible` so it is truely optional (thanks @jagged3dge)
* 0.9.3 Changed `Number.isNaN` to use `!angular.isNumber` instead (original function not available in all browsers yet) (see [#2](/../../issues/2)).
* 0.9.2 Fixed error when not defining `when-not-visible` attributes and updated NG Docs (see [#1](/../../issues/1)).
* 0.9.1 Removed (incorrectly) namespaced events, not supported in JQ-Lite.
* 0.9.0 Fixed event unbinding when removing bound elements from the DOM.
* 0.8.0 Initial release


## TODO
- Get more feedback and feedback on different browsers (especially mobile / tablets).
- Add debounce timing
- Consider using events instead?
- Add some tests


## License

Released under the MIT License. See the [LICENSE][license] file for further details.

[license]: https://github.com/rpocklin/angular-timeline/blob/master/LICENSE
