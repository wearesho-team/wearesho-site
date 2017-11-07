import * as React from "react";
import * as ReactDOM from "react-dom";

import {animateScroll} from "react-scroll";
import {TransitionGroup, CSSTransition} from "react-transition-group";

import {concat} from "../../../../helpers/concat";
import {getElementCoords} from "../../../../helpers/getElementCoords";

export class TransformAnimation extends React.Component<any, any> {
    // offset according to header height + blur
    public static readonly additionalOffset = 105;

    constructor(props) {
        super(props);

        this.state = {
            transformed: false
        }
    }

    public render(): JSX.Element {
        const transitionProps = {
            classNames: "transform",
            key: this.state.transformed,
            timeout: this.props.duration,
        };

        const rootProps = {
            className: "inner-layout",
            [this.props.event]: this.handleEvent
        };

        return (
            <TransitionGroup className={this.containerClassName}>
                <CSSTransition {...transitionProps}>
                    <div {...rootProps}>
                        {this.innerLayout}
                    </div>
                </CSSTransition>
                {this.props.staticComponent}
            </TransitionGroup>
        );
    }

    protected get containerClassName(): string {
        return concat(
            this.props.className,
            this.state.transformed ? "transformed" : "initial"
        )
    }

    protected get innerLayout(): JSX.Element {
        return this.state.transformed
            ? this.props.transformedComponent
            : this.props.initialComponent;
    }

    protected handleEvent = () => {
        if (this.state.transformed) {
            return;
        }

        this.setState({transformed: true});

        const container: HTMLElement = ReactDOM.findDOMNode(this);

        container &&
        animateScroll.scrollTo(getElementCoords(container).top - TransformAnimation.additionalOffset, {
            duration: this.props.duration,
            delay: 0,
            smooth: true,
        });
    }
}
