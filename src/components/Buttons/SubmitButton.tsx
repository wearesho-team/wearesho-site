import * as React from "react";

export class SubmitButton extends React.Component<React.HTMLProps<HTMLButtonElement>, undefined> {

    public render(): JSX.Element {
        return (
            <button {...this.props} type="submit">
                Отправить
                <span className="btn-corners btn-corners_top"/>
                <span className="btn-corners btn-corners_bottom"/>
            </button>
        );
    }
}
