import * as React from "react";
import { Route } from "react-router-dom";
import { RouteProps } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { RouterContext, RouterContextTypes } from "data/RouterContext";

import { smartClearTimeout, ElementWithTimer } from "helpers/smartClearTimeout";
import { concat } from "helpers/concat";

import { TransitionSwitchProps, TransitionSwitchPropTypes } from "./TransitionSwitchProps";
import { TransitionSwitchState } from "./TransitionSwitchState";

export class TransitionSwitch extends React.Component<TransitionSwitchProps, TransitionSwitchState>
    implements ElementWithTimer {

    public static readonly propTypes = TransitionSwitchPropTypes;
    public static readonly contextTypes = RouterContextTypes;
    public static readonly downDirectionClassName = "down";
    public static readonly upDirectionClassName = "up";
    public static readonly animationDuration = 501;
    public static readonly standByClassName = "";

    public timer: any;
    public context: RouterContext;
    public state: TransitionSwitchState = {
        directionClassName: TransitionSwitch.standByClassName,
    };

    protected readonly additionalTimeout = 100;

    protected previousRouteKey: number = this.routeProps ? this.routeProps.key : 0;
    protected clearTimeout = smartClearTimeout.bind(this);

    public componentWillUnmount() {
        this.clearTimeout();
    }

    public componentWillReceiveProps() {
        this.clearTimeout();
        if (!this.routeProps) {
            return;
        }

        this.setDirection(this.routeProps.key);

        this.timer = setTimeout(
            () => {
                this.setState({ directionClassName: TransitionSwitch.standByClassName });
            },
            TransitionSwitch.animationDuration + this.additionalTimeout
        );
    }

    protected get routeProps(): any | undefined {
        return Object.keys(this.props.children)
            .map((field, key) => {
                return {
                    ...{ key },
                    ...this.props.children[field].props
                }
            })
            .find(({ path }) => path === this.context.router.history.location.pathname);
    }

    public render(): JSX.Element {
        const transitionProps: any = {
            ...this.props,
            ...{
                key: this.routeProps ? this.routeProps.key : this.previousRouteKey,
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
                    <Route {...currentRouteProps} />
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
