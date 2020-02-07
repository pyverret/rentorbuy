
export const getNumberPlusPercent = (amount, percent) => {
    amount = parseFloat(amount);
    percent = parseFloat(percent);

    const totalAmount = amount + (amount * numberToPercent(percent));

    return isNaN(totalAmount) ? 0 : totalAmount;
}

export const numberToPercent = (number) => {
    return isNaN(number) ? 0 : Number(parseFloat(number/100).toFixed(4));
}

export default {getNumberPlusPercent, numberToPercent};