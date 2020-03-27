export const commonFields = [
    {name:'duration', value: 10, text:'Number of year to compare', type: 'number'}
];

export const rentFields = [
    {name:'rent-monthly', value: 1000.00, text:'Monthly Rent Cost', type: 'number'},
    {name:'rent-increase-percentage', value: 1.8, text:'Yearly Rent Increase', type: 'number'},
    {name:'investment', value: 200.00, text:'Investment Per Month', type: 'number'},
    {name:'growth', value: 8, text:'Investment growth', type: 'number'}
];

export const ownershipFields = [
    {name:'property-value', value: 200000.00, text:'Property Value', type: 'number'},
    {name:'mortage-down-payment', value: 10000.00, text:'Down Payment', type: 'number'},
    {name:'mortage-amortization', value: 25, text:'Amortization period', type: 'number'},
    {name:'mortage-monthly', value: 900.00, text:'Monthly Mortage Cost', type: 'number'},
    {name:'property-appreciate', value: 4, text:'Property appreciation per year', type: 'number'},
    {name:'property-taxes', value: 2, text:'Taxes', type: 'number'},
    {name:'property-fees', value: 300.00, text:'Maintenance and fees', type: 'number'}
];

export function getInputByName (inputs, name) {
    return inputs.filter(field => {
        return field.name === name;
    })[0];
}

export default {commonFields, rentFields, ownershipFields, getInputByName};