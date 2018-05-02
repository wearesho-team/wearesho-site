import * as React from "react";
import {translate} from "../../../helpers/translate";

const BobraCS = require("../../../../images/bobraCS-100.png") as string;

export class BobraCSPage extends React.Component {

    public render() {
        return (
            <section className="section section-bobra-cs">
                <div className="align-container">
                    <div className="section__title">
                        <span className="section__title-text">BobraCS</span>
                        <i className="icon icon_logo-bobra" />
                    </div>
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
                            <div className="statistics">
                                <div className="statistics-item">
                                    <h4 className="section__subtitle marker">
                                        {translate("bobraCSPage.statistics.item1.title")}
                                        <span className="text_increased">1000</span>
                                    </h4>
                                    <p className="item__name">{translate("bobraCSPage.statistics.item1.text1")}</p>
                                    <span>{translate("bobraCSPage.statistics.item1.text2")}</span>
                                </div>
                                <div className="statistics-item">
                                    <h4 className="section__subtitle marker">
                                        <span className="text_increased">570000</span>
                                    </h4>
                                    <p className="item__name">{translate("bobraCSPage.statistics.item2.text1")}</p>
                                    <span>{translate("bobraCSPage.statistics.item2.text2")}</span>
                                </div>
                            </div>
                            <div className="bobra-visualization">
                                <img src={BobraCS} width="582" height="322" alt="Image"/>
                                <div className="decor decor_vertical" />
                                <div className="decor decor_horizontal" />
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <p className="details">
                            <a href="#" className="inline">Свяжитесь с нами</a>&nbsp;
                            для обсуждения делатей.
                        </p>
                        <div className="clients-list">
                            <a href="#">
                                <i className="icon icon_groshi247" />
                            </a>
                            <a href="https://pozichka.ua/">
                                <i className="icon icon_pozichka" />
                            </a>
                            <a href="https://moneyboom.ua/po">
                                <i className="icon icon_moneyboom" />
                            </a>
                            <a href="https://cashme.ua/">
                                <i className="icon icon_cashme" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}