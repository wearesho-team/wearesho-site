import * as React from "react";

import {checkForStringArrayInstance} from "../../../../helpers/checkForStringArrayInstance";
import {ElementWithTimer, smartClearTimeout} from "../../../../helpers/smartClearTimeout";
import {checkForStringInstance} from "../../../../helpers/checkForStringInstance";

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

        let targetAttribute = this.props.startFeature.element.getAttribute(this.props.startFeature.attribute);
        !targetAttribute && (targetAttribute = "");

        if (targetAttribute.includes(this.props.startFeature.value)) {
            this.state = {
                ...this.state,
                ...{
                    children: this.getFormattedChild(this.props.children)
                }
            };
            return;
        }

        this.sourceChild = this.getFormattedChild(this.props.children);
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
        this.type = undefined;
        this.observer.disconnect();
    }

    public componentWillReceiveProps(nextProps: CodeStyleAnimationProps) {
        if (this.state.children.toString() === nextProps.children) {
            return;
        }

        this.setState({children: this.getFormattedChild(nextProps.children)});
    }

    public render(): any {
        return this.state.children;
    }

    protected type() {
        if (this.state.counter > this.sourceChild.length) {
            this.clearCaret();
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
    };

    protected get caret(): JSX.Element {
        return <i key="caret" className="caret"/>;
    }

    protected getFormattedChild(children: CodeStyleAnimationProps["children"]): string {
        if (checkForStringInstance(children)) {
            return children.toString();
        } else if (checkForStringArrayInstance(children)) {
            return (children as string []).join("\n");
        }

        throw new Error("Incorrect type of children. Only string or string [] are available");
    }

    protected clearCaret() {
        this.clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.setState((prevState) => ({
                children: prevState.children[0] + prevState.children[2]
            }));
        }, this.props.caretTimeout);
        this.observer.disconnect();
    }
}
