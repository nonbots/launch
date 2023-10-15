let Classes = require("./classes.js");

describe("test", () => {
  test("two objects are different", () => {
    const obj1 = new Classes();
    const obj2 = new Classes();
    expect(obj1).not.toBe(obj2);
  });
});