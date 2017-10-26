import {SubmitError} from "../data/SubmitError";

export const submitErrorHandler = (error: any): void => {
    let data;
    if (error.response && error.response.data) {
        data = error.response.data;
    }
    else {
        console.error("Property `data` does not exist");
        throw new SubmitError(500);
    }

    if (data.hasOwnProperty("TelegramError")) {
        console.error(data.TelegramError.message);
        throw new SubmitError(error.response.status);
    }

    if (data.hasOwnProperty("ValidationError")) {
        console.error(error.response.statusText);
        throw new SubmitError(error.response.status, data.ValidationError);
    }
};
