import * as React from "react";
import {Location} from "history";
import {animateScroll} from "react-scroll";

import {compareArrays} from "../../helpers/compareArrays";
import {smartClearTimeout, ElementWithTimer} from "../../helpers/smartClearTimeout";

import {routeProps} from "../../data/routeProps";
import {RouterContext, RouterContextTypes} from "../../data/RouterContext";
import {LayoutContext, LayoutContextTypes} from "../Layout/LayoutContext";

export class ScrollControl extends React.Component<undefined, undefined> implements ElementWithTimer {
    public static readonly contextTypes = {
        ...RouterContextTypes,
        ...LayoutContextTypes
    };
    public static readonly scrollAnimationDelay = 500;
    public static readonly scrollListenDelay = 50;

    // 0 - exactly
    public readonly viewZoneRange = 0.4;

    public context: RouterContext & LayoutContext;
    public timer: any;

    protected childrenDom: HTMLCollection;
    protected clearTimeout = smartClearTimeout.bind(this);
    protected unlisten: () => void;

    // set scroll position according to location on body loaded
    protected observer = new MutationObserver((mutations) => {
        const {target} = mutations[0];

        if (target !== document.body || target.attributes.getNamedItem("class").value !== "loaded") {
            return;
        }

        this.context.router.history.location.state = undefined;
        this.listenPathChange(this.context.router.history.location);
    });

    public componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.unlisten = this.context.router.history.listen(this.listenPathChange);
        this.observer.observe(document.body, {attributeFilter: ["class"], attributes: true});
    }

    public componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        this.observer.disconnect();
        this.unlisten();
    }

    public shouldComponentUpdate(nextProps: any, nextState: any, nextContext: RouterContext & LayoutContext): boolean {
        return compareArrays(
            React.Children.toArray(nextProps.children),
            React.Children.toArray(this.props.children)
        ) || this.context.language !== nextContext.language
    }

    public render(): JSX.Element {
        return (
            <div className="scroll-container" ref={this.setChildren}>
                {this.props.children}
            </div>
        );
    }

    protected setChildren = (element: HTMLElement) => this.childrenDom = element && element.children;

    protected updateLocation = () => {
        if (!this.childrenDom) {
            return;
        }

        const activeZone = window.screen.height * this.viewZoneRange + window.pageYOffset;

        const currentPathIndex = routeProps
            .map((x, i): HTMLElement => this.childrenDom.item(i) as HTMLElement)
            .findIndex((element) => {
                const fullOffset = element.offsetTop + element.offsetHeight;
                const topOffset = element.offsetTop;

                // View must be between top(topOffset) and bottom(fullOffset) offsets
                // with considering to view coefficient(viewZoneRange)
                return activeZone > topOffset && activeZone < fullOffset;
            });

        routeProps[currentPathIndex]
        && this.context.router.history.push(routeProps[currentPathIndex].path, {scroll: true});
    };

    protected handleScroll = () => {
        this.clearTimeout(this.timer);

        this.timer = setTimeout(this.updateLocation, ScrollControl.scrollListenDelay);
    };

    protected listenPathChange = (location: Location) => {
        if (location.state && location.state.scroll) {
            return;
        }

        const currentPathIndex = routeProps.findIndex(({path}) => location.pathname === path);

        this.childrenDom.item(currentPathIndex) && animateScroll
            .scrollTo((this.childrenDom.item(currentPathIndex) as HTMLElement).offsetTop, {
                duration: ScrollControl.scrollAnimationDelay,
                delay: 0,
                smooth: "easeInOutCubic",
            });
    };
}
