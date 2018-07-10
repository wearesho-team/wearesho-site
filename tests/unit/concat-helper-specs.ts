import { expect } from "chai";

import { concat } from "../../src/helpers/concat";

describe("concat()", () => {

    const stringOne = "test1";
    const stringTwo = "test2";
    const stringThree = "test3";

    const numberTest = 123;

    it("should concat strings with `space` separator", () => {
        expect(concat(stringOne, stringTwo)).to.equal(stringOne + " " + stringTwo);

        expect(concat(stringOne, stringTwo, stringThree)).to.equal(stringOne + " " + stringTwo + " " + stringThree);
    });

    it("should concat strings and number with `space` separator", () => {
        expect(concat(stringOne, stringTwo, numberTest)).to.equal(stringOne + " " + stringTwo + " " + numberTest);
    });

});
