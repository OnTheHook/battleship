function Ship(length) {
  const timesHit = 0;
  const sunk = false;
  const hit = function () {
    this.timesHit += 1;
  };

  const isSunk = function () {
    if (this.timesHit > this.length) return true;
  };

  return { length, timesHit, sunk, hit };
}

export default Ship;
