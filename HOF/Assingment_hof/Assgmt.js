
// //Reverse String with setTimeout
// let input = "Hello, World!";
// setTimeout(() => {
//     let reversedString = input.split("").reverse().join("");//Reverse String with setTimeout
//     console.log("Reversed String:", reversedString);
// }, 2000);


// //. Random Number Generator with Delay and Progress Indication
// let delay = 3; // delay in seconds

// const countdown = setInterval(() => {
//     if (delay > 0) {
//         console.log(`Generating random number in ${delay} seconds...`);
//         delay--;
//     } else {
//         clearInterval(countdown);
//         let randomNumber = Math.floor(Math.random() * 100); // Random number between 0-99
//         console.log("Generated Random Number:", randomNumber);
//     }
// }, 1000);


// Convert Store Inventory Prices to INR
const storeInventory = {
    "apple": 1,
    "banana": 0.5,
    "orange": 1.2
};

const exchangeRate = 80;
const convertedPrices = Object.fromEntries(
    Object.entries(storeInventory).map(([item, price]) => [item, price * exchangeRate])
);

console.log("Prices in INR:", convertedPrices);
