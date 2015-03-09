'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    connect: {
             server: {
               options: {
                 port: 9000
               }
             }
    },

    watch: {
           scripts: {
                    files: ['src/**/*'],
                    tasks: ['build'],
                    options: {
                             spawn: false
                    }
           }

    },

    clean: ['src/angular-timeline.js'],

    concat: {
      dist: {
        // Replace all 'use strict' statements in the code with a single one at the top
        options: {

          banner: "'use strict';\nangular.module('angular-timeline', []);",
          process: function(src, filepath) {
            return '// Source: ' + filepath + '\n' +
            src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
          }
        },
        src: ['src/*.js'],
        dest: 'src/angular-timeline.js'
      },
    },

    sass: {
      dist: {
        files: {
          'src/angular-timeline.css':'src/angular-timeline.scss',
          'src/angular-timeline-bootstrap.css':'src/angular-timeline-bootstrap.scss'
        }
      }
    },

    // verifies we have formatted our js and HTML according to our style conventions
    jsbeautifier: {
      files:   ['!Gruntfile.js', '!npm-shrinkwrap.json', 'src/**/*.{html,js}', '!app/bower_components/**/*'],
      options: {
        mode: 'VERIFY_ONLY',
        js:   {
          'indent_size':               2,
          'indent_char':               ' ',
          'indent_level':              0,
          'indent_with_tabs':          false,
          'preserve_newlines':         true,
          'max_preserve_newlines':     2,
          'jslint_happy':              false,
          'brace_style':               'end-expand',
          'indent_scripts':            'keep',
          'keep_array_indentation':    true,
          'keep_function_indentation': false,
          'space_before_conditional':  true,
          'break_chained_methods':     false,
          'eval_code':                 false,
          'unescape_strings':          false,
          'wrap_line_length':          0
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint:       {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      src:     ['src/!(*spec).js']
    },

    // Test settings
    karma:        {
      unit: {
        options:    {
          logLevel: 'DEBUG'
        },
        browsers:   ['PhantomJS'],
        configFile: 'karma.conf.js',
        singleRun:  true,
        autoWatch:  false
      }
    },
    coveralls: {
      options: {
        coverage_dir:'coverage',
        directory:'coverage/PhantomJS 1.9.7 (Mac OS X)/lcov.info',
        debug: true,
        dryRun: false,
        recursive: false
      }
    }
  });

  grunt.registerTask('serve', ['build','connect', 'watch']);

  grunt.registerTask('build', [
    'clean', 'sass', 'jsbeautifier', 'jshint', 'concat', //'karma'
  ]);

  grunt.registerTask('default', [
    'build'
    //, 'coveralls'
  ]);
};
