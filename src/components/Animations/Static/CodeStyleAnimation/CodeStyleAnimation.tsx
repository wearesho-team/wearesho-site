import * as React from "react";
import {raf} from "../../../../helpers/imports/raf"

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

        this.clearTimeout();
        this.timer = setTimeout(this.type.bind(this), this.props.delay);
    });

    public constructor(props) {
        super(props);

        this.state = {
            counter: 1,
            children: "",
        };

        let targetAttribute = this.props.startFeature.element.getAttribute(this.props.startFeature.attribute);
        !targetAttribute && (targetAttribute = "");

        this.sourceChild = this.getFormattedChild(this.props.children);
        if (targetAttribute.includes(this.props.startFeature.value)) {
            this.state = {
                ...this.state,
                ...{
                    children: this.sourceChild
                }
            };
            return;
        }

        this.observer.observe(document.body, {attributeFilter: [this.props.startFeature.attribute], attributes: true});
    }

    public componentWillUnmount() {
        this.clearTimeout();
        raf.cancel(this.type);
        this.type = undefined;
        this.observer.disconnect();
    }

    public componentWillReceiveProps(nextProps: CodeStyleAnimationProps) {
        if (this.state.children.toString() === nextProps.children) {
            return;
        }

        this.sourceChild = this.getFormattedChild(nextProps.children);
        this.setState({children: this.sourceChild});
    }

    public render(): any {
        return [
            this.shadowChild,
            this.state.children
        ]
    }

    protected type() {
        this.clearTimeout();

        if (!this.type) {
            return;
        }

        if (this.state.counter > this.sourceChild.length) {
            this.clearCaret();
            return;
        }

        this.setState({
            children: this.visibleChild([this.sourceChild.slice(0, this.state.counter), this.caret]),
            counter: this.state.counter + 1
        });

        this.timer = setTimeout(
            raf(this.type.bind(this)),
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
            return (children as string[]).join("\n");
        }

        throw new Error("Incorrect type of children. Only string or string [] are available");
    }

    protected clearCaret() {
        this.clearTimeout();
        this.timer = setTimeout(() => {
            this.setState({
                children: this.sourceChild
            });
        }, this.props.caretTimeout);
        this.observer.disconnect();
        raf.cancel(this.type);
    }

    protected get shadowChild(): JSX.Element {
        return this.state.children !== this.sourceChild
            ? React.createElement("div", {
                style: {
                    opacity: 0
                },
                key: "shadowChild",
                children: this.getFormattedChild(this.props.children)
            })
            // tslint:disable:no-null-keyword
            : null;
    }

    protected visibleChild(children: any): JSX.Element {
        return React.createElement("div", {
            style: {
                position: "absolute",
                top: 0,
                left: 0
            },
            key: "visibleChild",
            children
        })
    }
}
