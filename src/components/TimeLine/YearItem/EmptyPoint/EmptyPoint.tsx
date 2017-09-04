import * as React from "react";

import {concat} from "../../../../helpers/concat";
import {EmptyPointProps, EmptyPointPropTypes} from "./EmptyPointProps";

export const EmptyPoint: React.SFC<EmptyPointProps> = ({sideClassName}): JSX.Element => {
    const defaultClassName = "prj-chronology__div";

    const className = concat(
        defaultClassName,
        `${defaultClassName}_${sideClassName}`
    );

    return <span className={className}/>
};

EmptyPoint.propTypes = EmptyPointPropTypes;
