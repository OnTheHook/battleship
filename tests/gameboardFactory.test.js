import Gameboard from "../src/gameboardFactory";
import Ship from "../src/shipFactory";

describe("Gameboard", () => {
  let gameboard;
  let ship;
  let testObjectArray;
  let testBooleanArray;

  beforeEach(() => {
    gameboard = Gameboard();
    ship = Ship(4);
    testObjectArray = [];
    testBooleanArray = [];

    for (let i = 0; i < 10; i++) {
      testObjectArray[i] = [];
      testBooleanArray[i] = [];
      for (let j = 0; j < 10; j++) {
        testObjectArray[i][j] = null;
        testBooleanArray[i][j] = false;
      }
    }
  });

  test("creates and initializes a gameboard", () => {
    expect(gameboard.board).toEqual(testObjectArray);
  });

  test("place ship on gameboard", () => {
    gameboard.placeShip(ship, 0, 0, "right");
    testObjectArray[0][0] = ship;
    testObjectArray[1][0] = ship;
    testObjectArray[2][0] = ship;
    testObjectArray[3][0] = ship;

    expect(gameboard.board).toEqual(testObjectArray);
  });

  test("receive attack on ship", () => {
    gameboard.placeShip(ship, 0, 0, "right");
    gameboard.receiveAttack(1, 0);
    expect(gameboard.hitMiss[1][0]).toEqual(true);
    expect(ship.timesHit).toEqual(1);
  });

  test("miss attack", () => {
    gameboard.receiveAttack(1, 0);
    expect(gameboard.hitMiss[1][0]).toEqual(false);
    
  });

  test("to see if all ships are sunk", () => {
    gameboard.placeShip(ship, 0, 0, "right");
    expect(gameboard.allShipsSunk()).toEqual(false)
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);
    gameboard.receiveAttack(2, 0);
    gameboard.receiveAttack(3, 0);
    expect(gameboard.allShipsSunk()).toEqual(true)
  })

  test("prevent ship placement on taken spot", () => {
    let ship2 = Ship(2)
    expect(gameboard.isPlacementPossible(ship2, 0, 0,"down")).toEqual(false)
    expect(gameboard.isPlacementPossible(ship2, 0, 0,"up")).toEqual(true)
    gameboard.placeShip(ship, 0, 0, "right");
    expect(gameboard.isPlacementPossible(ship2, 0, 0,"up")).toEqual(false)
    
  })
});
