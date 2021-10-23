// karma.conf.js
module.exports = function (config) {
	config.set({
		basePath: '../..',
		frameworks: ['jasmine', 'karma-typescript'],
		files: [
			'**/node_modules/zone.js/dist/zone.js',
			'**/node_modules/zone.js/dist/long-stack-trace-zone.js',
			'**/node_modules/zone.js/dist/proxy.js',
			'**/node_modules/zone.js/dist/sync-test.js',
			'**/node_modules/zone.js/dist/jasmine-patch.js',
			'**/node_modules/zone.js/dist/async-test.js',
			'**/node_modules/zone.js/dist/fake-async-test.js',
			{ pattern: '**/src/app/**/*.component.ts', type: 'js' },
			{ pattern: '**/src/app/**/*.module.ts', type: 'js' },
			{ pattern: '**/src/app/**/*.spec.ts', type: 'js' }
		],
		exclude: ['node_modules'],
		preprocessors: {
			'**/src/app/**/*.component.ts': 'karma-typescript',
			'**/src/app/**/*.module.ts': 'karma-typescript',
			'**/src/app/**/*.spec.ts': 'karma-typescript'
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
