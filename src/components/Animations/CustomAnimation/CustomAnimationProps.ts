import * as PropTypes from "prop-types";

export interface CustomAnimationProps {
    actionClassName: string;
    children: JSX.Element;
    duration?: number;
    delay?: number;
    startFeature: {
        element: HTMLElement,
        attribute: string,
        value: string
    };
}

export const CustomAnimationPropTypes = {
    actionClassName: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    duration: PropTypes.number,
    delay: PropTypes.number,
    startFeature: PropTypes.shape({
        element: PropTypes.object.isRequired,
        attribute: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    }).isRequired
};

export const CustomAnimationDefaultProps = {
    duration: 2000,
    delay: 0,
};
