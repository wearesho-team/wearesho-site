import * as React from "react";
import { Link } from "react-router-dom";
import { SmartBreakpoint } from "react-breakpoint";
import {Statistics} from "./Statistics";
import { translate } from "../../../helpers/translate";
import { ImageStack, ShortImageStack } from "./ImageStack";

export const BobraCSPage: React.FC<{}> = () => (
    <section className="section section-bobra-cs">
        <div className="align-container">
            <span className="section__title">
                <span className="section__title-text">BobraCS</span>
                <i className="icon icon_logo-bobra" />
            </span>
            <SmartBreakpoint match={["max-width: 767px"]}>
                <div className="content">
                    <div className="section__half half_second">
                        <h4 className="section__subtitle">{translate("bobraCSPage.subTitle")}</h4>
                        <Statistics />
                        <div className="clients-list">
                            <a href="https://credit-pro.com.ua/" target="_blank" rel="noopener nofollow">
                                <i className="icon icon_credit-pro" />
                            </a>
                            <a href="https://moneyboom.ua/" target="_blank" rel="noopener nofollow">
                                <i className="icon icon_moneyboom" />
                            </a>
                            <a href="https://cashme.ua/" target="_blank" rel="noopener nofollow">
                                <i className="icon icon_cashme" />
                            </a>
                            <a href="https://pozichka.ua/" target="_blank" rel="noopener nofollow">
                                <i className="icon icon_pozichka" />
                            </a>
                            <a href="https://groshi247.com" target="_blank" rel="noopener nofollow">
                                <i className="icon icon_groshi247" />
                            </a>
                        </div>
                        <div className="bottom">
                            <div className="bobra-visualization">
                                <ShortImageStack />
                                <div className="decor decor_vertical" />
                                <div className="decor decor_horizontal" />
                            </div>
                            <div className="clients-list">
                                <div className="row">
                                    <a href="https://moneyboom.ua/" target="_blank" rel="noopener nofollow">
                                        <i className="icon icon_moneyboom" />
                                    </a>
                                    <a href="https://cashme.ua/" target="_blank" rel="noopener nofollow">
                                        <i className="icon icon_cashme" />
                                    </a>
                                </div>
                                <div className="row">
                                    <a href="https://pozichka.ua/" target="_blank" rel="noopener nofollow">
                                        <i className="icon icon_pozichka" />
                                    </a>
                                    <a href="https://groshi247.com" target="_blank" rel="noopener nofollow">
                                        <i className="icon icon_groshi247" />
                                    </a>
                                </div>
                                <div className="row">
                                    <a
                                        href="https://credit-pro.com.ua/"
                                        target="_blank"
                                        rel="noopener nofollow"
                                    >
                                        <i className="icon icon_credit-pro" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section__half half_first">
                        <h4 className="section__subtitle marker">
                            {translate("bobraCSPage.articles.upper.title")}
                        </h4>
                        <ul className="services-list">
                            <li>{translate("bobraCSPage.articles.upper.item.1")}</li>
                            <li>{translate("bobraCSPage.articles.upper.item.2")}</li>
                            <li>{translate("bobraCSPage.articles.upper.item.3")}</li>
                            <li>{translate("bobraCSPage.articles.upper.item.4")}</li>
                        </ul>
                        <h4 className="section__subtitle marker">
                            {translate("bobraCSPage.articles.lower.title")}
                        </h4>
                        <ul className="services-list">
                            <li>{translate("bobraCSPage.articles.lower.item.1")}</li>
                            <li>{translate("bobraCSPage.articles.lower.item.2")}</li>
                            <li>{translate("bobraCSPage.articles.lower.item.3")}</li>
                            <li>{translate("bobraCSPage.articles.lower.item.4")}</li>
                        </ul>
                        <p className="details">
                            <Link to="/partnership" className="inline">
                                {translate("bobraCSPage.details.link")}
                            </Link>&nbsp;
                            {translate("bobraCSPage.details.text")}
                        </p>
                    </div>
                </div>
            </SmartBreakpoint>
            <SmartBreakpoint match={["min-width: 768px", "max-width: 1023px"]}>
                <div className="content">
                    <div className="section__half half_first">
                        <h4 className="section__subtitle">{translate("bobraCSPage.subTitle")}</h4>
                        <h4 className="section__subtitle marker">
                            {translate("bobraCSPage.articles.upper.title")}
                        </h4>
                        <ul className="services-list">
                            <li>{translate("bobraCSPage.articles.upper.item.1")}</li>
                            <li>{translate("bobraCSPage.articles.upper.item.2")}</li>
                            <li>{translate("bobraCSPage.articles.upper.item.3")}</li>
                            <li>{translate("bobraCSPage.articles.upper.item.4")}</li>
                        </ul>
                        <h4 className="section__subtitle marker">
                            {translate("bobraCSPage.articles.lower.title")}
                        </h4>
                        <ul className="services-list">
                            <li>{translate("bobraCSPage.articles.lower.item.1")}</li>
                            <li>{translate("bobraCSPage.articles.lower.item.2")}</li>
                            <li>{translate("bobraCSPage.articles.lower.item.3")}</li>
                            <li>{translate("bobraCSPage.articles.lower.item.4")}</li>
                        </ul>
                    </div>
                    <div className="section__half half_second">
                        <div className="bobra-visualization">
                            <ShortImageStack />
                            <div className="decor decor_vertical" />
                            <div className="decor decor_horizontal" />
                        </div>
                        <Statistics />
                        <div className="clients-list">
                            <div className="align-container">
                                <a href="https://credit-pro.com.ua/" target="_blank" rel="noopener nofollow">
                                    <i className="icon icon_credit-pro" />
                                </a>
                                <a href="https://moneyboom.ua/" target="_blank" rel="noopener nofollow">
                                    <i className="icon icon_moneyboom" />
                                </a>
                                <a href="https://cashme.ua/" target="_blank" rel="noopener nofollow">
                                    <i className="icon icon_cashme" />
                                </a>
                                <a href="https://pozichka.ua/" target="_blank" rel="noopener nofollow">
                                    <i className="icon icon_pozichka" />
                                </a>
                                <a href="https://groshi247.com/" target="_blank" rel="noopener nofollow">
                                    <i className="icon icon_groshi247" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <p className="details">
                        <Link to="/partnership" className="inline">
                            {translate("bobraCSPage.details.link")}
                        </Link>&nbsp;
                        {translate("bobraCSPage.details.text")}
                    </p>
                </div>
            </SmartBreakpoint>
            <SmartBreakpoint match={["min-width: 1024px", "max-width: 1279px"]}>
                <div className="content">
                    <h4 className="section__subtitle">{translate("bobraCSPage.subTitle")}</h4>
                    <div className="section__half half_first">
                        <h4 className="section__subtitle marker">
                            {translate("bobraCSPage.articles.upper.title")}
                        </h4>
                        <ul className="services-list">
                            <li>{translate("bobraCSPage.articles.upper.item.1")}</li>
                            <li>{translate("bobraCSPage.articles.upper.item.2")}</li>
                            <li>{translate("bobraCSPage.articles.upper.item.3")}</li>
                            <li>{translate("bobraCSPage.articles.upper.item.4")}</li>
                        </ul>
                        <h4 className="section__subtitle marker">
                            {translate("bobraCSPage.articles.lower.title")}
                        </h4>
                        <ul className="services-list">
                            <li>{translate("bobraCSPage.articles.lower.item.1")}</li>
                            <li>{translate("bobraCSPage.articles.lower.item.2")}</li>
                            <li>{translate("bobraCSPage.articles.lower.item.3")}</li>
                            <li>{translate("bobraCSPage.articles.lower.item.4")}</li>
                        </ul>
                    </div>
                    <div className="section__half half_second">
                        <Statistics />
                        <div className="clients-list">
                            <div className="align-container">
                                <a href="https://credit-pro.com.ua/" target="_blank" rel="noopener nofollow">
                                    <i className="icon icon_credit-pro" />
                                </a>
                                <a href="https://moneyboom.ua/" target="_blank" rel="noopener nofollow">
                                    <i className="icon icon_moneyboom" />
                                </a>
                                <a href="https://cashme.ua/" target="_blank" rel="noopener nofollow">
                                    <i className="icon icon_cashme" />
                                </a>
                                <a href="https://pozichka.ua/" target="_blank" rel="noopener nofollow">
                                    <i className="icon icon_pozichka" />
                                </a>
                                <a href="https://groshi247.com" target="_blank" rel="noopener nofollow">
                                    <i className="icon icon_groshi247" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <p className="details">
                        <Link to="/partnership" className="inline">
                            {translate("bobraCSPage.details.link")}
                        </Link>&nbsp;
                        {translate("bobraCSPage.details.text")}
                    </p>
                    <div className="bobra-visualization">
                        <ImageStack />
                        <div className="decor decor_vertical" />
                        <div className="decor decor_horizontal" />
                    </div>
                </div>
            </SmartBreakpoint>
            <SmartBreakpoint match={["min-width: 1280px"]}>
                <div className="content">
                    <div className="section__half half_first">
                        <h4 className="section__subtitle">{translate("bobraCSPage.subTitle")}</h4>
                        <h4 className="section__subtitle marker">
                            {translate("bobraCSPage.articles.upper.title")}
                        </h4>
                        <ul className="services-list">
                            <li>{translate("bobraCSPage.articles.upper.item.1")}</li>
                            <li>{translate("bobraCSPage.articles.upper.item.2")}</li>
                            <li>{translate("bobraCSPage.articles.upper.item.3")}</li>
                            <li>{translate("bobraCSPage.articles.upper.item.4")}</li>
                        </ul>
                        <h4 className="section__subtitle marker">
                            {translate("bobraCSPage.articles.lower.title")}
                        </h4>
                        <ul className="services-list">
                            <li>{translate("bobraCSPage.articles.lower.item.1")}</li>
                            <li>{translate("bobraCSPage.articles.lower.item.2")}</li>
                            <li>{translate("bobraCSPage.articles.lower.item.3")}</li>
                            <li className="cutted">{translate("bobraCSPage.articles.lower.item.4")}</li>
                        </ul>
                    </div>
                    <div className="section__half half_second">
                        <Statistics />
                        <div className="bobra-visualization">
                            <ImageStack />
                            <div className="decor decor_vertical" />
                            <div className="decor decor_horizontal" />
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <p className="details">
                        <Link to="/partnership" className="inline">
                            {translate("bobraCSPage.details.link")}
                        </Link>&nbsp;
                        {translate("bobraCSPage.details.text")}
                    </p>
                    <div className="clients-list">
                        <a href="https://credit-pro.com.ua/" target="_blank" rel="noopener nofollow">
                            <i className="icon icon_credit-pro" />
                        </a>
                        <a href="https://moneyboom.ua/" target="_blank" rel="noopener nofollow">
                            <i className="icon icon_moneyboom" />
                        </a>
                        <a href="https://cashme.ua/" target="_blank" rel="noopener nofollow">
                            <i className="icon icon_cashme" />
                        </a>
                        <a href="https://pozichka.ua/" target="_blank" rel="noopener nofollow">
                            <i className="icon icon_pozichka" />
                        </a>
                        <a href="https://groshi247.com" target="_blank" rel="noopener nofollow">
                            <i className="icon icon_groshi247" />
                        </a>
                    </div>
                </div>
            </SmartBreakpoint>
        </div>
    </section>
);
BobraCSPage.displayName = "BobraCSPage";
// tslint:disable-next-line
