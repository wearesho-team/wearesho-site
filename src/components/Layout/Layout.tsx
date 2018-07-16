import axios from "axios";
import * as React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { AsyncRoutesController } from "react-async-controller";

import { translate } from "helpers/translate";
import { Languages } from "data/Languages";

import { LayoutContext, LayoutContextTypes } from "./LayoutContext"
import { LayoutProps, LayoutPropTypes } from "./LayoutProps";

import { MainLayout } from "./MainLayout";
import { ProcessLayout } from "./ProcessLayout";

export interface LayoutState {
    isScrollEnabled: boolean;
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
            isScrollEnabled: false,
        };

        translate.setLocale(this.state.language);
    }

    public getChildContext(): LayoutContext {
        return {
            isScrollDisabled: !this.state.isScrollEnabled,
            setScrollState: this.handleSetScrollState,
            language: this.state.language,
            setLanguage: this.setLanguage
        }
    }

    public render(): React.ReactNode {
        return (
            <Router history={this.props.history}>
                <AsyncRoutesController
                    availableRoutes={{
                        process: {
                            path: "/process/*",
                            resolveComponent:
                                () => import(/* webpackChunkName: "process" */ "./ProcessLayout/ProcessLayout")
                        },
                        main: {
                            path: "/",
                            resolveComponent:
                                () => import(/* webpackChunkName: "main" */ "./MainLayout/MainLayout")
                        }
                    }}
                />
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

    protected handleSetScrollState = (isScrollEnabled: boolean): void => {
        this.setState({ isScrollEnabled });
    }
}
