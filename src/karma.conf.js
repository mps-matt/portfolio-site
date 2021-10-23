// karma.conf.js
module.exports = function (config) {
	config.set({
		basePath: '../..',
		frameworks: ['jasmine', 'karma-typescript'],
		files: [{ pattern: '**/*.spec.ts', type: 'js' }],
		exclude: [],
		preprocessors: {
			'**/*.spec.ts': 'karma-typescript'
		},
		reporters: ['progress', 'karma-typescript'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['ChromeHeadless'],
		singleRun: true,
		failOnEmptyTestSuite: false
	});
};
