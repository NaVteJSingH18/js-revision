class User {
    constructor(username){
        this.username=username;
    }
    logMe(){
        return`username is ${this.username}`
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password
    }
}
const user1= new User("navi")

console.log (user1.logMe())

const Teacher1= new Teacher("navtej","navi@gmail.com","321")
console.log(Teacher1.logMe())
console.log(User instanceof Teacher)//false
console.log(Teacher instanceof User)//false
console.log(Teacher1 instanceof Teacher )//true
console.log(Teacher1 instanceof User)//true
console.log(user1 instanceof Teacher)//false
console.log(user1 instanceof User)