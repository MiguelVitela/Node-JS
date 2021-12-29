// Import path module
const path = require("path");

// Print path separator (/)
console.log(path.sep);

/* The metod "join" allow us to join separated paths in order to obtain a final resultant path as 
an output. */
const filePath = path.join("/Content", "subfolder", "text.txt");
console.log(filePath);

// The metod "basename" returns the name of the last file in a path.
const base = path.basename(filePath);
console.log(base);

// The metod "resolve" allow us to obtain absolute paths in an easier way.
const absolute = path.resolve(__dirname, "Content", "subfolder", "text.txt");
console.log(absolute);