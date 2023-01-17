let img = document.createElement("img");
let p = document.createElement("p");
let content = document.createTextNode("Change Color");

p.appendChild(content);

img.setAttribute("name", "slidshow");

document.body.appendChild(img);
document.body.appendChild(p);

// style
img.style.cssText = `
width: 800px;
height: 350px;
display: block;
margin: 50px auto;
border: 1px solid #f50;
padding: 5px;
`;
p.style.cssText = `
width: 60%;
    margin: auto;
    background: #000;
    color: #fff;
    padding: 10px;
    fontSize: 30px;
    text-align: center;
    fontWeight: bold;
`;

let i = 0;
let slideName = [
  "https://images.unsplash.com/photo-1611016186353-9af58c69a533?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Njc5ODIyNjA&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1545061371-98a8355c9c0d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Njc5ODIyNjA&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1593544340816-93d84a106415?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Njc5ODIzNDc&ixlib=rb-4.0.3&q=80",
];

let slidshow = function () {
  document.slidshow.src = slideName[i];
  if (i < slideName.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("slidshow()", 2000);
};
slidshow();
