import * as React from "react";

import { translate } from "helpers/translate";

import { Accordion } from "components/Layout/Partials";
import { SmartBreakpoint } from "components/SmartBreakpoint/SmartBreakpoint";
import { PreloaderLinkButton } from "components/Buttons/PreloaderLinkButton";

import { BasePage } from "../../BasePage";

import { developmentList } from "./developmentList";

export class DevelopmentPage extends BasePage {

    public render(): React.ReactNode {
        return (
            <section className="section section-services">
                <div className="align-container">
                    <div className="section-main">
                        <div className="develop">
                            <div className="stage">
                                <span className="stage__number">03</span>
                                <div className="stage-body">
                                    <h3 className="stage__title">
                                        {translate("processPage.stages.title.develop")}
                                    </h3>
                                    <p className="stage__description">
                                        {translate("processPage.stages.subTitle.frontBack")}
                                        &nbsp;/&nbsp;
                                        {translate("processPage.stages.subTitle.testing")}
                                    </p>
                                </div>
                            </div>
                            <Accordion list={developmentList} />
                            <div className="bottom">
                                <div className="half half_first">
                                    <SmartBreakpoint match="max-width: 1023px">
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
                                    </SmartBreakpoint>
                                    <SmartBreakpoint match="min-width: 1024px">
                                        <h5>
                                            {translate("servicesPage.bottom.text1")}&nbsp;
                                        </h5>
                                        <PreloaderLinkButton className="btn btn_primary" to="/partnership">
                                            {translate("servicesPage.bottom.btn")}
                                            <span className="btn-corners btn-corners_top" />
                                            <span className="btn-corners btn-corners_bottom" />
                                        </PreloaderLinkButton>
                                    </SmartBreakpoint>
                                </div>
                                <div className="half half_second">
                                    <SmartBreakpoint match="max-width: 1023px">
                                        <h5>
                                            {translate("servicesPage.bottom.text1")}&nbsp;
                                        </h5>
                                        <PreloaderLinkButton className="btn btn_primary" to="/partnership">
                                            {translate("servicesPage.bottom.btn")}
                                            <span className="btn-corners btn-corners_top" />
                                            <span className="btn-corners btn-corners_bottom" />
                                        </PreloaderLinkButton>
                                    </SmartBreakpoint>
                                    <SmartBreakpoint match="min-width: 1024px">
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
                                    </SmartBreakpoint>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
