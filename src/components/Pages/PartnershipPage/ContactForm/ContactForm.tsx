// tslint:disable:max-file-line-count
import { TransitionGroup, CSSTransition } from "react-transition-group";
import * as React from "react";
import * as ReactDOM from "react-dom";
import axios from "axios";
import {
    AutoValidate,
    Form,
    FormGroup,
    Hint,
    Input,
    Label,
    TransformTypes,
    FormContext,
    ModelError,
    NumericInput
} from "react-context-form";

import {ContactFormModel, instantiateContactFormModel} from "../../../../models/ContactFormModel";
import {NameRange, PhoneRange, CommentMaxLength} from "../../../../models/common";

import { ValidationError } from "../../../../data/ValidationError";

import { ElementWithTimer, smartClearTimeout } from "../../../../helpers/smartClearTimeout";
import { OnDesktop, OnMobile } from "../../../../helpers/Breakpoints";
import { smoothScrollTo } from "../../../../helpers/smoothScrollTo";
import { getTimeZone } from "../../../../helpers/getTimeZone";
import { translate } from "../../../../helpers/translate";
import { concat } from "../../../../helpers/concat";

import { SubmitButton } from "../../../Buttons/SubmitButton";
import { ContactFormState } from "./ContactFormState";
import { SubmitStatus } from "./SubmitStatus";
import { TimeInput } from "./TimeInput";

// tslint:disable:no-magic-numbers
export class ContactForm extends React.Component<undefined, ContactFormState> implements ElementWithTimer {
    public static formStorageKey = "formData";
    public static readonly standByDelay = 5000;
    public static readonly standByDuration = 500;

    public timer: any;

    protected clearTimeout = smartClearTimeout.bind(this);

    public constructor(props) {
        super(props);

        this.state = {
            status: SubmitStatus.standBy
        };
    }

    public render(): JSX.Element {

        return (
            <TransitionGroup className="form-container">
                {this.Form}
                {this.message}
            </TransitionGroup>
        );
    }

    public componentWillUnmount() {
        this.clearTimeout();
    }

    public componentWillUpdate(nextProps: undefined, nextState: ContactFormState) {
        if (nextState.status === SubmitStatus.standBy) {
            return;
        }

        this.clearTimeout();
        this.timer = setTimeout(() => {
            this.setState({
                status: SubmitStatus.standBy
            });
        }, ContactForm.standByDelay);
    }

    protected get message(): JSX.Element {
        const transitionProps = {
            classNames: "status",
            key: this.state.status,
            timeout: ContactForm.standByDuration,
        };

        switch (this.state.status) {
            case SubmitStatus.success:
                return (
                    <CSSTransition {...transitionProps}>
                        {this.SuccessMessage}
                    </CSSTransition>
                );
            case SubmitStatus.fail:
                return (
                    <CSSTransition {...transitionProps}>
                        {this.ErrorMessage}
                    </CSSTransition>
                );
            case SubmitStatus.standBy:
                // tslint:disable:no-null-keyword
                return null;
        }
    }

    protected handleSubmit = async (model: ContactFormModel, context: FormContext) => {
        let data: any = {};
        model.attributes()
            .forEach((field) => data = { ...data, ...{ [field]: model[field] } });

        data.timeZone = getTimeZone();

        try {
            await axios.post("/callback", data);

            this.setState({
                status: SubmitStatus.success,
                data: {
                    name: data.name,
                    from: data.from,
                    to: data.to
                }
            });

            this.timer = setTimeout(() => {
                this.clearFields(model);
            }, ContactForm.standByDelay / 2);

        } catch (error) {
            if (error instanceof ValidationError) {
                error.data.forEach(({ code, ...error }) => context.addError(error as ModelError));
                const modelElement: ModelError = error.data
                    .reduce((carry: ModelError, error: ModelError) => carry || error);

                const element: HTMLElement = modelElement && context.getDOMElement(modelElement.attribute);
                element && element.focus();
            } else {
                this.setState({
                    status: SubmitStatus.fail,
                    data: {
                        name: data.name
                    }
                });
            }
        }

        smoothScrollTo(ReactDOM.findDOMNode(this), -105, "top", 1000, 0);
    };

