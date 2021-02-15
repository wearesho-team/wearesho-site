import React from "react";
import {LayoutContext} from "../components/Layout";
import {Languages} from "../data/Languages";

export type LanguageProps = {
    language: Languages
}

type BaseProps = React.PropsWithRef<LanguageProps>

type ModifyProps<P extends BaseProps> = Omit<P, keyof LanguageProps>

type ReturnType<P extends BaseProps, T> = React.ForwardRefExoticComponent<React.PropsWithoutRef<ModifyProps<P>> & React.RefAttributes<T>>

export const withLanguage = <P extends BaseProps, T extends Element>(component: React.ComponentType<P>): ReturnType<P, T> =>
    React.forwardRef<T, ModifyProps<P>>((props, ref) => {
        const context = React.useContext(LayoutContext);
        
        const nextProps = {
            ...props,
            ref,
            language: context.language
        };
        
        return React.createElement<ModifyProps<P>>(
            component,
            nextProps as ModifyProps<P>
        );
    });
