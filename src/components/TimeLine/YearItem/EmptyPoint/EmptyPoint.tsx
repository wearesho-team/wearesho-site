import * as React from "react";

import {concat} from "../../../../helpers/concat";
import {EmptyPointProps, EmptyPointPropTypes} from "./EmptyPointProps";

export class EmptyPoint extends React.Component<EmptyPointProps, undefined> {
    public static propTypes = EmptyPointPropTypes;
    public readonly defaultClassName = "prj-chronology__div";

    public shouldComponentUpdate(nextProps: EmptyPointProps): boolean {
        return nextProps.sideClassName !== this.props.sideClassName;
    }

    public render() {
        const className = concat(
            this.defaultClassName,
            `${this.defaultClassName}_${this.props.sideClassName}`
        );

        return <span className={className}/>
    }
}
