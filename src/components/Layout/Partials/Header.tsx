import * as React from "react";
import {Link} from "react-router-dom";

import {Languages} from "../../../data/Languages";

import {TouchHover} from "../../../helpers/TouchHover";

import {LayoutContext, LayoutContextTypes} from "../LayoutContext";

export const HeaderDefaultProps = {
    className: "header"
};

export class Header extends React.Component<React.HTMLProps<HTMLDivElement>> {
    public static readonly contextTypes = LayoutContextTypes;
    public static readonly defaultProps = HeaderDefaultProps;

    public context: LayoutContext;

    public render(): JSX.Element {
        return (
            <header {...this.props}>
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
