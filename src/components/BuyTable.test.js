import React from 'react';
import {configure, shallow} from 'enzyme';
import BuyTable from './BuyTable';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Rent Table', () => {
    const buyTable = shallow(<BuyTable />);

    it('Table is not rendered', () => {    
        expect(buyTable.find('table').length).toBe(1); 
    });

    it('Body is not rendered', () => {    
        expect(buyTable.find('tbody').length).toBe(1); 
    });
});