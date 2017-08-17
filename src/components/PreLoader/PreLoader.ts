import {sleep} from '../../helpers/sleep';
import {PreLoaderInterface} from "./PreLoaderInterface";

/**
 * This class represents animations on plain DOM element because
 * pre-loader will be rendered before loading js bundle
 */
export class PreLoader implements PreLoaderInterface {
    private loader: HTMLElement;

    constructor(element: HTMLElement) {
        this.loader = element;
    }

    /**
     * @todo: Animations
     */
    async hide() {
        await sleep(500);

        this.loader && this.loader.setAttribute('class', 'loaded');
        return this;
    }

    /**
     * @todo: Animations
     */
    async show() {
        this.loader && this.loader.removeAttribute('class');

        return this;
    }
}