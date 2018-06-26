import * as PropTypes from "prop-types";
import { History } from "history";

export interface LayoutProps {
    history: History,
}

export const LayoutPropTypes = {
    history: PropTypes.object.isRequired,
};
