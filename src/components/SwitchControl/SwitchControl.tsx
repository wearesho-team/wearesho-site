import * as React from "react"
import * as PropTypes from "prop-types";

import { RouterContext, RouterContextTypes } from "data/RouterContext";

import { ElementWithTimer, smartClearTimeout } from "helpers/smartClearTimeout";

export enum RouteIndexType {
    up = 1,
    down = -1,
}

export interface SwitchControlProps {
    routeProps: Array<{
        path: string;
    }>;
}

export const SwitchControlPropTypes: {[P in keyof SwitchControlProps]: PropTypes.Validator<any>} = {
    routeProps: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired
    }).isRequired).isRequired
};

export class SwitchControl extends React.Component<SwitchControlProps> implements ElementWithTimer {
    public static readonly propTypes = SwitchControlPropTypes;
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

        const { location: { pathname } } = this.context.router.history;

        const nextRouteIndex = this.props.routeProps.findIndex(({ path }) => path === pathname) + routeIndexDelta;

        if (this.props.routeProps[nextRouteIndex]) {
            this.context.router.history.push(this.props.routeProps[nextRouteIndex].path);
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
