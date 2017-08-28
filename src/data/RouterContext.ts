import * as PropTypes from "prop-types";

export interface RouterContext {
    router: {
        history: any
    }
}

export const RouterContextTypes = {
    router: PropTypes.shape({
        history: PropTypes.object.isRequired
    }).isRequired
};
