import * as React from "react";
import {SmartBreakpointProps, SmartBreakpointPropTypes} from "./SmartBreakpointProps";
import {SmartBreakpointState} from "./SmartBreakpointState";

export class SmartBreakpoint extends React.Component<SmartBreakpointProps, SmartBreakpointState> {
    public static propTypes = SmartBreakpointPropTypes;

    public componentWillMount() {
        this.state = {
            matches: window.matchMedia(`(${this.props.match})`).matches
        };
    }

    public componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    public componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    public render(): any {
        return this.state.matches && this.props.children;
    }

    protected handleResize = () => {
        if (window.matchMedia(`(${this.props.match})`).matches === this.state.matches) {
            return;
        }

        this.setState({
            matches: window.matchMedia(`(${this.props.match})`).matches
        });
    }

}
