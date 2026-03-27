//reduce for array 
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