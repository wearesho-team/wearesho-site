import * as React from "react";

import { BasePage } from "../../BasePage";

import { translate } from "helpers/translate";

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
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
