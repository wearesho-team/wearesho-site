import {layoutGenerator} from "react-break";

const layout: any = layoutGenerator({
    mobile: 0,
    tablet: 768,
    desktop: 1280
});

export const OnMobile = layout.is("mobile");
export const OnTablet = layout.is("tablet");
export const OnDesktop = layout.is("desktop");
export const OnTabletDesktop = layout.isAtLeast("tablet");
export const OnMobileTablet = layout.isAtMost("tablet");
