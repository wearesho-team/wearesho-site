import * as React from "react";
import { Link, Route } from "react-router-dom";

import { translate } from "helpers/translate";
import { mainRouteProps } from "data/routeProps";

import { Header, SideBar, SoundSwitch } from "../Partials";

import { PreLoader } from "components/PreLoader";
import { ErrorBounder } from "components/ErrorBounder";
import { SwitchControl } from "components/SwitchControl";
import { ScrollControl } from "components/ScrollControl";
import { SmartBreakpoint } from "components/SmartBreakpoint";
import { TransitionSwitch } from "components/TransitionSwitch";
import { LayoutContextTypes, LayoutContext } from "../LayoutContext";

export class MainLayout extends React.Component {
    public static readonly contextTypes = LayoutContextTypes;

    public readonly context: LayoutContext;

    public async componentDidMount() {
        await PreLoader.hide();

        this.context.setScrollState(true);
    }

    public componentWillUnmount() {
        PreLoader.show();

        this.context.setScrollState(false);
    }

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
                <ErrorBounder>
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
                </ErrorBounder>
            </React.Fragment>
        );
    }

    protected get routesWithProps(): JSX.Element[] {
        return mainRouteProps.map((props) => <Route {...props} key={props.path} />)
    }

    protected get linksWithProps(): JSX.Element[] {
        return mainRouteProps
            .map((props) => <Link className="main-nav__link" to={props.path} key={props.path}>+</Link>);
    }
}

export default MainLayout;
