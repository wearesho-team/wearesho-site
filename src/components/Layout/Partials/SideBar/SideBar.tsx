import * as React from "react";

import {SideBarProps, SideBarPropTypes} from "./SideBarProps";

import {SocialLinks} from "../SocialLinks";
import {concat} from "../../../../helpers/concat";

export class SideBar extends React.Component<SideBarProps, undefined> {

    public static propTypes = SideBarPropTypes;

    get menuItems() {
        const path = this.props.history.location.pathname;

        return (this.props.children as React.ReactHTML).map((element, i) => {
            return (
                <li
                    className={concat("main-nav__item main-nav__item", path === element.props.to ? "is-active" : "")}
                    key={i}
                >
                    {element}
                </li>
            );
        });
    }

    public render() {

        return (
            <aside className="sidebar">
                <nav className="main-nav">
                    <ul className="main-nav__list">
                        {this.menuItems}
                    </ul>
                </nav>
                <SocialLinks/>
            </aside>
        );
    }
}
