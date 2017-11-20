import {animateScroll} from "react-scroll";

import {getElementCoords} from "./getElementCoords";

export const smoothScrollTo = (element: HTMLElement,
                               offset: number,
                               direction: string,
                               duration: number,
                               delay: number): void => {
    element && animateScroll.scrollTo(getElementCoords(element)[direction] + offset, {
        duration, delay,
        smooth: true,
    });
};
