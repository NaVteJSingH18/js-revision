class User {
    constructor (email,password){
        this.email=email
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value

    }
}
const app=new User('navi@gmail.com','gghkn')
console.log(app.email)
``