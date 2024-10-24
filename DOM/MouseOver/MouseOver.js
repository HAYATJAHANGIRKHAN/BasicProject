// Change the text of the heading when the mouse hovers over the button
document.getElementById("btn").addEventListener("mouseover", function() {
    document.getElementById("hoverText").textContent = "Mouse is Over the Button!";
});

// Reset the text of the heading when the mouse leaves the button
document.getElementById("btn").addEventListener("mouseout", function() {
    document.getElementById("hoverText").textContent = "MouseOver Example";
});

// Change the button size when mouse is over it
document.getElementById("btn").addEventListener("mouseover", function() {
    this.style.transform = "scale(1.2)"; // Make the button larger
});

// Reset the button size when the mouse leaves
document.getElementById("btn").addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
});
