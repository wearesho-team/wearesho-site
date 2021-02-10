import {Location} from "history";
import * as React from "react";
import {RouteComponentProps, withRouter} from "react-router";
import {animateScroll} from "react-scroll";

import {routeProps} from "../../data/routeProps";

import {compareArrays} from "../../helpers/compareArrays";
import {ElementWithTimer, smartClearTimeout} from "../../helpers/smartClearTimeout";
import {LanguageProps, withLanguage} from "../../helpers/withLanguage";

type ScrollControlProps = React.PropsWithChildren<RouteComponentProps<any, any, { scroll: boolean }> & LanguageProps>

class ScrollControlComponent extends React.Component<ScrollControlProps> implements ElementWithTimer {
    public static readonly scrollAnimationDelay = 500;
    public static readonly scrollListenDelay = 50;
    
    // 0 - exactly
    public readonly viewZoneRange = 0.4;
    
    public timer: any;
    
    protected childrenDom: HTMLCollection;
    protected clearTimeout = smartClearTimeout.bind(this);
    protected unlisten: () => void;
    protected observer: MutationObserver;
    
    public constructor(props) {
        super(props);
        
        this.observer = new MutationObserver(this.getMutations);
    }
    
    // set scroll position according to location on body loaded
    public getMutations = (mutations) => {
        const {target} = mutations[0];
        
        if (target !== document.body || target.attributes.getNamedItem("class").value !== "loaded") {
            return;
        }
        
        this.props.history.location.state = undefined;
        this.listenPathChange(this.props.history.location);
    };
    
    public componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.unlisten = this.props.history.listen(this.listenPathChange);
        this.observer.observe(document.body, {attributeFilter: ["class"], attributes: true});
    }
    
    public componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        this.observer.disconnect();
        this.unlisten();
    }
    
    public shouldComponentUpdate(nextProps: ScrollControlProps, nextState: any): boolean {
        return compareArrays(
            React.Children.toArray(nextProps.children),
            React.Children.toArray(this.props.children)
        ) || this.props.language !== nextProps.language;
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
        
        routeProps[currentPathIndex] && this.props.history.push(routeProps[currentPathIndex].path, {scroll: true});
    };
    
    protected handleScroll = () => {
        this.clearTimeout();
        
        this.timer = setTimeout(this.updateLocation, ScrollControlComponent.scrollListenDelay);
    };
    
    protected listenPathChange = (location: Location<{ scroll: boolean }>) => {
        if (location.state && location.state.scroll) {
            return;
        }
        
        const currentPathIndex = routeProps.findIndex(({path}) => location.pathname === path);
        
        this.childrenDom.item(currentPathIndex) && animateScroll
            .scrollTo((this.childrenDom.item(currentPathIndex) as HTMLElement).offsetTop, {
                duration: ScrollControlComponent.scrollAnimationDelay,
                delay: 0,
                smooth: "easeInOutCubic",
            });
    };
}

export const ScrollControl = withLanguage(withRouter(ScrollControlComponent));
