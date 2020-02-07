import {getNumberPlusPercent, numberToPercent} from './utils';

describe('Add Percent to Number', () => {
    describe('Empty', () => {
        it('Null, Null to 0', () => {
            expect(getNumberPlusPercent(null, null)).toEqual(0);
        });

        it('undefined, undefined to 0', () => {
            expect(getNumberPlusPercent(undefined, undefined)).toEqual(0);
        });

        it('Empty String, Empty String to 0', () => {
            expect(getNumberPlusPercent('', '')).toEqual(0);
        });
    });

    describe('String', () => {
        it('0, 0 to 0', () => {
            expect(getNumberPlusPercent('0', '0')).toEqual(0);
        });

        it('100, 1 to 101', () => {
            expect(getNumberPlusPercent('100', '1')).toEqual(101);
        });

        it('50, 1 to 50.5', () => {
            expect(getNumberPlusPercent('50', '1')).toEqual(50.5);
        });

        it('0, 1 to 0', () => {
            expect(getNumberPlusPercent('0', '1')).toEqual(0);
        });

        it('100, 0 to 100', () => {
            expect(getNumberPlusPercent('100', '0')).toEqual(100);
        });

        it('100, 100 to 200', () => {
            expect(getNumberPlusPercent('100', '100')).toEqual(200);
        });
    });

    describe('Integer', () => {
        it('0, 0 to 0', () => {
            expect(getNumberPlusPercent(0, 0)).toEqual(0);
        });

        it('100, 1 to 101', () => {
            expect(getNumberPlusPercent(100, 1)).toEqual(101);
        });

        it('50, 1 to 50.5', () => {
            expect(getNumberPlusPercent(50, 1)).toEqual(50.5);
        });

        it('0, 1 to 0', () => {
            expect(getNumberPlusPercent(0, 1)).toEqual(0);
        });

        it('100, 0 to 100', () => {
            expect(getNumberPlusPercent(100, 0)).toEqual(100);
        });

        it('100, 100 to 200', () => {
            expect(getNumberPlusPercent(100, 100)).toEqual(200);
        });
    });

    describe('Number with decimal', () => {
        it('0, 0.5 to 0', () => {
            expect(getNumberPlusPercent(0, 0)).toEqual(0);
        });

        it('50.5, 0.5 to 50.7525', () => {
            expect(getNumberPlusPercent(50.5, 0.5)).toEqual(50.7525);
        });

        it('50.5, 1 to 51.005', () => {
            expect(getNumberPlusPercent(50.5, 1)).toEqual(51.005);
        });

        it('100, 0.5 to 100.5', () => {
            expect(getNumberPlusPercent(100, 0.5)).toEqual(100.5);
        });
    });
});

describe('Convert Value to Percentage', () => {
    describe('Empty', () => {
        it('Null to Zero', () => {
            expect(numberToPercent(null)).toEqual(0);
        });
    
        it('Empty String to Zero', () => {
            expect(numberToPercent('')).toEqual(0);
        });

        it('undefined to Zero', () => {
            expect(numberToPercent(undefined)).toEqual(0);
        });
    });
    
    describe('Strings', () => {
        it('0 to Zero', () => {
            expect(numberToPercent('0')).toEqual(0);
        });
    
        it('1 to 0.01', () => {
            expect(numberToPercent('1')).toEqual(0.01);
        });
    
        it('10 to 0.1', () => {
            expect(numberToPercent('10')).toEqual(0.1);
        });
    
        it('100 to 1', () => {
            expect(numberToPercent('100')).toEqual(1);
        });

        it('101 to 1.01', () => {
            expect(numberToPercent('101')).toEqual(1.01);
        });
    });

    describe('Integer', () => {
        it('0 to Zero', () => {
            expect(numberToPercent(0)).toEqual(0);
        });
    
        it('1 to 0.01', () => {
            expect(numberToPercent(1)).toEqual(0.01);
        });
    
        it('10 to 0.1', () => {
            expect(numberToPercent(10)).toEqual(0.1);
        });
    
        it('100 to 1', () => {
            expect(numberToPercent(100)).toEqual(1);
        });

        it('101 to 1.01', () => {
            expect(numberToPercent(101)).toEqual(1.01);
        });
    });

    describe('Number With Decimal', () => {
        it('0.1 to 0.001', () => {
            expect(numberToPercent(0.1)).toEqual(0.001);
        });
    
        it('1.1 to 0.011', () => {
            expect(numberToPercent(1.2)).toEqual(0.012);
        });

        it('1.11 to 0.0111', () => {
            expect(numberToPercent(1.23)).toEqual(0.0123);
        });
    });
});