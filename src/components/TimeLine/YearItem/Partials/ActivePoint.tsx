import * as React from "react";

import {concat} from "../../../../helpers/concat";

import {SideTypes} from "./SideTypes";

export class ActivePoint extends React.Component<any, any> {
    public readonly sideClassName = `${this.props.position < 3 ? SideTypes.left : SideTypes.right}-indent`;
    public readonly defaultClassName = "prj-chronology__div";
    public readonly filledClassName = "is-filled";
    public readonly activeClassName = "is-active";

    public render() {
        const className = concat(
            this.defaultClassName,
            `${this.defaultClassName}_${this.sideClassName}`,
            this.props.isActive ? this.activeClassName : this.filledClassName
        );

        return <span className={className} onClick={this.handleClick}/>
    }

    protected handleClick = ({currentTarget}) => {
        this.props.setNextProject(currentTarget, this.props.position);
    };
}
