import React from "react";
import {Languages} from "../../data/Languages";

export interface LayoutContextType {
    isScrollDisabled?: boolean,
    language?: Languages,
    setLanguage?: (nextLanguage: Languages) => void,
}

export const LayoutContext = React.createContext<LayoutContextType>({language: Languages.ru});

