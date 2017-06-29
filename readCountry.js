var filereader = require("./json-file-reader");

// fs.readFile("./countries.json", function (err,data){
// 	if (err) {
// 		throw err;
// 	}

// 	var countries = JSON.parse(data);


var nameKey = process.argv[2];

filereader.readJSON("countries.json", function(parsedData){
	// console.log(parsedData);

    for (var i=0; i < parsedData.length; i++) {
        if (parsedData[i].name === nameKey) {
        	console.log ("Country: " + parsedData[i].name);
        	console.log ("Top Level Domain: " + parsedData[i].topLevelDomain);
            return parsedData[i];


        }

    }


});



// var resultObject = search(countryInput, countries);

// console.log ("Country: " + resultObject.name)
// console.log ("Top Level Domain: " + resultObject.topLevelDomain);



// console.log(resultObject);

// });


// fs.writeFile("readfile2.js", contents, function (err){
// 	if (err) {
// 		throw err;
// 	}



// Part 1
// Create a Node.js application that does the following:
// - Takes in one parameter from the command line, the name of a country. Note: command line arguments can be read from the global array `process.argv`
// - Reads and parses the `countries.json` file. Note: you must use readFile and not readFileSync. Get it here: countries.jsonView in a new window
// - Outputs information about that specific country. Must be in the following format:
// Country: <country name>
// Top Level Domain: <tld>


/* Firstly we have to write a function that 'reads' the file that contains the data.
Then we needs to put that information contained in the json file into an array that can be accessed
by a function.  that array ('countries') can be declared as a variable. but first needs to parsed into a 
javascript object. Within that variable " =Countries"
we have numerous keys and their values.  we need the 'name' and the 'tld'.  

but first we need to find a specific country for which those keys are attached.  So perhaps
we need to set up a for loop which tests for a specific name.  once we find that key, we know the
position of that country in the array.

then we can print out (for afghanistan e.g.), 
console.log("Country: " + countries.name[0]) 
console.log("Top Level Domain: " + countries.tld[0])





Part 2
- For the purposes of this exercise, you must create a separate module for 
reading and parsing the JSON file, named "json-file-reader".
- This module should have a function that takes in a filename and a 
callback function as a parameter. It should then read that file, then 
parse the JSON. Finally, it should call the callback function and pass 
the parsed JSON to it.
- One way to think of this module is as a helper that can read and 
parse any JSON file. It has nothing to do with 'countries', so to speak.
- Another way to think of it is as a small wrapper to fs.readFile, 
except that this function only works with JSON files.

- The output of the application should have the following format: 

Country: <country name>
Top Level Domain: <tld>



*/


