import {sleep} from "../../helpers/sleep";
import {PreLoaderInterface} from "./PreLoaderInterface";

/**
 * This class represents animations on plain DOM element because
 * pre-loader will be rendered before loading js bundle
 */
const HIDE_DURATION = 500;

export class PreLoader implements PreLoaderInterface {
    private loader: HTMLElement;

    constructor(element: HTMLElement) {
        this.loader = element;
    }

    /**
     * @todo: Animations
     */
    public async hide() {
        await sleep(HIDE_DURATION);

        this.loader && document.body.setAttribute("class", "loaded");
        return this;
    }

    /**
     * @todo: Animations
     */
    public async show() {
        this.loader && this.loader.removeAttribute("class");

        return this;
    }
}
