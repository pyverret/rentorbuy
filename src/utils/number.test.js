import {onlyPositiveNumber, percentageIncrease, investmentAmount, compoundInterest} from './number';

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
})