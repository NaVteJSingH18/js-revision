//singleton when done by constructor but not by literal

// object literals

const obj1={
    name:"navtej"
}
// console.log(obj1.name)//two methods of declarations
// console.log(obj1["name"])

const obj2={
    "name":"navtej"
}
// console.log(obj2["name"])

const mysym = Symbol("key")

const obj={
    name:"navi",
    [mysym]:"newkey",
    email:"navtej.dgc@gmail.com"
}
// console.log(obj[mysym])
// console.log(obj)

// Object.freeze(obj)freeze the changing behavior
// obj.name="navtej"
// // console.log(obj)

obj.greeting=function greetings(){
    console.log(`hey ,${this.name}`)
}
// console.log(obj.greeting)
// console.log(obj.greeting())
