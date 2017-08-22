/**
 * Created by horat1us on 6/13/17.
 */
import { layoutGenerator } from "react-break";

const layout = layoutGenerator({
    desktop: 1025,
    mobile: 0,
    tablet: 768,
});

export const OnMobile = layout.is("mobile");
export const OnTablet = layout.is("tablet");
export const OnDesktop = layout.is("desktop");
export const OnTabletDesktop = layout.isAtLeast("tablet");
