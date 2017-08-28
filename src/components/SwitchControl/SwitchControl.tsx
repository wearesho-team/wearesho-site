import * as React from "react"
import {routeProps} from "../../data/routeProps";
import {RouterContext, RouterContextTypes} from "../../data/RouterContext";
import {SwitchControlContext, SwitchControlContextTypes} from "./SwitchControlContext";

const wheelEvent = "wheel";
const keyEvent = "keydown";

// tslint:disable

export class SwitchControl extends React.Component<any, any> {
    public static contextTypes = RouterContextTypes;
    public context: RouterContext;

    public static childContextTypes = SwitchControlContextTypes;

    protected isScrollDisabled: boolean = false;

    public getChildContext(): SwitchControlContext {
        return {
            setScrollDisabled: this.handleScrollDisabledChange
        }
    }

    protected handleScrollDisabledChange = (state: boolean) => this.isScrollDisabled = state;

    protected changeRoute(routeIndexDelta) {
        if(this.isScrollDisabled) {
            return;
        }

        const currentRouteIndex = routeProps.findIndex(({path}) => path === this.context.router.history.location.pathname);

        const nextRouteIndex = currentRouteIndex + routeIndexDelta;

        routeProps[nextRouteIndex] && this.context.router.history.push(routeProps[nextRouteIndex].path);
    }

    protected handleKeyPress = (event: KeyboardEvent) => {

        if (event.key === "ArrowDown") {
            this.changeRoute(1);
        } else if (event.key === "ArrowUp") {
            this.changeRoute(-1);
        }

    };

    protected handleWheel = (event: MouseWheelEvent) => {
         this.changeRoute(event.deltaY > 0 ? 1 : -1);
    };

    public componentDidMount() {
        window.addEventListener("wheel", this.handleWheel);
        window.addEventListener("keydown", this.handleKeyPress);
    }

    public componentWillUnmount() {
        window.removeEventListener("wheel", this.handleWheel);
        window.removeEventListener("keydown", this.handleKeyPress);
    }

    public render() {
        return this.props.children;
    }
}
