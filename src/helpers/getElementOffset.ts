export function getOffset(element: HTMLElement): number {
    return element.offsetLeft + (element.parentNode as HTMLElement).offsetLeft;
}
