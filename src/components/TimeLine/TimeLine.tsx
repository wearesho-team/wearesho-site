import * as React from "react";

import {smartClearTimeout, ElementWithTimer} from "../../helpers/smartClearTimeout";
import {compareMonthWithScale} from "../../helpers/compareMonthWithScale";
import {getElementOffset} from "../../helpers/getElementOffset";
import {compareDates} from "../../helpers/compareDates";
import {concat} from "../../helpers/concat";

import {projects} from "../../data/Projects/projects";

import {TimeLineProps, TimeLinePropTypes} from "./TimeLineProps";
import {TimeLineState} from "./TimeLineState";
import {Slider} from "./Slider/Slider";
import {YearItem} from "./YearItem";

export class TimeLine extends React.Component<TimeLineProps, TimeLineState>
    implements ElementWithTimer {

    public static readonly propTypes = TimeLinePropTypes;
    public static readonly animationDuration = 300;
    public static readonly pointsCount = 6;

    public static readonly sliderDefaultClassName = "slider";
    public static readonly sliderMoveClassName = "is-move";

    public readonly widthRange = 85;

    public timer: any;

    protected clearTimeout = smartClearTimeout.bind(this);

    public constructor(props) {
        super(props);

        this.state = {
            activeProject: !document.body.className.includes("loaded") ? projects[0] : projects[projects.length - 1],
            sliderPosition: 0,
            sliderClassName: TimeLine.sliderDefaultClassName,
        }
    }

    public componentWillUnmount() {
        this.clearTimeout(this.timer);
    }

    public componentDidMount() {
        // tslint:disable:no-magic-numbers

        // initial animation
        if (!document.body.className.includes("loaded")) {
            setTimeout(() => {
                this.setState({
                    activeProject: projects[projects.length - 1],
                })
            }, ((window as any).hideTimeout || 2000) * 9);
        }
    }

    public shouldComponentUpdate(nextProps: TimeLineProps, nextSate: TimeLineState): boolean {
        return nextSate.sliderClassName !== this.state.sliderClassName
            || nextSate.sliderPosition !== this.state.sliderPosition
            || compareDates(nextSate.activeProject.date, this.state.activeProject.date);
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
                <Slider {...sliderProps}/>
                <div className="prj-chronology__div-outer prj-chronology__div-outer_left">
                    <span>{this.props.range.min - 1}</span>
                </div>
                <this.years yearsList={yearsList}/>
                <div className="prj-chronology__div-outer prj-chronology__div-outer_right">
                    <span>{this.props.range.max + 1}</span>
                </div>
            </div>
        );
    }

    protected handleChangeProject = (element: HTMLElement, position: number, yearActive: number) => {
        const activeProject = projects.find(({date: {year, month}}) =>
            year === yearActive && compareMonthWithScale(month, position, TimeLine.pointsCount));
        if (!activeProject) {
            return;
        }

        const offset = getElementOffset(element);
        if (this.state.sliderPosition === offset) {
            return
        }

        this.setState({
            sliderClassName: concat(
                this.state.sliderClassName,
                TimeLine.sliderMoveClassName
            ),
        });

        this.clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.setState({
                sliderClassName: concat(TimeLine.sliderDefaultClassName, offset > this.widthRange ? "swap" : ""),
                sliderPosition: offset,
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
