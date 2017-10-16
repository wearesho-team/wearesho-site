import "../styles/main.scss";
import "bootstrap";

// tslint:disable:no-submodule-imports
import "translations/en";
import "translations/ru";

import * as React from "react";
import * as ReactDOM from "react-dom";
import {createBrowserHistory} from "history";

import {Layout} from "./components/Layout";
import {PreLoader} from "./components/PreLoader";
import {Languages} from "./data/Languages";

const container = document.getElementById("content-overlay");

if (!container) {
    // tslint:disable-next-line
    console.error("Can not found element for mounting Layout!");
} else {
    if (!localStorage.getItem("app.language")) {
        let browserLanguage = navigator.language || (navigator as any).userLanguage;
        browserLanguage = browserLanguage && (browserLanguage.replace(/[^enru]/g, "")).toLowerCase();

        localStorage.setItem("app.language", browserLanguage || Languages.ru);
    }

    ReactDOM.render(
        // tslint:disable:no-magic-numbers
        <Layout preLoader={new PreLoader((window as any).hideTimeout || 2000)} history={createBrowserHistory()}/>,
        container
    );
}
