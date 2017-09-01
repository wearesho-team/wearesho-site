import * as React from "react";
import {concat} from "../../../helpers/concat";

import {projects} from "../../../data/Projects";

import {MonthItem} from "../MonthItem";
import {YearItemProps, YearItemPropTypes} from "./YearItemProps";

export const YearItem: React.SFC<YearItemProps> = (props): JSX.Element => {
    const yearClassName = "prj-chronology__div prj-chronology__div_wide";
    const yearMutedClassName = "color-muted";
    const pointsCount = 7;

    const currentYear = projects.filter(({date: {year}}) => Number(year) === props.children);

    const scaleItems = Array(pointsCount)
        .fill(undefined)
        .map((x, i) => {
            const yearLabelClassName = concat(
                yearClassName,
                props.children > (new Date()).getFullYear() ? yearMutedClassName : ""
            );

            const monthItemProps = {
                ...{
                    pos: i,
                    projectsList: currentYear
                },
                ...props
            };

            // 7 / 2 = 3.5 => 4 - 1 = 3: middle
            return i === Math.round(pointsCount / 2) - 1
                ? <span className={yearLabelClassName} key={i}>{props.children}</span>
                : <MonthItem {...monthItemProps} key={i}/>
        });

    return (
        <div className="prj-chronology__item">
            {scaleItems}
        </div>
    );

};

YearItem.propTypes = YearItemPropTypes;
