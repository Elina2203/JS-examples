let app = document.querySelector("#app");
let amount = 42;
addAllButtons(amount);

document
  .querySelector("#btn-amount")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    amount = this.querySelector("[name=amount]").value;
    addAllButtons(amount);
  });

document.querySelector(".increase").addEventListener("click", function () {
  addButton(++amount);
});

function addButton(number) {
  let btn = document.createElement("a");
  btn.classList.add("btn");
  if (number % 3 == 0) {
    btn.classList.add("btn-danger");
  } else {
    btn.classList.add("btn-dark");
  }
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    this.textContent++;
  });
  btn.setAttribute("href", "#");
  btn.textContent = number;

  app.append(btn);
}

function addAllButtons(amount) {
  app.textContent = "";
  for (let i = 1; i <= amount; i++) {
    addButton(i);
  }
}
