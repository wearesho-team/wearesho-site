// Some kind of polyfill
export const matchMedia = () => {
    window.matchMedia = window.matchMedia || (() => {
        return {
            matches: true,
            addListener: () => undefined,
        };
    }) as any;
};
