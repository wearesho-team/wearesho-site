import * as React from "react";
import {Route} from 'react-router-dom';
import {Location} from 'history';
import {TransitionGroup, CSSTransition} from "react-transition-group";

import {TransitionSwitchProps, TransitionSwitchPropTypes} from './TransitionSwitchProps';
import {TransitionSwitchState} from './TransitionSwitchState';

export class TransitionSwitch extends React.Component<TransitionSwitchProps, TransitionSwitchState> {

    public static propTypes = TransitionSwitchPropTypes;

    public state: TransitionSwitchState = {
        page: undefined,
    };

    private routesContainer: Array<any> = [];

    componentWillMount() {
        Object.keys(this.props.children)
            .forEach((field) => {
                this.routesContainer.push(this.props.children[field].props);
            });
    }

    componentDidMount() {
        this.props.history.listen((location: Location) => {
            if (location.pathname !== this.state.page) {
                this.setState({page: location.pathname});
            }
        })
    }

    private get routeProps(): object {
        return this.routesContainer.find(({path}) => path === this.props.history.location.pathname);
    }

    render(): JSX.Element {
        const {history: {location}, ...props} = this.props;

        const transitionProps = Object.assign({
            key: location.pathname.split('/')[1],
        }, props);

        const currentRouteProps = Object.assign({
            location: location,
        }, this.routeProps);

        return (
            <TransitionGroup className={this.props.className}>
                <CSSTransition {...transitionProps}>
                    <Route {...currentRouteProps}/>
                </CSSTransition>
            </TransitionGroup>
        );
    }
}