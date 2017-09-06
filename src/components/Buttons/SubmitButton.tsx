import * as React from "react";
import {SlowSubmitButton, SlowSubmitButtonProps} from "react-context-form";

function getCorners(): JSX.Element[] {
    return [
        <span className="btn-corners btn-corners_top" key="top"/>,
        <span className="btn-corners btn-corners_bottom" key="bottom"/>
    ];
}

function loadingComponent() {
    return (
        <span>
            Отправка
            {getCorners()}
        </span>
    )
}

export const SubmitButton: React.SFC<any> = (props): JSX.Element => {
    const childProps: SlowSubmitButtonProps = {
        ...props,
        className: "btn btn_primary",
        loadingComponent: loadingComponent(),
    };
    return (
        <SlowSubmitButton {...childProps as any}>
            Отправить
            {getCorners()}
        </SlowSubmitButton>
    );
};
