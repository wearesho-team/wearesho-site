import * as React from "react";
import {Route} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";

import {concat} from "../../helpers/concat";

import {TransitionSwitchProps, TransitionSwitchPropTypes, TransitionSwitchDefaultProps} from "./TransitionSwitchProps";
import {TransitionSwitchState} from "./TransitionSwitchState";

export class TransitionSwitch extends React.Component<TransitionSwitchProps, TransitionSwitchState> {

    public static propTypes = TransitionSwitchPropTypes;
    public static defaultProps = TransitionSwitchDefaultProps;

    public static readonly upDirectionClassName = "up";
    public static readonly downDirectionClassName = "down";
    public static readonly standByClassName = "";

    public state: TransitionSwitchState = {
        directionClassName: TransitionSwitch.standByClassName,
    };

    protected previousRouteKey: number = this.routeProps.key;

    public componentWillReceiveProps() {
        this.setDirection(this.routeProps.key);

        setTimeout(() => {
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
            .find(({path}) => path === this.props.history.location.pathname);
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
