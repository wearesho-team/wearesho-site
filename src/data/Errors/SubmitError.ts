export class SubmitError {
    public constructor(sourceError: any, debugMode: boolean) {
        // tslint:disable:no-console
        debugMode && console.error(sourceError);
    }
}
