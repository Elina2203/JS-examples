let board = document.querySelector(".board");
let arr_1 = [];
let arr_2 = [];
let count = 0;

let winningMessageElement = document.getElementById("winningMessage");
let winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
let restartButton = document.getElementById("restartButton");

for (let i = 0; i <= 8; i++) {
  let element = document.createElement("a");
  element.setAttribute("href", "#");
  element.setAttribute("data-id", i);
  board.append(element);

  element.addEventListener("click", function () {
    isDraw(check);

    if (
      count < 10 &&
      element.textContent != "0" &&
      element.textContent != "X"
    ) {
      count++;
      let field = element.getAttribute("data-id");
      if (count % 2 == 0) {
        element.textContent = "0";
        element.classList.add("added_0");
        arr_1.push(field);
        if (arr_1.length >= 3) {
          check(arr_1, "0");
        }
      } else {
        element.textContent = "X";
        element.classList.add("added_X");
        arr_2.push(field);
        if (arr_2.length >= 3) {
          check(arr_2, "X");
        }
      }

      console.log("X:", arr_2);
      console.log("0:", arr_1);
      console.log("count:" + count);
    }

    // isDraw();
  });
}

restartButton.addEventListener("click", restart);

function restart() {
  let elements = document.querySelectorAll(".board a");
  for (element of elements) {
    element.textContent = " ";
    element.classList.remove("added_X");
    element.classList.remove("added_0");
    arr_1 = [];
    arr_2 = [];
    winningMessageElement.classList.remove("show");
  }

  count = 0;
}

function check(value, winner) {
  //value - это будут наши массивы   arr_1, arr_2
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
      value.includes(combination[0]) && //value -наши массивы arr_1 и arr_2 содержат значения из WinnerCombinations
      value.includes(combination[1]) && //где combination одно из значений
      value.includes(combination[2])
    ) {
      winningMessageElement.classList.add("show");
      winningMessageTextElement.textContent =
        winner + "   " + "You are winner!";
    }
  });
}
function isDraw(check) {
  if (count >= 8) {
    winningMessageElement.classList.add("show");
    winningMessageTextElement.textContent = "DRAW!";
  }
}
