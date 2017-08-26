import {concat} from "../../src/helpers/concat";
import {expect} from "chai";

describe("concat()", () => {

    const string1 = "test1";
    const string2 = "test2";
    const string3 = "test3";

    const numberTest = 123;

    it("should concat `test1' and 'test2' strings", () => {
        expect(concat(string1, string2)).to.equal(string1 + " " + string2);
    });

    it("should concat `test1', `test2` and 'test3' strings", () => {
        expect(concat(string1, string2, string3)).to.equal(string1 + " " + string2 + " " + string3);
    });

    it("should concat string `test1` and number `123`", () => {
        expect(concat(string1, numberTest)).to.equal(string1 + " " + numberTest);
    });

});
