import axios from "axios";
import * as React from "react";
import { Router, Switch, Route } from "react-router-dom";

import { translate } from "helpers/translate";
import { Languages } from "data/Languages";

import { LayoutContext, LayoutContextTypes } from "./LayoutContext"
import { LayoutProps, LayoutPropTypes } from "./LayoutProps";

import { MainLayout } from "./MainLayout";
import { ProcessLayout } from "./ProcessLayout";

export interface LayoutState {
    isScrollDisabled: boolean;
    language: Languages;
}

export class Layout extends React.Component<LayoutProps, LayoutState> {
    public static readonly childContextTypes = LayoutContextTypes;
    public static readonly propTypes = LayoutPropTypes;

    constructor(props) {
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
            isScrollDisabled: this.state.isScrollDisabled,
            language: this.state.language,
            setLanguage: this.setLanguage
        }
    }

    public async componentDidMount() {
        await this.props.preLoader.hide();
        this.setState({ isScrollDisabled: false });
    }

    public async componentWillUnmount() {
        await this.props.preLoader.show();
    }

    public render(): JSX.Element {
        return (
            <Router history={this.props.history}>
                <div id="content">
                    <Switch>
                        <Route exact path="/process/*" component={ProcessLayout} />
                        <Route path="/" component={MainLayout} />                        
                    </Switch>
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
        this.setState({ language: nextLanguage });
    }
}
