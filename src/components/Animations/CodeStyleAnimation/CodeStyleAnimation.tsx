import * as React from "react";

import {checkForStringArrayInstance} from "../../../helpers/checkForStringArrayInstance";
import {ElementWithTimer, smartClearTimeout} from "../../../helpers/smartClearTimeout";
import {checkForStringInstance} from "../../../helpers/checkForStringInstance";

import {
    CodeStyleAnimationDefaultProps,
    CodeStyleAnimationProps,
    CodeStyleAnimationPropTypes
} from "./CodeStyleAnimationProps";
import {CodeStyleAnimationState} from "./CodeStyleAnimationState";

export class CodeStyleAnimation extends React.Component<CodeStyleAnimationProps, CodeStyleAnimationState>
    implements ElementWithTimer {

    public static readonly propTypes = CodeStyleAnimationPropTypes;
    public static readonly defaultProps = CodeStyleAnimationDefaultProps;

    public timer: any;

    protected clearTimeout = smartClearTimeout.bind(this);
    protected sourceChild: string;

    protected observer = new MutationObserver((mutations) => {
        const {target} = mutations[0];

        const {element, attribute, value} = this.props.startFeature;
        if (target !== element || target.attributes.getNamedItem(attribute).value !== value) {
            return;
        }

        this.clearTimeout(this.timer);
        this.timer = setTimeout(this.type.bind(this), this.props.delay);
    });

    public constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            children: "",
        };

        // if on mount document loaded - show child completely
        if (document.body.className.includes("loaded")) {
            this.state = {
                ...this.state,
                ...{
                    children: this.props.children,
                }
            };
            return;
        }

        if (checkForStringInstance(this.props.children)) {
            this.sourceChild = this.props.children.toString();
        } else if (checkForStringArrayInstance(this.props.children)) {
            this.sourceChild = (this.props.children as string []).join("\n");
        }

        this.state = {
            ...this.state,
            ...{
                children: ["", undefined, this.sourceChild.replace(/[^\n]/g, " ")]
            }
        };

        this.observer.observe(document.body, {attributeFilter: [this.props.startFeature.attribute], attributes: true});
    }

    public componentWillUnmount() {
        this.clearTimeout(this.timer);
        this.observer.disconnect();
    }

    public componentWillReceiveProps(nextProps: CodeStyleAnimationProps) {
        if (this.state.children.toString() === nextProps.children) {
            return;
        }

        this.setState({children: nextProps.children});
    }

    public render(): any {
        return this.state.children;
    }

    protected type() {
        if (this.state.counter > this.sourceChild.length) {
            this.clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.setState((prevState) => ({
                    children: prevState.children[0] + prevState.children[2]
                }));
                this.observer.disconnect();
            }, this.props.caretTimeout);
            return;
        }

        this.setState((prevState) => ({
            children: [
                this.sourceChild.slice(0, prevState.counter),
                this.caret,
                (prevState.children[0] + prevState.children[2]).slice(prevState.counter, this.sourceChild.length)
            ],
            counter: prevState.counter + 1
        }));

        this.clearTimeout(this.timer);
        this.timer = setTimeout(
            this.type.bind(this),
            Math.random() * (this.props.speed.max - this.props.speed.min) + this.props.speed.min
        );
    }

    protected get caret(): JSX.Element {
        return <i key="caret" className="caret"/>;
    }
}
