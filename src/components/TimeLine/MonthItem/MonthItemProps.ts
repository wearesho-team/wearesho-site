import * as React from "react";
import * as PropTypes from "prop-types";
import {ProjectInterface} from "../../../data/Projects/ProjectInterface";

export interface MonthItemProps {
    pos: number,
    year: ProjectInterface []
}

export const MonthItemPropTypes = {
    pos: PropTypes.number.isRequired,
    year: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export interface MonthItemPointInterface {
    className: string,
    onClick: (event: React.MouseEvent<HTMLElement>) => void | undefined,
    key: any
}
