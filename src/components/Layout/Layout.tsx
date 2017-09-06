import * as React from "react";
import {Router} from "react-router-dom";

import {LayoutProps, LayoutPropTypes} from "./LayoutProps";
import {getLinksWithProps} from "../../helpers/getLinksWithProps";
import {getRoutesWithProps} from "../../helpers/getRoutesWithProps";

import {routeProps} from "../../data/routeProps";

import {Header, SideBar} from "./Partials";
import {SoundSwitch} from "./SoundSwitch";
import {TransitionSwitch} from "../TransitionSwitch";
import {SwitchControl} from "../SwitchControl";

import {ScrollControl} from "../ScrollControl";
import {SmartBreakpoint} from "../SmartBreakpoint";

export class Layout extends React.Component<LayoutProps, undefined> {

    public static propTypes = LayoutPropTypes;

    public async componentDidMount() {
        await this.props.preLoader.hide();
    }

    public async componentWillUnmount() {
        await this.props.preLoader.show();
    }

    public render(): JSX.Element {

        return (
            <Router history={this.props.history}>
                <div id="content">
                    <Header/>
                    <SideBar>
                        {getLinksWithProps()}
                    </SideBar>
                    <SoundSwitch/>
                    <SmartBreakpoint match="min-width: 1440px">
                        <SwitchControl>
                            <TransitionSwitch className="translate-container" classNames="translateY">
                                {getRoutesWithProps()}
                            </TransitionSwitch>
                        </SwitchControl>
                    </SmartBreakpoint>
                    <SmartBreakpoint match="max-width: 1439px">
                        <this.wholePageList/>
                    </SmartBreakpoint>
                </div>
            </Router>
        );
    }

    protected wholePageList(): JSX.Element {
        const content = routeProps.map((prop) => <prop.component key={prop.path}/>);

        return (
            <ScrollControl>
                {content}
            </ScrollControl>
        );
    }
}
