// TODO: TEST FILE

export function onlyPositiveNumber (number) {
    if (number > 0) {
        return parseFloat(number);
    }

    return number === '' ? '' : 0;
}

export function percentageIncrease (amount, increase, index) {
    return index > 1 ? (amount * (1 + increase / 100)).toFixed(2) : amount.toFixed(2);
}

export function investmentAmount (amount, year) {
    return ((amount * 12) * year).toFixed(2);
}

export function compoundInterest (amount, percentage, years = 1) {
    const compounded = amount * Math.pow(1 + percentage / 100, years);

    return compounded.toFixed(2);
}

export default {onlyPositiveNumber, percentageIncrease, investmentAmount, compoundInterest};