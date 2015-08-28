var through = require('through2'),
	StylusLint = require('stylus-lint');

module.exports = function() {
	return through.obj(function(file, enc, cb) {
		StylusLint.addFile(file);
		cb();
	}, function() {
		StylusLint.run();
	});
}
