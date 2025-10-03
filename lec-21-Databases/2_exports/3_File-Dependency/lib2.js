const lib1 = require("./lib1");

let b = 10;



// here it takes a copy of lib1 which is empty object as lib1 is not fully loaded yet
module.exports = { 
    b, // here b will be 10 , and is different from b above
    lib1,
};

// this create a circular dependency
// here it takes reference of lib1 which is not fully loaded yet
module.exports.b = b;
module.exports.lib1 = lib1;
