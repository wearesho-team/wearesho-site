import * as React from "react";
import * as PropTypes from "prop-types";
import {ProjectInterface} from "../../../data/Projects/ProjectInterface";

export interface MonthItemProps {
    pos: number,
    projectsList: ProjectInterface [],
    activeProject?: ProjectInterface,
    setNextProject: (project: ProjectInterface, position: number) => void;
}

export const MonthItemPropTypes = {
    pos: PropTypes.number.isRequired,
    projectsList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    activeProject: PropTypes.object,
    setNextProject: PropTypes.func.isRequired
};

export interface MonthItemPointInterface {
    className: string,
    onClick: (event: React.MouseEvent<HTMLElement>) => void | undefined,
    key: any
}
