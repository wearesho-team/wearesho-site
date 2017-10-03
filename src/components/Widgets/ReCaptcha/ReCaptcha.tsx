import * as React from "react";
import ReCAPTCHA from "react-google-recaptcha";

import {ReCaptchaProps} from "./ReCaptchaProps";

export class ReCaptcha extends React.Component<ReCaptchaProps, undefined> {
    public static readonly bodyClassName = "recaptcha-check";
    public static readonly modalClassName = "recaptcha-modal";

    public static execute() {
        ReCaptcha.element.execute();
        ReCaptcha.setRecaptchaClasses();
    }

    protected static element: ReCAPTCHA;

    protected static setRecaptchaClasses() {
        let element = document.body.querySelector("iframe[title~='recaptcha']");

        if (!(element instanceof HTMLElement)) {
            return;
        }

        document.body.classList.add(this.bodyClassName);
        (element.parentNode as HTMLElement).classList.add("iframe-wrap");

        while ((element.parentNode as HTMLElement) !== document.body) {
            element = element.parentNode as HTMLElement;
        }

        element.classList.add("recaptcha-modal");
    }

    public componentWillUnmount() {
        const recaptchaModal = document.getElementsByClassName(ReCaptcha.modalClassName)[0];

        recaptchaModal && document.body.removeChild(recaptchaModal);
        document.body.classList.remove(ReCaptcha.bodyClassName);
    }

    public render(): JSX.Element {
        const childProps = {
            ...this.props,
            ...{
                ref: this.setRecaptchaElement
            }
        };
        return <ReCAPTCHA {...childProps}/>
    }

    protected setRecaptchaElement = (element: ReCAPTCHA) => ReCaptcha.element = element;
}
