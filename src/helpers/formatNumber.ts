export const formatNumber = (tel: string | number, format: string): string => {
    const numberArray = tel.toString().split("");
    const formatArray = format.split("");
    let formattedNumber = "";

    let counter = 0;

    formatArray.forEach((char) => {
        if (counter >= numberArray.length) {
            return;
        }

        if (char === "x") {
            formattedNumber += numberArray[counter];
            counter++;
        } else {
            formattedNumber += char;
        }
    });

    return formattedNumber;
};
