import * as React from "react";
import Mask from "react-input-mask";
import {BaseInput, BaseInputDefaultProps} from "react-context-form";

import {TimeInputDefaultProps, TimeInputProps, TimeInputPropTypes} from "./TimeInputProps";

export class TimeInput extends BaseInput<HTMLInputElement> {
    public static readonly propTypes = TimeInputPropTypes;
    public static readonly defaultProps: TimeInputProps = {
        ...TimeInputDefaultProps,
        ...BaseInputDefaultProps
    };

    public props: TimeInputProps;
    public maskElement: Mask;

    public render(): any {
        const {defaultTime, ...childProps} = this.childProps as TimeInputProps;

        const inputProps = {
            ...childProps,
            ...{
                onChange: this.handleChangeControl,
                ref: this.setElement,
                value: this.inputValue || defaultTime
            }
        };

        return [
            <Mask {...inputProps} key="input"/>,
            <div className="spinner__controls" key="controls">
                <button type="button" className="btn btn_inc" onClick={this.handleIncrement}/>
                <button type="button" className="btn btn_dec" onClick={this.handleDecrement}/>
            </div>
        ]
    }

    protected setElement = (element: Mask) => {
        if(!(element instanceof Mask)) {
            return;
        }

        this.maskElement = element;
        if (this.childProps.ref instanceof Function) {
            this.childProps.ref(element.input);
        }
    };

    protected get inputValue(): string {
        return this.maskElement
            ? this.maskElement.value
            : undefined;
    }

    protected handleChangeControl = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
        const value = event.currentTarget.value.replace(/-/g, "0").split(":");

        let hours: string | number = Number(value[0]);
        let minutes: string | number = Number(value[1]);

        hours = hours > 24 ? "24" : String("0" + hours).slice(-2);
        minutes = minutes > 59 ? "59" : String("0" + minutes).slice(-2);

        this.maskElement && this.maskElement.setInputValue(`${hours}:${minutes}`);

        await this.handleChange(event);
    };

    protected handleIncrement = async () => {
        if (!this.maskElement) {
            return;
        }

        await this.handleChangeControl(this.changeHours(1));
    };

    protected handleDecrement = async () => {
        if (!this.maskElement) {
            return;
        }

        await this.handleChangeControl(this.changeHours(-1));
    };

    protected changeHours(value: number): React.ChangeEvent<HTMLInputElement> {
        const valuesArray = this.inputValue.split(":");
        let hours = String("0" + (Number(valuesArray[0]) + value)).slice(-2);

        if (Number(hours) < 0) {
            hours = "00";
        }

        return {
            currentTarget: {
                value: `${hours}:${valuesArray[1]}`
            }
        } as React.ChangeEvent<HTMLInputElement>;
    }
}
