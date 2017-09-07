import * as React from "react";
import {ContactPageState} from "./ContactPageState";
import ReactModal from "react-modal";

import {Map} from "../Widgets/Map"

import {OnMobile, OnMobileTablet, OnDesktop, OnTablet} from "../../helpers/Breakpoints";
import {CooperateButton, CloseButton} from "../Buttons";
import {Form} from "./Form";
import {Config} from "../../data/Config";
import {formatNumber} from "../../helpers/formatNumber";
import {SocialLinks} from "../Layout/Partials/SocialLinks";

export class ContactPage extends React.Component<undefined, ContactPageState> {

    public state: ContactPageState = {
        isModalOpen: false,
    };

    public shouldComponentUpdate() {
        return false;
    }

    public render(): JSX.Element {

        const modalProps = {
            className: {
                base: "modal",
                afterOpen: "",
                beforeClose: "",
            },
            overlayClassName: {
                base: "modal-overlay",
                afterOpen: "",
                beforeClose: "",
            },
        };

        console.log("contactPage");

        return (
            <section className="section section-partnership">
                <div className="align-container">
                    <h2 className="section__title">Партнерство</h2>
                    <div className="section__half half_first">
                        <OnDesktop>
                            <div>
                                <h4 className="section__subtitle">
                                    Свяжитесь с нами
                                    <span className="section__subtitle_reduced">
                                    или укажите контактные данные в форме ниже.
                                    Наши специалисты ответят на все вопросы.
                                </span>
                                </h4>
                                <p className="section__text request-sent">
                                    <span className="section__text_increased">Мефодий,</span>
                                    <span>спасибо за проявленный интерес к Студии.</span>
                                    <span>Мы обязательно перезвоним Вам в указанное время:</span>
                                    <span className="section__text_indented">
                                    с
                                    <span className="section__text_increased">&nbsp;9:00&nbsp;</span>
                                    до
                                    <span className="section__text_increased">&nbsp;18:00&nbsp;</span>
                                </span>
                                    <span>С уважением, команда Студии &laquo;ШО?!&raquo;</span>
                                </p>
                                <Form/>
                            </div>
                        </OnDesktop>
                    </div>
                    <div className="section__half half_second">
                        <div className="contact-info">
                            <OnDesktop>
                                <div>
                                    <h4 className="section__subtitle">Контакты</h4>
                                    <a href={`tel:+${Config.tel}`} className="contact-info__link">
                                        {formatNumber(Config.tel, "xxx xx xxx-xx-xx")}
                                    </a>
                                    <a href={`mailto:${Config.mail}`} className="contact-info__link">{Config.mail}</a>
                                    <p className="contact-info__text contact-info__text_indented">
                                        <span className="text_medium">Техническая поддержка</span>
                                        партнеров Cтудии
                                        <span className="contact-info__text_increased">
                                            24<span className="separator">/</span>7
                                        </span>
                                    </p>
                                    <p className="contact-info__text">
                                        <span className="text_medium">Локация</span>
                                        {Config.location.country}&nbsp;
                                        <span className="separator">/</span>
                                        &nbsp;{Config.location.city}
                                    </p>
                                </div>
                            </OnDesktop>
                            <OnTablet>
                                <div>
                                    <p className="contact-info__text contact-info__text_indented">
                                        <span className="text_medium">Техническая поддержка</span>
                                        партнеров Cтудии
                                        <span className="contact-info__text_increased">24/7</span>
                                    </p>
                                    <h4 className="section__subtitle">Контакты</h4>
                                    <div className="align-container">
                                        <a href={`tel:+${Config.tel}`} className="contact-info__link">
                                            {formatNumber(Config.tel, "xxx xx xxx-xx-xx")}
                                        </a>
                                        <a href={`mailto:${Config.mail}`} className="contact-info__link">
                                            {Config.mail}
                                        </a>
                                    </div>
                                    <CooperateButton
                                        className="btn btn_primary"
                                        onClick={this.handleOpenModal}
                                    />
                                    <p className="contact-info__text">
                                        <span className="text_medium">Локация</span>
                                        {Config.location.country} / {Config.location.city}
                                    </p>
                                </div>
                            </OnTablet>
                            <OnMobile>
                                <div>
                                    <p className="contact-info__text contact-info__text_indented">
                                        <span className="text_medium">Техническая поддержка</span>
                                        партнеров Cтудии
                                        <span className="contact-info__text_increased">24/7</span>
                                    </p>
                                    <p className="contact-info__text">
                                        <span className="text_medium">Локация</span>
                                        {Config.location.country} / {Config.location.city}
                                    </p>
                                    <h4 className="section__subtitle">Контакты</h4>
                                    <div className="align-container">
                                        <a href={`tel:+${Config.tel}`} className="contact-info__link">
                                            {formatNumber(Config.tel, "xxx xx xxx-xx-xx")}
                                        </a>
                                        <a href={`mailto:${Config.mail}`} className="contact-info__link">
                                            {Config.mail}
                                        </a>
                                    </div>
                                    <CooperateButton
                                        className="btn btn_primary"
                                        onClick={this.handleOpenModal}
                                    />
                                    <SocialLinks/>
                                </div>
                            </OnMobile>
                        </div>
                        <div className="location-indicator">
                            <div className="location-indicator__bar"/>
                            <div className="location-indicator__marker"/>
                            <div className="location-indicator__info">
                                <div className="align-container">
                                    <span className="location-indicator__info_country">Ukraine</span>
                                    <span className="location-indicator__info_city">Kharkiv</span>
                                </div>
                                <div className="align-container">
                                    <span className="location-indicator__info_coordinates">49.9808100&deg;</span>
                                    <span className="location-indicator__info_coordinates">36.2527200&deg;</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <OnMobileTablet>
                        <ReactModal
                            isOpen={this.state.isModalOpen}
                            contentLabel="Modal-partnership"
                            {...modalProps}
                        >
                            <div className="modal__header">
                                <a href="#" className="logo">
                                    <i className="icon icon_logo"/>
                                </a>
                                <CloseButton
                                    className="btn btn_close"
                                    onClick={this.handleCloseModal}
                                />
                                <h3 className="modal__title">Свяжитесь с нами</h3>
                            </div>
                            <div className="modal__body">
                                <Form/>
                            </div>
                        </ReactModal>
                    </OnMobileTablet>
                </div>
                <Map/>
            </section>
        );
    }

    protected handleCloseModal = () => this.setState({isModalOpen: false});

    protected handleOpenModal = () => this.setState({isModalOpen: true});

}
