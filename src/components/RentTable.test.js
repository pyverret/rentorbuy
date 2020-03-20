import React from "react";
import {configure, shallow} from "enzyme";
import RentTable from "./RentTable";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe('Rent Table', () => {
    const rentTable = shallow(<RentTable duration="10" rent="100" increase="5" />);

    it('Table is not rendered', () => {    
        expect(rentTable.find('table').length).toBe(1); 
    });

    it('Body is not rendered', () => {    
        expect(rentTable.find('tbody').length).toBe(1); 
    });

    it('Rows are not rendered', () => {
        expect(rentTable.find('tr').length).toBe(10); 
    });
});