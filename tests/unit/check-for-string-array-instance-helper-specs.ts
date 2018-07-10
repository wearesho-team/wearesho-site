import { expect } from "chai";

import { checkForStringArrayInstance } from "../../src/helpers/checkForStringArrayInstance";

describe("checkForStringArrayInstance()", () => {

    const stringTest = "test1";
    const objectTest = {};
    const arrayTest = ["1"];

    it("Should return true if argument is instance of string", () => {
        expect(checkForStringArrayInstance(stringTest)).to.be.false;
        expect(checkForStringArrayInstance(objectTest)).to.be.false;
        expect(checkForStringArrayInstance(arrayTest)).to.be.true;
    });

});
