
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


// // Convert Store Inventory Prices to INR
// const storeInventory = {
//     "apple": 1,
//     "banana": 0.5,
//     "orange": 1.2
// };

// const exchangeRate = 80;
// const convertedPrices = Object.fromEntries(
//     Object.entries(storeInventory).map(([item, price]) => [item, price * exchangeRate])
// );



// // Filtering and Capitalizing Books Published After 2010

// const books = [
//     { title: "Book One", author: "john doe", year: 2008 },
//     { title: "Book Two", author: "jane doe", year: 2012 },
//     { title: "Book Three", author: "michael smith", year: 2015 }
// ];

// const recentBooks = books
//     .filter(book => book.year > 2010)
//     .map(book => ({
//         ...book,
//         author: book.author.split(" ").map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(" ")
//     }));

// console.log("Books published after 2010:", recentBooks);


// // URL Validation
// function validateURL(url) {
//     const regex = /^(https?:\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+(\.[a-zA-Z]+)+)$/;
//     if (regex.test(url)) {
//         console.log("Valid URL");
//     } else {
//         console.log("Invalid URL");
//     }
// }

// validateURL("https://example.com");  // Replace with any URL to test


// LinkedIn Profile URL Validator
function validateLinkedInProfile(url) {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;
    if (regex.test(url)) {
        console.log("Valid LinkedIn Profile URL");
    } else {
        console.log("Invalid LinkedIn Profile URL");
    }
}

validateLinkedInProfile("https://www.linkedin.com/in/Hayat_khan123"); // Replace with any URL to test  
