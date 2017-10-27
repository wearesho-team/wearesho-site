import {ModelError} from "react-context-form";

export class SubmitError {
    public constructor(code: number){
        this.code = code;
    }

    public code: number;
}

export class SubmitValidationError {
    public constructor(data: ModelError []){
        this.data = data;
    }

    public data: ModelError [];
}
