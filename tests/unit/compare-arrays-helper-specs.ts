import { expect } from "chai";

import { compareArrays } from "../../src/helpers/compareArrays";

describe("compareArrays()", () => {

    const arrayOne = [1, 2, 3, 4];
    const arrayTwo = ["one", "two", "three", "four"];
    const arrayThree = ["1", "2", "3", "4"];

    it("should return true if arrays equals", () => {
        expect(compareArrays(arrayOne, arrayOne)).to.be.true;
    });

    it("should return false if arrays not equals", () => {
        expect(compareArrays(arrayOne, arrayTwo)).to.be.false;
        expect(compareArrays(arrayOne, arrayThree)).to.be.false;
    });

});
