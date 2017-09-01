import * as PropTypes from "prop-types";
import {ProjectInterface} from "../../../data/Projects";

export interface YearItemProps {
    activeProject?: ProjectInterface,
    setNextProject: (project: ProjectInterface, position: number) => void;
}

export const YearItemPropTypes = {
    activeProject: PropTypes.object,
    setNextProject: PropTypes.func.isRequired,
};
