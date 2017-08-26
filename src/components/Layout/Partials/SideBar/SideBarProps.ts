import * as PropTypes from "prop-types";
import {History} from "history";

export interface SideBarProps {
    history: History,
}

export const SideBarPropTypes = {
    history: PropTypes.object.isRequired,
};