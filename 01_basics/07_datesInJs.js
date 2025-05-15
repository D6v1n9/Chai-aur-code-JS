// Dates is an object

let myDate = new Date();
// console.log(myDate.toString()); //Thu May 15 2025 14:23:45 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Thu May 15 2025
// console.log(myDate.toLocaleString()); //5/15/2025, 2:23:45 PM
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23)        // Month start from 0 in JS
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  //1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023"); //Inside string than month -- JAN
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);        //1747319390754
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); //As it starts from 0
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString("default", {
  weekday: "long",
});

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
    
  })
);          //Thursday
