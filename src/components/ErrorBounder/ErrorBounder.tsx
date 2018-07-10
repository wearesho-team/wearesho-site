import * as React from "react";

import { RouterContext, RouterContextTypes } from "data/RouterContext";
import { mainRouteProps, processRouteProps } from "data/routeProps";

import { ErrorPage } from "../Pages/ErrorPage/ErrorPage";

export class ErrorBounder extends React.Component {
    public static readonly contextTypes = RouterContextTypes;

    public context: RouterContext;

    public render(): any {
        if (
            ![...mainRouteProps, ...processRouteProps]
                .map(({ path }) => path)
                .includes(this.context.router.history.location.pathname)
        ) {
            return <ErrorPage />
        }

        return this.props.children;
    }
}
