import * as React from "react";
import {Location} from "history";

import {compareArrays} from "../../helpers/compareArrays";
import {smartClearTimeout, ElementWithTimer} from "../../helpers/smartClearTimeout";

import {routeProps} from "../../data/routeProps";
import {RouterContext, RouterContextTypes} from "../../data/RouterContext";

export class ScrollControl extends React.Component<any, any> implements ElementWithTimer {
    public static contextTypes = RouterContextTypes;
    public readonly scrollListenDelay = 50;

    // 0 - exactly
    public readonly viewZoneRange = 0.15;

    public context: RouterContext;
    public timer: any;

    protected childrenDOM: HTMLCollection;
    protected clearTimeout = smartClearTimeout.bind(this);

    public componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.context.router.history.listen(this.changePathListener);
    }

    public componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        this.context.router.history.listen(() => undefined);
    }

    public shouldComponentUpdate(nextProps: any) {
        return compareArrays(
            React.Children.toArray(nextProps.children),
            React.Children.toArray(this.props.children)
        )
    }

    public render() {
        return (
            <div className="scroll-container" ref={this.setChildren}>
                {this.props.children}
            </div>
        );
    }

    protected setChildren = (ref: HTMLElement) => this.childrenDOM = ref && ref.children;

    protected changePath = () => {
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

        (this.childrenDOM.item(currentPathIndex) as HTMLElement).scrollIntoView();
    }
}
