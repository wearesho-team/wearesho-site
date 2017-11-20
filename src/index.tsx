import "../styles/main.scss";
import "./bootstrap";

import "./translations/en";
import "./translations/ru";

import * as React from "react";
import * as ReactDOM from "react-dom";
import {createBrowserHistory} from "history";

import {Layout} from "./components/Layout";
import {PreLoader} from "./components/PreLoader";

const container = document.getElementById("content-overlay");

if (!container) {
    // tslint:disable-next-line
    console.error("Can not found element for mounting Layout!");
} else {
    ReactDOM.render(
        // tslint:disable:no-magic-numbers
        <Layout preLoader={new PreLoader((window as any).hideTimeout || 2000)} history={createBrowserHistory()}/>,
        container
    );
}
