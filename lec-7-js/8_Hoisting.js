// JavaScript Hoisting
// js runs two passes over the code
// 1. first pass: it scans the code and hoists all function declarations to the
// top of their containing scope, which means that you can call a function before it is defined in the code.
// 2. second pass: it executes the code line by line, allowing you to call functions before they are defined.
// This behavior is known as "hoisting".
// variables and function declarations are hoisted to the top of their containing scope.

// Side Note: REPL:read, evalute, print, loop // javascipt is REPL

// function ko utha ke uper le jaane me koi time complexity nahi hoti
// it is a compile time operation, not a runtime operation

helloWorld()

function helloWorld() {
    console.log("Hello, World!");
}

