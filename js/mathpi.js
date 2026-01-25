 Math.PI=5

Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(Math.PI)
let obj ={
    username:"navi",
    mail:"nav.icloud.com",
    spam:function(){
        entry:"will be removed within 10 days"
    }
}
console.log(Object.getOwnPropertyDescriptor(obj,"username"))

Object.defineProperty(obj,'username',{
    writable:false,
    enumerable:false
})
for (let [key,value] of Object.entries(obj)) {
    if(typeof value!=='function'){
        // console.log(`${key}:${value}`)
    }

}
arr = [1, "this", 2];
// console.log(Object.getOwnPropertyDescriptor(arr, "0"));
Object.defineProperties(arr, {
  0: {
    writable: false,
    enumerable:false
  },
  1: {
    writable: false,
    enumerable: false,
  },
});
for (const element in arr) {
  console.log(element);
}

arr[0]=2;
// console.log(Object.getOwnPropertyDescriptor(arr,'0'))
