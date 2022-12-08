import Ship from "./shipFactory";

function Gameboard() {
  const board = [...Array(10)].map((e) => Array(10).fill(null));
  const hitMiss = [...Array(10)].map((e) => Array(10).fill(null));

  const isPlacementPossible = function (ship, startX, startY, direction) {
    let legalPlaces = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (!legalPlaces.includes(startX) || !legalPlaces.includes(startY)) {
      return false;
    }

    let endX, endY;
    if (direction === "up") {
      endY = startY + ship.length - 1;
      endX = startX;
    } else if (direction === "down") {
      endY = startY - ship.length + 1;
      endX = startX;
    } else if (direction === "right") {
      endY = startY;
      endX = startX + ship.length - 1;
    } else if (direction === "left") {
      endY = startY;
      endX = startX - ship.length + 1;
    }

    if (!legalPlaces.includes(endX) || !legalPlaces.includes(endY)) {
      return false;
    }

    if (startX > endX) {
      [startX, endX] = [endX, startX];
    }

    if (startY > endY) {
      [startY, endY] = [endY, startY];
    }

    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        if (this.board[x][y] != null) {
          return false;
        }
      }
    }

    return true;
  };

  const placeShip = function (ship, startX, startY, direction) {
    let legalPlaces = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (!legalPlaces.includes(startX) || !legalPlaces.includes(startY)) {
      return;
    }

    let endX, endY;
    if (direction === "up") {
      endY = startY + ship.length - 1;
      endX = startX;
    } else if (direction === "down") {
      endY = startY - ship.length + 1;
      endX = startX;
    } else if (direction === "right") {
      endY = startY;
      endX = startX + ship.length - 1;
    } else if (direction === "left") {
      endY = startY;
      endX = startX - ship.length + 1;
    }

    if (startX > endX) {
      [startX, endX] = [endX, startX];
    }

    if (startY > endY) {
      [startY, endY] = [endY, startY];
    }

    if (this.isPlacementPossible(ship, startX, startY, direction) === false) {
      return;
    }

    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        this.board[x][y] = ship;
      }
    }
  };

  const receiveAttack = function (x, y) {
    if (this.board[x][y] != null) {
      this.hitMiss[x][y] = true;
      this.board[x][y].hit();
    } else {
      this.hitMiss[x][y] = false;
    }
  };

  const allShipsSunk = function () {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.board[i][j] != null) {
          if (this.board[i][j].isSunk() === false) {
            return false;
          }
        }
      }
    }
    return true;
  };

  const placeShipRandom = function (ship) {
    let legalPlaces = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let directions = ["down", "left", "up",  "right"];
    let randomX = legalPlaces[Math.floor(Math.random() * legalPlaces.length)];
    let randomY = legalPlaces[Math.floor(Math.random() * legalPlaces.length)];
    let randomDirection =
      directions[Math.floor(Math.random() * directions.length)];

    while (
      this.isPlacementPossible(ship, randomX, randomY, randomDirection) ===
      false
    ) {
      randomX = legalPlaces[Math.floor(Math.random() * legalPlaces.length)];
      randomY = legalPlaces[Math.floor(Math.random() * legalPlaces.length)];
      randomDirection = directions[Math.floor(Math.random() * directions.length)];
    }
    this.placeShip(ship, randomX, randomY, randomDirection);
  };

  return {
    board,
    hitMiss,
    placeShip,
    receiveAttack,
    allShipsSunk,
    isPlacementPossible,
    placeShipRandom
  };
}

export default Gameboard;
