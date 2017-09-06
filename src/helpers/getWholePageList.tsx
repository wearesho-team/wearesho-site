import * as React from "react";
import {routeProps} from "../data/routeProps";

export const getWholePageList = (): JSX.Element [] => {
    return routeProps.map((prop) => <prop.component key={prop.path}/>)
};
