// npm - global command, comes with node
// np, --version

// local dependency - use it only in this particular object 
// npm 1 <pacckageName>

// global dependency - use it in any project
// npm install -g <packageName> 
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about projects/package)´
// manual approach (create package .json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


// use of lodash
const _ = require('lodash');

// It eturns a flap view of a multidimensional array.
const items = [1, [2,[3,[4]]]];
const newItems = _.flattenDeep(items)
console.log(newItems);