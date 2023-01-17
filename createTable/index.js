//     <button>Create Table</button>

let inp1 = document.createElement("input");
let inp2 = document.createElement("input");
let button = document.createElement("button");

let content = document.createTextNode("Create Table");
inp1.setAttribute("id", "rows");
inp2.setAttribute("id", "cols");
inp1.setAttribute("type", "text", "placeholder", "enter number of rows");
inp2.setAttribute("type", "text", "placeholder", "enter number of colmns");

button.appendChild(content);
document.body.appendChild(inp1);
document.body.appendChild(inp2);
document.body.appendChild(button);

let rowsInpt = document.getElementById("rows"),
  colsInput = document.getElementById("cols"),
  btn = document.querySelector("button");

btn.addEventListener("click", createTable);
function createTable() {
  let body = document.body;
  let table = document.createElement("table");

  for (var i = 0; i < +rowsInpt.value; i++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (var x = 0; x < +colsInput.value; x++) {
      let td = document.createElement("td");
      let txt = document.createTextNode("item text");
      td.appendChild(txt);
      tr.appendChild(td);
    }
  }
  body.appendChild(table);
}
