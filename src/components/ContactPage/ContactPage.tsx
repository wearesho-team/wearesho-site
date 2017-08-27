import * as React from "react";
import {ContactPageState} from "./ContactPageState";
import ReactModal from "react-modal";

import {Map} from "../Widgets/Map"

import {OnMobile, OnMobileTablet, OnDesktop, OnTablet} from "../../helpers/Breakpoints";
import {CooperateButton, CloseButton} from "../Buttons";
import {Form} from "./Form";
import {Config} from "../../Config";
import {formatNumber} from "../../helpers/formatNumber";

export class ContactPage extends React.Component<undefined, ContactPageState> {

    public state: ContactPageState = {
        isModalOpen: false,
    };

    public render(): JSX.Element {

        const modalProps = {
            className: {
                base: "modal-body",
                afterOpen: "",
                beforeClose: "",
            },
            overlayClassName: {
                base: "modal-overlay",
                afterOpen: "",
                beforeClose: "",
            },
        };

        return (
            <section className="section section-partnership">
                <h2 className="section-title">Партнерство</h2>
                <div className="section-half half-first">
                    <OnDesktop>
                        <div>
                            <h4 className="section-subtitle">
                                Свяжитесь с нами
                                <span className="section-subtitle_reduced">
                                    или укажите свои контактные данные в форме ниже.
                                    Наши специалисты ответят на все ваши вопросы.
                                </span>
                            </h4>
                            <Form/>
                        </div>
                    </OnDesktop>
                </div>
                <div className="section-half half-second">
                    <div className="contact-info">
                        <OnDesktop>
                            <div>
                                <h4 className="section-subtitle">Контакты</h4>
                                <a href={`tel:+${Config.tel}`} className="contact-info__link">
                                    {formatNumber(Config.tel, "xxx xx xxx-xx-xx")}
                                </a>
                                <a href={`mailto:${Config.mail}`} className="contact-info__link">{Config.mail}</a>
                                <p className="contact-info__text contact-info__text_indented">
                                    <span className="text_medium">Техническая поддержка</span>
                                    партнеров Cтудии
                                    <span className="contact-info__text_increased">24/7</span>
                                </p>
                                <p className="contact-info__text">
                                    <span className="text_medium">Локация</span>
                                    {Config.location.country} / {Config.location.city}
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
                                <h4 className="section-subtitle">Контакты</h4>
                                <a href={`tel:+${Config.tel}`} className="contact-info__link">
                                    {formatNumber(Config.tel, "xxx xx xxx-xx-xx")}
                                </a>
                                <a href={`mailto:${Config.mail}`} className="contact-info__link">{Config.mail}</a>
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
                                <h4 className="section-subtitle">Контакты</h4>
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
                            </div>
                        </OnMobile>
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
                <Map/>
                <OnMobileTablet>
                    <ReactModal
                        isOpen={this.state.isModalOpen}
                        contentLabel="Modal-partnership"
                        {...modalProps}
                    >
                        <CloseButton
                            className="btn btn_primary"
                            onClick={this.handleCloseModal}
                        />
                        <Form/>
                    </ReactModal>
                </OnMobileTablet>
            </section>
        );
    }

    protected handleCloseModal = () => this.setState({isModalOpen: false});

    protected handleOpenModal = () => this.setState({isModalOpen: true});

}
