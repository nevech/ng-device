module.exports = function (config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'sourse/ng-device.js',
      'tests/*.js'
    ],
    plugins: [
      'karma-jasmine',
      'karma-nested-reporter',
      'karma-phantomjs-launcher'
    ],
    reporters: ['nested'],
      nestedReporter: {
        color: {
          should: 'red',
          browser: 'yellow'
        },
        icon: {
          failure: '✘ ',
          indent: 'ட ',
          browser: ''
        }
      }
  });
};