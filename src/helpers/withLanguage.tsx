import React from "react";
import {LayoutContext, LayoutContextValue} from "../components/Layout";
import {Languages} from "../data/Languages";

export type LanguageProps = {
    language: Languages
}

export type WithLanguage = <P extends object>(component: React.ComponentType<P>) => React.ComponentType<Omit<P, keyof LanguageProps>>

export const withLanguage: WithLanguage = <P extends object>(component) => class extends React.Component<P> {
    public static readonly contextType = LayoutContext;
    public context: LayoutContextValue;
    
    render() {
        const props: P & LanguageProps = {
            ...this.props,
            language: this.context.language
        };
        
        return React.createElement(
            component,
            props
        );
    }
};
