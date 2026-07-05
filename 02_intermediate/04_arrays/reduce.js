//reduce
const arr2=[1,2,3,4,5]
const total =arr2.reduce(function (acc,curr){
  // console.log(`acc is ${acc} and curr is ${curr}`)
return acc+curr
},0)
// console.log(total)

const total2=arr2.reduce((acc,curr)=>acc+curr,0)
// console.log(total2)
const shoppingcart=[
  {
    coursePrice:2200,
    courseName:'JS'
  },
  {
    coursePrice:2300,
    courseName:'Java'
  },
  {
    coursePrice:1400,
    courseName:'pyThon'
  }
]
const totalprice=shoppingcart.reduce((acc,item)=>acc+item.coursePrice,0)
// console.log(`total cost is ${totalprice}`)


// reduce to find frequency of elements

const fruits = ["apple", "banana", "apple", "banana", "apple"];

const count = fruits.reduce((acc, curr) => {
    console.log(acc)
    console.log(curr)
    console.log(acc[curr])
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(count);

//{}
// apple
// undefined
// { apple: 1 }
// banana
// undefined
// { apple: 1, banana: 1 }
// apple
// 1
// { apple: 2, banana: 1 }
// banana
// 1
// { apple: 2, banana: 2 }
// apple
// 2
// { apple: 3, banana: 2 }

// { apple: 3, banana: 2 }