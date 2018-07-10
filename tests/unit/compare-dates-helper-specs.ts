import { expect } from "chai";

import { compareDates } from "../../src/helpers/compareDates";

describe("compareDates()", () => {
    const dateOne = {
        year: 2016,
        month: 4,
        day: 29
    };
    const dateTwo = {
        year: 2017,
        month: 5,
        day: 28
    };

    it("should return true when dates are different", () => {
        expect(compareDates(dateOne, dateTwo)).to.be.true;
        expect(compareDates(dateOne, dateOne)).to.be.false;
    });
});
