// Get references to input field and paragraph for displaying key info
const input = document.getElementById("keyInput");
const keyInfo = document.getElementById("keyInfo");

// KeyPress event: Fires when a character key is pressed
input.addEventListener("keypress", function(event) {
    keyInfo.textContent = `Key Pressed: '${event.key}'`;
});

// KeyDown event: Fires when any key is pressed down
input.addEventListener("keydown", function(event) {
    keyInfo.textContent = `Key Down: '${event.key}'`;
});

// KeyUp event: Fires when any key is released
input.addEventListener("keyup", function(event) {
    keyInfo.textContent = `Key Released: '${event.key}'`;
});
