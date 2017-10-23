import * as React from "react";
import {Link} from "react-router-dom";

export class Header extends React.Component<undefined, undefined> {

    public render(): JSX.Element {
        return (
            <header className="header">
                <Link to="/" className="logo">
                    <i className="icon icon_logo"/>
                    <span className="logo__text">Art &amp; Data Studio</span>
                </Link>
                <div className="header__right">
                    <Link to="/partnership" className="header__new-project">Новый проект</Link>
                    <a href="#" className="header__lang-toggle">eng</a>
                </div>
            </header>
        );
    }

}
