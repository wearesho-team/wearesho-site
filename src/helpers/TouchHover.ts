import * as React from "react";

const delay = 600;
let timer: any;

const touchHandler = (event: React.TouchEvent<HTMLElement>) => {
    const element = event.currentTarget;
    element.classList.add("is-active");

    clearTimeout(timer);
    timer = setTimeout(() => {
        element.classList.remove("is-active");
    }, delay);
};

export const TouchHover = {
    onTouchEnd: touchHandler,
    onTouchStart: touchHandler,
};
