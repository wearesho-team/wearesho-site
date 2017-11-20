import * as PropTypes from "prop-types";

export interface TransformAnimationProps {
    initialComponent: JSX.Element | JSX.Element [],
    transformedComponent: JSX.Element | JSX.Element [],
    staticComponent?: JSX.Element | JSX.Element [],
    className?: string,
    event: string,
    onEvent?: () => any,
    duration: number
}

export const TransformAnimationPropTypes = {
    initialComponent: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]).isRequired,
    transformedComponent: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]).isRequired,
    staticComponent: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
    className: PropTypes.string,
    event: PropTypes.string.isRequired,
    onEvent: PropTypes.func,
    duration: PropTypes.number.isRequired
};
