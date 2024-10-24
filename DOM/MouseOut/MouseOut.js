// Get references to the button and the heading
const button = document.getElementById("btn");
const heading = document.getElementById("hoverText");

// MouseOver: When mouse hovers over the button
button.addEventListener("mouseover", function() {
    // Change heading text
    heading.textContent = "Mouse is Over the Button!";
    
    // Change button color and scale size
    button.style.backgroundColor = "#FFA500"; // Orange
    button.style.transform = "scale(1.2)"; // Enlarge button

    // Log message
    console.log("Mouse is hovering over the button");
});

// MouseOut: When mouse leaves the button
button.addEventListener("mouseout", function() {
    // Reset heading text
    heading.textContent = "MouseOver and MouseOut Example";
    
    // Reset button color and scale size
    button.style.backgroundColor = "#4CAF50"; // Original green
    button.style.transform = "scale(1)"; // Reset size

 
});


