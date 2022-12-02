function Ship(length) {
  const timesHit = 0;
  const sunk = false;
  const hit = function () {
    if (this.timesHit < this.length) {
      this.timesHit += 1;
    }
  };

  const isSunk = function () {
    return this.timesHit >= this.length
  };

  return { length, timesHit, sunk, hit, isSunk };
}

export default Ship;
