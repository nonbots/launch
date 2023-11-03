let Closest = require("./closest.js");

describe("test", () => {

    test("test1", () => {
        let closest =  new Closest([5, 25, 15, 11, 20]);
        expect(closest.getPair()).toEqual([15, 11]);
    });
    test("test2", () => {
        let closest =  new Closest([19, 25, 32, 4, 27, 16]);
        expect(closest.getPair()).toEqual( [25, 27]);
    });
    test("test3", () => {
        let closest =  new Closest([12, 7, 17]);
        expect(closest.getPair()).toEqual([12, 7]);
    });

})