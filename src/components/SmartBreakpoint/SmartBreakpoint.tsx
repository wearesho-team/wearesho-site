import * as React from "react";

import {ElementWithTimer, smartClearTimeout} from "../../helpers/smartClearTimeout";

import {SmartBreakpointProps, SmartBreakpointPropTypes} from "./SmartBreakpointProps";
import {SmartBreakpointState} from "./SmartBreakpointState";

export class SmartBreakpoint extends React.Component<SmartBreakpointProps, SmartBreakpointState>
    implements ElementWithTimer {
    
    public static propTypes = SmartBreakpointPropTypes;
    
    public timer: any;
    public clearTimeout = smartClearTimeout.bind(this);
    
    constructor(props) {
        super(props);
        
        if (!this.props.delay) {
            this.state = {
                matches: window.matchMedia(`(${this.props.match})`).matches
            };
        } else {
            this.state = {
                matches: false
            };
            
            this.clearTimeout();
            this.timer = setTimeout(() => {
                this.setState({
                    matches: window.matchMedia(`(${this.props.match})`).matches
                });
            }, this.props.delay);
        }
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
    };
}
