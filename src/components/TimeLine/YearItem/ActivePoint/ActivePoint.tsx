import * as React from "react";

import {concat} from "../../../../helpers/concat";

import {SideTypes} from "../SideTypes";
import {ActivePointProps, ActivePointPropTypes} from "./ActivePointProps";

export class ActivePoint extends React.Component<ActivePointProps, undefined> {
    public static propTypes = ActivePointPropTypes;

    public readonly sideClassName = `${this.props.index < 3 ? SideTypes.left : SideTypes.right}-indent`;
    public readonly defaultClassName = "prj-chronology__div";
    public readonly filledClassName = "is-filled";
    public readonly activeClassName = "is-active";

    protected element: HTMLElement;

    public componentDidMount() {
        if (!this.props.isActive) {
            return;
        }

        this.props.setProject(this.element, this.props.index);
    }

    public render() {
        const className = concat(
            this.defaultClassName,
            `${this.defaultClassName}_${this.sideClassName}`,
            this.props.isActive ? this.activeClassName : this.filledClassName
        );

        return <span className={className} onClick={!this.props.isActive && this.handleClick} ref={this.setElement}/>
    }

    protected handleClick = ({currentTarget}) => this.props.setProject(currentTarget, this.props.index);

    protected setElement = (element: HTMLElement) => this.element = element;
}
