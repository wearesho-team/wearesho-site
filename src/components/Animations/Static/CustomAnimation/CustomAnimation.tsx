import * as React from "react";
import * as ReactDOM from "react-dom";

import { ElementWithTimer, smartClearTimeout } from "../../../../helpers/smartClearTimeout";

import { CustomAnimationDefaultProps, CustomAnimationProps, CustomAnimationPropTypes } from "./CustomAnimationProps";
import { CustomAnimationState } from "./CustomAnimationState";

export class CustomAnimation extends React.Component<CustomAnimationProps, CustomAnimationState>
    implements ElementWithTimer {

    public static readonly propTypes = CustomAnimationPropTypes;
    public static readonly defaultProps = CustomAnimationDefaultProps;

    public timer: any;

    protected clearTimeout = smartClearTimeout.bind(this);
    protected observer = new MutationObserver((mutations) => {
        const { target } = mutations[0] as any;

        const { element, attribute, value } = this.props.startFeature;
        if (target !== element || target.attributes.getNamedItem(attribute).value !== value) {
            return;
        }

        this.clearTimeout();
        this.timer = setTimeout(this.setNewChild.bind(this), this.props.delay);
    });

    public constructor(props) {
        super(props);

        this.state = {
            children: this.props.children
        }
    }

    public componentDidMount() {
        let targetAttribute = this.props.startFeature.element.getAttribute(this.props.startFeature.attribute);
        !targetAttribute && (targetAttribute = "");

        if (targetAttribute.includes(this.props.startFeature.value)) {
            return;
        }

        this.observer.observe(document.body, {
            attributeFilter: [this.props.startFeature.attribute],
            attributes: true
        });

        this.setState({
            DOMNode: ReactDOM.findDOMNode(this) as HTMLDivElement
        }, () => {
            this.state.DOMNode.setAttribute("style", "opacity: 0");
        });
    }

    public componentWillUnmount() {
        this.clearTimeout();
        this.observer.disconnect();
    }

    public componentDidUpdate(nextProps: CustomAnimationProps, nextState: CustomAnimationState) {
        if (this.state.DOMNode === nextState.DOMNode) {
            return;
        }

        this.setState({
            DOMNode: ReactDOM.findDOMNode(this) as HTMLDivElement
        });
    }

    public componentWillReceiveProps(nextProps: CustomAnimationProps) {
        this.setState({
            children: nextProps.children
        });
    }

    public render(): JSX.Element {
        return this.state.children;
    }

    protected setNewChild() {
        this.clearTimeout();

        this.state.DOMNode.classList.add(this.props.actionClassName);
        this.state.DOMNode.removeAttribute("style");

        this.timer = setTimeout(this.setOldChild.bind(this), this.props.duration);
    };

    protected setOldChild() {
        this.state.DOMNode.classList.remove(this.props.actionClassName);

        this.observer.disconnect();
    };
}
