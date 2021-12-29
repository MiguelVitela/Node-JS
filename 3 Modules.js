// Modules

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimun)

// Import names as objects
const names = require("./4 Names.JS");

// Import function 
const sayHi = require("./5 Utils");

sayHi("Miguel");
sayHi(names.Juan);
sayHi(names.Pedro); 

// Import the array and the object from the file 6 assigning the content to the constant "data"
const data = require("./6 Alternative-flavor")

// Import the function from the file without assign the content to a constant.
require("./7 Mind grenade")
