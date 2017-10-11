import * as React from "react";

import {SliderProps, SliderPropTypes} from "./SliderProps";

import {SliderTitle, SliderDescription} from "./Partials";
import {toFixed} from "../../../helpers/toFixed";

export const Slider: React.SFC<SliderProps> = (props): JSX.Element => {
    const sliderStyle = {
        left: `${props.offset}%`
    };

    const getFormattedDate = (): string => {
        const {date} = props.project;

        return `${date.day}.${toFixed(2, date.month)}.${date.year}`;
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
