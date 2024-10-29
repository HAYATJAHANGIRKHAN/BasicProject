// class product{
// //    name;
// //    price;
// //    rating;
//         //behaviours -> function -> member function

// constructor(name, price, rating) { 
//     console.log("calling the current product");
//     this.name = name;
//     this.price = price;
//     this.rating = rating;

// }

// display(){
//     console.log("display");
// }
// }

// const p =  new product("mi",22000,4);// new--> create an empty plain object
// //--> in the above piease of code we are calling the constructor method
// console.log(p);

// p.display();
// class product{

// constructor(naam,price,rating){
//     console.log("calling current",this);
//     this.rating= rating;
// this.naam= naam;
// this.price= price;
// }

// display(){
//     console.log("this refer to ",this);
// }
// }

// const hay= new product("redmi",3000,3)
//     console.log(hay)
//     hay.display()

// constructor in function
function product(n,p,r){
    this.name = n;
    this.price = p;
    this.rating = r;
}
const p= new product ("jaaniya",100000,5);
console.log(p);







    /**
     * 1. this keyword in js is different fromthan other languages.
     *2.this keyword refers to the  context from where we called.

     in the function constructor also 
     -if u return primitive it is ignored  ansd we return the object reffered  by this.
     -if u return  a custom obj ,then the custom obj is returned.
     - if u do not return anything , then object reffered by this is    returned.
     */