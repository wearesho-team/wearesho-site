if (typeof MutationObserver === "undefined") {
    class MutationObserverMock implements MutationObserver {
        public disconnect() {
            return undefined
        };

        public observe() {
            return undefined
        };

        public takeRecords() {
            return undefined
        };

        public static callBack: (arg: any) => any;

        public static mutations = [
            {
                type: undefined,
                addedNodes: [],
            }
        ];

        constructor(func) {
            MutationObserverMock.callBack = func;
            func(MutationObserverMock.mutations);
        }
    }

    MutationObserver = MutationObserverMock;
}
