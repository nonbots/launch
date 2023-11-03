let MinSum = require("./minSum.js");

describe("test", () => {
    // let feature;
    // beforeEach(() => {
    //     feature = new Featured();
    // });
    test("test1", () => {
        let minSum =  new MinSum([1, 2, 3, 4]);
        expect(minSum.getSum()).toBe(null);
    });
    test("test2", () => {
        let minSum =  new MinSum([1, 2, 3, 4, 5, -5]);
        expect(minSum.getSum()).toBe(9); 
    });
    test("test3", () => {
        let minSum =  new MinSum([1, 2, 3, 4, 5, 6]);
        expect(minSum.getSum()).toBe(15); 
    });
    test("test4", () => {
        let nums =  new MinSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]);
        expect(nums.getSum()).toBe(16); 
    });
    test("test5", () => {
        let nums =  new MinSum([-1, -5, -3, 0, -1, 2, -4]);
        expect(nums.getSum()).toBe(-10); 
    });
  
})