import * as React from "react";

import { routeProps } from "../../data/routeProps";
import { RouterContext, RouterContextTypes } from "../../data/RouterContext";

import { ErrorPage } from "../Pages/ErrorPage";

export class ErrorBounder extends React.Component<{}, undefined> {
    public static readonly contextTypes = RouterContextTypes;

    public context: RouterContext;

    public render(): any {
        if (
            !routeProps
                .map(({ path }) => path)
                .includes(this.context.router.history.location.pathname)
        ) {
            return <ErrorPage/>
        }

        return this.props.children;
    }
}
