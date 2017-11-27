import {expect} from "chai";
import {checkForStringInstance} from "../../src/helpers/checkForStringInstance";
describe("checkForStringInstance()", () => {

    const stringOne = "test1";
    const stringTwo = String("test2");
    const objectTest = {};
    const arrayTest = ["1", "2", 3];

    it("Should return true if argument is instance of string", () => {
        expect(checkForStringInstance(stringOne)).to.be.true;
        expect(checkForStringInstance(stringTwo)).to.be.true;
        expect(checkForStringInstance(objectTest)).to.be.false;
        expect(checkForStringInstance(arrayTest)).to.be.false;
        expect(checkForStringInstance(arrayTest[0])).to.be.true;
        expect(checkForStringInstance(arrayTest[1])).to.be.true;
        expect(checkForStringInstance(arrayTest[2])).to.be.false;
    });

});
