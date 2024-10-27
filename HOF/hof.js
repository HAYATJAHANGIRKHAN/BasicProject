// const powertw0=(n)=>{
// // console.log(powercube**n);
// return n**2;

// }
// function powercube(powertw0,n){
//     return powertw0(n)*n;
// }

// console.log(powercube(powertw0,3));


// function sayHello(){
//     return function(){
//         console.log("Asalamulaikum Jaaniya")
       
//     }
// }
// let guessValue= sayHello();
// console.log(guessValue);
// guessValue();

// const highOrder = n =>{
//     const Onefun = m =>{
//     const twofun = P => {
//      return  n+m+P;
//     }
//     return twofun;
//     }
//     return Onefun;
// }
//   console.log(highOrder(2)(3)(4)); 

//   const a = x =>{
//   const b = y =>{
//   const c = z =>{
//     return x+y*z;

//     }
//     return c;
//   }
//   return b;
// };
// console.log(a(5)(6)(9));


// const myNumber= [1,2,3,4,5]

// const SumArray= arry => {
//     let total =0;
//     arry.forEach(function(element){
//         total += element
//     });
//     return total;
// }

// console.log(SumArray(myNumber));


// function tricolbal(){
//     console.log("Asalamualaikum");
// }
// // setInterval(tricolbal,2000);
// setTimeout (tricolbal,5000);


let arr=[1,2,3,4,5,6];
//  arr.forEach(function(element,index,arr){
//     console.log(element,index,arr);
//  })
 
// let arr1=[7,8,9 ,10,11,12,13,14,15,16,17];
// arr1.forEach((element,index,arr1) =>{
//     console.log("=>",element,index,arr1)
 
// });

const person=["hayat", "jahangir","khan","sulaiman"]
    person.forEach((el) => {
        // console.log(el.toUpperCase()); // forEach with uppercase
       
    })

// arr.map(function(element,index,arr){
//     console.log(element,index,arr); //Map

// } )

// person.map((el)=>
// {
//     console.log(el.toLocaleUpperCase()); //map with uppercase
// })

const cartbill= [10,20,30,40,50,60,];
const sumofcartbill= cartbill.reduce((prevous,current) => prevous+current,1)
console.log(sumofcartbill);

const gameScore=[10,20,30,40];
//check if all values are numbers 
const gameScoreCheck = gameScore.every((v) => typeof v==='number')
console.log("check:", gameScoreCheck);// answer is True if any string value is there than answer will be False


//find 
const above20= gameScore.find((score)=> score>20)
console.log(above20)//30 it give a first number of that num 
