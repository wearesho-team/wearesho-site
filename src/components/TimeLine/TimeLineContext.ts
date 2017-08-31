import * as PropTypes from "prop-types";
import {ProjectInterface} from "../../data/Projects/ProjectInterface";

export interface TimeLineContext {
    setNextProject: (project: ProjectInterface, position: number) => void;
}

export const TimeLineContextTypes = {
    setNextProject: PropTypes.func.isRequired,
};
