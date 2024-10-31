// let myHeroes=["zahoor_Ahmad ","sulaiman","jaaniya"];
// let myFriends=["hayat","jaana","khan"];

// let heroPower = {
//     zahoor_Ahmad:"president of Home",
//     sulaiman:"new baby born",
//     jaaniya:"i like him",

//     getZahoorPower: function(){
// console.log(`Zahoor power is ${this.zahoor_Ahmad}`);
//     }
// }

// Object.prototype.jaaniya = function(){
//     console.log(`jaaniya is present in all objects`);
// }
//     console.log(myHeroes.jaaniya())

//     Array.prototype.heyjaaniya = function(){
//         console.log(`hi jaaniya say hi`)
//     }


// Step 1: Creating a prototype object
let Person = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Step 2: Creating individual people (objects) who can use the library (Person)
let person1 = Object.create(Person);  // person1 can "borrow" greet method
person1.name = "Jaaniya";               // Giving person1 a name
person1.greet();                      // Output: Hello, my name is Jaaniya

let person2 = Object.create(Person);   // person2 can "borrow" greet method
person2.name = "Hayat";                  // Giving person2 a name
person2.greet();                       // Output: Hello, my name is Hayat
