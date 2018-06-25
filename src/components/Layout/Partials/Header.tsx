import * as React from "react";
import {Link} from "react-router-dom";

import {Languages} from "../../../data/Languages";

import {TouchHover} from "../../../helpers/TouchHover";
import {translate} from "../../../helpers/translate";

import {LayoutContext, LayoutContextTypes} from "../LayoutContext";

export class Header extends React.Component<undefined, undefined> {
    public static readonly contextTypes = LayoutContextTypes;

    public context: LayoutContext;

    public render(): JSX.Element {
        return (
            <header className="header">
                <Link to="/" className="logo">
                    <i className="icon icon_logo"/>
                    <span className="logo__text">Art &amp; Data Studio</span>
                </Link>
                <div className="header__right">
                    {this.props.children}
                    <button type="button" className="header__lang-toggle" onClick={this.changeLanguage} {...TouchHover}>
                        {this.languageLabel}
                    </button>
                </div>
            </header>
        );
    }

    protected changeLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const nextLanguage = this.context.language === Languages.ru
            ? Languages.en
            : Languages.ru;

        this.context.setLanguage(nextLanguage);
    };

    protected get languageLabel() {
        return this.context.language === Languages.ru
            ? "ENG"
            : "РУС";
    }

}
