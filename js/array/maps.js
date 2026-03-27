// maps for array
// maps are used on array that modify/transform every element
// can return value
//Always returns array of same length

const numbs=[1,2,3,4,5,6,7,8,9,10]
 let nmbs=numbs.map((numb)=>numb+1)
//  console.log(nmbs)
 
 nmbs=numbs.map((numb)=>numb*10) 
numbs.map((numb)=>numb+1)

// map chaining
//Map chaining = using multiple .map() calls one after another
// array.map(...).map(...).map(...)

// each .map pass the result of it to next .map in the chain 

const users = [
  { name: "Navtej", age: 20 },
  { name: "Rahul", age: 17 }
];

const result = users
  .filter(user => user.age >= 18)  // keep adults
  .map(user => user.name)          // get names
  .map(name => name.toUpperCase()); // uppercase

console.log(result); // ["NAVTEJ"]