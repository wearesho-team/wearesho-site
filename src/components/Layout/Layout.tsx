import * as React from 'react';
import {Router, Route} from 'react-router-dom';

import {LayoutProps, LayoutPropTypes} from "./LayoutProps";
import {MainPage} from "../MainPage";
import {ContactPage} from "../ContactPage";

import {Header, SideBar} from "./Partials";
import {SoundSwitch} from "./SoundSwitch";
import {Grid} from "./Grid";
import {TransitionSwitch} from "../TransitionSwitch";

export class Layout extends React.Component<LayoutProps, undefined> {
    static propTypes = LayoutPropTypes;

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.props.preLoader.hide();
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
                    <TransitionSwitch className="translate-container"
                                      classNames="translateY"
                                      history={this.props.history}
                                      timeout={50000}>
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/contact" component={ContactPage}/>
                    </TransitionSwitch>
                </div>
            </Router>
        );
    }
}