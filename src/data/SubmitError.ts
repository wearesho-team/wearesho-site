export interface SubmitErrorInterface {
    code: number;
    data?: any;
}

export class SubmitError implements SubmitErrorInterface {
    public constructor(code: number, data?: any){
        this.code = code;
        this.data = data;
    }

    public code: number;
    public data: any;
}
