import * as PropTypes from "prop-types";
import {RouterProps} from "react-router";

export type RouterContext = RouterProps;

export const RouterContextTypes = {
    history: PropTypes.object,
};
