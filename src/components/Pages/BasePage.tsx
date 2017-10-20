import * as React from "react";

export class BasePage<P = undefined, S = undefined> extends React.Component<P, S> {
    public shouldComponentUpdate(nextProps: P, nextState: S, nextContext: any): boolean {
        return false;
    }
}
