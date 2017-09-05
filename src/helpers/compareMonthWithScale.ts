export function compareMonthWithScale(month: number, scale: number, pointsCount: number): boolean {
    return Math.round(month / 2) === (scale < pointsCount / 2 ? scale + 1 : scale)
}
