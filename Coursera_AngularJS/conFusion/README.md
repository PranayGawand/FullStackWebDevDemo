Initialize package.json File

Next, update the package.json file in the conFusion folder with the following content:

    {
      "name": "conFusion",
      "private": true,
      "devDependencies": {

      },
      "engines": {
        "node": ">=0.10.0"
      }
    }
    
Installing Gulp

Note: You should already have Node and NPM installed on your computer before you proceed further. Also, those using OSX or Linux should use sudo while installing global packages in node (when you use the -g flag).

At the command prompt, type the following to install Gulp command-line interface (CLI) globally:

     npm install -g gulp
     
This will install the Gulp globally so that you can use it in all projects.

Next install Gulp to use within your project. To do this, go to the conFusion folder and type the following at the prompt:

     npm install gulp --save-dev
     
This will install local per-project Gulp to use within your project.

Install Gulp Plugins

Install all the Gulp plugins that you will need for this exercise. To do this, type the following at the command prompt:

    npm install jshint gulp-jshint jshint-stylish gulp-imagemin gulp-concat gulp-uglify gulp-minify-css gulp-usemin gulp-cache gulp-changed gulp-rev gulp-rename gulp-notify  browser-sync del --save-dev
    
Creating a Gulp File

Next you need to create a Gulp file containing the tasks to be run when you use Gulp. To do this, create a file named gulpfile.js in the conFusion folder.
Loading Gulp Plugins

Load in all the Gulp plugins by including the following code in the Gulp file:

    var gulp = require('gulp'),
        minifycss = require('gulp-minify-css'),
        jshint = require('gulp-jshint'),
        stylish = require('jshint-stylish'),
        uglify = require('gulp-uglify'),
        usemin = require('gulp-usemin'),
        imagemin = require('gulp-imagemin'),
        rename = require('gulp-rename'),
        concat = require('gulp-concat'),
        notify = require('gulp-notify'),
        cache = require('gulp-cache'),
        changed = require('gulp-changed'),
        rev = require('gulp-rev'),
        browserSync = require('browser-sync'),
        del = require('del');
    
Adding Gulp Tasks

Next, we will add the code for the JSHint task, the Clean task and the default task as follows:

    gulp.task('jshint', function() {
      return gulp.src('app/scripts/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter(stylish));
    });

    // Clean
    gulp.task('clean', function() {
        return del(['dist']);
    });

    // Default task
    gulp.task('default', ['clean'], function() {
        gulp.start('usemin', 'imagemin','copyfonts');
    });
    
Next, paste in the code for the usemin, imagemin and copyfonts tasks:

    gulp.task('usemin',['jshint'], function () {
      return gulp.src('./app/menu.html')
          .pipe(usemin({
            css:[minifycss(),rev()],
            js: [uglify(),rev()]
          }))
          .pipe(gulp.dest('dist/'));
    });

    // Images
    gulp.task('imagemin', function() {
      return del(['dist/images']), gulp.src('app/images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/images'))
        .pipe(notify({ message: 'Images task complete' }));
    });

    gulp.task('copyfonts', ['clean'], function() {
       gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
       .pipe(gulp.dest('./dist/fonts'));
       gulp.src('./bower_components/bootstrap/dist/fonts/**/*.{ttf,woff,eof,svg}*')
       .pipe(gulp.dest('./dist/fonts'));
    });
    
Finally, we add the code for the watch and browserSync tasks:

    // Watch
    gulp.task('watch', ['browser-sync'], function() {
      // Watch .js files
      gulp.watch('{app/scripts/**/*.js,app/styles/**/*.css,app/**/*.html}', ['usemin']);
          // Watch image files
      gulp.watch('app/images/**/*', ['imagemin']);

    });

    gulp.task('browser-sync', ['default'], function () {
       var files = [
          'app/**/*.html',
          'app/styles/**/*.css',
          'app/images/**/*.png',
          'app/scripts/**/*.js',
          'dist/**/*'
       ];

       browserSync.init(files, {
          server: {
             baseDir: "dist",
             index: "menu.html"
          }
       });
            // Watch any files in dist/, reload on change
      gulp.watch(['dist/**']).on('change', browserSync.reload);
        });
        
Save the Gulp file
Running the Gulp Tasks

At the command prompt, if you type gulp it will run the default task:

     gulp
     
Using BrowserSync and Watch

We configured the BrowserSync and the Watch tasks in the Gulp file. To use them, type the following at the command prompt:

     gulp watch
     
You may need to reload the page in the browser.

You can edit the menu.html file in the app folder and see the watch task and BrowserSync action in reloading the updated page.

Conclusions

