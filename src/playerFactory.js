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

  const findHitSpots = function (board) {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (board.hitMiss[i][j] === true) {
          arr.push([i, j]);
        }
      }
    }

    return arr;
  };

  const findAdjacentOfHit = function (arr) {
    let adjacentSpots = arr.reduce((acc, cur) => {
      let [x, y] = cur;
      acc.push([x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]);
      return acc;
    }, []);

    let set = new Set(adjacentSpots.map(JSON.stringify));
    let arr2 = Array.from(set).map(JSON.parse);

    return arr2;
  };

  const randomPlay = function (board) {
    let possibleSpots = findEmptySpots(board);
    let hits = findHitSpots(board);
    let adjacent = findAdjacentOfHit(hits);
    let spot;

    let adjacentPossible = adjacent
      .map(JSON.stringify)
      .filter((ele) => {
        return possibleSpots.map(JSON.stringify).includes(ele);
      })
      .map(JSON.parse);
      
    if (adjacentPossible.length > 0) {
      spot =
        adjacentPossible[Math.floor(Math.random() * adjacentPossible.length)];
    } else {
      spot = possibleSpots[Math.floor(Math.random() * possibleSpots.length)];
    }
    board.receiveAttack(...spot);
  };

  return { gameboard, randomPlay };
}

export default Player;
