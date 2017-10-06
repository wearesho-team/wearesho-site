export function toFixed(precision: number, value: number): string {
    if (precision <= 0) {
        return;
    }
    const beforeValue = Array(precision - 1).fill("0").join("");

    return String(beforeValue + value).slice(precision * (-1));
}
