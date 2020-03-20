export function onlyPositiveNumber (number) {
    if (number > 0) {
        return parseFloat(number);
    }

    return number === '' ? '' : 0;
}

export function percentageIncrease (amount, increase, index) {
    return index > 1 ? amount * (1 + increase / 100) : amount;
}

export default {onlyPositiveNumber, percentageIncrease};