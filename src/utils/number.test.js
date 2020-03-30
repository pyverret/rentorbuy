import {onlyPositiveNumber, percentageIncrease, investmentAmount, compoundInterest, floatSum, floatMinus} from './number';

describe('Number Util', () => {
    describe('onlyPositiveNumber', () => {
        it('0 to be 0', () => {
            expect(onlyPositiveNumber(0)).toBe(0);
        });

        it('"0" to be 0', () => {
            expect(onlyPositiveNumber('0')).toBe(0);
        });

        it('1 to be 1', () => {
            expect(onlyPositiveNumber(1)).toBe(1);
        });

        it('"1" to be 1', () => {
            expect(onlyPositiveNumber('1')).toBe(1);
        });

        it('-1 to be 0', () => {
            expect(onlyPositiveNumber(-1)).toBe(0);
        });

        it('"RandomString" to be 0', () => {
            expect(onlyPositiveNumber('RandomString')).toBe(0);
        });

        it('[1,2,3] to be 0', () => {
            expect(onlyPositiveNumber([1,2,3])).toBe(0);
        });

        it('{key:"value"} to be 0', () => {
            expect(onlyPositiveNumber({key:'value'})).toBe(0);
        });
    });

    describe('percentageIncrease', () => {
        const amount = 100;
        const percentage = 10;

        it('100 + 10% for year 1 = 100', () => {
            expect(percentageIncrease(amount, percentage, 1)).toBe('100.00');
        });

        it('100 + 10% for 2 year = 101', () => {
            expect(percentageIncrease(amount, percentage, 2)).toBe('110.00');
        });

        it('100 + 10% for 3 year = 101', () => {
            expect(percentageIncrease(amount, percentage, 3)).toBe('110.00');
        });
    });

    describe('investmentAmount', () => {
        const amount = 100;

        it('100 per year for 1 year', () => {
            expect(investmentAmount(amount, 1)).toBe('1200.00');
        });

        it('100 per year for 2 year', () => {
            expect(investmentAmount(amount, 2)).toBe('2400.00');
        });
    });

    describe('compoundInterest', () => {
        const amount = 100;
        const percentage = 10;

        it('100 and 10% no year specified', () => {
            expect(compoundInterest(amount, percentage)).toBe('110.00');
        });

        it('100 and 10% for 1 year', () => {
            expect(compoundInterest(amount, percentage, 1)).toBe('110.00');
        });

        it('100 and 10% for 2 year', () => {
            expect(compoundInterest(amount, percentage, 2)).toBe('121.00');
        });
    });

    describe('floatSum', () => {
        it('[] = 0', () => {
            expect(floatSum([])).toBe('0.00');
        });

        it('[0] = 0', () => {
            expect(floatSum([0])).toBe('0.00');
        });

        it('[0, 1] = 1', () => {
            expect(floatSum([0, 1])).toBe('1.00');
        });

        it('[0.001, 1.1, 1.01] = 2.11', () => {
            expect(floatSum([0.001, 1.1, 1.01])).toBe('2.11');
        });

        it('[2, 2.11, "2.22"] = 6.33', () => {
            expect(floatSum([2, 2.11, '2.22'])).toBe('6.33');
        });

        it('[3, 2, -1.123] = 3.88', () => {
            expect(floatSum([3, 2, -1.123])).toBe('3.88');
        });
    });

    describe('floatMinus', () => {
        it('[] = 10', () => {
            expect(floatMinus(10)).toBe('10.00');
        });

        it('10 - [] = 10', () => {
            expect(floatMinus(10, [])).toBe('10.00');
        });

        it('10 - [0] = 10', () => {
            expect(floatMinus(10, [0])).toBe('10.00');
        });

        it('10 - [0, 1] = 9', () => {
            expect(floatMinus(10, [0, 1])).toBe('9.00');
        });

        it('10 - [0.001, 1.1, 1.01] = 7.89', () => {
            expect(floatMinus(10, [0.001, 1.1, 1.01])).toBe('7.89');
        });

        it('"10.44" - [2, 2.11, "2.22"] = 4.11', () => {
            expect(floatMinus('10.44', [2, 2.11, "2.22"])).toBe('4.11');
        });

        it('10 - [3, 2, -1.123] = 6.12', () => {
            expect(floatMinus(10, [3, 2, -1.123])).toBe('6.12');
        });
    });
})