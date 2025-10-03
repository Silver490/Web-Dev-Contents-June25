const lib2 = require('./lib2');

let a = 1;

// Normally we would do this
module.exports = {a, lib2};


// this create a circular dependency
module.exports.a = a
module.exports.lib2 = lib2;