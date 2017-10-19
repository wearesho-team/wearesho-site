import * as PropTypes from "prop-types";
import {BaseInputProps} from "react-context-form";

export interface TimeInputProps extends BaseInputProps<HTMLInputElement> {
    mask?: string,
    alwaysShowMask?: boolean,
    maskChar?: string,
    defaultTime?: string
}

export const TimeInputPropTypes = {
    mask: PropTypes.string,
    alwaysShowMask: PropTypes.bool,
    maskChar: PropTypes.string,
    defaultTime: PropTypes.string
};

export const TimeInputDefaultProps = {
    mask: "99:99",
    defaultTime: "00:00",
    maskChar: "-",
    alwaysShowMask: true
};
