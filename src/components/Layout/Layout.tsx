import * as React from 'react';

import {Router, Route, Switch} from 'react-router-dom';

import {LayoutProps, LayoutPropTypes} from "./LayoutProps";
import {MainPage} from "../pages/MainPage/MainPage";
import {ContactPage} from "../pages/ContactPage/ContactPage";

import {Header} from "../Header";
import {SideBar} from "../SideBar";
import {SoundSwitch} from "../SoundSwitch";

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
                    <ul className="grid">
                        <li className="grid__col"/>
                        <li className="grid__col"/>
                        <li className="grid__col"/>
                        <li className="grid__col"/>
                        <li className="grid__col"/>
                        <li className="grid__col"/>
                    </ul>
                    <Header/>
                    <SideBar/>
                    <SoundSwitch/>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/contact" component={ContactPage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}