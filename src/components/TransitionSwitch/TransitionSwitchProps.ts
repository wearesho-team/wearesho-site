import * as PropTypes from "prop-types";
import {History} from "history";

export interface TransitionSwitchProps {
    history: History,
    classNames: string,
    className?: string,
    timeout?: number,
}

export const TransitionSwitchPropTypes = {
    history: PropTypes.object.isRequired,
    classNames: PropTypes.string.isRequired,
    className: PropTypes.string,
    timeout: PropTypes.number,
};

export const TransitionSwitchDefaultProps = {
    timeout: 500,
};
