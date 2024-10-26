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


const myNumber= [1,2,3,4,5]

const SumArray= arry => {
    let total =0;
    arry.forEach(function(element){
        total += element
    });
    return total;
}

console.log(SumArray(myNumber));


function tricolbal(){
    console.log("Asalamualaikum");
}
// setInterval(tricolbal,2000);
setTimeout (tricolbal,5000);
