import * as React from "react";
import {routeProps} from "../data/routeProps";
import {Link} from "react-router-dom";

export const getLinksWithProps = (): JSX.Element [] => {
    return routeProps.map((props) => <Link className="main-nav__link" to={props.path} key={props.path}>+</Link>)
};
