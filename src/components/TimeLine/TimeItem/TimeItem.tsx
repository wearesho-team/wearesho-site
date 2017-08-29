import * as React from "react";
import {TimeItemProps, TimeItemPropTypes} from "./TimeItemProps";
import {concat} from "../../../helpers/concat";

export enum IndentSideType {
    left = "left",
    right = "right"
}

export class TimeItem extends React.Component<TimeItemProps, any> {
    public static propTypes = TimeItemPropTypes;

    public readonly itemClassName = "prj-chronology__div prj-chronology__div_wide";
    public readonly itemMutedClassName = "color-muted";
    public readonly indentClassName = "prj-chronology__div prj-chronology__div";
    public readonly identActiveClassName = "is-filled";
    public readonly indentCount = 3;

    public render() {
        return (
            <div className="prj-chronology__item">
                {this.renderIndent(IndentSideType.left)}
                {this.renderItem()}
                {this.renderIndent(IndentSideType.right)}
            </div>
        );
    }

    protected renderIndent(side: IndentSideType) {
        return Array.from(Array(this.indentCount))
            .map((x, i) => <span className={`${this.indentClassName}_${side}-indent`} key={i}/>)
    }

    protected renderItem() {
        const className = concat(
            this.itemClassName,
            this.props.children > (new Date()).getFullYear() ? this.itemMutedClassName : ""
        );

        return <span className={className}>{this.props.children}</span>
    }
}
