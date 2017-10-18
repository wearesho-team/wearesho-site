import * as React from "react";

import {TimeLine} from "../TimeLine";
import {SmartBreakpoint} from "../SmartBreakpoint/SmartBreakpoint";
import {CodeStyleAnimation} from "../Animations/CodeStyleAnimation";
import {CodeStyleAnimationSpeed} from "../Animations/CodeStyleAnimation/CodeStyleAnimationSpeed";
import {CustomAnimation} from "../Animations/CustomAnimation";

// tslint:disable:no-magic-numbers
const delay = (window as any).hideTimeout * 2.5;

export class MainPage extends React.Component<undefined, undefined> {

    // Add `if` when props or state will be present
    public shouldComponentUpdate(): boolean {
        return false;
    }

    public render(): JSX.Element {
        return (
            <section className="section section-main">
                <div className="align-container">
                    <CustomAnimation duration={2000} delay={delay} actionClassName="slide-to-left">
                        <h2 className="section__title">
                            <span className="section__title-part">
                                <span>Здесь ваши&nbsp;</span>
                                <span className="section__title-part-container">
                                    <span className="section__title-part-variable">смелые</span>
                                </span>
                            </span>
                            <span className="section__title-part">
                                <span>идеи превращаются&nbsp;</span>
                                    <span className="section__title-part-container">
                                    <span className="section__title-part-variable">в IT-продукт</span>
                                </span>
                            </span>
                        </h2>
                    </CustomAnimation>
                    <div className="container">
                        <div className="section__half">
                            <h4 className="section__subtitle section__subtitle_marker">
                                <CodeStyleAnimation
                                    delay={delay}
                                    speed={CodeStyleAnimationSpeed.fast}
                                    caretTimeout={100}
                                >
                                    Реализуем высокотехнологичные проекты
                                </CodeStyleAnimation>
                            </h4>
                            <div className="services-list">
                                <CodeStyleAnimation
                                    delay={delay}
                                    speed={CodeStyleAnimationSpeed.fast}
                                    caretTimeout={1500}
                                >
                                    разработка сайтов{"\n"}
                                    брендинг и дизайн{"\n"}
                                    формирование ERP и CRM-систем{"\n"}
                                    аналитика и реклама{"\n"}
                                    техническая поддержка проектов
                                </CodeStyleAnimation>
                            </div>
                        </div>
                        <div className="section__half">
                            <h4 className="section__subtitle section__subtitle_marker">
                                <CodeStyleAnimation
                                    delay={delay}
                                    speed={CodeStyleAnimationSpeed.medium}
                                    caretTimeout={100}
                                >
                                    Более 3 лет
                                </CodeStyleAnimation>
                                <span className="section__subtitle_reduced">
                                     <CodeStyleAnimation
                                         delay={delay}
                                         speed={CodeStyleAnimationSpeed.fast}
                                         caretTimeout={1500}
                                     >
                                        профессионального сотрудничества с финансовыми компаниями:
                                     </CodeStyleAnimation>
                                </span>
                            </h4>
                            <CustomAnimation
                                duration={1500}
                                delay={delay}
                                actionClassName="slide-to-left"
                            >
                                <ul className="clients-list">
                                    <li className="clients-list__item">
                                        <a href="#" className="clients-list__link">NIKO Holding</a>
                                        <span className="clients-list__text">#автодилер&nbsp;#логистика&nbsp;
                                            #финансы</span>
                                    </li>
                                    <li className="clients-list__item">
                                        <a href="#" className="clients-list__link">Infinance</a>
                                        <span className="clients-list__text">#кредитование&nbsp;#финансы</span>
                                    </li>
                                </ul>
                            </CustomAnimation>
                        </div>
                    </div>
                    <SmartBreakpoint match="min-width: 1024px">
                        <TimeLine range={{min: 2014, max: 2019}}/>
                    </SmartBreakpoint>
                </div>

            </section>
        );
    }
}
