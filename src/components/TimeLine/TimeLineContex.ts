import * as PropTypes from "prop-types";

export interface TimeLineContext {
    setActiveProjects: (activeProjects: any[]) => void;
    setPointPosition: (pointPosition: number) => void;
}

export const TimeLineContextTypes = {
    setActiveProjects: PropTypes.func.isRequired,
    setPointPosition: PropTypes.func.isRequired
};
