if (typeof MutationObserver === "undefined") {
    class MutationObserverMock implements MutationObserver {
        public static mutations = [
            {
                type: undefined,
                addedNodes: [],
                target: undefined
            }
        ];

        public constructor(func) {
            func(MutationObserverMock.mutations);
            this.takeRecords();
        }

        public disconnect() {
            return undefined
        };

        public observe() {
            return undefined
        };

        public takeRecords() {
            return undefined
        };
    }

    MutationObserver = MutationObserverMock;
}
