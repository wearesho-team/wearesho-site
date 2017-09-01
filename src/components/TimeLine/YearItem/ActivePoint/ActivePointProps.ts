import * as PropTypes from "prop-types";

export interface ActivePointProps {
    isActive: boolean;
    index: number;
    setProject: (element: HTMLElement, position: number) => void;
}

export const ActivePointPropTypes = {
    isActive: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    setProject: PropTypes.func.isRequired
};
