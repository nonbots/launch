let SmallerNums = require("./smallerNumber.js");

describe("test", () => {
    // let feature;
    // beforeEach(() => {
    //     feature = new Featured();
    // });
    test("test1", () => {
        let nums =  new SmallerNums([8, 1, 2, 2, 3]);
        expect(nums.getNums()).toEqual([3, 0, 1, 1, 2]);
    });
    test("test2", () => {
        let nums =  new SmallerNums([1, 4, 6, 8, 13, 2, 4, 5, 4]);
        expect(nums.getNums()).toEqual([0, 2, 4, 5, 6, 1, 2, 3, 2]); 
    });
    test("test3", () => {
        let nums =  new SmallerNums([7, 7, 7, 7]);
        expect(nums.getNums()).toEqual([0,0,0,0]); 
    });
    test("test4", () => {
        let nums =  new SmallerNums([6, 5, 4, 8]);
        expect(nums.getNums()).toEqual([2, 1, 0, 3]); 
    });
    test("test5", () => {
        let nums =  new SmallerNums([1]);
        expect(nums.getNums()).toEqual([0]); 
    });
  
})