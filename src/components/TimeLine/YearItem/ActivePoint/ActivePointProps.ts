import * as PropTypes from "prop-types";

export interface ActivePointProps {
    isActive: boolean;
    sideClassName: string;
    index: number;
    onProjectChange: (element: HTMLElement, position: number) => void;
}

export const ActivePointPropTypes = {
    isActive: PropTypes.bool.isRequired,
    sideClassName: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onProjectChange: PropTypes.func.isRequired
};
