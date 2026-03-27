//hoisting --> related to functions and variables 
// Hoisting → behavior where declarations are moved to top


//Hoisting is a JavaScript behavior where variable and function declarations are processed before code execution, mainly involving var, let, const, and functions

//👉 Hoisting is part of:
// Execution Context (creation phase)

//hoisting mainly deals with:
// var
// let
// const
// (and also functions)

//JavaScript moves declarations to the top before execution
// but only declaration not initialization 

//behaviors of varn, let , const

// //var ✔️ Hoisted
//  Initialized as undefined
console.log(a); // undefined
var a = 10;

// let
// //✔️ Hoisted
// ❌ Not initialized
// 👉 Temporal Dead Zone (TDZ)
//TDZ = Temporal Dead Zone
// It is the time between variable declaration being hoisted and its initialization

console.log(a); // ❌ error
let a = 10;

// const 
// ✔️ Hoisted
// ❌ Not initialized
// 👉 TDZ
console.log(a); // ❌ error
const a = 10;

