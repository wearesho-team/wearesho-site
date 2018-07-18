import * as React from "react";
import { Link } from "react-router-dom";
import { SmartBreakpoint } from "react-breakpoint";

import { translate } from "helpers/translate";
import { ImageLoader } from "components/ImageLoader";

export class BobraCSPage extends React.Component {

    public render(): React.ReactNode {
        return (
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
                                <div className="statistics">
                                    <div className="statistics-item">
                                        <h4 className="section__subtitle marker">
                                            <span className="text_increased">1300</span>
                                        </h4>
                                        <p className="item__name">{translate("bobraCSPage.statistics.item1.text1")}</p>
                                        <span>{translate("bobraCSPage.statistics.item1.text2")}</span>
                                    </div>
                                    <div className="statistics-item">
                                        <h4 className="section__subtitle marker">
                                            <span className="text_increased">910000</span>
                                        </h4>
                                        <p className="item__name">{translate("bobraCSPage.statistics.item2.text1")}</p>
                                        <span>{translate("bobraCSPage.statistics.item2.text2")}</span>
                                    </div>
                                </div>
                                <div className="clients-list">
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
                        <div className="bottom">
                            <div className="bobra-visualization">
                                <ImageLoader
                                    width="582"
                                    height="322"
                                    alt="Image"
                                    imageStack={[
                                        require("../../../../../images/bobraCS-20.jpg"),
                                        require("../../../../../images/bobraCS-60.jpg"),
                                        require("../../../../../images/bobraCS-80.jpg"),
                                    ]}
                                />
                                <div className="decor decor_vertical" />
                                <div className="decor decor_horizontal" />
                            </div>
                            <div className="clients-list">
                                <div className="row">
                                    <a href="https://moneyboom.ua/" target="_blank" rel="nofollow noopener">
                                        <i className="icon icon_moneyboom" />
                                    </a>
                                    <a href="https://cashme.ua/" target="_blank" rel="nofollow noopener">
                                        <i className="icon icon_cashme" />
                                    </a>
                                </div>
                                <div className="row">
                                    <a href="https://pozichka.ua/" target="_blank" rel="nofollow noopener">
                                        <i className="icon icon_pozichka" />
                                    </a>
                                    <a href="https://groshi247.com" target="_blank" rel="nofollow noopener">
                                        <i className="icon icon_groshi247" />
                                    </a>
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
                                    <ImageLoader
                                        width="582"
                                        height="322"
                                        alt="Image"
                                        imageStack={[
                                            require("../../../../../images/bobraCS-40.jpg"),
                                            require("../../../../../images/bobraCS-60.jpg"),
                                            require("../../../../../images/bobraCS-80.jpg"),
                                        ]}
                                    />
                                    <div className="decor decor_vertical" />
                                    <div className="decor decor_horizontal" />
                                </div>
                                <div className="statistics">
                                    <div className="statistics-item">
                                        <h4 className="section__subtitle marker">
                                            <span className="text_increased">1300</span>
                                        </h4>
                                        <p className="item__name">{translate("bobraCSPage.statistics.item1.text1")}</p>
                                        <span>{translate("bobraCSPage.statistics.item1.text2")}</span>
                                    </div>
                                    <div className="statistics-item">
                                        <h4 className="section__subtitle marker">
                                            <span className="text_increased">910000</span>
                                        </h4>
                                        <p className="item__name">{translate("bobraCSPage.statistics.item2.text1")}</p>
                                        <span>{translate("bobraCSPage.statistics.item2.text2")}</span>
                                    </div>
                                </div>
                                <div className="clients-list">
                                    <div className="align-container">
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
                                <div className="statistics">
                                    <div className="statistics-item">
                                        <h4 className="section__subtitle marker">
                                            <span className="text_increased">1300</span>
                                        </h4>
                                        <p className="item__name">{translate("bobraCSPage.statistics.item1.text1")}</p>
                                        <span>{translate("bobraCSPage.statistics.item1.text2")}</span>
                                    </div>
                                    <div className="statistics-item">
                                        <h4 className="section__subtitle marker">
                                            <span className="text_increased">910000</span>
                                        </h4>
                                        <p className="item__name">{translate("bobraCSPage.statistics.item2.text1")}</p>
                                        <span>{translate("bobraCSPage.statistics.item2.text2")}</span>
                                    </div>
                                </div>
                                <div className="clients-list">
                                    <div className="align-container">
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
                                <ImageLoader
                                    width="582"
                                    height="322"
                                    alt="Image"
                                    imageStack={[
                                        require("../../../../../images/bobraCS-20.jpg"),
                                        require("../../../../../images/bobraCS-40.jpg"),
                                        require("../../../../../images/bobraCS-60.jpg"),
                                        require("../../../../../images/bobraCS-80.jpg"),
                                    ]}
                                />
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
                                <div className="statistics">
                                    <div className="statistics-item">
                                        <h4 className="section__subtitle marker">
                                            <span className="text_increased">1300</span>
                                        </h4>
                                        <p className="item__name">{translate("bobraCSPage.statistics.item1.text1")}</p>
                                        <span>{translate("bobraCSPage.statistics.item1.text2")}</span>
                                    </div>
                                    <div className="statistics-item">
                                        <h4 className="section__subtitle marker">
                                            <span className="text_increased">910000</span>
                                        </h4>
                                        <p className="item__name">{translate("bobraCSPage.statistics.item2.text1")}</p>
                                        <span>{translate("bobraCSPage.statistics.item2.text2")}</span>
                                    </div>
                                </div>
                                <div className="bobra-visualization">
                                    <ImageLoader
                                        width="582"
                                        height="322"
                                        alt="Image"
                                        imageStack={[
                                            require("../../../../../images/bobraCS-20.jpg"),
                                            require("../../../../../images/bobraCS-40.jpg"),
                                            require("../../../../../images/bobraCS-60.jpg"),
                                            require("../../../../../images/bobraCS-80.jpg"),
                                        ]}
                                    />
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
    }
}
// tslint:disable-next-line
