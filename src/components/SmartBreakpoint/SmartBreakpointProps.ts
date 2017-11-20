import * as PropTypes from "prop-types";

export interface SmartBreakpointProps {
    match: string;
    delay?: number;
}

export const SmartBreakpointPropTypes = {
    match: PropTypes.string.isRequired,
    delay: PropTypes.number
};
