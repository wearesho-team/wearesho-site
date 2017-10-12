import * as React from "react";
import {
    AutoValidate,
    Form,
    FormGroup,
    Hint,
    Input,
    Label,
    TransformTypes,
    FormContext, ModelError
} from "react-context-form";
import translate from "counterpart";
import axios from "axios";

import {ContactFormModel, instantiateContactFormModel} from "../../../models/ContactFormModel";
import {NameRange, PhoneRange, TimeDefaults} from "../../../models/common";

import {OnMobile} from "../../../helpers/Breakpoints";

import {SubmitButton} from "../../Buttons/SubmitButton";
import {TimeInput} from "./TimeInput";

export class ContactForm extends React.Component<undefined, undefined> {

    public render(): JSX.Element {
        return (
            <Form
                className="form"
                instantiate={instantiateContactFormModel}
                onSubmit={this.handleSubmit as any}
            >
                <div className="form-half">
                    <FormGroup className="form__group" errorClassName="form__group_has-error" name="name">
                        <AutoValidate groupName="name" onLength={NameRange.min}>
                            <Input
                                className="form__control"
                                transform={TransformTypes.capitalize}
                                maxLength={NameRange.max}
                                placeholder={translate("contactPage.form.placeholders.name")}
                                required
                            />
                        </AutoValidate>
                        <span className="form__control_underline"/>
                        <Hint className="form__error-text"/>
                    </FormGroup>
                    <div className="form__group_inline">
                        <FormGroup name="phone" className="form__group" errorClassName="form__group_has-error">
                            <AutoValidate groupName="phone" onLength={PhoneRange.min}>
                                <Input
                                    className="form__control"
                                    placeholder={translate("contactPage.form.placeholders.phone")}
                                    type="number"
                                    required
                                />
                            </AutoValidate>
                            <span className="form__control_underline"/>
                            <Hint className="form__error-text"/>
                        </FormGroup>
                        <FormGroup className="form__group" errorClassName="form__group_has-error" name="mail">
                            <AutoValidate groupName="mail">
                                <Input
                                    className="form__control"
                                    placeholder={translate("contactPage.form.placeholders.mail")}
                                    type="email"
                                    required
                                />
                            </AutoValidate>
                            <span className="form__control_underline"/>
                            <Hint className="form__error-text"/>
                        </FormGroup>
                    </div>
                </div>
                <div className="form-half form-half_second">
                    <p className="text_medium">{translate("contactPage.form.time.title")}</p>
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

    private handleSubmit = async (model: ContactFormModel, context: FormContext) => {
        let data = {};
        model.attributes()
            .forEach((field) => data = {...data, ...{[field]: model[field]}});

        try {
            await axios.post("/callback", data);
        }
        catch ({response: {data}}) {
            if (!data.hasOwnProperty("errors") || data.errors.length === 0) {
                return;
            }

            data.errors.forEach(({code, ...error}) => context.addError(error as ModelError));
            const element = context.getDOMElement(
                data.errors
                    .reduce((carry: ModelError, error: ModelError) => carry || error).attribute
            );
            element && element.focus();
        }
    };
}
