import * as React from "react";
import * as PropTypes from "prop-types";

interface TitleElement {
    name: string,
    url: string
}

export interface SliderTitleProps {
    title: Array<{
        name: string,
        url: string
    }>
}

export const SliderTitlePropTypes = Object.freeze({
    title: PropTypes.arrayOf(PropTypes.shape<React.ValidationMap<TitleElement>>({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }).isRequired).isRequired
}) as React.ValidationMap<SliderTitleProps>;

export const SliderTitle: React.SFC<SliderTitleProps> = ({ title }): JSX.Element => {
    const content: Array<JSX.Element | string> = [];

    const linkProps = {
        target: "_blank",
        rel: "nofollow noopener"
    };

    title.forEach(({ name, url }) => content.push(<a href={url} key={url} {...linkProps}>{name}</a>, " / "));

    content.pop();

    return (
        <div className="slider__projects">
            {content}
        </div>
    );
};

SliderTitle.propTypes = SliderTitlePropTypes;
