// karma.conf.js
module.exports = function (config) {
	config.set({
		basePath: '../..',
		frameworks: ['jasmine'],
		files: [
			'portfolio-site/app/app.component.spec.ts',
			'portfolio-site/app/**/*.spec.js',
			'portfolio-site/app/**/*.spec.ts'
		],
		exclude: [],
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
