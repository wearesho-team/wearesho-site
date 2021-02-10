import axios from "axios";
import * as React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Languages} from "../../data/Languages";

import {routeProps} from "../../data/routeProps";
import {getLinksWithProps} from "../../helpers/getLinksWithProps";

import {getRoutesWithProps} from "../../helpers/getRoutesWithProps";
import {translate} from "../../helpers/translate";
import {ErrorBounder} from "../ErrorBounder/ErrorBounder";
import {ScrollControl} from "../ScrollControl";
import {SmartBreakpoint} from "../SmartBreakpoint";
import {SwitchControl} from "../SwitchControl";
import {TransitionSwitch} from "../TransitionSwitch";

import {LayoutContext} from "./LayoutContext";
import {LayoutProps} from "./LayoutProps";
import {LayoutState} from "./LayoutState";
import {Header, SideBar, SoundSwitch} from "./Partials";

export class Layout extends React.Component<LayoutProps, LayoutState> {
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

    public getContext() {
        return {
            language: this.state.language,
            isScrollDisabled: this.state.isScrollDisabled,
            setLanguage: this.setLanguage
        };
    }

    // shouldComponentUpdate(nextProps: Readonly<LayoutProps>, nextState: Readonly<LayoutState>): boolean {
    //     return (this.state.language !== nextState.language) || (this.state.isScrollDisabled !== nextState.isScrollDisabled)
    // }

    public async componentDidMount() {
        await this.props.preLoader.hide();
        this.setState({isScrollDisabled: false});
    }

    public async componentWillUnmount() {
        await this.props.preLoader.show();
    }

    public render(): JSX.Element {
        return (
            <Router>
                <LayoutContext.Provider value={this.getContext()}>
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
                </LayoutContext.Provider>
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
    };
}
