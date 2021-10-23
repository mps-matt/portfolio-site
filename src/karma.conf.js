// karma.conf.js
module.exports = function(config) {
  config.set({
    basePath: '../..',
    frameworks: ['jasmine'],
    files: [
      'app/**/*.spec.js',
      'app/**/*.spec.ts'
    ],
    exclude: [
    ],
    preprocessors: {},
    reporters: [],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    failOnEmptyTestSuite: false
  });
};
