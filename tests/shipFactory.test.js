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
  test("check to see if ship sinks", () => {
    testShip.hit()
    testShip.hit()    
    testShip.hit()    
    testShip.hit()    
    testShip.hit()    
    expect(testShip.timesHit).toEqual(5)
    expect(testShip.isSunk()).toEqual(true)
  })
});
