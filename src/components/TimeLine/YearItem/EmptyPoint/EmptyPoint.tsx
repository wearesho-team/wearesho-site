import * as React from "react";

import {SideTypes} from "../SideTypes";

import {concat} from "../../../../helpers/concat";

export const EmptyPoint: React.SFC<any> = (props): JSX.Element => {
    const sideClassName = `${props.position < 3 ? SideTypes.left : SideTypes.right}-indent`
    const defaultClassName = "prj-chronology__div";

    const className = concat(
        defaultClassName,
        `${defaultClassName}_${sideClassName}`
    );

    return <span className={className}/>
};
