import * as React from "react";
import {RouteComponentProps, RouteProps, withRouter} from "react-router";
import {Route} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {concat} from "../../helpers/concat";

import {ElementWithTimer, smartClearTimeout} from "../../helpers/smartClearTimeout";

import {TransitionSwitchProps, TransitionSwitchPropTypes} from "./TransitionSwitchProps";
import {TransitionSwitchState} from "./TransitionSwitchState";

class TransitionSwitchComponent extends React.Component<TransitionSwitchProps & RouteComponentProps, TransitionSwitchState>
    implements ElementWithTimer {
    
    public static readonly propTypes = TransitionSwitchPropTypes;
    public static readonly downDirectionClassName = "down";
    public static readonly upDirectionClassName = "up";
    public static readonly animationDuration = 501;
    public static readonly standByClassName = "";
    
    public timer: any;
    public state: TransitionSwitchState = {
        directionClassName: TransitionSwitchComponent.standByClassName,
    };
    
    protected readonly additionalTimeout = 100;
    
    protected previousRouteKey: number = this.routeProps.key;
    protected clearTimeout = smartClearTimeout.bind(this);
    
    public componentWillUnmount() {
        this.clearTimeout();
    }
    
    public componentWillReceiveProps() {
        this.clearTimeout();
        this.setDirection(this.routeProps.key);
        
        this.timer = setTimeout(
            () => {
                this.setState({directionClassName: TransitionSwitchComponent.standByClassName});
            },
            TransitionSwitchComponent.animationDuration + this.additionalTimeout
        );
    }
    
    protected get routeProps(): any {
        return Object.keys(this.props.children)
            .map((field, key) => {
                return {
                    ...{key},
                    ...this.props.children[field].props
                };
            })
            .find(({path}) => path === this.props.history.location.pathname);
    }
    
    public render(): JSX.Element {
        const transitionProps: any = {
            ...this.props,
            ...{
                key: this.routeProps.key,
                timeout: TransitionSwitchComponent.animationDuration,
            }
        };
        
        const currentRouteProps: RouteProps = {
            ...this.routeProps,
            ...{
                location: this.props.history.location,
            },
        };
        
        return (
            <TransitionGroup className={concat(this.props.className, this.state.directionClassName)}>
                <CSSTransition {...transitionProps}>
                    <Route {...currentRouteProps}/>
                </CSSTransition>
            </TransitionGroup>
        );
    }
    
    protected setDirection(key: number) {
        if (this.previousRouteKey === key) {
            return;
        }
        
        this.state.directionClassName = this.previousRouteKey > this.routeProps.key
            ? TransitionSwitchComponent.downDirectionClassName
            : TransitionSwitchComponent.upDirectionClassName;
        
        this.previousRouteKey = key;
    }
}

export const TransitionSwitch = withRouter(TransitionSwitchComponent);
