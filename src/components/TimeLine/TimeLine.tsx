import * as React from "react";

import {concat} from "../../helpers/concat";
import {compareMonthWithScale} from "../../helpers/compareMonthWithScale";
import {getElementOffset} from "../../helpers/getElementOffset";

import {projects} from "../../data/Projects/projects";

import {TimeLineProps, TimeLinePropTypes} from "./TimeLineProps";
import {TimeLineState} from "./TimeLineState";

import {Slider} from "./Slider";
import {YearItem} from "./YearItem";

export class TimeLine extends React.Component<TimeLineProps, TimeLineState> {
    public static propTypes = TimeLinePropTypes;
    public static readonly animationDuration = 300;
    public static readonly pointsCount = 6;

    public static readonly sliderDefaultClassName = "chronology-slider";
    public static readonly sliderMoveClassName = "is-move";

    public state = {
        activeProject: projects[projects.length - 1],
        sliderPosition: 0,
        sliderClassName: TimeLine.sliderDefaultClassName,
    };

    protected years: number [];

    public render(): JSX.Element {
        this.years = Array.from(Array(this.props.range.max - this.props.range.min + 1))
            .fill(undefined)
            .map((x, i) => this.props.range.min + i);

        const sliderProps = {
            offset: this.state.sliderPosition,
            className: this.state.sliderClassName,
            project: this.state.activeProject
        };

        return (
            <div className="prj-chronology">
                {this.state.sliderPosition && <Slider {...sliderProps}/>}
                <div className="prj-chronology__div-outer prj-chronology__div-outer_left"/>
                <this.yearsContainer/>
                <div className="prj-chronology__div-outer prj-chronology__div-outer_right"/>
            </div>
        );
    }

    protected setNextProject = (element: HTMLElement, position: number, yearActive: number) => {
        const activeProject = projects.find(({date: {year, month}}) =>
        year === yearActive && compareMonthWithScale(month, position, TimeLine.pointsCount));

        this.setState({
            sliderClassName: concat(
                TimeLine.sliderDefaultClassName,
                TimeLine.sliderMoveClassName
            ),
        });

        setTimeout(() => {
            this.setState({
                sliderClassName: TimeLine.sliderDefaultClassName,
                sliderPosition: getElementOffset(element),
                activeProject
            })
        }, TimeLine.animationDuration);
    };

    protected yearsContainer = (): JSX.Element => {
        const props = {
            currentDate: this.state.activeProject.date,
            onChangeProject: this.setNextProject
        };

        const content = this.years.map((item) => <YearItem {...props} key={item}>{item}</YearItem>);

        return (
            <div className="container">
                {content}
            </div>
        );
    };
}
