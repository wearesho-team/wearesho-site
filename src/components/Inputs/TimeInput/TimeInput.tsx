import * as React from "react";

export class TimeInput extends React.Component<any, any> {

    protected hoursInput: any;
    protected minutesInput: any;

    public componentDidMount() {
        this.hoursInput.value = "18";
        this.minutesInput.value = "00";
    }

    public render() {

        return (
            <div>
                <input
                    type="number"
                    ref={(r) => this.hoursInput = r}
                    onChange={this.hoursChangeHandler}
                    placeholder="00"
                    onBlur={this.onBlurHandler}
                />
                <span>:</span>
                <input
                    type="number"
                    ref={(r) => this.minutesInput = r}
                    onChange={this.minutesChangeHandler}
                    placeholder="00"
                    onBlur={this.onBlurHandler}
                />
                <div>
                    <button/>
                    <button/>
                </div>
            </div>
        );
    }

    protected hoursChangeHandler = ({currentTarget}) => {
        const value = currentTarget.value;

        if (currentTarget.value.length >= 2) {
            this.minutesInput.focus();
            this.minutesInput.select();
        }

        // if value exist - check range for 0-2
        const firstDigit = value[0] && value[0].replace(/[3-9]/, "2") || "";

        // if time above 20 hours - check value for range 0-4
        const secondDigit = firstDigit === "2"
            ? value[1] && value[1].replace(/[5-9]/, "4") || ""
            : value[1] && value[1] || "";

        currentTarget.value = firstDigit + secondDigit;
    };

    protected minutesChangeHandler = ({currentTarget}) => {
        const value = currentTarget.value;

        if (value.length >= 2) {
            currentTarget.value = value[0] + value[1];
            return
        }

        const firstDigit = value[0] && value[0].replace(/[6-9]/, "5") || "";

        const secondDigit = value[1] || "";

        currentTarget.value = firstDigit + secondDigit;
    };

    protected onBlurHandler = ({currentTarget}) => {
        if (currentTarget.value.length < 2) {
            const firstDigit = currentTarget.value[0] || "0";
            const secondDigit = currentTarget.value[1] || "0";

            currentTarget.value = firstDigit + secondDigit;
        }
    };
}
