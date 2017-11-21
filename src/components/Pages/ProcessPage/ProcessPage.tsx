import * as React from "react";
import * as ReactDOM from "react-dom";

import {getElementCoords} from "../../../helpers/getElementCoords";
import {toFixed} from "../../../helpers/toFixed";
import {concat} from "../../../helpers/concat";

import {ProcessStructure} from "../../Icons/ProcessStructure";
import {SubmitButton} from "../../Buttons";
import {BasePage} from "../BasePage";

export class ProcessPage extends BasePage<any, any> {
    public static readonly baseClassName = "section section-process";
    protected stageList: Array<{
        title: string,
        subTitle: string
    }>;

    protected stagesContainer: HTMLElement;

    protected timers: Array<any>;


    public constructor(props) {
        super(props);

        this.state = {
            className: ProcessPage.baseClassName,
            currentIndex: 0
        };

        this.stageList = [
            {
                title: "Проектирование",
                subTitle: "на основе данных"
            },
            {
                title: "Дизайн",
                subTitle: "скетчи / прототипы"
            },
            {
                title: "Разработка",
                subTitle: "front & back end"
            },
            {
                title: "Развертывание",
                subTitle: "приложений на серверах"
            },
            {
                title: "Продвижение",
                subTitle: "online / offline"
            },
            {
                title: "Тех. поддержка",
                subTitle: "dsgn / dev / PR"
            }
        ];

        this.timers = Array.from(new Array(4));
    }

    public shouldComponentUpdate(nextProps: any, nextState: any, nextContext: any) {
        return super.shouldComponentUpdate(nextProps, nextState, nextContext)
            || nextState.className !== this.state.className;
    }

    public componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener("mousemove", this.handleMouseOver);
    }

    public componentWillUnmount() {
        this.timers.forEach((timer) => {
            clearTimeout(timer);
            timer = undefined;
        });

        ReactDOM.findDOMNode(this).removeEventListener("mousemove", this.handleMouseOver);
    }

    public render() {
        return (
            <section className={this.state.className}>
                <ProcessStructure/>
                <div className="align-container">
                    <h2 className="section__title">Процесс</h2>
                    <div className="section__half half_first">
                        <h4 className="section__subtitle">Всего 5 этапов для полного цикла IT-услуг</h4>
                        <p className="section__text">
                            Или укажите свои контактные данные в форме ниже. Наши специалисты ответят на форме.
                            Наши ответят на все ваши идиотские вопросы. Наши ответят на все ваши крайне.
                        </p>
                        <h5>Полную информацию вы можете увидеть в презентации</h5>
                        <SubmitButton type="button" label="Скачать pdf"/>
                    </div>
                    <div className="section__half half_second" ref={this.setContainer}>
                        {this.getStages(0, 3)}
                        <div className="stages-group">
                            {this.getStages(3, 3)}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    protected setContainer = (r: HTMLElement) => this.stagesContainer = r;

    protected getStages(from = 0, count = this.stageList.length): Array<JSX.Element> {
        return Array.from(this.stageList)
            .splice(from, count)
            .map(({title, subTitle}, i) => {
                return (
                    <div className="stage" key={i}>
                        <span className="stage__number marker">
                            {toFixed(2, i + from + 1)}
                        </span>
                        <div className="stage-body">
                            <h3 className="stage__title">{title}</h3>
                            <p className="stage__description">{subTitle}</p>
                            <span className="stage__detail">&gt;&gt;</span>
                        </div>
                    </div>
                );
            });
    }

    protected handleMouseOver = (event: MouseEvent): void => {
        const left = getElementCoords(this.stagesContainer).left;
        const width = this.stagesContainer.getBoundingClientRect().width;
        const cursorOffset = event.clientX - left;

        // is out of range
        if (cursorOffset < 0 || cursorOffset > width) {
            if (this.state.currentIndex !== -1) {
                this.setState({
                    currentIndex: -1
                });
            }
            return;
        }

        const index = Math.floor(cursorOffset / (width / 4));
        if (
            this.state.currentIndex === index ||
            this.timers[index] !== undefined
        ) {
            return;
        }

        this.timers[index] = setTimeout(() => {
            this.setState(({className}) => ({
                className: className.replace(new RegExp(`([\\s]\*from-${index + 1}[\\s]\*)`), " ").trim()
            }));

            clearTimeout(this.timers[index]);
            this.timers[index] = undefined;
        }, 2000);

        this.setState(({className}) => ({
            className: concat(
                className,
                `from-${index + 1}`
            ),
            currentIndex: index
        }));
    };
}
