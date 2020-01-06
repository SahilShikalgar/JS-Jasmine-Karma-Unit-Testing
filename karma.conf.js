module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'browserify'],
        files: [
            './lib/jquery.js',
            'src/app/**/*.js',
            'src/spec/**/*.specs.js'
        ],
        preprocessors: {
            'src/app/**/*.js': ['coverage'],
            'src/spec/**/*.specs.js': ['browserify']
        },
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-jasmine-html-reporter',
            'karma-browserify'
        ],
        reporters: ['progress', 'coverage', 'kjhtml'],
        port: 9878,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autowatch: true,
        browsers: ['Chrome'],
        client: {
            clearContext: false
        },
        singleRun: false,
        concurrency: Infinity,
        coverageReporter: {
            includeAllSources: true,
            dir: 'coverage/',
            reporters: [
                { type: "html", subdir: "html" },
                { type: 'text-summary' }
            ]
        }
    });
};
