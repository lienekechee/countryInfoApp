
var fs = require("fs");


function readJSON(jsonFile, callback){

	fs.readFile(jsonFile, function(err,data){
	if (err) {
		throw err;
		}
	var parsedFile = JSON.parse(data);
	callback(parsedFile);
	
	})

};


module.exports = {
readJSON: readJSON

};




