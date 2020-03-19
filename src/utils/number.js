export function onlyPositiveNumber (number) {
    if (number > 0) {
        return parseFloat(number);
    }

    return 0;
}

export default {onlyPositiveNumber};