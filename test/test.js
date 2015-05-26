/*
var assert = require('assert');
var expected = true;
var actual = false;
assert.equal(expected,actual);
*/


var assert = require('assert');
var ac = require('../index.js'); // > ./ self reference >../ referenece to the parent directory //Requiring index.js -> doesn't require the js..
//(you may also remove the whole file name index... so you can use '../' .>instead of '../index') as ../ will find the indexfile in any directory! Woopdiwoop!

assert.equal(typeof ac, 'object');
assert.equal(typeof ac.import, 'function');

console.log("# ac.import imports list of words into memory")

ac.import(function (err, words) {
	console.log('words.txt had' + words.length + "words in it");
	assert.equal(words.length, 99172);
});

console.log("## attempt to invoke ac.import without a valid callback");
var error = ac.import('string');

assert.equal(error.message, 'callback argument MUST be a function');


console.log('### ac.findWord finds a string in words array');
ac.import(function(){	
	ac.findWord('awes',function (err, found){
	assert.equal(err,null);
	assert.equal(found.length, 10);
	});
});


console.log('#### ac.stats tracks the searched strings');
ac.import(function(){	
	ac.stats('awesome',function (err, stats){
	console.log(stats);
	assert.equal(stats['awesome'].length,1);
			ac.stats('awesome',function (err, stats){
			console.log(stats);
			assert.equal(stats['awesome'].length,2);
		});
	});

});








