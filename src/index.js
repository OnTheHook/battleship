import Player from "../src/playerFactory";
import Gameboard from "../src/gameboardFactory";
import Ship from "../src/shipFactory";

//Setting up the variables needed to run game
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

//Initializing the game board for each player and their ships
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

//randomly placing the computers ships on its board
compBoard.placeShipRandom(compShipOne);
compBoard.placeShipRandom(compShipTwo);
compBoard.placeShipRandom(compShipThree);
compBoard.placeShipRandom(compShipFour);
compBoard.placeShipRandom(compShipFive);
comp = Player(compBoard);

//function to update playing board with hit or miss class as well as ship class
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
          playerArr[i][k].classList.add("ship");
        }
      }
    }
  }
}

//function to update visually where player wants to place their ship
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

//button place set ship in place and an array of player ships to be placed
const placeButton = document.getElementById("place");
let playerShipArr = [
  playerShipOne,
  playerShipTwo,
  playerShipThree,
  playerShipFour,
  playerShipFive,
];

//game control variables
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
    current += 1;
  }
  if (current === 5) {
    allShipsPlaced = true;
    gameOn = true;
    playerOne = Player(playerBoard);
  }
});

//buttons to set the direction of the ship to be placed
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

//Setting up the visual game boards for the player and computer and logic to run game
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
      //on click checks to see if it is players turn and the game is running
      if (playerTurn && gameOn && compBoard.hitMiss[k][i] === null) {
        compBoard.receiveAttack(k, i);
        updateDisplay();
        playerTurn = false;
        gameOn = !playerBoard.allShipsSunk() && !compBoard.allShipsSunk();
        if(!gameOn) {
          alert("Player wins!")
        }
        if (!playerTurn && gameOn) {
          comp.randomPlay(playerBoard);
          updateDisplay();
          gameOn = !playerBoard.allShipsSunk() && !compBoard.allShipsSunk();
          if(!gameOn) {
            alert("Computer wins!")
          }
          playerTurn = true;
        }
      }
    });

    playerArr[k][i].addEventListener("click", () => {
      startX = k;
      startY = i;
      setShip();
    });
  }
}
