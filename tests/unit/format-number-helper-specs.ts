import {formatNumber} from "../../src/helpers/formatNumber";
import {expect} from "chai";

describe("formatNumber()", () => {

    const tel = 380506435284;

    it("should replace `x` to digit and keep other symbols", () => {
        const numberSpaceFormat = "x x x x x x x x x x x x";
        const twoNumbersSpaceFormat = "xx xx xx xx xx xx";
        const uglyFormat = "!xx~xx12xx_-xx?! xx.xx=";

        expect(formatNumber(tel, numberSpaceFormat)).to.equal("3 8 0 5 0 6 4 3 5 2 8 4");
        expect(formatNumber(tel, twoNumbersSpaceFormat)).to.equal("38 05 06 43 52 84");
        expect(formatNumber(tel, uglyFormat)).to.equal("!38~051206_-43?! 52.84=");
    });

    it("should keep `x` symbol if digits is not exist", () => {
        const numberSpaceFormat = "x x x x x x x x x x x x x";
        const twoNumbersSpaceFormat = "xx xx xx xx xx xx xx";
        const uglyFormat = "!xx~xx12xx_-xx?! xx.xx= <(o_0)/";

        expect(formatNumber(tel, numberSpaceFormat)).to.equal("3 8 0 5 0 6 4 3 5 2 8 4 x");
        expect(formatNumber(tel, twoNumbersSpaceFormat)).to.equal("38 05 06 43 52 84 xx");
        expect(formatNumber(tel, uglyFormat)).to.equal("!38~051206_-43?! 52.84= <(o_0)/");
        expect(formatNumber("", uglyFormat)).to.equal("!xx~xx12xx_-xx?! xx.xx= <(o_0)/");
    });

});
