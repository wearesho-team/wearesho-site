import * as PropTypes from "prop-types";

export interface RouterContext {
    router: {
        history: {
            location: any,
            push: (...args) => any,
            listen: (...args) => any
        },
        route: {
            location: any
        }
    }
}

export const RouterContextTypes = {
    router: PropTypes.shape({
        history: PropTypes.shape({
            location: PropTypes.any.isRequired,
            push: PropTypes.func.isRequired,
            listen: PropTypes.func.isRequired
        }).isRequired,
        route: PropTypes.shape({
            location: PropTypes.any.isRequired
        }).isRequired
    }).isRequired
};
