import * as React from "react";

import {routeProps} from "../../data/routeProps";

export class ScrollControl extends React.Component<any, any> {

    protected childrenDOM: HTMLCollection;

    public componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    public render() {
        return (
            <div className="scroll-container" ref={this.setChildren}>
                {this.props.children}
            </div>
        );
    }

    protected setChildren = (ref: HTMLElement) => this.childrenDOM = ref.children;

    protected handleScroll = () => {
        console.log(window.pageYOffset);
        // routeProps.map((e, i) => {
        //     console.log(this.childrenDOM.item(i));
        // });
    }
}
