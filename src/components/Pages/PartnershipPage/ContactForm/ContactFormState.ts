import * as PropTypes from "prop-types";

import {SubmitStatus} from "./SubmitStatus";

export interface ContactFormData {
    name: string,
    from?: string,
    to?: string
}

export interface ContactFormState {
    status: SubmitStatus,
    data?: ContactFormData
}

export const ContactFormDataPropTypes = {
    name: PropTypes.string.isRequired,
    from: PropTypes.string,
    to: PropTypes.string
};
