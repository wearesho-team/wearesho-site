export function smartClearTimeout(timer: any) {
    if (!timer) {
        return;
    }

    clearTimeout(timer);
    timer = undefined;
}
