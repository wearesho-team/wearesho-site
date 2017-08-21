import * as React from "react";
import {Route} from "react-router-dom";

import {TransitionGroup, CSSTransition} from "react-transition-group";

import {TransitionSwitchProps, TransitionSwitchPropTypes, TransitionSwitchDefaultProps} from "./TransitionSwitchProps";

export class TransitionSwitch extends React.Component<TransitionSwitchProps, undefined> {

    public static propTypes = TransitionSwitchPropTypes;
    public static defaultProps = TransitionSwitchDefaultProps;

    protected direction: string = "";
    protected previousKey: number = 0;

    public componentWillReceiveProps() {
        this.direction = this.previousKey > this.routeProps.key
            ? " down"
            : " up";

        setTimeout(() => {
            this.direction = "";
            this.forceUpdate();
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
            .find(({path, key}) => path === this.props.history.location.pathname);
    }

    public render(): JSX.Element {
        const {history: {location}, ...props} = this.props;

        const transitionProps: any = {
            ...props,
            ...{
                key: this.routeProps.key,
            }
        } as any;

        const currentRouteProps = {
            ...this.routeProps,
            ...{location},
        };

        this.previousKey = currentRouteProps.key;

        return (
            <TransitionGroup className={`${this.props.className}${this.direction}`}>
                <CSSTransition {...transitionProps}>
                    <Route {...currentRouteProps}/>
                </CSSTransition>
            </TransitionGroup>
        );
    }
}
