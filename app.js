// Gameboard module
const game = (() => {
  // grabbing DOM Elements
  const grid = document.querySelectorAll(".grid");
  const restartBtn = document.querySelector(".restart");
  const winningCombo = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal Top Left to Bottom Right
    [2, 4, 6], // Diagonal Top Right to Bottom Left
  ];

  // Binding Events
  grid.forEach((grid) => {
    grid.addEventListener("click", addXO);
  });

  restartBtn.addEventListener("click", reset);

  // Gameboard array
  let board = [];

  function addXO() {
    if (this.innerHTML === "") {
      if (board[board.length - 1] === "X") {
        this.innerHTML = "O";
        board.push("O");
        checkWin();
      } else if (board[board.length - 1] === "O") {
        this.innerHTML = "X";
        board.push("X");
        checkWin();
      } else {
        this.innerHTML = "X";
        board.push("X");
        checkWin();
      }
    }
  }

  function checkWin() {
    for (let i = 0; i < 8; i++) {
      if (
        grid[winningCombo[i][0]].textContent === "X" &&
        grid[winningCombo[i][1]].textContent === "X" &&
        grid[winningCombo[i][2]].textContent === "X"
      ) {
        alert("X Wins!");
      } else if (
        grid[winningCombo[i][0]].textContent === "O" &&
        grid[winningCombo[i][1]].textContent === "O" &&
        grid[winningCombo[i][2]].textContent === "O"
      ) {
        alert("O Wins!");
      } else if (board.length === 9) {
        console.log('tie');
      }
    }
  }

  function reset() {
    board = [];
    grid.forEach((grid) => {
      grid.textContent = "";
    });
  }

  return { checkWin, reset };
})();

// Factory to generate new players
const playerFactory = (name) => {
  return { name };
};
