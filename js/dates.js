let date=new Date();
// console.log(date)
// console.log(date.toDateString())//convert into day and date
// console.log(date.toISOString())//do nothing just give ordinary date value
// console.log(date.toJSON())//do nothing just give ordinary date value
// console.log(date.toLocaleDateString())//convert date into readable form
// console.log(date.toLocaleString())//convert date into readable form and give time also
let createddate=new Date(2025,11,11,10)
// console.log(createddate.toLocaleString())
// let createddate=new Date("2025-11-10") //10-11-2025(dd/mm/yy)
// let createddate=new Date("10-11-2025") //11/10/2025(mm/dd/yy)
// console.log(createddate.toString())
// let mytimestamp=Date.now()
// console.log(mytimestamp)
console.log(createddate.getTime())
// console.log(Date.now())