import Player from "../src/playerFactory";
import Gameboard from "../src/gameboardFactory";
import Ship from "../src/shipFactory";

let playerBoard;
let compBoard;
let playerOne;
let comp;
let playerShipOne;
let playerShipTwo;
let playerShipThree;
let playerShipFour;
let playerShipFive;
let compShipOne;
let compShipTwo;
let compShipThree;
let compShipFour;
let compShipFive;

playerBoard = Gameboard();
compBoard = Gameboard();
playerShipOne = Ship(5);
playerShipTwo = Ship(4);
playerShipThree = Ship(3);
playerShipFour = Ship(3);
playerShipFive = Ship(2);
compShipOne = Ship(5);
compShipTwo = Ship(4);
compShipThree = Ship(3);
compShipFour = Ship(3);
compShipFive = Ship(2);
playerBoard.placeShip(playerShipOne, 0, 0, "up");
playerBoard.placeShip(playerShipTwo, 1, 0, "up");
playerBoard.placeShip(playerShipThree, 2, 0, "up");
playerBoard.placeShip(playerShipFour, 3, 0, "up");
playerBoard.placeShip(playerShipFive, 4, 0, "up");
compBoard.placeShip(compShipOne, 0, 9, "down");
compBoard.placeShip(compShipTwo, 1, 9, "down");
compBoard.placeShip(compShipThree, 2, 9, "down");
compBoard.placeShip(compShipFour, 3, 9, "down");
compBoard.placeShip(compShipFive, 4, 9, "down");
comp = Player(compBoard);
playerOne = Player(playerBoard);

function updateDisplay() {
  for (let i = 0; i < 10; i++) {
    for (let k = 0; k < 10; k++) {
      if (compBoard.hitMiss[i][k] === true) {
        computerArr[i][k].classList.add("hit");
      }

      if (compBoard.hitMiss[i][k] === false) {
        computerArr[i][k].classList.add("miss");
      }

      if (playerBoard.hitMiss[i][k] === true) {
        playerArr[i][k].classList.add("hit");
      }

      if (playerBoard.hitMiss[i][k] === false) {
        playerArr[i][k].classList.add("miss");
      }
    }
  }
}

let playerTurn = true;
let gameOn = true;

let computerArr = [...Array(10)].map((e) => Array(10).fill(null));
let playerArr = [...Array(10)].map((e) => Array(10).fill(null));

for (let i = 0; i < 10; i++) {
  for (let k = 0; k < 10; k++) {
    computerArr[k][i] = document
      .getElementById("computer-board")
      .querySelector(`.row${i}`)
      .querySelector(`.column${k}`);
    playerArr[k][i] = document
      .getElementById("player-board")
      .querySelector(`.row${i}`)
      .querySelector(`.column${k}`);
    computerArr[k][i].addEventListener("click", () => {
      if (playerTurn && gameOn && compBoard.hitMiss[k][i] === null) {
        compBoard.receiveAttack(k, i);
        updateDisplay();
        playerTurn = false;
        gameOn = !playerBoard.allShipsSunk() && !compBoard.allShipsSunk();
        if (!playerTurn && gameOn) {
          comp.randomPlay(playerBoard);
          updateDisplay();
          gameOn = !playerBoard.allShipsSunk() && !compBoard.allShipsSunk();
          playerTurn = true;
        }
      }
    });
  }
}
