export function getElementOffset(element: HTMLElement): number {
    const yearItem = element.parentNode as HTMLElement;
    const container = yearItem.parentNode as HTMLElement;

    return (element.offsetLeft + yearItem.offsetLeft) / container.getBoundingClientRect().width * 100;
}
