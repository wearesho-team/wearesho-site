import * as React from "react";
import {Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from "react-transition-group";

import {TransitionSwitchProps, TransitionSwitchPropTypes} from './TransitionSwitchProps';

export class TransitionSwitch extends React.Component<TransitionSwitchProps, undefined> {

    static propTypes = TransitionSwitchPropTypes;

    render() {
        const {location, ...props} = this.props;

        const transitionProps = Object.assign({
            key: location.pathname.split('/')[1],
        }, props);

        return (
            <TransitionGroup>
                <CSSTransition {...transitionProps}>
                    <Switch {...location}>
                        {this.props.children}
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        );
    }
}