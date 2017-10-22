import * as React from "react"

import {routeProps} from "../../data/routeProps";

import {RouterContext, RouterContextTypes} from "../../data/RouterContext";
import {SwitchControlContext, SwitchControlContextTypes} from "./SwitchControlContext";
import {LayoutContext, LayoutContextTypes} from "../Layout/LayoutContext";

export enum RouteIndexType {
    up = 1,
    down = -1,
}

export class SwitchControl extends React.Component<any, undefined> {
    public static readonly childContextTypes = SwitchControlContextTypes;
    public static readonly contextTypes = {
        ...RouterContextTypes,
        ...LayoutContextTypes
    };

    public context: RouterContext & LayoutContext;

    protected isScrollDisabled: boolean = this.context.isScrollDisabled;

    public getChildContext(): SwitchControlContext {
        return {
            setScrollDisabled: this.handleScrollDisabledChange
        }
    }

    public componentDidMount() {
        window.addEventListener("wheel", this.handleWheel);
        window.addEventListener("keydown", this.handleKeyPress);
    }

    public componentWillUnmount() {
        window.removeEventListener("wheel", this.handleWheel);
        window.removeEventListener("keydown", this.handleKeyPress);
    }

    public render(): JSX.Element {
        return this.props.children;
    }

    protected handleScrollDisabledChange = (state: boolean) => this.isScrollDisabled = state;

    protected changeRoute(routeIndexDelta: RouteIndexType) {
        if (this.isScrollDisabled) {
            return;
        }

        const {location: {pathname}} = this.context.router.history;

        const nextRouteIndex = routeProps.findIndex(({path}) => path === pathname) + routeIndexDelta;

        if (routeProps[nextRouteIndex]) {
            this.context.router.history.push(routeProps[nextRouteIndex].path);
            this.forceUpdate();
        }
    }

    protected handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === "ArrowDown") {
            this.changeRoute(1);
        } else if (event.key === "ArrowUp") {
            this.changeRoute(-1);
        }
    };

    protected handleWheel = (event: MouseWheelEvent) => {
        this.changeRoute(event.deltaY > 0 ? RouteIndexType.up : RouteIndexType.down);
    };
}
