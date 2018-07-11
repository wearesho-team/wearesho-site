import * as PropTypes from "prop-types";

import { Languages } from "data/Languages";

export interface LayoutContext {
    language?: Languages;
    isScrollDisabled?: boolean;
    setScrollState?: (scrollState: boolean) => void;
    setLanguage?: (nextLanguage: Languages) => void;
}

export const LayoutContextTypes: { [P in keyof LayoutContext]: PropTypes.Validator<any> } = {
    isScrollDisabled: PropTypes.bool,
    setScrollState: PropTypes.func,
    setLanguage: PropTypes.func,
    language: PropTypes.string
};
