import * as React from 'react';
import PreLoader from './PreLoader';

export interface LayoutProps {
    preLoader: PreLoader;
}

export default class Layout extends React.Component<LayoutProps, undefined> {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.props.preLoader.hide();
    }

    async componentWillUnmount() {
        await this.props.preLoader.show();
    }

    render() {
            return <div id="content">
                <header className="header">
                    <a href="#" className="logo">
                        <i className="icon icon_logo"/>
                        <span className="logo__text">Art & Data Studio</span>
                    </a>
                    <div className="header__right">
                        <a href="#" className="header__new-project">Новый проект</a>
                        <a href="#" className="header__lang-toggle">eng</a>
                    </div>
                </header>
                <aside className="sidebar">
                    <nav className="main-nav">
                        <ul className="main-nav__list">
                            <li className="main-nav__item main-nav__item_active"></li>
                            <li className="main-nav__item"></li>
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
                <ul className="grid">
                    <li className="grid__col"></li>
                    <li className="grid__col"></li>
                    <li className="grid__col"></li>
                    <li className="grid__col"></li>
                    <li className="grid__col"></li>
                    <li className="grid__col"></li>
                </ul>
                <section className="section section-main">
                    <h2 className="section__title">
                        <span className="section__title_part">Здесь ваши <span className="section__title_part-marked">смелые</span></span>
                        <span className="section__title_part">идеи превращаются<span className="section__title_part-marked">&nbsp;в IT-продукт</span></span>
                    </h2>
                </section>
            </div>;
    }
}