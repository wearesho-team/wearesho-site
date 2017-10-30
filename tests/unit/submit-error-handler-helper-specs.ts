import {expect} from "chai";
import {submitErrorHandler} from "../../src/helpers/submitErrorHandler";
import {SubmitError} from "../../src/data/Errors/SubmitError";
import {SubmitValidationError} from "../../src/data/Errors/SubmitValidationError";

describe("submitErrorHandler()", () => {

    it("Should throw `SubmitError` if `response.data` does not exist", () => {
        try {
            submitErrorHandler({});
        } catch (error) {
            expect(error instanceof SubmitError).to.be.true;
        }
    });

    it("Should throw `SubmitError` when server throw unexpected error", () => {
        try {
            submitErrorHandler({
                response: {
                    data: {
                        SomeVeryUnexpectedError: {}
                    }
                }
            });
        } catch (error) {
            expect(error instanceof SubmitError).to.be.true;
        }
    });

    it("Should throw `SubmitError` if property `TelegramError` is exist", () => {
        try {
            submitErrorHandler({
                response: {
                    data: {
                        TelegramError: {}
                    }
                }
            });
        } catch (error) {
            expect(error instanceof SubmitError).to.be.true;
        }
    });

    it("Should throw `SubmitValidationError` if property `ValidationError` is exist", () => {
        try {
            submitErrorHandler({
                response: {
                    data: {
                        ValidationError: {}
                    }
                }
            });
        } catch (error) {
            expect(error instanceof SubmitValidationError).to.be.true;
        }
    });
});
