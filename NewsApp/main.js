// XMLHttpRequest
// var allData = [];
// var httpReq = new XMLHttpRequest();
// httpReq.open("GET", "https://jsonplaceholder.typicode.com/comments");
// httpReq.send();
// httpReq.onreadystatechange = function(){
//     if(httpReq.readyState == 4 && httpReq.status == 200){
//       allData = JSON.parse(httpReq.response);
//       displayData();
//     }
// };

// function displayData(){
//     var temp = ``;
//     for(var i = 0; i < allData.length; i++){
//         temp += `
//         <div class="col-md-3">
//         <div class="item">
//             <h5>`+allData[i].title+`</h5>
//             <p>`+allData[i].body+`</p>
//         </div>
//     </div>
//         `
//     }
//   document.getElementById("rowData").innerHTML = temp;
// };

//httpRecust
let allData = [];
var httpReq = new XMLHttpRequest();
var category = "general";
let links = document;
getData(category);

let link = document.querySelectorAll(".nav-link");

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function (e) {
    category = e.target.text;
    getData(category);
  });
}

function getData(category) {
  httpReq.open(
    "GET",
    `https://newsapi.org/v2/top-headlines?country=eg&category=${category}&apiKey=928adb56ce384e52a0c97c401f6fdada`
);
  httpReq.send();
  httpReq.onreadystatechange = function () {
    if (httpReq.readyState == 4 && httpReq.status == 200) {
      allData = JSON.parse(httpReq.response).articles;
      displayData();
    }
  };
}

function displayData() {
  let temp = ``;
  for (i = 0; i < allData.length; i++) {
    temp +=
      `
<div class="col-md-3">
<div class="item">
<img src="` +
      allData[i].urlToImage +
      `" class="img-fluid"/>
  <h5>` +
      allData[i].title +
      `</h5>
  <p>` +
      allData[i].description +
      `</p>
</div>
</div>
`;
  }
  document.getElementById("rowData").innerHTML = temp;
}
