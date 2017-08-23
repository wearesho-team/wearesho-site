const matchMediaPolyfill = () => {
    if (!window.matchMedia) {

        window.matchMedia = (() => {
            return {
                matches: true,
                addListener: () => undefined,
            };
        }) as any;
    }
};

exports.module = matchMediaPolyfill();
