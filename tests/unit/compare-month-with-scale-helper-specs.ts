import { expect } from "chai";

import { compareMonthWithScale } from "../../src/helpers/compareMonthWithScale";

describe("compareMonthWithScale()", () => {

    it("should return true when month is assign to scale", () => {
        const month = 9;
        const scale = 5;
        const pointsCount = 6;

        expect(compareMonthWithScale(month, scale, pointsCount)).to.be.true;
        expect(compareMonthWithScale(month + 1, scale, pointsCount)).to.be.true;

        expect(compareMonthWithScale(month + 2, scale, pointsCount)).to.be.false;
        expect(compareMonthWithScale(month + 2, scale + 1, pointsCount)).to.be.true;

    });

});
