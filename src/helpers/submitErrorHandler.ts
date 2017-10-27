import {SubmitError, SubmitValidationError} from "../data/ErrorsTypes";

export const submitErrorHandler = (error: any): void => {
    let data;
    if (error.response && error.response.data) {
        data = error.response.data;
    }
    else {
        throw new SubmitError(error);
    }

    if (data.hasOwnProperty("TelegramError")) {
        throw new SubmitError(error);
    }

    if (data.hasOwnProperty("ValidationError")) {
        throw new SubmitValidationError(data.ValidationError);
    }

    throw new SubmitError(error);
};
