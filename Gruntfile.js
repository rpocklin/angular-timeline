'use strict';

module.exports = function(grunt) {

	var moduleName = 'angular-timeline';

	var beautifyFiles = ['!Gruntfile.js', '!npm-shrinkwrap.json', 'src/**/*.{html,js}', '!app/bower_components/**/*'];

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
                    tasks: ['beautify', 'build'],
                    options: {
                             spawn: false
                    }
           }

    },

    clean: ['dist/', 'docs/'],

    concat: {
      dist: {
        // Replace all 'use strict' statements in the code with a single one at the top
        options: {

          banner: "'use strict';\nangular.module('" + moduleName + "', []);",
          process: function(src, filepath) {
            return '// Source: ' + filepath + '\n' +
            src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
          }
        },
        src: ['src/*.js'],
        dest: 'dist/angular-timeline.js'
      }
    },

    sass: {
      dist: {
        files: {
          'dist/angular-timeline.css':'src/angular-timeline.scss',
          'dist/angular-timeline-bootstrap.css':'src/angular-timeline-bootstrap.scss',
          'dist/angular-timeline-animations.css':'src/angular-timeline-animations.scss'
        }
      }
    },

	  ngdocs: {

		  options: {
		    dest: 'docs',
		    html5Mode: false,
		    title: 'Angular Timeline',
			  startPage: '/api/timeline'
		  },
		  api: {
		  	 src: ['dist/**/*.js'],
		  	 title: 'API'
		  }
	  },

	  // verifies we have formatted our js and HTML according to our style conventions
	  jsbeautifier: {
		  verify : {
			  src:   beautifyFiles,
			  options: {
				  config: '.jsbeautifyrc',
				  mode: 'VERIFY_ONLY'
			  }
		  },
		  update: {
			  src:   beautifyFiles,
			  options: {
				  config: '.jsbeautifyrc'
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
	grunt.registerTask('beautify', ['jsbeautifier:update']);
  grunt.registerTask('build', [
    'clean', 'sass', 'jsbeautifier:verify', 'jshint', 'concat', 'ngdocs' //'karma'
  ]);

  grunt.registerTask('default', [
    'build'
    //, 'coveralls'
  ]);
};
