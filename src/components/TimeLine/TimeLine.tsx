import * as React from "react";

import {concat} from "../../helpers/concat";
import {compareMonthWithScale} from "../../helpers/compareMonthWithScale";
import {getElementOffset} from "../../helpers/getElementOffset";
import {smartClearTimeout, ElementWithTimer} from "../../helpers/smartClearTimeout";

import {projects} from "../../data/Projects/projects";

import {TimeLineProps, TimeLinePropTypes} from "./TimeLineProps";
import {TimeLineState} from "./TimeLineState";

import {Slider} from "./Slider";
import {YearItem} from "./YearItem";

export class TimeLine extends React.Component<TimeLineProps, TimeLineState>
    implements ElementWithTimer {

    public static propTypes = TimeLinePropTypes;
    public static readonly animationDuration = 300;
    public static readonly pointsCount = 6;

    public static readonly sliderDefaultClassName = "chronology-slider";
    public static readonly sliderMoveClassName = "is-move";

    public timer: any;
    public state: TimeLineState = {
        activeProject: projects[projects.length - 1],
        sliderPosition: 0,
        sliderClassName: TimeLine.sliderDefaultClassName,
    };

    protected clearTimeout = smartClearTimeout.bind(this);

    public componentWillUnmount() {
        this.clearTimeout(this.timer);
    }

    public shouldComponentUpdate(nextProps: TimeLineProps, nextSate: TimeLineState): boolean {
        return nextSate.sliderPosition !== this.state.sliderPosition
            || nextSate.sliderClassName !== this.state.sliderClassName;
    }

    public render(): JSX.Element {
        const yearsList = Array.from(Array(this.props.range.max - this.props.range.min + 1))
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
                <this.years yearsList={yearsList}/>
                <div className="prj-chronology__div-outer prj-chronology__div-outer_right"/>
            </div>
        );
    }

    protected handleChangeProject = (element: HTMLElement, position: number, yearActive: number) => {
        const activeProject = projects.find(({date: {year, month}}) =>
            year === yearActive && compareMonthWithScale(month, position, TimeLine.pointsCount));

        if (!activeProject) {
            return;
        }

        this.setState({
            sliderClassName: concat(
                TimeLine.sliderDefaultClassName,
                TimeLine.sliderMoveClassName
            ),
        });

        this.clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.setState({
                sliderClassName: TimeLine.sliderDefaultClassName,
                sliderPosition: getElementOffset(element),
                activeProject
            });
        }, TimeLine.animationDuration);
    };

    protected years = ({yearsList}): JSX.Element => {
        const childProps = {
            currentDate: this.state.activeProject.date,
            onChangeProject: this.handleChangeProject
        };

        const content = yearsList.map((item: number) => <YearItem {...childProps} key={item}>{item}</YearItem>);

        return (
            <div className="container">
                {content}
            </div>
        );
    };
}
