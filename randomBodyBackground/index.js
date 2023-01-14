// document.body.innerHTML=`
// <button id="btn"> Change Color </button>
// `;

let container = document.createElement('button');
let content = document.createTextNode('Change Color');
container.appendChild(content);
document.body.appendChild(container);
// console.log(container);

// container.classList.add("btn")
container.setAttribute('id','btn');


container.style.cssText = `
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
min-width: 200px;
min-height: 40px;
fontSize: 25px;
padding: 15px;
border: 1px solid #ddd;
border-radius: 40px;
cursor: pointer;
`;

let btn = document.querySelector("#btn");
btn.addEventListener("click", randomBg);

function randomBg() {
  document.body.style.backgroundColor =
    "#" + Math.random().toString(16).slice(2, 8);
}
