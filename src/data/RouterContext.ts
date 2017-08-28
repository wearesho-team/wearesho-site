import * as PropTypes from "prop-types";

export const RouterContextTypes = {
    router: PropTypes.shape({
        history: PropTypes.shape({
            push: PropTypes.func.isRequired,
            replace: PropTypes.func.isRequired,
            createHref: PropTypes.func.isRequired
        }).isRequired
    }).isRequired
};
