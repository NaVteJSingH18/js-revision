function SetUserName(username){
    //complex db calls
    this.username=username
}
function createUser(username,email,password){
    SetUserName.call(this,username)
    this.email=email;
    this.passsword=password;
}
const callkar=new createUser("naamnavi",21,1815);
console.log(callkar)
