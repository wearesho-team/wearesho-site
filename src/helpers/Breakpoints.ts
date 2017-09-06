import {layoutGenerator} from "react-break";

const layout: any = layoutGenerator({
    desktop: 1280,
    mobile: 0,
    tablet: 768,
});

export const OnMobile = layout.is("mobile");
export const OnTablet = layout.is("tablet");
export const OnDesktop = layout.is("desktop");
export const OnTabletDesktop = layout.isAtLeast("tablet");
export const OnMobileTablet = layout.isAtMost("tablet");
