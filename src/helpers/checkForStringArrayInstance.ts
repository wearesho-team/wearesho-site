export function checkForStringArrayInstance(obj: any): boolean {
    return obj instanceof Array && obj.toString() !== "[object Array]";
}
