import * as React from "react";

import {compareMonthWithScale} from "../../../helpers/compareMonthWithScale";
import {concat} from "../../../helpers/concat";

import {projects, ProjectInterface} from "../../../data/Projects";

import {YearItemProps, YearItemPropTypes} from "./YearItemProps";
import {ActivePoint} from "./ActivePoint";
import {EmptyPoint} from "./EmptyPoint";
import {SideTypes} from "./SideTypes";
import {TimeLine} from "../TimeLine";

export class YearItem extends React.Component<YearItemProps, undefined> {
    public static propTypes = YearItemPropTypes;

    public readonly baseClassName = "prj-chronology__item";
    public readonly yearClassName = "prj-chronology__div prj-chronology__div_wide";
    public readonly yearMutedClassName = "color-muted";
    public readonly tabletHiddenClassName = "";

    protected currentYearProjects: ProjectInterface [];

    public componentWillMount() {
        this.currentYearProjects = projects.filter(({date: {year}}) => year === this.props.children);
    }

    public shouldComponentUpdate(nextProps: YearItemProps): boolean {
        return nextProps.currentDate.year === this.props.children
            || this.props.currentDate.year === this.props.children;
    }

    public render(): JSX.Element {
        const className = concat(
            this.baseClassName,
            this.props.children >= (new Date()).getFullYear() ? this.tabletHiddenClassName : ""
        );

        return (
            <div className={className}>
                {this.scaleItems}
            </div>
        );
    }

    protected onChangeProject = (element: HTMLElement, position: number) => {
        this.props.onChangeProject(element, position, this.props.children);
    };

    protected get scaleItems(): JSX.Element [] {
        const middle = Math.round(TimeLine.pointsCount / 2);

        return Array(TimeLine.pointsCount + 1)
            .fill(undefined)
            .map((x, i) => {

                // Future years must be lighter
                const yearLabelClassName = concat(
                    this.yearClassName,
                    this.props.children > (new Date()).getFullYear() ? this.yearMutedClassName : ""
                );

                if (i === middle) {
                    return <span className={yearLabelClassName} key={i}>{this.props.children}</span>;
                }

                // if current year equals to year for current element
                const isActive = this.props.currentDate.year === this.props.children
                    // if current month equals to current point index
                    && compareMonthWithScale(this.props.currentDate.month, i, TimeLine.pointsCount);

                // set project if it exist in current month
                const projectMonth = this.currentYearProjects
                    .find(({date: {month}}) => compareMonthWithScale(month, i, TimeLine.pointsCount));

                const sideClassName = `${i < middle ? SideTypes.left : SideTypes.right}-indent`;

                return projectMonth
                    ? (
                        <ActivePoint
                            sideClassName={sideClassName}
                            onProjectChange={this.onChangeProject}
                            isActive={isActive}
                            index={i}
                            key={i}
                        />
                    )
                    : <EmptyPoint sideClassName={sideClassName} key={i}/>

            });
    }

}
