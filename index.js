"use strict";

var through = require('through2');
var match = require('match-like-gulp');

var include = function(condition){
	return through.obj(function (file, enc, callback) {
		if (match(file, condition)) {
			this.push(file);
		}
		return callback();
	});
};

var exclude = function(condition){
	return through.obj(function (file, enc, callback) {
		if (!match(file, condition)) {
			this.push(file);
		}
		return callback();
	});
};

module.exports = exclude;
module.exports.include = include;
module.exports.exclude = exclude;
