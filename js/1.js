//datatypes
//primitive string,boolean,null,undefined,Number,symbol
//noon primitive - array,object,function

const Id=Symbol("23")//unique id
const isId=Symbol("23")
console.log(Id===isId) // false 
// const array=[1,"string",true,undefined,null]
// const isLoggedin=false;
// const temp=null;
// let userEmail ;
// console.log(typeof(array));//object
// let obj={
//     name:"navetj",
//     rolllno:23,
// }
// console.log(typeof(obj));//object
// let funct=function fun(){
//     return 
// }
// console.log(typeof(funct))//function object


// Stack → stores primitive values directly --> Number, String, Boolean, null, undefined, symbol

// ✔️ Stack stores:

// Actual value directly
// When copied → copy by value
// let a = 10;
// let b = a;

// 👉 b gets a separate copy

// Heap → stores objects (reference types) --> Objects, Arrays, Functions

// For Non-Primitive Types (Objects, Arrays, Functions)

// ✔️ Heap stores:

// Actual object

// ✔️ Stack stores:

// Reference (memory address) to that object
// let obj1 = { name: "Navtej" };
// let obj2 = obj1;

// 👉 obj2 gets the same reference, not a copy

// Stack → stores actual values (for primitives)

// (for non primitive)  Stack → holds a reference (address) to the location of those objects in the heap


let a="hey";
let b=a;//  b stored copy of a but not linked to a 
b="how are you";

// a and b are stored in stack 
console.log(b);// heap, how are you 
console.log(a)//stack, hey 

let obj1={
    name:"navtej"

}
console.log(obj1.name)//navtej
let another=obj1;
another.name="navi";
console.log(obj1.name)//navi
console.log(another.name)//heap