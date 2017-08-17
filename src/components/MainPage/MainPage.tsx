import * as React from 'react';

export class MainPage extends React.Component<undefined, undefined> {

    render() {
        return (
            <section className="section section-main">
                <h2 className="section__title">
                    <span className="section__title_part">Здесь ваши <span className="section__title_part-marked">смелые</span></span>
                    <span className="section__title_part">идеи превращаются<span className="section__title_part-marked">&nbsp;в IT-продукт</span></span>
                </h2>
                <div className="section-half">
                    <h4 className="section__subtitle section__subtitle_marker">Реализуем высокотехнологичные проекты</h4>
                    <ul className="services-list">
                        <li className="services-list__item">разработка сайтов</li>
                        <li className="services-list__item">брендинг и дизайн</li>
                        <li className="services-list__item">формирование ERP и CRM-систем</li>
                        <li className="services-list__item">аналитика и реклама</li>
                        <li className="services-list__item">техническая поддержка проектов</li>
                    </ul>
                </div>
                <div className="section-half">
                    <h4 className="section__subtitle section__subtitle_marker">
                        Более 3 лет
                        <span className="section__subtitle_reduced">профессионального сотрудничества с финансовыми компаниями:</span>
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
            </section>
        );
    }
}