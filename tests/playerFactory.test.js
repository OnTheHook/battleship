import Player from "../src/playerFactory";
import Gameboard from "../src/gameboardFactory";
import Ship from "../src/shipFactory";

describe("Player", () => {
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

  beforeEach(() => {
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
    playerBoard.placeShip(playerShipOne, 0, 0,"up")
    playerBoard.placeShip(playerShipTwo, 1, 0,"up")
    playerBoard.placeShip(playerShipOne, 2, 0,"up")
    playerBoard.placeShip(playerShipOne, 3, 0,"up")
    playerBoard.placeShip(playerShipOne, 4, 0,"up")
    compBoard.placeShip(compShipOne, 0, 9,"down")
    compBoard.placeShip(compShipTwo, 1, 9,"down")
    compBoard.placeShip(compShipThree, 2, 9,"down")
    compBoard.placeShip(compShipFour, 3, 9,"down")
    compBoard.placeShip(compShipFive, 4, 9,"down")
    comp = Player(compBoard);
    playerOne = Player(playerBoard);
  });

  test("player attacking computer", () => {
    comp.gameboard.receiveAttack(0,9)
    expect(compShipOne.timesHit).toEqual(1)
  });
});
