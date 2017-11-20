import * as React from "react";
import {SlowSubmitButton, SlowSubmitButtonProps} from "react-context-form";

import {translate} from "../../helpers/translate";
import {TouchHover} from "../../helpers/TouchHover";

export function getCorners(): JSX.Element[] {
    return [
        <span className="btn-corners btn-corners_top" key="top"/>,
        <span className="btn-corners btn-corners_bottom" key="bottom"/>
    ];
}

export function loadingComponent() {
    return (
        <span>
            {translate("buttons.sending")}
            {getCorners()}
        </span>
    )
}

export function getLabel() {
    return (
        <span className="cooperate-text">
            {translate("buttons.cooperate")}
        </span>
    )
}

export const SubmitButton: React.SFC<any> = (props): JSX.Element => {
    const childProps: SlowSubmitButtonProps = {
        ...props,
        className: "btn btn_primary",
        loadingComponent: loadingComponent(),
        ...TouchHover
    };
    return (
        <SlowSubmitButton {...childProps as any}>
            {props.label}
            {getCorners()}
        </SlowSubmitButton>
    );
};
