import {SubmitError, SubmitValidationError} from "../data/ErrorsTypes";

export const submitErrorHandler = (error: any): void => {
    const debugMode = process.env.NODE_ENV === "local";
    let data;
    if (error.response && error.response.data) {
        data = error.response.data;
    }
    else {
        debugMode && console.error("Property `data` does not exist");
        throw new SubmitError(500);
    }

    if (data.hasOwnProperty("TelegramError")) {
        debugMode && console.error(data.TelegramError.message);
        throw new SubmitError(error.response.status);
    }

    if (data.hasOwnProperty("ValidationError")) {
        debugMode && console.error(error.response.statusText);
        throw new SubmitValidationError(data.ValidationError);
    }
};
