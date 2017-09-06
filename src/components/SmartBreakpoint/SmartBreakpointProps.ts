import * as PropTypes from "prop-types";

export interface SmartBreakpointProps {
    match: string
}

export const SmartBreakpointPropTypes = {
    match: PropTypes.string.isRequired
};
