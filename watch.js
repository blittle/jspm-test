var path = require('path');
var watchr = require('watchr');
var DevBuilder = require('jspm-dev-builder');

var appDevBuilder = new DevBuilder({
  jspm: require('jspm'), // so you can use your local version of jspm
  expression: path.join('lib', 'main.js'), // path to your app's entry point
  outLoc: path.join('app-bundle.js'), // where you want the output file
  logPrefix: 'jspm-app', // put at the beginning of log messages from dev builder
  buildOptions: {
    sfx: true, // if the build should be self executing
    // below options are passed straight through to the builder
    // the values shown are the defaults
    minify: false,
    mangle: false,
    sourceMaps: true,
    lowResSourceMaps: false
  }
});

watchr.watch({
	path: path.join(__dirname, 'lib'),
	listeners: {
		change: function(changeType, filePath) {
			appDevBuilder.build(filePath);
		}
	},
	next: function() {
		appDevBuilder.build();
	}
})
