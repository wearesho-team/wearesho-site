import * as React from "react";
import { BaseInput, BaseInputDefaultProps } from "react-context-form";

import { ReactInputMask } from "../../../../../../helpers/imports/reactInputMask"
import { isFunction } from "../../../../../../helpers/isFunction";
import { toFixed } from "../../../../../../helpers/toFixed";

import { TimeInputDefaultProps, TimeInputProps, TimeInputPropTypes } from "./TimeInputProps";

export class TimeInput extends BaseInput<TimeInputProps> {
    public static readonly propTypes = TimeInputPropTypes;
    public static readonly defaultProps = {
        ...TimeInputDefaultProps,
        ...BaseInputDefaultProps
    } as any;

    public readonly hoursFormat = 23;
    public readonly minutesFormat = 59;

    protected maskElement: typeof ReactInputMask;
    protected currentCursorPosition: number;

    public get inputValue(): string {
        return this.maskElement
            ? this.maskElement.value
            : undefined;
    }

    public render(): any {
        // noinspection JSUnusedLocalSymbols
        const { onCursorEnd, ...nativeProps } = this.childProps as TimeInputProps;

        const inputProps = {
            ...nativeProps,
            onChange: this.handleChangeControl,
            onKeyDown: this.handleKeyDown,
            onKeyUp: this.handleKeyUp,
            value: this.context.value,
            onInput: this.handleInput,
            onFocus: this.handleFocus,
            onBlur: () => undefined,
            ref: this.setElement,
            autoComplete: "off",
            type: "tel"
        };

        // tslint:disable:jsx-wrap-multiline
        return [
            <ReactInputMask {...inputProps} key="input"/>,
            <div className="spinner__controls" key="controls">
                <button type="button" tabIndex={-1} className="btn btn_inc" onClick={this.handleIncrement}/>
                <button type="button" tabIndex={-1} className="btn btn_dec" onClick={this.handleDecrement}/>
            </div>
        ];
    }

    protected setElement = (element: typeof ReactInputMask) => {
        if (!(element instanceof ReactInputMask)) {
            this.maskElement = undefined;
            return;
        }

        this.maskElement = element;
        if (
            isFunction(this.childProps.ref) &&
            this.childProps.ref instanceof Function
        ) {
            this.childProps.ref(element.input);
        }
    };

    protected handleFocus = async (): Promise<void> => {
        this.maskElement.setCursorPos(0);

        return this.context.onFocus();
    };

    protected handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.currentCursorPosition = event.target.selectionStart
    };

    protected handleChangeControl = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
        const value = event.currentTarget.value.replace(/-/g, "0").split(":");

        let hours: string | number = Number(value[ 0 ]);
        let minutes: string | number = Number(value[ 1 ]);

        hours = hours > this.hoursFormat ? this.hoursFormat : toFixed(2, hours);
        minutes = minutes > this.minutesFormat ? this.minutesFormat : toFixed(2, minutes);

        if (
            this.currentCursorPosition >= value.join(":").length
            && isFunction(this.props.onCursorEnd)
        ) {
            this.props.onCursorEnd(this.maskElement.input, this.context);
        }

        return this.context.onChange(`${hours}:${minutes}`);
    };

    protected handleKeyDown = async (event: KeyboardEvent): Promise<void> => {
        if (event.key === "ArrowDown") {
            this.maskElement.setCursorPos(this.currentCursorPosition || 0);
            await this.handleDecrement();
        } else if (event.key === "ArrowUp") {
            this.maskElement.setCursorPos(this.currentCursorPosition || 0);
            await this.handleIncrement();
        }
    };

    protected handleKeyUp = (event: KeyboardEvent): void => {
        if (event.key === "Tab") {
            this.maskElement.setCursorPos(this.currentCursorPosition || 0);
        }
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
        let hours = toFixed(2, (Number(valuesArray[ 0 ]) + value));

        if (Number(hours) < 0) {
            hours = toFixed(2, 0);
        }

        // tslint:disable:no-object-literal-type-assertion
        return {
            currentTarget: {
                value: `${hours}:${valuesArray[ 1 ]}`
            }
        } as React.ChangeEvent<HTMLInputElement>;
    }
}
