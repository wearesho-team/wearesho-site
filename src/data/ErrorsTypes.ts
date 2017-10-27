import {ModelError} from "react-context-form";

const debugMode = process.env.NODE_ENV === "local";

export class SubmitError {
    public constructor(sourceError: any){
        debugMode && console.error(sourceError);
    }
}

export class SubmitValidationError {
    public constructor(data: ModelError []){
        this.data = data;
        debugMode && console.error(this.data);
    }

    public data: ModelError [];
}