In this exercise, you learnt to use Gulp, install Gulp plugins, configure the gulpfile.js and then use Gulp to automate the web development tasks.



-----------------------------------------------

Setting up the Unit Test Environment

First, set up Jasmine core to be available for use within your project:

     npm install jasmine-core --save-dev

Then, set up the Karma command line tools globally as follows:

     npm install karma-cli -g
     
Remember to use sudo if you are in OSX or Linux environments.

Then set up karma-jasmine plugin to make use of Jasmine with Karma:

     npm install karma-jasmine --save-dev
     
In order to set up browser environments to carry out the tests, set up PhantomJS, and Karma launchers for PhantomJS and Chrome as follows:

     npm install phantomjs karma-phantomjs-launcher karma-chrome-launcher --save-dev
     
You can also set up for Firefox, IE and Safari if you use these browsers.

Setting up Angular Mocks

You should also install the ngMock module as follows:

     bower install angular-mocks -S
     
Unit Testing of MenuController

Next, we will configure Karma to conduct the unit test. First, create a folder in conFusion folder, named test.
Move to the test folder, and create a file named karma.conf.js there. This file will contain the configuration information for the Karma tests. Add the following configuration to the file:

    // Karma configuration

    module.exports = function(config) {
      config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

      })
    }
    
Next, add the list of files to be included, and those to be excluded into the config as follows:

        // list of files / patterns to load in the browser
        files: [
          'bower_components/angular/angular.js',
          'bower_components/angular-resource/angular-resource.js',
          'bower_components/angular-ui-router/release/angular-ui-router.js',
          'bower_components/angular-mocks/angular-mocks.js',
          'app/scripts/*.js',
          'test/unit/**/*.js'
        ],

        // list of files to exclude
        exclude: [
        'test/protractor.conf.js', 'test/e2e/*.js'
        ],
        
The add some configuration information as follows. See the comments for details:

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters:  https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    
Next, let us configure the browsers to use for testing as follows:

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
     browsers: ['Chrome','PhantomJS', 'PhantomJS_custom'],

    // you can define custom flags
    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          },
        },
        flags: ['--load-images=true'],
        debug: true
      }
    },

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity


Save the changes. Now the Karma configuration is ready for launching the test. Next we create a test for MenuController.
Create a folder named unit in the test folder. Move to the unit folder and then create a folder there named controllers. Then move to the controllers folder. We will store the tests for the controllers here.
Create a file named menucontroller.js and start the configuration of the test as follows:

    describe('Controller: MenuController', function () {

      // load the controller's module
      beforeEach(module('confusionApp'));

      var MenuController, scope, $httpBackend;

    });
    
Now we will inject the mock dependencies as follows:

      // Initialize the controller and a mock scope
      beforeEach(inject(function ($controller, _$httpBackend_,  $rootScope, menuFactory) {

          // place here mocked dependencies
      $httpBackend = _$httpBackend_;

      $httpBackend.expectGET("http://localhost:3000/dishes").respond([
        {
      "id": 0,
      "name": "Uthapizza",
      "image": "images/uthapizza.png",
      "category": "mains",
      "label": "Hot",
      "price": "4.99",
      "description": "A",
      "comments":[{}]
      },
      {
      "id": 1,
      "name": "Zucchipakoda",
      "image": "images/zucchipakoda.png",
      "category": "mains",
      "label": "New",
      "price": "4.99",
      "description": "A",
      "comments":[{}]
      }
      ]);

    scope = $rootScope.$new();
    MenuController = $controller('MenuController', {
      $scope: scope, menuFactory: menuFactory
    });
            $httpBackend.flush();

  }));
  
Finally, set up all the tests in the file as follows:

      it('should have showDetails as false', function () {

        expect(scope.showDetails).toBeFalsy();

      });

      it('should create "dishes" with 2 dishes fetched from xhr', function(){

          expect(scope.showMenu).toBeTruthy();
          expect(scope.dishes).toBeDefined();
          expect(scope.dishes.length).toBe(2);

      });

      it('should have the correct data order in the dishes', function() {

          expect(scope.dishes[0].name).toBe("Uthapizza");
          expect(scope.dishes[1].label).toBe("New");

      });

      it('should change the tab selected based on tab clicked', function(){

          expect(scope.tab).toEqual(1);

          scope.select(3);

          expect(scope.tab).toEqual(3);
          expect(scope.filtText).toEqual('mains');

      });
      
Save the changes. Now the test is ready to be executed.
Move back to the test folder and then type the following at the prompt to execute the test:

     karma start karma.conf.js
     
All the tests should successfully complete. You can edit some of the test values to cause some of the tests to fail.
Conclusions

In this exercise, you learnt about using Karma and Jasmine to carry out unit tests on Angular application components.