import * as React from "react";
import { Develop } from "./Services";
import { translate } from "../../../helpers/translate";

import { Link } from "react-router-dom";

export class ServicesPage extends React.Component {

    public render() {
        return (
            <section className="section section-services">
                <div className="align-container">
                    <div className="section-main">
                        <Develop />
                    </div>
                    <div className="section-aside">
                        <div className="aside-nav">
                            <Link to="/planning" className="stage">
                                <span className="stage__number marker">01</span>
                                <div className="stage-body">
                                    <h3 className="stage__title">{translate("processPage.stages.title.planning")}</h3>
                                </div>
                            </Link>
                            <Link to="/design" className="stage">
                                <span className="stage__number marker">02</span>
                                <div className="stage-body">
                                    <h3 className="stage__title">{translate("processPage.stages.title.design")}</h3>
                                </div>
                            </Link>
                            <Link to="/develop" className="stage active-control">
                                <span className="stage__number marker">03</span>
                                <div className="stage-body">
                                    <h3 className="stage__title">{translate("processPage.stages.title.develop")}</h3>
                                </div>
                            </Link>
                            <Link to="/deploy" className="stage">
                                <span className="stage__number marker">04</span>
                                <div className="stage-body">
                                    <h3 className="stage__title">{translate("processPage.stages.title.deploy")}</h3>
                                </div>
                            </Link>
                            <Link to="/promotion" className="stage">
                                <span className="stage__number marker">05</span>
                                <div className="stage-body">
                                    <h3 className="stage__title">{translate("processPage.stages.title.promotion")}</h3>
                                </div>
                            </Link>
                            <Link to="/support" className="stage">
                                <span className="stage__number marker">06</span>
                                <div className="stage-body">
                                    <h3 className="stage__title">{translate("processPage.stages.title.support")}</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
