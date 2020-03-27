import React from 'react';
import {configure, shallow} from 'enzyme';
import RentTable from './RentTable';
import {percentageIncrease, investmentAmount, compoundInterest} from '../utils/number';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Rent Table', () => {
    const duration = 30;
    const rent = 100;
    const increase = 5;
    const investment = 15;
    const growth = 5;
    const rentTable = shallow(<RentTable 
        duration={duration}
        rent={rent}
        increase={increase}
        investment={investment}
        growth={growth} />);

    it('Table is not rendered', () => {    
        expect(rentTable.find('table').length).toBe(1); 
    });

    it('Body is not rendered', () => {    
        expect(rentTable.find('tbody').length).toBe(1); 
    });

    describe('Rows', () => {
        it('are not rendered', () => {
            expect(rentTable.find('tbody tr').length).toBe(duration); 
        });

        it('Year number is wrong', () => {
            const years = rentTable.find('.year');

            years.forEach((node, index) => {
                const text = (index + 1).toString();
                expect(node.text()).toBe(text);
            });
        });

        it('Rent amount is wrong', () => {
            const rents = rentTable.find('.rent');
            let rentAmount = rent;

            rents.forEach((node, index) => {
                const counter = index + 1;
                rentAmount = percentageIncrease(rentAmount, increase, counter);

                expect(node.text()).toBe(rentAmount.toString());
            });
        });

        it('Yearly Rent amount is wrong', () => {
            const rents = rentTable.find('.rent-yearly');
            let rentAmount = rent;

            rents.forEach((node, index) => {
                const counter = index + 1;
                rentAmount = percentageIncrease(rentAmount, increase, counter);
                const rentAmountYearly = (rentAmount * 12).toFixed(2);

                expect(node.text()).toBe(rentAmountYearly.toString());
            });
        });

        it('Investment amount is wrong', () => {
            const rents = rentTable.find('.investment');

            rents.forEach((node, index) => {
                const year = index + 1;
                const investmentValue = investmentAmount(investment, year);

                expect(node.text()).toBe(investmentValue.toString());
            });
        });

        it('Value of investment amount is wrong', () => {
            const growthRows = rentTable.find('.investment-value');

            growthRows.forEach((node, index) => {
                const year = index + 1;
                const investmentValue = investmentAmount(investment, year);
                const growthAmount = compoundInterest(investmentValue, growth, year);

                expect(node.text()).toBe(growthAmount.toString());
            });
        });
    });
});