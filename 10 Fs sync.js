// Import the methods of the fs module using desestructuration syntax
const {readFileSync, writeFileSync} = require("fs");
console.log("start");
// We´re going to begin with the raeding

/* Assign to a variable the content, then use the methods previously imported 
and pass it as arguments the direction of te files which are going to be read followed by a 
default "utf-8" system */
const saludo = readFileSync("./Content/saludo.txt", "utf-8");
const despedida = readFileSync("./Content/despedida.txt", "utf-8");


// Lets continue with writting

/* First call the method writeFileSync and then pass it the path where it gonna be located, then 
write the name of the new txt file and finally separated by a coma write the content of the new
file*/
writeFileSync("./Content/union.txt", ` Here is the result; ${saludo}, ${despedida}`, { flag : 'a'});

/* NOTE: "{ flag : 'a'}" ALLOW US TO APPEND THE CONTENT OF THE TXT FILE AGAIN AND AGAIN EVERY TIME WE 
RUN THE CODE, IF WE DELATE IT THE CONTENT WILL BE THE DEFAULT ONE */
console.log("Done with this task");
console.log("Starting the next one");