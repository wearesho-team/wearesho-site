import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from "react-router-dom"

import { ElementWithTimer, smartClearTimeout } from "../../../helpers/smartClearTimeout";
import { getElementCoords } from "../../../helpers/getElementCoords";
import { OnTabletDesktop } from "../../../helpers/Breakpoints";
import { translate } from "../../../helpers/translate";
import { concat } from "../../../helpers/concat";

import { SmartBreakpoint } from "../../SmartBreakpoint";
import { ProcessStructure } from "../../Icons/ProcessStructure";
import { getCorners } from "../../Buttons";
import { ProcessPageState } from "./ProcessPageState";
import { Stages } from "./Stages/Stages";
import { BasePage } from "../BasePage";

export class ProcessPage extends BasePage<{}, ProcessPageState> implements ElementWithTimer {
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

        this.timers = [];
    }

    public shouldComponentUpdate(nextProps: any, nextState: any) {
        return nextState.className !== this.state.className;
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
        this.timers.forEach(clearTimeout);

        this.timers = [];
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
                <OnTabletDesktop>
                    <ProcessStructure/>
                </OnTabletDesktop>
                <div className="align-container">
                    <h2 className="section__title">{translate("processPage.title")}</h2>
                    <div className="section__half half_first">
                        <div className="align-container">
                            <h4 className="section__subtitle">
                                {translate("processPage.subTitlePart1")}
                                <span>{translate("processPage.subTitlePart2")}</span>
                            </h4>
                            <p className="section__text">
                                {translate("processPage.text1")}
                            </p>
                        </div>
                        <div className="align-container">
                            <h5>{translate("processPage.text2")}</h5>
                            <Link className="btn btn_primary" to="/partnership">
                                {translate("buttons.cooperate")}
                                {getCorners()}
                            </Link>
                        </div>
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

    protected setContainer = (element: Stages) => this.stagesContainer = ReactDOM.findDOMNode(element) as HTMLElement;

    protected handleHoverControl = (event: MouseEvent | TouchEvent): void => {
        if (!this.stagesContainer) {
            return;
        }

        const clientX = event.hasOwnProperty("touches")
            ? (event as TouchEvent).touches[ 0 ].clientX
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
            this.state.currentIndex === index
            || this.timers[ index ] !== undefined
            || isNaN(index)
        ) {
            return;
        }

        this.timers[ index ] = setTimeout(() => {
            this.setState(({ className }) => ({
                className: className.replace(new RegExp(`([\\s]\*from-${index + 1}[\\s]\*)`), " ").trim()
            }));

            clearTimeout(this.timers[ index ]);
            this.timers[ index ] = undefined;
        }, ProcessPage.animationDuration);

        this.setState(({ className }) => ({
            className: concat(
                className,
                `from-${index + 1}`
            ),
            currentIndex: index
        }));
    }

    protected async demonstrate(index: number): Promise<void> {
        if (!ProcessPage.demonstrationMode || !this.stagesContainer) {
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
