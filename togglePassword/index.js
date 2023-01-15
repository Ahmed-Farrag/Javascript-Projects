// get all element
//click on show button
//-convert input password to text
//- convert show text to hide

//click on hide button
//- convert input text to password
//-convert hide text to show

// create element
let inp = document.createElement("input");
let button = document.createElement("button");
let contet = document.createTextNode("Show");

// set attr in element
inp.setAttribute("id", "myInput");
button.setAttribute("id", "btn");

inp.setAttribute("type", "password");
button.setAttribute("data-show", "show");

// make chaild in pairant
button.appendChild(contet);
document.body.appendChild(inp);
document.body.appendChild(button);

// css
inp.style.fontSize = "30px";
button.style.fontSize = "30px";

// variables
let myInput = document.querySelector("#myInput"),
  myButton = document.querySelector("#btn");

// events
myButton.addEventListener("click", togglePassword);

// function
function togglePassword() {
  if (myButton.getAttribute("data-text") == "show") {
    myInput.setAttribute("type", "text");
    this.setAttribute("data-text", "hide");
    this.innerHTML = "Hide";
  } else {
    myInput.setAttribute("type", "password");
    this.setAttribute("data-text", "show");
    this.innerHTML = "Show";
  }
}
