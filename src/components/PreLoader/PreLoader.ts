import {sleep} from "../../helpers/sleep";
import {PreLoaderInterface} from "./PreLoaderInterface";

/**
 * This class represents animations on plain DOM element because
 * pre-loader will be rendered before loading js bundle
 */
const HIDE_DURATION = 500;

export class PreLoader implements PreLoaderInterface {

    /**
     * @todo: Animations
     */
    public async hide() {
        await sleep(HIDE_DURATION);

        document.body.classList.add("loaded");
        return this;
    }

    /**
     * @todo: Animations
     */
    public async show() {
        document.body.classList.remove("loaded");

        return this;
    }
}
