//README.md
//get all element into js
//click into button
//create array to contain colors


let button = document.createElement('button');
let div = document.createElement('div');
let content = document.createTextNode('Change Color');
button.appendChild(content);
document.body.appendChild(button);
document.body.appendChild(div);

button.setAttribute('class', 'btn1')
div.setAttribute('class', 'mydiv')

button.style.cssText=`
margin: 20px;
padding: 20px;
  
  cursor: pointer;
  fontSize: 20px;
border-radius: 5px;
background: peru;
color: white;
border: none;
`;

div.style.cssText=`
marginLeft: 20px;
border-radius: 5px;
  width: 200px;
  height: 150px;
  border: 1px solid #000;
`


let btn1 = document.querySelector(".btn1");
let div1 = document.querySelector(".mydiv");

var colors = ["red", "green", "black", "blue"];
var  i = 0;
 
btn1.onclick = function(){
  div1.style.background = colors[i];
i++;
if (i==4){
  i=0
}
}
