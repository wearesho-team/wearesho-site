import * as React from "react"

import {RouterContext, RouterContextTypes} from "../../data/RouterContext";
import {routeProps} from "../../data/routeProps";

import {ElementWithTimer, smartClearTimeout} from "../../helpers/smartClearTimeout";

export enum RouteIndexType {
    up = 1,
    down = -1,
}

export class SwitchControl extends React.Component<undefined, undefined> implements ElementWithTimer {
    public static readonly contextTypes = RouterContextTypes;
    public static readonly scrollTimeout = 1500;

    public clearTimeout = smartClearTimeout.bind(this);
    public context: RouterContext;
    public timer: any;

    protected isScrollDisabled: boolean = false;

    public componentDidMount() {
        window.addEventListener("wheel", this.handleWheel);
        window.addEventListener("keydown", this.handleKeyPress);
    }

    public componentWillUnmount() {
        this.clearTimeout();
        window.removeEventListener("wheel", this.handleWheel);
        window.removeEventListener("keydown", this.handleKeyPress);
    }

    public render(): JSX.Element {
        return this.props.children as JSX.Element;
    }

    protected changeRoute(routeIndexDelta: RouteIndexType) {
        if (this.isScrollDisabled) {
            return;
        }

        const {location: {pathname}} = this.context.router.history;

        const nextRouteIndex = routeProps.findIndex(({path}) => path === pathname) + routeIndexDelta;

        if (routeProps[nextRouteIndex]) {
            this.context.router.history.push(routeProps[nextRouteIndex].path);
            this.forceUpdate();
            this.isScrollDisabled = true;

            this.clearTimeout();
            this.timer = setTimeout(
                () => this.isScrollDisabled = false,
                SwitchControl.scrollTimeout
            );
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
