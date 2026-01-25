console.log(this)

let myObj = {
    name: "Name",
    text: "LOL",
    myCall: ()=>{
        console.log(this)
        const log = function(){
            console.log(this)
        }
        log()
    }
}

myObj.myCall()