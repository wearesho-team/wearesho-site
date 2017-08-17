import * as React from 'react';
import PreLoader from './PreLoader';

export interface LayoutProps {
    preLoader: PreLoader;
}

export default class Layout extends React.Component<LayoutProps, undefined> {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.props.preLoader.hide();
    }

    async componentWillUnmount() {
        await this.props.preLoader.show();
    }

    render() {
            return <div id="content">
                <header className="header">
                    <a href="#" className="logo">
                        <i className="icon icon_logo"/>
                        <span className="logo__text">Art & Data Studio</span>
                    </a>
                    <div className="header__right">
                        <a href="#" className="header__new-project">Новый проект</a>
                        <a href="#" className="header__lang-toggle">eng</a>
                    </div>
                </header>
                <aside className="sidebar">
                    <nav className="main-nav">
                        <ul className="main-nav__list">
                            <li className="main-nav__item main-nav__item_active"></li>
                            <li className="main-nav__item"></li>
                        </ul>
                    </nav>
                    <div className="social-list">
                        <a href="#" className="social-list__item">
                            <i className="icon icon_soc-gh"/>
                        </a>
                        <a href="#" className="social-list__item">
                            <i className="icon icon_soc-li"/>
                        </a>
                    </div>
                </aside>
                <div className="sound-switch">
                    <div className="sound-switch__bar"/>
                    <div className="sound-switch__bar"/>
                    <div className="sound-switch__bar"/>
                </div>
                <ul className="grid">
                    <li className="grid__col"></li>
                    <li className="grid__col"></li>
                    <li className="grid__col"></li>
                    <li className="grid__col"></li>
                    <li className="grid__col"></li>
                    <li className="grid__col"></li>
                </ul>
                <section className="section section-main">
                    <h2 className="section__title">
                        <span className="section__title_part">Здесь ваши <span className="section__title_part-marked">смелые</span></span>
                        <span className="section__title_part">идеи превращаются<span className="section__title_part-marked">&nbsp;в IT-продукт</span></span>
                    </h2>
                    <div className="section-half">
                        <h4 className="section__subtitle section__subtitle_marker">Реализуем высокотехнологичные проекты</h4>
                        <ul className="services-list">
                            <li className="services-list__item">разработка сайтов</li>
                            <li className="services-list__item">брендинг и дизайн</li>
                            <li className="services-list__item">формирование ERP и CRM-систем</li>
                            <li className="services-list__item">аналитика и реклама</li>
                            <li className="services-list__item">техническая поддержка проектов</li>
                        </ul>
                    </div>
                    <div className="section-half">
                        <h4 className="section__subtitle section__subtitle_marker">
                            Более 3 лет
                            <span className="section__subtitle_reduced">профессионального сотрудничества с финансовыми компаниями:</span>
                        </h4>
                        <ul className="clients-list">
                            <li className="clients-list__item">
                                <a href="#" className="clients-list__link">NIKO Holding</a>
                                <span className="clients-list__text">#автодилер&nbsp;#логистика&nbsp;#финансы</span>
                            </li>
                            <li className="clients-list__item">
                                <a href="#" className="clients-list__link">Infinance</a>
                                <span className="clients-list__text">#кредитование&nbsp;#финансы</span>
                            </li>
                        </ul>
                    </div>
                </section>
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
            </div>;
    }
}