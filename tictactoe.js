let container = document.querySelector(".container");
let btnReset = document.querySelector(".btn-reset");
let count = 0;
for (let i = 0; i <= 8; i++) {
  let element = document.createElement("a");
  element.setAttribute("href", "#");
  element.setAttribute("data-r", i);
  element.setAttribute("data-c", i);
  container.append(element);
  let elements = document.querySelectorAll(".container a");

  element.addEventListener("click", function () {
    count++;
    if (count > 9) {
      element.textContent = " ";
      console.log("game over");
      count = 0;
    }
    if (count % 2 == 0) {
      element.textContent = "0";
    } else {
      element.textContent = "X";
    }

    console.log("count:" + count);
  });
  btnReset.addEventListener("click", function () {
    element.textContent = " ";
    console.log("game over");
    count = 0;
  });
}
