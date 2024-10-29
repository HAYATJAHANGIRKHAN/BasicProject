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
class product{

constructor(naam,price,rating){
    console.log("calling current");
    this.rating= rating;
this.naam= naam;
this.price= price;
}

display(){
    console.log("display");
}
}

const hay= new product("redmi",3000,3)
    console.log(hay)
    hay.display()