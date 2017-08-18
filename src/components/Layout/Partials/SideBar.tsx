import * as React from "react";
import {Link} from "react-router-dom";

export class SideBar extends React.Component<undefined, undefined> {

    public render() {
        return (
            <aside className="sidebar">
                <nav className="main-nav">
                    <ul className="main-nav__list">
                        <li className="main-nav__item main-nav__item_active">
                            <Link className="main-nav__link" to="/">+</Link>
                        </li>
                        <li className="main-nav__item">
                            <Link className="main-nav__link" to="/contact">+</Link>
                        </li>
                    </ul>
                </nav>
                <div className="social-list">
                    <a href="#" className="social-list__item">
                        <i className="icon icon_soc-gh"/>
                    </a>
                    <a href="#" className="social-list__item">
                        <i className="icon icon_soc-li"/>
                    </a>
                </div>
            </aside>
        );
    }

}
