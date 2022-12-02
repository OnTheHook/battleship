function Gameboard() {
  const board = [...Array(10)].map((e) => Array(10).fill(null));

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
      startX, (endX = endX), startX;
    }

    if (startY > endY) {
      startY, (endY = endY), startY;
    }

    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        this.board[x][y] = ship;
      }
    }
  };

  return { board, placeShip };
}

export default Gameboard;
