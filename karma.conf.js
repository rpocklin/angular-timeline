// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/q  unit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files:      [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-bootstrap/ui-bootstrap.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/underscore/underscore.js',
      'bower_components/sinonjs/sinon.js',
      'bower_components/jasmine-sinon/lib/jasmine-sinon.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'src/**/*.html',
      'src/**/*.js'
    ],

    exclude:   [],
    port: 8080,
    logLevel:  config.LOG_INFO,
    singleRun: true,
    autoWatch: false,

    // coverage reporter generates the coverage
    reporters: ['progress', 'coverage'],

    preprocessors:    {
      'src/!(*spec).js': ['coverage'],
      'src/**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      // you might need to strip the main directory prefix in the URL request
      stripPrefix: 'src/',
      moduleName: 'templates'
    },

    // optionally, configure the reporter
    coverageReporter: {
      dir: 'coverage',
      subdir: '.',
      reporters: [
        {type: 'text-summary'},
        {type: 'lcov'},
        {type: 'clover'}
      ]
    }
  });
};

