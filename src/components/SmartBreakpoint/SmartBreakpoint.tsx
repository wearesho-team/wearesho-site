import * as React from "react";

export class SmartBreakpoint extends React.Component<any, any> {

    protected matches: boolean = false;

    public componentWillMount() {
        this.matches = window.matchMedia(`(${this.props.match})`).matches;
    }

    public componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    public componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    public render() {
        return this.matches && this.props.children;
    }

    protected handleResize = () => {
        if (window.matchMedia(`(${this.props.match})`).matches === this.matches) {
            return;
        }

        this.matches = window.matchMedia(`(${this.props.match})`).matches;
        this.forceUpdate();
    }
}
