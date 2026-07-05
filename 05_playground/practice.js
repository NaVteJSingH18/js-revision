// let arr= [1,2,3,4];

// let value = arr.filter((val)=>val>=4 )

// console.log(value)


// let arr2=[1,2,3,4,5];

// let value2 = arr2.map((value)=>value+1)

// console.log(value2);


// let arr3 = [ 3,2,5,4,1]

// let even = arr3.filter((val)=>val%2==0)

// console.log(even)

// let arr4 = ["apple","cat","banana","dog"]

// character = arr4.filter((val)=>val.length>4)

// console.log(character)

// const a= {
//     name:"navtej"
// }
// const b = {
//     age:22
// }

// const c= {
//     a,b
// }

// console.log(a,b)

const obj={
 a:1,
 b:{
   c:2,
   d:{
     e:3
   }
 }
}
function countKeys(obj) {
    let count = 0;
    for (let key in obj){
        count ++;
        if(typeof(obj[key])==="object"&&obj[key]!==null){
          count+=  countKeys(obj[key])
        }
    }
    return count;

}

console.log(countKeys(obj));