import * as React from "react";

export const SubmitButton: React.SFC<React.HTMLProps<HTMLButtonElement>> = (props): JSX.Element => {
    return (
        <button {...props} type="submit">
            Отправить
            <span className="btn-corners btn-corners_top"/>
            <span className="btn-corners btn-corners_bottom"/>
        </button>
    );
};
