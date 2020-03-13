import React from "react";
import {configure, shallow} from "enzyme";
import Home from "./Home";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe('Home Page', () => {
    const homePage = shallow(<Home />);

    it('Home Text Not Rendered', () => {
        expect(homePage.find('p').text()).toBe('Home Text') 
    });

    it('Montly Rent input not displayed', () => {
        expect(homePage.find('#rent-montly').length).toEqual(1);
    });

    // it("Label Text", () => {
    //     expect(inputGroup.find("label").text()).toEqual("Label Title");
    //   });

    //   it("Input Default Value", () => {
    //     expect(inputGroup.state("value")).toEqual(0);
    //   });

    //   it("input Change", () => {
    //     inputGroup.find("input").simulate("change", { target: { value: 123 } });
    
    //     expect(inputGroup.state("value")).toEqual(123);
    //   });
    
    //   it("Input Negative Number Return Zero", () => {
    //     inputGroup.find("input").simulate("change", { target: { value: -1 } });
    
    //     expect(inputGroup.state("value")).toEqual(0);
    //   });

    it('Montly Rent Increase input not displayed', () => {
        expect(homePage.find('#rent-increase-percentage').length).toEqual(1);
    });
});