import * as React from "react";

import {SocialLinks} from "./SocialLinks";
import {concat} from "../../../helpers/concat";
import {RouterContextTypes} from "../../../data/RouterContext";

export const SideBar: React.SFC<undefined> = ({children}, {router: {history}}) => {

    const defaultClassName = "main-nav__item main-nav__item";
    const activeClassName = "is-active";

    const getItemProps = (element: JSX.Element): object => {
        return {
            className: concat(
                defaultClassName,
                history.location.pathname === element.props.to ? activeClassName : ""
            ),
            key: element.props.to
        };
    };

    return (
        // tslint:disable:jsx-key
        <aside className="sidebar">
            <nav className="main-nav">
                <ul className="main-nav__list">
                    {(children as JSX.Element []).map((element) => <li {...getItemProps(element)}>{element}</li>)}
                </ul>
            </nav>
            <SocialLinks/>
        </aside>
    );
};

SideBar.contextTypes = RouterContextTypes;
