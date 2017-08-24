import * as React from "react";

export const CloseButton: React.SFC<React.HTMLProps<HTMLButtonElement>> = (props): JSX.Element => {
    return (
        <button {...props} type="button">
            <span/>
        </button>
    );
};
