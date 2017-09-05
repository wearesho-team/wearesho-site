export interface ElementWithTimer {
    timer: any,
}

// tslint:disable:no-invalid-this
export function smartClearTimeout() {
    if (!(this as ElementWithTimer).timer) {
        return;
    }

    clearTimeout((this as ElementWithTimer).timer);
    (this as ElementWithTimer).timer = undefined;
}
