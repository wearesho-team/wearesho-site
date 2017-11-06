export interface ElementCoords {
    top: number,
    left: number
}

export function getElementCoords(elem: HTMLElement): ElementCoords {
    const rect = elem.getBoundingClientRect();
    const {body, documentElement} = document;

    const scrollTop = window.pageYOffset || documentElement.scrollTop || body.scrollTop;
    const scrollLeft = window.pageXOffset || documentElement.scrollLeft || body.scrollLeft;

    const clientTop =  documentElement.clientTop || body.clientTop || 0;
    const clientLeft =  documentElement.clientLeft || body.clientLeft || 0;

    return {
        top: rect.top + scrollTop - clientTop,
        left: rect.left + scrollLeft - clientLeft
    };
}
