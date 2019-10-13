//VARIABLES
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBut = document.querySelector("#randomBut");

//FUNCTIONS
function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    css.innerHTML = body.style.background + ";";
}

//*Function to create a new gradient - from stackoverflow:
function newGradient() {
    var c1 = {
          r: Math.floor(255),
          g: Math.floor(35+Math.random()*220),
          b: Math.floor(Math.random()*55)
        };
        var c2 = {
          r: Math.floor(255),
          g: Math.floor(35+Math.random()*220),
          b: Math.floor(Math.random()*85)
        };
    c1.rgb = 'rgb('+c1.r+','+c1.g+','+c1.b+')';
    c2.rgb = 'rgb('+c2.r+','+c2.g+','+c2.b+')';
    return 'linear-gradient(to right, '+c1.rgb+', '+c2.rgb+')';
  }
  
//When The random colour generator butto is clicked, a new gradient is applied to the body's background via the 'newGradient()' function.
randomBut.addEventListener("click", function() {
    body.style.background = newGradient();
});




//On window load, set the body background colour to the value of the colour inputs
window.onload = setGradient();

//Each time the user changes the colour inputs, the body background colour matches and the values are written on screen
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);