import {Props} from "google-map-react";
import * as PropTypes from "prop-types";

export interface MapProps extends Props {
    marker?: JSX.Element
}

export const MapDefaultProps  = {
    center: {lat: 50, lng: 36.229167},
    zoom: 5,
    scrollwheel: false,
    draggable: false
};

export const MapPropTypes = {
    marker: PropTypes.element,
    center: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
    }),
    zoom: PropTypes.number,
    scrollwheel: PropTypes.bool,
};
