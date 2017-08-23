import * as React from "react";

export class CloseButton extends React.Component<React.HTMLProps<HTMLButtonElement>, undefined> {

    public render(): JSX.Element {
        return (
            <button {...this.props} type="button">
                <span/>
            </button>
        );
    }
}
