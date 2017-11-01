import * as React from "react";
import * as PropTypes from "prop-types";

export interface SliderDescriptionProps {
    items: string []
}

export const SliderDescriptionPropTypes = {
    items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export const SliderDescription: React.SFC<SliderDescriptionProps> = ({items}): JSX.Element => {
    const content: string[] = [];

    items.forEach((name) => content.push(name, " / "));

    content.pop();

    return (
        <span className="slider__services">
            {content}
        </span>
    );
};

SliderDescription.propTypes = SliderDescriptionPropTypes;
