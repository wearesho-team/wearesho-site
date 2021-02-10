import * as React from "react";
import {RouteComponentProps, withRouter} from "react-router";

import {routeProps} from "../../data/routeProps";

import {ErrorPage} from "../Pages/ErrorPage";

class ErrorBounderComponent extends React.Component<RouteComponentProps, undefined> {
    public render(): any {
        if (
            !routeProps
                .map(({path}) => path)
                .includes(this.props.history.location.pathname)
        ) {
            return <ErrorPage/>;
        }
        
        return this.props.children;
    }
}

export const ErrorBounder = withRouter(ErrorBounderComponent);
