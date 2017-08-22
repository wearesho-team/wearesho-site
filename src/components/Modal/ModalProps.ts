import * as PropTypes from "prop-types";

export interface ModalProps {
    overlayClassName?: string | object
    className?: string | object
    isOpen: boolean,
    contentLabel: string
}

export const ModalPropTypes = {
    overlayClassName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            base: PropTypes.string,
            afterOpen: PropTypes.string,
            beforeClose: PropTypes.string,
        }),
    ]),
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            base: PropTypes.string,
            afterOpen: PropTypes.string,
            beforeClose: PropTypes.string,
        }),
    ]),
    isOpen: PropTypes.bool.isRequired,
    contentLabel: PropTypes.string.isRequired,
};

export const ModalDefaultProps = {
    className: {
        base: "modal-body",
        afterOpen: "",
        beforeClose: "",
    },
    overlayClassName: {
        base: "modal-overlay",
        afterOpen: "",
        beforeClose: "",
    },
};
