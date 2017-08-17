import * as React from 'react';

export class ContactPage extends React.Component<undefined, undefined> {

    render() {
        return (
            <section className="section section-partnership">
                <h2 className="section__title">Партнерство</h2>
                <div className="section-half half-first">
                    <h4 className="section__subtitle">
                        Свяжитесь с нами
                        <span className="section__subtitle_reduced">или укажите свои контактные данные в форме ниже. Наши специалисты ответят на все ваши вопросы.</span>
                    </h4>
                    <form className="form">
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
                        <p className="text_medium">Мы ценим ваше время</p>
                        <p>Укажите удобное вам время для обсуждения проекта:</p>
                        <div className="form__group spinner__group">
                            <div className="spinner">
                                <span className="spinner__label">с</span>
                                <input type="text" className="form__control" value="09:00"/>
                                <div className="spinner__controls">
                                    <button className="btn btn_inc"></button>
                                    <button className="btn btn_dec"></button>
                                </div>
                            </div>
                            <div className="spinner">
                                <span className="spinner__label">по</span>
                                <input type="text" className="form__control" value="18:00"/>
                                <div className="spinner__controls">
                                    <button className="btn btn_inc"></button>
                                    <button className="btn btn_dec"></button>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn_primary">
                            Отправить
                            <span className="btn-corners btn-corners_top"/>
                            <span className="btn-corners btn-corners_bottom"/>
                        </button>
                    </form>
                </div>
                <div className="section-half half-second">
                    <div className="contact-info">
                        <h4 className="section__subtitle">Контакты</h4>
                        <a href="tel:+380660249402" className="contact-info__link">380 66 024-94-02</a>
                        <a href="mailto:office@wearesho.com" className="contact-info__link">office@wearesho.com</a>
                        <p className="contact-info__text contact-info__text_indented">
                            <span className="text_medium">Техническая поддержка</span>партнеров Cтудии<span className="contact-info__text_increased">24/7</span>
                        </p>
                        <p className="contact-info__text"><span className="text_medium">Локация</span>Украина / Харьков</p>
                    </div>
                    <div className="location-indicator">
                        <div className="location-indicator__bar"/>
                        <div className="location-indicator__marker"/>
                        <div className="location-indicator__info">
                            <span className="location-indicator__info_country">Ukraine</span>
                            <span className="location-indicator__info_city">Kharkiv</span>
                            <span className="location-indicator__info_coordinates">49.9808100&deg;</span>
                            <span className="location-indicator__info_coordinates">36.2527200&deg;</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}