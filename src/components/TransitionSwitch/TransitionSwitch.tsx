import * as React from "react";
import {Route} from "react-router-dom";
import {concat} from "../../helpers/concat";

import {TransitionGroup, CSSTransition} from "react-transition-group";

import {TransitionSwitchProps, TransitionSwitchPropTypes, TransitionSwitchDefaultProps} from "./TransitionSwitchProps";
import {TransitionSwitchState} from "./TransitionSwitchState";

const upDirectionClassName = "up";
const downDirectionClassName = "down";
const waitDirectionClassName = "";

export class TransitionSwitch extends React.Component<TransitionSwitchProps, TransitionSwitchState> {

    public static propTypes = TransitionSwitchPropTypes;
    public static defaultProps = TransitionSwitchDefaultProps;

    public state = {
        directionClassName: waitDirectionClassName,
    };

    protected previousRouteKey: number = 0;

    public componentWillReceiveProps() {
        setTimeout(() => {
            this.setState({directionClassName: waitDirectionClassName});
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

        this.setDirection(currentRouteProps.key);

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
            ? downDirectionClassName
            : upDirectionClassName;

        this.previousRouteKey = key;
    }
}
