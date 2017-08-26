import * as React from "react";

import {SideBarProps, SideBarPropTypes} from "./SideBarProps";

import {SocialLinks} from "../SocialLinks";
import {concat} from "../../../../helpers/concat";

export const SideBar: React.SFC<SideBarProps> = (props) => {

    const MenuItem = (element: JSX.Element): JSX.Element => {
        const className = concat(
            "main-nav__item main-nav__item",
            props.history.location.pathname === element.props.to ? "is-active" : ""
        );

        return (
            <li className={className} key={element.props.to}>
                {element}
            </li>
        )
    };

    return (
        <aside className="sidebar">
            <nav className="main-nav">
                <ul className="main-nav__list">
                    {(props.children as JSX.Element []).map((element, i) => <MenuItem {...element} key={i}/>)}
                </ul>
            </nav>
            <SocialLinks/>
        </aside>
    );
};

SideBar.propTypes = SideBarPropTypes;
