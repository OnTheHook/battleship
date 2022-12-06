function Player(gameboard, computer) {
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
    
  };

  return { gameboard };
}

export default Player;
