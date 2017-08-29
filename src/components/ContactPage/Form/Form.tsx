import * as React from "react";

import {SubmitButton} from "../../Buttons";
import {OnMobile} from "../../../helpers/Breakpoints";

export class Form extends React.Component<undefined, undefined> {

    // TODO: input components
    public render(): JSX.Element {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
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
            </form>
        );
    }

    private handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
}
