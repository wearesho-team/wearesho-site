import * as React from "react";

import {translate} from "../../helpers/translate";

import {TimeLine} from "../TimeLine";
import {SmartBreakpoint} from "../SmartBreakpoint/SmartBreakpoint";
import {CodeStyleAnimation} from "../Animations/CodeStyleAnimation";
import {CodeStyleAnimationSpeed} from "../Animations/CodeStyleAnimation/CodeStyleAnimationSpeed";
import {CustomAnimation} from "../Animations/CustomAnimation";
import {LayoutContext, LayoutContextTypes} from "../Layout/LayoutContext";

// tslint:disable:no-magic-numbers
const delay = ((window as any).hideTimeout || 2000) * 2.5;

export class MainPage extends React.Component<undefined, undefined> {
    public static readonly contextTypes = LayoutContextTypes;
    public context: LayoutContext;

    public startFeature = {
        element: document.body,
        attribute: "class",
        value: "loaded"
    };

    public shouldComponentUpdate(nextProps, nextState, nextContext: LayoutContext): boolean {
        return this.context.language !== nextContext.language;
    }

    public render(): JSX.Element {
        return (
            <section className="section section-main">
                <div className="align-container">
                    <CustomAnimation
                        startFeature={this.startFeature}
                        actionClassName="slide-to-left"
                        duration={2000}
                        delay={delay}
                    >
                        <h2 className="section__title">
                            <span className="section__title-part">
                                <span>{translate("mainPage.title.mainOne.base")}&nbsp;</span>
                                <span className="section__title-part-container">
                                    <span className="section__title-part-variable">
                                        {translate("mainPage.title.mainOne.additions.1")}
                                        </span>
                                </span>
                            </span>
                            <span className="section__title-part">
                                <span>{translate("mainPage.title.mainTwo.base")}&nbsp;</span>
                                    <span className="section__title-part-container">
                                    <span className="section__title-part-variable">
                                        {translate("mainPage.title.mainTwo.additions.1")}
                                        </span>
                                </span>
                            </span>
                        </h2>
                    </CustomAnimation>
                    <div className="container">
                        <div className="section__half">
                            <h4 className="section__subtitle section__subtitle_marker">
                                <CodeStyleAnimation
                                    speed={CodeStyleAnimationSpeed.fast}
                                    startFeature={this.startFeature}
                                    caretTimeout={100}
                                    delay={delay}
                                >
                                    {translate("mainPage.articles.whatWeDo.title")}
                                </CodeStyleAnimation>
                            </h4>
                            <div className="services-list">
                                <CodeStyleAnimation
                                    speed={CodeStyleAnimationSpeed.fast}
                                    startFeature={this.startFeature}
                                    caretTimeout={1500}
                                    delay={delay}
                                >
                                    {translate("mainPage.articles.whatWeDo.items.1")}{"\n"}
                                    {translate("mainPage.articles.whatWeDo.items.2")}{"\n"}
                                    {translate("mainPage.articles.whatWeDo.items.3")}{"\n"}
                                    {translate("mainPage.articles.whatWeDo.items.4")}{"\n"}
                                    {translate("mainPage.articles.whatWeDo.items.5")}
                                </CodeStyleAnimation>
                            </div>
                        </div>
                        <div className="section__half">
                            <h4 className="section__subtitle section__subtitle_marker">
                                <CodeStyleAnimation
                                    speed={CodeStyleAnimationSpeed.medium}
                                    startFeature={this.startFeature}
                                    caretTimeout={100}
                                    delay={delay}
                                >
                                    {translate("mainPage.articles.howLong.title")}
                                </CodeStyleAnimation>
                                <span className="section__subtitle_reduced">
                                     <CodeStyleAnimation
                                         speed={CodeStyleAnimationSpeed.fast}
                                         startFeature={this.startFeature}
                                         caretTimeout={1500}
                                         delay={delay}
                                     >
                                         {translate("mainPage.articles.howLong.subTitle")}
                                     </CodeStyleAnimation>
                                </span>
                            </h4>
                            <CustomAnimation
                                startFeature={this.startFeature}
                                actionClassName="slide-to-left"
                                duration={1500}
                                delay={delay}
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
