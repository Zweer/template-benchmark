var gaikan = require('gaikan');
var compiled;
var tplData;

gaikan.options.enableCache = false;
gaikan.options.enableCompression = true;

module.exports.prepare = function (data, done) {
	tplData = data;
	compiled = gaikan.compileFromFile('tpl_escaped');
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	tplData = data;
	compiled = gaikan.compileFromFile('tpl_unescaped');
	done();
};

module.exports.step = function (done) {
	var html = compiled(tplData);
	done(undefined, html);
};