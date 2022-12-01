import Ship from "../src/shipFactory";

describe("ship functions", () => {
  let testShip;

  beforeEach(() => {
    testShip = Ship(5);
  });
  test("ship created", () => {
    expect(testShip.length).toEqual(5);
  });

  test("hit increased", () => {
    testShip.hit();
    expect(testShip.timesHit).toEqual(1);
  });
});
