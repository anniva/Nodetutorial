var fs = require('fs');
var ac = {};

ac.import = function(callback){ 	// assigning a fuction to a property > so that it can be used later on
	if(!callback || typeof callback !== 'function') {
		return new Error('callback argument MUST be a function')
	}

	var filename = __dirname + '/words.txt';
	fs.readFile(filename, 'utf8', function (err, data){	// utf8 -> gives the data in a string so you dont need to convert it to a string
		ac.words = data.split('\n');
		//console.log(data);
		return callback(err, ac.words);
		});
}


ac.stats = function(word, callback){
	if(!ac.searches){
		ac.searches= {};
	}

	if(!ac.searches[word]){
		ac.searches[word]= [];
	}
		
	ac.searches[word].push(new Date().getTime());
	callback(null, ac.searches);
}

ac.findWord = function (word, callback){
	var found= [];	
	for(var i = 0; i < ac.words.length; i++){
		if(ac.words[i].search(word) > -1){ // if want to search the beginning should be 0 --> -1 anywhere
			found.push(ac.words[i]);
		}
	}
	return callback(null, found);
}














module.exports = ac;

