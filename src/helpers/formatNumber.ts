export const formatNumber = (tel: string | number, format: string): any => {
    const numberArray = tel.toString().split("");
    const formatArray = format.split("");

    return formatArray
        .map((char) => char !== "x" ? char : numberArray.shift() || char)
        .join("");
};
