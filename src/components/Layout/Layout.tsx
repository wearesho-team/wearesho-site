import * as React from 'react';
import {Router, Route} from 'react-router-dom';
import {Location} from 'history';

import {LayoutProps, LayoutPropTypes} from "./LayoutProps";
import {LayoutState} from './LayoutState';
import {MainPage} from "../MainPage";
import {ContactPage} from "../ContactPage";

import {Header, SideBar} from "./Partials";
import {SoundSwitch} from "./SoundSwitch";
import {Grid} from "./Grid";
import {TransitionSwitch} from "../TransitionSwitch";

export class Layout extends React.Component<LayoutProps, LayoutState> {
    static propTypes = LayoutPropTypes;

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.props.preLoader.hide();

        this.setState({page: this.props.history.location.pathname});

        this.props.history.listen((location: Location) => {
            if (location.pathname !== this.state.page) {
                this.setState({page: location.pathname});
            }
        })
    }

    async componentWillUnmount() {
        await this.props.preLoader.show();
    }

    render() {

        return (
            <Router history={this.props.history}>
                <div id="content">
                    <Grid/>
                    <Header/>
                    <SideBar/>
                    <SoundSwitch/>
                    <TransitionSwitch location={this.props.history.location}
                                      classNames="test"
                                      timeout={1000}>
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/contact" component={ContactPage}/>
                    </TransitionSwitch>
                </div>
            </Router>
        );
    }
}