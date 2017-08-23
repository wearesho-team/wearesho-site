import * as React from "react";

export class CooperateButton extends React.Component<React.HTMLProps<HTMLButtonElement>, undefined> {

    public render(): JSX.Element {
        return (
            <button {...this.props} type="button">
                Сотрудничать
                <span className="btn-corners btn-corners_top"/>
                <span className="btn-corners btn-corners_bottom"/>
            </button>
        );
    }
}
