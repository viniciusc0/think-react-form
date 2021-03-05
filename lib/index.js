// var fs = require("fs");
// const shell = require('child_process').execSync;
// var createStream = fs.createWriteStream("teste.txt");
// createStream.write("Hello World!");
// createStream.end();


// ./lib/index.js

/**
 * Displays a string in the console
 * 
 * @param {string_to_say} String string to show in the console
 */


var say = function(string_to_say) {
    // const src = `/path/src`;
    // const dist = `/path/dist`;
    
    // shell(`cp -r lib/modules src/teste-vinicius `);
    // shell(`cp -r lib/page src/teste-vinicius `);
    

    // shell(`cp -r ${src}/* ${dist}`);
};


// Allows us to call this function from outside of the library file.
// Without this, the function would be private to this file.
exports.say = say;