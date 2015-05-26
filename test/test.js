/*var assert = require('assert');
var expected = true;
var actual = false;
assert.equal(expected,actual);
*/

var assert = require('assert');
var ac = require('../index.js'); // > ./ self reference >../ referenece to the parent directory //Requiring index.js -> doesn't require the js..
//(you may also remove the whole file name index... so you can use '../' .>instead of '../index') as ../ will find the indexfile in any directory! Woopdiwoop!

assert.equal(typeof ac, 'object');
assert.equal(typeof ac.import, 'function');

console.log("# ac.import imports list of words into memory");
ac.import(function callback	(words) {
	console.log('words.txt had' + words.length + "words in it");
	assert.equal(words.length, 99171)
});







