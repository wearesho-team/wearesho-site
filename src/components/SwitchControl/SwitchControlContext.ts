import * as PropTypes from "prop-types";

export interface SwitchControlContext {
    setScrollDisabled: (state: boolean) => void,
}

export const SwitchControlContextTypes = {
    setScrollDisabled: PropTypes.func.isRequired,
};
