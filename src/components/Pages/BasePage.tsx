import * as React from "react";
import {LayoutContext, LayoutContextTypes} from "../Layout";

export class BasePage<P = {}, S = undefined> extends React.Component<P, S> {
    public static readonly contextTypes = LayoutContextTypes;
    public context: LayoutContext;

    public shouldComponentUpdate(nextProps: P, nextState: S, nextContext: any): boolean {
        return this.context.language !== nextContext.language;
    }
}
