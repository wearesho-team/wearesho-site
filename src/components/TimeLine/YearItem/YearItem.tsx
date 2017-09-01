import * as React from "react";
import {concat} from "../../../helpers/concat";
import {compareMonthWithScale} from "../../../helpers/compareMonthWithScale";

import {projects, ProjectInterface} from "../../../data/Projects";

import {YearItemProps, YearItemPropTypes} from "./YearItemProps";

import {EmptyPoint} from "./EmptyPoint";
import {ActivePoint} from "./ActivePoint";
import {TimeLine} from "../TimeLine";

export class YearItem extends React.Component<YearItemProps, undefined> {
    public static propTypes = YearItemPropTypes;

    public readonly yearClassName = "prj-chronology__div prj-chronology__div_wide";
    public readonly yearMutedClassName = "color-muted";

    protected currentYearProjects: ProjectInterface [];

    public componentWillMount() {
        this.currentYearProjects = projects.filter(({date: {year}}) => year === this.props.children);
    }

    public render() {

        return (
            <div className="prj-chronology__item">
                {this.scaleItems}
            </div>
        );
    }

    protected onChangeProject = (element: HTMLElement, position: number) => {
        this.props.onChangeProject(element, position, this.props.children);
    };

    protected get scaleItems(): JSX.Element [] {
        return Array(TimeLine.pointsCount + 1)
            .fill(undefined)
            .map((x, i) => {

                // Future years must be lighter
                const yearLabelClassName = concat(
                    this.yearClassName,
                    this.props.children > (new Date()).getFullYear() ? this.yearMutedClassName : ""
                );

                // 7 / 2 = 3.5 => 4 - 1 = 3: if middle
                if (i === Math.round(TimeLine.pointsCount / 2) - 1) {
                    return <span className={yearLabelClassName} key={i}>{this.props.children}</span>;
                }

                const isActive = this.props.currentDate.year === this.props.children
                    && compareMonthWithScale(this.props.currentDate.month, i, TimeLine.pointsCount);

                // set project if it exist in current month
                const projectMonth = this.currentYearProjects
                    .find(({date: {month}}) => compareMonthWithScale(month, i, TimeLine.pointsCount));

                return projectMonth
                    ? <ActivePoint setProject={this.onChangeProject} isActive={isActive} index={i} key={i}/>
                    : <EmptyPoint key={i} position={i}/>

            });
    }

}
