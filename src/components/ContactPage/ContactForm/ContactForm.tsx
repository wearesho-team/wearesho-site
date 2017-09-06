import * as React from "react";
import {AutoValidate, Form, FormGroup, Hint, Input, Label} from "react-context-form";

import {OnMobile} from "../../../helpers/Breakpoints";
import {
    ContactFormModel, ContactFromDefaultValue, ContactToDefaultValue, instantiateContactFormModel,
    NameMaxLength
} from "../../../models/ContactFormModel";
import {SubmitButton} from "../../Buttons/SubmitButton";

// todo: e2e tests
export class ContactForm extends React.Component<undefined, undefined> {

    public render(): JSX.Element {
        return (
            <Form
                instantiate={instantiateContactFormModel}
                className="form"
                onSubmit={this.handleSubmit as any}
            >
                <div className="form-half">
                    <FormGroup className="form__group" errorClassName="form__group_has-error" name="name">
                        <Input type="text" className="form__control" placeholder="Ваше имя" maxLength={NameMaxLength}
                               required/>
                        <span className="form__control_underline"/>
                        <Hint className="form__error-text"/>
                    </FormGroup>
                    <div className="form__group_inline">
                        <FormGroup name="phone" className="form__group" errorClassName="form__group_has-error">
                            <Input type="tel" className="form__control" placeholder="Телефон" required/>
                            <span className="form__control_underline"/>
                            <Hint className="form__error-text"/>
                        </FormGroup>
                        <FormGroup className="form__group" errorClassName="form__group_has-error" name="mail">
                            <Input type="text" className="form__control" placeholder="Эл.почта" required/>
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
                            <Input type="text" className="form__control" required defaultValue={ContactFromDefaultValue}/>
                            <div className="spinner__controls">
                                <button className="btn btn_inc"/>
                                <button className="btn btn_dec"/>
                            </div>
                        </FormGroup>
                        <OnMobile>
                            <span className="separator">до</span>
                        </OnMobile>
                        <FormGroup name="to" className="spinner">
                            <Label className="spinner__label">до</Label>
                            <Input type="text" className="form__control" required defaultValue={ContactToDefaultValue}/>
                            <div className="spinner__controls">
                                <button className="btn btn_inc"/>
                                <button className="btn btn_dec"/>
                            </div>
                        </FormGroup>
                    </div>
                </div>
                <SubmitButton/>
            </Form>
        );
    }

    // todo: connect to backend
    private handleSubmit = async (model: ContactFormModel) => {
    };
}
