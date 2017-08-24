import {Props} from "google-map-react";
import * as PropTypes from "prop-types";

export type MapProps = Props;

export const MapDefaultProps  = {
    center: {lat: 52.78, lng: 35.18},
    zoom: 5,
    scrollwheel: false,
};

export const MapPropTypes = {
    center: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
    }),
    zoom: PropTypes.number,
    scrollwheel: PropTypes.bool,
};
