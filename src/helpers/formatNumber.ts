export const formatNumber = (tel: string | number, format: string): string => {
    const numberArray = tel.toString().split("");
    const formatArray = format.split("");
    const formattedNumber = [];

    formatArray.map((char) => {
        formattedNumber.push(
            char !== "x"
                ? char
                : numberArray.shift()
        );
    });

    return formattedNumber.join("").trim();
};
