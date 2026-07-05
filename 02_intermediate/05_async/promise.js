
//A Promise is:
// An object that represents the future result of an async operation
//means I promise to give you a result later”

//Promise States
// A promise has 3 states:
// Pending → waiting
// Resolved (Fulfilled) → success ✅
// Rejected → failed ❌

//two phases 
//Creating a Promise
//Consuming a Promise after 

// Methods:
// then() → success
// catch() → error


// Promise chaining → multiple .then() connected
// Why it works?
// 👉 Because:
// .then() returns a new promise
// So you can chain another .then()

// ex:getUser()
//   .then(user => {
//     return getPosts(user.id);
//   })
//   .then(posts => {
//     return getComments(posts[0].id);
//   })
//   .then(comments => {
//     console.log(comments);
//   })
//   .catch(err => console.log(err));


// each .then() returns a new promise
// output flows to next .then()

// always return value inside .then()







// creating promise
// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     //db calls,cryptography,network
//     setTimeout(() => {
//         console.log('async task is complete')
//             resolve();
//     }, 1000);

// })
// promiseOne.then(function(){ // consuming promise
//     console.log('proimse consumed')
// })


// //2nd promise
//  new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log('async task 2  complete')
//             resolve();
//     }, 1000);

// }).then(function(){
//     console.log('proimse 2 consumed')
// })


// // third promise

// const promiseThird=new Promise(function(resolve , reject){
//     setTimeout(function(){
//         resolve({username:"chai",email:"navi18@gmail.com"})
//     },1000)
// })
// promiseThird.then(function(user){
//     console.log(user)
// })

// const promiseFourth=new Promise(function(resolve,rejection){
//     setTimeout( function(){
//         let error=false;
//         if(!error){
//             resolve({username:"naieve",email:"naieve@gmail.com"})
//         }else{
//             rejection('error :something went wrong')
//         }
//     },1000)
// })
// promiseFourth
// .then((user)=>{
//     console.log(user)
//     return user.username
// })  
// .then((username)=>{
//     console.log(username)
// })
// .catch(function(err){
//     console.log(err)
// }).finally(()=>{
//     console.log('the promise is either resolved or rejected')
// })  

// async await to replace promises but it donot handle error gracefully automatically so we have to handle error in it with try catch block

async function getUser() {
    try {
        let user = await userModel.findOne({ email: "test@gmail.com" });
        console.log(user);
    } catch (err) {
        console.log("Error occurred:", err);
    }
}


// const promiseFifth=new Promise(function(resolve,reject){
//     setTimeout( function(){
//         let error=false;
//         if(!error){
//             resolve({username:"notnaieve",email:"naieve@gmail.com"})
//         }else{
//             reject('error :something went wrong')
//         }
//     },1000)
// })
// async function consumePromiseFifth (){
//     try{
//         const response=await promiseFifth;
//         console.log(promiseFifth)
//     }catch(error){
//         console.log(error)
//     }
// };
// consumePromiseFifth();  
// async function getAllUsers(){
//     try {
//          const response = await fetch('https://api.github.com/users/NaVteJSingH18');
//    const data = await response.json();
//    console.log(data)
//     } catch (error) {
//         console.log("E:Err")
//     }
    
// }
//  getAllUsers()

fetch('https://api.github.com/users/NaVteJSingH18').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})
