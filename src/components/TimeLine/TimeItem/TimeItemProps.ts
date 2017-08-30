import * as PropTypes from "prop-types";
import {ProjectInterface} from "../../../data/Projects/ProjectInterface";

export interface TimeItemProps {
    setNextProject: (project: ProjectInterface, position: number) => void;
}

export const TimeItemPropTypes = {
    setNextProject: PropTypes.func.isRequired,
};
