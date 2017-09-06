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

    protected childrenDOM: HTMLCollection;
    protected clearTimeout = smartClearTimeout.bind(this);
    protected unlisten: () => void;

    public componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.unlisten = this.context.router.history.listen(this.changePathListener);
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

    protected setChildren = (element: HTMLElement) => this.childrenDOM = element && element.children;

    protected changePath = () => {
        if (!this.childrenDOM) {
            return;
        }

        const activeZone = window.screen.height * this.viewZoneRange + window.pageYOffset;
        const {location: {pathname}} = this.context.router.history;

        routeProps.forEach(({path}, i) => {
            if (path === pathname) {
                return;
            }

            const elementHTML = this.childrenDOM.item(i) as HTMLElement;
            const fullOffset = elementHTML.offsetTop + elementHTML.offsetHeight;
            const topOffset = elementHTML.offsetTop;

            // View must be between top(topOffset) and bottom(fullOffset) offsets
            // with considering to view coefficient(viewZoneRange)
            if (activeZone > topOffset && activeZone < fullOffset) {
                this.context.router.history.push(path, {scroll: true});
            }
        });
    };

    protected handleScroll = () => {
        this.clearTimeout(this.timer);
        this.timer = setTimeout(this.changePath, this.scrollListenDelay);
    };

    protected changePathListener = (location: Location) => {
        if (location.state && location.state.scroll) {
            return;
        }

        const currentPathIndex = routeProps.findIndex(({path}) => location.pathname === path);

        animateScroll.scrollTo((this.childrenDOM.item(currentPathIndex) as HTMLElement).offsetTop, {
            duration: ScrollControl.scrollAnimationDelay,
            delay: 0,
            smooth: true
        });
    }
}
