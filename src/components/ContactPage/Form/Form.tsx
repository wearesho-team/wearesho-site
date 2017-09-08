import * as React from "react";
import ReCAPTCHA from "react-google-recaptcha";

import {Config} from "../../../data/Config";
import {OnMobile} from "../../../helpers/Breakpoints";

import {SubmitButton} from "../../Buttons";

export class Form extends React.Component<undefined, undefined> {

    protected recaptcha: ReCAPTCHA;
    protected recaptchaWrap: HTMLElement;

    public componentWillUnmount() {
        this.cleanUpDOM();
    }

    // TODO: input components
    public render(): JSX.Element {
        return (
            <form className="form" onSubmit={this.validateRecaptcha}>
                <div className="form-half">
                    <div className="form__group form__group_has-error">
                        <input type="text" className="form__control" placeholder="Ваше имя"/>
                        <span className="form__control_underline"/>
                        <span className="form__error-text">текст ошибки</span>
                    </div>
                    <div className="form__group_inline">
                        <div className="form__group">
                            <input type="tel" className="form__control" placeholder="Телефон"/>
                            <span className="form__control_underline"/>
                        </div>
                        <div className="form__group">
                            <input type="text" className="form__control" placeholder="Эл.почта"/>
                            <span className="form__control_underline"/>
                        </div>
                    </div>
                </div>
                <div className="form-half form-half_second">
                    <p className="text_medium">Мы ценим ваше время</p>
                    <p>Укажите удобное вам время для обсуждения проекта:</p>
                    <div className="form__group spinner__group">
                        <div className="spinner">
                            <span className="spinner__label">с</span>
                            <input type="text" className="form__control" value="09:00"/>
                            <div className="spinner__controls">
                                <button className="btn btn_inc"/>
                                <button className="btn btn_dec"/>
                            </div>
                        </div>
                        <OnMobile>
                            <span className="separator">до</span>
                        </OnMobile>
                        <div className="spinner">
                            <span className="spinner__label">до</span>
                            <input type="text" className="form__control" value="18:00"/>
                            <div className="spinner__controls">
                                <button className="btn btn_inc"/>
                                <button className="btn btn_dec"/>
                            </div>
                        </div>
                    </div>
                </div>
                <SubmitButton className="btn btn_primary"/>
                <ReCAPTCHA
                    ref={this.setRecaptchaElement}
                    sitekey={Config.reCaptchaApiKey}
                    onChange={this.handleSubmit}
                    size="invisible"
                    className="recaptcha-badge"
                />
            </form>
        );
    }

    // TODO: confirmation
    // tslint:disable-next-line
    protected handleSubmit = async () => {};

    protected validateRecaptcha = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        this.recaptcha.execute();
        this.setRecaptchaClasses();
    };

    protected setRecaptchaElement = (el: ReCAPTCHA) => this.recaptcha = el;

    protected setRecaptchaClasses() {
        // frame
        let element = document.body.querySelector("iframe[title~='recaptcha']");

        if (!element) {
            return;
        }

        document.body.classList.add("recaptcha-check");

        (element.parentNode as HTMLElement).className = "iframe-wrap";

        while ((element.parentNode as HTMLElement).tagName !== "BODY") {
            element = element.parentNode as HTMLElement;
        }

        // root parent frame
        element.className = "recaptcha-modal";
        this.recaptchaWrap = element as HTMLElement;
    }

    protected cleanUpDOM() {
        this.recaptchaWrap && document.body.removeChild(this.recaptchaWrap);
        document.body.classList.remove("recaptcha-check");
    }
}
