import * as React from "react";
import {SliderProps, SliderPropTypes} from "./SliderProps";

import {SliderTitle, SliderDescription} from "./Partials";

export const Slider: React.SFC<SliderProps> = (props): JSX.Element => {
    const sliderStyle = {
        left: `${props.offset}px`
    };

    // TODO: format helper
    const getFormattedDate = () => {
        return `${props.project.date.day}.${props.project.date.month}.${props.project.date.year}`
    };

    return (
        <div className={props.className} style={sliderStyle}>
            <div className="chronology-slider__body"/>
            <div className="chronology-slider__description">
                <SliderTitle title={props.project.title}/>
                <SliderDescription items={props.project.description}/>
                <span className="chronology-slider__date">{getFormattedDate()}</span>
            </div>
        </div>
    );
};

Slider.propTypes = SliderPropTypes;
