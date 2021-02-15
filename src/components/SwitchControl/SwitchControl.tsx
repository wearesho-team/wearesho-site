import * as React from "react";
import {RouteComponentProps, withRouter} from "react-router";
import {routeProps} from "../../data/routeProps";

import {ElementWithTimer, smartClearTimeout} from "../../helpers/smartClearTimeout";

export enum RouteIndexType {
    up = 1,
    down = -1,
}

class SwitchControlComponent extends React.Component<RouteComponentProps, undefined> implements ElementWithTimer {
    public static readonly scrollTimeout = 1500;
    
    public clearTimeout = smartClearTimeout.bind(this);
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
        
        const {location: {pathname}} = this.props.history;
        
        const nextRouteIndex = routeProps.findIndex(({path}) => path === pathname) + routeIndexDelta;
        
        if (routeProps[nextRouteIndex]) {
            this.props.history.push(routeProps[nextRouteIndex].path);
            this.forceUpdate();
            this.isScrollDisabled = true;
            
            this.clearTimeout();
            this.timer = setTimeout(
                () => this.isScrollDisabled = false,
                SwitchControlComponent.scrollTimeout
            );
        }
    }
    
    protected handleKeyPress = (event: KeyboardEvent) => {
        if (document.activeElement !== document.body) {
            return;
        }
        
        if (event.key === "ArrowDown") {
            this.changeRoute(1);
        } else if (event.key === "ArrowUp") {
            this.changeRoute(-1);
        }
    };
    
    protected handleWheel = (event: MouseWheelEvent) => {
        if (!event.deltaY) {
            return;
        }
        
        this.changeRoute(event.deltaY > 0 ? RouteIndexType.up : RouteIndexType.down);
    };
}

export const SwitchControl = withRouter(SwitchControlComponent);
