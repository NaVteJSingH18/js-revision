//👉 Closure = a function + its remembered variables

// A closure is a function that can access variables from its outer scope even after the outer function has finished execution

function outers() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const fn = outers();

fn(); // 1
fn(); // 2
fn(); // 3

 //What’s happening?
// outer() runs → creates count
// inner() is returned
// Normally count should be destroyed ❌
// BUT…
// 👉 Closure keeps count alive in memory
//inner() remembers:
// count
// Even after outer() is done


    function init(){
        const username="user"
        function displayName(){
            console.log(`from displayName ${username}`)
        }
         displayName()
    }
  init()
function outer(){
        const username="another user"
    function inner(){

        const secret="nai bataunga"
        console.log(username)
    }
    function inner2(){
        console.log(`from inner2 ${username}`);
        
        // console.log(`keh raha tha ${secret}`) //not from sibling's scope because of lexical scoping
        // so nai padh paega secret 
    }
    inner();
    inner2();
}
outer()
// console.log("outer",username     ) username is inside the function scope not in the global scope
function makeFunc(){
    const name="lastName"
    function inside(){
        console.log(name)//The closure scope = the variables from the outer function that the inner function still uses
    }
    return inside
}

const func=makeFunc()
func()
