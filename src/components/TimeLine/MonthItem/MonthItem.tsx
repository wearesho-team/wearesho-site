import * as React from "react";
import ReactDOM from "react-dom";
import moment from "moment";

import {concat} from "../../../helpers/concat";

import {TimeLineContext, TimeLineContextTypes} from "../TimeLineContext";
import {MonthItemPointInterface, MonthItemProps, MonthItemPropTypes} from "./MonthItemProps";
import {projects, ProjectInterface} from "../../../data/Projects";

export enum SideTypes {
    left = "left",
    right = "right"
}

export class MonthItem extends React.Component<MonthItemProps, undefined> {
    public static contextTypes = TimeLineContextTypes;
    public static propTypes = MonthItemPropTypes;

    public readonly pointClassName = "prj-chronology__div";
    public readonly pointFilledClassName = "is-filled";
    public readonly pointActiveClassName = "is-active";

    public context: TimeLineContext;

    protected projectsPerYear: number [];
    protected pointSide: SideTypes;
    protected isActive: boolean;
    protected projectMonth: number;

    public componentDidMount() {

        // by default active project is latest
        this.setDefaultProject();
    }

    public componentDidUpdate() {

        // remove active state when slider animation start
        this.isActive = false;
    }

    public shouldComponentUpdate(nextProps) {

        if (!nextProps.activeProject) {
            return false;
        }

        return moment(nextProps.activeProject.date).month() !== this.projectMonth;
    }

    public render() {
        this.updateProjectList();

        return <span {...this.pointProps}/>
    }

    private setDefaultProject() {
        const latestProjectMonth = moment(projects[projects.length - 1].date).month();

        // if current project not equals to latest project
        if (this.projectMonth !== latestProjectMonth) {
            return;
        }

        this.setActiveProject(ReactDOM.findDOMNode(this), projects[projects.length - 1]);
        this.forceUpdate();
    }

    private updateProjectList() {
        this.projectsPerYear = this.props.year.map(({date}) => moment(date).month());
    }

    private setActiveProject(element: any, project: ProjectInterface) {

        // offset composed of single scale item (month) offset respect to parent (single year item)
        // and single year item offset respect to parent(container of all year items)
        const offset = element.offsetLeft + element.parentNode.offsetLeft;

        this.isActive = true;

        // pass options to TimeLine component
        this.context.setNextProject(project, offset);
    }

    private handleClick = ({currentTarget}) => {

        // search project description by month in projects of current year
        const selectedProject = this.props.year
            .find(({date}) => {
                return moment(date).month() >= this.projectMonth - 1 && moment(date).month() <= this.projectMonth
            });

        this.setActiveProject(currentTarget, selectedProject);
    };

    private get pointProps(): MonthItemPointInterface {
        this.pointSide = this.props.pos < 3 ? SideTypes.left : SideTypes.right;

        // set project if it exist in current month
        this.projectMonth = this.projectsPerYear
            .find((pos) => Math.round(pos / 2) === (this.props.pos < 3 ? this.props.pos + 1 : this.props.pos));

        const additionalClassName = this.isActive ? this.pointActiveClassName : this.pointFilledClassName;

        return {
            className: concat(
                `${this.pointClassName} ${this.pointClassName}_${this.pointSide}-indent`,
                this.projectMonth ? additionalClassName : ""
            ),
            onClick: this.projectMonth && !this.isActive ? this.handleClick : undefined,
            key: this.props.pos
        };

    }
}
