const arr = ["one", "two"];
for (const element of arr) {
  // console.log(element);
}
for (const key in arr) {
// console.log(key)
}
for (const key in arr) {
  // console.log(arr[key])
}
const map=new Map();
map.set('ben','ten')
map.set('bill','gacks')
for (const element of map) {
  // console.log(element)
}
for (const [key,value]of map) {
  // console.log(`${key} :- ${value}` )
}
const obj={
  joe:"black",  
  try:"again"
}
for (const key in obj) {

  // console.log(`${key} :- ${obj[key]}`)
  
}

//foreach loop for array

arr.forEach( function ( val ){
    // console.log(val)
} )

arr.forEach( (val)=>{
  // console.log(val)
}
)
function printMe(item){
    // console.log(item)
}
arr.forEach( printMe );
arr.forEach( (val ,index, arr)=>{
  // console.log(val,index, arr);
})

const superlang=[
  {
    lang:"english",
    abb:"eng"
  },
  {
    lang:"punjabi",
    abb:"pun"
  },
  {
    lang:"spanish",
    abb:"span"
  }
]
superlang.forEach((element )=>{
  // console.log(element.lang)
});
//filter
let lgn=superlang.filter( (lln)=> lln.lang==='english'||lln.abb==='pun')
// console.log(lgn)
let lgn2=[];
superlang.forEach( (lggn)=> { if(lggn.lang==='punjabi'){
 lgn2.push(lggn)
}}  
 )
//  console.log(lgn2)


 




