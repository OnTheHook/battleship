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
});
