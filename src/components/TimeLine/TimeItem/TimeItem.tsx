import * as React from "react";
import {concat} from "../../../helpers/concat";

import {projectsList} from "../../../data/Projects/projectsDescriptionList";
import {ProjectInterface} from "../../../data/Projects/ProjectInterface";

import {TimeItemProps, TimeItemPropTypes} from "./TimeItemProps";

export enum SideTypes {
    left = "left",
    right = "right"
}

export class TimeItem extends React.Component<TimeItemProps, undefined> {
    public static propTypes = TimeItemPropTypes;

    public readonly yearClassName = "prj-chronology__div prj-chronology__div_wide";
    public readonly yearMutedClassName = "color-muted";
    public readonly pointClassName = "prj-chronology__div prj-chronology__div";
    public readonly pointFilledClassName = "is-filled";
    public readonly pointActiveClassName = "is-active";
    public readonly pointsCount = 7;

    protected readonly currentYear: ProjectInterface [];
    protected readonly projectsInYear: number [];

    constructor(props) {
        super(props);

        this.currentYear = projectsList.filter(({date: {year}}) => Number(year) === this.props.children);
        this.projectsInYear = this.currentYear.map(({date: {month}}) => Number(month));
    }

    public render() {
        return <this.Scale/>
    }

    private handleClickPoint = ({currentTarget}) => {

        // search month number in class name
        const selectedMonth = Number(currentTarget.className.match(/month-([\d]{1,2})/)[1]);

        // search project description by month in projects of current year
        const selectedProject = this.currentYear
            .find(({date: {month}}) => Number(month) >= selectedMonth - 1 && Number(month) <= selectedMonth);

        // offset composed of single scale item offset respect to parent(single year item)
        // and single year item offset respect to parent(container of all year items)
        const offset = currentTarget.offsetLeft + currentTarget.parentNode.offsetLeft;

        // pass calculated params to parent component
        this.props.setNextProject(selectedProject, offset);
    };

    private renderScaleItemToSide(side: SideTypes, itemPos: number) {

        // if project exist for current scale item
        const projectMonth = this.projectsInYear
            .find((pos) => Math.round(pos / 2) === (side === SideTypes.left ? itemPos + 1 : itemPos));

        const props = {
            className: concat(
                `${this.pointClassName}_${side}-indent month-${projectMonth}`,
                projectMonth ? this.pointFilledClassName : ""
            ),
            onClick: projectMonth ? this.handleClickPoint : undefined,
            key: itemPos
        };

        return <span {...props}/>
    }

    private Scale = (): JSX.Element => {

        // single year item composed of 6 scales items and 1 year item on the middle
        const scaleItems = Array.from(Array(this.pointsCount))
            .map((x, i) => {
                if (i < 3) {

                    // render scale items on the left side over middle
                    return this.renderScaleItemToSide(SideTypes.left, i);
                } else if (i === 3) {

                    // future years must be lighter then others
                    const className = concat(
                        this.yearClassName,
                        this.props.children > (new Date()).getFullYear() ? this.yearMutedClassName : ""
                    );

                    // render year item on the middle
                    return <span className={className} key={i}>{this.props.children}</span>
                } else {

                    // render scale items on the right side over middle
                    return this.renderScaleItemToSide(SideTypes.right, i);
                }
            });

        return (
            <div className="prj-chronology__item">
                {scaleItems}
            </div>
        );
    }

}
