# Angular Timeline

An Angular.JS directive that generates a responsive, data-driven vertical timeline to tell a story, 
show history or describe a sequence of events.

# Demo / Example

[Demo](http://rpocklin.github.io/angular-timeline/example/index.html)

[Demo without bootstrap](http://rpocklin.github.io/angular-timeline/example/index-no-bootstrap.html)

[Original Implementation (HTML / Javascript)](http://bootsnipp.com/snippets/featured/timeline-responsive)

# Inspiration
[1](http://bootsnipp.com/snippets/featured/two-column-timeline-not-responsive)
[2](http://bootsnipp.com/snippets/featured/timeline-single-column)
[3](http://bootsnipp.com/snippets/featured/single-column-timeline)
[4](http://bootsnipp.com/snippets/featured/timeline-with-images-and-tooltip)
[5](http://bootsnipp.com/snippets/featured/timeline-dotted)

## Installation

1. Install the plugin into your Angular.js project, manually or via

  `bower install angular-timeline-responsive --save`

1. Include `angular-timeline.css` in your app:

  `<link rel="stylesheet" href="bower_components/angular-timeline/angular-timeline.css" />`

1. Include `angular-timeline.js` in your app:

  `<script src="bower_components/angular-timeline/angular-timeline.js"></script>`

1. Add `angular-timeline` as a new module dependency in your angular app.

  `var myapp = angular.module('myapp', ['angular-timeline']);`

1. To define a timeline, do the following (either manually or using ng-repeat on a dataset):

  ```
    <timeline>
      <timeline-node side="left">
        <timeline-badge class="info"><i class="glyphicon glyphicon-check"></i>
        </timeline-badge>
        <timeline-panel>
          <timeline-heading>
            <timeline-title>Some twitter post</timeline-title>
            <p>
              <small class="text-muted"><i class="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small>
            </p>
          </timeline-heading>
          <timeline-content>
            <p>Twitter post goes here</p>
          </timeline-content>
        </timeline-panel>
      </timeline-node>
      <timeline-node side="right">
        <timeline-badge class="warning"><i class="glyphicon glyphicon-credit-card"></i>
        </timeline-badge>
        <timeline-panel>
          <timeline-heading>
            <timeline-title>Another twitter post</timeline-title>
            <p>
              <small class="text-muted">12 hours ago via Twitter</small>
            </p>
          </timeline-heading>
          <timeline-content>
            <p>Another twitter post goes here</p>
          </timeline-content>
        </timeline-panel>
      </timeline-node>
    </timeline>
  ```

Yes, there is a bit of markup here, but `<timeline-content>` and `<timeline-heading>` are optional.

`timeline-badge` is for the centre line between the two sides, and should represent the event type that occured.

I had also added an optional `<timeline-footer>` to go after `<timeline-content>` for links and other info.


## Notes

- You can use the `side=left` or `side=right` attribute on the `<timeline-node>` element to float the timeline panels left or right accordingly. (when < 768px in width it will push all `<timeline-node>` elements to the right).

- You can use either the SASS styles directly file under `/src` or the compiled CSS files, up to you :)

- If you are using Bootstrap 3 it affects the timeline CSS, so include `angular-timeline-bootstrap.[css|scss]}` to re-adjust the offsets e.g:

```html
  <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css" />
  <script src="bower_components/angular-timeline/angular-timeline.js"></script>
  <script src="bower_components/angular-timeline/angular-timeline-bootstrap.js"></script>
```


## Running Locally

1. Checkout git repository locally: `git clone git@github.com:rpocklin/angular-timeline.git`
1. `npm install`
1. `bower install`
1. `grunt serve`
1. View `http://localhost:9000/example/` in your browser to see the example.


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Make your changes, run `grunt karma` to ensure all tests pass.  (Ideally add more tests!)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request


## History

1.0.0 Initial release


## TODO

- Add some tests
- Add some examples with ng-repeat based on JSON datasets.

## Thanks
luisrudge for the original vanilla JS implementation on [Bootsnipp](http://bootsnipp.com/snippets/featured/timeline-responsive)


## License

Released under the MIT License. See the [LICENSE][license] file for further details.

[license]: https://github.com/rpocklin/angular-timeline/blob/master/LICENSE
