import * as React from "react";
import {
    AutoValidate,
    Form,
    FormGroup,
    Hint,
    Input,
    Label, TransformTypes
} from "react-context-form";

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
                                placeholder="Ваше имя"
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
                                    placeholder="Телефон"
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
                                    placeholder="Эл.почта"
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
                    <p className="text_medium">Мы ценим ваше время</p>
                    <p>Укажите удобное вам время для обсуждения проекта:</p>
                    <div className="form__group spinner__group">
                        <FormGroup name="from" className="spinner">
                            <Label className="spinner__label">с</Label>
                            <TimeInput className="form__control" defaultTime={TimeDefaults.from}/>
                        </FormGroup>
                        <OnMobile>
                            <span className="separator">до</span>
                        </OnMobile>
                        <FormGroup name="to" className="spinner">
                            <Label className="spinner__label">до</Label>
                            <TimeInput className="form__control" defaultTime={TimeDefaults.to}/>
                        </FormGroup>
                    </div>
                </div>
                <SubmitButton label="Отправить"/>
            </Form>
        );
    }

    // todo: connect to backend
    private handleSubmit = async (model: ContactFormModel) => {
        // ...
    };
}
