import * as PropTypes from 'prop-types';
import {Location} from 'history';

export interface TransitionSwitchProps {
    location: Location,
    classNames: string,
    timeout: number,
}

export const TransitionSwitchPropTypes = {
    location: PropTypes.object.isRequired,
    classNames: PropTypes.string.isRequired,
    timeout: PropTypes.number.isRequired,
};
