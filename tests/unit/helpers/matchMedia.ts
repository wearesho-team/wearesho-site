// Some kind of polyfill
export const matchMedia = () => {
    window.matchMedia = window.matchMedia || (() => {
        return {
            matches: true,
            addListener: () => undefined,
            removeListener: () => undefined
        };
    }) as any;
};
