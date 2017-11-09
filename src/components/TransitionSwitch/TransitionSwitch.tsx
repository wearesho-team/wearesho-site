import * as React from "react";
import {Route} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";

import {concat} from "../../helpers/concat";
import {smartClearTimeout, ElementWithTimer} from "../../helpers/smartClearTimeout";

import {TransitionSwitchProps, TransitionSwitchPropTypes} from "./TransitionSwitchProps";
import {TransitionSwitchState} from "./TransitionSwitchState";
import {RouterContext, RouterContextTypes} from "../../data/RouterContext";
import {RouteProps} from "react-router";

import {SwitchControlContext, SwitchControlContextTypes} from "../SwitchControl/SwitchControlContext";

export class TransitionSwitch extends React.Component<TransitionSwitchProps, TransitionSwitchState>
    implements ElementWithTimer {

    public static propTypes = TransitionSwitchPropTypes;
    public static contextTypes = {
        ...RouterContextTypes,
        ...SwitchControlContextTypes
    };

    public static readonly upDirectionClassName = "up";
    public static readonly downDirectionClassName = "down";
    public static readonly standByClassName = "";
    public static readonly animationDuration = 501;

    public context: RouterContext & SwitchControlContext;
    public timer: any;
    public state: TransitionSwitchState = {
        directionClassName: TransitionSwitch.standByClassName,
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

        this.context.setScrollDisabled(true);

        this.timer = setTimeout(
            () => {
                this.context.setScrollDisabled(false);
                this.setState({directionClassName: TransitionSwitch.standByClassName});
            },
            TransitionSwitch.animationDuration + this.additionalTimeout
        );
    }

    protected get routeProps(): any {
        return Object.keys(this.props.children)
            .map((field, key) => {
                return {
                    ...{key},
                    ...this.props.children[field].props
                }
            })
            .find(({path}) => path === this.context.router.history.location.pathname);
    }

    public render(): JSX.Element {
        const transitionProps: any = {
            ...this.props,
            ...{
                key: this.routeProps.key,
                timeout: TransitionSwitch.animationDuration,
            }
        };

        const currentRouteProps: RouteProps = {
            ...this.routeProps,
            ...{
                location: this.context.router.history.location,
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
            ? TransitionSwitch.downDirectionClassName
            : TransitionSwitch.upDirectionClassName;

        this.previousRouteKey = key;
    }
}
