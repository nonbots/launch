let Featured = require("./featured.js");
let feature =  new Featured();
describe("test", () => {
    // let feature;
    // beforeEach(() => {
    //     feature = new Featured();
    // });
    test("test1", () => {
        expect(feature.getNext(12)).toBe(21);
    });
    test("test2", () => {
        expect(feature.getNext(20)).toBe(21); 
    });
    test("test3", () => {
        expect(feature.getNext(21)).toBe(35); 
    });
    test("test4", () => {
        expect(feature.getNext(997)).toBe(1029); 
    });
    test("test5", () => {
        expect(feature.getNext(999999)).toBe(1023547); 
    });
    test("test6", () => {
        expect(feature.getNext(9876543186)).toBe(9876543201); 
    });
    test("test7", () => {
        expect(feature.getNext(9876543200)).toBe(9876543201); 
    });
    test("test7", () => {
        expect(feature.getNext(9876543201)).toBe( "There is no possible number that fulfills those requirements."); 
    });
})