import * as React from "react";

import {LayoutContext, LayoutContextTypes} from "../LayoutContext";
import {Languages} from "../../../data/Languages";
import {translate} from "../../../helpers/translate";

export class Header extends React.Component<undefined, undefined> {
    public static readonly contextTypes = LayoutContextTypes;

    public context: LayoutContext;

    public render(): JSX.Element {
        return (
            <header className="header">
                <a href="#" className="logo">
                    <i className="icon icon_logo"/>
                    <span className="logo__text">Art &amp; Data Studio</span>
                </a>
                <div className="header__right">
                    <a href="#" className="header__new-project">{translate("header.newProject")}</a>
                    <button type="button" className="header__lang-toggle" onClick={this.changeLanguage}>
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
