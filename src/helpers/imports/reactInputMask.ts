import * as React from "react";

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
    ref: (element: Mask) => any;
    value: string;
}

interface Mask extends React.Component<any, any> {
    (props: Props): JSX.Element;
    value: string;
    setInputValue: (newValue: string) => void;
    input: HTMLInputElement;
}

// tslint:disable:no-submodule-imports
export const ReactInputMask: Mask = require("react-input-mask/lib");
