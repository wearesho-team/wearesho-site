import { sleep } from "../../helpers/sleep";

export class PreLoader {
    public static duration: number;
    public static isVisible: boolean = false;

    public static async hide(): Promise<void> {
        const { onBundleLoaded } = window as any;
        if (onBundleLoaded instanceof Function) {
            onBundleLoaded();
        }

        await sleep(PreLoader.duration);

        document.body.classList.add("loaded");
        PreLoader.isVisible = false;
    }

    public static show(): void {
        document.body.classList.remove("loaded");
        PreLoader.isVisible = true;
    }

}
