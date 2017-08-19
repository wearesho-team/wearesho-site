import * as PropTypes from "prop-types";
import {History} from "history";
import {PreLoaderInterface} from "../PreLoader/PreLoaderInterface";

export interface LayoutProps {
    history: History,
    preLoader: PreLoaderInterface,
}

export const LayoutPropTypes = {
    history: PropTypes.object.isRequired,
    preLoader: PropTypes.shape({
        show: PropTypes.func.isRequired,
        hide: PropTypes.func.isRequired,
    }).isRequired,
};
