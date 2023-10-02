let LCC = require("./lcc.js");

describe("test", () => {

    test("test1", () => {
        let lcc =  new LCC("Hello World");
        expect(lcc.getLlc()).toBe("h");
    });
    test("test2", () => {
        let lcc =  new LCC("Peter Piper picked a peck of pickled peppers");
        expect(lcc.getLlc()).toBe("t");
    });
    test("test3", () => {
        let lcc =  new LCC("Mississippi");
        expect(lcc.getLlc()).toBe("m");
    });
    test("test3", () => {
        let lcc =  new LCC("Happy birthday!");
        expect(lcc.getLlc()).toBe(' ');
    });
    test("test3", () => {
        let lcc =  new LCC("aaaaaAAAA");
        expect(lcc.getLlc()).toBe('a');
    });

})