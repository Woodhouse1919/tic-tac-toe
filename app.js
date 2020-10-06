// Gameboard module
const gameBoard = (() => {
  // grabbing DOM Elements
  const grid = document.querySelectorAll(".grid");

  // Binding Events
  grid.forEach((grid) => {
    grid.addEventListener("click", addXO);
  });

  // Gameboard array
  const board = [];

  function addXO() {
    if (board.pop() == "X") {
      this.innerHTML = "O";
      board.push("O");
    } else if (board.pop() == "O") {
      this.innerHTML = "X";
      board.push("X");
    } else {
      this.innerHTML = "X";
      board.push("X");
    }
  }

  return { board };
})();

// Factory to generate new players
const playerFactory = (name) => {
  return { name };
};
