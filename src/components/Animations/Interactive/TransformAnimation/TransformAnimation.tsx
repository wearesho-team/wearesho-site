import * as React from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";

import {concat} from "../../../../helpers/concat";
import {isFunction} from "../../../../helpers/isFunction";

import {TransformAnimationState} from "./TransformAnimationState";
import {TransformAnimationProps, TransformAnimationPropTypes} from "./TransformAnimationProps";

export class TransformAnimation extends React.Component<TransformAnimationProps, TransformAnimationState> {
    public static readonly propTypes = TransformAnimationPropTypes;

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

    protected get innerLayout(): JSX.Element | JSX.Element [] {
        return this.state.transformed
            ? this.props.transformedComponent
            : this.props.initialComponent;
    }

    protected handleEvent = () => {
        if (this.state.transformed) {
            return;
        }

        this.setState({transformed: true});

        if (isFunction(this.props.onEvent)) {
            this.props.onEvent();
        }
    }
}
