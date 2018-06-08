import * as React from "react";
import { Develop } from "./Services";
import { translate } from "../../../helpers/translate";

export class ServicesPage extends React.Component {

    public render() {
        return (
            <section className="section section-services">
                <div className="align-container">
                    <div className="section-main">
                        <Develop />
                    </div>
                    <div className="section-aside">
                        <ul className="aside-nav">
                            <li>
                                <span className="marker">1.</span>
                                <h5>{translate("processPage.stages.title.planning")}</h5>
                            </li>
                            <li>
                                <span className="marker">2.</span>
                                <h5>{translate("processPage.stages.title.design")}</h5>
                            </li>
                            <li>
                                <span className="marker">3.</span>
                                <h5>{translate("processPage.stages.title.develop")}</h5>
                            </li>
                            <li>
                                <span className="marker">4.</span>
                                <h5>{translate("processPage.stages.title.deploy")}</h5>
                            </li>
                            <li>
                                <span className="marker">5.</span>
                                <h5>{translate("processPage.stages.title.promotion")}</h5>
                            </li>
                            <li>
                                <span className="marker">6.</span>
                                <h5>{translate("processPage.stages.title.support")}</h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
