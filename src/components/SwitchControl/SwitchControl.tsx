import * as React from "react"
import {routeProps} from "../../data/routeProps";
import {RouterContext, RouterContextTypes} from "../../data/RouterContext";

// tslint:disable
export class SwitchControl extends React.Component<any, any> {
    public static readonly wheelEvent = "wheel";
    public static readonly keyEvent = "keypress";

    public static contextTypes = RouterContextTypes;
    public context: RouterContext;

    protected currentPath: string;

    protected handleRouteChange = (event) => {
        event.preventDefault();

        if (event.type === SwitchControl.wheelEvent) {
            let routeIndex = routeProps.findIndex(({path}) => path === this.currentPath);

            event.deltaY > 0
                ? routeIndex++
                : routeIndex--;

            routeProps[routeIndex] && this.context.router.history.push(routeProps[routeIndex].path);
        }

    };

    public componentDidMount() {
        this.currentPath = this.context.router.history.path;

        window.addEventListener(SwitchControl.wheelEvent, this.handleRouteChange);
        window.addEventListener(SwitchControl.keyEvent, this.handleRouteChange);
    }

    public componentWillUnmount() {
        window.removeEventListener(SwitchControl.wheelEvent, this.handleRouteChange);
        window.removeEventListener(SwitchControl.keyEvent, this.handleRouteChange);
    }

    public render() {
        return this.props.children;
    }
}