import * as React from "react";

import { translate } from "helpers/translate";

export const developmentList = [
    {
        header: translate("servicesPage.development.accordion.item1.title"),
        body: (
            <React.Fragment>
                <h4 className="section__subtitle marker">
                    {translate("servicesPage.development.accordion.item1.title")}
                </h4>
                <p className="marker">
                    {translate("servicesPage.development.accordion.item1.body.text")}
                </p>
                <div className="icon-list">
                    <i className="icon icon_postgreSQL" />
                    <i className="icon icon_react" />
                    <i className="icon icon_yii" />
                    <i className="icon icon_php" />
                </div>
            </React.Fragment>
        )
    },
    {
        header: translate("servicesPage.development.accordion.item2.title"),
        body: (
            <React.Fragment>
                <h4 className="section__subtitle marker">
                    {translate("servicesPage.development.accordion.item2.title")}
                </h4>
                <p>{translate("servicesPage.development.accordion.item2.body.text")}</p>
            </React.Fragment>
        )
    },
    {
        header: translate("servicesPage.development.accordion.item3.title"),
        body: (
            <React.Fragment>
                <h4 className="section__subtitle marker">
                    {translate("servicesPage.development.accordion.item3.title")}
                </h4>
                <p>{translate("servicesPage.development.accordion.item3.body.text")}</p>
            </React.Fragment>
        )
    },
    {
        header: translate("servicesPage.development.accordion.item4.title"),
        body: (
            <React.Fragment>
                <h4 className="section__subtitle marker">
                    {translate("servicesPage.development.accordion.item4.title")}
                </h4>
                <p>{translate("servicesPage.development.accordion.item4.body.text")}</p>
            </React.Fragment>
        )
    }
];
