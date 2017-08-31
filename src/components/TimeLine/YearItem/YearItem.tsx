import * as React from "react";
import moment from "moment";
import {concat} from "../../../helpers/concat";

import {projects} from "../../../data/Projects";

import {MonthItem} from "../MonthItem";

export const YearItem: React.SFC<undefined> = (props): JSX.Element => {
    const yearClassName = "prj-chronology__div prj-chronology__div_wide";
    const yearMutedClassName = "color-muted";
    const pointsCount = 7;

    const currentYear = projects.filter(({date}) => moment(date).year() === props.children);

    const scaleItems = Array(pointsCount)
        .fill(undefined)
        .map((x, i) => {
            const yearLabelClassName = concat(
                yearClassName,
                props.children > moment().year() ? yearMutedClassName : ""
            );
            const monthItemProps = {
                pos: i,
                year: currentYear,
            };

            return i === 3
                ? <span className={yearLabelClassName} key={i}>{props.children}</span>
                : <MonthItem {...monthItemProps} key={i}/>
        });

    return (
        <div className="prj-chronology__item">
            {scaleItems}
        </div>
    );

};
