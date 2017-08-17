import * as React from "react";
import {Route} from "react-router-dom";

import * as TransitionGroup from "react-transition-group/TransitionGroup";
import * as CSSTransition from "react-transition-group/CSSTransition";

import {TransitionSwitchProps, TransitionSwitchPropTypes, TransitionSwitchDefaultProps} from "./TransitionSwitchProps";

export class TransitionSwitch extends React.Component<TransitionSwitchProps, undefined> {

    public static propTypes = TransitionSwitchPropTypes;
    public static defaultProps = TransitionSwitchDefaultProps;

    protected get routeProps(): object {
        return Object.keys(this.props.children)
            .map((field) => this.props.children[field].props)
            .find(({path}) => path === this.props.history.location.pathname);
    }

    public render(): JSX.Element {
        const {history: {location}, ...props} = this.props;

        const transitionProps: CSSTransition.CSSTransitionProps = {
            ...props,
            ...{
                key: location.pathname.split("/")[1],
            }
        } as any;

        const currentRouteProps = {
            ...this.routeProps,
            ...{
                location,
            }
        };

        return (
            <TransitionGroup className={this.props.className}>
                <CSSTransition {...transitionProps}>
                    <Route {...currentRouteProps}/>
                </CSSTransition>
            </TransitionGroup>
        );
    }
}
