import * as React from "react";

import {concat} from "../../../helpers/concat";
import {ElementWithTimer, smartClearTimeout} from "../../../helpers/smartClearTimeout";

import {CustomAnimationDefaultProps, CustomAnimationProps, CustomAnimationPropTypes} from "./CustomAnimationProps";
import {CustomAnimationState} from "./CustomAnimationState";

export class CustomAnimation extends React.Component<CustomAnimationProps, CustomAnimationState>
    implements ElementWithTimer {

    public static readonly propTypes = CustomAnimationPropTypes;
    public static readonly defaultProps = CustomAnimationDefaultProps;

    public timer: any;

    protected clearTimeout = smartClearTimeout.bind(this);
    protected observer = new MutationObserver((mutations) => {
        const {target} = mutations[0];

        const {element, attribute, value} = this.props.startFeature;
        if (target !== element || target.attributes.getNamedItem(attribute).value !== value) {
            return;
        }

        this.clearTimeout(this.timer);
        this.timer = setTimeout(this.setNewChild.bind(this), this.props.delay);
    });

    public constructor(props) {
        super(props);

        if (document.body.className.includes("loaded")) {
            this.state = {
                children: this.props.children
            };
            return;
        }

        this.observer.observe(document.body, {attributeFilter: [this.props.startFeature.attribute], attributes: true});
        this.state = {
            children: React.cloneElement(this.props.children, {style: {opacity: 0}})
        };
    }

    public componentWillUnmount() {
        this.clearTimeout(this.timer);
        this.observer.disconnect();
    }

    public componentWillReceiveProps(nextProps: CustomAnimationProps) {
        if (this.state.children === nextProps.children) {
            return;
        }

        this.setState({children: nextProps.children});
    }

    public render(): JSX.Element {
        return this.state.children;
    }

    protected setNewChild() {
        const childProps = {
            className: concat(
                this.props.children.props.className,
                this.props.actionClassName
            )
        };

        this.setState({
            children: React.cloneElement(this.props.children, childProps)
        });

        this.clearTimeout(this.timer);
        this.timer = setTimeout(this.setOldChild.bind(this), this.props.duration);
    };

    protected setOldChild() {
        this.setState({
            children: this.props.children
        });

        this.observer.disconnect();
    };
}
