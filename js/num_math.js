const num=23.2
// console.log(num.toFixed(2))//number of zeroes after decimal

const balance=112.36;
// console.log(balance.toPrecision(4))//give precise value by round of the metioned placed number
const hundreds=10000;
// console.log(hundreds.toLocaleString('en-IN'))//give numbers with commas

//++++++++++++MATHS++++++++++++++++++++++++++++++++++++++?///////////////////////////////

// console.log(Math)//
// console.log(Math.PI)//a value of pi
// const numb=12.343
// console.log(Math.abs(-4))//give positive value
// console.log(Math.round(numb))//give roundoff
// console.log(Math.ceil(numb))//give upper roundoff
// console.log(Math.floor(numb))//give lower roundoff
// console.log(Math.random())//give any random value
// console.log(Math.floor(Math.random()*10)+1)//give random lower value and plus 1 to avoid the 0 case
// console.log(Math.max(2,3,5,78,34))//give max value
const max=20;
const min=10;

console.log(Math.floor((Math.random() * (max-min+1)) + min))