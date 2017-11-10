// tslint:disable
import * as React from "react";

const feDropShadow = React.createElement("feDropShadow", {dx: "0", dy: "0", stdDeviation: "0"});

export const ZeroIcon: React.SFC<undefined> = (): JSX.Element => (
    <svg
        className="icon_zero"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 155 150.7"
        width="154"
        height="154"
    >
        <filter id="shadow">
            {feDropShadow}
        </filter>
        <path
            id="flashing"
            filter="url(#shadow)"
            fill="#EB4B7C"
            d="M77.5 0C34.8 0 0 34.8 0 77.5c0 33.8 21.8 62.6 52 73.2v-3.2c-28.6-10.4-49-37.9-49-70C3 36.4 36.4 3 77.5 3S152 36.4 152 77.5c0 32.1-20.4 59.6-49 70v3.2c30.2-10.6 52-39.4 52-73.2C155 34.8 120.2 0 77.5 0z"
        />
        {/*<animate*/}
        {/*xlink:href="#flashing"*/}
        {/*attributeName="fill"*/}
        {/*from="1"*/}
        {/*to=".5"*/}
        {/*dur="1s"*/}
        {/*/>*/}
    </svg>
);
