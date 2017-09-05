import * as React from "react";
import {Router, Route} from "react-router-dom";

import {OnFullPage, OnWholePage} from "../../helpers/Breakpoints";

import {LayoutProps, LayoutPropTypes} from "./LayoutProps";
import {getLinksWithProps} from "../../helpers/linksWithProps";
import {getRoutesWithProps} from "../../helpers/routesWithProps";

import {Header, SideBar} from "./Partials";
import {SoundSwitch} from "./SoundSwitch";
import {TransitionSwitch} from "../TransitionSwitch";
import {SwitchControl} from "../SwitchControl";

import {routeProps} from "../../data/routeProps";

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
                    <Header/>
                    <SideBar>
                        {getLinksWithProps()}
                    </SideBar>
                    <SoundSwitch/>
                    <OnFullPage>
                        <SwitchControl>
                            <TransitionSwitch className="translate-container" classNames="translateY">
                                {getRoutesWithProps()}
                            </TransitionSwitch>
                        </SwitchControl>
                    </OnFullPage>
                    <OnWholePage>
                        {routeProps.map((prop) => <prop.component key={prop.path}/>)}
                    </OnWholePage>
                </div>
            </Router>
        );
    }
}
