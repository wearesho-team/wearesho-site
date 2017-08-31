import * as React from "react";
import * as PropTypes from "prop-types";

export interface SliderDescriptionProps {
    items: string []
}

export const SliderDescriptionPropTypes = {
    items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export const SliderDescription: React.SFC<SliderDescriptionProps> = ({items}): JSX.Element => {
    const content: Array<JSX.Element | string> = Array(items.length);

    items.forEach((name) => content.push(<span key={name}>{name}</span>, " / "));

    content.pop();

    return (
        <span className="chronology-slider__services">
            {content}
        </span>
    );
};

SliderDescription.propTypes = SliderDescriptionPropTypes;
