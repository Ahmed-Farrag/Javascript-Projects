 // task 6
// let x =     prompt("write ur name" ,"Name")
 //    if(x == "hamza"){
 //        window.location = "anther.html"
 //    }

// task 7
let theHeading = document.getElementById("heading"),
theUl = document.getElementById("list"),
theButton = document.getElementById("button"),
theLi = document.getElementById("list").getElementsByTagName("li"),
counter = 1;


for(let i = 0 ; i < theLi.length; i++){
theLi[i].addEventListener('click', active);
}

function active(e){
if(e.target.innerHTML = e.target.innerHTML){
for(let i = 0 ; i < e.target.parentNode.children.length; i++){
e.target.parentNode.children[i].classList.remove("active")
}
e.target.classList.add("active")

}
}
theButton.addEventListener("click", add)
function add(){
theUl.innerHTML+= `<li>New ${counter} </li>`
counter++;
}