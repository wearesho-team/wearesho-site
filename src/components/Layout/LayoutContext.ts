import React from "react";
import {Languages} from "../../data/Languages";

export interface LayoutContextValue {
    isScrollDisabled?: boolean,
    language?: Languages,
    setLanguage?: (nextLanguage: Languages) => void,
}

export const LayoutContext = React.createContext<LayoutContextValue>({language: Languages.ru});

