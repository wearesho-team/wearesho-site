import * as React from "react";

import { translate } from "helpers/translate";

export const designList = [
    {
        header: translate("servicesPage.design.accordion.item1.title"),
        body: (
            <React.Fragment>
                <h4 className="section__subtitle marker">
                    {translate("servicesPage.design.accordion.item1.title")}
                </h4>
                <p className="marker">
                    {translate("servicesPage.design.accordion.item1.body.text")}
                </p>
                <div className="icon-list">
                    <i className="icon icon_photoshop" />
                    <i className="icon icon_illustrator" />
                    <i className="icon icon_after-effects" />
                    <i className="icon icon_draw" />
                </div>
            </React.Fragment>
        )
    },
    {
        header: translate("servicesPage.design.accordion.item2.title"),
        body: (
            <React.Fragment>
                <h4 className="section__subtitle marker">
                    {translate("servicesPage.design.accordion.item2.title")}
                </h4>
                <p className="marker">{translate("servicesPage.design.accordion.item2.body.text")}</p>
                <div className="icon-list">
                    <i className="icon icon_photoshop" />
                    <i className="icon icon_illustrator" />
                    <i className="icon icon_xd" />
                    <i className="icon icon_after-effects" />
                    <i className="icon icon_sketch" />
                    <i className="icon icon_istudio" />
                    <i className="icon icon_draw" />
                </div>
            </React.Fragment>
        )
    },
    {
        header: translate("servicesPage.design.accordion.item3.title"),
        body: (
            <React.Fragment>
                <h4 className="section__subtitle marker">
                    {translate("servicesPage.design.accordion.item3.title")}
                </h4>
                <p className="marker">{translate("servicesPage.design.accordion.item3.body.text")}</p>
                <div className="icon-list">
                    <i className="icon icon_photoshop" />
                    <i className="icon icon_illustrator" />
                    <i className="icon icon_in-design" />
                    <i className="icon icon_draw" />
                </div>
            </React.Fragment>
        )
    },
    {
        header: translate("servicesPage.design.accordion.item4.title"),
        body: (
            <React.Fragment>
                <h4 className="section__subtitle marker">
                    {translate("servicesPage.design.accordion.item4.title")}
                </h4>
                <p className="marker">{translate("servicesPage.design.accordion.item4.body.text")}</p>
                <div className="icon-list">
                    <i className="icon icon_photoshop" />
                    <i className="icon icon_illustrator" />
                    <i className="icon icon_after-effects" />
                    <i className="icon icon_draw" />
                </div>
            </React.Fragment>
        )
    }
];
