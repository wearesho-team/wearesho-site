import React from "react";
import {LayoutContext} from "../components/Layout";
import {Languages} from "../data/Languages";

export type LanguageProps = {
    language: Languages
}

export type WithLanguage = <P extends object>(component: React.ComponentType<P>) => React.ComponentType<Omit<P, keyof LanguageProps>>

export const withLanguage: WithLanguage = <P extends object>(component) => (props) => {
    const context = React.useContext(LayoutContext);
    
    return React.createElement(
        component,
        {
            ...props,
            language: context.language
        }
    );
};
