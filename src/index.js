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

compBoard.placeShipRandom(compShipOne);
compBoard.placeShipRandom(compShipTwo);
compBoard.placeShipRandom(compShipThree);
compBoard.placeShipRandom(compShipFour);
compBoard.placeShipRandom(compShipFive);
comp = Player(compBoard);

console.log(compBoard.board);
console.log(playerBoard.board);
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

      if (!allShipsPlaced) {
        playerArr[i][k].className = "";
        if (playerBoard.board[i][k] != null) {
          console.log("SHIP DISPLAYED");
          playerArr[i][k].classList.add("ship");
        }
      }
    }
  }
}

function setShip() {
  if (!allShipsPlaced) {
    let disStartX = startX;
    let disStartY = startY;

    let disEndX, disEndY;
    if (direction === "up") {
      disEndY = disStartY + playerShipArr[current].length - 1;
      disEndX = disStartX;
    } else if (direction === "down") {
      disEndY = disStartY - playerShipArr[current].length + 1;
      disEndX = disStartX;
    } else if (direction === "right") {
      disEndY = disStartY;
      disEndX = disStartX + playerShipArr[current].length - 1;
    } else if (direction === "left") {
      disEndY = disStartY;
      disEndX = disStartX - playerShipArr[current].length + 1;
    }
    if (disStartX > disEndX) {
      [disStartX, disEndX] = [disEndX, disStartX];
    }

    if (disStartY > disEndY) {
      [disStartY, disEndY] = [disEndY, disStartY];
    }
    let legalPlaces = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (
      !legalPlaces.includes(disStartX) ||
      !legalPlaces.includes(disStartY) ||
      !legalPlaces.includes(disEndX) ||
      !legalPlaces.includes(disEndY)
    ) {
      return;
    }

    updateDisplay();
    for (let p = disStartX; p <= disEndX; p++) {
      for (let j = disStartY; j <= disEndY; j++) {
        playerArr[p][j].classList.add("ship");
      }
    }
  }
}

const placeButton = document.getElementById("place");
let playerShipArr = [
  playerShipOne,
  playerShipTwo,
  playerShipThree,
  playerShipFour,
  playerShipFive,
];

let current = 0;
let playerTurn = true;
let gameOn = false;
let allShipsPlaced = false;
let startX = null;
let startY = null;
let direction = "right";
let computerArr = [...Array(10)].map((e) => Array(10).fill(null));
let playerArr = [...Array(10)].map((e) => Array(10).fill(null));

placeButton.addEventListener("click", () => {
  console.log("Start X: " + startX);
  console.log("Start Y: " + startY);
  console.log("Current: " + current);
  console.log("Current ship: " + playerShipArr[current]);
  console.log("Direction: " + direction);
  if (
    allShipsPlaced === false &&
    startX !== null &&
    playerBoard.isPlacementPossible(
      playerShipArr[current],
      startX,
      startY,
      direction
    ) === true
  ) {
    playerBoard.placeShip(playerShipArr[current], startX, startY, direction);
    updateDisplay();
    console.log("PLACED");
    console.log(playerBoard.board);
    current += 1;
  }
  if (current === 5) {
    allShipsPlaced = true;
    gameOn = true;
    playerOne = Player(playerBoard);
  }
});

const down = document.getElementById("down");
const up = document.getElementById("up");
const left = document.getElementById("left");
const right = document.getElementById("right");

down.addEventListener("click", () => {
  if (!allShipsPlaced) {
    direction = "down";
    if (startX) {
      setShip();
    }
  }
});
up.addEventListener("click", () => {
  if (!allShipsPlaced) {
    direction = "up";
    if (startX) {
      setShip();
    }
  }
});
left.addEventListener("click", () => {
  if (!allShipsPlaced) {
    direction = "left";
    if (startX) {
      setShip();
    }
  }
});
right.addEventListener("click", () => {
  if (!allShipsPlaced) {
    direction = "right";
    if (startX) {
      setShip();
    }
  }
});

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

    playerArr[k][i].addEventListener("click", () => {
      startX = k;
      startY = i;
      console.log("Start X click " + startX);
      console.log("Start Y click " + startY);
      setShip();
    });
  }
}
