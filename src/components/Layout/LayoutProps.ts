import * as PropTypes from 'prop-types';
import {History} from 'history';
import PreLoader from '../PreLoader';

export interface LayoutProps {
    history: History,
    preLoader: PreLoader,
}

export const LayoutPropTypes = {
    history: PropTypes.object.isRequired,
    preLoader: PropTypes.instanceOf(PreLoader).isRequired,
};

