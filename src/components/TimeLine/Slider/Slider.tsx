import * as React from "react";
import moment from "moment";

import {SliderProps, SliderPropTypes} from "./SliderProps";

import {SliderTitle, SliderDescription} from "./Partials";

export const Slider: React.SFC<SliderProps> = (props): JSX.Element => {
    const sliderStyle = {
        left: `${props.offset}px`
    };

    return (
        <div className={props.className} style={sliderStyle}>
            <div className="chronology-slider__body"/>
            <div className="chronology-slider__description">
                <SliderTitle title={props.project.title}/>
                <SliderDescription items={props.project.description}/>
                <span className="chronology-slider__date">{moment(props.project.date).format("DD.MM.YYYY")}</span>
            </div>
        </div>
    );
};

Slider.propTypes = SliderPropTypes;
