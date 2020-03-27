import React from 'react';
import {configure, shallow} from 'enzyme';
import Home from './Home';
import * as Inputs from './utils/input';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Home Page', () => {
    const homePage = shallow(<Home />);

    describe('Static content', () => {
        it('Home Text Not Rendered', () => {
            const title = homePage.find('h1').text();
    
            expect(title).toBe('Home Text') 
        });
    });

    describe('Common Inputs', () => {
        describe('Number of year to compare', () => {
            const selector = 'duration';
            const input = homePage.find(`#${selector}`);
            const label = homePage.find({htmlFor: selector});
    
            it('Not Displayed', () => {
                expect(input.length).toEqual(1);
            });
    
            it('Wrong default value', () => {
                const defaultInput = Inputs.getInputByName(Inputs.commonFields, selector);
    
                expect(homePage.state()[selector]).toBe(defaultInput.value);
            });
    
            it('Label is wrong',() => {
                expect(label.text()).toEqual('Number of year to compare');
            });
    
            it("input Change", () => {
                input.props().onChange({target: {name: 'value', value: 123}});
    
                expect(homePage.state()[selector]).toBe(123);
            });
    
            it("Input Negative Number Return Zero", () => {
                input.props().onChange({target: { value: -1 }});
        
                expect(homePage.state()[selector]).toEqual(0);
            });
        });
    });

    describe('Rent Inputs', () => {
        describe('Monthly Rent', () => {
            const selector = 'rent-monthly';
            const input = homePage.find(`#${selector}`);
            const label = homePage.find({htmlFor: selector});
    
            it('Not Displayed', () => {    
                expect(input.length).toBe(1);
                expect(label.length).toBe(1);
            });
    
            it('Wrong default value', () => {
                const defaultInput = Inputs.getInputByName(Inputs.rentFields, selector);
    
                expect(homePage.state()[selector]).toBe(defaultInput.value);
            });
    
            it('Label is wrong',() => {
                expect(label.text()).toEqual('Monthly Rent Cost');
            });
    
            it("input Change", () => {
                input.props().onChange({target: {name: 'value', value: 123}});
    
                expect(homePage.state()[selector]).toBe(123);
            });
    
            it("Input Negative Number Return Zero", () => {
                input.props().onChange({target: { value: -1 }});
    
                expect(homePage.state()[selector]).toEqual(0);
            });
        });
    
        describe('Monthly Rent Increase', () => {
            const selector = 'rent-increase-percentage';
            const input = homePage.find(`#${selector}`);
            const label = homePage.find({htmlFor: selector});
    
            it('Not Displayed', () => {
                expect(input.length).toEqual(1);
            });
    
            it('Wrong default value', () => {
                const defaultInput = Inputs.getInputByName(Inputs.rentFields, selector);
    
                expect(homePage.state()[selector]).toBe(defaultInput.value);
            });
    
            it('Label is wrong',() => {
                expect(label.text()).toEqual('Yearly Rent Increase');
            });
    
            it("input Change", () => {
                input.props().onChange({target: {name: 'value', value: 123}});
    
                expect(homePage.state()[selector]).toBe(123);
            });
    
            it("Input Negative Number Return Zero", () => {
                input.props().onChange({target: { value: -1 }});
        
                expect(homePage.state()[selector]).toEqual(0);
            });
        });


        describe('Investment', () => {
            const selector = 'investment';
            const input = homePage.find(`#${selector}`);
            const label = homePage.find({htmlFor: selector});
    
            it('Not Displayed', () => {
                expect(input.length).toEqual(1);
            });
    
            it('Wrong default value', () => {
                const defaultInput = Inputs.getInputByName(Inputs.rentFields, selector);
    
                expect(homePage.state()[selector]).toBe(defaultInput.value);
            });
    
            it('Label is wrong',() => {
                expect(label.text()).toEqual('Investment Per Month');
            });
    
            it("input Change", () => {
                input.props().onChange({target: {name: 'value', value: 123}});
    
                expect(homePage.state()[selector]).toBe(123);
            });
    
            it("Input Negative Number Return Zero", () => {
                input.props().onChange({target: { value: -1 }});
        
                expect(homePage.state()[selector]).toEqual(0);
            });
        });
    
        describe('Investment Growth', () => {
            const selector = 'growth';
            const input = homePage.find(`#${selector}`);
            const label = homePage.find({htmlFor: selector});
    
            it('Not Displayed', () => {
                expect(input.length).toEqual(1);
            });
    
            it('Wrong default value', () => {
                const defaultInput = Inputs.getInputByName(Inputs.rentFields, selector);
    
                expect(homePage.state()[selector]).toBe(defaultInput.value);
            });
    
            it('Label is wrong',() => {
                expect(label.text()).toEqual('Investment growth');
            });
    
            it("input Change", () => {
                input.props().onChange({target: {name: 'value', value: 123}});
    
                expect(homePage.state()[selector]).toBe(123);
            });
    
            it("Input Negative Number Return Zero", () => {
                input.props().onChange({target: { value: -1 }});
        
                expect(homePage.state()[selector]).toEqual(0);
            });
        });
    });

    describe('Ownership Inputs', () => {
        describe('Property value', () => {
            const selector = 'property-value';
            const input = homePage.find(`#${selector}`);
            const label = homePage.find({htmlFor: selector});
    
            it('Not Displayed', () => {
                expect(input.length).toEqual(1);
            });
    
            it('Wrong default value', () => {
                const defaultInput = Inputs.getInputByName(Inputs.ownershipFields, selector);
    
                expect(homePage.state()[selector]).toBe(defaultInput.value);
            });
    
            it('Label is wrong',() => {
                expect(label.text()).toEqual('Property Value');
            });
    
            it("input Change", () => {
                input.props().onChange({target: {name: 'value', value: 123}});
    
                expect(homePage.state()[selector]).toBe(123);
            });
    
            it("Input Negative Number Return Zero", () => {
                input.props().onChange({target: { value: -1 }});
        
                expect(homePage.state()[selector]).toEqual(0);
            });
        });

        describe('Property value', () => {
            const selector = 'mortage-down-payment';
            const input = homePage.find(`#${selector}`);
            const label = homePage.find({htmlFor: selector});
    
            it('Not Displayed', () => {
                expect(input.length).toEqual(1);
            });
    
            it('Wrong default value', () => {
                const defaultInput = Inputs.getInputByName(Inputs.ownershipFields, selector);
    
                expect(homePage.state()[selector]).toBe(defaultInput.value);
            });
    
            it('Label is wrong',() => {
                expect(label.text()).toEqual('Down Payment');
            });
    
            it("input Change", () => {
                input.props().onChange({target: {name: 'value', value: 123}});
    
                expect(homePage.state()[selector]).toBe(123);
            });
    
            it("Input Negative Number Return Zero", () => {
                input.props().onChange({target: { value: -1 }});
        
                expect(homePage.state()[selector]).toEqual(0);
            });
        });

        describe('Amortization', () => {
            const selector = 'mortage-amortization';
            const input = homePage.find(`#${selector}`);
            const label = homePage.find({htmlFor: selector});
    
            it('Not Displayed', () => {
                expect(input.length).toEqual(1);
            });
    
            it('Wrong default value', () => {
                const defaultInput = Inputs.getInputByName(Inputs.ownershipFields, selector);
    
                expect(homePage.state()[selector]).toBe(defaultInput.value);
            });
    
            it('Label is wrong',() => {
                expect(label.text()).toEqual('Amortization period');
            });
    
            it("input Change", () => {
                input.props().onChange({target: {name: 'value', value: 123}});
    
                expect(homePage.state()[selector]).toBe(123);
            });
    
            it("Input Negative Number Return Zero", () => {
                input.props().onChange({target: { value: -1 }});
        
                expect(homePage.state()[selector]).toEqual(0);
            });
        });

        describe('Monthly mortage cost', () => {
            const selector = 'mortage-monthly';
            const input = homePage.find(`#${selector}`);
            const label = homePage.find({htmlFor: selector});
    
            it('Not Displayed', () => {
                expect(input.length).toEqual(1);
            });
    
            it('Wrong default value', () => {
                const defaultInput = Inputs.getInputByName(Inputs.ownershipFields, selector);
    
                expect(homePage.state()[selector]).toBe(defaultInput.value);
            });
    
            it('Label is wrong',() => {
                expect(label.text()).toEqual('Monthly Mortage Cost');
            });
    
            it("input Change", () => {
                input.props().onChange({target: {name: 'value', value: 123}});
    
                expect(homePage.state()[selector]).toBe(123);
            });
    
            it("Input Negative Number Return Zero", () => {
                input.props().onChange({target: { value: -1 }});
        
                expect(homePage.state()[selector]).toEqual(0);
            });
        });

        describe('Property appreciation', () => {
            const selector = 'property-appreciate';
            const input = homePage.find(`#${selector}`);
            const label = homePage.find({htmlFor: selector});
    
            it('Not Displayed', () => {
                expect(input.length).toEqual(1);
            });
    
            it('Wrong default value', () => {
                const defaultInput = Inputs.getInputByName(Inputs.ownershipFields, selector);
    
                expect(homePage.state()[selector]).toBe(defaultInput.value);
            });
    
            it('Label is wrong',() => {
                expect(label.text()).toEqual('Property appreciation per year');
            });
    
            it("input Change", () => {
                input.props().onChange({target: {name: 'value', value: 123}});
    
                expect(homePage.state()[selector]).toBe(123);
            });
    
            it("Input Negative Number Return Zero", () => {
                input.props().onChange({target: { value: -1 }});
        
                expect(homePage.state()[selector]).toEqual(0);
            });
        });

        describe('Taxes', () => {
            const selector = 'property-taxes';
            const input = homePage.find(`#${selector}`);
            const label = homePage.find({htmlFor: selector});
    
            it('Not Displayed', () => {
                expect(input.length).toEqual(1);
            });
    
            it('Wrong default value', () => {
                const defaultInput = Inputs.getInputByName(Inputs.ownershipFields, selector);
    
                expect(homePage.state()[selector]).toBe(defaultInput.value);
            });
    
            it('Label is wrong',() => {
                expect(label.text()).toEqual('Taxes');
            });
    
            it("input Change", () => {
                input.props().onChange({target: {name: 'value', value: 123}});
    
                expect(homePage.state()[selector]).toBe(123);
            });
    
            it("Input Negative Number Return Zero", () => {
                input.props().onChange({target: { value: -1 }});
        
                expect(homePage.state()[selector]).toEqual(0);
            });
        });

        describe('Maintenance', () => {
            const selector = 'property-fees';
            const input = homePage.find(`#${selector}`);
            const label = homePage.find({htmlFor: selector});
    
            it('Not Displayed', () => {
                expect(input.length).toEqual(1);
            });
    
            it('Wrong default value', () => {
                const defaultInput = Inputs.getInputByName(Inputs.ownershipFields, selector);
    
                expect(homePage.state()[selector]).toBe(defaultInput.value);
            });
    
            it('Label is wrong',() => {
                expect(label.text()).toEqual('Maintenance and fees');
            });
    
            it("input Change", () => {
                input.props().onChange({target: {name: 'value', value: 123}});
    
                expect(homePage.state()[selector]).toBe(123);
            });
    
            it("Input Negative Number Return Zero", () => {
                input.props().onChange({target: { value: -1 }});
        
                expect(homePage.state()[selector]).toEqual(0);
            });
        });
    });
});