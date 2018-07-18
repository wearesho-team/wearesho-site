import * as React from "react";

import { translate } from "helpers/translate";

export const promotionList = [
    {
        header: translate("servicesPage.promotion.accordion.item1.title"),
        body: (
            <React.Fragment>
                <h4 className="section__subtitle marker">
                    {translate("servicesPage.promotion.accordion.item1.title")}
                </h4>
                <p className="marker">
                    {translate("servicesPage.promotion.accordion.item1.body.text")}
                </p>
                <div className="icon-list">
                    <i className="icon icon_google-analitics" />
                    <i className="icon icon_google-adwords" />
                    <i className="icon icon_fb-ads" />
                    <i className="icon icon_woopra" />
                </div>
            </React.Fragment>
        )
    },
    {
        header: translate("servicesPage.promotion.accordion.item2.title"),
        body: (
            <React.Fragment>
                <h4 className="section__subtitle marker">
                    {translate("servicesPage.promotion.accordion.item2.title")}
                </h4>
                <p className="marker">{translate("servicesPage.promotion.accordion.item2.body.text")}</p>
                <div className="icon-list">
                    <i className="icon icon_google-analitics" />
                    <i className="icon icon_google-adwords" />
                    <i className="icon icon_fb-ads" />
                    <i className="icon icon_woopra" />
                </div>
            </React.Fragment>
        )
    },
    {
        header: translate("servicesPage.promotion.accordion.item3.title"),
        body: (
            <React.Fragment>
                <h4 className="section__subtitle marker">
                    {translate("servicesPage.promotion.accordion.item3.title")}
                </h4>
                <p className="marker">{translate("servicesPage.promotion.accordion.item3.body.text")}</p>
                <div className="icon-list">
                    <i className="icon icon_google-analitics" />
                    <i className="icon icon_google-adwords" />
                    <i className="icon icon_fb-ads" />
                    <i className="icon icon_woopra" />
                </div>
            </React.Fragment>
        )
    },
    {
        header: translate("servicesPage.promotion.accordion.item4.title"),
        body: (
            <React.Fragment>
                <h4 className="section__subtitle marker">
                    {translate("servicesPage.promotion.accordion.item4.title")}
                </h4>
                <p className="marker">{translate("servicesPage.promotion.accordion.item4.body.text")}</p>
                <div className="icon-list">
                    <i className="icon icon_google-analitics" />
                    <i className="icon icon_google-adwords" />
                    <i className="icon icon_fb-ads" />
                    <i className="icon icon_woopra" />
                </div>
            </React.Fragment>
        )
    }
];
