import * as PropTypes from "prop-types";

export interface ReCaptchaProps {
    sitekey: string,
    onChange: (args: any) => any,
    size?: string,
    className?: string
}

export const ReCaptchaPropTypes = {
    sitekey: PropTypes.string.isRequired,
    onChange: PropTypes.bool.isRequired,
    size: PropTypes.string,
    className: PropTypes.string
};
