import * as React from "react";
import { Link, Route } from "react-router-dom";

import { translate } from "helpers/translate";
import { mainRouteProps } from "data/routeProps";

import { SwitchControl } from "components/SwitchControl";
import { ScrollControl } from "components/ScrollControl";
import { SmartBreakpoint } from "components/SmartBreakpoint";
import { TransitionSwitch } from "components/TransitionSwitch";

import { Header, SideBar, SoundSwitch } from "../Partials";

export class MainLayout extends React.Component {

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <Header>
                    <Link to="/partnership" className="header__new-project">{translate("header.newProject")}</Link>
                </Header>
                <SideBar>
                    {this.linksWithProps}
                </SideBar>
                <SoundSwitch />
                <div className="section-gradient" />
                <SmartBreakpoint match="min-width: 1440px">
                    <SwitchControl routeProps={mainRouteProps}>
                        <TransitionSwitch className="translate-container" classNames="translateY">
                            {this.routesWithProps}
                        </TransitionSwitch>
                    </SwitchControl>
                </SmartBreakpoint>
                <SmartBreakpoint match="max-width: 1439px">
                    <ScrollControl routeProps={mainRouteProps}>
                        {mainRouteProps.map((prop) => prop.render())}
                    </ScrollControl>
                </SmartBreakpoint>
            </React.Fragment>
        );
    }

    protected get routesWithProps(): Array<JSX.Element> {
        return mainRouteProps.map((props) => <Route {...props} key={props.path} />)
    }

    protected get linksWithProps(): Array<JSX.Element> {
        return mainRouteProps
            .map((props) => <Link className="main-nav__link" to={props.path} key={props.path}>+</Link>);
    }
}
