let board = document.querySelector(".board");
let btnReset = document.querySelector(".btn-reset");
let arr_1 = [];
let arr_2 = [];
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
      let field = element.getAttribute("data-id");
      if (count % 2 == 0) {
        element.textContent = "0";
        element.classList.add(".added_0");
        arr_1.push(field);
        if (arr_1.length >= 3) {
          check(arr_1, "0");
        }
      } else {
        element.textContent = "X";
        element.classList.add(".added_X");
        arr_2.push(field);
        if (arr_2.length >= 3) {
          check(arr_2, "X");
        }
      }

      console.log("X:", arr_2);
      console.log("0:", arr_1);

      console.log("count:" + count);
    }
  });
}
btnReset.addEventListener("click", reset);

function reset() {
  let elements = document.querySelectorAll(".board a");
  for (element of elements) {
    element.textContent = " ";
    element.classList.remove(".added_X");
    element.classList.remove(".added_0");
  }

  console.log("game over");
  count = 0;
}

function check(value, winner) {
  let winCombinations = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"],
  ];
  winCombinations.forEach((combination) => {
    //одна из выигрышных комбинаций
    if (
      value.includes(combination[0]) &&
      value.includes(combination[1]) &&
      value.includes(combination[2])
    ) {
      console.log(winner, ":", "is the winner");
    }
  });
}
