import * as React from "react";
import {Route} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from "react-transition-group";

import {TransitionSwitchProps, TransitionSwitchPropTypes} from './TransitionSwitchProps';

export class TransitionSwitch extends React.Component<TransitionSwitchProps, undefined> {

    public static propTypes = TransitionSwitchPropTypes;

    protected get routeProps(): object {
        return Object.keys(this.props.children)
            .map((field) => this.props.children[field].props)
            .find(({path}) => path === this.props.history.location.pathname);
    }

    render(): JSX.Element {
        const {history: {location}, ...props} = this.props;

        const transitionProps = {
            ...props,
            ...{
                key: location.pathname.split('/')[1],
            }
        };

        const currentRouteProps = {
            ...this.routeProps,
            ...{
                location: location,
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