interface Raf {
    (callback: () => any): any;

    cancel: (handle: () => any) => void;
}

export const raf: Raf = require("raf");
