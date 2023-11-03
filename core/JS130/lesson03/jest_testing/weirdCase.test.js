let Case = require("./weirdCase.js");

describe("test", () => {
    test("test1", () => {
        let weirdCase =  new Case('Lorem Ipsum is simply dummy text of the printing world');
        expect(weirdCase.getCase()).toBe('Lorem IpsUm is simPly dummy texT of the printing worLd');
    });
    test("test2", () => {
        let weirdCase =  new Case('It is a long established fact that a reader will be distracted');
        expect(weirdCase.getCase()).toBe('It is a lonG established facT that a reader wilL be disTracTed');
    });
    test("test3", () => {
        let weirdCase =  new Case('aaA bB c');
        expect(weirdCase.getCase()).toBe('aaA bB c');
    });
    test("test4", () => {
        let weirdCase =  new Case('Miss Mary Poppins word is supercalifragilisticexpialidocious');
        expect(weirdCase.getCase()).toBe('Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');
    });
})