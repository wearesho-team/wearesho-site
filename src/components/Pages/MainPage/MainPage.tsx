// tslint:disable:max-file-line-count
import * as React from "react";

import {StartFeature} from "../../../data/Animations/StartFeature";
import {Timing} from "../../../data/Animations/Timing";

import {OnMobile, OnTabletDesktop} from "../../../helpers/Breakpoints";
import {translate} from "../../../helpers/translate";

import {CodeStyleAnimationSpeed} from "../../Animations/Static/CodeStyleAnimation/CodeStyleAnimationSpeed";
import {CodeStyleAnimation} from "../../Animations/Static/CodeStyleAnimation/CodeStyleAnimation";
import {CustomAnimation} from "../../Animations/Static/CustomAnimation/CustomAnimation";
import {SmartBreakpoint} from "../../SmartBreakpoint/SmartBreakpoint";
import {ClientsList} from "./Partials/ClientsList";
import {TimeLine} from "../../TimeLine/TimeLine";
import {BasePage} from "../BasePage";

export class MainPage extends BasePage {

    public render(): JSX.Element {
        return (
            <section className="section section-main">
                <div className="align-container">
                    <CustomAnimation
                        {...Timing.desktop.mainPage.tittle}
                        startFeature={StartFeature}
                        actionClassName="showing"
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
                                        {...Timing.desktop.mainPage.articles.whatWeDo}
                                        speed={CodeStyleAnimationSpeed.fast}
                                        startFeature={StartFeature}
                                    >
                                        {translate("mainPage.articles.whatWeDo.title")}
                                    </CodeStyleAnimation>
                                </h4>
                            </OnTabletDesktop>
                            <OnMobile>
                                <CustomAnimation
                                    {...Timing.mobile.mainPage.articles.whatWeDo}
                                    startFeature={StartFeature}
                                    actionClassName="showing"
                                >
                                    <h4 className="section__subtitle section__subtitle marker">
                                        {translate("mainPage.articles.whatWeDo.title")}
                                    </h4>
                                </CustomAnimation>
                            </OnMobile>
                            <OnTabletDesktop>
                                <div className="services-list">
                                    <CodeStyleAnimation
                                        {...Timing.desktop.mainPage.items.servicesList}
                                        speed={CodeStyleAnimationSpeed.fast}
                                        startFeature={StartFeature}
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
                                        {...Timing.mobile.mainPage.items.servicesList}
                                        speed={CodeStyleAnimationSpeed.medium}
                                        startFeature={StartFeature}
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
                                        {...Timing.desktop.mainPage.articles.howLong}
                                        speed={CodeStyleAnimationSpeed.medium}
                                        startFeature={StartFeature}
                                    >
                                        {translate("mainPage.articles.howLong.title")}
                                    </CodeStyleAnimation>
                                </OnTabletDesktop>
                                <OnMobile>
                                    <CustomAnimation
                                        {...Timing.mobile.mainPage.articles.howLong}
                                        startFeature={StartFeature}
                                        actionClassName="showing"
                                    >
                                        <span>
                                            {translate("mainPage.articles.howLong.title")}
                                        </span>
                                    </CustomAnimation>
                                </OnMobile>
                                <OnTabletDesktop>
                                    <span className="section__subtitle_reduced">
                                        <CodeStyleAnimation
                                            {...Timing.desktop.mainPage.items.subTittle}
                                            speed={CodeStyleAnimationSpeed.medium}
                                            startFeature={StartFeature}
                                        >
                                            {translate("mainPage.articles.howLong.subTitle")}
                                        </CodeStyleAnimation>
                                    </span>
                                </OnTabletDesktop>
                                <OnMobile>
                                    <span className="section__subtitle_reduced">
                                        <CustomAnimation
                                            {...Timing.mobile.mainPage.items.subTittle}
                                            startFeature={StartFeature}
                                            actionClassName="showing"
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
                                    {...Timing.desktop.mainPage.items.clientsList}
                                    startFeature={StartFeature}
                                    actionClassName="showing"
                                >
                                    <ClientsList/>
                                </CustomAnimation>
                            </OnTabletDesktop>
                            <OnMobile>
                                <CustomAnimation
                                    {...Timing.mobile.mainPage.items.clientsList}
                                    startFeature={StartFeature}
                                    actionClassName="showing"
                                >
                                    <ClientsList/>
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
