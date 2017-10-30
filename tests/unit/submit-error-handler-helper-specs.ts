import {expect} from "chai";
import {submitErrorHandler} from "../../src/helpers/submitErrorHandler";
import {ValidationError} from "../../src/data/ValidationError";

describe("submitErrorHandler()", () => {

    it("Should throw source error when it unexpected", () => {
        try {
            submitErrorHandler({
                response: {
                    data: {
                        SomeVeryUnexpectedError: {}
                    }
                }
            });
        } catch (error) {
            expect(error.response.data).haveOwnProperty("SomeVeryUnexpectedError");
        }
    });

    it("Should throw source error if status code not equals 400", () => {
        try {
            submitErrorHandler({
                response: {
                    data: {},
                    status: 500
                }
            });
        } catch (error) {
            expect(!(error instanceof ValidationError)).to.be.true;
        }
    });

    it("Should throw `ValidationError` if status code equals 400 and data contains array", () => {
        try {
            submitErrorHandler({
                response: {
                    data: [],
                    status: 400
                }
            });
        } catch (error) {
            expect(error instanceof ValidationError).to.be.true;
        }
    });
});
