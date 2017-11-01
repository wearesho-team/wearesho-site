import {ModelError} from "react-context-form";

export class ValidationError {
    public data: ModelError [];

    public constructor(data: ModelError []) {
        this.data = data;
    }
}
