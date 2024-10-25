const powertw0=(n)=>{
// console.log(powercube**n);
return n**2;

}
function powercube(powertw0,n){
    return powertw0(n)*n;
}

console.log(powercube(powertw0,3));


function sayHello(){
    return function(){
        console.log("Asalamulaikum Jaaniya")
       
    }
}
let guessValue= sayHello();
console.log(guessValue);
guessValue();