import * as React from "react";
// tslint:disable-next-line
const ReactInputMask = require("react-input-mask/lib");
import {BaseInput, BaseInputDefaultProps} from "react-context-form";

import {TimeInputDefaultProps, TimeInputProps, TimeInputPropTypes} from "./TimeInputProps";
import {toFixed} from "../../../../../helpers/toFixed";

export class TimeInput extends BaseInput<HTMLInputElement> {
    public static readonly propTypes = TimeInputPropTypes;
    public static readonly defaultProps: TimeInputProps = {
        ...TimeInputDefaultProps,
        ...BaseInputDefaultProps
    };

    public readonly hoursFormat = 24;
    public readonly minutesFormat = 59;

    public props: TimeInputProps;
    protected maskElement: typeof ReactInputMask;

    public get inputValue(): string {
        return this.context.value || this.props.defaultTime;
    }

    public render(): any {
        const {defaultTime, ...childProps} = this.childProps as TimeInputProps;

        const inputProps = {
            ...childProps,
            ...{
                onChange: this.handleChangeControl,
                ref: this.setElement,
                value: this.inputValue
            }
        };

        // tslint:disable:jsx-wrap-multiline
        return [
            <ReactInputMask {...inputProps} key="input"/>,
            <div className="spinner__controls" key="controls">
                <button type="button" className="btn btn_inc" onClick={this.handleIncrement}/>
                <button type="button" className="btn btn_dec" onClick={this.handleDecrement}/>
            </div>
        ];
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

    protected handleChangeControl = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
        const value = event.currentTarget.value.replace(/-/g, "0").split(":");

        let hours: string | number = Number(value[0]);
        let minutes: string | number = Number(value[1]);

        hours = hours > this.hoursFormat ? this.hoursFormat : toFixed(2, hours);
        minutes = minutes > this.minutesFormat ? this.minutesFormat : toFixed(2, minutes);

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
        let hours = toFixed(2, (Number(valuesArray[0]) + value));

        if (Number(hours) < 0) {
            hours = toFixed(2, 0);
        }

        // tslint:disable:no-object-literal-type-assertion
        return {
            currentTarget: {
                value: `${hours}:${valuesArray[1]}`
            }
        } as React.ChangeEvent<HTMLInputElement>;
    }
}
