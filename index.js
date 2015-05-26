var fs = require('fs');
var ac = {};

ac.import = function(callback){ 	// assigning a fuction to a property > so that it can be used later on
	var filename = __dirname + '/words.txt';
	fs.readFile(filename, 'utf8', function (err, data){	// utf8 -> gives the data in a string so you dont need to convert it to a string
	 	if(err){	
		console.log(err);
		}

		ac.words = data.split('\n');
		console.log(data);
		return callback(ac.words);
		});
}






module.exports = ac;

