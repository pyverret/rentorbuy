export function onlyPositiveNumber (number) {
    if (number > 0) {
        return parseFloat(number);
    }

    return number === '' ? '' : 0;
}

export function percentageIncrease (amount, increase, index) {
    return index > 1 ? (amount * (1 + increase / 100)).toFixed(2) : amount.toFixed(2);
}

export default {onlyPositiveNumber, percentageIncrease};