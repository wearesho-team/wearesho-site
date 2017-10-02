import * as React from "react";
import ReCAPTCHA from "react-google-recaptcha";

import {ReCaptchaProps} from "./ReCaptchaProps";
import {AbstractWidget} from "../AbstractWidget";

export class ReCaptcha extends AbstractWidget<ReCaptchaProps> {
    public static readonly bodyClassName = "recaptcha-check";
    public static readonly modalClassName = "recaptcha-modal";

    public static execute() {
        ReCaptcha.element && ReCaptcha.element.execute();
    }

    protected static element: ReCAPTCHA;

    // Listen body updating and set classes to recaptcha check window
    protected observer = new MutationObserver((mutations) => {
        const {type, addedNodes} = mutations[0];

        // some kind of magic
        const isStyleAttrOnly = addedNodes[0] && addedNodes[0].attributes
            && !addedNodes[0].attributes.getNamedItem("class")
            && !addedNodes[0].attributes.getNamedItem("id")
            && addedNodes[0].attributes.getNamedItem("style");

        // this is magic too
        if (type !== "childList"
            || addedNodes.length !== 1
            || addedNodes[0].nodeName.toUpperCase() !== "DIV"
            || !isStyleAttrOnly
        ) {
            return;
        }

        let element = document.body.querySelector("iframe[title~='recaptcha']");

        if (!(element instanceof HTMLElement)) {
            return;
        }

        document.body.classList.add(ReCaptcha.bodyClassName);
        (element.parentNode as HTMLElement).classList.add("iframe-wrap");

        (addedNodes[0] as HTMLElement).classList.add(ReCaptcha.modalClassName);
    });

    public constructor(props) {
        super(props);

        this.observer.observe(document.body, {childList: true});
    }

    public componentWillUnmount() {
        this.cleanUpDom();
        this.clearTimeout(this.timer);
        this.observer.disconnect();
    }

    public render(): JSX.Element {
        if (!this.state.readyToMount) {
            return null;
        }

        return <ReCAPTCHA {...this.props} ref={this.setElement}/>
    }

    protected setElement = (element: ReCAPTCHA) => element && (ReCaptcha.element = element);

    // remove from DOM recaptcha check window (plugin not did it)
    protected cleanUpDom() {
        const recaptchaModal = document.getElementsByClassName(ReCaptcha.modalClassName)[0];

        recaptchaModal && document.body.removeChild(recaptchaModal);
        document.body.classList.remove(ReCaptcha.bodyClassName);
    }
}
