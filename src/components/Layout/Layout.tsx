import * as React from "react";
import {Router, Route, Link} from "react-router-dom";

import {LayoutProps, LayoutPropTypes} from "./LayoutProps";

import {Header, SideBar} from "./Partials";
import {SoundSwitch} from "./SoundSwitch";
import {TransitionSwitch} from "../TransitionSwitch";
import {SwitchControl} from "../SwitchControl";
import {getLinksWithProps} from "../../helpers/linksWithProps";
import {getRoutesWithProps} from "../../helpers/routesWithProps";

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
                    <SwitchControl>
                        <TransitionSwitch className="translate-container" classNames="translateY">
                            {getRoutesWithProps()}
                        </TransitionSwitch>
                    </SwitchControl>
                </div>
            </Router>
        );
    }
}
