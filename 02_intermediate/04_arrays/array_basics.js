//array
let arr=[1,2,'hey',"asian",true,null,undefined]
// console.log(arr)
let arr2= new Array(23,true,'damn',"impressed",undefined)
// console.log(arr2)
// console.log(arr2[2])
//array methods
// arr2.push(undefined)
// console.log(arr2)
// // arr2.pop()
// // console.log(arr2)

// arr2.unshift(67)
// console.log(arr2)
// arr.shift()
// console.log(arr)


// //questions
// console.log(arr.includes(1))//ask if element exists then true
// console.log(arr.indexOf(1))//if element exist then give 0 otherwise give -1
// const arr3=arr2.join()
// console.log(arr2)
// console.log(arr3)//convert into string
// console.log(typeof(arr3))

// //slice and splice
const arey=arr.slice(0,3)//donot include index  3
console.log(arey)// [ 1, 2, 'hey' ]
console.log(arr)// [ 1, 2, 'hey', 'asian', true, null, undefined ]//
//  not changed in original array

const arey2=arr.splice(1,3) // [ 2, 'hey', 'asian' ]
// //include 3 and remove the values from original array like in this element from 2 to 3 is removed from original array
console.log(arey2) 
console.log(arr)// element [1] to element [3] is removed from original array

// // console.log(arr)
// // console.log(arr2)

