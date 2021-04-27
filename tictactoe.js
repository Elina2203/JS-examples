let board = document.querySelector(".board");
let arr_1 = [];
let arr_2 = [];
let count = 0;
let restartButton = document.getElementById("restartButton");
const winningMessageElement = document.getElementById("winningMessage");
let winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
for (let i = 0; i <= 8; i++) {
  let element = document.createElement("a");
  element.setAttribute("href", "#");
  element.setAttribute("data-id", i);
  board.append(element);
  //При клике на клетку
  element.addEventListener("click", function () {
    if (count > 8) {
      winningMessageElement.classList.add("show");
      winningMessageTextElement.textContent = "DRAW!";
      restart();
    }

    if (element.textContent != "0" && element.textContent != "X") {
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
  }

  console.log("game over");
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
      value.includes(combination[0]) &&
      value.includes(combination[1]) &&
      value.includes(combination[2])
    ) {
      console.log(winner, ":", "is the winner");
      // restartButton.classList.add("show");
      winningMessageElement.classList.add("show");
      winningMessageTextElement.textContent =
        winner + "   " + "You are winner!";
    }
  });
}
function isDraw() {
  let elements = document.querySelectorAll(".board a");
  for (element of elements) {
    if (
      element.classList.contains("added_X") ||
      element.classList.contains("added_0")
    ) {
      console.log("Draw!");
    }
  }
}
