import * as React from "react";

import {concat} from "../../../../helpers/concat";

import {ActivePointProps, ActivePointPropTypes} from "./ActivePointProps";

export class ActivePoint extends React.Component<ActivePointProps, undefined> {
    public static propTypes = ActivePointPropTypes;

    public static readonly defaultClassName = "prj-chronology__div";
    public static readonly filledClassName = "is-filled";
    public static readonly activeClassName = "is-active";

    protected element: HTMLElement;

    public componentDidMount() {
        if (!this.props.isActive) {
            return;
        }

        this.props.onProjectChange(this.element, this.props.index);
    }

    public shouldComponentUpdate(nextProps: ActivePointProps): boolean {
        return nextProps.isActive !== this.props.isActive;
    }

    public render(): JSX.Element {
        const className = concat(
            ActivePoint.defaultClassName,
            `${ActivePoint.defaultClassName}_${this.props.sideClassName}`,
            ActivePoint.filledClassName,
            this.props.isActive ? ActivePoint.activeClassName : ""
        );

        return <span className={className} onClick={this.handleClick} ref={this.setElement}/>
    }

    protected handleClick = ({currentTarget}) => {
        !this.props.isActive
        && this.props.onProjectChange(currentTarget, this.props.index);
    };

    protected setElement = (element: HTMLElement) => this.element = element;
}
