import * as React from "react";
import {TimeLineProps, TimeLinePropTypes} from "./TimeLineProps";
import {TimeItem} from "./TimeItem";

export class TimeLine extends React.Component<TimeLineProps, any> {

    public static propTypes = TimeLinePropTypes;

    protected timeLineItems: number [];

    constructor(props) {
        super(props);

        this.timeLineItems = Array.from(Array(this.props.range.max - this.props.range.min + 1))
            .fill(undefined)
            .map((x, i) => this.props.range.min + i);
    }

    protected get slider() {
        return (
            <div className="chronology-slider">
                <div className="chronology-slider__body"/>
                <div className="chronology-slider__description">
                    <div className="chronology-slider__projects">
                        <a href="#">NIKO</a>&nbsp;/&nbsp;
                        <a href="#">Infinance</a>
                    </div>
                    <span className="chronology-slider__services">Техническая поддержка</span>
                    <span className="chronology-slider__date">18.08.2017</span>
                </div>
            </div>
        );
    }

    protected get container() {
        return (
            <div className="container">
                {this.timeLineItems.map((item) => <TimeItem key={item}>{item}</TimeItem>)}
            </div>
        );
    }

    public render() {
        return (
            <div className="prj-chronology">
                {this.slider}
                <div className="prj-chronology__div-outer prj-chronology__div-outer_left"/>
                {this.container}
                <div className="prj-chronology__div-outer prj-chronology__div-outer_right"/>
            </div>
        );
    }
}
