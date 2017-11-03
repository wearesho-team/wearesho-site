// tslint:disable:max-file-line-count
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
    ModelError
} from "react-context-form";

import {ContactFormModel, instantiateContactFormModel} from "../../../../models/ContactFormModel";
import {NameRange, PhoneRange, TimeDefaults} from "../../../../models/common";

import {ValidationError} from "../../../../data/ValidationError";

import {OnDesktop, OnMobile} from "../../../../helpers/Breakpoints";
import {translate} from "../../../../helpers/translate";

import {SubmitButton} from "../../../Buttons/SubmitButton";
import {ContactFormState} from "./ContactFormState";
import {SubmitStatus} from "./SubmitStatus";
import {TimeInput} from "./TimeInput";

export class ContactForm extends React.Component<undefined, ContactFormState> {
    public constructor(props) {
        super(props);

        this.state = {
            status: SubmitStatus.standBy
        }
    }

    public render(): JSX.Element {
        switch (this.state.status) {
            case SubmitStatus.standBy:
                return this.Form;
            case SubmitStatus.success:
                return this.SuccessMessage;
            case SubmitStatus.fail:
                return this.ErrorMessage;
        }
    }

    protected handleSubmit = async (model: ContactFormModel, context: FormContext) => {
        let data: any = {} as any;
        model.attributes()
            .forEach((field) => data = {...data, ...{[field]: model[field]}});

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
        } catch (error) {
            if (error instanceof ValidationError) {
                error.data.forEach(({code, ...error}) => context.addError(error as ModelError));
                const modelElement: ModelError = error.data
                    .reduce((carry: ModelError, error: ModelError) => carry || error);

                const element: HTMLElement = modelElement && context.getDOMElement(modelElement.attribute);
                element && element.focus();
                return;
            }

            this.setState({
                status: SubmitStatus.fail,
                data: {
                    name: data.name
                }
            });
        }
    };

    protected get SuccessMessage(): JSX.Element {
        const {name, from, to} = this.state.data;

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
        const {name} = this.state.data;

        return (
            <p className="section__text request request-error">
                <span className="section__text_increased">{name}</span>
                <span>{translate("contactPage.form.submit.fail.text")}</span>
                {translate("contactPage.form.submit.withRespect")} &laquo;{translate("SHO")}?!&raquo;
            </p>
        );
    }

    protected get Form(): JSX.Element {
        return (
            <Form
                className="form"
                instantiate={instantiateContactFormModel}
                onSubmit={this.handleSubmit as any}
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
                            <Hint className="form__error-text"/>
                        </FormGroup>
                        <FormGroup
                            name="phone"
                            className="form__group"
                            focusClassName="in-focus"
                            errorClassName="has-error"
                        >
                            <AutoValidate groupName="phone" onLength={PhoneRange.min}>
                                <Input
                                    className="form__control"
                                    placeholder={translate("contactPage.form.placeholders.phone")}
                                    type="number"
                                />
                            </AutoValidate>
                            <Hint className="form__error-text"/>
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
                            />
                        </AutoValidate>
                        <Hint className="form__error-text"/>
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
                            <TimeInput className="form__control" defaultTime={TimeDefaults.from}/>
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
                            <TimeInput className="form__control" defaultTime={TimeDefaults.to}/>
                        </FormGroup>
                    </div>
                </div>
                <SubmitButton label={translate("buttons.send")}/>
            </Form>
        );
    }
}
