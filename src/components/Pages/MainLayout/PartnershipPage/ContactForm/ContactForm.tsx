// tslint:disable:max-file-line-count
import { TransitionGroup, CSSTransition } from "react-transition-group";
import * as ReactDOM from "react-dom";
import * as React from "react";
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
    AutoFocus,
    InputContext
} from "react-context-form";

import { ContactFormModel, instantiateContactFormModel } from "models/ContactFormModel";
import { NameRange, CommentMaxLength, TimeDefaults } from "models/common";

import { ValidationError } from "data/ValidationError";

import { ElementWithTimer, smartClearTimeout } from "helpers/smartClearTimeout";
import { OnDesktop, OnMobile } from "helpers/Breakpoints";
import { smoothScrollTo } from "helpers/smoothScrollTo";
import { getTimeZone } from "helpers/getTimeZone";
import { translate } from "helpers/translate";
import { concat } from "helpers/concat";

import { ErrorMessage, SuccessMessage, PhoneInput, TimeInput } from "./Partials";
import { SubmitButton } from "components/Buttons/SubmitButton";
import { ContactFormState } from "./ContactFormState";
import { SubmitStatus } from "./SubmitStatus";

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
            <div className="form-container">
                {this.Form}
                <TransitionGroup component={null}>
                    {this.message}
                </TransitionGroup>
            </div>
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
                        <SuccessMessage {...this.state.data} />
                    </CSSTransition>
                );
            case SubmitStatus.fail:
                return (
                    <CSSTransition {...transitionProps}>
                        <ErrorMessage {...this.state.data} />
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

    protected timeInputBlur(input: HTMLInputElement, context: InputContext) {
        // IOS Auto focus bug
        if (input.className.indexOf("to") !== -1) {
            setTimeout(() => input.blur(), 100);
        } else {
            setTimeout(() => context.onBlur(), 100);
        }
    };

    protected get Form(): JSX.Element {
        return (
            <Form
                className={concat("form", this.state.status)}
                instantiate={instantiateContactFormModel}
                storageKey={ContactForm.formStorageKey}
                onSubmit={this.handleSubmit as any}
            >
                <OnDesktop>
                    <p className="section__text">{translate("contactPage.form.titleExtended")}</p>
                </OnDesktop>
                <div className="form-half">
                    <div className="form__group_inline">
                        <FormGroup
                            className="form__group"
                            focusClassName="in-focus"
                            errorClassName="has-error"
                            name="name"
                        >
                            <AutoValidate groupName="name" onLength={NameRange.min} onBlur={false}>
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
                            <AutoValidate groupName="phone" onLength={1} onBlur={false}>
                                <PhoneInput
                                    className="form__control"
                                    placeholder={translate("contactPage.form.placeholders.phone")}
                                    maskList={["9999", "(999) 999-99-999", "(999) 999-9999-9999"]}
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
                            <Label className="spinner__label">{translate("contactPage.form.time.from")}</Label>
                            <AutoFocus to="to" groupName="from">
                                <TimeInput className="form__control from" onCursorEnd={this.timeInputBlur} />
                            </AutoFocus>
                        </FormGroup>
                        <OnMobile>
                            <span className="separator">{translate("contactPage.form.time.to")}</span>
                        </OnMobile>
                        <FormGroup name="to" className="spinner">
                            <Label className="spinner__label">{translate("contactPage.form.time.to")}</Label>
                            <TimeInput className="form__control to" onCursorEnd={this.timeInputBlur} />
                        </FormGroup>
                    </div>
                </div>
                <SubmitButton label={translate("buttons.send")} tabIndex={0} />
            </Form>
        );
    }
}
