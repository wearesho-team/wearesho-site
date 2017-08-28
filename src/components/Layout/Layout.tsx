import * as React from "react";
import {Router, Route, Link} from "react-router-dom";

import {LayoutProps, LayoutPropTypes} from "./LayoutProps";
import {MainPage} from "../MainPage";
import {ContactPage} from "../ContactPage";

import {Header, SideBar} from "./Partials";
import {SoundSwitch} from "./SoundSwitch";
import {Grid} from "./Grid";
import {TransitionSwitch} from "../TransitionSwitch";

export class Layout extends React.Component<LayoutProps, undefined> {

    public static propTypes = LayoutPropTypes;

    public async componentDidMount() {
        await this.props.preLoader.hide();
    }

    public async componentWillUnmount() {
        await this.props.preLoader.show();
    }

    public render() {

        return (
            <Router history={this.props.history}>
                <div id="content">
                    <Grid/>
                    <Header/>
                    <SideBar>
                        <Link className="main-nav__link" to="/">+</Link>
                        <Link className="main-nav__link" to="/contact">+</Link>
                    </SideBar>
                    <SoundSwitch/>
                    <TransitionSwitch className="translate-container" classNames="translateY">
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/contact" component={ContactPage}/>
                    </TransitionSwitch>
                </div>
            </Router>
        );
    }
}
