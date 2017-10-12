import * as PropTypes from "prop-types";
import {CodeStyleAnimationSpeed, CodeStyleAnimationSpeedInterface} from "./CodeStyleAnimationSpeed";

export interface CodeStyleAnimationProps {
    delay?: number;
    children: string | String | string [];
    speed?: CodeStyleAnimationSpeed | CodeStyleAnimationSpeedInterface;
    caretTimeout?: number;
}

export const CodeStyleAnimationPropTypes = {
    delay: PropTypes.number,
    children: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    ]).isRequired,
    speed: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            max: PropTypes.number.isRequired,
            min: PropTypes.number.isRequired
        })
    ]),
    caretTimeout: PropTypes.number
};

export const CodeStyleAnimationDefaultProps = {
    speed: CodeStyleAnimationSpeed.fast,
    delay: 0,
    caretTimeout: 3000
};
