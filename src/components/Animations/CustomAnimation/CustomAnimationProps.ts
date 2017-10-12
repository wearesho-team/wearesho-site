import * as PropTypes from "prop-types";

export interface CustomAnimationProps {
    actionClassName: string;
    children: JSX.Element;
    duration?: number;
    delay?: number;
}

export const CustomAnimationPropTypes = {
    actionClassName: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    duration: PropTypes.number,
    delay: PropTypes.number,
};

export const CustomAnimationDefaultProps = {
    duration: 2000,
    delay: 0,
};
