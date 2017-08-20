import * as React from "react";

export class MainPage extends React.Component<undefined, undefined> {

    public render() {
        return (
            <section className="section section-main">
                <h2 className="section-title">
                    <span className="section-title__part">
                        Здесь ваши&nbsp;
                        <span className="section-title__part-container">
                            <span className="section-title__part-variable">смелые</span>
                            <span className="section-title__part-variable">смелые2</span>
                            <span className="section-title__part-variable">смелые3</span>
                        </span>
                    </span>
                    <span className="section-title__part">
                        идеи превращаются&nbsp;
                        <span className="section-title__part-container">
                            <span className="section-title__part-variable">в IT-продукт</span>
                            <span className="section-title__part-variable">в IT-продукт2</span>
                            <span className="section-title__part-variable">в IT-продукт3</span>
                        </span>
                    </span>
                </h2>
                <div className="container">
                    <div className="section-half">
                        <h4 className="section-subtitle section-subtitle_marker">Реализуем высокотехнологичные
                            проекты</h4>
                        <ul className="services-list">
                            <li className="services-list__item">разработка сайтов</li>
                            <li className="services-list__item">брендинг и дизайн</li>
                            <li className="services-list__item">формирование ERP и CRM-систем</li>
                            <li className="services-list__item">аналитика и реклама</li>
                            <li className="services-list__item">техническая поддержка проектов</li>
                        </ul>
                    </div>
                    <div className="section-half">
                        <h4 className="section-subtitle section-subtitle_marker">
                            Более 3 лет
                            <span className="section-subtitle_reduced">
                                профессионального сотрудничества с финансовыми компаниями:
                            </span>
                        </h4>
                        <ul className="clients-list">
                            <li className="clients-list__item">
                                <a href="#" className="clients-list__link">NIKO Holding</a>
                                <span className="clients-list__text">#автодилер&nbsp;#логистика&nbsp;#финансы</span>
                            </li>
                            <li className="clients-list__item">
                                <a href="#" className="clients-list__link">Infinance</a>
                                <span className="clients-list__text">#кредитование&nbsp;#финансы</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="prj-chronology">
                    <div className="prj-chronology__div-outer prj-chronology__div-outer_left"/>
                    <div className="prj-chronology__div-outer prj-chronology__div-outer_right"/>
                    <div className="chronology-slider">
                        <div className="chronology-slider__body"/>
                        <div className="chronology-slider__description">
                            <div className="chronology-slider__projects">
                                <a href="#">NIKO</a>&nbsp;/&nbsp;
                                <a href="#">Infinance</a>
                            </div>
                            <span className="chronology-slider__services">Техническая поддержка</span>
                            <span className="chronology-slider__date">18.08.2017</span>
                        </div>
                    </div>
                    <div className="container">
                        <div className="prj-chronology__item">
                            <span className="prj-chronology__div prj-chronology__div_left-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_left-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_left-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_wide">
                                2014
                            </span>
                            <span className="prj-chronology__div prj-chronology__div_right-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_right-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_right-indent"/>
                        </div>
                        <div className="prj-chronology__item">
                            <span className="prj-chronology__div prj-chronology__div_left-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_left-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_left-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_wide">
                                2015
                            </span>
                            <span className="prj-chronology__div prj-chronology__div_right-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_right-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_right-indent"/>
                        </div>
                        <div className="prj-chronology__item">
                            <span className="prj-chronology__div prj-chronology__div_left-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_left-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_left-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_wide">
                                2016
                            </span>
                            <span className="prj-chronology__div prj-chronology__div_right-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_right-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_right-indent"/>
                        </div>
                        <div className="prj-chronology__item">
                            <span className="prj-chronology__div prj-chronology__div_left-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_left-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_left-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_wide">
                                2017
                            </span>
                            <span className="prj-chronology__div prj-chronology__div_right-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_right-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_right-indent"/>
                        </div>
                        <div className="prj-chronology__item tablet-hidden">
                            <span className="prj-chronology__div prj-chronology__div_left-indent is-filled"/>
                            <span className="prj-chronology__div prj-chronology__div_left-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_left-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_wide color-muted">
                                2018
                            </span>
                            <span className="prj-chronology__div prj-chronology__div_right-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_right-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_right-indent"/>
                        </div>
                        <div className="prj-chronology__item tablet-hidden">
                            <span className="prj-chronology__div prj-chronology__div_left-indent is-filled"/>
                            <span className="prj-chronology__div prj-chronology__div_left-indent is-filled"/>
                            <span className="prj-chronology__div prj-chronology__div_left-indent is-filled"/>
                            <span className="prj-chronology__div prj-chronology__div_wide is-filled color-muted">
                                2019
                            </span>
                            <span className="prj-chronology__div prj-chronology__div_right-indent is-filled"/>
                            <span className="prj-chronology__div prj-chronology__div_right-indent"/>
                            <span className="prj-chronology__div prj-chronology__div_right-indent is-filled"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
