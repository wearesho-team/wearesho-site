export function getTimeZone() {
    return new Date().toString().match(/[A-Z]+[\+-]+[0-9]+/)[0];
}
