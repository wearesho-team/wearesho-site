import * as PropTypes from "prop-types";
import {BaseInputProps} from "react-context-form";

export interface PhoneInputProps extends BaseInputProps {
    maskList: string [];
}

export const PhoneInputPropTypes = {
    maskList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};
