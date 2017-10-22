import * as PropTypes from "prop-types";
import {CodeStyleAnimationSpeed, CodeStyleAnimationSpeedInterface} from "./CodeStyleAnimationSpeed";

export interface CodeStyleAnimationProps {
    delay?: number;
    // tslint:disable-next-line
    children: string | String | string [];
    speed?: CodeStyleAnimationSpeedInterface;
    caretTimeout?: number;
    startFeature: {
        element: HTMLElement,
        attribute: string,
        value: string
    };
}

export const CodeStyleAnimationPropTypes = {
    delay: PropTypes.number,
    children: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    ]).isRequired,
    speed: PropTypes.shape({
        max: PropTypes.number.isRequired,
        min: PropTypes.number.isRequired
    }),
    caretTimeout: PropTypes.number,
    startFeature: PropTypes.shape({
        element: PropTypes.object.isRequired,
        attribute: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    }).isRequired
};

export const CodeStyleAnimationDefaultProps = {
    speed: CodeStyleAnimationSpeed.fast,
    delay: 0,
    caretTimeout: 3000
};
