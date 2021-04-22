console.log("Hello world");

let table = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

console.log(table);

let app = document.querySelector("#app");
let table_element = document.createElement("table");

let elements = [];

for (let r = 0; r <= 2; r++) {
  let tr = document.createElement("tr");
  for (let c = 0; c <= 2; c++) {
    let td = document.createElement("td");
    let element = document.createElement("a");
    element.setAttribute("href", "#");
    element.textContent = table[r][c];

    element.addEventListener("click", function () {
      element.textContent--;
    });
    elements.push(element);

    tr.append(td);
    td.append(element);
  }
  table_element.append(tr);
}

app.append(table_element);

let n = 0;
document.querySelector(".fill").addEventListener("click", function () {
  elements[n++].textContent++;

  if (n > 8) {
    n = 0;
  }
});
