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

import {OnMobile} from "../../../../helpers/Breakpoints";
import {translate} from "../../../../helpers/translate";

import {SubmitButton} from "../../../Buttons/SubmitButton";
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

    protected handleSubmit = async (model: ContactFormModel, context: FormContext) => {
        let data = {};
        model.attributes()
            .forEach((field) => data = {...data, ...{[field]: model[field]}});

        try {
            await axios.post("/callback", data);
            // show success message
        } catch (error) {
            if (error instanceof ValidationError) {
                error.data.forEach(({code, ...error}) => context.addError(error as ModelError));
                const modelElement: ModelError = error.data
                    .reduce((carry: ModelError, error: ModelError) => carry || error);

                const element: HTMLElement = modelElement && context.getDOMElement(modelElement.attribute);
                element && element.focus();
                return;
            }
            // show error message
        }
    };
}