    protected clearFields(model: ContactFormModel) {
        model.attributes()
            .forEach((field) => model[field] = undefined);
        model.to = TimeDefaults.to;
        model.from = TimeDefaults.from;
    }

    protected get SuccessMessage(): JSX.Element {
        const { name, from, to } = this.state.data;

        return (
            <p className="section__text request request-sent">
                <span className="section__text_increased">{name}</span>
                <span className="inline">{translate("contactPage.form.submit.success.thanks")}</span>
                <span className="inline">{translate("contactPage.form.submit.success.callBack")}</span>
                <span className="section__text_indented">
                    {translate("contactPage.form.time.from")}
                    <span className="section__text_increased">&nbsp;{from}&nbsp;</span>
                    {translate("contactPage.form.time.to")}
                    <span className="section__text_increased">&nbsp;{to}&nbsp;</span>
                </span>
                <span>
                    {translate("contactPage.form.submit.withRespect")} &laquo;{translate("SHO")}?!&raquo;
                </span>
            </p>
        );
    }

    protected get ErrorMessage(): JSX.Element {
        const { name } = this.state.data;

        return (
            <p className="section__text request request-error">
                <span className="section__text_increased">{name}</span>
                <span>{translate("contactPage.form.submit.fail.text")}</span>
                <span>
                    {translate("contactPage.form.submit.withRespect")} &laquo;{translate("SHO")}?!&raquo;
                </span>
            </p>
        );
    }

    protected get Form(): JSX.Element {
        return (
            <Form
                className={concat("form", this.state.status)}
                instantiate={instantiateContactFormModel}
                onSubmit={this.handleSubmit as any}
                storageKey={ContactForm.formStorageKey}
            >
                <OnDesktop>
                    <p className="section__text">
                        {translate("contactPage.form.titleExtended")}
                    </p>
                </OnDesktop>
                <div className="form-half">
                    <div className="form__group_inline">
                        <FormGroup
                            className="form__group"
                            focusClassName="in-focus"
                            errorClassName="has-error"
                            name="name"
                        >
                            <AutoValidate groupName="name" onLength={NameRange.min}>
                                <Input
                                    className="form__control"
                                    transform={TransformTypes.capitalize}
                                    maxLength={NameRange.max}
                                    placeholder={translate("contactPage.form.placeholders.name")}
                                />
                            </AutoValidate>
                            <Hint className="form__error-text" />
                        </FormGroup>
                        <FormGroup
                            name="phone"
                            className="form__group"
                            focusClassName="in-focus"
                            errorClassName="has-error"
                        >
                            <AutoValidate groupName="phone">
                                <NumericInput
                                    className="form__control"
                                    placeholder={translate("contactPage.form.placeholders.phone")}
                                />
                            </AutoValidate>
                            <Hint className="form__error-text" />
                        </FormGroup>
                    </div>
                    <FormGroup
                        className="form__group"
                        focusClassName="in-focus"
                        errorClassName="has-error"
                        name="comment"
                    >
                        <AutoValidate groupName="comment">
                            <Input
                                className="form__control"
                                placeholder={translate("contactPage.form.placeholders.comment")}
                                maxLength={CommentMaxLength}
                            />
                        </AutoValidate>
                        <Hint className="form__error-text" />
                    </FormGroup>
                </div>
                <div className="form-half form-half_second">
                    <p className="text_regular">{translate("contactPage.form.time.title")}</p>
                    <p>{translate("contactPage.form.time.subTitle")}</p>
                    <div className="form__group spinner__group">
                        <FormGroup name="from" className="spinner">
                            <Label className="spinner__label">
                                {translate("contactPage.form.time.from")}
                            </Label>
                            <TimeInput className="form__control" />
                        </FormGroup>
                        <OnMobile>
                            <span className="separator">
                                {translate("contactPage.form.time.to")}
                            </span>
                        </OnMobile>
                        <FormGroup name="to" className="spinner">
                            <Label className="spinner__label">
                                {translate("contactPage.form.time.to")}
                            </Label>
                            <TimeInput className="form__control" />
                        </FormGroup>
                    </div>
                </div>
                <SubmitButton label={translate("buttons.send")} />
            </Form>
        );
    }
}
