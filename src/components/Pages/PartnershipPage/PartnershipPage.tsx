import * as React from "react";
import ReactModal from "react-modal";

import {Config} from "../../../data/Config";

import {OnMobile, OnMobileTablet, OnDesktop, OnTablet} from "../../../helpers/Breakpoints";
import {smoothScrollTo} from "../../../helpers/smoothScrollTo";
import {formatNumber} from "../../../helpers/formatNumber";
import {translate} from "../../../helpers/translate";

import {TransformAnimation} from "../../Animations/Interactive/TransformAnimation";
import {getCorners, getLabel} from "../../Buttons/SubmitButton";
import {SocialLinks} from "../../Layout/Partials/SocialLinks";
import {PartnershipPageState} from "./PartnershipPageState";
import {CloseButton, SubmitButton} from "../../Buttons";
import {MapIcon} from "../../Icons/MapIcon";
import {ContactForm} from "./ContactForm";
import {BasePage} from "../BasePage";

export class PartnershipPage extends BasePage<undefined, PartnershipPageState> {
    public state: PartnershipPageState = {
        isModalOpen: false,
    };

    public shouldComponentUpdate(nextProps: undefined, nextState: PartnershipPageState, nextContext: any): boolean {
        return super.shouldComponentUpdate(nextProps, nextState, nextContext)
            || this.state.isModalOpen !== nextState.isModalOpen;
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
                afterOpen: "modal-opened",
                beforeClose: "modal-close",
            },
            closeTimeoutMS: 500
        };

        const transformAnimationProps = {
            transformedComponent: <ContactForm/>,
            staticComponent: getCorners(),
            initialComponent: getLabel(),
            className: "btn btn_transform",
            onEvent() {
                const {className, duration} = this as any;
                smoothScrollTo(
                    document.getElementsByClassName(className)[0] as HTMLElement,
                    -105,
                    "top",
                    duration,
                    0
                );
            },
            duration: 1000,
            event: "onClick"
        };

        return (
            <section className="section section-partnership">
                <div className="align-container">
                    <h2 className="section__title">{translate("contactPage.title")}</h2>
                    <div className="section__half half_first">
                        <OnDesktop>
                            <ContactForm/>
                        </OnDesktop>
                    </div>
                    <div className="section__half half_second">
                        <div className="contact-info">
                            <OnDesktop>
                                <a href={`tel:+${Config.phone}`} className="contact-info__link">
                                    {formatNumber(Config.phone, "xxx xx xxx-xx-xx")}
                                </a>
                                <a href={`mailto:${Config.mail}`} className="contact-info__link">{Config.mail}</a>
                                <p className="contact-info__text contact-info__text_indented">
                                    <span className="text_regular">{translate("technicalSupport")}</span>
                                    {translate("contactPage.support.subTitle")}
                                    <span className="contact-info__text_increased">24
                                        <span className="separator">/</span>7
                                    </span>
                                </p>
                                <p className="contact-info__text">
                                    <span className="text_regular">{translate("contactPage.location.title")}</span>
                                    {translate(Config.location.country)}&nbsp;
                                    <span className="separator">/</span>
                                    &nbsp;{translate(Config.location.city)}
                                </p>
                            </OnDesktop>
                            <OnTablet>
                                <p className="contact-info__text contact-info__text_indented">
                                    <span className="text_regular">{translate("contactPage.support.title")}</span>
                                    {translate("contactPage.support.subTitle")}
                                    <span className="contact-info__text_increased">24/7</span>
                                </p>
                                <div className="align-container">
                                    <a href={`tel:+${Config.phone}`} className="contact-info__link">
                                        {formatNumber(Config.phone, "xxx xx xxx-xx-xx")}
                                    </a>
                                    <a href={`mailto:${Config.mail}`} className="contact-info__link">{Config.mail}</a>
                                </div>
                                <SubmitButton
                                    type="button"
                                    onClick={this.handleOpenModal}
                                    label={translate("buttons.cooperate")}
                                />
                                <p className="contact-info__text">
                                    <span className="text_regular">{translate("contactPage.location.title")}</span>
                                    {translate(Config.location.country)} / {translate(Config.location.city)}
                                </p>
                            </OnTablet>
                            <OnMobile>
                                <p className="contact-info__text contact-info__text_indented">
                                    <span className="text_regular">{translate("contactPage.support.title")}</span>
                                    {translate("contactPage.support.subTitle")}
                                    <span className="contact-info__text_increased">24/7</span>
                                </p>
                                <p className="contact-info__text">
                                    <span className="text_regular">{translate("contactPage.location.title")}</span>
                                    {translate(Config.location.country)} / {translate(Config.location.city)}
                                </p>
                                <div className="align-container">
                                    <a href={`tel:+${Config.phone}`} className="contact-info__link">
                                        {formatNumber(Config.phone, "xxx xx xxx-xx-xx")}&nbsp;
                                    </a>
                                    <a href={`mailto:${Config.mail}`} className="contact-info__link">{Config.mail}</a>
                                </div>
                                <TransformAnimation {...transformAnimationProps}/>
                                <SocialLinks/>
                            </OnMobile>
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
                                <CloseButton className="btn btn_close" onClick={this.handleCloseModal}/>
                                <h3 className="modal__title">{translate("contactPage.form.title")}</h3>
                            </div>
                            <div className="modal__body">
                                <ContactForm/>
                            </div>
                        </ReactModal>
                    </OnMobileTablet>
                    <div className="map-container">
                        <MapIcon/>
                        <div className="slider">
                            <div className="slider__body">
                                <div className="slider__bar"/>
                                <div className="slider__dot"/>
                            </div>
                            <div className="slider__description">
                                    <span className="slider__location">
                                        {Config.location.country} / {Config.location.city}
                                    </span>
                                <span className="slider__coordinates">
                                    {Config.location.coordinates.lat}&deg;&nbsp;
                                    {Config.location.coordinates.lng}&deg;
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    protected handleCloseModal = () => {
        this.setState({isModalOpen: false});
    };

    protected handleOpenModal = () => {
        this.setState({isModalOpen: true});
    };
}
