import * as React from "react";
import {translate} from "../../../helpers/translate";

export const Statistics = () => {
    return (
        <div className="statistics">
            <div className="statistics-item">
                <h4 className="section__subtitle marker">
                    <span className="text_increased">38000</span>
                </h4>
                <p className="item__name">{translate("bobraCSPage.statistics.item1.text1")}</p>
                <span>{translate("bobraCSPage.statistics.item1.text2")}</span>
            </div>
            <div className="statistics-item">
                <h4 className="section__subtitle marker">
                    <span className="text_increased">8000000</span>
                </h4>
                <p className="item__name">{translate("bobraCSPage.statistics.item2.text1")}</p>
                <span>{translate("bobraCSPage.statistics.item2.text2")}</span>
            </div>
        </div>
    );
}
Statistics.displayName = "BobraCSPage.Statistics";
