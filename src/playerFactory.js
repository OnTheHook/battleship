import Gameboard from "../src/gameboardFactory";
import Ship from "../src/shipFactory";

function Player(gameboard) {
  const findEmptySpots = function (board) {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (board.hitMiss[i][j] === null) {
          arr.push([i, j]);
        }
      }
    }

    return arr;
  };
  const randomPlay = function (board) {
    let possibleSpots = findEmptySpots(board);
    let spot = possibleSpots[Math.floor(Math.random() * possibleSpots.length)];
    board.receiveAttack(...spot);
  };

  return { gameboard, randomPlay };
}

export default Player;
