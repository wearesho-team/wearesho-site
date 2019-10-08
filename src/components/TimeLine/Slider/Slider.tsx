import * as React from "react";

import {toFixed} from "../../../helpers/toFixed";

import {SliderProps, SliderPropTypes} from "./SliderProps";
import {SliderTitle, SliderDescription} from "./Partials";

export const Slider: React.FC<SliderProps> = (props): JSX.Element => {
    if (!props.offset) {
        // tslint:disable:no-null-keyword
        return null;
    }

    const sliderStyle = {
        left: `${props.offset}%`
    };

    const getFormattedDate = (): string => {
        const {date} = props.project;

        return `${date.day}. ${toFixed(2, date.month)}. ${date.year}`;
    };

    return (
        <div className={props.className} style={sliderStyle}>
            <div className="slider__body">
                <div className="slider__bar"/>
            </div>
            <div className="slider__description">
                <SliderTitle title={props.project.title}/>
                <SliderDescription items={props.project.description}/>
                <span className="slider__date">{getFormattedDate()}</span>
            </div>
        </div>
    );
};

Slider.propTypes = SliderPropTypes as React.ValidationMap<SliderProps>;
