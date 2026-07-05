// filter is just like forEach loop  for array but can select  every single element of array based on a condition
// but unlike forEach loop it can  return the value
// like forEach loop it has a call back function and applied to array
// unlike array( that Always returns array of same length ) it Returns array with only matching elements
const numbs =[1,2,3,4,5,6,7,8,9,10]

const filterNumbers=numbs.filter((numb)=>{ // just if you open {a scope } then you have to manually return the value
    return numb>=4 //condition 
})

// const filterNumbers=numbs.filter((numb)=> numb>=4) 

console.log(filterNumbers);