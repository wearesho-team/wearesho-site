import * as React from "react";

import { BasePage } from "../../BasePage";

import { translate } from "helpers/translate";

export class ProjectDesignPage extends BasePage {
    public render(): React.ReactNode {
        return (
            <section className="section section-services">
                <div className="align-container">
                    <div className="section-main">
                        <div className="develop">
                            <div className="stage">
                                <span className="stage__number">01</span>
                                <div className="stage-body">
                                    <h3 className="stage__title">
                                        {translate("processPage.stages.title.planning")}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
