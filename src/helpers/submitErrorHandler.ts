import {SubmitError, SubmitValidationError} from "../data/Errors";

const debugMode = process.env.NODE_ENV === "local";

export const submitErrorHandler = (error: any): void => {
    let data;
    if (error.response && error.response.data) {
        data = error.response.data;
    } else {
        throw new SubmitError(error, debugMode);
    }

    if (data.hasOwnProperty("TelegramError")) {
        throw new SubmitError(error, debugMode);
    }

    if (data.hasOwnProperty("ValidationError")) {
        throw new SubmitValidationError(data.ValidationError, debugMode);
    }

    throw new SubmitError(error, debugMode);
};
