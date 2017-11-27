import * as React from "react";
import * as ReactDOM from "react-dom";

import {ElementWithTimer, smartClearTimeout} from "../../../helpers/smartClearTimeout";
import {getElementCoords} from "../../../helpers/getElementCoords";
import {concat} from "../../../helpers/concat";

import {SmartBreakpoint} from "../../SmartBreakpoint/SmartBreakpoint";
import {ProcessStructure} from "../../Icons/ProcessStructure";
import {ProcessPageState} from "./ProcessPageState";
import {SubmitButton} from "../../Buttons";
import {Stages} from "./Stages/Stages";
import {BasePage} from "../BasePage";

export class ProcessPage extends BasePage<undefined, ProcessPageState> implements ElementWithTimer {
    public static readonly baseClassName = "section section-process";
    public static readonly demonstrationDuration = 4000;
    public static readonly demonstrationDelay = 400;
    public static readonly animationDuration = 2000;
    public static readonly activeGridCount = 4;

    public static demonstrationMode = true;

    public clearTimeout = smartClearTimeout.bind(this);
    public stagesContainer: HTMLElement;
    public timer: any;

    protected timers: any [];

    public constructor(props) {
        super(props);

        this.state = {
            className: ProcessPage.baseClassName,
            currentIndex: 0
        };

        this.timers = Array.from(new Array(ProcessPage.activeGridCount));
    }

    public shouldComponentUpdate(nextProps: any, nextState: any, nextContext: any) {
        return super.shouldComponentUpdate(nextProps, nextState, nextContext)
            || nextState.className !== this.state.className;
    }

    public componentDidMount() {
        const Node = ReactDOM.findDOMNode(this);

        Node.addEventListener("mousemove", this.handleHoverControl);
        Node.addEventListener("touchstart", this.handleHoverControl);

        if (ProcessPage.demonstrationMode) {
            this.clearTimeout();
            this.timer = setTimeout(this.demonstrate.bind(this, 0), ProcessPage.demonstrationDelay);
        }
    }

    public componentWillUnmount() {
        this.timers.forEach((timer) => {
            clearTimeout(timer);
            timer = undefined;
        });

        this.clearTimeout();
        this.timer = undefined;
        this.demonstrate = undefined;

        const Node = ReactDOM.findDOMNode(this);

        Node.removeEventListener("mousemove", this.handleHoverControl);
        Node.removeEventListener("touchstart", this.handleHoverControl);
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
                    <SmartBreakpoint match="min-width: 1024px">
                        <Stages className="section__half half_second" ref={this.setContainer}/>
                    </SmartBreakpoint>
                    <SmartBreakpoint match="max-width: 1023px">
                        <Stages className="section__half half_second"/>
                    </SmartBreakpoint>
                </div>
            </section>
        );
    }

    protected setContainer = (element: Stages) => this.stagesContainer = ReactDOM.findDOMNode(element);

    protected handleHoverControl = (event: MouseEvent | TouchEvent): void => {
        if (!this.stagesContainer) {
            return;
        }

        const clientX = event.hasOwnProperty("touches")
            ? (event as TouchEvent).touches[0].clientX
            : (event as MouseEvent).clientX;

        const left = getElementCoords(this.stagesContainer).left;
        const width = this.stagesContainer.getBoundingClientRect().width;
        const cursorOffset = clientX - left;

        // is out of range
        if (!(cursorOffset < 0 || cursorOffset > width)) {
            ProcessPage.demonstrationMode && (ProcessPage.demonstrationMode = false);

            // calculate index of hovered grid item
            const index = Math.floor(cursorOffset / (width / ProcessPage.activeGridCount));
            this.pushNewTimer(index);
        } else if (this.state.currentIndex !== -1) {
            this.setState({
                currentIndex: -1
            });
        }
    };

    protected pushNewTimer(index: number): void {
        // if current grid already active or timer for it active
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
        }, ProcessPage.animationDuration);

        this.setState(({className}) => ({
            className: concat(
                className,
                `from-${index + 1}`
            ),
            currentIndex: index
        }));
    }

    protected async demonstrate(index: number): Promise<void> {
        if (!ProcessPage.demonstrationMode) {
            return;
        }

        this.pushNewTimer(index);

        if (index === ProcessPage.activeGridCount - 1) {
            index = -1;
            // delay before new cycle
            await (new Promise((r) => setTimeout(r, ProcessPage.demonstrationDuration)));
        }

        this.clearTimeout();
        this.timer = setTimeout(
            this.demonstrate && this.demonstrate.bind(this, index + 1),
            ProcessPage.demonstrationDelay
        );
    }
}
