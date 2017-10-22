export function checkForStringInstance(obj: any): boolean {
    return typeof obj === "string" || obj instanceof String;
}
