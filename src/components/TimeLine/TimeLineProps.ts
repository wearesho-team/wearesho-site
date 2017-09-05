import * as PropTypes from "prop-types";

export interface TimeLineProps {
    range: {
        min: number,
        max: number,
    }
}

export const TimeLinePropTypes = {
    range: PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
    }).isRequired
};
