if (typeof localStorage === "undefined") {
    localStorage = {
        getItem: (arg: string) => arg,
        setItem: (arg: string) => undefined
    } as any;
}
