import * as React from "react";
import ReactModal from "react-modal";
import {ModalDefaultProps, ModalProps, ModalPropTypes} from "./ModalProps";

export class Modal extends React.Component<ModalProps, undefined> {

    public static propTypes = ModalPropTypes;
    public static defaultProps = ModalDefaultProps;

    public render(): JSX.Element {
        return (
            <ReactModal {...this.props}>
                {this.props.children}
            </ReactModal>
        );
    }
}
