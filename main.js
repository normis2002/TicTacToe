let cells = document.querySelectorAll("#area td");

let i = 0;
let cellsNow;

function isVictory(cells) {
  let combs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let comb of combs) {
    if (
      cells[comb[0]].textContent == cells[comb[1]].textContent &&
      cells[comb[1]].textContent == cells[comb[2]].textContent &&
      cells[comb[0]].textContent != ""
    ) {
      cells[comb[0]].classList.add("backlight");
      cells[comb[1]].classList.add("backlight");
      cells[comb[2]].classList.add("backlight");

      return cellsNow;
    }
  }
  return false;
}

function areAllCellsFilled(cells) {
  for (let cell of cells) {
    if (!cell.textContent) {
      return false;
    }
  }
  return true;
}

function handleEvent() {
  if (!this.textContent) {
    if (i % 2 == 0) {
      cellsNow = this.textContent = "X";
    } else {
      cellsNow = this.textContent = "0";
    }

    i++;
  }

  let winner = isVictory(cells);

  if (winner) {
    document.getElementById("demo").innerHTML = `Winner: ${winner}`;
    clear(cells);
  } else if (areAllCellsFilled(cells)) {
    document.getElementById("demo").innerHTML = "It's a draw!";
  }
}

function start(cells) {
  i = 0;
  cellsNow = undefined;

  for (let cell of cells) {
    cell.addEventListener("click", handleEvent, true);
  }
}

function clear(cells) {
  for (let cell of cells) {
    cell.removeEventListener("click", handleEvent, true);
  }
}
document.getElementById('reset').onclick = function() {
  location.reload();
}
start(cells);