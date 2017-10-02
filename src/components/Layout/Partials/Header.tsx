import * as React from "react";

export class Header extends React.Component<undefined, undefined> {

    public render(): JSX.Element {
        return (
            <header className="header">
                <a href="#" className="logo">
                    <i className="icon icon_logo"/>
                    <span className="logo__text">Art &amp; Data Studio</span>
                </a>
                <div className="header__right">
                    <a href="#" className="header__new-project">Новый проект</a>
                    <a href="#" className="header__lang-toggle">eng</a>
                </div>
            </header>
        );
    }

}
