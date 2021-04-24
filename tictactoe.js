let board = document.querySelector(".board");
let btnReset = document.querySelector(".btn-reset");

let count = 0;

const winningMessageElement = document.getElementById("winningMessage");

for (let i = 0; i <= 8; i++) {
  let element = document.createElement("a");
  element.setAttribute("href", "#");
  element.setAttribute("data-id", i);
  board.append(element);

  element.addEventListener("click", function () {
    if (count > 8) {
      reset();
    }

    if (element.textContent != "0" && element.textContent != "X") {
      count++;
      if (count % 2 == 0) {
        element.textContent = "0";
        element.classList.add(".added_0");
      } else {
        element.textContent = "X";
        element.classList.add(".added_x");
      }

      console.log("count:" + count);
    }
  });
}
btnReset.addEventListener("click", reset);

function reset() {
  let elements = document.querySelectorAll(".board a");
  for (element of elements) {
    element.textContent = " ";
  }
  console.log("game over");
  count = 0;
}
