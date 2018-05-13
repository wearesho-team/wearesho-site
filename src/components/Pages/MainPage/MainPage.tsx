import * as React from "react";
import { Link } from "react-router-dom"

import { StartFeature } from "../../../data/Animations/StartFeature";
import { Timing } from "../../../data/Animations/Timing";
import { Config } from "../../../data/Config";

import { OnMobile, OnTabletDesktop } from "../../../helpers/Breakpoints";
import { translate } from "../../../helpers/translate";

import { CodeStyleAnimationSpeed } from "../../Animations/Static/CodeStyleAnimation/CodeStyleAnimationSpeed";
import { CodeStyleAnimation } from "../../Animations/Static/CodeStyleAnimation/CodeStyleAnimation";
import { CustomAnimation } from "../../Animations/Static/CustomAnimation/CustomAnimation";
import { SmartBreakpoint } from "../../SmartBreakpoint/SmartBreakpoint";
import { ClientsList } from "./Partials/ClientsList";
import { TimeLine } from "../../TimeLine/TimeLine";
import { BasePage } from "../BasePage";

export class MainPage extends BasePage<{date: number}> {

    public render(): JSX.Element {
        return (
            <section className="section section-main">
                <div className="align-container">
                    <h2 className="section__title">
                        <span className="section__title-part">
                            <span>{translate("mainPage.title.mainOne.base")}&nbsp;</span>
                            <span className="section__title-part-variable no_wrap">
                                {translate("mainPage.title.mainOne.additions.1")}&nbsp;
                            </span>
                        </span>
                        <span className="section__title-part">
                            <span>{translate("mainPage.title.mainTwo.base")}&nbsp;</span>
                            <span className="section__title-part-variable">
                                {translate("mainPage.title.mainTwo.additions.1")}&nbsp;
                            </span>
                            <span>{translate("mainPage.title.mainTwo.additions.2")}</span>
                        </span>
                    </h2>
                    <div className="container">
                        <div className="section__half">
                            {/* Upper section start */}
                            <OnTabletDesktop>
                                <h4 className="section__subtitle marker">
                                    <CodeStyleAnimation
                                        {...Timing.desktop.mainPage.articles.whatWeDo}
                                        speed={CodeStyleAnimationSpeed.fast}
                                        startFeature={StartFeature}
                                    >
                                        {translate("mainPage.articles.whatWeDo.upper.title")}
                                    </CodeStyleAnimation>
                                </h4>
                            </OnTabletDesktop>
                            <OnMobile>
                                <CustomAnimation
                                    {...Timing.mobile.mainPage.articles.whatWeDo}
                                    startFeature={StartFeature}
                                    actionClassName="showing"
                                >
                                    <h4 className="section__subtitle marker">
                                        {translate("mainPage.articles.whatWeDo.upper.title")}
                                    </h4>
                                </CustomAnimation>
                            </OnMobile>
                            <div className="services-list">
                                <CustomAnimation
                                    {...Timing.mobile.mainPage.articles.whatWeDoLink}
                                    actionClassName="showing"
                                    startFeature={StartFeature}
                                >
                                    <Link to="/bobra-cs">
                                        {translate("mainPage.articles.whatWeDo.upper.items.1")}
                                    </Link>
                                </CustomAnimation>
                            </div>
                            {/* Upper section end */}
                            {/* Lower section start */}
                            <OnTabletDesktop>
                                <h4 className="section__subtitle section__subtitle marker mt">
                                    <CodeStyleAnimation
                                        {...Timing.desktop.mainPage.articles.whatWeDo}
                                        speed={CodeStyleAnimationSpeed.fast}
                                        startFeature={StartFeature}
                                    >
                                        {translate("mainPage.articles.whatWeDo.lower.title")}
                                    </CodeStyleAnimation>
                                </h4>
                            </OnTabletDesktop>
                            <OnMobile>
                                <CustomAnimation
                                    {...Timing.mobile.mainPage.articles.whatWeDo}
                                    startFeature={StartFeature}
                                    actionClassName="showing"
                                >
                                    <h4 className="section__subtitle section__subtitle marker mt">
                                        {translate("mainPage.articles.whatWeDo.lower.title")}
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
                                        {translate("mainPage.articles.whatWeDo.lower.items.1")}
                                        {translate("mainPage.articles.whatWeDo.lower.items.2")}
                                        {translate("mainPage.articles.whatWeDo.lower.items.3")}
                                        {translate("mainPage.articles.whatWeDo.lower.items.4")}
                                        {translate("mainPage.articles.whatWeDo.lower.items.5")}
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
                                        {translate("mainPage.articles.whatWeDo.lower.items.1")}
                                        {translate("mainPage.articles.whatWeDo.lower.items.2")}
                                        {translate("mainPage.articles.whatWeDo.lower.items.3")}
                                        {translate("mainPage.articles.whatWeDo.lower.items.4")}
                                        {translate("mainPage.articles.whatWeDo.lower.items.5")}
                                    </CodeStyleAnimation>
                                </div>
                            </OnMobile>
                            {/* Lower section end */}
                        </div>
                        <div className="section__half">
                            <h4 className="section__subtitle section__subtitle marker">
                                <OnTabletDesktop>
                                    <CodeStyleAnimation
                                        {...Timing.desktop.mainPage.articles.howLong}
                                        speed={CodeStyleAnimationSpeed.medium}
                                        startFeature={StartFeature}
                                    >
                                        {this.label}
                                    </CodeStyleAnimation>
                                </OnTabletDesktop>
                                <OnMobile>
                                    <CustomAnimation
                                        {...Timing.mobile.mainPage.articles.howLong}
                                        startFeature={StartFeature}
                                        actionClassName="showing"
                                    >
                                        <span>
                                            {this.label}
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
                                    <ClientsList />
                                </CustomAnimation>
                            </OnTabletDesktop>
                            <OnMobile>
                                <CustomAnimation
                                    {...Timing.mobile.mainPage.items.clientsList}
                                    startFeature={StartFeature}
                                    actionClassName="showing"
                                >
                                    <ClientsList />
                                </CustomAnimation>
                            </OnMobile>
                        </div>
                    </div>
                    <SmartBreakpoint match="min-width: 1024px">
                        <TimeLine range={{ min: 2014, max: 2019 }} />
                    </SmartBreakpoint>
                </div>
            </section>
        );
    }

    protected get label(): string {
        const hoursSinceOfFoundation = Math.floor((this.props.date - Config.foundationDate.getTime()) / 3600000);
        const hoursLastChar = Number(hoursSinceOfFoundation.toString().slice(-1));

        switch (hoursLastChar) {
            case 1:
                return `${hoursSinceOfFoundation} ${translate("mainPage.articles.howLong.title.one")}`;
            case 2:
            case 3:
                return `${hoursSinceOfFoundation} ${translate("mainPage.articles.howLong.title.two")}`;
            default:
                return `${hoursSinceOfFoundation} ${translate("mainPage.articles.howLong.title.three")}`;
        }
    }
}
// tslint:disable-next-line
