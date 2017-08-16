export function sleep(ms: Number = 1000) {
    return new Promise(r => setTimeout(r, ms));
}