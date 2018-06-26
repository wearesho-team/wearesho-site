import * as PropTypes from "prop-types";
import { Languages } from "../../data/Languages";

export interface LayoutContext {
    language?: Languages;
    isScrollDisabled?: boolean;
    setLanguage?: (nextLanguage: Languages) => void;
}

export const LayoutContextTypes = {
    isScrollDisabled: PropTypes.bool,
    setLanguage: PropTypes.func,
    language: PropTypes.string,
};
