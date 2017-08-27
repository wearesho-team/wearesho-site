import * as React from "react";

export const CooperateButton: React.SFC<React.HTMLProps<HTMLButtonElement>> = (props): JSX.Element => {
    return (
        <button {...props} type="button">
            Сотрудничать
            <span className="btn-corners btn-corners_top"/>
            <span className="btn-corners btn-corners_bottom"/>
        </button>
    );
};
