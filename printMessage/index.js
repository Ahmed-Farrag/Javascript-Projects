//README.md
//#print simple massage app

//#Todo:
//#html
//-create input tag
//-create button
//create pargraph

//in js we need to
//get all elemets in html
//add click event to button
//get value from input
//put value into p

//# get element into variable
//# events

// elements
let div = document.createElement("div");
let inp = document.createElement("input");
let btn = document.createElement("button");
let p = document.createElement("p");

// text
let content = document.createTextNode("ADD MSG");

// attributes
div.setAttribute("class", "printMsg");
inp.setAttribute("id", "input");
btn.setAttribute("id", "btn");
p.setAttribute("id", "msg");

// set attr in element
inp.setAttribute("type", "text", "placeholder", "Enter Msg!");

// add child in pairent
document.body.appendChild(div);

div.appendChild(inp);
div.appendChild(btn);
div.appendChild(p);
btn.appendChild(content);

// css
document.body.style.cssText = `
background: red;
`;

div.style.cssText = `
padding: 20px 15px;
background: #f6f6f6;
`;
inp.style.cssText = `
width: 100%;
height: 40px;     
`;
btn.style.cssText = `
width: 100%;
height: 40px;
margin: 10px;
background: brown;
color: #fff;
fontSize: 20px;
cursor: pointer;
opacity: 0.7;
transition: 0.5s;
`;
p.style.cssText = `
color: green;
fontSize: 20px;
margin: 5px 0 0 0;

`;

// logic
let input = document.getElementById("input"),
  button = document.getElementById("btn"),
  msg = document.getElementById("msg");

button.onclick = function () {
  let inputValue = input.value;

  if (inputValue != "") {
    msg.innerHTML = inputValue;
    input.value = "";
  }
};
