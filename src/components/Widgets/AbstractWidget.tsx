import * as React from "react";
import {ElementWithTimer, smartClearTimeout} from "../../helpers/smartClearTimeout";
import {AbstractWidgetState} from "./AbstractWidgetState";
import {TransitionSwitch} from "../TransitionSwitch/TransitionSwitch";

export abstract class AbstractWidget<T>extends React.Component<T, AbstractWidgetState> implements ElementWithTimer {
    public timer: any;
    public state: AbstractWidgetState = {
        readyToMount: false
    };

    protected additionalTimeout = 100;
    protected clearTimeout = smartClearTimeout.bind(this);

    public componentWillMount() {
        this.clearTimeout(this.timer);

        this.timer = setTimeout(() => {
            this.setState({readyToMount: true});
        }, TransitionSwitch.animationDuration + this.additionalTimeout);
    }

    public abstract componentWillUnmount();
}
