export function compareArrays(arrayOne: any [], arrayTwo: any []): boolean {
    return (arrayOne.length === arrayTwo.length) && arrayOne.every((element, i) => element === arrayTwo[i]);
}
