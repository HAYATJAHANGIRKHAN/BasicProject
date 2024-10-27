
//Reverse String with setTimeout
let input = "Hello, World!";
setTimeout(() => {
    let reversedString = input.split("").reverse().join("");//Reverse String with setTimeout
    console.log("Reversed String:", reversedString);
}, 2000);


//. Random Number Generator with Delay and Progress Indication
let delay = 3; // delay in seconds

const countdown = setInterval(() => {
    if (delay > 0) {
        console.log(`Generating random number in ${delay} seconds...`);
        delay--;
    } else {
        clearInterval(countdown);
        let randomNumber = Math.floor(Math.random() * 100); // Random number between 0-99
        console.log("Generated Random Number:", randomNumber);
    }
}, 1000);
