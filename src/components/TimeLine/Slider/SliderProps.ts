import * as PropTypes from "prop-types";
import {ProjectInterface} from "../../../data/Projects/ProjectInterface";

export interface SliderProps {
    offset: number,
    className: string,
    project: ProjectInterface
}

export const SliderPropTypes = {
    offset: PropTypes.number.isRequired,
    className: PropTypes.string.isRequired,
    project:  PropTypes.object.isRequired
};
