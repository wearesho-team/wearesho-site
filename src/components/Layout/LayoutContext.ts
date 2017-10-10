import * as PropTypes from "prop-types";

export interface LayoutContext {
    isScrollDisabled?: boolean,
}

export const LayoutContextTypes = {
    isScrollDisabled: PropTypes.bool
};
