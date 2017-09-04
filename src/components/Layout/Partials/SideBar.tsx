import * as React from "react";

import {SocialLinks} from "./SocialLinks";
import {concat} from "../../../helpers/concat";
import {RouterContext, RouterContextTypes} from "../../../data/RouterContext";

export const SideBar: React.SFC<undefined> = (props, context: RouterContext) => {

    const {location} = context.router.history;
    const children = props.children as JSX.Element [];

    const defaultClassName = "main-nav__item main-nav__item";
    const activeClassName = "is-active";

    const getItemProps = (element: JSX.Element): object => {
        return {
            className: concat(
                defaultClassName,
                location.pathname === element.props.to ? activeClassName : ""
            )
        };
    };

    return (
        <aside className="sidebar">
            <nav className="main-nav">
                <ul className="main-nav__list">
                    {children.map((element) => <li {...getItemProps(element)} key={element.props.to}>{element}</li>)}
                </ul>
            </nav>
            <SocialLinks/>
        </aside>
    );
};

SideBar.contextTypes = RouterContextTypes;
