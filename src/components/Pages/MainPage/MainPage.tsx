import * as React from "react";

import {translate} from "../../../helpers/translate";

import {CodeStyleAnimationSpeed} from "../../Animations/Static/CodeStyleAnimation/CodeStyleAnimationSpeed";
import {CodeStyleAnimation} from "../../Animations/Static/CodeStyleAnimation/CodeStyleAnimation";
import {CustomAnimation} from "../../Animations/Static/CustomAnimation/CustomAnimation";
import {SmartBreakpoint} from "../../SmartBreakpoint/SmartBreakpoint";
import {TimeLine} from "../../TimeLine/TimeLine";
import {BasePage} from "../BasePage";
import {OnMobile, OnTabletDesktop} from "../../../helpers/Breakpoints";

// tslint:disable:no-magic-numbers
const showingDelay = ((window as any).hideTimeout || 2000) * 4;
const typingDelay = showingDelay + 500;

export class MainPage extends BasePage {

    public startFeature = {
        element: document.body,
        attribute: "class",
        value: "loaded"
    };

    public render(): JSX.Element {
        return (
            <section className="section section-main">
                <div className="align-container">
                    <CustomAnimation
                        startFeature={this.startFeature}
                        actionClassName="showing"
                        duration={2000}
                        delay={showingDelay}
                    >
                        <h2 className="section__title">
                            <span className="section__title-part">
                                <span>{translate("mainPage.title.mainOne.base")}&nbsp;</span>
                                <span className="section__title-part-variable">
                                    {translate("mainPage.title.mainOne.additions.1")}&nbsp;
                                </span>
                            </span>
                            <span className="section__title-part">
                                <span>{translate("mainPage.title.mainTwo.base")}&nbsp;</span>
                                <span className="section__title-part-variable">
                                    {translate("mainPage.title.mainTwo.additions.1")}
                                </span>
                            </span>
                        </h2>
                    </CustomAnimation>
                    <div className="container">
                        <div className="section__half">
                            <OnTabletDesktop>
                                <h4 className="section__subtitle section__subtitle marker">
                                    <CodeStyleAnimation
                                        speed={CodeStyleAnimationSpeed.fast}
                                        startFeature={this.startFeature}
                                        caretTimeout={500}
                                        delay={typingDelay}
                                    >
                                        {translate("mainPage.articles.whatWeDo.title")}
                                    </CodeStyleAnimation>
                                </h4>
                            </OnTabletDesktop>
                            <OnMobile>
                                <CustomAnimation
                                    startFeature={this.startFeature}
                                    actionClassName="showing"
                                    duration={2000}
                                    delay={showingDelay}
                                >
                                    <h4 className="section__subtitle section__subtitle marker">
                                        {translate("mainPage.articles.whatWeDo.title")}
                                    </h4>
                                </CustomAnimation>
                            </OnMobile>
                            <OnTabletDesktop>
                                <div className="services-list">
                                    <CodeStyleAnimation
                                        speed={CodeStyleAnimationSpeed.fast}
                                        startFeature={this.startFeature}
                                        caretTimeout={500}
                                        delay={typingDelay + 1200}
                                    >
                                        {translate("mainPage.articles.whatWeDo.items.1")}
                                        {translate("mainPage.articles.whatWeDo.items.2")}
                                        {translate("mainPage.articles.whatWeDo.items.3")}
                                        {translate("mainPage.articles.whatWeDo.items.4")}
                                        {translate("mainPage.articles.whatWeDo.items.5")}
                                    </CodeStyleAnimation>
                                </div>
                            </OnTabletDesktop>
                            <OnMobile>
                                <div className="services-list">
                                    <CodeStyleAnimation
                                        speed={CodeStyleAnimationSpeed.medium}
                                        startFeature={this.startFeature}
                                        caretTimeout={500}
                                        delay={typingDelay}
                                    >
                                        {translate("mainPage.articles.whatWeDo.items.1")}
                                        {translate("mainPage.articles.whatWeDo.items.2")}
                                        {translate("mainPage.articles.whatWeDo.items.3")}
                                        {translate("mainPage.articles.whatWeDo.items.4")}
                                        {translate("mainPage.articles.whatWeDo.items.5")}
                                    </CodeStyleAnimation>
                                </div>
                            </OnMobile>
                        </div>
                        <div className="section__half">
                            <h4 className="section__subtitle section__subtitle marker">
                                <OnTabletDesktop>
                                    <CodeStyleAnimation
                                        speed={CodeStyleAnimationSpeed.medium}
                                        startFeature={this.startFeature}
                                        caretTimeout={500}
                                        delay={typingDelay}
                                    >
                                        {translate("mainPage.articles.howLong.title")}
                                    </CodeStyleAnimation>
                                </OnTabletDesktop>
                                <OnMobile>
                                    <CustomAnimation
                                        startFeature={this.startFeature}
                                        actionClassName="showing"
                                        duration={2000}
                                        delay={showingDelay}
                                    >
                                        <span>
                                        {translate("mainPage.articles.howLong.title")}
                                        </span>
                                    </CustomAnimation>
                                </OnMobile>
                                <OnTabletDesktop>
                                    <span className="section__subtitle_reduced">
                                        <CodeStyleAnimation
                                            speed={CodeStyleAnimationSpeed.medium}
                                            startFeature={this.startFeature}
                                            caretTimeout={500}
                                            delay={typingDelay + 500}
                                        >
                                            {translate("mainPage.articles.howLong.subTitle")}
                                        </CodeStyleAnimation>
                                    </span>
                                </OnTabletDesktop>
                                <OnMobile>
                                    <span className="section__subtitle_reduced">
                                        <CustomAnimation
                                            startFeature={this.startFeature}
                                            actionClassName="showing"
                                            duration={2000}
                                            delay={showingDelay}
                                        >
                                            <span>
                                                {translate("mainPage.articles.howLong.subTitle")}
                                            </span>
                                        </CustomAnimation>
                                    </span>
                                </OnMobile>
                            </h4>
                            <OnTabletDesktop>
                                <CustomAnimation
                                    startFeature={this.startFeature}
                                    actionClassName="showing"
                                    duration={2000}
                                    delay={showingDelay + 2000}
                                >
                                    <ul className="clients-list">
                                        <li className="clients-list__item">
                                            <a href="#" className="clients-list__link">NIKO Holding</a>
                                            <span className="clients-list__text">
                                            {translate("hashTags.autodealer")}&nbsp;
                                                {translate("hashTags.logistics")}&nbsp;
                                                {translate("hashTags.finances")}
                                        </span>
                                        </li>
                                        <li className="clients-list__item">
                                            <a href="#" className="clients-list__link">Infinance</a>
                                            <span className="clients-list__text">
                                            {translate("hashTags.crediting")}&nbsp;
                                                {translate("hashTags.finances")}
                                        </span>
                                        </li>
                                    </ul>
                                </CustomAnimation>
                            </OnTabletDesktop>
                            <OnMobile>
                                <CustomAnimation
                                    startFeature={this.startFeature}
                                    actionClassName="showing"
                                    duration={2000}
                                    delay={showingDelay}
                                >
                                    <ul className="clients-list">
                                        <li className="clients-list__item">
                                            <a href="#" className="clients-list__link">NIKO Holding</a>
                                            <span className="clients-list__text">
                                            {translate("hashTags.autodealer")}&nbsp;
                                                {translate("hashTags.logistics")}&nbsp;
                                                {translate("hashTags.finances")}
                                        </span>
                                        </li>
                                        <li className="clients-list__item">
                                            <a href="#" className="clients-list__link">Infinance</a>
                                            <span className="clients-list__text">
                                            {translate("hashTags.crediting")}&nbsp;
                                                {translate("hashTags.finances")}
                                        </span>
                                        </li>
                                    </ul>
                                </CustomAnimation>
                            </OnMobile>
                        </div>
                    </div>
                    <SmartBreakpoint match="min-width: 1024px">
                        <TimeLine range={{min: 2014, max: 2019}}/>
                    </SmartBreakpoint>
                </div>
            </section>
        );
    }
}
