import * as React from "react";
import {Location} from "history";
import {animateScroll} from "react-scroll";

import {compareArrays} from "../../helpers/compareArrays";
import {smartClearTimeout, ElementWithTimer} from "../../helpers/smartClearTimeout";

import {routeProps} from "../../data/routeProps";
import {RouterContext, RouterContextTypes} from "../../data/RouterContext";

export class ScrollControl extends React.Component<undefined, undefined> implements ElementWithTimer {
    public static contextTypes = RouterContextTypes;
    public static readonly scrollAnimationDelay = 500;

    public readonly scrollListenDelay = 50;

    // 0 - exactly
    public readonly viewZoneRange = 0.15;

    public context: RouterContext;
    public timer: any;

    protected childrenDom: HTMLCollection;
    protected clearTimeout = smartClearTimeout.bind(this);
    protected unlisten: () => void;

    public componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.unlisten = this.context.router.history.listen(this.listenPathChange);
    }

    public componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        this.unlisten();
    }

    public shouldComponentUpdate(nextProps: any): boolean {
        return compareArrays(
            React.Children.toArray(nextProps.children),
            React.Children.toArray(this.props.children)
        )
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

        currentPathIndex + 1 && this.context.router.history.push(routeProps[currentPathIndex].path, {scroll: true});
    };

    protected handleScroll = () => {
        this.clearTimeout(this.timer);
        this.timer = setTimeout(this.updateLocation, this.scrollListenDelay);
    };

    protected listenPathChange = (location: Location) => {
        if (location.state && location.state.scroll) {
            return;
        }

        const currentPathIndex = routeProps.findIndex(({path}) => location.pathname === path);

        currentPathIndex + 1 && animateScroll
            .scrollTo((this.childrenDom.item(currentPathIndex) as HTMLElement).offsetTop, {
                duration: ScrollControl.scrollAnimationDelay,
                delay: 0,
                smooth: true
            });
    }
}
