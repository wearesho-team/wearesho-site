import * as React from "react"
import {routeProps} from "../../data/routeProps";


// tslint:disable
export class SwitchControl extends React.Component<any, any> {


    public static readonly wheelEvent = "wheel";
    public static readonly keyEvent = "keypress";

    protected currentPath: string;

    protected handleRouteChange = (event) => {
        event.preventDefault();

        if (event.type === SwitchControl.wheelEvent) {
            let routeIndex = routeProps.findIndex(({path}) => path === this.currentPath);

            event.deltaY > 0
                ? routeIndex++
                : routeIndex--;

            routeProps[routeIndex] && console.log(routeProps[routeIndex].path);
        }

    };

    public componentDidMount() {
        this.currentPath = "/";

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