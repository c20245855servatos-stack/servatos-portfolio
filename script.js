console.log("Hello, World!");
console.log ("From the script.js file");

const myName = "Jeremias";
let age= 20;
let number = "09519742640";
let address = "Purok agtongtong, Brgy. Tortosa, Manapala";

const heading = document.querySelector ("h1");
heading.textContent = "Servatos Apparel";
heading.style.color = "cyan";
heading.style.backgroundColor = "white";
heading.style.fontSize = "50px";
console.log(heading);

heading.addEventListener("click", function() {
    heading.style.color = "blue";
    console.log("Heading clicked!");
});

