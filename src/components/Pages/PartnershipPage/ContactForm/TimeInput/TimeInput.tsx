import * as React from "react";
import {BaseInput, BaseInputDefaultProps} from "react-context-form";

import {ReactInputMask} from "../../../../../helpers/imports/reactInputMask"
import {toFixed} from "../../../../../helpers/toFixed";

import {TimeInputDefaultProps, TimeInputProps, TimeInputPropTypes} from "./TimeInputProps";

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
        return this.maskElement
            ? this.maskElement.value
            : undefined;
    }

    public render(): any {
        const inputProps = {
            ...this.childProps,
            ...{
                onChange: this.handleChangeControl,
                ref: this.setElement,
                value: this.context.value,
                type: "tel",
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

        // tslint:disable:no-object-literal-type-assertion
        const newEvent = {
            currentTarget: {
                value: `${hours}:${minutes}`
            }
        } as React.ChangeEvent<HTMLInputElement>;

        await this.handleChange(newEvent);
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
