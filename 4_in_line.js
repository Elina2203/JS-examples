function FourInLine() {
  this.app = document.getElementById("app");
  this.fields = app.getElementsByTagName("a");
  let matches = 0;
  this.checkWinner = function (id, value) {
    let checks = [
      [
        [-1, 0],
        [1, 0],
      ],
      [[0, 1]],
      [
        [1, 1],
        [-1, 1],
        [-1, -1],
        [1, -1],
      ],
    ];

    for (let check of checks) {
      for (let diffs of check) {
        countMatches.bind(this)(id, value, diffs[0], diffs[1]);
      }

      if (matches >= 3) {
        console.log("Winner is " + value);
        return;
      }
      matches = 0;
    }
  };

  let countMatches = function (id, value, x_diff, y_diff) {
    for (let n = 1; n <= 3; n++) {
      id = id + x_diff + y_diff * 10;
      if (id >= 0 && id <= 99 && this.fields[id].textContent == value) {
        matches++;
      } else {
        break;
      }
    }
  };
}

let four_in_line = new FourInLine();
let count = 0;

four_in_line.app.addEventListener("click", function (event) {
  let field = event.target;
  if (field.tagName != "A" || field.textContent != "") {
    return;
  }

  let id = Number(field.getAttribute("data-id"));
  //id >= 90 по сути означает, что мы можем ставить X || 0
  // на последнюю строку
  if (id >= 90 || four_in_line.fields[id + 10].textContent != "") {
    if (count % 2 == 0) {
      field.textContent = "x";
    } else {
      field.textContent = "o";
    }

    four_in_line.checkWinner(id, field.textContent);

    count++;
  }
});
