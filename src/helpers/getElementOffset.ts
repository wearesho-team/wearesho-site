export function getElementOffset(element: HTMLElement): number {
    return element.offsetLeft + (element.parentNode as HTMLElement).offsetLeft;
}
