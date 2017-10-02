import * as React from "react";
import {routeProps} from "../data/routeProps";
import {Route} from "react-router-dom";

export const getRoutesWithProps = (): JSX.Element [] => {
    return routeProps.map((props) => <Route {...props} key={props.path}/>)
};
