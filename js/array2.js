const heros=["spidy","hulk","ironman","ironfist"]
const animeheros=["midoriya","saitama","itoshi","bakugo","Hawk","almight"]
// heros.push(animeheros)//push array as a element
// console.log(heros)

const allheros=heros.concat(animeheros);//concat arrays but in another array and dont change the original array
// console.log(allheros)

// const allhero=[...heros,...animeheros]
const another_array=[1,2,3,["yo","hey","stars",[34,45,56],26,65,445,232,["ohho","crucial",["all",["to","me"]]]]]
// console.log(another_array.flat(Infinity))

// console.log(Array.isArray("navtej"))//checks if navtej is array or not

console.log(Array.from("navtej"))//convert into array 
console.log(Array.from({name:"navtej"}))//return empty array not able to convert it into array
