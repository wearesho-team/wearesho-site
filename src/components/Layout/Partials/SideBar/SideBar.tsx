import * as React from "react";

import {SideBarProps, SideBarPropTypes} from "./SideBarProps";

import {SocialLinks} from "../SocialLinks";
import {concat} from "../../../../helpers/concat";

export const SideBar: React.SFC<SideBarProps> = (props) => {

    const getItemProps = (element: JSX.Element): object => {
        return {
            className: concat(
                "main-nav__item main-nav__item",
                props.history.location.pathname === element.props.to ? "is-active" : ""
            ),
            key: element.props.to,
        };
    };

    return (
        // tslint:disable:jsx-key
        <aside className="sidebar">
            <nav className="main-nav">
                <ul className="main-nav__list">
                    {props.children.map((element) => <li {...getItemProps(element)}>{element}</li>)}
                </ul>
            </nav>
            <SocialLinks/>
        </aside>
    );
};

SideBar.propTypes = SideBarPropTypes;
