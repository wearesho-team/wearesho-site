import * as React from "react";
import {Route} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";

import {concat} from "../../helpers/concat";

import {TransitionSwitchProps, TransitionSwitchPropTypes, TransitionSwitchDefaultProps} from "./TransitionSwitchProps";
import {TransitionSwitchState} from "./TransitionSwitchState";
import {RouterContext, RouterContextTypes} from "../../data/RouterContext";
import {RouteProps} from "react-router";

import {SwitchControlContext, SwitchControlContextTypes} from "../SwitchControl/SwitchControlContext";

export class TransitionSwitch extends React.Component<TransitionSwitchProps, TransitionSwitchState> {

    public static propTypes = TransitionSwitchPropTypes;
    public static defaultProps = TransitionSwitchDefaultProps;
    public static contextTypes = {
        ...RouterContextTypes,
        ...SwitchControlContextTypes
    };

    public static readonly upDirectionClassName = "up";
    public static readonly downDirectionClassName = "down";
    public static readonly standByClassName = "";

    public context: RouterContext & SwitchControlContext;

    public state: TransitionSwitchState = {
        directionClassName: TransitionSwitch.standByClassName,
    };

    protected previousRouteKey: number = this.routeProps.key;

    public componentWillReceiveProps() {
        this.setDirection(this.routeProps.key);

        this.context.setScrollDisabled(true);

        setTimeout(() => {
            this.context.setScrollDisabled(false);
            this.setState({directionClassName: TransitionSwitch.standByClassName});
        }, this.props.timeout);
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
