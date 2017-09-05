import * as PropTypes from "prop-types";

export interface ActivePointProps {
    isActive: boolean;
    sideClassName: string;
    index: number;
    // arg index - for comparing with month
    onProjectChange: (element: HTMLElement, index: number) => void;
}

export const ActivePointPropTypes = {
    isActive: PropTypes.bool.isRequired,
    sideClassName: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onProjectChange: PropTypes.func.isRequired
};
