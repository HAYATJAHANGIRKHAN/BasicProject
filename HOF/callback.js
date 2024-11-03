// function h(x,fn){
// //h-> is a HOF
// //fn-> is a callback
// console.log(x*x)
// fn(x*x)
// }
// h(10,function(){
//     console.log("call back done")
// })

// h(10,exec);
// function exec (n){
//     console.log("squared value is ", n);
// }

// setTimeout (function hh(){
//     console.log("time done after 5s")
// },5000)


// setTimeout(function fn1(){
//     console.log("time 1 done")
// },10000)
// setTimeout (function fn2(){
//     console.log("time 2 done")
// },5000)
 
// setTimeout(function fn3(){
//     console.log("time 3 done")
// },3000)

// function fetchData(callback) {
//     setTimeout(() => {
//         callback("Data received");
//     }, 10000);
// }

// fetchData((data) => {
//     console.log(data); // Output: Data received
// });

// PROMISE
// function createPromise(){
//     return new promise(function (resolve, reject) {
//         //your code goes here
//         setTimeout(function f(){
//             console.log("timmer done")
//             resolve("done");
//         },5000)
//     });
   
// }

// console.log("start");
// let x= createPromise();
// console.log("got a new promise")
// x.then(function f(){
//     console.log("promise done")
// });
// console.log("end")


// function prom (complete) {
//  return new promise (function(resolve,reject){
//     if (complete){
//         resolve("i am solved");
//     }else{
//     reject("i am reject")
// }
//  });
// }
//  console.log(prom(true))

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let success = true;      
//         if (success) {
//             resolve("Operation successful!");
//         } else {
//             reject("Operation failed.");
//         }
//     }, 2000);
// });
// // Promise ko consume karte hain
// myPromise
//     .then((message) => {
//         console.log(message); // Agar resolve hota hai toh yeh chalega
//     })
//     .catch((error) => {
//         console.error(error); // Agar reject hota hai toh yeh chalega
//     });

    const myPromise = new Promise (function (resolve,reject){
        setTimeout(()=>{
            let success= true;
            if(success){
                resolve("i am solved");
            }else{
                reject("i am rejected");
            }
        },5000)
    })

    myPromise
 .then((message)=>{
    console.log(message);
 })
 .catch((error)=>{
    console.log(error)
 })



// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let success = true;      
//         if (success) {
//             resolve("Operation successful!");
//         } else {
//             reject("Operation failed.");
//         }
//     }, 2000);
// });
// // Promise ko consume karte hain
// myPromise
//     .then((message) => {
//         console.log(message); // Agar resolve hota hai toh yeh chalega
//     })
//     .catch((error) => {
//         console.error(error); // Agar reject hota hai toh yeh chalega
//     });
