import * as PropTypes from "prop-types";
import {DateInterface} from "../../../data/Projects";

export interface YearItemProps {
    currentDate: DateInterface;
    onChangeProject: (element: HTMLElement, position: number, year: number) => void;
    children: number;
}

export const YearItemPropTypes = {
    currentDate: PropTypes.object.isRequired,
    onChangeProject: PropTypes.func.isRequired,
    children: PropTypes.number.isRequired,
};
