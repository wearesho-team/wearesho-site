import * as React from "react";

import {SocialLinks} from "../SocialLinks";
import {concat} from "../../../../helpers/concat";
import {RouterContextTypes} from "../../../../data/RouterContext";

export const SideBar: React.SFC<undefined> = ({children}, context) => {

    const getItemProps = (element: JSX.Element): object => {
        return {
            className: concat(
                "main-nav__item main-nav__item",
                context.history.location.pathname === element.props.to ? "is-active" : ""
            ),
            key: element.props.to,
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
