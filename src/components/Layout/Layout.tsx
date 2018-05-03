import * as React from "react";
import {Router} from "react-router-dom";
import axios from "axios";

import {routeProps} from "../../data/routeProps";
import {Languages} from "../../data/Languages";

import {getRoutesWithProps} from "../../helpers/getRoutesWithProps";
import {getLinksWithProps} from "../../helpers/getLinksWithProps";
import {translate} from "../../helpers/translate";

import {LayoutContext, LayoutContextTypes} from "./LayoutContext"
import {LayoutProps, LayoutPropTypes} from "./LayoutProps";
import {ErrorBounder} from "../ErrorBounder/ErrorBounder";
import {Header, SideBar, SoundSwitch} from "./Partials";
import {TransitionSwitch} from "../TransitionSwitch";
import {SmartBreakpoint} from "../SmartBreakpoint";
import {SwitchControl} from "../SwitchControl";
import {ScrollControl} from "../ScrollControl";
import {LayoutState} from "./LayoutState";

export class Layout extends React.Component<LayoutProps, LayoutState> {
    public static readonly propTypes = LayoutPropTypes;
    public static readonly childContextTypes = LayoutContextTypes;

    public constructor(props) {
        super(props);

        this.state = {
            language: localStorage.getItem("app.language") === Languages.ru
                ? Languages.ru
                : Languages.en,
            isScrollDisabled: true
        };

        translate.setLocale(this.state.language);
    }

    public getChildContext(): LayoutContext {
        return {
            language: this.state.language,
            isScrollDisabled: this.state.isScrollDisabled,
            setLanguage: this.setLanguage
        }
    }

    public async componentDidMount() {
        await this.props.preLoader.hide();
        this.setState({isScrollDisabled: false});
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
                    <div className="section-gradient"/>
                    <ErrorBounder>
                        <SmartBreakpoint match="min-width: 1440px">
                            <SwitchControl>
                                <TransitionSwitch className="translate-container" classNames="translateY">
                                    {getRoutesWithProps()}
                                </TransitionSwitch>
                            </SwitchControl>
                        </SmartBreakpoint>
                        <SmartBreakpoint match="max-width: 1439px">
                            <ScrollControl>
                                {routeProps.map((prop) => prop.render())}
                            </ScrollControl>
                        </SmartBreakpoint>
                    </ErrorBounder>
                </div>
            </Router>
        );
    }

    protected setLanguage = (nextLanguage: Languages) => {
        // change html lang attribute
        document.documentElement.lang = nextLanguage;
        // write to storage
        localStorage.setItem("app.language", nextLanguage);
        // set up request
        axios.defaults.headers["accept-language"] = nextLanguage;
        // translate text
        translate.setLocale(nextLanguage);
        // pass to context
        this.setState({language: nextLanguage});
    }
}
