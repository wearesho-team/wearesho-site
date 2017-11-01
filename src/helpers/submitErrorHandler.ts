import {ValidationError} from "../data/ValidationError";

// tslint:disable:no-magic-numbers
export const submitErrorHandler = (error: any): void => {
    if (
        !error.response
        || !error.response.status
        || !(error.response.data instanceof Array)
    ) {
        throw error;
    }

    throw error.response.status === 400
        ? new ValidationError(error.response.data)
        : error;
};
