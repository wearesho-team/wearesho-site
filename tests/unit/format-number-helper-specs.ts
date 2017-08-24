import {formatNumber} from "../../src/helpers/formatNumber";
import {expect} from "chai";

describe("formatNumber()", () => {

    const tel = 380506435284;

    const format1 = "x x x x x x x x x x x x";
    const format2 = "xx xx xx xx xx xx";
    const format3 = "x+xxx_xx-xx|xx~xx";
    const format4 = "xxx xx";
    const format5 = "xx xx xx xx xx xx xx xx";

    it("should format tel to format:" + format1, () => {
        expect(formatNumber(tel, format1)).to.equal("3 8 0 5 0 6 4 3 5 2 8 4");
    });

    it("should format tel to format:" + format2, () => {
        expect(formatNumber(tel, format2)).to.equal("38 05 06 43 52 84");
    });

    it("should format tel to format:" + format3, () => {
        expect(formatNumber(tel, format3)).to.equal("3+805_06-43|52~84");
    });

    it("should format tel to format:" + format4, () => {
        expect(formatNumber(tel, format4)).to.equal("380 50");
    });

    it("should format tel to format:" + format5, () => {
        expect(formatNumber(tel, format5)).to.equal("38 05 06 43 52 84");
    });
});
