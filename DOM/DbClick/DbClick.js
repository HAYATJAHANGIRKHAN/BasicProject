
document.getElementById("btn").addEventListener("dblclick", function() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "black" ? "white" : "black";
    document.body.style.color = 
        document.body.style.color === "white" ? "black" : "white";
});
