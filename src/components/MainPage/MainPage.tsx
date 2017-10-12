import * as React from "react";
import translate from "counterpart";

import {TimeLine} from "../TimeLine";
import {SmartBreakpoint} from "../SmartBreakpoint/SmartBreakpoint";

export class MainPage extends React.Component<undefined, undefined> {

    // Add `if` when props or state will be present
    public shouldComponentUpdate(): boolean {
        return false;
    }

    public render(): JSX.Element {
        return (
            <section className="section section-main">
                <div className="align-container">
                    <h2 className="section__title">
                        <span className="section__title-part">
                            <span>{translate("mainPage.title.mainOne.base")}&nbsp;</span>
                            <span className="section__title-part-container">
                                <span className="section__title-part-variable">
                                    {translate("mainPage.title.mainOne.additions.1")}
                                </span>
                                <span className="section__title-part-variable">
                                    {translate("mainPage.title.mainOne.additions.2")}
                                </span>
                                <span className="section__title-part-variable">
                                    {translate("mainPage.title.mainOne.additions.3")}
                                </span>
                            </span>
                        </span>
                        <span className="section__title-part">
                            <span>{translate("mainPage.title.mainTwo.base")}&nbsp;</span>
                            <span className="section__title-part-container">
                                <span className="section__title-part-variable">
                                    {translate("mainPage.title.mainTwo.additions.1")}
                                </span>
                                <span className="section__title-part-variable">
                                    {translate("mainPage.title.mainTwo.additions.2")}
                                </span>
                                <span className="section__title-part-variable">
                                    {translate("mainPage.title.mainTwo.additions.3")}
                                </span>
                            </span>
                        </span>
                    </h2>
                    <div className="container">
                        <div className="section__half">
                            <h4 className="section__subtitle section__subtitle_marker">
                                {translate("mainPage.articles.whatWeDo.title")}
                            </h4>
                            <ul className="services-list">
                                <li className="services-list__item">
                                    {translate("mainPage.articles.whatWeDo.items.1")}
                                </li>
                                <li className="services-list__item">
                                    {translate("mainPage.articles.whatWeDo.items.2")}
                                </li>
                                <li className="services-list__item">
                                    {translate("mainPage.articles.whatWeDo.items.3")}
                                </li>
                                <li className="services-list__item">
                                    {translate("mainPage.articles.whatWeDo.items.4")}
                                </li>
                                <li className="services-list__item">
                                    {translate("mainPage.articles.whatWeDo.items.5")}
                                </li>
                            </ul>
                        </div>
                        <div className="section__half">
                            <h4 className="section__subtitle section__subtitle_marker">
                                {translate("mainPage.articles.howLong.title")}
                                <span className="section__subtitle_reduced">
                                    {translate("mainPage.articles.howLong.subTitle")}
                                </span>
                            </h4>
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
                                        {translate("hashTags.krediting")}&nbsp;
                                        {translate("hashTags.finances")}
                                    </span>
                                </li>
                            </ul>
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
