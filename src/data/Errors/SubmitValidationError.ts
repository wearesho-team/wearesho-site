import {ModelError} from "react-context-form";

export class SubmitValidationError {
    public data: ModelError [];

    public constructor(data: ModelError [], debugMode: boolean) {
        this.data = data;
        // tslint:disable:no-console
        debugMode && console.error(this.data);
    }
}
