import * as PropTypes from "prop-types";
import {Languages} from "../../data/Languages";

export interface LayoutContext {
    isScrollDisabled?: boolean,
    language?: Languages,
    setLanguage?: (nextLanguage: Languages) => void,
}

export const LayoutContextTypes = {
    isScrollDisabled: PropTypes.bool,
    language: PropTypes.string,
    setLanguage: PropTypes.func,
};
