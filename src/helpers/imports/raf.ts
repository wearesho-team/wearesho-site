interface Raf {
    (callback: () => any): () => any;

    cancel: (handle: () => any) => void;
}

// tslint:disable:no-var-requires
export const raf: Raf = require("raf");
