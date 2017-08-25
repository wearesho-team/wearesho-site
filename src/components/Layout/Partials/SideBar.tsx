import * as React from "react";
import {Link} from "react-router-dom";
import {SocialLinks} from "./SocialLinks";

export class SideBar extends React.Component<undefined, undefined> {

    public render() {
        return (
            <aside className="sidebar">
                <nav className="main-nav">
                    <ul className="main-nav__list">
                        <li className="main-nav__item main-nav__item is-active">
                            <Link className="main-nav__link" to="/">+</Link>
                        </li>
                        <li className="main-nav__item">
                            <Link className="main-nav__link" to="/contact">+</Link>
                        </li>
                    </ul>
                </nav>
                <SocialLinks/>
            </aside>
        );
    }
}
