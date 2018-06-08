import * as React from "react";

import { translate } from "../../../../helpers/translate";
import { Config } from "../../../../data/Config";

export class Develop extends React.Component {

    public render() {
        return (
            <div className="develop">
                <div className="stage">
                        <span className="stage__number">03</span>
                    <div className="stage-body">
                        <h3 className="stage__title">{translate("processPage.stages.title.develop")}</h3>
                        <p className="stage__description">{translate("processPage.stages.subTitle.frontBack")}</p>
                    </div>
                </div>
                <div className="accordion">
                    <div className="accordion-item">
                        <button className="accordion-header active-control">
                            <div className="slider">
                                <div className="slider__body">
                                    <div className="slider__bar"/>
                                    <div className="slider__dot"/>
                                </div>
                            </div>
                            <span className="accordion-title">
                                {translate("servicesPage.development.accordion.item1.title")}
                            </span>
                        </button>
                        <div className="accordion-body">
                            <h4 className="section__subtitle marker">
                                {translate("servicesPage.development.accordion.item1.title")}
                            </h4>
                            <p>{translate("servicesPage.development.accordion.item1.body.text")}</p>
                            <div className="icon-list">
                                <i className="icon icon_postgreSQL" />
                                <i className="icon icon_react" />
                                <i className="icon icon_yii" />
                                <i className="icon icon_php" />
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <button className="accordion-header">
                            <div className="slider">
                                <div className="slider__body">
                                    <div className="slider__bar"/>
                                    <div className="slider__dot"/>
                                </div>
                            </div>
                            <span className="accordion-title">
                                {translate("servicesPage.development.accordion.item2.title")}
                            </span>
                        </button>
                        <div className="accordion-body">
                            <h4 className="section__subtitle marker">
                                {translate("servicesPage.development.accordion.item2.title")}
                            </h4>
                            <p>{translate("servicesPage.development.accordion.item2.body.text")}</p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <button className="accordion-header">
                            <div className="slider">
                                <div className="slider__body">
                                    <div className="slider__bar"/>
                                    <div className="slider__dot"/>
                                </div>
                            </div>
                            <span className="accordion-title">
                                {translate("servicesPage.development.accordion.item3.title")}
                            </span>
                        </button>
                        <div className="accordion-body">
                            <h4 className="section__subtitle marker">
                                {translate("servicesPage.development.accordion.item3.title")}
                            </h4>
                            <p>{translate("servicesPage.development.accordion.item3.body.text")}</p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <button className="accordion-header">
                            <div className="slider">
                                <div className="slider__body">
                                    <div className="slider__bar"/>
                                    <div className="slider__dot"/>
                                </div>
                            </div>
                            <span className="accordion-title">
                                {translate("servicesPage.development.accordion.item4.title")}
                            </span>
                        </button>
                        <div className="accordion-body">
                            <h4 className="section__subtitle marker">
                                {translate("servicesPage.development.accordion.item4.title")}
                            </h4>
                            <p>{translate("servicesPage.development.accordion.item4.body.text")}</p>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="half half_first">
                        <h5>
                            {translate("servicesPage.development.bottom.text1")}&nbsp;
                            <a href="#" className="inline">{translate("servicesPage.development.bottom.link1")}</a>
                        </h5>
                        <a className="btn btn_primary" href="/partnership">
                            {translate("servicesPage.development.bottom.btn")}
                            <span className="btn-corners btn-corners_top" />
                            <span className="btn-corners btn-corners_bottom" />
                        </a>
                    </div>
                    <div className="half half_second">
                        <div className="employee-data">
                            <span className="employee__name marker">
                                {translate("servicesPage.development.bottom.employeeData.name")}
                            </span>
                            <span className="employee__position">
                                {translate("servicesPage.development.bottom.employeeData.position")}
                            </span>
                        </div>
                        <blockquote>
                            &laquo;{translate("servicesPage.development.bottom.blockquote")}&raquo;
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    }
}
