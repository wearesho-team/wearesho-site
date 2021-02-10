import * as React from "react";
import {withRouter} from "react-router";
import {concat} from "../../../helpers/concat";

import {SocialLinks} from "./SocialLinks";

export const SideBar = withRouter((props): JSX.Element => {
    
    const {location} = props.history;
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
});
