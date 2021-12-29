// Import the methods from the module
const {readFile, writeFile} = require("fs");

console.log("Start");
readFile("./Content/saludo.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const saludo = result;
    readFile("./Content/despedida.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return
        }
    const despedida = result;
    writeFile("./Content/union-async.txt", `Here is the result : ${saludo}, ${despedida}`, (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        console.log("Done with this task");
        })
    })
}) 

console.log("Starting next task");
