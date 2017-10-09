export interface PreLoaderInterface {
    hide: () => Promise<any>;
    show: () => Promise<any>;
    indicator: NodeListOf<Element>;
}
