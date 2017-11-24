import * as React from "react";
import {BaseInput, InputContext} from "react-context-form";

import {ReactInputMask} from "../../../../../helpers/imports/reactInputMask"

import {PhoneInputProps, PhoneInputPropTypes} from "./PhoneInputProps";
import {PhoneInputState} from "./PhoneInputState";

export class PhoneInput extends BaseInput<HTMLInputElement> {
    public static readonly propTypes = PhoneInputPropTypes;

    protected maskElement: typeof ReactInputMask;

    public maskList: string [];
    public state: any;
    public props: PhoneInputProps;

    public constructor(props) {
        super(props);

        this.maskList = this.props.maskList
            .sort((prev, curr) => prev.replace(/\D/g, "").length - curr.replace(/\D/g, "").length);

        this.state = {
            currentMask: this.maskList[0]
        } as any;
    }

    public async componentWillReceiveProps(P: PhoneInputProps, nextContext: InputContext) {

       // await this.handleMaskControl()
        console.log(1);
        console.log(this.context);

    }

    public render() {
        const {maskList, ...nativeProps} = this.childProps as PhoneInputProps;
        // console.log(this.context.value, this.context);

        const inputProps = {
            ...nativeProps,
            ...{
                onChange: this.handleChange,
                onInput: this.handleMaskControl,
                mask: this.state.currentMask,
                value: this.context.value || "",
                ref: this.setElement,
                maskChar: "",
                type: "tel",
            }
        };

        return (
            <ReactInputMask {...inputProps}/>
        );
    }

    protected setElement = (element: typeof ReactInputMask) => {
        if (!(element instanceof ReactInputMask)) {
            this.maskElement = undefined;
            return;
        }

        this.maskElement = element;
        if (this.childProps.ref instanceof Function) {
            this.childProps.ref(element.input);
        }
    };

    protected handleMaskControl = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        const clearLength = value.replace(/\D/g, "").length;

        this.setState({
            currentMask: this.maskList.reduce((prev, curr) => prev.replace(/\D/g, "").length > clearLength ? prev : curr)
        }, async () => {
            this.maskElement.setCursorPos(this.maskElement.input.selectionStart);
            if (this.maskElement.value !== this.context.value) {
                await this.handleChange({currentTarget: {value}} as React.ChangeEvent<HTMLInputElement>);
                this.maskElement.setCursorPos(this.maskElement.input.selectionStart);
            }
        });
    };
}