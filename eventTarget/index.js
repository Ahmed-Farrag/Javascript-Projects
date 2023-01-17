let h1 = document.createElement("h1"),
  span = document.createElement("span"),
  btn = document.createElement("button"),
  p = document.createElement("p"),
  content1 = document.createTextNode("H1: text any thing"),
  content2 = document.createTextNode("SPAN: click here"),
  content3 = document.createTextNode("BUTTON : click me");

p.setAttribute("id", "demo");

h1.appendChild(content1);
span.appendChild(content2);
btn.appendChild(content3);

document.body.appendChild(h1);
document.body.appendChild(span);
document.body.appendChild(btn);
document.body.appendChild(p);

p.style.cssText = `
color: blue;
  font-size: 40px;
  margin: 0
`;
span.style.cssText = `
background: pink;
margin :5px;
border-radius: 5px;

`;
btn.style.cssText = `
background: aquamarine;
  border : 1px solid aquamarine;
  border-radius: 5px;

`;

function myfunction(event) {
  document.getElementById("demo").innerHTML = event.target.nodeName;
}
