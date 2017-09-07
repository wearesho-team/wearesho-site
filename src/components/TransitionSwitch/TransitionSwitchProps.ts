import * as PropTypes from "prop-types";

export interface TransitionSwitchProps {
    classNames: string,
    className?: string,
}

export const TransitionSwitchPropTypes = {
    classNames: PropTypes.string.isRequired,
    className: PropTypes.string,
};
