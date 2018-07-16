import * as React from "react";

import { RouterContextTypes, RouterContext } from "data/RouterContext";
import { PreLoader } from "components/PreLoader";

export class PreloaderLinkButton extends React.Component<React.HTMLProps<HTMLButtonElement> & { to: string }> {
    public static readonly contextTypes = RouterContextTypes;

    public readonly context: RouterContext;

    public render(): React.ReactNode {
        const { to, ...restProps } = this.props;
        return (
            <button type="button" {...restProps} onClick={this.handleClick}>
                {this.props.children}
            </button>
        );
    }

    protected handleClick = (): void => {
        PreLoader.show();
        setTimeout(() => {
            this.context.router.history.push(this.props.to);
        }, PreLoader.duration);
    }
}
