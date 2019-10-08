import * as React from "react";
import { SmartBreakpoint } from "react-breakpoint";

export const OnMobile: React.FC<{}> = (props) => React.createElement(SmartBreakpoint, {
    ...props,
    match: ["max-width: 767px"],
});
export const OnTablet: React.FC<{}> = (props) => React.createElement(SmartBreakpoint, {
    ...props,
    match: ["max-width: 1279px", "min-width: 768px"],
});
export const OnDesktop: React.FC<{}> = (props) => React.createElement(SmartBreakpoint, {
    ...props,
    match: ["min-width: 1280px"],
});
export const OnTabletDesktop: React.FC<{}> = (props) => React.createElement(SmartBreakpoint, {
    ...props,
    match: ["min-width: 768px"],
});
export const OnMobileTablet: React.FC<{}> = (props) => React.createElement(SmartBreakpoint, {
    ...props,
    match: ["max-width: 1279px"],
});
