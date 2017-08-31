import * as React from "react";

import {TimeLineContextTypes, TimeLineContext} from "./TimeLineContext";
import {TimeLineProps, TimeLinePropTypes} from "./TimeLineProps";
import {TimeLineState} from "./TimeLineState";

import {ProjectInterface, projects} from "../../data/Projects";
import {concat} from "../../helpers/concat";

import {Slider} from "./Slider";
import {YearItem} from "./YearItem";

export class TimeLine extends React.Component<TimeLineProps, TimeLineState> {
    public static propTypes = TimeLinePropTypes;
    public static childContextTypes = TimeLineContextTypes;
    public static readonly animationDuration = 300;

    public readonly sliderDefaultClassName = "chronology-slider";
    public readonly sliderMoveClassName = "is-move";

    public state = {
        activeProject: projects[projects.length - 1],
        pointPosition: 0,
        sliderClassName: this.sliderDefaultClassName,
    };

    protected years: number [];

    public getChildContext(): TimeLineContext {
        return {
            setNextProject: this.setNextProject
        }
    }

    public render(): JSX.Element {
        this.years = Array.from(Array(this.props.range.max - this.props.range.min + 1))
            .fill(undefined)
            .map((x, i) => this.props.range.min + i);

        const sliderProps = {
            offset: this.state.pointPosition,
            className: this.state.sliderClassName,
            project: this.state.activeProject
        };

        return (
            <div className="prj-chronology">
                <Slider {...sliderProps}/>
                <div className="prj-chronology__div-outer prj-chronology__div-outer_left"/>
                <this.yearsContainer/>
                <div className="prj-chronology__div-outer prj-chronology__div-outer_right"/>
            </div>
        );
    }

    protected setNextProject = (project: ProjectInterface, position: number) => {
        this.setState({
            sliderClassName: concat(
                this.sliderDefaultClassName,
                this.sliderMoveClassName
            ),
        });

        setTimeout(() => {
            this.setState({
                sliderClassName: this.sliderDefaultClassName,
                pointPosition: position,
                activeProject: project
            });
        }, TimeLine.animationDuration);
    };

    protected yearsContainer = (): JSX.Element => {
        return (
            <div className="container">
                {this.years.map((item) => <YearItem key={item}>{item}</YearItem>)}
            </div>
        );
    };
}
