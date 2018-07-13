import * as React from "react";

import { BasePage } from "../../BasePage";
import { Accordion } from "components/Layout/Partials";

import { translate } from "helpers/translate";
import { designList } from "../DesignPage/designList";

import { SmartBreakpoint } from "components/SmartBreakpoint/SmartBreakpoint";
import { PreloaderLinkButton } from "components/Buttons/PreloaderLinkButton";

export class DesignPage extends BasePage {
    public render(): React.ReactNode {
        return (
            <section className="section section-services">
                <div className="align-container">
                    <div className="section-main">
                        <div className="develop">
                            <div className="stage">
                                <span className="stage__number">02</span>
                                <div className="stage-body">
                                    <h3 className="stage__title">
                                        {translate("processPage.stages.title.design")}
                                    </h3>
                                    <p className="stage__description">
                                        <span>{translate("processPage.stages.subTitle.sketches")}</span>
                                        &nbsp;/&nbsp;
                                        <span>{translate("processPage.stages.subTitle.prototypes")}</span>
                                    </p>
                                </div>
                            </div>
                            <Accordion list={designList} />
                            <div className="bottom">
                                <div className="half half_first">
                                    <SmartBreakpoint match="max-width: 1023px">
                                        <div className="employee-data">
                                            <span className="employee__name marker">
                                                {translate("servicesPage.design.bottom.employeeData.name")}
                                            </span>
                                            <span className="employee__position">
                                                {translate("servicesPage.design.bottom.employeeData.position")}
                                            </span>
                                        </div>
                                        <blockquote>
                                            &laquo;{translate("servicesPage.design.bottom.blockquote")}&raquo;
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
                                                {translate("servicesPage.design.bottom.employeeData.name")}
                                            </span>
                                            <span className="employee__position">
                                                {translate("servicesPage.design.bottom.employeeData.position")}
                                            </span>
                                        </div>
                                        <blockquote>
                                            &laquo;{translate("servicesPage.design.bottom.blockquote")}&raquo;
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
