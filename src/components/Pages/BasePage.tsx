import * as React from "react";
import {LayoutContext, LayoutContextType} from "../Layout";

export class BasePage<P = {}, S = undefined> extends React.Component<P, S> {
    public static readonly contextType = LayoutContext;
    public context: LayoutContextType;
}
