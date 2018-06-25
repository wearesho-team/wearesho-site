import * as React from "react";
import {Link} from "react-router-dom";

import { OnTabletDesktop } from "../../../helpers/Breakpoints";

import { SocialLinks } from "../../Layout/Partials/SocialLinks";

import { Languages } from "../../../data/Languages";

import {TouchHover} from "../../../helpers/TouchHover";
import { LayoutContext, LayoutContextTypes } from "../../Layout/LayoutContext";
import { translate } from "../../../helpers/translate";

export class ServicesSidebar extends React.Component<undefined, undefined> {
    public static readonly contextTypes = LayoutContextTypes;

    public context: LayoutContext;

    public render(): JSX.Element {
        return (
            <aside className="sidebar sidebar-services">
                <div className="aside-nav">
                    <Link to="/planning" className="stage">
                        <span className="stage__number">01</span>
                    </Link>
                    <Link to="/design" className="stage">
                        <span className="stage__number marker">02</span>
                    </Link>
                    <Link to="/develop" className="stage active-control">
                        <span className="stage__number marker">03</span>
                    </Link>
                    <Link to="/deploy" className="stage">
                        <span className="stage__number marker">04</span>
                    </Link>
                    <Link to="/promotion" className="stage">
                        <span className="stage__number marker">05</span>
                    </Link>
                    <Link to="/support" className="stage">
                        <span className="stage__number marker">06</span>
                    </Link>
                </div>
                <SocialLinks/>
            </aside>
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
