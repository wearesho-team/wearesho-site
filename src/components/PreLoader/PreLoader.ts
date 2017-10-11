import {sleep} from "../../helpers/sleep";
import {PreLoaderInterface} from "./PreLoaderInterface";

export class PreLoader implements PreLoaderInterface {
    public duration: number;

    public constructor(hideDuration) {
        this.duration = hideDuration;
    }

    public async hide() {
        const {onBundleLoaded} = window as any;
        if (onBundleLoaded instanceof Function) {
            onBundleLoaded();
        }

        await sleep(this.duration);

        document.body.classList.add("loaded");

        return this;
    }

    public async show() {
        document.body.classList.remove("loaded");

        return this;
    }
}
