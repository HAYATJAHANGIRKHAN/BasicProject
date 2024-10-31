let myHeroes=["zahoor_Ahmad ","sulaiman","jaaniya"];
let myFriends=["hayat","jaana","khan"];

let heroPower = {
    zahoor_Ahmad:"president of Home",
    sulaiman:"new baby born",
    jaaniya:"i like him",

    getZahoorPower: function(){
console.log(`Zahoor power is ${this.zahoor_Ahmad}`);
    }
}

Object.prototype.jaaniya = function(){
    console.log(`jaaniya is present in all objects`);
}
    console.log(myHeroes.jaaniya())

    Array.prototype.heyjaaniya = function(){
        console.log(`hi jaaniya say hi`)
    }