import * as React from "react";

import {TimeItem} from "./TimeItem";

import {TimeLineProps, TimeLinePropTypes} from "./TimeLineProps";
import {TimeLineState} from "./TimeLineState";

import {ProjectInterface} from "../../data/Projects/ProjectInterface";
import {projectsList} from "../../data/Projects/projectsDescriptionList";
import {concat} from "../../helpers/concat";

export class TimeLine extends React.Component<TimeLineProps, TimeLineState> {
    public static propTypes = TimeLinePropTypes;
    public static readonly animationDuration = 300;

    public readonly sliderDefaultClassName = "chronology-slider";
    public readonly sliderMoveClassName = "is-move";

    public state = {
        activeProject: projectsList[projectsList.length - 1],
        pointPosition: 0,
        sliderClassName: this.sliderDefaultClassName,
    };

    protected timeLineItems: number [];

    constructor(props) {
        super(props);

        this.timeLineItems = Array.from(Array(this.props.range.max - this.props.range.min + 1))
            .fill(undefined)
            .map((x, i) => this.props.range.min + i);
    }

    public componentDidUpdate() {
        if (this.state.sliderClassName !== this.sliderDefaultClassName) {
            setTimeout(() => {
                this.setState({
                    sliderClassName: this.sliderDefaultClassName
                })
            }, TimeLine.animationDuration * 2);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="prj-chronology">
                <this.Slider/>
                <div className="prj-chronology__div-outer prj-chronology__div-outer_left"/>
                <this.Container/>
                <div className="prj-chronology__div-outer prj-chronology__div-outer_right"/>
            </div>
        );
    }

    protected handleNextProject = (project: ProjectInterface, position: number) => {
        this.setState({
            sliderClassName: concat(
                this.sliderDefaultClassName,
                this.sliderMoveClassName
            )
        });

        setTimeout(() => {
            this.setState({
                pointPosition: position,
                activeProject: project
            })
        }, TimeLine.animationDuration);
    };

    protected Slider = (): JSX.Element => {
        const sliderOffset = {
            left: `${this.state.pointPosition}px`
        };

        return (
            <div className={this.state.sliderClassName} style={sliderOffset}>
                <div className="chronology-slider__body"/>
                <div className="chronology-slider__description">
                    <div className="chronology-slider__projects">
                        {this.title}
                    </div>
                    <span className="chronology-slider__services">{this.state.activeProject.description}</span>
                    <span className="chronology-slider__date">{this.date}</span>
                </div>
            </div>
        );
    };

    protected get date(): string {
        const activeDate = this.state.activeProject.date;
        return `${activeDate.year}.${activeDate.month}.${activeDate.day}`;
    }

    protected get title(): any [] {
        return this.state.activeProject.title
            .map(({name, url}, i) => {
                const props = {
                    href: url,
                    target: "_blank",
                    rel: "nofollow noopener"
                };

                return i < this.state.activeProject.title.length - 1
                    ? [<a {...props} key={i}>{name}</a>, " / "]
                    : <a {...props} key={i}>{name}</a>
            });
    }

    protected Container = (): JSX.Element => {
        const props = {
            setNextProject: this.handleNextProject
        };

        return (
            <div className="container">
                {this.timeLineItems.map((item) => <TimeItem key={item} {...props}>{item}</TimeItem>)}
            </div>
        );
    };
}
