import React from "react";
import {configure, shallow, mount} from "enzyme";
import Home from "./Home";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe('Home Page', () => {
    const homePage = shallow(<Home />);

    describe('Static content', () => {
        it('Home Text Not Rendered', () => {
            const title = homePage.find('p').text();
    
            expect(title).toBe('Home Text') 
        });
    });

    describe('Monthly Rent', () => {
        const selector = 'rent-monthly';
        const input = homePage.find(`#${selector}`);
        const label = homePage.find({htmlFor: selector});

        it('Not Displayed', () => {    
            expect(input.length).toBe(1);
            expect(label.length).toBe(1);
        });

        it('Wrong default value', () => {
            expect(homePage.state()[selector]).toBe(0);
        });

        it('Label is wrong',() => {
            expect(label.text()).toEqual('Monthly Rent Cost');
        });

        // TODO TEST STATE DOESNT CHANGE 
        it("input Change", () => {
            input.simulate('change', {target: {name: 'value', value: 123}});
            expect(homePage.state()[selector]).toBe(123);
        });

        // TODO: State does not change
        // it("Input Negative Number Return Zero", () => {
        //     input.simulate("change", { target: { value: -1 } });
    
        //     expect(homePage.state()[selector]).toEqual(0);
        // });
    });

    describe('Monthly Rent Increase', () => {
        const selector = 'rent-increase-percentage';
        const input = homePage.find(`#${selector}`);
        const label = homePage.find({htmlFor: selector});

        it('Not Displayed', () => {
            expect(input.length).toEqual(1);
        });

        it('Wrong default value', () => {
            expect(homePage.state()[selector]).toBe(0);
        });

        it('Label is wrong',() => {
            expect(label.text()).toEqual('Rent Increase');
        });

        // TODO TEST STATE DOESNT CHANGE 
        it("input Change", () => {
            input.simulate('change', {target: {name: 'value', value: 123}});
            expect(homePage.state()[selector]).toBe(123);
        });

        // TODO: State does not change
        // it("Input Negative Number Return Zero", () => {
        //     input.simulate("change", { target: { value: -1 } });
    
        //     expect(homePage.state()[selector]).toEqual(0);
        // });
    });
});